"use client";

export function LogoutButton() {
  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    window.location.href = "/login";
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex w-full items-center justify-center rounded-full border border-rule px-4 py-3 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep sm:w-auto sm:py-2"
    >
      Log Out
    </button>
  );
}
