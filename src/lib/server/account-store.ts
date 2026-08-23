import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "node:crypto";

import { ensureSchema, getPool } from "@/lib/server/db";

export type UserRole = "platform_admin" | "admin" | "employee";

export type CompanyRecord = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  createdAt: string;
};

export type UserRecord = {
  id: string;
  companyId: string;
  username: string;
  displayName: string;
  role: Exclude<UserRole, "platform_admin">;
  passwordHash: string;
  createdAt: string;
};

export type PlatformAdminRecord = {
  username: string;
  displayName: string;
};

type CompanyRow = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  created_at: Date;
};

type UserRow = {
  id: string;
  company_id: string;
  username: string;
  display_name: string;
  role: "admin" | "employee";
  password_hash: string;
  created_at: Date;
};

type PlatformAdminRow = {
  username: string;
  display_name: string;
  password_hash: string;
};

const platformAdminUsername =
  process.env["SAFETY_MODULE_PLATFORM_ADMIN_USERNAME"]?.trim() || "";
const platformAdminPassword =
  process.env["SAFETY_MODULE_PLATFORM_ADMIN_PASSWORD"]?.trim() || "";
const platformAdminDisplayName =
  process.env["SAFETY_MODULE_PLATFORM_ADMIN_DISPLAY_NAME"]?.trim() || "Platform Administrator";

function mapCompanyRow(row: CompanyRow): CompanyRecord {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    logoUrl: row.logo_url ?? undefined,
    createdAt: row.created_at.toISOString(),
  };
}

function mapUserRow(row: UserRow): UserRecord {
  return {
    id: row.id,
    companyId: row.company_id,
    username: row.username,
    displayName: row.display_name,
    role: row.role,
    passwordHash: row.password_hash,
    createdAt: row.created_at.toISOString(),
  };
}

async function db() {
  await ensureSchema();
  return getPool();
}

function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");

  if (!salt || !hash) {
    return false;
  }

  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");

  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

function normalizeUsername(username: string) {
  return username.trim().toLowerCase();
}

function normalizeCompanySlug(slug: string) {
  return slug.trim().toLowerCase();
}

function sanitizeSlug(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "company";
}

async function ensurePlatformAdminSeeded(): Promise<PlatformAdminRow> {
  const pool = await db();
  const existing = await pool.query<PlatformAdminRow>("SELECT * FROM platform_admin WHERE id = 1");

  if (existing.rows[0]) {
    return existing.rows[0];
  }

  if (!platformAdminUsername || !platformAdminPassword) {
    throw new Error(
      "Platform admin credentials are missing. Set SAFETY_MODULE_PLATFORM_ADMIN_USERNAME and SAFETY_MODULE_PLATFORM_ADMIN_PASSWORD.",
    );
  }

  const seeded = await pool.query<PlatformAdminRow>(
    `INSERT INTO platform_admin (id, username, display_name, password_hash)
     VALUES (1, $1, $2, $3)
     ON CONFLICT (id) DO NOTHING
     RETURNING *`,
    [
      normalizeUsername(platformAdminUsername),
      platformAdminDisplayName,
      hashPassword(platformAdminPassword),
    ],
  );

  if (seeded.rows[0]) {
    return seeded.rows[0];
  }

  const reread = await pool.query<PlatformAdminRow>("SELECT * FROM platform_admin WHERE id = 1");
  return reread.rows[0];
}

export async function getPlatformAdminRecord(): Promise<PlatformAdminRecord> {
  const row = await ensurePlatformAdminSeeded();
  return { username: row.username, displayName: row.display_name };
}

export async function updatePlatformAdminCredentials(input: {
  currentPassword: string;
  newUsername?: string;
  newDisplayName?: string;
  newPassword?: string;
}): Promise<PlatformAdminRecord> {
  const pool = await db();
  const row = await ensurePlatformAdminSeeded();

  if (!verifyPassword(input.currentPassword, row.password_hash)) {
    throw new Error("Current password is incorrect.");
  }

  const nextUsername = input.newUsername ? normalizeUsername(input.newUsername) : row.username;
  const nextDisplayName = input.newDisplayName?.trim() || row.display_name;

  if (!nextUsername) {
    throw new Error("Username is required.");
  }

  if (input.newPassword && input.newPassword.trim().length < 6) {
    throw new Error("New password must be at least 6 characters.");
  }

  const nextPasswordHash = input.newPassword ? hashPassword(input.newPassword.trim()) : row.password_hash;

  const result = await pool.query<PlatformAdminRow>(
    `UPDATE platform_admin SET username = $1, display_name = $2, password_hash = $3, updated_at = now()
     WHERE id = 1 RETURNING *`,
    [nextUsername, nextDisplayName, nextPasswordHash],
  );

  const updated = result.rows[0];

  return { username: updated.username, displayName: updated.display_name };
}

export async function listCompanies() {
  const pool = await db();
  const result = await pool.query<CompanyRow>("SELECT * FROM companies ORDER BY name ASC");
  return result.rows.map(mapCompanyRow);
}

export async function findCompanyBySlug(companySlug: string) {
  const pool = await db();
  const normalizedSlug = normalizeCompanySlug(companySlug);
  const result = await pool.query<CompanyRow>("SELECT * FROM companies WHERE slug = $1", [normalizedSlug]);
  const row = result.rows[0];
  return row ? mapCompanyRow(row) : null;
}

export async function findCompanyById(companyId: string) {
  const pool = await db();
  const result = await pool.query<CompanyRow>("SELECT * FROM companies WHERE id = $1", [companyId]);
  const row = result.rows[0];
  return row ? mapCompanyRow(row) : null;
}

export async function authenticatePlatformAdmin(username: string, password: string) {
  const row = await ensurePlatformAdminSeeded();

  if (normalizeUsername(username) !== row.username || !verifyPassword(password, row.password_hash)) {
    return null;
  }

  return {
    username: row.username,
    displayName: row.display_name,
    role: "platform_admin" as const,
  };
}

export async function authenticateCompanyUserByUsername(username: string, password: string) {
  const pool = await db();
  const normalizedUsername = normalizeUsername(username);

  const result = await pool.query<UserRow>(
    "SELECT * FROM company_users WHERE username = $1",
    [normalizedUsername],
  );

  const matchedRow = result.rows.find((row) => verifyPassword(password, row.password_hash));

  if (!matchedRow) {
    return null;
  }

  const user = mapUserRow(matchedRow);
  const company = await findCompanyById(user.companyId);

  if (!company) {
    return null;
  }

  return { company, user };
}

export async function listCompanyUsers(companyId: string) {
  const pool = await db();
  const result = await pool.query<UserRow>(
    "SELECT * FROM company_users WHERE company_id = $1 ORDER BY display_name ASC, username ASC",
    [companyId],
  );
  return result.rows.map(mapUserRow);
}

// Null means this admin has never had a "last viewed" checkpoint recorded —
// callers should treat that as "nothing is new yet" rather than flagging
// every existing submission, so a brand-new admin (or one from before this
// column existed) doesn't see a flood of stale "new" badges.
export async function getLastViewedSubmissionsAt(userId: string): Promise<string | null> {
  const pool = await db();
  const result = await pool.query<{ last_viewed_submissions_at: Date | null }>(
    "SELECT last_viewed_submissions_at FROM company_users WHERE id = $1",
    [userId],
  );
  const value = result.rows[0]?.last_viewed_submissions_at;
  return value ? value.toISOString() : null;
}

export async function markSubmissionsViewed(userId: string): Promise<void> {
  const pool = await db();
  await pool.query("UPDATE company_users SET last_viewed_submissions_at = now() WHERE id = $1", [
    userId,
  ]);
}

export async function createCompany(input: {
  name: string;
  slug?: string;
  logoUrl?: string;
  adminUsername: string;
  adminDisplayName: string;
  adminPassword: string;
}) {
  const pool = await db();
  const name = input.name.trim();
  const slug = sanitizeSlug(input.slug?.trim() || input.name);
  const adminUsername = normalizeUsername(input.adminUsername);
  const adminPassword = input.adminPassword.trim();

  if (!name) {
    throw new Error("Company name is required.");
  }

  if (!adminUsername) {
    throw new Error("Admin username is required.");
  }

  if (adminPassword.length < 6) {
    throw new Error("Admin password must be at least 6 characters.");
  }

  const existingSlug = await pool.query("SELECT id FROM companies WHERE slug = $1", [slug]);

  if ((existingSlug.rowCount ?? 0) > 0) {
    throw new Error("That company slug is already in use.");
  }

  const companyId = randomUUID();
  const logoUrl = input.logoUrl?.trim() || "/submit-daily-safety-logo.png";

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const companyResult = await client.query<CompanyRow>(
      "INSERT INTO companies (id, name, slug, logo_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [companyId, name, slug, logoUrl],
    );

    const adminUserResult = await client.query<UserRow>(
      `INSERT INTO company_users (id, company_id, username, display_name, role, password_hash)
       VALUES ($1, $2, $3, $4, 'admin', $5) RETURNING *`,
      [
        randomUUID(),
        companyId,
        adminUsername,
        input.adminDisplayName.trim() || adminUsername,
        hashPassword(adminPassword),
      ],
    );

    await client.query("COMMIT");

    return {
      company: mapCompanyRow(companyResult.rows[0]),
      adminUser: mapUserRow(adminUserResult.rows[0]),
    };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export async function createCompanyUser(input: {
  companyId: string;
  username: string;
  displayName: string;
  role: Exclude<UserRole, "platform_admin">;
  password: string;
}) {
  const pool = await db();
  const normalizedUsername = normalizeUsername(input.username);

  if (!normalizedUsername) {
    throw new Error("Username is required.");
  }

  if (input.password.trim().length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  const existingUser = await pool.query(
    "SELECT id FROM company_users WHERE company_id = $1 AND username = $2",
    [input.companyId, normalizedUsername],
  );

  if ((existingUser.rowCount ?? 0) > 0) {
    throw new Error("That username is already in use for this company.");
  }

  const result = await pool.query<UserRow>(
    `INSERT INTO company_users (id, company_id, username, display_name, role, password_hash)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [
      randomUUID(),
      input.companyId,
      normalizedUsername,
      input.displayName.trim() || normalizedUsername,
      input.role,
      hashPassword(input.password),
    ],
  );

  return mapUserRow(result.rows[0]);
}

export async function deleteCompanyUser(companyId: string, userId: string) {
  const pool = await db();
  const target = await pool.query<UserRow>(
    "SELECT * FROM company_users WHERE id = $1 AND company_id = $2",
    [userId, companyId],
  );

  const targetRow = target.rows[0];

  if (!targetRow) {
    return false;
  }

  if (targetRow.role === "admin") {
    const adminCount = await pool.query(
      "SELECT count(*)::int AS count FROM company_users WHERE company_id = $1 AND role = 'admin'",
      [companyId],
    );

    if ((adminCount.rows[0]?.count ?? 0) <= 1) {
      throw new Error("Each company must keep at least one admin account.");
    }
  }

  await pool.query("DELETE FROM company_users WHERE id = $1 AND company_id = $2", [userId, companyId]);
  return true;
}

export async function updateCompanySettings(companyId: string, updates: { name?: string; logoUrl?: string }) {
  const pool = await db();
  const company = await findCompanyById(companyId);

  if (!company) {
    throw new Error("Company not found.");
  }

  const name = updates.name?.trim() || company.name;
  const logoUrl = updates.logoUrl?.trim() || company.logoUrl;

  const result = await pool.query<CompanyRow>(
    "UPDATE companies SET name = $1, logo_url = $2 WHERE id = $3 RETURNING *",
    [name, logoUrl, companyId],
  );

  return mapCompanyRow(result.rows[0]);
}

export async function deleteCompany(companyId: string) {
  const pool = await db();
  const result = await pool.query("DELETE FROM companies WHERE id = $1", [companyId]);
  return (result.rowCount ?? 0) > 0;
}
