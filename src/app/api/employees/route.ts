import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getSessionCookieName, verifySessionToken } from "@/lib/server/auth";
import {
  addEmployees,
  deleteEmployee,
  extractCsvHeader,
  extractEmployeesFromCsv,
  listEmployees,
  replaceEmployees,
} from "@/lib/server/submission-store";

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

// A line prefixed with "#<number>" (e.g. "#1023 - Jane Doe") carries an employee
// number; anything else is treated as a plain name with no number.
const NUMBER_PREFIX_PATTERN = /^#\s*(\S+)\s*[-–—]\s*(.+)$/;

function parseEmployeeLine(line: string): { name: string; number: string | null } | null {
  const trimmed = line.trim();

  if (!trimmed) {
    return null;
  }

  const match = trimmed.match(NUMBER_PREFIX_PATTERN);

  if (match) {
    const name = match[2].trim();
    return name ? { name, number: match[1].trim() || null } : null;
  }

  return { name: trimmed, number: null };
}

function readEmployeeEntries(value: unknown): Array<{ name: string; number: string | null }> {
  const rawLines = Array.isArray(value)
    ? value.map((entry) => `${entry}`)
    : typeof value === "string"
      ? value.split(/\r?\n|,/)
      : [];

  return rawLines
    .map((line) => parseEmployeeLine(line))
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

  const employees = await listEmployees(session.companyId);

  return NextResponse.json({
    employees,
    count: employees.length,
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
        { error: "Choose which column holds the employee name." },
        { status: 400 },
      );
    }

    const entries = extractEmployeesFromCsv(
      csv,
      nameColumnIndex,
      numberColumnIndex !== null && !Number.isNaN(numberColumnIndex) ? numberColumnIndex : null,
    );

    if (entries.length === 0) {
      return NextResponse.json(
        { error: "No employee names were found in the uploaded CSV." },
        { status: 400 },
      );
    }

    const employees = await replaceEmployees(session.companyId, entries);

    return NextResponse.json({
      message: `Imported ${employees.length} employee names.`,
      employees,
      count: employees.length,
    });
  }

  const body = (await request.json()) as {
    mode?: "append" | "replace";
    names?: string[] | string;
  };
  const entries = readEmployeeEntries(body.names);

  if (entries.length === 0) {
    return NextResponse.json(
      { error: "Please provide at least one employee name." },
      { status: 400 },
    );
  }

  const employees =
    body.mode === "replace"
      ? await replaceEmployees(session.companyId, entries)
      : await addEmployees(session.companyId, entries);

  return NextResponse.json({
    message:
      body.mode === "replace"
        ? `Saved ${employees.length} employee names.`
        : `Added ${entries.length} employee name${entries.length === 1 ? "" : "s"}.`,
    employees,
    count: employees.length,
  });
}

export async function DELETE(request: Request) {
  const session = await isAuthorized();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { employeeId?: string };
  const employeeId = readText(body.employeeId);

  if (!employeeId) {
    return NextResponse.json({ error: "Employee id is required." }, { status: 400 });
  }

  const deleted = await deleteEmployee(session.companyId, employeeId);

  if (!deleted) {
    return NextResponse.json({ error: "Employee not found." }, { status: 404 });
  }

  const employees = await listEmployees(session.companyId);

  return NextResponse.json({
    message: "Employee deleted.",
    employees,
    count: employees.length,
  });
}
