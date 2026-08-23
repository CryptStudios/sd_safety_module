"use client";

import { useMemo, useState } from "react";

export type ProjectRecord = {
  id: string;
  name: string;
  number: string | null;
  createdAt: string;
};

type ProjectManagerProps = {
  initialProjects: ProjectRecord[];
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
      projects?: ProjectRecord[];
      count?: number;
      headers?: string[];
    };
  } catch {
    return {};
  }
}

function guessNumberColumnIndex(headers: string[]) {
  const index = headers.findIndex((header) => {
    const normalized = header.toLowerCase();
    return normalized.includes("number") || normalized.includes("#");
  });

  return index >= 0 ? index : null;
}

export function ProjectManager({ initialProjects }: ProjectManagerProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [manualName, setManualName] = useState("");
  const [manualNumber, setManualNumber] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [csvHeaders, setCsvHeaders] = useState<string[] | null>(null);
  const [nameColumnIndex, setNameColumnIndex] = useState<number | null>(null);
  const [numberColumnIndex, setNumberColumnIndex] = useState<number | null>(null);
  const [previewing, setPreviewing] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => a.name.localeCompare(b.name)),
    [projects],
  );
  const previewProjects = showAllProjects ? sortedProjects : sortedProjects.slice(0, 24);

  async function handleManualSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!manualName.trim()) {
      setStatus("error");
      setMessage("Enter a project name first.");
      return;
    }

    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: manualName,
          number: manualNumber,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to save the project.");
      }

      setProjects(result.projects ?? projects);
      setManualName("");
      setManualNumber("");
      setStatus("success");
      setMessage(result.message ?? "Project added.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to save the project.");
    }
  }

  async function handleFileChange(selectedFile: File | null) {
    setFile(selectedFile);
    setCsvHeaders(null);
    setNameColumnIndex(null);
    setNumberColumnIndex(null);
    setMessage("");

    if (!selectedFile) {
      return;
    }

    setPreviewing(true);

    try {
      const payload = new FormData();
      payload.set("csvFile", selectedFile);
      payload.set("mode", "preview");

      const response = await fetch("/api/projects", {
        method: "POST",
        body: payload,
      });

      const result = await readResponsePayload(response);

      if (!response.ok || !result.headers) {
        throw new Error(result.error ?? "Unable to read that CSV file.");
      }

      setCsvHeaders(result.headers);
      setNameColumnIndex(0);
      setNumberColumnIndex(guessNumberColumnIndex(result.headers));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to read that CSV file.");
      setFile(null);
    } finally {
      setPreviewing(false);
    }
  }

  function handleColumnRoleChange(index: number, role: "ignore" | "name" | "number") {
    if (role === "name") {
      setNameColumnIndex(index);
      setNumberColumnIndex((current) => (current === index ? null : current));
    } else if (role === "number") {
      setNumberColumnIndex(index);
      setNameColumnIndex((current) => (current === index ? null : current));
    } else {
      setNameColumnIndex((current) => (current === index ? null : current));
      setNumberColumnIndex((current) => (current === index ? null : current));
    }
  }

  async function handleCsvSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!file || nameColumnIndex === null) {
      setStatus("error");
      setMessage("Choose a CSV file and which column holds the project name.");
      return;
    }

    setStatus("saving");
    setMessage("");

    const payload = new FormData();
    payload.set("csvFile", file);
    payload.set("nameColumnIndex", String(nameColumnIndex));

    if (numberColumnIndex !== null) {
      payload.set("numberColumnIndex", String(numberColumnIndex));
    }

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        body: payload,
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to import project names.");
      }

      setProjects(result.projects ?? projects);
      setFile(null);
      setCsvHeaders(null);
      setNameColumnIndex(null);
      setNumberColumnIndex(null);
      setStatus("success");
      setMessage(result.message ?? "Project names imported.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to import project names.");
    }
  }

  async function handleDelete(projectId: string, projectName: string) {
    if (!window.confirm(`Delete ${projectName} from the project list?`)) {
      return;
    }

    setStatus("saving");
    setMessage("");
    setDeletingId(projectId);

    try {
      const response = await fetch("/api/projects", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ projectId }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to delete the project.");
      }

      setProjects(result.projects ?? projects);
      setStatus("success");
      setMessage(result.message ?? "Project deleted.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to delete the project.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section className="mt-8 rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-8">
      <p className="eyebrow text-hi-deep">Projects</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
        Manage project names and numbers
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
        Add projects manually or upload a CSV. Every form that asks for a project
        (attendance, incident investigation, weekly inspection) uses this same list.
      </p>
      <p className="mt-4 text-sm font-semibold text-ink-2">{projects.length} projects loaded</p>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <form className="grid gap-4" onSubmit={handleManualSubmit}>
          <p className="text-sm font-semibold text-ink">Add a project manually</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Project name
              <input
                value={manualName}
                onChange={(event) => setManualName(event.target.value)}
                className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Project number
              <input
                value={manualNumber}
                onChange={(event) => setManualNumber(event.target.value)}
                placeholder="Optional"
                className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "saving"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "saving" ? "Saving..." : "Add Project"}
          </button>
        </form>

        <form className="grid gap-4" onSubmit={handleCsvSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Replace projects from CSV
            <input
              type="file"
              accept=".csv,text/csv"
              onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink file:mr-4 file:rounded-full file:border-0 file:bg-hi file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
            />
          </label>

          <p className="text-sm leading-7 text-ink-2">
            Use whatever columns and headers your own CSV already has — after you choose a
            file, tell us what each column is. One column must be the project name; the
            project number is optional. Uploading replaces the current list.
          </p>

          {previewing ? (
            <p className="text-sm text-ink-2">Reading column headers…</p>
          ) : null}

          {csvHeaders ? (
            <div className="grid gap-4 rounded-[12px] border border-rule bg-bg p-4 sm:grid-cols-2">
              {csvHeaders.map((header, index) => {
                const role =
                  nameColumnIndex === index ? "name" : numberColumnIndex === index ? "number" : "ignore";

                return (
                  <label key={`${header}-${index}`} className="grid gap-2 text-sm font-semibold text-ink">
                    {header ? `Column ${index + 1} — ${header}` : `Column ${index + 1}`}
                    <select
                      value={role}
                      onChange={(event) =>
                        handleColumnRoleChange(index, event.target.value as "ignore" | "name" | "number")
                      }
                      className="w-full min-w-0 rounded-[12px] border border-rule bg-paper px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
                    >
                      <option value="ignore">Ignore this column</option>
                      <option value="name">Project Name</option>
                      <option value="number">Project Number</option>
                    </select>
                  </label>
                );
              })}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "saving" || previewing || !csvHeaders}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-rule px-6 py-3 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "saving" ? "Importing..." : "Import Project CSV"}
          </button>
        </form>
      </div>

      {message ? (
        <p className={`mt-4 text-sm ${status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"}`}>
          {message}
        </p>
      ) : null}

      <div className="mt-6 rounded-[14px] border border-rule bg-bg p-4">
        <p className="eyebrow text-hi-deep">Project List</p>
        {previewProjects.length === 0 ? (
          <p className="mt-2 text-sm text-ink-2">No projects have been added yet.</p>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {previewProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-stretch gap-3 rounded-[12px] border border-rule bg-paper px-4 py-3 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="min-w-0 break-words sm:truncate">
                  {project.number ? `#${project.number} — ` : ""}
                  {project.name}
                </span>
                <button
                  type="button"
                  onClick={() => handleDelete(project.id, project.name)}
                  disabled={status === "saving"}
                  className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[#E9B4B4] px-3 py-2 text-xs font-semibold text-[#9B1C1C] transition hover:bg-[#FFF1F1] disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-9 sm:w-auto sm:py-1"
                >
                  {deletingId === project.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            ))}
          </div>
        )}
        {sortedProjects.length > previewProjects.length ? (
          <p className="mt-4 text-sm text-ink-2">
            Showing {previewProjects.length} of {sortedProjects.length} projects.{" "}
            <button
              type="button"
              onClick={() => setShowAllProjects(true)}
              className="font-semibold text-hi-deep underline underline-offset-2"
            >
              Show all
            </button>
          </p>
        ) : showAllProjects && sortedProjects.length > 24 ? (
          <p className="mt-4 text-sm text-ink-2">
            Showing all {sortedProjects.length} projects.{" "}
            <button
              type="button"
              onClick={() => setShowAllProjects(false)}
              className="font-semibold text-hi-deep underline underline-offset-2"
            >
              Show fewer
            </button>
          </p>
        ) : null}
      </div>
    </section>
  );
}
