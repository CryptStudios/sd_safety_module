import { IncidentInvestigationForm } from "@/components/incident-investigation-form";
import { WeeklySafetyInspectionForm } from "@/components/weekly-safety-inspection-form";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { SubmissionForm } from "@/components/submission-form";
import { getAuthenticatedSession } from "@/lib/server/auth";
import { listProjects } from "@/lib/server/submission-store";
import type { SubmissionKind } from "@/lib/submission-types";

type FormConfig = {
  kind: SubmissionKind;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
};

const formConfigs: Record<string, FormConfig> = {
  "incident-investigation": {
    kind: "incident-investigation",
    eyebrow: "Incident Reporting",
    title: "Incident / Accident Investigation Form",
    description:
      "Capture the worker, project, supervisor, and incident notes here so the safety team has a company-owned internal record.",
    submitLabel: "Submit Investigation",
  },
  "weekly-safety-inspection": {
    kind: "weekly-safety-inspection",
    eyebrow: "Inspection Reporting",
    title: "Weekly Safety Inspection Report",
    description:
      "Use this internal form to log the weekly inspection, note site conditions, and keep the submission history in Safety Module.",
    submitLabel: "Submit Inspection Report",
  },
};

type FormPageProps = {
  params: Promise<{
    formSlug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(formConfigs).map((formSlug) => ({ formSlug }));
}

export default async function FormPage({ params }: FormPageProps) {
  const session = await getAuthenticatedSession();

  if (!session) {
    redirect("/login");
  }

  if (session.role === "platform_admin") {
    redirect("/dashboard");
  }

  const { formSlug } = await params;
  const form = formConfigs[formSlug];

  if (!form) {
    notFound();
  }

  let projects: Awaited<ReturnType<typeof listProjects>> = [];

  try {
    projects = await listProjects(session.companyId);
  } catch (error) {
    console.error("Failed to load projects for form.", error);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <Link
          href="/workspace"
          className="inline-flex items-center gap-2 text-sm font-bold text-hi-deep transition hover:text-hi"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Workspace</span>
        </Link>
        <p className="mt-5 eyebrow text-hi-deep">
          {session.companyName} · {form.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{form.title}</h1>
      </section>

      <div className="mt-8">
        {form.kind === "incident-investigation" ? (
          <IncidentInvestigationForm projects={projects} />
        ) : form.kind === "weekly-safety-inspection" ? (
          <WeeklySafetyInspectionForm projects={projects} />
        ) : (
          <SubmissionForm
            kind={form.kind}
            title={form.title}
            description={form.description}
            submitLabel={form.submitLabel}
          />
        )}
      </div>
    </div>
  );
}
