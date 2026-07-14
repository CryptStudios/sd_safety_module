"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MenuIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Learning Categories" },
  { href: "/acknowledgment", label: "Forms & Reports" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/submit-daily-safety-logo.png"
            alt="Submit Daily Safety Module logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-white/10 bg-white/5 object-cover shadow-[0_10px_24px_-18px_rgba(0,0,0,0.9)]"
            priority
          />
          <div className="font-serif text-xl font-bold tracking-tight text-ink">
            Submit Daily Safety Module
          </div>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-2 transition hover:text-hi"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-rule bg-paper text-ink transition hover:border-hi hover:text-hi-deep"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-rule bg-bg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-3 py-3 text-sm font-medium text-ink-2 transition hover:bg-hi-soft hover:text-hi-deep"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
