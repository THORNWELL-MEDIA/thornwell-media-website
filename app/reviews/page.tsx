import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Star, Quote } from "lucide-react";
import { BRAND, CTAS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Client Notes And Case Feedback",
  description: `Anonymous client feedback from ${BRAND.name} engagements. Brand systems, content engines, and search programs for operating companies across North America.`,
  alternates: { canonical: "/reviews/" }
};

const TESTIMONIALS = [
  {
    rating: 5,
    bucket: "Brand System",
    region: "Holding Company, Ontario",
    quote:
      "They built the brand book and identity across eight subsidiaries in a single sprint. The next round of marketing hires onboarded against that documentation without translation."
  },
  {
    rating: 5,
    bucket: "Content Engine",
    region: "Multi Family Operator, Texas",
    quote:
      "The Friday report is the part we did not know we needed. Every week we know what shipped, what moved, and what is queued. The compounding became visible in month four."
  },
  {
    rating: 5,
    bucket: "Search Program",
    region: "Property Services, Florida",
    quote:
      "Local SEO went from invisible to occupying the top three across our metros. They did not chase rankings, they built a documented system and the rankings followed."
  },
  {
    rating: 5,
    bucket: "Embedded Team",
    region: "Family Office, British Columbia",
    quote:
      "Senior operator on the account from day one. Quarterly briefings translated marketing into board language. That alone earned the renewal."
  },
  {
    rating: 5,
    bucket: "Foundation Sprint",
    region: "Asset Manager, New York",
    quote:
      "Sixty days, fixed scope, on schedule. The metrics dictionary they handed off has been the artifact every new hire reads on day one."
  },
  {
    rating: 4,
    bucket: "Content Engine",
    region: "Operating Company, Alberta",
    quote:
      "Took us two months to fully use the system they delivered. Once we did, the editorial output and brand consistency stopped being a question."
  }
];

const STATS = [
  { label: "Average Engagement Length", value: "18 months" },
  { label: "Renewal Rate", value: "91%" },
  { label: "Operating Companies Served", value: "32" },
  { label: "Coverage", value: "North America" }
];

export default function ReviewsPage() {
  const total = TESTIMONIALS.length;
  const avg =
    Math.round(
      (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / total) * 10
    ) / 10;

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews/" }
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="absolute inset-0 hero-vignette" />
        <Container>
          <div className="relative grid items-end gap-10 pb-24 pt-32 md:min-h-[60vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-9">
              <SectionLabel number="01" label="Reviews And Case Notes" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold leading-[1.04] text-paper balance">
                What Operators Say After The Engagement.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper">
                Selected feedback from {BRAND.name} engagements with operating
                companies, holding companies, and portfolios across North
                America. Names are withheld for discretion.
              </p>
              <p className="mt-6 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                {avg.toFixed(1)} of 5 across {total} engagements on record
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="bg-paper border-b border-navy-900/15">
        <Container>
          <div className="grid gap-x-10 gap-y-8 py-16 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-t-2 border-navy-900 pt-5">
                <p className="font-serif text-3xl font-bold text-navy-900">
                  {s.value}
                </p>
                <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-navy-700">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-paper">
        <Container>
          <div className="py-24 md:py-32">
            <SectionLabel number="02" label="On The Record" />
            <h2 className="mt-6 max-w-3xl font-serif text-display-lg font-bold text-navy-900 balance">
              Engagement Notes, In Their Own Words.
            </h2>

            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i}>
                  <li className="flex h-full flex-col border border-navy-900/15 bg-ink/[0.03] p-8">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                        {t.bucket}
                      </p>
                      <div className="flex items-center gap-0.5" aria-label={`${t.rating} of 5`}>
                        {Array.from({ length: t.rating }).map((_, k) => (
                          <Star key={k} className="h-3.5 w-3.5 fill-saffron-700 text-saffron-700" />
                        ))}
                      </div>
                    </div>
                    <Quote className="mt-5 h-5 w-5 text-navy-900/30" strokeWidth={1.75} />
                    <p className="mt-3 text-[15px] leading-relaxed text-navy-900">
                      {t.quote}
                    </p>
                    <p className="mt-6 border-t border-navy-900/15 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                      {t.region} · Anonymous Client
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="on-dark bg-ink text-paper">
        <Container>
          <div className="grid items-center gap-10 py-24 md:grid-cols-12 md:py-32">
            <div className="md:col-span-8">
              <SectionLabel number="03" label="References" variant="dark" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-paper balance">
                Named References, Shared After A Documented Intake.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper">
                We share three named client references on request after a
                written brief. Discretion is part of the engagement.
              </p>
            </div>
            <div className="md:col-span-4">
              <Link
                href={CTAS.primary.href}
                className="inline-flex items-center gap-2 bg-paper px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-ink no-underline transition hover:bg-saffron-700 hover:text-paper"
              >
                {CTAS.primary.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
