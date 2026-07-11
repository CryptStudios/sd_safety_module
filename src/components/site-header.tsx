import Link from "next/link";

import { MenuIcon, ShieldIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training Categories" },
  { href: "/acknowledgment", label: "Forms & Reports" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071423]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <ShieldIcon />
          <div className="text-xl font-black tracking-tight text-white">SD Safety Module</div>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-200 transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
