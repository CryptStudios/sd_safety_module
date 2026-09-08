import Link from "next/link";
import { redirect } from "next/navigation";

import { CompanyUserManager } from "@/components/company-user-manager";
import { DashboardRecords } from "@/components/dashboard-records";
import { EmployeeRosterManager } from "@/components/employee-roster-manager";
import { LogoutButton } from "@/components/logout-button";
import { PlatformAdminAccount } from "@/components/platform-admin-account";
import { PlatformCompanyManager } from "@/components/platform-company-manager";
import { ProjectManager } from "@/components/project-manager";
import {
  getLastViewedSubmissionsAt,
  listCompanies,
  listCompanyUsers,
} from "@/lib/server/account-store";
import { getAuthenticatedSession } from "@/lib/server/auth";
import {
  listEmployees,
  listProjects,
  listSubmissions,
} from "@/lib/server/submission-store";

export default async function DashboardPage() {
  const session = await getAuthenticatedSession();

  if (!session) {
    redirect("/login");
  }

  if (session.role === "employee") {
    redirect("/workspace");
  }

  if (session.role === "platform_admin") {
    const companies = await listCompanies();

    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-hi-deep">Platform Admin</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Platform company dashboard
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
                Create companies and first admin accounts here before handing off each
                Safety Module workspace to its company team.
              </p>
            </div>
            <LogoutButton />
          </div>
        </section>

        <PlatformCompanyManager initialCompanies={companies} />
        <PlatformAdminAccount currentUsername={session.username} currentDisplayName={session.displayName} />
      </div>
    );
  }

  let submissions = [] as Awaited<ReturnType<typeof listSubmissions>>;
  let projects = [] as Awaited<ReturnType<typeof listProjects>>;
  let employees = [] as Awaited<ReturnType<typeof listEmployees>>;
  let users = [] as Awaited<ReturnType<typeof listCompanyUsers>>;
  let lastViewedSubmissionsAt: string | null = null;
  let loadError = false;

  try {
    [submissions, projects, employees, users, lastViewedSubmissionsAt] = await Promise.all([
      listSubmissions(session.companyId),
      listProjects(session.companyId),
      listEmployees(session.companyId),
      listCompanyUsers(session.companyId),
      getLastViewedSubmissionsAt(session.userId),
    ]);
  } catch (error) {
    loadError = true;
    console.error("Failed to load dashboard submissions.", error);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-hi-deep">{session.companyName}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Company admin dashboard
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
              Responses are sorted newest first. You can manage user accounts, crew
              rosters, projects, uploaded hard copies, and every other company form record here.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/workspace"
              className="inline-flex w-full items-center justify-center rounded-full border border-rule px-5 py-3 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep sm:w-auto"
            >
              Employee Workspace
            </Link>
            <Link
              href="/#categories"
              className="inline-flex w-full items-center justify-center rounded-full bg-hi px-5 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep sm:w-auto"
            >
              Open Learning Categories
            </Link>
            <LogoutButton />
          </div>
        </div>
      </section>

      <ProjectManager initialProjects={projects} />
      <EmployeeRosterManager initialEmployees={employees} />
      <CompanyUserManager
        initialUsers={users.map((user) => ({
          id: user.id,
          username: user.username,
          displayName: user.displayName,
          role: user.role,
          createdAt: user.createdAt,
        }))}
      />

      <DashboardRecords
        initialSubmissions={submissions}
        loadError={loadError}
        lastViewedSubmissionsAt={lastViewedSubmissionsAt}
      />
    </div>
  );
}
