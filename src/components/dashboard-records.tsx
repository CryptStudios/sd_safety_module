"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { ChevronDownIcon } from "@/components/icons";
import type { SubmissionKind, SubmissionRecord } from "@/lib/submission-types";

type DashboardRecordsProps = {
  initialSubmissions: SubmissionRecord[];
  loadError: boolean;
  lastViewedSubmissionsAt: string | null;
};

type FilterState = {
  query: string;
  kind: "all" | SubmissionKind;
  projectName: string;
  presenterStatus: "all" | "yes" | "no";
  hardCopyGenerated: "all" | "yes" | "no";
};

const initialFilters: FilterState = {
  query: "",
  kind: "all",
  projectName: "all",
  presenterStatus: "all",
  hardCopyGenerated: "all",
};

const kindOrder: SubmissionKind[] = [
  "toolbox-talk",
  "incident-investigation",
  "weekly-safety-inspection",
];

const kindLabels: Record<SubmissionKind, string> = {
  "toolbox-talk": "Toolbox Talk Attendance",
  "incident-investigation": "Incident / Accident Investigation",
  "weekly-safety-inspection": "Weekly Safety Inspection",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

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

export function DashboardRecords({
  initialSubmissions,
  loadError,
  lastViewedSubmissionsAt,
}: DashboardRecordsProps) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [status, setStatus] = useState<"idle" | "deleting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Frozen from the value the page loaded with, so badges stay visible for
  // this whole visit even after the checkpoint below updates for next time.
  const [viewCheckpoint] = useState(lastViewedSubmissionsAt);

  useEffect(() => {
    fetch("/api/submissions/mark-viewed", { method: "POST" }).catch(() => {
      // Non-critical — worst case the "new" badges just reappear next visit.
    });
  }, []);

  function isNewSubmission(submission: SubmissionRecord) {
    return viewCheckpoint !== null && submission.submittedAt > viewCheckpoint;
  }

  const newCount = useMemo(
    () => submissions.filter(isNewSubmission).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [submissions, viewCheckpoint],
  );

  function toggleExpanded(id: string) {
    setExpandedIds((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  const projectOptions = useMemo(
    () =>
      [...new Set(submissions.map((submission) => submission.projectName).filter(Boolean))].sort(
        (a, b) => a.localeCompare(b),
      ),
    [submissions],
  );

  const filteredSubmissions = useMemo(() => {
    const normalizedQuery = filters.query.trim().toLowerCase();

    return submissions.filter((submission) => {
      if (filters.kind !== "all" && submission.kind !== filters.kind) {
        return false;
      }

      if (filters.projectName !== "all" && submission.projectName !== filters.projectName) {
        return false;
      }

      if (
        filters.presenterStatus !== "all" &&
        (submission.presenterStatus ?? "") !== filters.presenterStatus
      ) {
        return false;
      }

      if (
        filters.hardCopyGenerated !== "all" &&
        (submission.hardCopyGenerated ?? "") !== filters.hardCopyGenerated
      ) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        submission.workerName,
        submission.email,
        submission.projectName,
        submission.topicTitle,
        submission.categoryTitle,
        submission.attendeeNames.join(" "),
        submission.notes,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [filters, submissions]);

  const groupedSubmissions = useMemo(
    () =>
      kindOrder
        .map((kind) => ({
          kind,
          label: kindLabels[kind],
          submissions: filteredSubmissions.filter((submission) => submission.kind === kind),
        }))
        .filter((group) => group.submissions.length > 0),
    [filteredSubmissions],
  );

  function updateFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this saved submission? This cannot be undone.")) {
      return;
    }

    setStatus("deleting");
    setMessage("");
    setDeletingId(id);

    try {
      const response = await fetch(`/api/submissions?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to delete the submission.");
      }

      setSubmissions((current) => current.filter((submission) => submission.id !== id));
      setStatus("success");
      setMessage(result.message ?? "Submission deleted.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to delete the submission.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section className="mt-8 rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4">
        <div>
          <p className="eyebrow text-hi-deep">Saved Records</p>
          <p className="mt-2 text-sm text-ink-2">
            {filteredSubmissions.length} of {submissions.length} submissions shown
          </p>
        </div>
        <p className="text-sm text-ink-3">Newest responses appear first.</p>
      </div>

      {newCount > 0 ? (
        <div className="mt-4 flex items-center gap-3 rounded-[12px] border border-hi/30 bg-hi-soft px-4 py-3 text-sm font-semibold text-hi-deep">
          <span
            aria-hidden="true"
            className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-hi px-2 text-xs font-bold text-white"
          >
            {newCount}
          </span>
          {newCount} new submission{newCount === 1 ? "" : "s"} since your last visit.
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <label className="grid gap-2 text-sm font-semibold text-ink xl:col-span-2">
          Search records
          <input
            type="search"
            value={filters.query}
            onChange={(event) => updateFilter("query", event.target.value)}
            placeholder="Search worker, project, topic, or notes"
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Submission type
          <select
            value={filters.kind}
            onChange={(event) =>
              updateFilter("kind", event.target.value as FilterState["kind"])
            }
            className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          >
            <option value="all">All types</option>
            <option value="toolbox-talk">Toolbox Talk</option>
            <option value="incident-investigation">Incident Investigation</option>
            <option value="weekly-safety-inspection">Weekly Safety Inspection</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Project
          <select
            value={filters.projectName}
            onChange={(event) => updateFilter("projectName", event.target.value)}
            className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          >
            <option value="all">All projects</option>
            {projectOptions.map((projectName) => (
              <option key={projectName} value={projectName}>
                {projectName}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Hard copy
          <select
            value={filters.hardCopyGenerated}
            onChange={(event) =>
              updateFilter(
                "hardCopyGenerated",
                event.target.value as FilterState["hardCopyGenerated"],
              )
            }
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Presenter status
          <select
            value={filters.presenterStatus}
            onChange={(event) =>
              updateFilter(
                "presenterStatus",
                event.target.value as FilterState["presenterStatus"],
              )
            }
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setFilters(initialFilters)}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-rule px-4 py-2 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep sm:w-auto"
        >
          Clear Filters
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

      <div className="mt-6 space-y-4">
        {loadError ? (
          <div className="rounded-[14px] border border-[#F2C078] bg-[#FFF4E5] p-6 text-sm text-[#7A4B00]">
            The dashboard loaded, but Safety Module could not read submissions from the server
            right now. Check your Netlify function logs and database settings, then refresh.
          </div>
        ) : null}
        {filteredSubmissions.length === 0 ? (
          <div className="rounded-[14px] border border-dashed border-rule bg-bg p-6 text-sm text-ink-2">
            No submissions match the current filters.
          </div>
        ) : (
          groupedSubmissions.map((group) => (
            <div key={group.kind}>
              <div className="flex items-baseline gap-3 border-b border-rule pb-2">
                <h3 className="eyebrow text-hi-deep">{group.label}</h3>
                <span className="text-xs text-ink-3">{group.submissions.length}</span>
              </div>
              <div className="mt-4 space-y-4">
                {group.submissions.map((submission) => {
                  const isExpanded = expandedIds.has(submission.id);
                  const isNew = isNewSubmission(submission);

                  return (
                    <article
                      key={submission.id}
                      className={`rounded-[14px] border bg-bg p-5 shadow-[0_16px_36px_-30px_rgba(2,6,23,0.3)] ${
                        isNew ? "border-hi/50" : "border-rule"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleExpanded(submission.id)}
                        aria-expanded={isExpanded}
                        className="flex w-full flex-col gap-4 text-left lg:flex-row lg:items-start lg:justify-between"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="eyebrow text-hi-deep">{kindLabels[submission.kind]}</p>
                            {isNew ? (
                              <span className="inline-flex items-center rounded-full bg-hi px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                                New
                              </span>
                            ) : null}
                          </div>
                          <h2 className="mt-2 break-words text-2xl font-bold tracking-tight text-ink">
                            {submission.topicTitle ?? submission.projectName}
                          </h2>
                          <p className="mt-2 text-sm text-ink-2">
                            Submitted by {submission.workerName}
                            {submission.email ? ` · ${submission.email}` : ""}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 lg:shrink-0">
                          <p className="text-sm text-ink-3">{formatDate(submission.submittedAt)}</p>
                          <ChevronDownIcon className={isExpanded ? "rotate-180" : ""} />
                        </div>
                      </button>

                      {isExpanded ? (
                        <div className="mt-5 border-t border-rule pt-5">
                          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                            <div className="min-w-0">
                              <p className="eyebrow text-hi-deep">Project</p>
                              <p className="mt-2 break-words text-sm text-ink-2">
                                {submission.projectName}
                              </p>
                            </div>
                            <div className="min-w-0">
                              <p className="eyebrow text-hi-deep">Presenter</p>
                              <p className="mt-2 break-words text-sm text-ink-2">
                                {submission.presenterStatus ?? submission.supervisorName}
                              </p>
                            </div>
                            <div className="min-w-0">
                              <p className="eyebrow text-hi-deep">Hard Copy</p>
                              <p className="mt-2 text-sm text-ink-2">
                                {submission.hardCopyGenerated ?? "Not specified"}
                              </p>
                            </div>
                            <div className="min-w-0">
                              <p className="eyebrow text-hi-deep">Attendees</p>
                              <p className="mt-2 text-sm text-ink-2">
                                {submission.attendeeNames.length > 0
                                  ? `${submission.attendeeNames.length} recorded`
                                  : "Not recorded"}
                              </p>
                            </div>
                            <div className="min-w-0">
                              <p className="eyebrow text-hi-deep">Category</p>
                              <p className="mt-2 break-words text-sm text-ink-2">
                                {submission.categoryTitle ?? "General form"}
                              </p>
                            </div>
                          </div>

                          {submission.attendeeNames.length > 0 ? (
                            <div className="mt-5 rounded-[12px] border border-rule bg-paper p-4">
                              <p className="eyebrow text-hi-deep">Attendance List</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {submission.attendeeNames.map((attendeeName) => (
                                  <span
                                    key={`${submission.id}-${attendeeName}`}
                                    className="rounded-full border border-rule bg-bg px-3 py-1 text-sm text-ink-2"
                                  >
                                    {attendeeName}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}

                          {submission.notes ? (
                            <div className="mt-5 rounded-[12px] border border-rule bg-paper p-4">
                              <p className="eyebrow text-hi-deep">Notes</p>
                              <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-7 text-ink-2">
                                {submission.notes}
                              </p>
                            </div>
                          ) : null}

                          <div className="mt-5 flex flex-wrap gap-3">
                            <Link
                              href={`/api/submissions/${submission.id}/pdf`}
                              className="inline-flex items-center justify-center rounded-full bg-hi px-4 py-2 text-sm font-semibold text-white transition hover:bg-hi-deep"
                            >
                              Download PDF
                            </Link>
                            {submission.uploadedFileName ? (
                              <Link
                                href={`/api/uploads/${submission.uploadedFileName}`}
                                className="inline-flex items-center justify-center rounded-full border border-rule px-4 py-2 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep"
                              >
                                Download {submission.uploadedOriginalName ?? "uploaded hard copy"}
                              </Link>
                            ) : null}
                            <button
                              type="button"
                              onClick={() => handleDelete(submission.id)}
                              disabled={deletingId === submission.id}
                              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#E9B4B4] px-4 py-2 text-sm font-semibold text-[#9B1C1C] transition hover:bg-[#FFF1F1] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              {deletingId === submission.id ? "Deleting..." : "Delete Record"}
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
