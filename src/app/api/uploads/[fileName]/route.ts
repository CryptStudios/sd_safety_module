import path from "node:path";

import { NextResponse } from "next/server";

import { getAuthenticatedSession } from "@/lib/server/auth";
import { downloadUploadedFile } from "@/lib/server/submission-store";

type UploadRouteProps = {
  params: Promise<{
    fileName: string;
  }>;
};

export async function GET(_: Request, { params }: UploadRouteProps) {
  const session = await getAuthenticatedSession();

  if (!session || session.role === "platform_admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { fileName } = await params;
  const safeName = path.basename(fileName);

  try {
    const file = await downloadUploadedFile(safeName, session.companyId);

    return new NextResponse(file.body, {
      headers: {
        "Content-Type": file.contentType,
        "Content-Disposition": `attachment; filename="${file.fileName}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }
}
