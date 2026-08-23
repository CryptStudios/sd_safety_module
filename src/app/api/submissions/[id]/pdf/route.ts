import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getSessionCookieName, verifySessionToken } from "@/lib/server/auth";
import { getSubmissionById } from "@/lib/server/submission-store";
import { renderSubmissionPdf } from "@/lib/server/submission-pdf";

async function isAuthorized() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  return token ? verifySessionToken(token) : null;
}

function slugifyForFilename(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await isAuthorized();

  if (!session || session.role === "platform_admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const submission = await getSubmissionById(id, session.companyId);

  if (!submission) {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }

  const pdfBuffer = await renderSubmissionPdf(submission, session.companyName);
  const fileName = `${slugifyForFilename(submission.kind)}-${slugifyForFilename(submission.workerName) || "submission"}-${submission.id}.pdf`;

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
