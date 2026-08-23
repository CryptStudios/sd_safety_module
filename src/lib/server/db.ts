import { Pool } from "pg";

// Cached on globalThis, not just a module-level variable: in Next.js dev mode,
// editing any file this module depends on re-executes this module (Fast
// Refresh), which would otherwise reset `pool` to null and leak the old
// Pool's live connections against Supabase's connection-pooler session cap.
// globalThis survives that re-execution, so the same Pool (and its open
// sockets) is reused instead of accumulating a new one per edit.
const globalForDb = globalThis as unknown as {
  __safetrackPool?: Pool;
  __safetrackSchemaReady?: Promise<void> | null;
};

function getDatabaseUrl() {
  return process.env["DATABASE_URL"]?.trim() ?? "";
}

export function getPool() {
  if (globalForDb.__safetrackPool) {
    return globalForDb.__safetrackPool;
  }

  const connectionString = getDatabaseUrl();

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }

  globalForDb.__safetrackPool = new Pool({
    connectionString,
    ssl: connectionString.includes("localhost") ? undefined : { rejectUnauthorized: false },
    // Kept low: each serverless function instance gets its own pool, and
    // Supabase's session-mode pooler caps total clients across all of them.
    max: 3,
  });

  return globalForDb.__safetrackPool;
}

// Each statement runs as its own query rather than one batched multi-statement
// string. Postgres treats a batched string as one implicit transaction, so a
// single failing statement (e.g. an ALTER on a table shaped differently than
// expected) would otherwise roll back every other, unrelated statement too.
const schemaStatements = [
  `CREATE TABLE IF NOT EXISTS companies (
    id uuid PRIMARY KEY,
    name text NOT NULL,
    slug text NOT NULL UNIQUE,
    logo_url text,
    created_at timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS company_users (
    id uuid PRIMARY KEY,
    company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    username text NOT NULL,
    display_name text NOT NULL,
    role text NOT NULL CHECK (role IN ('admin', 'employee')),
    password_hash text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (company_id, username)
  )`,
  `ALTER TABLE company_users ADD COLUMN IF NOT EXISTS last_viewed_submissions_at timestamptz`,
  `CREATE TABLE IF NOT EXISTS platform_admin (
    id smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
    username text NOT NULL,
    display_name text NOT NULL,
    password_hash text NOT NULL,
    updated_at timestamptz NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS projects (
    id uuid PRIMARY KEY,
    company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    name text NOT NULL,
    number text,
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (company_id, name)
  )`,
  `CREATE TABLE IF NOT EXISTS employees (
    id uuid PRIMARY KEY,
    company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    name text NOT NULL,
    number text,
    created_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (company_id, name)
  )`,
  `ALTER TABLE employees ADD COLUMN IF NOT EXISTS number text`,
  // Full shape for a brand-new database. On an existing (pre-multi-tenant)
  // submissions table this is a no-op — the ALTERs below bring it up to date.
  `CREATE TABLE IF NOT EXISTS submissions (
    id text PRIMARY KEY,
    company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
    kind text NOT NULL,
    email text,
    worker_name text NOT NULL,
    attendee_names jsonb NOT NULL DEFAULT '[]'::jsonb,
    employer_name text NOT NULL,
    supervisor_name text NOT NULL,
    project_name text NOT NULL,
    notes text NOT NULL DEFAULT '',
    signature text NOT NULL,
    submitted_at timestamptz NOT NULL DEFAULT now(),
    presenter_status text,
    hard_copy_generated text,
    uploaded_file_name text,
    uploaded_file_path text,
    uploaded_original_name text,
    topic_slug text,
    topic_title text,
    category_slug text,
    category_title text,
    submitted_by_user_id text,
    submitted_by_username text,
    submitted_by_display_name text,
    submitted_by_role text
  )`,
  `ALTER TABLE submissions ADD COLUMN IF NOT EXISTS company_id uuid REFERENCES companies(id) ON DELETE CASCADE`,
  `ALTER TABLE submissions ADD COLUMN IF NOT EXISTS submitted_by_user_id text`,
  `ALTER TABLE submissions ADD COLUMN IF NOT EXISTS submitted_by_username text`,
  `ALTER TABLE submissions ADD COLUMN IF NOT EXISTS submitted_by_display_name text`,
  `ALTER TABLE submissions ADD COLUMN IF NOT EXISTS submitted_by_role text`,
  `CREATE INDEX IF NOT EXISTS submissions_company_id_idx ON submissions (company_id)`,
];

async function createSchema() {
  const db = getPool();

  for (const statement of schemaStatements) {
    await db.query(statement);
  }
}

export function ensureSchema() {
  if (!globalForDb.__safetrackSchemaReady) {
    globalForDb.__safetrackSchemaReady = createSchema().catch((error) => {
      globalForDb.__safetrackSchemaReady = null;
      throw error;
    });
  }

  return globalForDb.__safetrackSchemaReady;
}
