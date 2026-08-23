"use client";

import { useMemo, useState } from "react";

type CompanyRecord = {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  createdAt: string;
};

type PlatformCompanyManagerProps = {
  initialCompanies: CompanyRecord[];
};

async function readResponsePayload(response: Response) {
  const raw = await response.text();

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as {
      message?: string;
      error?: string;
      company?: CompanyRecord;
    };
  } catch {
    return {};
  }
}

export function PlatformCompanyManager({ initialCompanies }: PlatformCompanyManagerProps) {
  const [companies, setCompanies] = useState(initialCompanies);
  const [companyName, setCompanyName] = useState("");
  const [companySlug, setCompanySlug] = useState("");
  const [adminDisplayName, setAdminDisplayName] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [deletingCompanyId, setDeletingCompanyId] = useState<string | null>(null);

  const sortedCompanies = useMemo(
    () => [...companies].sort((a, b) => a.name.localeCompare(b.name)),
    [companies],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/companies", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: companyName,
          slug: companySlug,
          adminDisplayName,
          adminUsername,
          adminPassword,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to create company.");
      }

      if (result.company) {
        setCompanies((current) => [...current, result.company as CompanyRecord]);
      }

      setCompanyName("");
      setCompanySlug("");
      setAdminDisplayName("");
      setAdminUsername("");
      setAdminPassword("");
      setStatus("success");
      setMessage(result.message ?? "Company created.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to create company.");
    }
  }

  async function handleDelete(companyId: string, companyName: string) {
    if (!window.confirm(`Delete ${companyName}? This also deletes all of its admin and employee accounts. This cannot be undone.`)) {
      return;
    }

    setStatus("saving");
    setMessage("");
    setDeletingCompanyId(companyId);

    try {
      const response = await fetch("/api/companies", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ companyId }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to delete company.");
      }

      setCompanies((current) => current.filter((company) => company.id !== companyId));
      setStatus("success");
      setMessage(result.message ?? "Company deleted.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to delete company.");
    } finally {
      setDeletingCompanyId(null);
    }
  }

  return (
    <section className="mt-8 rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-8">
      <p className="eyebrow text-hi-deep">Platform Companies</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
        Create companies and first admin accounts
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
        This is the Submit Daily platform-level setup area. Create each company here,
        along with its first admin login, before handing the workspace off to that team.
      </p>

      <form className="mt-6 grid gap-4 xl:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Company name
          <input
            required
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Company slug
          <input
            value={companySlug}
            onChange={(event) => setCompanySlug(event.target.value)}
            placeholder="Optional. Will be generated from the company name."
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          First admin name
          <input
            required
            value={adminDisplayName}
            onChange={(event) => setAdminDisplayName(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          First admin username
          <input
            required
            value={adminUsername}
            onChange={(event) => setAdminUsername(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink xl:col-span-2">
          First admin password
          <input
            required
            type="password"
            value={adminPassword}
            onChange={(event) => setAdminPassword(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <button
          type="submit"
          disabled={status === "saving"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 xl:col-span-2 xl:w-fit"
        >
          {status === "saving" ? "Creating..." : "Create Company"}
        </button>
      </form>

      {message ? (
        <p className={`mt-4 text-sm ${status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"}`}>
          {message}
        </p>
      ) : null}

      <div className="mt-6 rounded-[14px] border border-rule bg-bg p-4">
        <p className="eyebrow text-hi-deep">Current Companies</p>
        {sortedCompanies.length === 0 ? (
          <p className="mt-2 text-sm text-ink-2">
            No companies have been created yet. Sign in as the Submit Daily admin and create the first one here.
          </p>
        ) : (
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {sortedCompanies.map((company) => (
              <div
                key={company.id}
                className="flex items-start justify-between gap-3 rounded-[12px] border border-rule bg-paper px-4 py-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{company.name}</p>
                  <p className="mt-1 text-sm text-ink-2">Slug: {company.slug}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(company.id, company.name)}
                  disabled={status === "saving"}
                  className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-full border border-[#E9B4B4] px-3 py-1.5 text-sm font-semibold text-[#9B1C1C] transition hover:bg-[#FFF1F1] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {deletingCompanyId === company.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
