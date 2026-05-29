import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { BRAND, CTAS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Engagement Models And Pricing",
  description: `${BRAND.name} pricing for brand systems, content engines, and search programs. Project, retainer, and fractional team models with transparent line items and quarterly reviews.`,
  alternates: { canonical: "/pricing/" }
};

const TIERS = [
  {
    eyebrow: "Project",
    name: "Foundation Sprint",
    price: "From $45,000",
    cadence: "Fixed scope, 60 day delivery",
    description:
      "A documented brand system, web architecture, and launch ready content stack delivered as a single project. Built so an internal team can run it without us.",
    inclusions: [
      "Brand book and identity system",
      "Information architecture and site map",
      "Launch content set, 8 to 12 pages",
      "Metrics dictionary and tracker setup",
      "Two structured review sessions"
    ],
    cta: { href: "/contact/", label: "Scope a foundation" }
  },
  {
    eyebrow: "Retainer",
    name: "Operator Retainer",
    price: "From $9,500 per month",
    cadence: "Quarterly review, monthly billing",
    description:
      "An ongoing content, search, and listings engine for operating companies. One Friday report. One tracker. One point of accountability.",
    inclusions: [
      "Editorial content production",
      "Technical and local SEO",
      "Listings and reputation hygiene",
      "Quarterly POV brief",
      "Weekly Friday status report"
    ],
    featured: true,
    cta: { href: "/contact/", label: "Start a retainer" }
  },
  {
    eyebrow: "Fractional",
    name: "Embedded Team",
    price: "Custom",
    cadence: "Quarterly engagement",
    description:
      "A scoped fractional team for principals and portfolio leaders who need senior marketing leadership across multiple operating companies.",
    inclusions: [
      "Named senior operator on the account",
      "Multi entity governance",
      "Portfolio reporting and rollups",
      "Brand and search compounding plans",
      "Quarterly board ready briefing"
    ],
    cta: { href: "/contact/", label: "Discuss a fractional team" }
  }
];

const FAQ = [
  {
    q: "How are engagements billed?",
    a: "Foundation Sprints are billed in two milestones, kickoff and delivery. Retainers bill monthly with a quarterly review. Fractional engagements bill quarterly in advance with line item detail."
  },
  {
    q: "Do you work with single operating companies or portfolios?",
    a: "Both. Single operating companies run on the retainer model. Portfolios with multiple brands typically run on the embedded team model with shared governance and reporting."
  },
  {
    q: "What does the Friday report include?",
    a: "A written summary of work shipped that week, metrics movement against the dictionary, decisions made, and open items for the next week. The same format every week so it compounds."
  },
  {
    q: "Can we cancel a retainer?",
    a: "Yes. Retainers run on a 30 day notice. The brand book, trackers, and content already produced stay with the operating company."
  },
  {
    q: "Do you publish case studies?",
    a: "Selected work is on file. Named case files are shared after a documented intake conversation, never on a cold pitch."
  }
];

export default function PricingPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing/" }
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="absolute inset-0 hero-vignette" />
        <Container>
          <div className="relative grid items-end gap-10 pb-24 pt-32 md:min-h-[60vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-9">
              <SectionLabel number="01" label="Pricing And Engagement Models" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold leading-[1.04] text-paper balance">
                Three Ways To Work With Us, All Documented.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper">
                A fixed scope foundation, an ongoing operator retainer, or an
                embedded fractional team across a portfolio. Same standard of
                work, different cadence of delivery.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* TIERS */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-6 py-24 md:grid-cols-3 md:py-32">
            {TIERS.map((tier) => (
              <Reveal key={tier.name}>
                <article
                  className={
                    "flex h-full flex-col border bg-paper p-8 " +
                    (tier.featured
                      ? "border-saffron-700 ring-1 ring-saffron-700/30 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.18)]"
                      : "border-navy-900/15")
                  }
                >
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                    {tier.eyebrow}
                  </div>
                  <h2 className="mt-3 font-serif text-2xl font-bold text-navy-900">
                    {tier.name}
                  </h2>
                  <div className="mt-5 border-y border-navy-900/15 py-5">
                    <p className="font-serif text-2xl font-bold text-navy-900">
                      {tier.price}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                      {tier.cadence}
                    </p>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-navy-700">
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-saffron-700" strokeWidth={2} />
                        <span className="text-[14px] leading-snug text-navy-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <Link
                      href={tier.cta.href}
                      className="inline-flex items-center gap-2 border-b-2 border-navy-900 pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900 no-underline transition hover:text-saffron-700"
                    >
                      {tier.cta.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-ink/[0.03]">
        <Container>
          <div className="grid gap-16 py-24 md:grid-cols-12 md:py-32">
            <div className="md:col-span-4">
              <SectionLabel number="03" label="Questions" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-navy-900 balance">
                What Operators Ask Before They Sign.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="divide-y divide-navy-900/15 border-y border-navy-900/15">
                {FAQ.map((item) => (
                  <div key={item.q} className="grid gap-3 py-7 md:grid-cols-12">
                    <h3 className="font-serif text-lg font-bold text-navy-900 md:col-span-5">
                      {item.q}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-navy-700 md:col-span-7">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="on-dark bg-ink text-paper">
        <Container>
          <div className="grid items-center gap-10 py-24 md:grid-cols-12 md:py-32">
            <div className="md:col-span-8">
              <SectionLabel number="04" label="Next Step" variant="dark" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-paper balance">
                Send Us The Brief. We Send Back A Written Quote.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper">
                {BRAND.name} returns written quotes only after a documented
                intake. No verbal estimates. No moving targets.
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
