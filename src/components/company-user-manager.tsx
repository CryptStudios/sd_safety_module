"use client";

import { useMemo, useState } from "react";

type CompanyUser = {
  id: string;
  username: string;
  displayName: string;
  role: "admin" | "employee";
  createdAt: string;
};

type CompanyUserManagerProps = {
  initialUsers: CompanyUser[];
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
      user?: CompanyUser;
    };
  } catch {
    return {};
  }
}

export function CompanyUserManager({ initialUsers }: CompanyUserManagerProps) {
  const [users, setUsers] = useState(initialUsers);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "employee">("employee");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

  const sortedUsers = useMemo(
    () =>
      [...users].sort(
        (a, b) =>
          a.displayName.localeCompare(b.displayName) || a.username.localeCompare(b.username),
      ),
    [users],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          displayName,
          username,
          password,
          role,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to create user.");
      }

      if (result.user) {
        setUsers((current) => [...current, result.user as CompanyUser]);
      }

      setDisplayName("");
      setUsername("");
      setPassword("");
      setRole("employee");
      setStatus("success");
      setMessage(result.message ?? "User created.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to create user.");
    }
  }

  async function handleDelete(userId: string, userLabel: string) {
    if (!window.confirm(`Delete the ${userLabel} account?`)) {
      return;
    }

    setStatus("saving");
    setMessage("");
    setDeletingUserId(userId);

    try {
      const response = await fetch("/api/users", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to delete user.");
      }

      setUsers((current) => current.filter((user) => user.id !== userId));
      setStatus("success");
      setMessage(result.message ?? "User deleted.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to delete user.");
    } finally {
      setDeletingUserId(null);
    }
  }

  return (
    <section className="mt-8 rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-8">
      <p className="eyebrow text-hi-deep">Company Users</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
        Manage admin and employee accounts
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
        Create login accounts for your company without any email invites. Admins can
        manage records and company settings; employees can sign in and complete forms.
      </p>

      <form className="mt-6 grid gap-4 xl:grid-cols-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Display name
          <input
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Username
          <input
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Password
          <input
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Role
          <select
            value={role}
            onChange={(event) => setRole(event.target.value as "admin" | "employee")}
            className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={status === "saving"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 xl:col-span-4 xl:w-fit"
        >
          {status === "saving" ? "Saving..." : "Create User"}
        </button>
      </form>

      {message ? (
        <p className={`mt-4 text-sm ${status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"}`}>
          {message}
        </p>
      ) : null}

      <div className="mt-6 grid gap-3">
        {sortedUsers.map((user) => (
          <div
            key={user.id}
            className="flex flex-col gap-3 rounded-[12px] border border-rule bg-bg px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{user.displayName}</p>
              <p className="mt-1 text-sm text-ink-2">
                {user.username} · {user.role}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDelete(user.id, user.displayName)}
              disabled={status === "saving"}
              className="inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[#E9B4B4] px-4 py-2 text-sm font-semibold text-[#9B1C1C] transition hover:bg-[#FFF1F1] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {deletingUserId === user.id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
