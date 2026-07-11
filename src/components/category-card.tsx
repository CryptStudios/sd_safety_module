import Link from "next/link";

import { HardHatIcon } from "@/components/icons";
import type { TrainingCategory } from "@/lib/training-data";

type CategoryCardProps = {
  category: TrainingCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(2,6,23,0.45)]">
      <div className="flex items-start justify-between gap-4">
        <HardHatIcon />
        <div className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
          {category.topics.length} Topics
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">{category.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
      <Link
        href={`/training/${category.slug}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-amber-400 hover:bg-amber-50"
      >
        View Topics
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
