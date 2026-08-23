import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  createCompanyUser,
  deleteCompanyUser,
  listCompanyUsers,
  type UserRole,
} from "@/lib/server/account-store";
import { getSessionCookieName, verifySessionToken } from "@/lib/server/auth";

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readRole(value: unknown): Exclude<UserRole, "platform_admin"> | null {
  return value === "admin" || value === "employee" ? value : null;
}

async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  const session = token ? verifySessionToken(token) : null;
  return session?.role === "admin" ? session : null;
}

export async function GET() {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const users = await listCompanyUsers(session.companyId);

  return NextResponse.json({
    users: users.map((user) => ({
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      role: user.role,
      createdAt: user.createdAt,
    })),
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    username?: string;
    displayName?: string;
    role?: UserRole;
    password?: string;
  };

  const role = readRole(body.role);
  const username = readText(body.username);
  const password = readText(body.password);
  const displayName = readText(body.displayName) || username;

  if (!role || !username || !password) {
    return NextResponse.json(
      { error: "Username, password, and role are required." },
      { status: 400 },
    );
  }

  try {
    const user = await createCompanyUser({
      companyId: session.companyId,
      username,
      displayName,
      role,
      password,
    });

    return NextResponse.json(
      {
        message: `Created ${user.role} account for ${user.displayName}.`,
        user: {
          id: user.id,
          username: user.username,
          displayName: user.displayName,
          role: user.role,
          createdAt: user.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to create user.",
      },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request) {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { userId?: string };
  const userId = readText(body.userId);

  if (!userId) {
    return NextResponse.json({ error: "User id is required." }, { status: 400 });
  }

  if (userId === session.userId) {
    return NextResponse.json(
      { error: "Sign in with another admin before deleting your own account." },
      { status: 400 },
    );
  }

  try {
    const deleted = await deleteCompanyUser(session.companyId, userId);

    if (!deleted) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted." });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to delete user." },
      { status: 400 },
    );
  }
}
