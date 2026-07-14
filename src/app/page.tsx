import Link from "next/link";

import { CategorySearch } from "@/components/category-search";
import {
  BoltIcon,
  ClipboardIcon,
  HardHatIcon,
  MedicalIcon,
  ShieldIcon
} from "@/components/icons";
import { totalTopicCount, trainingCategories } from "@/lib/training-data";

const processSteps = [
  {
    title: "Select a Topic",
    description: "Choose the safety topic your crew needs to review.",
    icon: <HardHatIcon />
  },
  {
    title: "Review Material",
    description: "Read the article-style training content and learn the key safety points.",
    icon: <ClipboardIcon />
  },
  {
    title: "Complete Form",
    description: "Open the linked acknowledgment form when the article review is complete.",
    icon: <BoltIcon />
  },
  {
    title: "Submit Record",
    description: "Completion records are handled through the external company-approved form system.",
    icon: <ShieldIcon />
  }
];

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="bg-[#071423]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-14">
          <div className="rounded-[2.25rem] border border-white/10 bg-[#071423] p-8 text-white lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-300">
              Submit Daily Safety Module
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              Safety learning
              <br />
              <span className="text-amber-400">by category and topic.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Browse category-based safety learning modules, open detailed topic articles,
              and complete acknowledgments through the approved form system.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/training"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300"
              >
                View Training Categories
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(160deg,#0d2238_0%,#16304f_38%,#f5b300_100%)] shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)]">
            <div className="grid h-full min-h-[420px] grid-rows-[1fr_auto]">
              <div className="relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.34),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.38))]" />
                <div className="absolute bottom-0 left-0 right-0 top-0">
                  <div className="absolute bottom-0 left-10 h-56 w-16 rounded-t-full bg-[#d8e045]/85" />
                  <div className="absolute bottom-0 left-16 h-72 w-24 rounded-t-[3rem] bg-[#203144]/95" />
                  <div className="absolute bottom-0 left-40 h-24 w-44 rounded-t-[2rem] bg-[#0b1828]/70" />
                  <div className="absolute bottom-0 right-12 h-52 w-16 rounded-t-full bg-slate-200/90" />
                  <div className="absolute bottom-0 right-16 h-68 w-24 rounded-t-[3rem] bg-[#2a3d54]/95" />
                  <div className="absolute bottom-0 right-38 h-18 w-24 rotate-[-18deg] rounded-full bg-amber-300/85" />
                  <div className="absolute left-1/2 top-8 h-[2px] w-56 -translate-x-1/2 rotate-[18deg] bg-slate-300/70" />
                  <div className="absolute left-[58%] top-16 h-[2px] w-44 rotate-[48deg] bg-slate-300/60" />
                </div>
                <div className="relative z-10 max-w-sm rounded-[1.5rem] border border-white/20 bg-[#08111d]/45 p-5 backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-300">
                    Learning First
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/85">
                    Each category leads to full topic articles designed to be read clearly,
                    understood quickly, and reviewed in a structured way.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 border-t border-white/10 bg-[#08111d]/75 p-6 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-black text-white">{trainingCategories.length}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Categories</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">{totalTopicCount}+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Topic Articles</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">Static</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">No Backend Needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-600">How It Works</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            Simple steps to complete your training
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]"
            >
              <div className="mx-auto flex justify-center">{step.icon}</div>
              <p className="mt-6 text-sm font-black text-amber-600">
                {index + 1}. {step.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-600">
            Browse Training Categories
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            All safety training categories
          </h2>
        </div>

        <div className="mt-10">
          <CategorySearch categories={trainingCategories} showHeading={false} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#071423] p-8 text-white shadow-[0_36px_100px_-50px_rgba(0,0,0,0.9)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-5">
            <MedicalIcon />
            <div>
              <h3 className="text-3xl font-black tracking-tight">Clearer learning. Simpler review.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Each topic is organized so workers can read, understand, and complete the
                related acknowledgment without extra clutter.
              </p>
            </div>
          </div>
          <Link
            href="#categories"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300"
          >
            Review Categories
          </Link>
        </div>
      </section>
    </div>
  );
}
