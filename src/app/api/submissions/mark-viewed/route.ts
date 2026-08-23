import { NextResponse } from "next/server";

import { markSubmissionsViewed } from "@/lib/server/account-store";
import { requireCompanyAdminSession } from "@/lib/server/auth";

export async function POST() {
  const session = await requireCompanyAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await markSubmissionsViewed(session.userId);

  return NextResponse.json({ message: "Marked as viewed." });
}
