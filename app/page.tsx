import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ArrowRight,
  FileText,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { BRAND, CTAS, NAP } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import ServiceCard from "@/components/ServiceCard";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: `${BRAND.name} | Brand Systems for Long-Duration Operating Companies`,
  description: BRAND.positioning,
  alternates: { canonical: "/" },
};

const PRINCIPLES = [
  {
    icon: FileText,
    title: "Documented",
    body:
      "Every engagement ships with a brand book, an editorial calendar, and a metrics dictionary you can hand to your next CMO without translation.",
  },
  {
    icon: KeyRound,
    title: "Owned",
    body:
      "Domains, ad accounts, analytics, creative source files. Everything sits on client identity from day one. The work is yours the moment it ships.",
  },
  {
    icon: ShieldCheck,
    title: "Reviewed",
    body:
      "A quarterly creative review against actuals. We grade our own work in front of the operator. Red lines and rework, on the record.",
  },
];

const METHOD = [
  {
    no: "01",
    title: "Foundation",
    body:
      "Thirty days. We audit the brand, the channels, and the data. We deliver a brand book, an editorial line, and a measurement plan you can read end-to-end on a single afternoon.",
  },
  {
    no: "02",
    title: "Production",
    body:
      "An always-on creative engine: brand campaigns, editorial content, search and social systems, paid pipelines. Same hands every week. No rotating delivery pods.",
  },
  {
    no: "03",
    title: "Friday Report",
    body:
      "A one-page executive note every Friday. Brand health, channel performance, content shipped, next-week priorities. Read in ninety seconds, decided in five.",
  },
  {
    no: "04",
    title: "Quarterly Review",
    body:
      "Every ninety days we recut the brief against actuals and reset the next quarter. The plan ages forward. The work compounds.",
  },
];

const CASE_STUDIES = [
  {
    sector: "Property management",
    descriptor: "A Toronto property management firm",
    brief:
      "Brand system, content engine, quarterly review across a multi-region portfolio.",
    result: "Forty percent lift in qualified inbound after the first quarter.",
  },
  {
    sector: "Staffing",
    descriptor: "A North American staffing group",
    brief:
      "Editorial overhaul, recruiter brand kit, weekly content discipline across LinkedIn and email.",
    result: "Time-to-engage cut from fourteen days to five.",
  },
  {
    sector: "Holdings",
    descriptor: "A holdco entering Canadian markets",
    brief:
      "Investor-relations brand, principal-only newsletter, annual report, and gated subscriber funnel.",
    result: "Two thousand four hundred qualified subscribers in ninety days.",
  },
];

const TRUST_DESCRIPTORS = [
  "Multi-region holding companies",
  "Property management portfolios",
  "Hospitality groups",
  "Staffing and search firms",
  "Financial services operators",
  "Founder-led professional services",
];

export default function HomePage() {
  return (
    <>
      <SchemaJsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }])} />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.heroBoardroom.id, 2400, 78)}
          alt={IMG.heroBoardroom.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-30"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative grid items-end gap-10 pb-24 pt-32 md:min-h-[78vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-10">
              <SectionLabel number="01" label="Independent creative agency" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold leading-[1.02] text-paper balance">
                {BRAND.tagline}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                Brand book and design system. Editorial content engine. Quarterly
                creative review. Always-on production. One senior team, on the
                ground for the whole arc of ownership.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                  <span>{CTAS.primary.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href={CTAS.secondary.href} className="btn-ghost-on-dark">
                  {CTAS.secondary.label}
                </Link>
              </div>

              {/* Trust strip */}
              <div className="mt-14 border-t border-paper/15 pt-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
                  Brands we have built for
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-paper/85">
                  {TRUST_DESCRIPTORS.map((d, i) => (
                    <li key={d} className="flex items-center gap-3">
                      {i > 0 && <span aria-hidden className="h-3 w-px bg-paper/25" />}
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <SectionLabel number="02" label="How we work" />
              <h2 className="mt-6 font-serif text-display-lg font-semibold text-navy-900 balance">
                Three things we do differently.
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-navy-700">
                We work in retainers measured by what shipped, not what was billed.
                The relationship is senior, the cadence is weekly, the standard is
                editorial.
              </p>
            </Reveal>

            <div className="md:col-span-7">
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {PRINCIPLES.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.06} as="li">
                    <article className="card h-full p-7">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-edge bg-paper-deep/40 text-navy-900">
                        <p.icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-6 font-serif text-xl font-semibold text-navy-900">
                        {p.title}.
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-navy-700">{p.body}</p>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-paper-edge bg-paper-deep/30">
        <Container>
          <div className="py-20 md:py-28">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionLabel number="03" label="Selected work" />
                <h2 className="mt-6 font-serif text-display-lg font-semibold text-navy-900 balance">
                  Three engagements. Anonymized for ownership reasons.
                </h2>
                <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy-700">
                  Client names are released only with written sign-off. The brief
                  and the result are on the record below. The full case files are
                  available on request.
                </p>
              </div>
              <Link
                href={CTAS.primary.href}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-900"
              >
                Request the full case files
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {CASE_STUDIES.map((cs, i) => (
                <Reveal key={cs.descriptor} delay={i * 0.06}>
                  <article className="card group flex h-full flex-col p-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron-700">
                      {String(i + 1).padStart(2, "0")} / {cs.sector}
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-navy-900">
                      {cs.descriptor}.
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-navy-700">
                      {cs.brief}
                    </p>
                    <div className="mt-auto pt-7">
                      <div className="border-t border-paper-edge pt-5">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-700">
                          Outcome
                        </div>
                        <p className="mt-2 font-serif text-lg font-semibold leading-snug text-navy-900">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-paper-edge bg-white/40">
        <Container>
          <div className="py-20 md:py-28">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionLabel number="04" label="Capabilities" />
                <h2 className="mt-6 font-serif text-display-lg font-semibold text-navy-900 balance">
                  Brand. Editorial. Search. Pipeline.
                </h2>
                <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy-700">
                  Ten programs sit under one operating system. Brand book and
                  identity. Editorial content. Search and listings. Paid pipelines.
                  Reputation. Reporting. Engaged together, they compound. Engaged
                  alone, each ships a discrete piece of the picture.
                </p>
              </div>
              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-900"
              >
                See the full capability set
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <ServiceCard service={s} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* METHOD - dark editorial */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.strategySession.id, 2200, 72)}
          alt={IMG.strategySession.alt}
          fill
          sizes="100vw"
          className="img-treat object-cover opacity-15"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/85" />
        <Container>
          <div className="relative py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <SectionLabel number="05" label="Method" variant="dark" />
                <h2 className="mt-6 font-serif text-display-lg font-semibold text-paper balance">
                  An agency engagement that ages well.
                </h2>
                <p className="mt-6 max-w-md text-[17px] leading-relaxed text-paper/90">
                  The work is durable. The reporting is honest. The systems
                  outlast the people running them. The engagement is built to be
                  inherited by your next hire, not held over their head.
                </p>
                <Link
                  href="/about/"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper"
                >
                  How we work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ol className="md:col-span-7">
                {METHOD.map((m, i) => (
                  <Reveal key={m.no} delay={i * 0.06} as="li">
                    <div className="grid grid-cols-[64px_1fr] items-start gap-6 border-t border-paper/15 py-7 first:border-t-0">
                      <div className="font-serif text-3xl font-semibold text-gold-400">
                        {m.no}
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-paper">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-paper/85">{m.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* OPERATING STANDARDS */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <SectionLabel number="06" label="The standard" />
              <h2 className="mt-6 font-serif text-display-lg font-semibold text-navy-900 balance">
                Editorial-grade. Owner-grade. Audit-grade.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-navy-700">
                {BRAND.name} is independent. Every brand book, design file, ad
                account, and analytics view sits on client identity. Every metric
                is audited. Every claim has a citation. The work is yours to keep
                whether the engagement runs three months or three decades.
              </p>
              <p className="mt-4 text-sm font-medium text-navy-700">
                Case files are released only with written sign-off. We do not
                parade client work without approval.
              </p>
            </Reveal>

            <Reveal className="md:col-span-7" delay={0.08}>
              <div className="overflow-hidden rounded-2xl border border-paper-edge bg-white">
                <div className="grid grid-cols-2 divide-x divide-paper-edge md:grid-cols-3">
                  {[
                    { k: "Voice", v: "Editorial" },
                    { k: "Reporting", v: "Weekly + quarterly" },
                    { k: "Engagement", v: "Senior team only" },
                    { k: "Country", v: NAP.address.country },
                    { k: "Capabilities", v: `${SERVICES.length} integrated` },
                    { k: "Industries", v: `${INDUSTRIES.length} verticals` },
                  ].map((cell, idx) => (
                    <div
                      key={cell.k}
                      className={`p-6 ${idx >= 3 ? "border-t border-paper-edge" : ""}`}
                    >
                      <div className="eyebrow">{cell.k}</div>
                      <div className="mt-2 font-serif text-xl font-semibold text-navy-900">
                        {cell.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-paper-edge bg-white/40">
        <Container>
          <div className="py-20 md:py-28">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <SectionLabel number="07" label="Industries" />
                <h2 className="mt-6 font-serif text-display-lg font-semibold text-navy-900 balance">
                  Built for operators that hold across decades.
                </h2>
                <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy-700">
                  Same operator stack, shaped to the category. Real estate operators,
                  property services, professional services, holding companies, portfolio
                  brands, and family offices each get the same documented programs.
                </p>
              </div>
              <Link
                href="/industries/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-900"
              >
                All industries
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((it, i) => (
                <Reveal key={it.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/industries/${it.slug}/`}
                    className="card card-hover group flex h-full flex-col p-7 no-underline"
                  >
                    <span className="font-mono text-[12px] tracking-[0.18em] text-saffron-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-navy-900">
                      {it.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-navy-700">
                      {it.short}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-navy-700">
                        Read the brief
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* QUOTE / BOILERPLATE */}
      <section className="bg-paper">
        <Container width="narrow">
          <div className="py-24 md:py-32 text-center">
            <SectionLabel
              number="08"
              label="On the record"
              className="justify-center"
            />
            <blockquote className="mt-8 relative">
              <span aria-hidden className="absolute -left-2 -top-6 hidden font-serif text-7xl leading-none text-saffron-700 md:block">"</span>
              <p className="balance font-serif text-display-md font-semibold italic leading-snug text-navy-900">
                We work for the operating company, not the campaign cycle. Every
                brand we touch should age like a magazine masthead, not a deck.
              </p>
            </blockquote>
            <div className="mt-8 inline-flex items-center gap-3 text-sm text-navy-700">
              <span className="h-px w-8 bg-paper-edge" />
              <span className="font-medium">{BRAND.name}</span>
              <span className="h-px w-8 bg-paper-edge" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
