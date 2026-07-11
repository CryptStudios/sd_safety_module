import Link from "next/link";
import { notFound } from "next/navigation";

import { ShieldIcon } from "@/components/icons";
import {
  getCategoryBySlug,
  getTopicBySlug,
  trainingCategories,
} from "@/lib/training-data";

type TopicPageProps = {
  params: Promise<{
    slug: string;
    topic: string;
  }>;
};

export function generateStaticParams() {
  return trainingCategories.flatMap((category) =>
    category.topics.map((topic) => ({
      slug: category.slug,
      topic: topic.slug,
    })),
  );
}

export default async function TopicDetailPage({ params }: TopicPageProps) {
  const { slug, topic: topicSlug } = await params;
  const category = getCategoryBySlug(slug);
  const topic = getTopicBySlug(slug, topicSlug);

  if (!category || !topic) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.42fr_0.58fr]">
        <section className="rounded-[2.25rem] border border-slate-200 bg-white p-8 text-slate-950 shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] lg:p-10">
          <Link
            href={`/training/${category.slug}`}
            className="text-sm font-bold text-amber-700 transition hover:text-amber-800"
          >
            ← Back to {category.title}
          </Link>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-amber-700">
            Training Topic
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">{topic.title}</h1>
          <p className="mt-4 text-base leading-8 text-slate-800">{topic.description}</p>
          <p className="mt-6 text-lg leading-8 text-slate-800">{topic.articleIntro}</p>

          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-700">
              What You Will Learn
            </p>
            <ul className="mt-4 space-y-3">
              {topic.keyPoints.map((item) => (
                <li key={item} className="text-sm leading-7 text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-[#0c2440] bg-[#071423] p-6 text-white shadow-[0_24px_60px_-42px_rgba(2,6,23,0.5)]">
            <div className="flex items-center gap-4">
              <ShieldIcon />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                  Reading Highlights
                </p>
                <p className="mt-1 text-sm text-slate-300">{category.title}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {topic.hazardSignals.slice(0, 4).map((item) => (
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
              In This Article
            </p>
            <ul className="mt-5 space-y-3">
              {topic.articleSections.map((section) => (
                <li
                  key={section.heading}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-100"
                >
                  {section.heading}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="mx-auto mt-10 max-w-5xl space-y-6">
        {topic.articleSections.map((section) => (
          <article
            key={section.heading}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10"
          >
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              {section.heading}
            </h2>
            <div className="mt-6 space-y-6 text-[1.03rem] leading-8 text-slate-800">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-600">
            Key Ideas
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            Important things to remember
          </h2>
          <ul className="mt-6 space-y-4">
            {topic.commonMistakes.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-600">
            Practical Checks
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            Before finishing this topic
          </h2>
          <ul className="mt-6 space-y-4">
            {topic.checklist.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 px-5 py-4 text-sm leading-7 text-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-[#0c2440] bg-[#071423] p-8 text-white shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
            Complete Acknowledgment
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            Finish reading the article
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-200">
            After reviewing the article and key points above, use the approved
            external form to record completion.
          </p>
          <a
            href={topic.boloFormUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-300"
          >
            Complete Acknowledgment
          </a>
        </article>
      </section>

      <aside className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-600">
          More in {category.title}
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {category.topics
            .filter((item) => item.slug !== topic.slug)
            .slice(0, 6)
            .map((item) => (
              <Link
                key={item.id}
                href={`/training/${category.slug}/${item.slug}`}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50"
              >
                {item.title}
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
}
