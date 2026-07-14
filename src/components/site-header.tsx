import Link from "next/link";
import Image from "next/image";

import { MenuIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Learning Categories" },
  { href: "/acknowledgment", label: "Forms & Reports" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-rule bg-paper"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
