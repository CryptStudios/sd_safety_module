"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ProjectCombobox } from "@/components/project-combobox";

type WeeklySafetyInspectionFormProps = {
  projects: Array<{ id: string; name: string; number: string | null }>;
};

type ChecklistAnswer = "yes" | "no" | "na" | "";

const weatherOptions = ["Clear", "Cloudy", "Rain", "Snow", "Windy", "Hot", "Cold", "Other"];

const siteConditionsItems = [
  "Housekeeping clean and orderly",
  "Proper signage: OSHA poster / emergency numbers posted",
  "Walkways and access clear",
  "First aid kit available and stocked",
  "Fire extinguishers in place and charged",
  "Barriers in place",
  "Trash disposal procedures in place",
  "Walking/working surfaces are free of trip hazards",
  "Storage areas maintained in orderly manner",
  "Potable water available",
  "Warning signs, tags, barricade tape in place",
  "Adequate restroom facilities",
];

const ppeItems = [
  "Scaffolding: on-site and in-use",
  "Guardrails",
  "Full planking",
  "Bracing",
  "Ladder access",
  "Toeboards",
];

const fallProtectionItems = [
  "Personnel trained in fall protection, as required",
  "Fall Protection Plan used: 29 CFR 1926.502(k) is on site",
  "Fall hazards properly addressed",
];

const trenchSafetyItems = [
  "Trenches properly shored or sloped",
  "Access/egress ladders present",
  "Soil piles at least 2 feet away from edges",
  "No water accumulation in trench",
  "Daily / rain event inspections by competent person",
];

function emptyAnswers(items: string[]): Record<string, ChecklistAnswer> {
  return Object.fromEntries(items.map((item) => [item, ""]));
}

const initialState = {
  email: "",
  workerName: "",
  projectName: "",
  inspectionDate: "",
  weatherConditions: "",
  siteConditionsAnswers: emptyAnswers(siteConditionsItems),
  siteConditionsCorrectiveAction: "",
  ppeAnswers: emptyAnswers(ppeItems),
  ppeCorrectiveAction: "",
  fallProtectionAnswers: emptyAnswers(fallProtectionItems),
  fallProtectionCorrectiveAction: "",
  trenchSafetyAnswers: emptyAnswers(trenchSafetyItems),
  trenchSafetyCorrectiveAction: "",
  safetyBehaviors: "",
  acknowledgment: "" as "yes" | "no" | "",
  issuesFound: "",
  signature: "",
};

type InspectionFormState = typeof initialState;

async function readResponsePayload(response: Response) {
  const raw = await response.text();

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as {
      message?: string;
      error?: string;
      submission?: { id: string };
    };
  } catch {
    return {};
  }
}

function answerLabel(answer: ChecklistAnswer) {
  if (answer === "yes") return "Yes";
  if (answer === "no") return "No";
  if (answer === "na") return "Does Not Apply";
  return "Not answered";
}

function formatChecklistSection(
  title: string,
  items: string[],
  answers: Record<string, ChecklistAnswer>,
  correctiveAction: string,
) {
  const lines = items.map((item) => `  - ${item}: ${answerLabel(answers[item])}`);
  const correctiveLine = correctiveAction.trim()
    ? `  Corrective action: ${correctiveAction.trim()}`
    : "";

  return [`${title}:`, ...lines, correctiveLine].filter(Boolean).join("\n");
}

function formatInspectionNotes(form: InspectionFormState) {
  const sections = [
    formatChecklistSection(
      "Are the following general site conditions safe and compliant?",
      siteConditionsItems,
      form.siteConditionsAnswers,
      form.siteConditionsCorrectiveAction,
    ),
    formatChecklistSection(
      "Are workers using the proper PPE?",
      ppeItems,
      form.ppeAnswers,
      form.ppeCorrectiveAction,
    ),
    formatChecklistSection(
      "Are fall protection measures in place and used correctly?",
      fallProtectionItems,
      form.fallProtectionAnswers,
      form.fallProtectionCorrectiveAction,
    ),
    formatChecklistSection(
      "Are trench safety requirements being followed?",
      trenchSafetyItems,
      form.trenchSafetyAnswers,
      form.trenchSafetyCorrectiveAction,
    ),
    `Positive or negative safety behaviors observed: ${form.safetyBehaviors.trim() || "None"}`,
    `Unsafe work practices/conditions will be corrected immediately upon discovery, and if complete job site safety cannot be restored, the job will be shut down until corrections are made. Acknowledged: ${
      form.acknowledgment === "yes" ? "Yes" : form.acknowledgment === "no" ? "No" : "Not answered"
    }`,
    `Issues found and actions required or taken (other than those captured above): ${
      form.issuesFound.trim() || "None"
    }`,
  ];

  return sections.join("\n\n");
}

type ChecklistSectionProps = {
  sectionKey: string;
  title: string;
  items: string[];
  answers: Record<string, ChecklistAnswer>;
  onAnswerChange: (item: string, value: ChecklistAnswer) => void;
  correctiveAction: string;
  onCorrectiveActionChange: (value: string) => void;
};

function ChecklistSection({
  sectionKey,
  title,
  items,
  answers,
  onAnswerChange,
  correctiveAction,
  onCorrectiveActionChange,
}: ChecklistSectionProps) {
  return (
    <div className="grid gap-4 rounded-[14px] border border-rule bg-bg p-4 sm:p-5">
      <p className="text-sm font-semibold text-ink">{title} *</p>

      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="grid gap-3 rounded-[12px] border border-rule bg-paper px-4 py-3 sm:flex sm:items-center sm:justify-between sm:gap-4"
          >
            <p className="min-w-0 text-sm text-ink">{item}</p>
            <div className="flex flex-wrap gap-4 sm:shrink-0">
              {(["yes", "no", "na"] as const).map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 text-sm font-medium text-ink-2"
                >
                  <input
                    type="radio"
                    required
                    name={`${sectionKey}__${item}`}
                    checked={answers[item] === value}
                    onChange={() => onAnswerChange(item, value)}
                    className="h-4 w-4 accent-hi"
                  />
                  {value === "yes" ? "Yes" : value === "no" ? "No" : "N/A"}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        If any question above was answered No, explain the corrective action(s) here
        <textarea
          rows={3}
          value={correctiveAction}
          onChange={(event) => onCorrectiveActionChange(event.target.value)}
          placeholder="Describe the corrective action, or leave blank if not applicable."
          className="rounded-[12px] border border-rule bg-paper px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
        />
      </label>
    </div>
  );
}

export function WeeklySafetyInspectionForm({ projects }: WeeklySafetyInspectionFormProps) {
  const [form, setForm] = useState<InspectionFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  function updateField<K extends keyof InspectionFormState>(field: K, value: InspectionFormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function updateChecklistAnswer(
    field:
      | "siteConditionsAnswers"
      | "ppeAnswers"
      | "fallProtectionAnswers"
      | "trenchSafetyAnswers",
    item: string,
    value: ChecklistAnswer,
  ) {
    setForm((current) => ({
      ...current,
      [field]: { ...current[field], [item]: value },
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.projectName) {
      setStatus("error");
      setMessage("Choose a project before submitting the form.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    setSubmittedId(null);

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind: "weekly-safety-inspection",
          email: form.email,
          workerName: form.workerName,
          attendeeNames: [],
          employerName: "Weekly Safety Inspection Report",
          supervisorName: form.workerName,
          projectName: form.projectName,
          notes: formatInspectionNotes(form),
          signature: form.signature,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to submit the weekly inspection form.");
      }

      setStatus("success");
      setMessage(result.message ?? "Weekly inspection form submitted.");
      setSubmittedId(result.submission?.id ?? null);
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to submit the weekly inspection form.",
      );
    }
  }

  return (
    <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] sm:p-8 lg:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-hi-deep">Weekly Safety Inspection</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Report
          </h2>
        </div>
        <div className="relative h-16 w-44 shrink-0 overflow-hidden rounded-[12px] border border-rule bg-white">
          <Image
            src="/submit-daily-safety-logo.png"
            alt="Company logo"
            fill
            className="object-contain p-2"
            sizes="176px"
          />
        </div>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email *
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Your Name (Competent Person) *
            <input
              required
              value={form.workerName}
              onChange={(event) => updateField("workerName", event.target.value)}
              placeholder="Your answer"
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            Project / Job Site Name (As listed in SUBMIT DAILY) *
            <ProjectCombobox
              projects={projects}
              value={form.projectName}
              onChange={(name) => updateField("projectName", name)}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Date of Inspection *
            <input
              required
              type="date"
              value={form.inspectionDate}
              onChange={(event) => updateField("inspectionDate", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            Weather Conditions *
            <select
              required
              value={form.weatherConditions}
              onChange={(event) => updateField("weatherConditions", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              {weatherOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ChecklistSection
          sectionKey="siteConditions"
          title="Are the following general site conditions safe and compliant?"
          items={siteConditionsItems}
          answers={form.siteConditionsAnswers}
          onAnswerChange={(item, value) => updateChecklistAnswer("siteConditionsAnswers", item, value)}
          correctiveAction={form.siteConditionsCorrectiveAction}
          onCorrectiveActionChange={(value) => updateField("siteConditionsCorrectiveAction", value)}
        />

        <ChecklistSection
          sectionKey="ppe"
          title="Are workers using the proper PPE?"
          items={ppeItems}
          answers={form.ppeAnswers}
          onAnswerChange={(item, value) => updateChecklistAnswer("ppeAnswers", item, value)}
          correctiveAction={form.ppeCorrectiveAction}
          onCorrectiveActionChange={(value) => updateField("ppeCorrectiveAction", value)}
        />

        <ChecklistSection
          sectionKey="fallProtection"
          title="Are fall protection measures in place and used correctly?"
          items={fallProtectionItems}
          answers={form.fallProtectionAnswers}
          onAnswerChange={(item, value) => updateChecklistAnswer("fallProtectionAnswers", item, value)}
          correctiveAction={form.fallProtectionCorrectiveAction}
          onCorrectiveActionChange={(value) => updateField("fallProtectionCorrectiveAction", value)}
        />

        <ChecklistSection
          sectionKey="trenchSafety"
          title="Are trench safety requirements being followed?"
          items={trenchSafetyItems}
          answers={form.trenchSafetyAnswers}
          onAnswerChange={(item, value) => updateChecklistAnswer("trenchSafetyAnswers", item, value)}
          correctiveAction={form.trenchSafetyCorrectiveAction}
          onCorrectiveActionChange={(value) => updateField("trenchSafetyCorrectiveAction", value)}
        />

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Please describe any positive or negative safety behaviors observed if not captured
          above. If none, write &quot;None.&quot;
          <textarea
            rows={4}
            value={form.safetyBehaviors}
            onChange={(event) => updateField("safetyBehaviors", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <div className="grid gap-3 rounded-[14px] border border-rule bg-bg p-4 sm:p-5">
          <p className="text-sm font-semibold text-ink">
            Unsafe work practices/conditions will be corrected immediately upon discovery, and if
            complete job site safety cannot be restored, the job will be shut down until
            corrections are made. *
          </p>
          <div className="flex flex-wrap gap-4">
            {(["yes", "no"] as const).map((value) => (
              <label key={value} className="flex items-center gap-2 text-sm font-medium text-ink-2">
                <input
                  type="radio"
                  required
                  name="acknowledgment"
                  checked={form.acknowledgment === value}
                  onChange={() => updateField("acknowledgment", value)}
                  className="h-4 w-4 accent-hi"
                />
                {value === "yes" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          List any issues found and the actions required or taken other than those captured
          above. If none, write &quot;None.&quot; *
          <textarea
            required
            rows={4}
            value={form.issuesFound}
            onChange={(event) => updateField("issuesFound", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Sign-Off — Your Signature *
          <input
            required
            value={form.signature}
            onChange={(event) => updateField("signature", event.target.value)}
            placeholder="Type your full legal name"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
          <span className="text-xs font-normal leading-5 text-muted">
            By typing your name, you certify that this inspection report is accurate and submit
            it as your legal, binding electronic signature.
          </span>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Submitting..." : "Submit Inspection Report"}
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

        {status === "success" && submittedId ? (
          <div className="rounded-[12px] border border-[#BFE3C4] bg-[#F0FBF1] p-4 text-sm text-[#1B5E20]">
            <p>Your inspection report was saved. You can download a PDF copy for your records.</p>
            <Link
              href={`/api/submissions/${submittedId}/pdf`}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-hi px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-hi-deep"
            >
              Download PDF
            </Link>
          </div>
        ) : null}
      </form>
    </section>
  );
}
