import Link from "next/link";
import { notFound } from "next/navigation";

import { ShieldIcon } from "@/components/icons";
import { TopicBrowser } from "@/components/topic-browser";
import { getCategoryBySlug, trainingCategories } from "@/lib/training-data";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return trainingCategories.map((category) => ({
    slug: category.slug
  }));
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
        <section className="rounded-[16px] border border-rule bg-paper p-8 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] lg:p-10">
          <Link
            href="/training"
            className="text-sm font-bold text-hi-deep transition hover:text-hi"
          >
            ← Back to Categories
          </Link>
          <p className="mt-5 eyebrow text-hi-deep">Training Category</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">{category.title}</h1>
          <p className="mt-4 text-sm leading-7 text-ink-2">{category.description}</p>
          <ul className="mt-5 space-y-3">
            {category.keyTakeaways.map((item) => (
              <li
                key={item}
                className="rounded-[10px] border border-rule bg-paper/5 px-4 py-3 text-sm font-bold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <p className="eyebrow text-hi-deep">
              Source Basis
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Reference material
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-2">
              These links support the article content in this category and can be used for
              additional reading.
            </p>
            <div className="mt-5 space-y-3">
              {category.sourceLinks.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[10px] border border-rule bg-paper/5 px-4 py-3 text-sm font-bold text-ink transition hover:border-hi hover:bg-paper/10"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] border border-rule bg-paper p-6 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <div className="flex items-center gap-3">
              <ShieldIcon />
              <p className="eyebrow text-hi-deep">At a Glance</p>
            </div>
            <p className="mt-5 text-5xl font-bold tracking-tight text-ink">
              {category.topics.length}
            </p>
            <p className="mt-2 text-sm leading-7 text-ink-2">
              topic articles in this category
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-10">
        <TopicBrowser category={category} />
      </section>
    </div>
  );
}
