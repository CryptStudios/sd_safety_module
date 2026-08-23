import { redirect } from "next/navigation";

import { LoginForm } from "@/components/login-form";
import { getAuthenticatedSession } from "@/lib/server/auth";
import { listCompanies } from "@/lib/server/account-store";

export default async function LoginPage() {
  const session = await getAuthenticatedSession();

  if (session) {
    redirect(session.role === "platform_admin" || session.role === "admin" ? "/dashboard" : "/workspace");
  }

  const companies = await listCompanies();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <p className="eyebrow text-hi-deep">Company Login</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Sign in to your Safety Module workspace
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-ink-2">
          Submit Daily admins can create companies. Company admins can manage users,
          employee rosters, projects, and form records. Employees can sign in to complete forms without email-based accounts.
        </p>
        <LoginForm companies={companies.map((company) => ({ slug: company.slug, name: company.name }))} />
      </section>
    </div>
  );
}
