import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseAdmin: SupabaseClient | null | undefined;
let uploadsBucketReady: Promise<void> | null = null;
const uploadsBucketName = "safetrack-uploads";
const appDataBucketName = "safetrack-data";

function readEnv(name: string) {
  return process.env[name] ?? "";
}

function deriveSupabaseUrlFromDatabaseUrl() {
  const databaseUrl = readEnv("DATABASE_URL");
  const match = databaseUrl.match(/@db\.([a-z0-9-]+)\.supabase\.co:/i);

  if (!match) {
    return "";
  }

  return `https://${match[1]}.supabase.co`;
}

function getSupabaseUrl() {
  return readEnv("SUPABASE_URL") || deriveSupabaseUrlFromDatabaseUrl();
}

function getSupabaseServiceRoleKey() {
  return readEnv("SUPABASE_SERVICE_ROLE_KEY");
}

export function getUploadsBucketName() {
  return uploadsBucketName;
}

export function getAppDataBucketName() {
  return appDataBucketName;
}

export function hasSupabaseStorageConfig() {
  return Boolean(getSupabaseUrl() && getSupabaseServiceRoleKey());
}

export function getSupabaseAdminClient() {
  if (supabaseAdmin !== undefined) {
    return supabaseAdmin;
  }

  const url = getSupabaseUrl();
  const key = getSupabaseServiceRoleKey();

  if (!url || !key) {
    supabaseAdmin = null;
    return supabaseAdmin;
  }

  supabaseAdmin = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      // Next.js patches the global fetch to cache requests made during
      // rendering/route handling by default. Without this, a deleted or
      // just-uploaded file can serve a stale cached response.
      fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
    },
  });

  return supabaseAdmin;
}

async function createUploadsBucket() {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    throw new Error(
      "File storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  const { error } = await supabase.storage.createBucket(uploadsBucketName, {
    public: false,
  });

  if (error && !/already exists/i.test(error.message)) {
    throw error;
  }
}

export function ensureUploadsBucket() {
  if (!uploadsBucketReady) {
    uploadsBucketReady = createUploadsBucket().catch((error) => {
      uploadsBucketReady = null;
      throw error;
    });
  }

  return uploadsBucketReady;
}
