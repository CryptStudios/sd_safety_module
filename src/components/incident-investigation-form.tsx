"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ProjectCombobox } from "@/components/project-combobox";

const recordableOptions = [
  "Yes",
  "No",
  "Pending Review",
];

const incidentTypeOptions = [
  "Injury / Illness",
  "Property Damage",
  "Vehicle Incident",
  "Near Miss",
  "Environmental Release",
  "Equipment Damage",
  "Other",
];

const yesNoOptions = ["Yes", "No"];

const involvedPartyOptions = [
  "Employee",
  "Subcontractor",
  "Visitor",
  "Equipment / Property",
  "Vehicle",
  "Other",
];

const initialState = {
  email: "",
  yourTitle: "",
  projectName: "",
  involvedPartyType: "",
  involvedPersonName: "",
  incidentDate: "",
  incidentTime: "",
  recordable: "",
  incidentType: "",
  incidentDescription: "",
  medicalTreatmentRequired: "",
  possibleLostTimeAccident: "",
  primaryStatement: "",
  secondaryStatement: "",
  witnessName: "",
  witnessStatement: "",
  supervisorStatement: "",
  preventionMethods: "",
  signature: "",
  upload: null as File | null,
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
      submission?: { id: string };
    };
  } catch {
    return {};
  }
}

function formatIncidentNotes(form: typeof initialState) {
  const sections = [
    ["Form", "Incident / Accident Investigation Form"],
    ["Your title", form.yourTitle],
    ["Involved person(s) or property", form.involvedPartyType],
    ["Date of incident", form.incidentDate],
    ["Time of event", form.incidentTime],
    ["Recordable", form.recordable],
    ["Type of incident", form.incidentType],
    ["Describe incident and/or damages", form.incidentDescription],
    ["Medical treatment required", form.medicalTreatmentRequired || "Not specified"],
    [
      "Possible lost time accident",
      form.possibleLostTimeAccident || "Not specified",
    ],
    [
      "Statement of named person involved",
      form.primaryStatement || "Not provided",
    ],
    [
      "Statement of second person involved",
      form.secondaryStatement || "Not provided",
    ],
    ["Name of witness", form.witnessName],
    ["Witness statement", form.witnessStatement || "Not provided"],
    [
      "Supervisor / competent person statement",
      form.supervisorStatement || "Not provided",
    ],
    ["Means / methods to prevent reoccurrence", form.preventionMethods],
  ];

  return sections.map(([label, value]) => `${label}: ${value}`).join("\n\n");
}

type IncidentInvestigationFormProps = {
  projects: Array<{ id: string; name: string; number: string | null }>;
};

export function IncidentInvestigationForm({ projects }: IncidentInvestigationFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  function updateField<K extends keyof typeof initialState>(
    field: K,
    value: (typeof initialState)[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
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

    const payload = new FormData();
    payload.set("kind", "incident-investigation");
    payload.set("email", form.email);
    payload.set("workerName", form.involvedPersonName);
    payload.set("employerName", form.involvedPartyType);
    payload.set("supervisorName", form.yourTitle);
    payload.set("projectName", form.projectName);
    payload.set("notes", formatIncidentNotes(form));
    payload.set("signature", form.signature);

    if (form.upload) {
      payload.set("hardCopyUpload", form.upload);
    }

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        body: payload,
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to submit the investigation form.");
      }

      setStatus("success");
      setMessage(result.message ?? "Investigation form submitted.");
      setSubmittedId(result.submission?.id ?? null);
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to submit the investigation form.",
      );
    }
  }

  return (
    <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] sm:p-8 lg:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-hi-deep">Incident / Accident</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Investigation Form
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
            Complete the internal investigation record for incident, accident, damage,
            and injury reporting.
          </p>
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
            YOUR TITLE *
            <input
              required
              value={form.yourTitle}
              onChange={(event) => updateField("yourTitle", event.target.value)}
              placeholder="Your answer"
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            PROJECT NAME *
            <ProjectCombobox
              projects={projects}
              value={form.projectName}
              onChange={(name) => updateField("projectName", name)}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            INVOLVED PERSON(S) OR PROPERTY *
            <select
              required
              value={form.involvedPartyType}
              onChange={(event) => updateField("involvedPartyType", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              {involvedPartyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            Name of Person(s) Involved, if applicable *
            <input
              required
              value={form.involvedPersonName}
              onChange={(event) => updateField("involvedPersonName", event.target.value)}
              placeholder="Your answer"
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            DATE OF INCIDENT *
            <input
              required
              type="date"
              value={form.incidentDate}
              onChange={(event) => updateField("incidentDate", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            TIME OF EVENT (even if approximate) *
            <input
              required
              type="time"
              value={form.incidentTime}
              onChange={(event) => updateField("incidentTime", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            RECORDABLE *
            <select
              required
              value={form.recordable}
              onChange={(event) => updateField("recordable", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              {recordableOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            TYPE OF INCIDENT *
            <select
              required
              value={form.incidentType}
              onChange={(event) => updateField("incidentType", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              {incidentTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          DESCRIBE INCIDENT AND/OR DAMAGES (WHO, WHAT, WHERE & WHEN) *
          <textarea
            required
            rows={5}
            value={form.incidentDescription}
            onChange={(event) => updateField("incidentDescription", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            WAS MEDICAL TREATMENT REQUIRED?
            <select
              value={form.medicalTreatmentRequired}
              onChange={(event) => updateField("medicalTreatmentRequired", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            IF INJURY: Is there possible lost time accident?
            <select
              value={form.possibleLostTimeAccident}
              onChange={(event) => updateField("possibleLostTimeAccident", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              {yesNoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          STATEMENT OF NAMED PERSON INVOLVED IN INJURY, ACCIDENT OR DAMAGES (what happened)
          <textarea
            rows={4}
            value={form.primaryStatement}
            onChange={(event) => updateField("primaryStatement", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          STATEMENT OF SECOND PERSON INVOLVED IN INJURY, ACCIDENT OR DAMAGES (what happened) - If applicable.
          <textarea
            rows={4}
            value={form.secondaryStatement}
            onChange={(event) => updateField("secondaryStatement", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            NAME OF WITNESS *
            <input
              required
              value={form.witnessName}
              onChange={(event) => updateField("witnessName", event.target.value)}
              placeholder="Your answer"
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            WITNESS STATEMENT
            <textarea
              rows={4}
              value={form.witnessStatement}
              onChange={(event) => updateField("witnessStatement", event.target.value)}
              placeholder="Your answer"
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          SUPERVISOR/COMPETENT PERSON STATEMENT
          <textarea
            rows={4}
            value={form.supervisorStatement}
            onChange={(event) => updateField("supervisorStatement", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          MEANS/METHODS TO PREVENT REOCCURRENCE: *
          <textarea
            required
            rows={4}
            value={form.preventionMethods}
            onChange={(event) => updateField("preventionMethods", event.target.value)}
            placeholder="Your answer"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          UPLOAD ATTACHMENTS
          <input
            type="file"
            onChange={(event) => updateField("upload", event.target.files?.[0] ?? null)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink file:mb-3 file:mr-0 file:block file:rounded-full file:border-0 file:bg-hi file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white sm:file:mb-0 sm:file:mr-4 sm:file:inline-block"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          SIGNATURE OF PERSON FILLING OUT FORM
          <input
            required
            value={form.signature}
            onChange={(event) => updateField("signature", event.target.value)}
            placeholder="Type your full legal name"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
          <span className="text-xs font-normal leading-5 text-muted">
            By typing your name, you certify that this investigation record is
            accurate and submit it as your legal, binding electronic signature.
          </span>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Submitting..." : "Submit Investigation Form"}
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
            <p>Your investigation record was saved. You can download a PDF copy for your records.</p>
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
