import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getSessionCookieName, verifySessionToken } from "@/lib/server/auth";
import {
  addProjects,
  deleteProject,
  extractCsvHeader,
  extractProjectsFromCsv,
  listProjects,
  replaceProjects,
} from "@/lib/server/submission-store";

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readManualEntries(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry) => {
      if (!entry || typeof entry !== "object") {
        return null;
      }

      const candidate = entry as Record<string, unknown>;
      const name = readText(candidate.name);

      if (!name) {
        return null;
      }

      return { name, number: readText(candidate.number) || null };
    })
    .filter((entry): entry is { name: string; number: string | null } => entry !== null);
}

async function isAuthorized() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  const session = token ? verifySessionToken(token) : null;
  return session?.role === "admin" ? session : null;
}

export async function GET() {
  const session = await isAuthorized();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const projects = await listProjects(session.companyId);

  return NextResponse.json({
    projects,
    count: projects.length,
  });
}

export async function POST(request: Request) {
  const session = await isAuthorized();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const csvFile = formData.get("csvFile");

    if (!(csvFile instanceof File) || csvFile.size === 0) {
      return NextResponse.json({ error: "Please upload a CSV file." }, { status: 400 });
    }

    const csv = await csvFile.text();

    if (readText(formData.get("mode")) === "preview") {
      const headers = extractCsvHeader(csv);

      if (headers.length === 0) {
        return NextResponse.json({ error: "The CSV file appears to be empty." }, { status: 400 });
      }

      return NextResponse.json({ headers });
    }

    const nameColumnIndexRaw = readText(formData.get("nameColumnIndex"));
    const numberColumnIndexRaw = readText(formData.get("numberColumnIndex"));
    const nameColumnIndex = Number.parseInt(nameColumnIndexRaw, 10);
    const numberColumnIndex = numberColumnIndexRaw ? Number.parseInt(numberColumnIndexRaw, 10) : null;

    if (Number.isNaN(nameColumnIndex)) {
      return NextResponse.json(
        { error: "Choose which column holds the project name." },
        { status: 400 },
      );
    }

    const entries = extractProjectsFromCsv(
      csv,
      nameColumnIndex,
      numberColumnIndex !== null && !Number.isNaN(numberColumnIndex) ? numberColumnIndex : null,
    );

    if (entries.length === 0) {
      return NextResponse.json(
        { error: "No project names were found in the uploaded CSV." },
        { status: 400 },
      );
    }

    const projects = await replaceProjects(session.companyId, entries);

    return NextResponse.json({
      message: `Imported ${projects.length} projects.`,
      projects,
      count: projects.length,
    });
  }

  const body = (await request.json()) as {
    name?: string;
    number?: string;
    entries?: unknown;
  };

  const entries = Array.isArray(body.entries)
    ? readManualEntries(body.entries)
    : readText(body.name)
      ? [{ name: readText(body.name), number: readText(body.number) || null }]
      : [];

  if (entries.length === 0) {
    return NextResponse.json({ error: "Please provide at least one project name." }, { status: 400 });
  }

  const projects = await addProjects(session.companyId, entries);

  return NextResponse.json({
    message: `Added ${entries.length} project${entries.length === 1 ? "" : "s"}.`,
    projects,
    count: projects.length,
  });
}

export async function DELETE(request: Request) {
  const session = await isAuthorized();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { projectId?: string };
  const projectId = readText(body.projectId);

  if (!projectId) {
    return NextResponse.json({ error: "Project id is required." }, { status: 400 });
  }

  const deleted = await deleteProject(session.companyId, projectId);

  if (!deleted) {
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }

  const projects = await listProjects(session.companyId);

  return NextResponse.json({
    message: "Project deleted.",
    projects,
    count: projects.length,
  });
}
