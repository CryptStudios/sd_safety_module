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
