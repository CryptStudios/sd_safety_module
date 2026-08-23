"use client";

import { useState } from "react";

type LoginFormProps = {
  companies: Array<{
    slug: string;
    name: string;
  }>;
};

export function LoginForm({ companies }: LoginFormProps) {
  const [loginType, setLoginType] = useState<"platform" | "company">(
    companies.length === 0 ? "platform" : "company",
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginType, username, password }),
      });

      const result = (await response.json()) as { error?: string; redirectTo?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to sign in.");
      }

      window.location.href = result.redirectTo ?? "/workspace";
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to sign in.");
    }
  }

  return (
    <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-2 text-sm font-semibold text-ink">
        Sign in as
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setLoginType("platform")}
            className={`rounded-[12px] border px-4 py-3 text-left text-sm transition ${
              loginType === "platform"
                ? "border-hi bg-hi-soft text-hi-deep"
                : "border-rule bg-bg text-ink"
            }`}
          >
            Platform Admin
          </button>
          <button
            type="button"
            onClick={() => setLoginType("company")}
            className={`rounded-[12px] border px-4 py-3 text-left text-sm transition ${
              loginType === "company"
                ? "border-hi bg-hi-soft text-hi-deep"
                : "border-rule bg-bg text-ink"
            }`}
          >
            Company Account
          </button>
        </div>
      </div>

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
      <p className="text-sm leading-7 text-ink-2">
        Platform admin credentials can be changed anytime from the dashboard after signing in.
        Company admins and employees use the company logins created inside the platform dashboard.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Signing in..." : "Sign In"}
        </button>
        {message ? <p className="text-sm sm:text-right text-[#9B1C1C]">{message}</p> : null}
      </div>
    </form>
  );
}
