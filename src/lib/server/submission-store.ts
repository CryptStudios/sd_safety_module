import { randomUUID } from "node:crypto";
import path from "node:path";

import { ensureSchema, getPool } from "@/lib/server/db";
import {
  ensureUploadsBucket,
  getSupabaseAdminClient,
  getUploadsBucketName,
} from "@/lib/server/supabase-admin";
import type { SubmissionKind, SubmissionPayload, SubmissionRecord } from "@/lib/submission-types";

export type ProjectRecord = {
  id: string;
  name: string;
  number: string | null;
  createdAt: string;
};

type ProjectRow = {
  id: string;
  company_id: string;
  name: string;
  number: string | null;
  created_at: Date;
};

export type EmployeeRecord = {
  id: string;
  name: string;
  number: string | null;
  createdAt: string;
};

type EmployeeRow = {
  id: string;
  company_id: string;
  name: string;
  number: string | null;
  created_at: Date;
};

type SubmissionRow = {
  id: string;
  company_id: string;
  kind: string;
  email: string | null;
  worker_name: string;
  attendee_names: string[];
  employer_name: string;
  supervisor_name: string;
  project_name: string;
  notes: string;
  signature: string;
  submitted_at: Date;
  presenter_status: "yes" | "no" | null;
  hard_copy_generated: "yes" | "no" | null;
  uploaded_file_name: string | null;
  uploaded_file_path: string | null;
  uploaded_original_name: string | null;
  topic_slug: string | null;
  topic_title: string | null;
  category_slug: string | null;
  category_title: string | null;
  submitted_by_user_id: string | null;
  submitted_by_username: string | null;
  submitted_by_display_name: string | null;
  submitted_by_role: string | null;
};

async function db() {
  await ensureSchema();
  return getPool();
}

function mapProjectRow(row: ProjectRow): ProjectRecord {
  return {
    id: row.id,
    name: row.name,
    number: row.number,
    createdAt: row.created_at.toISOString(),
  };
}

function mapEmployeeRow(row: EmployeeRow): EmployeeRecord {
  return {
    id: row.id,
    name: row.name,
    number: row.number,
    createdAt: row.created_at.toISOString(),
  };
}

function mapSubmissionRow(row: SubmissionRow): SubmissionRecord {
  return {
    id: row.id,
    companyId: row.company_id,
    kind: row.kind as SubmissionKind,
    email: row.email ?? undefined,
    workerName: row.worker_name,
    attendeeNames: Array.isArray(row.attendee_names) ? row.attendee_names : [],
    employerName: row.employer_name,
    supervisorName: row.supervisor_name,
    projectName: row.project_name,
    notes: row.notes,
    signature: row.signature,
    submittedAt: row.submitted_at.toISOString(),
    presenterStatus: row.presenter_status ?? undefined,
    hardCopyGenerated: row.hard_copy_generated ?? undefined,
    uploadedFileName: row.uploaded_file_name ?? undefined,
    uploadedFilePath: row.uploaded_file_path ?? undefined,
    uploadedOriginalName: row.uploaded_original_name ?? undefined,
    topicSlug: row.topic_slug ?? undefined,
    topicTitle: row.topic_title ?? undefined,
    categorySlug: row.category_slug ?? undefined,
    categoryTitle: row.category_title ?? undefined,
    submittedByUserId: row.submitted_by_user_id ?? undefined,
    submittedByUsername: row.submitted_by_username ?? undefined,
    submittedByDisplayName: row.submitted_by_display_name ?? undefined,
    submittedByRole: (row.submitted_by_role as SubmissionRecord["submittedByRole"]) ?? undefined,
  };
}

function createSubmissionId() {
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeProjectEntries(entries: Array<{ name: string; number: string | null }>) {
  const seen = new Map<string, { name: string; number: string | null }>();

  for (const entry of entries) {
    const name = entry.name.trim();

    if (!name) {
      continue;
    }

    const number = entry.number?.trim() || null;
    seen.set(name, { name, number });
  }

  return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function normalizeEmployeeEntries(entries: Array<{ name: string; number: string | null }>) {
  const seen = new Map<string, { name: string; number: string | null }>();

  for (const entry of entries) {
    const name = entry.name.trim();

    if (!name) {
      continue;
    }

    const number = entry.number?.trim() || null;
    seen.set(name, { name, number });
  }

  return [...seen.values()].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );
}

function parseCsvLine(line: string) {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }

      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}

function unquote(value: string) {
  return value.replace(/^"(.*)"$/, "$1").trim();
}

/** The company's own CSV header row, so they can map which column is which. */
export function extractCsvHeader(csv: string) {
  const firstLine = csv.split(/\r?\n/).find((line) => line.trim().length > 0) ?? "";
  return parseCsvLine(firstLine).map(unquote);
}

/**
 * Extracts project name/number pairs using the company's own column choices
 * (from extractCsvHeader), rather than guessing based on header text. The
 * first row is always treated as the header and skipped.
 */
export function extractProjectsFromCsv(
  csv: string,
  nameColumnIndex: number,
  numberColumnIndex: number | null,
) {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  const dataRows = lines.slice(1).map(parseCsvLine);

  const entries = dataRows.map((row) => ({
    name: unquote(row[nameColumnIndex] ?? ""),
    number: numberColumnIndex !== null ? unquote(row[numberColumnIndex] ?? "") || null : null,
  }));

  return normalizeProjectEntries(entries);
}

/**
 * Extracts employee name/number pairs using the company's own column choices
 * (from extractCsvHeader), rather than guessing based on header text. The
 * first row is always treated as the header and skipped.
 */
export function extractEmployeesFromCsv(
  csv: string,
  nameColumnIndex: number,
  numberColumnIndex: number | null,
) {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  const dataRows = lines.slice(1).map(parseCsvLine);

  const entries = dataRows.map((row) => ({
    name: unquote(row[nameColumnIndex] ?? ""),
    number: numberColumnIndex !== null ? unquote(row[numberColumnIndex] ?? "") || null : null,
  }));

  return normalizeEmployeeEntries(entries);
}

export async function listProjects(companyId: string): Promise<ProjectRecord[]> {
  const pool = await db();
  const result = await pool.query<ProjectRow>(
    "SELECT * FROM projects WHERE company_id = $1 ORDER BY name ASC",
    [companyId],
  );
  return result.rows.map(mapProjectRow);
}

export async function addProjects(
  companyId: string,
  entries: Array<{ name: string; number: string | null }>,
): Promise<ProjectRecord[]> {
  const pool = await db();
  const normalized = normalizeProjectEntries(entries);
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    for (const entry of normalized) {
      await client.query(
        `INSERT INTO projects (id, company_id, name, number)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (company_id, name) DO UPDATE SET number = COALESCE(EXCLUDED.number, projects.number)`,
        [randomUUID(), companyId, entry.name, entry.number],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return listProjects(companyId);
}

export async function replaceProjects(
  companyId: string,
  entries: Array<{ name: string; number: string | null }>,
): Promise<ProjectRecord[]> {
  const pool = await db();
  const normalized = normalizeProjectEntries(entries);
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM projects WHERE company_id = $1", [companyId]);

    for (const entry of normalized) {
      await client.query(
        "INSERT INTO projects (id, company_id, name, number) VALUES ($1, $2, $3, $4)",
        [randomUUID(), companyId, entry.name, entry.number],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return listProjects(companyId);
}

export async function deleteProject(companyId: string, projectId: string): Promise<boolean> {
  const pool = await db();
  const result = await pool.query("DELETE FROM projects WHERE id = $1 AND company_id = $2", [
    projectId,
    companyId,
  ]);
  return (result.rowCount ?? 0) > 0;
}

export async function listEmployees(companyId: string): Promise<EmployeeRecord[]> {
  const pool = await db();
  const result = await pool.query<EmployeeRow>(
    "SELECT * FROM employees WHERE company_id = $1 ORDER BY name ASC",
    [companyId],
  );
  return result.rows.map(mapEmployeeRow);
}

export async function addEmployees(
  companyId: string,
  entries: Array<{ name: string; number: string | null }>,
): Promise<EmployeeRecord[]> {
  const pool = await db();
  const normalized = normalizeEmployeeEntries(entries);
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    for (const entry of normalized) {
      await client.query(
        `INSERT INTO employees (id, company_id, name, number)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (company_id, name) DO UPDATE SET number = COALESCE(EXCLUDED.number, employees.number)`,
        [randomUUID(), companyId, entry.name, entry.number],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return listEmployees(companyId);
}

export async function replaceEmployees(
  companyId: string,
  entries: Array<{ name: string; number: string | null }>,
): Promise<EmployeeRecord[]> {
  const pool = await db();
  const normalized = normalizeEmployeeEntries(entries);
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM employees WHERE company_id = $1", [companyId]);

    for (const entry of normalized) {
      await client.query(
        "INSERT INTO employees (id, company_id, name, number) VALUES ($1, $2, $3, $4)",
        [randomUUID(), companyId, entry.name, entry.number],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return listEmployees(companyId);
}

export async function deleteEmployee(companyId: string, employeeId: string): Promise<boolean> {
  const pool = await db();
  const result = await pool.query("DELETE FROM employees WHERE id = $1 AND company_id = $2", [
    employeeId,
    companyId,
  ]);
  return (result.rowCount ?? 0) > 0;
}

export async function listSubmissions(companyId: string): Promise<SubmissionRecord[]> {
  const pool = await db();
  const result = await pool.query<SubmissionRow>(
    "SELECT * FROM submissions WHERE company_id = $1 ORDER BY submitted_at DESC",
    [companyId],
  );
  return result.rows.map(mapSubmissionRow);
}

export async function getSubmissionById(
  id: string,
  companyId: string,
): Promise<SubmissionRecord | null> {
  const pool = await db();
  const result = await pool.query<SubmissionRow>(
    "SELECT * FROM submissions WHERE id = $1 AND company_id = $2",
    [id, companyId],
  );
  const row = result.rows[0];
  return row ? mapSubmissionRow(row) : null;
}

export async function createSubmission(payload: SubmissionPayload): Promise<SubmissionRecord> {
  if (!payload.companyId) {
    throw new Error("Company id is required to create a submission.");
  }

  const pool = await db();
  const id = createSubmissionId();

  const result = await pool.query<SubmissionRow>(
    `INSERT INTO submissions (
       id, company_id, kind, email, worker_name, attendee_names, employer_name,
       supervisor_name, project_name, notes, signature, submitted_at, presenter_status,
       hard_copy_generated, uploaded_file_name, uploaded_file_path,
       uploaded_original_name, topic_slug, topic_title, category_slug, category_title,
       submitted_by_user_id, submitted_by_username, submitted_by_display_name, submitted_by_role
     ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
     RETURNING *`,
    [
      id,
      payload.companyId,
      payload.kind,
      payload.email ?? null,
      payload.workerName,
      JSON.stringify(payload.attendeeNames),
      payload.employerName,
      payload.supervisorName,
      payload.projectName,
      payload.notes,
      payload.signature,
      new Date(),
      payload.presenterStatus ?? null,
      payload.hardCopyGenerated ?? null,
      payload.uploadedFileName ?? null,
      payload.uploadedFilePath ?? null,
      payload.uploadedOriginalName ?? null,
      payload.topicSlug ?? null,
      payload.topicTitle ?? null,
      payload.categorySlug ?? null,
      payload.categoryTitle ?? null,
      payload.submittedByUserId ?? null,
      payload.submittedByUsername ?? null,
      payload.submittedByDisplayName ?? null,
      payload.submittedByRole ?? null,
    ],
  );

  return mapSubmissionRow(result.rows[0]);
}

export async function deleteSubmission(id: string, companyId: string): Promise<boolean> {
  const pool = await db();
  const existing = await pool.query<SubmissionRow>(
    "SELECT * FROM submissions WHERE id = $1 AND company_id = $2",
    [id, companyId],
  );

  const row = existing.rows[0];

  if (!row) {
    return false;
  }

  await pool.query("DELETE FROM submissions WHERE id = $1 AND company_id = $2", [id, companyId]);

  if (row.uploaded_file_name) {
    await deleteStoredUpload(companyId, row.uploaded_file_name);
  }

  return true;
}

async function deleteStoredUpload(companyId: string, uploadedFileName: string) {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return;
  }

  await supabase.storage.from(getUploadsBucketName()).remove([`${companyId}/${uploadedFileName}`]);
}

export async function saveUploadedFile(file: File, companyId: string) {
  await ensureUploadsBucket();

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    throw new Error("File storage is not configured.");
  }

  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const storedFileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${sanitizedName}`;
  const storagePath = `${companyId}/${storedFileName}`;
  const bytes = await file.arrayBuffer();

  const { error } = await supabase.storage
    .from(getUploadsBucketName())
    .upload(storagePath, Buffer.from(bytes), {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return {
    storedFileName,
    storedPath: storagePath,
    originalName: file.name,
  };
}

export async function downloadUploadedFile(fileName: string, companyId: string) {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    throw new Error("File storage is not configured.");
  }

  const safeFileName = path.basename(fileName);
  const storagePath = `${companyId}/${safeFileName}`;
  const { data, error } = await supabase.storage.from(getUploadsBucketName()).download(storagePath);

  if (error || !data) {
    throw new Error(error?.message ?? "File not found.");
  }

  const arrayBuffer = await data.arrayBuffer();

  return {
    body: Buffer.from(arrayBuffer),
    contentType: data.type || "application/octet-stream",
    fileName: safeFileName,
  };
}
