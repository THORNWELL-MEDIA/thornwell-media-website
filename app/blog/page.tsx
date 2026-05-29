import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";
import { ARTICLES, formatArticleDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights",
  description: `Operator-grade marketing notes from ${BRAND.name}. New posts published weekly.`,
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/blog/" },
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
          className="img-treat object-cover opacity-30"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-24 pt-32 md:pb-32 md:pt-40">
            <SectionLabel number="01" label="Insights" variant="dark" />
            <h1 className="mt-8 max-w-4xl font-serif text-display-xl font-semibold text-paper balance">
              Notes from the operator desk.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
              Working notes on running marketing programs inside operating companies:
              search occupancy, listings discipline, brand-book operating practices,
              and reporting cadence.
            </p>
          </div>
        </Container>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-paper">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <SectionLabel number="02" label="Latest insights" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Operator-grade marketing notes.
              </h2>
              <p className="mt-5 max-w-prose text-navy-700">
                We publish on the same cadence we report. Working notes on operational
                marketing, paid media reconciliation, and reputation defense for
                operating companies.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {ARTICLES.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="card card-hover group flex h-full flex-col p-7 no-underline"
                >
                  <span className="font-mono text-[12px] tracking-[0.18em] text-saffron-700">
                    {p.category}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-navy-700">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-navy-700">
                      {formatArticleDate(p.date)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.12em] text-navy-900 transition group-hover:text-saffron-700">
                      Read
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Newsletter"
        number="03"
        title="Subscribe to the Operator Note."
        description="The same notes, every Friday, as a short email. Designed to be read between meetings, never in a marketing voice."
      />
    </>
  );
}
