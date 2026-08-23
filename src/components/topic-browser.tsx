"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export type TopicBrowserTopic = {
  id: string;
  slug: string;
  title: string;
  description: string;
  articleIntro: string;
  sectionHeadings: string[];
};

type TopicBrowserProps = {
  categorySlug: string;
  topics: TopicBrowserTopic[];
};

export function TopicBrowser({ categorySlug, topics }: TopicBrowserProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return topics;
    }

    return topics.filter((topic) =>
      [topic.title, topic.description, topic.articleIntro]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [topics, query]);

  useEffect(() => {
    setPage(1);
  }, [query, categorySlug]);

  const totalPages = Math.max(1, Math.ceil(filteredTopics.length / itemsPerPage));
  const currentPage = Math.min(page, totalPages);
  const pagedTopics = filteredTopics.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section className="rounded-[16px] border border-rule bg-paper p-5 shadow-[0_20px_50px_rgba(24,21,15,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow text-hi-deep">Topic Browser</p>
          <h2 className="mt-3 font-serif text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
            Browse Toolbox Talks
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-2">
            Use search and paging to move through this larger topic library without
            scrolling through every Toolbox Talk at once.
          </p>
        </div>

        <div className="w-full max-w-md rounded-[14px] border border-rule bg-bg p-3">
          <label htmlFor="topic-search" className="sr-only">
            Search topics
          </label>
          <input
            id="topic-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics in this category..."
            className="w-full bg-transparent px-2 py-2 text-sm text-ink outline-none placeholder:text-ink-3"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink-2">
          {filteredTopics.length} topics available
        </p>
        <p className="text-sm text-ink-3">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {pagedTopics.map((topic) => (
          <article
            key={topic.id}
            className="flex h-full flex-col rounded-[14px] border border-rule bg-paper p-5 shadow-[0_20px_50px_rgba(24,21,15,0.06)]"
          >
            <p className="eyebrow text-hi-deep">Toolbox Talk</p>
            <h3 className="mt-3 font-serif text-xl font-bold tracking-[-0.02em] text-ink">
              {topic.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-2">{topic.description}</p>
            <div className="mt-4 rounded-[10px] bg-bg p-4">
              <p className="eyebrow text-hi-deep">Sections</p>
              <ul className="mt-3 space-y-2">
                {topic.sectionHeadings.map((heading) => (
                  <li key={heading} className="text-sm leading-7 text-ink-2">
                    {heading}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={`/training/${categorySlug}/${topic.slug}`}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-hi px-5 py-3 text-sm font-semibold text-white transition hover:bg-hi-deep"
            >
              Read Toolbox Talk
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="button"
          onClick={() => setPage((value) => Math.max(1, value - 1))}
          disabled={currentPage === 1}
          className="w-full rounded-full border border-rule px-4 py-2 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          Previous page
        </button>
        <button
          type="button"
          onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
          disabled={currentPage === totalPages}
          className="w-full rounded-full border border-rule px-4 py-2 text-sm font-semibold text-ink transition hover:border-hi hover:bg-hi-soft disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          Next page
        </button>
      </div>
    </section>
  );
}
