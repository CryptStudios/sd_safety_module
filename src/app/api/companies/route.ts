import { NextResponse } from "next/server";

import { createCompany, deleteCompany, listCompanies } from "@/lib/server/account-store";
import { requirePlatformAdminSession } from "@/lib/server/auth";

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function GET() {
  const session = await requirePlatformAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const companies = await listCompanies();

  return NextResponse.json({
    companies,
    count: companies.length,
  });
}

export async function POST(request: Request) {
  const session = await requirePlatformAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    name?: string;
    slug?: string;
    logoUrl?: string;
    adminUsername?: string;
    adminDisplayName?: string;
    adminPassword?: string;
  };

  try {
    const result = await createCompany({
      name: readText(body.name),
      slug: readText(body.slug),
      logoUrl: readText(body.logoUrl),
      adminUsername: readText(body.adminUsername),
      adminDisplayName: readText(body.adminDisplayName),
      adminPassword: readText(body.adminPassword),
    });

    return NextResponse.json(
      {
        message: `Created ${result.company.name}.`,
        company: result.company,
        adminUser: {
          id: result.adminUser.id,
          username: result.adminUser.username,
          displayName: result.adminUser.displayName,
          role: result.adminUser.role,
          createdAt: result.adminUser.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create company." },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request) {
  const session = await requirePlatformAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { companyId?: string };
  const companyId = readText(body.companyId);

  if (!companyId) {
    return NextResponse.json({ error: "Company id is required." }, { status: 400 });
  }

  try {
    const deleted = await deleteCompany(companyId);

    if (!deleted) {
      return NextResponse.json({ error: "Company not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "Company deleted." });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to delete company." },
      { status: 400 },
    );
  }
}
