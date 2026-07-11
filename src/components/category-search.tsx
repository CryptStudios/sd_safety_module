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
      <div className="rounded-[2rem] border border-white/10 bg-[#071423] p-6 text-white shadow-[0_30px_80px_-50px_rgba(0,0,0,0.85)] sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-300">
          Browse
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl">Training Categories</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
          Open a category, choose a topic, and read the full learning article before
          completing the acknowledgment form.
        </p>

        <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white p-3">
          <label htmlFor="category-search" className="sr-only">
            Search categories
          </label>
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
            <SearchIcon />
            <input
              id="category-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories..."
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {pagedCategories.map((category) => (
            <Link
              key={category.id}
              href={`/training/${category.slug}`}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-amber-400/50 hover:bg-white/8"
            >
              <div className="flex items-center gap-4">
                <HardHatIcon />
                <div>
                  <p className="font-bold text-white">{category.title}</p>
                  <p className="text-sm text-slate-300">{category.topics.length} topics</p>
                </div>
              </div>
              <span className="text-amber-300">→</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <p className="text-sm text-slate-300">
            Page {currentPage} of {totalPages}
          </p>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-bold text-slate-700">
            Showing {pagedCategories.length} categories on this page
          </p>
          <p className="text-sm text-slate-500">
            {filteredCategories.length} matching categories
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pagedCategories.map((category) => (
          <article
            key={category.id}
            className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)] sm:p-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">
              Training Category
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
              {category.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{category.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">{category.overview}</p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
                {category.topics.length} topics
              </span>
              <Link
                href={`/training/${category.slug}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
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
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-amber-400 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous page
          </button>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-amber-400 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
