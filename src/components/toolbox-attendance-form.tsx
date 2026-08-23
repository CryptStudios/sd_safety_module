"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ProjectCombobox } from "@/components/project-combobox";

type ToolboxAttendanceFormProps = {
  topicOptions: Array<{
    value: string;
    label: string;
    topicSlug: string;
    categorySlug: string;
    categoryTitle: string;
  }>;
  projects: Array<{ id: string; name: string; number: string | null }>;
  employees: Array<{ id: string; name: string; number: string | null }>;
  initialTopicValue?: string;
};

const initialState = {
  email: "",
  workerName: "",
  projectName: "",
  selectedAttendees: [] as string[],
  manualAttendees: "",
  selectedTopic: "",
  presenterStatus: "",
  hardCopyGenerated: "",
  notes: "",
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

export function ToolboxAttendanceForm({
  topicOptions,
  projects,
  employees,
  initialTopicValue = "",
}: ToolboxAttendanceFormProps) {
  const [form, setForm] = useState(() => ({
    ...initialState,
    selectedTopic: initialTopicValue,
  }));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [attendeeSearch, setAttendeeSearch] = useState("");

  useEffect(() => {
    if (!initialTopicValue) {
      return;
    }

    setForm((current) =>
      current.selectedTopic === initialTopicValue
        ? current
        : {
            ...current,
            selectedTopic: initialTopicValue,
          },
    );
  }, [initialTopicValue]);

  const selectedTopicValue = form.selectedTopic;

  const selectedTopic =
    topicOptions.find((option) => option.value === selectedTopicValue) ?? null;

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(attendeeSearch.trim().toLowerCase()) ||
      employee.number?.toLowerCase().includes(attendeeSearch.trim().toLowerCase()),
  );

  const manualAttendeeNames = [...new Set(
    form.manualAttendees
      .split(/\r?\n|,/)
      .map((value) => value.trim())
      .filter(Boolean),
  )];

  const attendeeNames = [...new Set([...form.selectedAttendees, ...manualAttendeeNames])];

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

    if (attendeeNames.length === 0) {
      setStatus("error");
      setMessage("Add at least one attendee before submitting the form.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    setSubmittedId(null);

    const payload = new FormData();
    payload.set("kind", "toolbox-talk");
    payload.set("email", form.email);
    payload.set("workerName", form.workerName);
    payload.set("attendeeNames", JSON.stringify(attendeeNames));
    payload.set("employerName", "Submit Daily Safety Module");
    payload.set("supervisorName", form.presenterStatus === "yes" ? form.workerName : "Crew Presenter");
    payload.set("projectName", form.projectName);
    payload.set("notes", form.notes);
    payload.set("signature", form.signature || form.workerName);
    payload.set("presenterStatus", form.presenterStatus);
    payload.set("hardCopyGenerated", form.hardCopyGenerated);

    if (selectedTopic) {
      payload.set("topicTitle", selectedTopic.label);
      payload.set("topicSlug", selectedTopic.topicSlug);
      payload.set("categorySlug", selectedTopic.categorySlug);
      payload.set("categoryTitle", selectedTopic.categoryTitle);
    }

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
        throw new Error(
          result.error ?? "Unable to submit the attendance form. Please try again.",
        );
      }

      setStatus("success");
      setMessage(result.message ?? "Attendance form submitted.");
      setSubmittedId(result.submission?.id ?? null);
      setForm({
        ...initialState,
        selectedTopic: initialTopicValue,
      });
      setAttendeeSearch("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to submit the attendance form.",
      );
    }
  }

  function toggleAttendee(employeeName: string) {
    setForm((current) => {
      const isSelected = current.selectedAttendees.includes(employeeName);

      return {
        ...current,
        selectedAttendees: isSelected
          ? current.selectedAttendees.filter((name) => name !== employeeName)
          : [...current.selectedAttendees, employeeName],
      };
    });
  }

  return (
    <section className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] sm:p-8 lg:p-10">
      <p className="eyebrow text-hi-deep">Toolbox Talk Attendance Form</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        Crew attendance and presenter record
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
        Toolbox Talk Attendance Form
      </p>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email *
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Your Name *
            <input
              required
              value={form.workerName}
              onChange={(event) => updateField("workerName", event.target.value)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Project Name *
            <ProjectCombobox
              projects={projects}
              value={form.projectName}
              onChange={(name) => updateField("projectName", name)}
            />
          </label>
        </div>

        <section className="rounded-[14px] border border-rule bg-bg p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-ink">Employees Attending *</p>
              <p className="text-sm text-ink-2">
                Select from the weekly roster and add anyone extra manually.
              </p>
            </div>
            <p className="text-sm font-semibold text-ink-2">
              {attendeeNames.length} attendee{attendeeNames.length === 1 ? "" : "s"}
            </p>
          </div>

          {attendeeNames.length > 0 ? (
            <div className="mt-4 rounded-[12px] border border-rule bg-paper p-3">
              <p className="text-sm font-semibold text-ink">Selected attendees</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {attendeeNames.map((attendeeName) => (
                  <span
                    key={attendeeName}
                    className="rounded-full border border-rule bg-bg px-3 py-1 text-sm text-ink-2"
                  >
                    {attendeeName}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {employees.length > 0 ? (
            <>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-ink">
                Search employee roster
                <input
                  type="search"
                  value={attendeeSearch}
                  onChange={(event) => setAttendeeSearch(event.target.value)}
                  placeholder="Search employees by name or number"
                  className="rounded-[12px] border border-rule bg-paper px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
                />
              </label>

              <div className="mt-4 max-h-64 overflow-y-auto rounded-[12px] border border-rule bg-paper p-3">
                <div className="grid gap-2 sm:grid-cols-2">
                  {filteredEmployees.length === 0 ? (
                    <p className="text-sm text-ink-2">No employees match this search.</p>
                  ) : (
                    filteredEmployees.map((employee) => (
                      <label
                        key={employee.id}
                        className="flex items-start gap-3 rounded-[10px] border border-transparent px-3 py-2 text-sm text-ink transition hover:border-rule hover:bg-bg"
                      >
                        <input
                          type="checkbox"
                          checked={form.selectedAttendees.includes(employee.name)}
                          onChange={() => toggleAttendee(employee.name)}
                          className="mt-1 h-4 w-4 rounded border-rule text-hi focus:ring-hi"
                        />
                        <span className="break-words">
                          {employee.number ? `#${employee.number} — ` : ""}
                          {employee.name}
                        </span>
                      </label>
                    ))
                  )}
                </div>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm text-ink-2">
              No weekly employee roster is loaded yet. You can still enter attendees
              manually below.
            </p>
          )}

          <label className="mt-4 grid gap-2 text-sm font-semibold text-ink">
            Add attendees manually
            <textarea
              rows={4}
              value={form.manualAttendees}
              onChange={(event) => updateField("manualAttendees", event.target.value)}
              placeholder="Enter one name per line, or separate names with commas."
              className="rounded-[12px] border border-rule bg-paper px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>
        </section>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Today&apos;s Toolbox Talk Topic *
          <select
            required
            value={selectedTopicValue}
            onChange={(event) => updateField("selectedTopic", event.target.value)}
            className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          >
            <option value="">Choose</option>
            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Are you the competent presenter for today&apos;s TBT? *
            <select
              required
              value={form.presenterStatus}
              onChange={(event) => updateField("presenterStatus", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-ink">
            Is a hard copy of the Toolbox Talk being generated?
            <select
              value={form.hardCopyGenerated}
              onChange={(event) => updateField("hardCopyGenerated", event.target.value)}
              className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            >
              <option value="">Choose</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          If YES, upload here
          <input
            type="file"
            onChange={(event) => updateField("upload", event.target.files?.[0] ?? null)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink file:mb-3 file:mr-0 file:block file:rounded-full file:border-0 file:bg-hi file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white sm:file:mb-0 sm:file:mr-4 sm:file:inline-block"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Notes
          <textarea
            rows={4}
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            placeholder="Optional notes about attendance, site conditions, or handout details."
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Signature and legal acknowledgment *
          <input
            required
            value={form.signature}
            onChange={(event) => updateField("signature", event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            placeholder="Type your full legal name"
          />
          <span className="text-xs font-normal leading-5 text-muted">
            By typing your name, you certify that this Toolbox Talk attendance
            record is accurate and submit it as your legal, binding electronic signature.
          </span>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Attendance Form"}
          </button>
          {message ? (
            <p
              className={`text-sm ${
                status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>

        {status === "success" && submittedId ? (
          <div className="rounded-[12px] border border-[#BFE3C4] bg-[#F0FBF1] p-4 text-sm text-[#1B5E20]">
            <p>Your attendance record was saved. You can download a PDF copy for your records.</p>
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
