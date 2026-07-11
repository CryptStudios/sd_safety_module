"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import type { TrainingCategory } from "@/lib/training-data";

type TopicBrowserProps = {
  category: TrainingCategory;
};

export function TopicBrowser({ category }: TopicBrowserProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return category.topics;
    }

    return category.topics.filter((topic) =>
      [topic.title, topic.description, topic.articleIntro]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [category.topics, query]);

  useEffect(() => {
    setPage(1);
  }, [query, category.slug]);

  const totalPages = Math.max(1, Math.ceil(filteredTopics.length / itemsPerPage));
  const currentPage = Math.min(page, totalPages);
  const pagedTopics = filteredTopics.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-700">
            Topic Browser
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            Browse topic articles
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
            Use search and paging to move through this larger topic library without
            scrolling through every article at once.
          </p>
        </div>

        <div className="w-full max-w-md rounded-[1.4rem] border border-slate-200 bg-slate-50 p-3">
          <label htmlFor="topic-search" className="sr-only">
            Search topics
          </label>
          <input
            id="topic-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics in this category..."
            className="w-full bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-bold text-slate-700">
          {filteredTopics.length} topics available
        </p>
        <p className="text-sm text-slate-500">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {pagedTopics.map((topic) => (
          <article
            key={topic.id}
            className="flex h-full flex-col rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-40px_rgba(2,6,23,0.45)]"
          >
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
              Topic Article
            </p>
            <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">
              {topic.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{topic.description}</p>
            <div className="mt-4 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">
                Sections
              </p>
              <ul className="mt-3 space-y-2">
                {topic.articleSections.slice(0, 3).map((section) => (
                  <li key={section.heading} className="text-sm leading-7 text-slate-800">
                    {section.heading}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={`/training/${category.slug}/${topic.slug}`}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300"
            >
              Read Full Article
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
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
    </section>
  );
}
