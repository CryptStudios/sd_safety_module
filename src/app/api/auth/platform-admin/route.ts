import { NextResponse } from "next/server";

import { updatePlatformAdminCredentials } from "@/lib/server/account-store";
import {
  createSessionToken,
  getSessionCookieName,
  requirePlatformAdminSession,
} from "@/lib/server/auth";

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function PATCH(request: Request) {
  const session = await requirePlatformAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    currentPassword?: string;
    newUsername?: string;
    newDisplayName?: string;
    newPassword?: string;
  };

  const currentPassword = readText(body.currentPassword);

  if (!currentPassword) {
    return NextResponse.json({ error: "Current password is required." }, { status: 400 });
  }

  try {
    const updated = await updatePlatformAdminCredentials({
      currentPassword,
      newUsername: readText(body.newUsername) || undefined,
      newDisplayName: readText(body.newDisplayName) || undefined,
      newPassword: readText(body.newPassword) || undefined,
    });

    const response = NextResponse.json({
      message: "Admin account updated.",
      username: updated.username,
      displayName: updated.displayName,
    });

    response.cookies.set({
      name: getSessionCookieName(),
      value: createSessionToken({
        userId: "platform-admin",
        username: updated.username,
        displayName: updated.displayName,
        role: "platform_admin",
      }),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to update admin account." },
      { status: 400 },
    );
  }
}
