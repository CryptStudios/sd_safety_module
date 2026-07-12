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
        <section className="rounded-[16px] border border-rule bg-paper p-8 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] lg:p-10">
          <Link
            href={`/training/${category.slug}`}
            className="text-sm font-bold text-hi-deep transition hover:text-hi"
          >
            ← Back to {category.title}
          </Link>
          <p className="mt-5 eyebrow text-hi-deep">
            Training Topic
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">{topic.title}</h1>
          <p className="mt-4 text-base leading-8 text-ink-2">{topic.description}</p>
          <p className="mt-6 text-lg leading-8 text-ink-2">{topic.articleIntro}</p>

          <div className="mt-8 rounded-[14px] border border-rule bg-bg p-6">
            <p className="eyebrow text-hi-deep">
              What You Will Learn
            </p>
            <ul className="mt-4 space-y-3">
              {topic.keyPoints.map((item) => (
                <li key={item} className="text-sm leading-7 text-ink-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[16px] border border-white/10 bg-ink p-6 text-[#f5efe2] shadow-[0_24px_60px_-42px_rgba(2,6,23,0.5)]">
            <div className="flex items-center gap-4">
              <ShieldIcon />
              <div>
                <p className="eyebrow text-hi">
                  Reading Highlights
                </p>
                <p className="mt-1 text-sm text-[#c9c2b2]">{category.title}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {topic.hazardSignals.slice(0, 4).map((item) => (
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
              In This Article
            </p>
            <ul className="mt-5 space-y-3">
              {topic.articleSections.map((section) => (
                <li
                  key={section.heading}
                  className="rounded-[10px] border border-white/10 bg-paper/5 px-4 py-3 text-sm leading-7 text-[#c9c2b2]"
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
            className="rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10"
          >
            <h2 className="text-4xl font-bold tracking-tight text-ink">
              {section.heading}
            </h2>
            <div className="mt-6 space-y-6 text-[1.03rem] leading-8 text-ink-2">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}

        <article className="rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10">
          <p className="eyebrow text-hi-deep">
            Key Ideas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
            Important things to remember
          </h2>
          <ul className="mt-6 space-y-4">
            {topic.commonMistakes.map((item) => (
              <li
                key={item}
                className="rounded-[10px] bg-bg px-5 py-4 text-sm leading-7 text-ink-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10">
          <p className="eyebrow text-hi-deep">
            Practical Checks
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
            Before finishing this topic
          </h2>
          <ul className="mt-6 space-y-4">
            {topic.checklist.map((item) => (
              <li
                key={item}
                className="rounded-[10px] border border-rule px-5 py-4 text-sm leading-7 text-ink-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[16px] border border-white/10 bg-ink p-8 text-[#f5efe2] shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] lg:p-10">
          <p className="eyebrow text-hi">
            Complete Acknowledgment
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Finish reading the article
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#c9c2b2]">
            After reviewing the article and key points above, use the approved
            external form to record completion.
          </p>
          <a
            href={topic.boloFormUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-hi px-6 py-3 text-sm font-semibold text-[#f5efe2] transition hover:bg-hi-deep"
          >
            Complete Acknowledgment
          </a>
        </article>
      </section>

      <aside className="mx-auto mt-10 max-w-5xl rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10">
        <p className="eyebrow text-hi-deep">
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
                className="rounded-[10px] border border-rule px-4 py-3 text-sm font-bold text-ink-2 transition hover:border-hi hover:bg-hi-soft"
              >
                {item.title}
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
}
