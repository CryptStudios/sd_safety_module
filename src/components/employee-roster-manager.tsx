"use client";

import { useMemo, useState } from "react";

export type EmployeeRecord = {
  id: string;
  name: string;
  number: string | null;
  createdAt: string;
};

type EmployeeRosterManagerProps = {
  initialEmployees: EmployeeRecord[];
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
      employees?: EmployeeRecord[];
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

export function EmployeeRosterManager({
  initialEmployees,
}: EmployeeRosterManagerProps) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [manualNames, setManualNames] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [csvHeaders, setCsvHeaders] = useState<string[] | null>(null);
  const [nameColumnIndex, setNameColumnIndex] = useState<number | null>(null);
  const [numberColumnIndex, setNumberColumnIndex] = useState<number | null>(null);
  const [previewing, setPreviewing] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showAllEmployees, setShowAllEmployees] = useState(false);

  const sortedEmployees = useMemo(
    () => [...employees].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" })),
    [employees],
  );
  const previewEmployees = showAllEmployees ? sortedEmployees : sortedEmployees.slice(0, 24);

  async function handleManualSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!manualNames.trim()) {
      setStatus("error");
      setMessage("Enter one or more employee names first.");
      return;
    }

    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/employees", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          mode: "append",
          names: manualNames,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to save employee names.");
      }

      setEmployees(result.employees ?? employees);
      setManualNames("");
      setStatus("success");
      setMessage(result.message ?? "Employee roster updated.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to save employee names.");
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

      const response = await fetch("/api/employees", {
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
      setMessage("Choose a CSV file and which column holds the employee name.");
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
      const response = await fetch("/api/employees", {
        method: "POST",
        body: payload,
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to import employee names.");
      }

      setEmployees(result.employees ?? employees);
      setFile(null);
      setCsvHeaders(null);
      setNameColumnIndex(null);
      setNumberColumnIndex(null);
      setStatus("success");
      setMessage(result.message ?? "Employee roster imported.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to import employee names.");
    }
  }

  async function handleDelete(employeeId: string, employeeName: string) {
    if (!window.confirm(`Delete ${employeeName} from the employee roster?`)) {
      return;
    }

    setStatus("saving");
    setMessage("");
    setDeletingId(employeeId);

    try {
      const response = await fetch("/api/employees", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          employeeId,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to delete employee name.");
      }

      setEmployees(result.employees ?? employees);
      setStatus("success");
      setMessage(result.message ?? "Employee deleted.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to delete employee name.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section className="mt-8 rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-8">
      <p className="eyebrow text-hi-deep">Employee Roster</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
        Manage weekly attendee roster
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
        Add employees manually or replace the roster from CSV. The Toolbox Talk form
        uses this list so supervisors can check off everyone who attended.
      </p>
      <p className="mt-4 text-sm font-semibold text-ink-2">
        {employees.length} employee names loaded
      </p>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <form className="grid gap-4" onSubmit={handleManualSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Add employee names manually
            <textarea
              rows={8}
              value={manualNames}
              onChange={(event) => setManualNames(event.target.value)}
              placeholder={"Enter one name per line, or separate names with commas.\nInclude an employee number by prefixing the line: #1023 - Jane Doe"}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
            />
          </label>

          <button
            type="submit"
            disabled={status === "saving"}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "saving" ? "Saving..." : "Add Employees"}
          </button>
        </form>

        <form className="grid gap-4" onSubmit={handleCsvSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-ink">
            Replace roster from CSV
            <input
              type="file"
              accept=".csv,text/csv"
              onChange={(event) => handleFileChange(event.target.files?.[0] ?? null)}
              className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink file:mr-4 file:rounded-full file:border-0 file:bg-hi file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
            />
          </label>

          <p className="text-sm leading-7 text-ink-2">
            Use whatever columns and headers your own CSV already has — after you choose a
            file, tell us what each column is. One column must be the employee name; the
            employee number is optional. Uploading replaces the current roster.
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
                      <option value="name">Employee Name</option>
                      <option value="number">Employee Number</option>
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
            {status === "saving" ? "Importing..." : "Import Employee CSV"}
          </button>
        </form>
      </div>

      {message ? (
        <p className={`mt-4 text-sm ${status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"}`}>
          {message}
        </p>
      ) : null}

      <div className="mt-6 rounded-[14px] border border-rule bg-bg p-4">
        <p className="eyebrow text-hi-deep">Roster Preview</p>
        {previewEmployees.length === 0 ? (
          <p className="mt-2 text-sm text-ink-2">No employee names have been added yet.</p>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {previewEmployees.map((employee) => (
              <div
                key={employee.id}
                className="flex flex-col items-stretch gap-3 rounded-[12px] border border-rule bg-paper px-4 py-3 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="min-w-0 break-words sm:truncate">
                  {employee.number ? `#${employee.number} — ` : ""}
                  {employee.name}
                </span>
                <button
                  type="button"
                  onClick={() => handleDelete(employee.id, employee.name)}
                  disabled={status === "saving"}
                  className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[#E9B4B4] px-3 py-2 text-xs font-semibold text-[#9B1C1C] transition hover:bg-[#FFF1F1] disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-9 sm:w-auto sm:py-1"
                >
                  {deletingId === employee.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            ))}
          </div>
        )}
        {sortedEmployees.length > previewEmployees.length ? (
          <p className="mt-4 text-sm text-ink-2">
            Showing {previewEmployees.length} of {sortedEmployees.length} employees.{" "}
            <button
              type="button"
              onClick={() => setShowAllEmployees(true)}
              className="font-semibold text-hi-deep underline underline-offset-2"
            >
              Show all
            </button>
          </p>
        ) : showAllEmployees && sortedEmployees.length > 24 ? (
          <p className="mt-4 text-sm text-ink-2">
            Showing all {sortedEmployees.length} employees.{" "}
            <button
              type="button"
              onClick={() => setShowAllEmployees(false)}
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
