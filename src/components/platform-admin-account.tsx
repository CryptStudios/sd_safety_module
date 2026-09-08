"use client";

import { useState } from "react";

import { PasswordInput } from "@/components/password-input";

type PlatformAdminAccountProps = {
  currentUsername: string;
  currentDisplayName: string;
};

async function readResponsePayload(response: Response) {
  const raw = await response.text();

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as { message?: string; error?: string; username?: string; displayName?: string };
  } catch {
    return {};
  }
}

export function PlatformAdminAccount({ currentUsername, currentDisplayName }: PlatformAdminAccountProps) {
  const [username, setUsername] = useState(currentUsername);
  const [displayName, setDisplayName] = useState(currentDisplayName);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    try {
      const response = await fetch("/api/auth/platform-admin", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newUsername: username,
          newDisplayName: displayName,
          newPassword: newPassword || undefined,
        }),
      });

      const result = await readResponsePayload(response);

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to update admin account.");
      }

      if (result.username) {
        setUsername(result.username);
      }

      if (result.displayName) {
        setDisplayName(result.displayName);
      }

      setCurrentPassword("");
      setNewPassword("");
      setStatus("success");
      setMessage(result.message ?? "Admin account updated.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to update admin account.");
    }
  }

  return (
    <section className="mt-8 rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-8">
      <p className="eyebrow text-hi-deep">Platform Admin Account</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">Change your login</h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
        Update the username, display name, or password used to sign in as the Submit
        Daily platform admin. Your current password is required to confirm the change.
      </p>

      <form className="mt-6 grid gap-4 xl:grid-cols-2" onSubmit={handleSubmit}>
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
          Display name
          <input
            required
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          New password
          <PasswordInput
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            placeholder="Leave blank to keep your current password"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Current password
          <PasswordInput
            required
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={status === "saving"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 xl:col-span-2 xl:w-fit"
        >
          {status === "saving" ? "Saving..." : "Save Changes"}
        </button>
      </form>

      {message ? (
        <p className={`mt-4 text-sm ${status === "error" ? "text-[#9B1C1C]" : "text-[#1B5E20]"}`}>
          {message}
        </p>
      ) : null}
    </section>
  );
}
