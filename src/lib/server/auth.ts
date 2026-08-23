import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

import { findCompanyById, type UserRole } from "@/lib/server/account-store";

const sessionCookieName = "safety_module_session";
const sessionTtlMs = 1000 * 60 * 60 * 24 * 7;

type PlatformSessionPayload = {
  userId: "platform-admin";
  username: string;
  displayName: string;
  role: "platform_admin";
  exp: number;
};

type CompanySessionPayload = {
  companyId: string;
  companySlug: string;
  companyName: string;
  userId: string;
  username: string;
  displayName: string;
  role: Exclude<UserRole, "platform_admin">;
  exp: number;
};

type SessionPayload = PlatformSessionPayload | CompanySessionPayload;

export type AuthenticatedSession =
  | Omit<PlatformSessionPayload, "exp">
  | Omit<CompanySessionPayload, "exp">;

function readEnv(name: string) {
  return process.env[name] ?? "";
}

function getSessionSecret() {
  return readEnv("SAFETY_MODULE_SESSION_SECRET") || readEnv("SAFETRACK_SESSION_SECRET") || "change-me-in-production";
}

function signValue(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

export function createSessionToken(session: AuthenticatedSession) {
  const payload = Buffer.from(
    JSON.stringify({
      ...session,
      exp: Date.now() + sessionTtlMs,
    }),
  ).toString("base64url");

  return `${payload}.${signValue(payload)}`;
}

export function verifySessionToken(token: string): AuthenticatedSession | null {
  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return null;
  }

  const expected = signValue(payload);

  try {
    if (
      signature.length !== expected.length ||
      !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
    ) {
      return null;
    }

    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as SessionPayload;

    if (typeof parsed.exp !== "number" || parsed.exp <= Date.now()) {
      return null;
    }

    if (parsed.role === "platform_admin") {
      if (!parsed.username || !parsed.displayName || parsed.userId !== "platform-admin") {
        return null;
      }

      return {
        userId: parsed.userId,
        username: parsed.username,
        displayName: parsed.displayName,
        role: parsed.role,
      };
    }

    if (
      !parsed.companyId ||
      !parsed.companySlug ||
      !parsed.companyName ||
      !parsed.userId ||
      !parsed.username ||
      !parsed.displayName ||
      (parsed.role !== "admin" && parsed.role !== "employee")
    ) {
      return null;
    }

    return {
      companyId: parsed.companyId,
      companySlug: parsed.companySlug,
      companyName: parsed.companyName,
      userId: parsed.userId,
      username: parsed.username,
      displayName: parsed.displayName,
      role: parsed.role,
    };
  } catch {
    return null;
  }
}

export async function getAuthenticatedSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(sessionCookieName)?.value;
  const session = token ? verifySessionToken(token) : null;

  if (!session) {
    return null;
  }

  if (session.role === "platform_admin") {
    return session;
  }

  const company = await findCompanyById(session.companyId);

  if (!company) {
    return null;
  }

  return {
    ...session,
    companyName: company.name,
    companySlug: company.slug,
  };
}

export async function requireCompanyAdminSession() {
  const session = await getAuthenticatedSession();
  return session?.role === "admin" ? session : null;
}

export async function requirePlatformAdminSession() {
  const session = await getAuthenticatedSession();
  return session?.role === "platform_admin" ? session : null;
}

export function getSessionCookieName() {
  return sessionCookieName;
}
