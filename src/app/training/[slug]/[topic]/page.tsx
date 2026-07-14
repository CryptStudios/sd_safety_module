import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getCategoryBySlug,
  getTopicBySlug,
  trainingCategories,
  type ArticleBlock,
} from "@/lib/training-data";

function ArticleBody({ body }: { body: ArticleBlock[] }) {
  return (
    <div className="mt-6 space-y-5 text-[1.03rem] leading-8 text-ink-2">
      {body.map((block) =>
        typeof block === "string" ? (
          <p key={block}>{block}</p>
        ) : (
          <ul
            key={block.list.join("|")}
            className="space-y-2 pl-5 marker:text-hi list-disc"
          >
            {block.list.map((item) => (
              <li key={item} className="pl-1 leading-7">
                {item}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

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

  const articleSections = topic.articleSections.filter(
    (section) => section.heading !== "What to remember"
  );
  const [leadSection, ...restSections] = articleSections;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="mx-auto max-w-5xl rounded-[16px] border border-rule bg-paper p-8 text-ink shadow-[0_36px_100px_-50px_rgba(0,0,0,0.18)] lg:p-10">
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
        {leadSection ? <ArticleBody body={leadSection.body} /> : null}
      </section>

      <section className="mx-auto mt-10 max-w-5xl space-y-6">
        {restSections.map((section) => (
          <article
            key={section.heading}
            className="rounded-[16px] border border-rule bg-paper p-8 shadow-[0_24px_60px_-42px_rgba(2,6,23,0.22)] lg:p-10"
          >
            <h2 className="text-4xl font-bold tracking-tight text-ink">
              {section.heading}
            </h2>
            <ArticleBody body={section.body} />
          </article>
        ))}

        <article className="rounded-[16px] border border-rule bg-paper p-8 text-ink shadow-[0_24px_60px_-42px_rgba(2,6,23,0.45)] lg:p-10">
          <p className="eyebrow text-hi-deep">
            Complete Acknowledgment
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Done with Toolbox Talk
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-ink-2">
            After reviewing the article and key points above, use the approved
            external form to record completion.
          </p>
          <a
            href={topic.boloFormUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-hi px-6 py-3 text-sm font-semibold text-ink transition hover:bg-hi-deep"
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
