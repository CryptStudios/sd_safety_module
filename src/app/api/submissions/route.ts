import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getSessionCookieName, verifySessionToken } from "@/lib/server/auth";
import {
  createSubmission,
  deleteSubmission,
  listSubmissions,
  saveUploadedFile,
} from "@/lib/server/submission-store";
import type { SubmissionKind, SubmissionPayload } from "@/lib/submission-types";

const submissionKinds: SubmissionKind[] = [
  "toolbox-talk",
  "incident-investigation",
  "weekly-safety-inspection",
];

function isSubmissionKind(value: unknown): value is SubmissionKind {
  return typeof value === "string" && submissionKinds.includes(value as SubmissionKind);
}

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readOptionalChoice(value: unknown) {
  const text = readText(value).toLowerCase();
  return text === "yes" || text === "no" ? text : undefined;
}

function readAttendeeNames(value: unknown) {
  if (Array.isArray(value)) {
    return [...new Set(value.map((entry) => `${entry}`.trim()).filter(Boolean))];
  }

  if (typeof value !== "string" || !value.trim()) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as unknown;

    if (Array.isArray(parsed)) {
      return [...new Set(parsed.map((entry) => `${entry}`.trim()).filter(Boolean))];
    }
  } catch {
    return [...new Set(value.split(/\r?\n|,/).map((entry) => entry.trim()).filter(Boolean))];
  }

  return [];
}

function validatePayload(payload: unknown): SubmissionPayload | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const candidate = payload as Record<string, unknown>;

  if (!isSubmissionKind(candidate.kind)) {
    return null;
  }

  const normalized: SubmissionPayload = {
    kind: candidate.kind,
    email: readText(candidate.email) || undefined,
    workerName: readText(candidate.workerName),
    attendeeNames: readAttendeeNames(candidate.attendeeNames),
    employerName: readText(candidate.employerName),
    supervisorName: readText(candidate.supervisorName),
    projectName: readText(candidate.projectName),
    notes: readText(candidate.notes),
    signature: readText(candidate.signature),
    presenterStatus: readOptionalChoice(candidate.presenterStatus),
    hardCopyGenerated: readOptionalChoice(candidate.hardCopyGenerated),
    uploadedFileName: readText(candidate.uploadedFileName) || undefined,
    uploadedFilePath: readText(candidate.uploadedFilePath) || undefined,
    uploadedOriginalName: readText(candidate.uploadedOriginalName) || undefined,
    topicSlug: readText(candidate.topicSlug) || undefined,
    topicTitle: readText(candidate.topicTitle) || undefined,
    categorySlug: readText(candidate.categorySlug) || undefined,
    categoryTitle: readText(candidate.categoryTitle) || undefined,
  };

  if (
    !normalized.workerName ||
    !normalized.employerName ||
    !normalized.supervisorName ||
    !normalized.projectName ||
    !normalized.signature
  ) {
    return null;
  }

  if (normalized.kind === "toolbox-talk" && normalized.attendeeNames.length === 0) {
    return null;
  }

  return normalized;
}

async function validateFormData(
  formData: FormData,
  companyId: string,
): Promise<SubmissionPayload | null> {
  const kind = readText(formData.get("kind"));

  if (!isSubmissionKind(kind)) {
    return null;
  }

  const uploadedFile = formData.get("hardCopyUpload");
  let uploadFields: Pick<
    SubmissionPayload,
    "uploadedFileName" | "uploadedFilePath" | "uploadedOriginalName"
  > = {};

  if (uploadedFile instanceof File && uploadedFile.size > 0) {
    const savedFile = await saveUploadedFile(uploadedFile, companyId);
    uploadFields = {
      uploadedFileName: savedFile.storedFileName,
      uploadedFilePath: savedFile.storedPath,
      uploadedOriginalName: savedFile.originalName,
    };
  }

  return validatePayload({
    kind,
    email: formData.get("email"),
    workerName: formData.get("workerName"),
    attendeeNames: formData.get("attendeeNames"),
    employerName: formData.get("employerName"),
    supervisorName: formData.get("supervisorName"),
    projectName: formData.get("projectName"),
    notes: formData.get("notes"),
    signature: formData.get("signature"),
    presenterStatus: formData.get("presenterStatus"),
    hardCopyGenerated: formData.get("hardCopyGenerated"),
    topicSlug: formData.get("topicSlug"),
    topicTitle: formData.get("topicTitle"),
    categorySlug: formData.get("categorySlug"),
    categoryTitle: formData.get("categoryTitle"),
    ...uploadFields,
  });
}

async function isAuthorized() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return token ? verifySessionToken(token) : null;
}

export async function GET() {
  const session = await isAuthorized();

  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const submissions = await listSubmissions(session.companyId);

  return NextResponse.json({
    submissions,
    count: submissions.length,
  });
}

export async function POST(request: Request) {
  try {
    const session = await isAuthorized();

    if (!session || session.role === "platform_admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentType = request.headers.get("content-type") ?? "";
    const payload = contentType.includes("multipart/form-data")
      ? await validateFormData(await request.formData(), session.companyId)
      : validatePayload(await request.json());

    if (!payload) {
      return NextResponse.json(
        {
          error:
            "Invalid submission payload. Required fields are missing or incomplete.",
        },
        { status: 400 },
      );
    }

    const submission = await createSubmission({
      ...payload,
      companyId: session.companyId,
      submittedByUserId: session.userId,
      submittedByUsername: session.username,
      submittedByDisplayName: session.displayName,
      submittedByRole: session.role,
    });

    return NextResponse.json(
      {
        submission,
        message: "Submission recorded.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create submission.", error);

    return NextResponse.json(
      {
        error: "Unable to submit the form right now. Please try again.",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  const session = await isAuthorized();

  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = readText(searchParams.get("id"));

    if (!id) {
      return NextResponse.json({ error: "Submission id is required." }, { status: 400 });
    }

    const deleted = await deleteSubmission(id, session.companyId);

    if (!deleted) {
      return NextResponse.json({ error: "Submission not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Submission deleted." });
  } catch (error) {
    console.error("Failed to delete submission.", error);

    return NextResponse.json(
      {
        error: "Unable to delete the submission right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
