import Link from "next/link";
import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/logout-button";
import { getAuthenticatedSession } from "@/lib/server/auth";

const formLinks = [
  {
    href: "/#categories",
    title: "Toolbox Talk Attendance",
    description: "Start in Learning Categories, open the Toolbox Talk topic, then submit attendance.",
  },
  {
    href: "/forms/incident-investigation",
    title: "Incident / Accident Investigation",
    description: "Complete the incident and accident investigation report.",
  },
  {
    href: "/forms/weekly-safety-inspection",
    title: "Weekly Safety Inspection Report",
    description: "Log weekly inspections and weather conditions for the job site.",
  },
];

export default async function WorkspacePage() {
  const session = await getAuthenticatedSession();

  if (!session) {
    redirect("/login");
  }

  if (session.role === "platform_admin") {
    redirect("/dashboard");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-hi-deep">{session.companyName}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome, {session.displayName}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
              You are signed in as an {session.role}. Use this workspace to open your
              company forms and keep records inside the correct Safety Module account.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            {session.role === "admin" ? (
              <Link
                href="/dashboard"
                className="inline-flex w-full items-center justify-center rounded-full bg-hi px-5 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep sm:w-auto"
              >
                Open Admin Dashboard
              </Link>
            ) : null}
            <LogoutButton />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {formLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] transition hover:border-hi hover:bg-hi-soft"
          >
            <p className="eyebrow text-hi-deep">Company Form</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">{link.title}</h2>
            <p className="mt-4 text-sm leading-7 text-ink-2">{link.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
