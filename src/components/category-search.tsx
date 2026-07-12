"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { HardHatIcon, SearchIcon } from "@/components/icons";
import { getCategoryGroup, groupCategories } from "@/lib/category-groups";
import type { TrainingCategory } from "@/lib/training-data";

type CategorySearchProps = {
  categories: TrainingCategory[];
  /** Render the "Training Categories" heading + intro. Off when embedded under another page's header. */
  showHeading?: boolean;
};

export function CategorySearch({
  categories,
  showHeading = true
}: CategorySearchProps) {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return categories;
    }

    return categories.filter((category) => {
      const haystack = [
        category.title,
        category.description,
        getCategoryGroup(category.slug)
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [categories, query]);

  const groups = useMemo(
    () => groupCategories(filteredCategories),
    [filteredCategories]
  );

  return (
    <div>
      {showHeading ? (
        <>
          <p className="eyebrow text-hi-deep">Browse</p>
          <h1 className="mt-3 font-serif text-5xl font-bold tracking-[-0.025em] text-ink sm:text-6xl">
            Training Categories
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-2">
            Open a category, choose a topic, and read the full learning article before
            completing the acknowledgment form.
          </p>
        </>
      ) : null}

      <div className="mt-8 max-w-2xl rounded-[14px] border border-rule bg-paper p-3 shadow-[0_20px_50px_rgba(24,21,15,0.06)]">
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

      <p className="mt-6 text-sm text-ink-3">
        {filteredCategories.length} categories
      </p>

      {groups.length === 0 ? (
        <p className="mt-8 text-sm text-ink-2">
          No categories match your search.
        </p>
      ) : (
        <div className="mt-8 space-y-10">
          {groups.map((group) => (
            <section key={group.name}>
              <div className="flex items-baseline gap-3 border-b border-rule pb-3">
                <h2 className="eyebrow text-hi-deep">{group.name}</h2>
                <span className="text-xs text-ink-3">
                  {group.categories.length}
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/training/${category.slug}`}
                    className="flex items-center justify-between gap-4 rounded-[12px] border border-rule bg-paper px-4 py-4 shadow-[0_10px_30px_rgba(24,21,15,0.04)] transition hover:-translate-y-0.5 hover:border-hi hover:shadow-[0_16px_40px_rgba(24,21,15,0.08)]">
                    <div className="flex items-center gap-4">
                      <HardHatIcon />
                      <div>
                        <p className="font-semibold text-ink">{category.title}</p>
                        <p className="text-sm text-ink-3">
                          {category.topics.length} topics
                        </p>
                      </div>
                    </div>
                    <span className="text-hi">→</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
