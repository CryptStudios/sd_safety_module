import type { ReactNode } from "react";

type IconShellProps = {
  children: ReactNode;
  className?: string;
};

function IconShell({ children, className = "" }: IconShellProps) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-[14px] border border-hi/25 bg-hi-soft text-xl text-hi-deep ${className}`}
    >
      {children}
    </span>
  );
}

export function ShieldIcon() {
  return <IconShell>🛡</IconShell>;
}

export function HardHatIcon() {
  return <IconShell>⛑</IconShell>;
}

export function BoltIcon() {
  return <IconShell>⚡</IconShell>;
}

export function ClipboardIcon() {
  return <IconShell>📋</IconShell>;
}

export function LadderIcon() {
  return <IconShell>🪜</IconShell>;
}

export function FireIcon() {
  return <IconShell>🔥</IconShell>;
}

export function MedicalIcon() {
  return <IconShell>✚</IconShell>;
}

export function SearchIcon() {
  return <span className="text-sm text-ink-3">⌕</span>;
}

export function MenuIcon() {
  return <span className="text-lg text-ink">☰</span>;
}

export function ChevronDownIcon({ className = "" }: { className?: string }) {
  return <span className={`inline-block text-sm text-ink-3 transition-transform ${className}`}>▾</span>;
}

export function EyeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.7a3 3 0 0 0 4 4" />
      <path d="M9.9 5.1A11.4 11.4 0 0 1 12 5c6.4 0 10 7 10 7a18.5 18.5 0 0 1-3.2 4.2" />
      <path d="M6.2 6.3C3.8 8 2 12 2 12s3.6 6 10 6c1.7 0 3.2-.4 4.5-1" />
    </svg>
  );
}
