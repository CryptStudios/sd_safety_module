import Link from "next/link";
import { notFound } from "next/navigation";

import { ClipboardIcon, ShieldIcon } from "@/components/icons";
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
          <p className="mt-5 eyebrow text-hi-deep">
            Training Category
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">{category.title}</h1>
          <p className="mt-4 text-base leading-8 text-ink-2">{category.description}</p>
          <p className="mt-6 text-sm leading-8 text-ink-2">{category.overview}</p>

          <div className="mt-8 rounded-[14px] border border-rule bg-bg p-6">
            <p className="eyebrow text-hi-deep">
              Reading Focus
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-2">{category.meetingPurpose}</p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[16px] border border-white/10 bg-ink p-6 text-[#f5efe2] shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <div className="flex items-center gap-4">
              <ShieldIcon />
              <div>
                <p className="eyebrow text-hi">
                  At a Glance
                </p>
                <p className="mt-1 text-sm text-[#c9c2b2]">{category.topics.length} topics</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {category.keyTakeaways.map((item) => (
                <li
                  key={item}
                  className="rounded-[10px] border border-white/10 bg-paper/5 px-4 py-3 text-sm leading-7 text-[#c9c2b2]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[16px] border border-white/10 bg-ink p-6 text-[#f5efe2] shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <div className="flex items-center gap-4">
              <ClipboardIcon />
              <div>
                <p className="eyebrow text-hi">
                  Article Notes
                </p>
                <p className="mt-1 text-sm text-[#c9c2b2]">Quick article context</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {category.supervisorNotes.map((item) => (
                <li
                  key={item}
                  className="rounded-[10px] border border-white/10 bg-paper/5 px-4 py-3 text-sm leading-7 text-[#c9c2b2]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[16px] border border-white/10 bg-ink p-6 text-[#f5efe2] shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <p className="eyebrow text-hi">
              Source Basis
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Reference material
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#c9c2b2]">
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
                  className="block rounded-[10px] border border-white/10 bg-paper/5 px-4 py-3 text-sm font-bold text-[#f5efe2] transition hover:border-hi hover:bg-paper/10"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-10 space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div className="space-y-6">
          {category.articleSections.map((section) => (
            <article
              key={section.heading}
              className="rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]"
            >
              <h2 className="text-3xl font-bold tracking-tight text-ink">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-ink-2">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]">
            <p className="eyebrow text-hi-deep">
              Key Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
              Questions to think through while learning
            </h2>
            <ul className="mt-6 space-y-4">
              {category.discussionPrompts.map((prompt) => (
                <li key={prompt} className="rounded-[10px] bg-bg px-5 py-4 text-sm leading-7 text-ink-2">
                  {prompt}
                </li>
              ))}
            </ul>
          </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[16px] border border-rule bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]">
              <p className="eyebrow text-hi-deep">
                Topic Volume
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
                Larger article library
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink-2">
                This category now includes an expanded article library with many more topic
                variations, planning views, review angles, and field-focused training reads.
              </p>
              <div className="mt-6 rounded-[10px] bg-bg p-5">
                <p className="text-4xl font-bold text-ink">{category.topics.length}</p>
                <p className="mt-2 text-sm leading-7 text-ink-2">
                  total topic articles in this category
                </p>
              </div>
            </div>
          </aside>
        </div>

        <TopicBrowser category={category} />
      </section>
    </div>
  );
}
