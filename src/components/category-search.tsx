"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { HardHatIcon, SearchIcon } from "@/components/icons";
import type { TrainingCategory } from "@/lib/training-data";

type CategorySearchProps = {
  categories: TrainingCategory[];
};

export function CategorySearch({ categories }: CategorySearchProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return categories;
    }

    return categories.filter((category) => {
      const haystack = [
        category.title,
        category.description,
        category.overview,
        ...category.topics.map((topic) => topic.title)
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [categories, query]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filteredCategories.length / itemsPerPage));
  const currentPage = Math.min(page, totalPages);
  const pagedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[16px] border border-white/10 bg-ink p-6 text-[#f5efe2] shadow-[0_20px_50px_rgba(24,21,15,0.1)] sm:p-8">
        <p className="eyebrow text-hi">Browse</p>
        <h1 className="mt-3 font-serif text-5xl font-bold tracking-[-0.025em] sm:text-6xl">
          Training Categories
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c9c2b2]">
          Open a category, choose a topic, and read the full learning article before
          completing the acknowledgment form.
        </p>

        <div className="mt-8 rounded-[14px] border border-white/10 bg-paper p-3">
          <label htmlFor="category-search" className="sr-only">
            Search categories
          </label>
          <div className="flex items-center gap-3 rounded-[10px] bg-bg px-4 py-3">
            <SearchIcon />
            <input
              id="category-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories..."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {pagedCategories.map((category) => (
            <Link
              key={category.id}
              href={`/training/${category.slug}`}
              className="flex items-center justify-between gap-4 rounded-[10px] border border-white/10 bg-white/5 px-4 py-4 transition hover:border-hi/50 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <HardHatIcon />
                <div>
                  <p className="font-semibold text-[#f5efe2]">{category.title}</p>
                  <p className="text-sm text-[#c9c2b2]">{category.topics.length} topics</p>
                </div>
              </div>
              <span className="text-hi">→</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[#f5efe2] transition hover:border-hi disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <p className="text-sm text-[#c9c2b2]">
            Page {currentPage} of {totalPages}
          </p>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-[#f5efe2] transition hover:border-hi disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink-2">
            Showing {pagedCategories.length} categories on this page
          </p>
          <p className="text-sm text-ink-3">
            {filteredCategories.length} matching categories
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pagedCategories.map((category) => (
          <article
            key={category.id}
            className="rounded-[16px] border border-rule bg-paper p-5 shadow-[0_20px_50px_rgba(24,21,15,0.06)] sm:p-6"
          >
            <p className="eyebrow text-hi-deep">Training Category</p>
            <h2 className="mt-3 font-serif text-2xl font-bold tracking-[-0.02em] text-ink">
              {category.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-2">{category.description}</p>
            <p className="mt-4 text-sm leading-7 text-ink-2">{category.overview}</p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="rounded-full bg-hi-soft px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-hi-deep">
                {category.topics.length} topics
              </span>
              <Link
                href={`/training/${category.slug}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-hi px-4 py-2 text-sm font-semibold text-white transition hover:bg-hi-deep"
              >
                Browse Topics
              </Link>
            </div>
          </article>
        ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-rule px-4 py-2 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous page
          </button>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-rule px-4 py-2 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
