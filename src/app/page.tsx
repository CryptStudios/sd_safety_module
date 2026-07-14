import Link from "next/link";

import { CategorySearch } from "@/components/category-search";
import {
  BoltIcon,
  ClipboardIcon,
  HardHatIcon,
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
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6 lg:px-8 lg:pb-6 lg:pt-14">
        <div className="rounded-[16px] border border-rule bg-paper p-8 text-ink shadow-[0_20px_50px_rgba(24,21,15,0.06)] lg:p-12">
          <p className="eyebrow text-hi-deep">Submit Daily Safety Module</p>
          <h1 className="mt-5 whitespace-nowrap font-serif text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl lg:text-6xl">
            Safety learning <span className="text-hi">by category and topic.</span>
          </h1>
          <p className="mt-6 text-base leading-8 text-ink-2 sm:text-lg">
            Browse category-based safety learning modules, open detailed topic articles,
            and complete acknowledgments through the approved form system.
          </p>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#categories"
                className="inline-flex items-center justify-center rounded-full bg-hi px-6 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep"
              >
                View Training Categories
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-rule px-5 py-3 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep"
              >
                Learn More
              </Link>
            </div>
            <div className="flex gap-10">
              <div>
                <p className="font-serif text-3xl font-bold text-ink">{trainingCategories.length}</p>
                <p className="eyebrow mt-1">Categories</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-ink">{totalTopicCount}</p>
                <p className="eyebrow mt-1">Topic Articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
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
    </div>
  );
}
