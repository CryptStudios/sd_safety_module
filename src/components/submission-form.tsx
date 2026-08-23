"use client";

import { useState } from "react";

import type { SubmissionKind, SubmissionPayload } from "@/lib/submission-types";

type SubmissionFormProps = {
  kind: SubmissionKind;
  title: string;
  description: string;
  submitLabel: string;
  defaults?: Partial<SubmissionPayload>;
};

type FormState = {
  workerName: string;
  employerName: string;
  supervisorName: string;
  projectName: string;
  notes: string;
  signature: string;
};

const emptyState: FormState = {
  workerName: "",
  employerName: "",
  supervisorName: "",
  projectName: "",
  notes: "",
  signature: "",
};

async function readResponsePayload(response: Response) {
  const raw = await response.text();

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as { message?: string; error?: string };
  } catch {
    return {};
  }
}

export function SubmissionForm({
  kind,
  title,
  description,
  submitLabel,
  defaults,
}: SubmissionFormProps) {
  const [form, setForm] = useState<FormState>(emptyState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const payload: SubmissionPayload = {
      kind,
      attendeeNames: defaults?.attendeeNames ?? [],
      ...defaults,
      ...form,
      notes: form.notes.trim(),
    };

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to save the submission. Please try again.");
      }

      setStatus("success");
      setMessage(result.message ?? "Submission recorded.");
      setForm(emptyState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to save the submission.");
    }
  }

  return (
    <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] sm:p-8 lg:p-10">
      <p className="eyebrow text-hi-deep">Internal Submission</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">{description}</p>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Worker name
            <input
              required
              value={form.workerName}
              onChange={(event) => updateField("workerName", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Employer / company
            <input
              required
              value={form.employerName}
              onChange={(event) => updateField("employerName", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Supervisor
            <input
              required
              value={form.supervisorName}
              onChange={(event) => updateField("supervisorName", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Project / Jobsite
            <input
              required
              value={form.projectName}
              onChange={(event) => updateField("projectName", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Notes
          <textarea
            rows={4}
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            placeholder="Optional details, incident notes, or follow-up items."
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Signature and legal acknowledgment
          <input
            required
            value={form.signature}
            onChange={(event) => updateField("signature", event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            placeholder="Type your full legal name"
          />
          <span className="text-xs font-normal leading-5 text-muted">
            By typing your name, you certify that this submission is accurate
            and submit it as your legal, binding electronic signature.
          </span>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Saving..." : submitLabel}
          </button>
          {message ? (
            <p
              className={`text-sm sm:text-right ${
                status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
