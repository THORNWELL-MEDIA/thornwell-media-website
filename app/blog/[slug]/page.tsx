// Unified blog [slug] route — serves both editorial ARTICLES and silo BLOGS.
// Silo blogs come from /lib/silo/content.json, ARTICLES from /lib/articles.
// AUTO-UPDATED by local-authority-silo-engine when silo content is regenerated.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight, Clock, ExternalLink } from "lucide-react";
import { BRAND, NAP, CTAS, SITE } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import EditorialDivider from "@/components/ui/EditorialDivider";
import { breadcrumbSchema } from "@/lib/schema";
import { ARTICLES, getArticleBySlug, formatArticleDate } from "@/lib/articles";
import { IMG, unsplashUrl } from "@/lib/imagery";
import bundle from "@/lib/silo/content.json";

type SiloPage = {
  type: "city_hub" | "service_in_city" | "blog";
  url: string;
  title: string;
  meta_description: string;
  city?: string;
  city_key?: string;
  state_abbr?: string;
  state?: string;
  service_slug?: string;
  service_label?: string;
  intro?: string;
  body?: string;
  key_takeaways?: string[];
  authority_citation?: { name: string; url: string; context?: string };
  image_alt?: string;
  topic?: string;
  city_hub_url?: string;
  service_in_city_url?: string;
};

const ALL_SILO = (bundle.pages as SiloPage[]).filter((p) => p.type === "blog");

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  const articleParams = ARTICLES.map((a) => ({ slug: a.slug }));
  const siloParams = ALL_SILO.map((s) => ({
    slug: s.url.replace(/^\/blog\//, ""),
  }));
  return [...articleParams, ...siloParams];
}

function findSiloBlog(slug: string): SiloPage | undefined {
  return ALL_SILO.find((p) => p.url === `/blog/${slug}`);
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticleBySlug(params.slug);
  if (article) {
    return {
      title: article.title,
      description: article.excerpt,
      alternates: { canonical: `/blog/${article.slug}/` },
    };
  }
  const silo = findSiloBlog(params.slug);
  if (silo) {
    return {
      title: silo.title,
      description: silo.meta_description,
      alternates: { canonical: `${silo.url}/` },
    };
  }
  return {};
}

function readTimeMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function renderParagraph(
  line: string,
  key: string,
  index: number,
  total: number,
  pullQuoteIndex: number,
  pullQuoteText: string | null,
) {
  const isFirstBody = index === 0;
  const boldMatch = line.match(/^\*\*(.+?)\*\*\s*(.*)$/);

  const node = boldMatch ? (
    <p
      key={key}
      className={`mt-7 text-[17px] leading-[1.85] text-navy-800 ${isFirstBody ? "drop-cap" : ""}`}
    >
      <strong className="font-semibold text-navy-900">{boldMatch[1]}</strong>
      {boldMatch[2] ? ` ${boldMatch[2]}` : ""}
    </p>
  ) : (
    <p
      key={key}
      className={`mt-5 text-[17px] leading-[1.85] text-navy-800 ${isFirstBody ? "drop-cap" : ""}`}
    >
      {line}
    </p>
  );

  if (index === pullQuoteIndex && pullQuoteText) {
    return (
      <div key={key + "-with-pq"}>
        {node}
        <blockquote
          aria-hidden={false}
          className="pull-quote my-12 border-l-4 border-saffron-500 pl-6 md:pl-10"
        >
          <p>
            <span className="pq-mark" aria-hidden>
              &ldquo;
            </span>
            {pullQuoteText}
            <span className="pq-mark" aria-hidden>
              &rdquo;
            </span>
          </p>
          <div className="mt-4 inline-flex items-center gap-3">
            <span className="block h-2 w-2 bg-saffron-500" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-700">
              Pull quote / Plate 02
            </span>
          </div>
        </blockquote>
      </div>
    );
  }

  return node;
}

function ArticleView({ article }: { article: ReturnType<typeof getArticleBySlug> & {} }) {
  if (!article) return null;
  const paragraphs = article.body.split(/\n\n+/);
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);
  const readTime = readTimeMinutes(article.body);

  const pullQuoteIndex = Math.min(
    Math.max(2, Math.floor(paragraphs.length / 2)),
    paragraphs.length - 2,
  );
  const candidate = paragraphs[pullQuoteIndex] || "";
  const cleaned = candidate.replace(/^\*\*(.+?)\*\*\s*/, "");
  const sentences = cleaned.split(/(?<=[.!?])\s+/);
  let pullQuoteText: string | null = null;
  for (const s of sentences) {
    const trimmed = s.trim();
    if (trimmed.length >= 60 && trimmed.length <= 220) {
      pullQuoteText = trimmed;
      break;
    }
  }
  if (!pullQuoteText) {
    for (const p of paragraphs) {
      const c = p.replace(/^\*\*(.+?)\*\*\s*/, "");
      const ss = c.split(/(?<=[.!?])\s+/);
      for (const s of ss) {
        const trimmed = s.trim();
        if (trimmed.length >= 60 && trimmed.length <= 220) {
          pullQuoteText = trimmed;
          break;
        }
      }
      if (pullQuoteText) break;
    }
  }

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog/" },
          { name: article.title, url: `/blog/${article.slug}/` },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src="/studio.png"
          alt="Thornwell Media editorial studio workspace"
          fill
          priority
          sizes="100vw"
          className="img-bw-editorial object-cover opacity-30"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />
        <div aria-hidden className="saffron-overlay-strong" />

        <Container>
          <div className="relative pb-20 pt-32 md:pb-28 md:pt-40">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80"
            >
              <Link href="/blog/" className="hover:text-saffron-400">
                Insights
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper">{article.category}</span>
            </nav>

            <div className="mt-10 max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-saffron-400">
                Issue {article.no} / {article.category}
              </span>
              <h1 className="mt-6 font-serif text-display-xl font-black leading-[0.98] text-paper balance">
                {article.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper">
                {article.excerpt}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 border-saffron-500/40 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/85">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden className="block h-2 w-2 bg-saffron-400" />
                  By the Operator Desk
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-paper/30 sm:block" />
                <span>{formatArticleDate(article.date)}</span>
                <span aria-hidden className="hidden h-3 w-px bg-paper/30 sm:block" />
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3 w-3 text-saffron-400" />
                  {readTime} min read
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-paper/30 sm:block" />
                <span>Plate {article.no}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container width="narrow">
          <div className="py-20 md:py-28">
            <article className="prose-article">
              {paragraphs.map((para, idx) =>
                renderParagraph(
                  para,
                  `p-${idx}`,
                  idx,
                  paragraphs.length,
                  pullQuoteIndex,
                  pullQuoteText,
                ),
              )}
            </article>

            <div className="mt-16">
              <EditorialDivider label="End of article" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-navy-900 hover:text-saffron-700"
              >
                <span className="border-b-2 border-navy-900 pb-0.5">Back to insights</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy-700">
                {BRAND.name} / Operator Desk
              </span>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t-2 border-navy-900 bg-paper-deep">
          <Container>
            <div className="py-20 md:py-28">
              <div className="flex items-end justify-between gap-6">
                <SectionLabel number="02" label="More from the operator desk" />
                <Link
                  href="/blog/"
                  className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-900 hover:text-saffron-700 sm:inline-flex"
                >
                  All issues
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {related.map((p) => {
                  const rt = readTimeMinutes(p.body);
                  return (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}/`}
                      className="group relative block overflow-hidden border-2 border-navy-900 bg-paper p-8 no-underline transition hover:bg-navy-900 hover:text-paper md:p-10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-saffron-700 group-hover:text-saffron-400">
                          Issue {p.no} / {p.category}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-700 group-hover:text-paper/80">
                          {rt} min
                        </span>
                      </div>
                      <h3 className="mt-6 font-serif text-3xl font-black leading-[1.05] text-navy-900 transition group-hover:text-paper md:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-5 text-[15px] leading-7 text-navy-700 transition group-hover:text-paper/85">
                        {p.excerpt}
                      </p>
                      <div className="mt-8 flex items-center justify-between border-t-2 border-navy-900 pt-5 transition group-hover:border-saffron-400">
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy-700 group-hover:text-paper/80">
                          {formatArticleDate(p.date)}
                        </span>
                        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-navy-900 transition group-hover:text-saffron-400">
                          Read
                          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTASection
        eyebrow="Engagement"
        number="03"
        title="Bring us the brand, the search problem, or the lead engine you need to ship."
        description="Operator-grade marketing, documented from day one. We respond inside one business day with a tailored brief."
      />
    </>
  );
}

function renderMarkdownBody(body: string) {
  // Split on H2s while keeping the heading lines
  const parts = body.split(/(?=^##\s)/m);
  const out: React.ReactNode[] = [];
  parts.forEach((chunk, i) => {
    const trimmed = chunk.trim();
    if (!trimmed) return;
    const headingMatch = trimmed.match(/^##\s+(.+?)(\n|$)/);
    if (headingMatch) {
      out.push(
        <h2 key={`h2-${i}`} className="mt-12 font-serif text-2xl font-semibold text-navy-900 md:text-3xl">
          {headingMatch[1]}
        </h2>
      );
      const rest = trimmed.replace(/^##\s+(.+?)(\n|$)/, "").trim();
      if (rest) {
        const paragraphs = rest.split(/\n\n+/);
        paragraphs.forEach((p, j) => {
          out.push(
            <p key={`p-${i}-${j}`} className="mt-5 text-[17px] leading-[1.85] text-navy-800">
              {p}
            </p>,
          );
        });
      }
    } else {
      const paragraphs = trimmed.split(/\n\n+/);
      paragraphs.forEach((p, j) => {
        out.push(
          <p key={`pp-${i}-${j}`} className="mt-5 text-[17px] leading-[1.85] text-navy-800">
            {p}
          </p>,
        );
      });
    }
  });
  return out;
}

function SiloBlogView({ silo }: { silo: SiloPage }) {
  const bodyText = silo.body || "";
  const readTime = readTimeMinutes(`${silo.intro || ""} ${bodyText}`);
  const related = ALL_SILO.filter(
    (p) => p.city_key === silo.city_key && p.url !== silo.url
  ).slice(0, 2);
  const cityHubUrl = silo.city_hub_url;
  const sicUrl = silo.service_in_city_url;

  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/blog/" },
            { name: silo.title, url: `${silo.url}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: silo.title,
            description: silo.meta_description,
            author: { "@type": "Organization", name: BRAND.name },
            publisher: { "@type": "Organization", name: BRAND.name, url: SITE.url },
            mainEntityOfPage: `${SITE.url}${silo.url}/`,
          },
        ]}
      />

      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.strategySession.id, 2400, 78)}
          alt={silo.image_alt || `${silo.service_label} in ${silo.city}`}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-20 pt-32 md:pb-28 md:pt-40">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/80"
            >
              <Link href="/blog/" className="hover:text-paper">Insights</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper">{silo.city}, {silo.state_abbr}</span>
            </nav>

            <div className="mt-10 max-w-4xl">
              <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-gold-400">
                {silo.service_label} / {silo.city}
              </span>
              <h1 className="mt-6 font-serif text-display-xl font-semibold leading-[1.02] text-paper balance">
                {silo.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/90">
                {silo.meta_description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-paper/30 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/85">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden className="block h-2 w-2 bg-gold-400" />
                  By the Operator Desk
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-paper/30 sm:block" />
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3 w-3 text-gold-400" />
                  {readTime} min read
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-paper/30 sm:block" />
                <span>{silo.city}, {silo.state_abbr}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container width="narrow">
          <div className="py-20 md:py-28">
            <article className="prose-article">
              {silo.intro && (
                <p className="mt-5 text-[17px] leading-[1.85] text-navy-800 drop-cap">
                  {silo.intro}
                </p>
              )}
              {renderMarkdownBody(bodyText)}
            </article>

            {silo.key_takeaways && silo.key_takeaways.length > 0 && (
              <div className="mt-16 rounded-2xl border border-paper-edge bg-paper-deep/40 p-7">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                  Key takeaways
                </div>
                <ul className="mt-5 space-y-3">
                  {silo.key_takeaways.map((t, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-7 text-navy-800">
                      <span className="mt-2 block h-1.5 w-1.5 flex-none bg-gold-500" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {silo.authority_citation && silo.authority_citation.name && (
              <div className="mt-10 flex items-start gap-3 text-[15px] text-navy-700">
                <ExternalLink className="mt-1 h-4 w-4 flex-none text-gold-600" />
                <div>
                  Reference:{" "}
                  {silo.authority_citation.url ? (
                    <a
                      href={silo.authority_citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy-900 underline underline-offset-2"
                    >
                      {silo.authority_citation.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-navy-900">
                      {silo.authority_citation.name}
                    </span>
                  )}
                  {silo.authority_citation.context && (
                    <span>{" "}— {silo.authority_citation.context}</span>
                  )}
                </div>
              </div>
            )}

            <div className="mt-16">
              <EditorialDivider label="End of article" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-navy-900 hover:text-saffron-700"
              >
                <span className="border-b-2 border-navy-900 pb-0.5">Back to insights</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy-700">
                {BRAND.name} / Operator Desk
              </span>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {cityHubUrl && (
                <Link
                  href={`${cityHubUrl}/`}
                  className="card flex items-start gap-3 p-6 transition hover:border-gold-500/50"
                >
                  <ChevronRight className="mt-1 h-4 w-4 flex-none text-gold-600" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-700">
                      {silo.city} city hub
                    </span>
                    <p className="mt-2 font-semibold text-navy-900">
                      See full {silo.city} coverage
                    </p>
                  </div>
                </Link>
              )}
              {sicUrl && (
                <Link
                  href={`${sicUrl}/`}
                  className="card flex items-start gap-3 p-6 transition hover:border-gold-500/50"
                >
                  <ChevronRight className="mt-1 h-4 w-4 flex-none text-gold-600" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-700">
                      Service line
                    </span>
                    <p className="mt-2 font-semibold text-navy-900">
                      {silo.service_label} in {silo.city}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t-2 border-navy-900 bg-paper-deep">
          <Container>
            <div className="py-20 md:py-28">
              <SectionLabel number="02" label={`More from ${silo.city}`} />
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.url}
                    href={`${p.url}/`}
                    className="group relative block overflow-hidden border-2 border-navy-900 bg-paper p-8 no-underline transition hover:bg-navy-900 hover:text-paper md:p-10"
                  >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700 group-hover:text-gold-400">
                      {p.service_label}
                    </span>
                    <h3 className="mt-6 font-serif text-3xl font-black leading-[1.05] text-navy-900 transition group-hover:text-paper md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-7 text-navy-700 transition group-hover:text-paper/85">
                      {p.meta_description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <CTASection
        eyebrow="Engagement"
        number="03"
        title={`Run ${silo.service_label} in ${silo.city}.`}
        description="Operator-grade marketing, documented from day one. We respond inside one business day with a tailored brief."
      />
    </>
  );
}

export default function BlogSlugPage({ params }: Params) {
  const article = getArticleBySlug(params.slug);
  if (article) return <ArticleView article={article} />;
  const silo = findSiloBlog(params.slug);
  if (silo) return <SiloBlogView silo={silo} />;
  notFound();
}
