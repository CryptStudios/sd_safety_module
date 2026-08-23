import { NextResponse } from "next/server";

import {
  createSessionToken,
  getSessionCookieName,
} from "@/lib/server/auth";
import { authenticateCompanyUserByUsername, authenticatePlatformAdmin } from "@/lib/server/account-store";

export async function POST(request: Request) {
  const { loginType, username, password } = (await request.json()) as {
    loginType?: "platform" | "company";
    username?: string;
    password?: string;
  };

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 },
    );
  }

  if (loginType === "platform") {
    const platformAdmin = await authenticatePlatformAdmin(username.trim(), password);

    if (!platformAdmin) {
      return NextResponse.json({ error: "Invalid platform admin username or password." }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, redirectTo: "/dashboard" });

    response.cookies.set({
      name: getSessionCookieName(),
      value: createSessionToken({
        userId: "platform-admin",
        username: platformAdmin.username,
        displayName: platformAdmin.displayName,
        role: "platform_admin",
      }),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  }

  const authenticated = await authenticateCompanyUserByUsername(username.trim(), password);

  if (!authenticated) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true, redirectTo: "/workspace" });

  response.cookies.set({
    name: getSessionCookieName(),
    value: createSessionToken({
      companyId: authenticated.company.id,
      companySlug: authenticated.company.slug,
      companyName: authenticated.company.name,
      userId: authenticated.user.id,
      username: authenticated.user.username,
      displayName: authenticated.user.displayName,
      role: authenticated.user.role,
    }),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
