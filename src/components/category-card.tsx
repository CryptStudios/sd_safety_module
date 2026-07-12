import Link from "next/link";

import { HardHatIcon } from "@/components/icons";
import type { TrainingCategory } from "@/lib/training-data";

type CategoryCardProps = {
  category: TrainingCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group rounded-[16px] border border-rule bg-paper p-6 shadow-[0_20px_50px_rgba(24,21,15,0.06)] transition hover:-translate-y-1 hover:border-hi/40 hover:shadow-[0_24px_60px_rgba(24,21,15,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <HardHatIcon />
        <div className="rounded-full bg-hi-soft px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-hi-deep">
          {category.topics.length} Topics
        </div>
      </div>
      <h3 className="mt-5 font-serif text-2xl font-bold tracking-tight text-ink">
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-ink-2">{category.description}</p>
      <Link
        href={`/training/${category.slug}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-rule px-5 py-3 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft hover:text-hi-deep"
      >
        View Topics
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
