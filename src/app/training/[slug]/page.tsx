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
        <section className="rounded-[2.25rem] border border-slate-200 bg-white p-8 text-slate-950 shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] lg:p-10">
          <Link
            href="/training"
            className="text-sm font-bold text-amber-700 transition hover:text-amber-800"
          >
            ← Back to Categories
          </Link>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-amber-700">
            Training Category
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">{category.title}</h1>
          <p className="mt-4 text-base leading-8 text-slate-800">{category.description}</p>
          <p className="mt-6 text-sm leading-8 text-slate-700">{category.overview}</p>

          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-700">
              Reading Focus
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-800">{category.meetingPurpose}</p>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-[#0c2440] bg-[#071423] p-6 text-white shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <div className="flex items-center gap-4">
              <ShieldIcon />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                  At a Glance
                </p>
                <p className="mt-1 text-sm text-slate-300">{category.topics.length} topics</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {category.keyTakeaways.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-[#0c2440] bg-[#071423] p-6 text-white shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <div className="flex items-center gap-4">
              <ClipboardIcon />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                  Article Notes
                </p>
                <p className="mt-1 text-sm text-slate-300">Quick article context</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {category.supervisorNotes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-[#0c2440] bg-[#071423] p-6 text-white shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)]">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
              Source Basis
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">
              Reference material
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-200">
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
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-amber-300 hover:bg-white/8"
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
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]"
            >
              <h2 className="text-3xl font-black tracking-tight text-slate-950">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-slate-800">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-600">
              Key Questions
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Questions to think through while learning
            </h2>
            <ul className="mt-6 space-y-4">
              {category.discussionPrompts.map((prompt) => (
                <li key={prompt} className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-800">
                  {prompt}
                </li>
              ))}
            </ul>
          </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.35)]">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-600">
                Topic Volume
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Larger article library
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                This category now includes an expanded article library with many more topic
                variations, planning views, review angles, and field-focused training reads.
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-4xl font-black text-slate-950">{category.topics.length}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
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
