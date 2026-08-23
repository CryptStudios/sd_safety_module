import { ToolboxAttendanceForm } from "@/components/toolbox-attendance-form";
import { getAuthenticatedSession } from "@/lib/server/auth";
import { listEmployees, listProjects } from "@/lib/server/submission-store";
import { trainingCategories } from "@/lib/training-data";
import { redirect } from "next/navigation";

const topicOptions = trainingCategories.flatMap((category) =>
  category.topics.map((topic) => ({
    value: `${category.slug}::${topic.slug}`,
    label: topic.title,
    topicSlug: topic.slug,
    categorySlug: category.slug,
    categoryTitle: category.title,
  })),
);

type ToolboxTalkAttendancePageProps = {
  searchParams?: Promise<{
    topic?: string;
  }>;
};

export default async function ToolboxTalkAttendancePage({
  searchParams,
}: ToolboxTalkAttendancePageProps) {
  const session = await getAuthenticatedSession();

  if (!session) {
    redirect("/login");
  }

  if (session.role === "platform_admin") {
    redirect("/dashboard");
  }

  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const initialTopicValue = resolvedSearchParams?.topic ?? "";
  let projects: Awaited<ReturnType<typeof listProjects>> = [];
  let employees: Awaited<ReturnType<typeof listEmployees>> = [];

  try {
    [projects, employees] = await Promise.all([
      listProjects(session.companyId),
      listEmployees(session.companyId),
    ]);
  } catch (error) {
    console.error("Failed to load attendance form data.", error);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <p className="eyebrow text-hi-deep">{session.companyName}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Toolbox Talk Attendance Form
        </h1>
      </section>

      <div className="mt-8">
        <ToolboxAttendanceForm
          topicOptions={topicOptions}
          projects={projects}
          employees={employees}
          initialTopicValue={initialTopicValue}
        />
      </div>
    </div>
  );
}
