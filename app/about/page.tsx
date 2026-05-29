import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, KeyRound, ShieldCheck, Target } from "lucide-react";
import { BRAND, CTAS } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "About",
  description: `${BRAND.name} is an independent marketing operator serving ambitious businesses with documented, transferable systems.`,
  alternates: { canonical: "/about/" },
};

const VALUES = [
  {
    icon: FileText,
    title: "Documented",
    body:
      "Every program ships with a brief, a tracker, and a metrics dictionary. We do not run on tribal knowledge.",
  },
  {
    icon: KeyRound,
    title: "Transferable",
    body:
      "Accounts and credentials live under client-owned identity from day one. Every system is portable on demand.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable",
    body:
      "Friday executive reports. Red-yellow-green KPIs. Exceptions surface before they become incidents.",
  },
  {
    icon: Target,
    title: "Verifiable",
    body:
      "Claims are substantiated. We do not invent reviews, traffic, credentials, or testimonials.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about/" },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.about.id, 2400, 78)}
          alt={IMG.about.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />
        <Container>
          <div className="relative grid items-end gap-10 pb-24 pt-32 md:min-h-[70vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-9">
              <SectionLabel number="01" label="About Thornwell Media" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold leading-[1.04] text-paper balance">
                An independent agency for operating companies.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper">
                {BRAND.name} is an independent creative agency built for
                operating companies that hold for decades, not deal cycles. We
                design brand systems, run editorial content engines, and ship
                search and pipeline programs that compound across the whole arc
                of ownership.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* THESIS */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-16 py-24 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-5">
              <SectionLabel number="02" label="Thesis" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-navy-900 balance">
                The shape we work with: operators who hold.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-navy-700">
                Most agencies are built around campaigns. Most in-house teams
                are built around the next quarter. Neither is built around the
                arc of ownership for a company a principal intends to hold for
                fifteen years.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-navy-700">
                {BRAND.name} was set up for that arc.
              </p>
            </Reveal>

            <Reveal className="md:col-span-7" delay={0.08}>
              <div className="prose prose-slate max-w-none text-[17px] leading-[1.75] text-navy-800">
                <p>
                  The work spans brand-book development, identity systems,
                  editorial content production, full-stack web architecture,
                  technical and local SEO, listings infrastructure, paid media,
                  knowledge-panel and entity strategy, and the weekly Friday
                  report that holds the whole engagement to account.
                </p>
                <p>
                  We measure on outcomes that show up in the operating company:
                  indexed pages, verified profiles, qualified inbound, search
                  occupancy, and brand consistency across channels. Not on
                  hours. Not on impressions.
                </p>
                <p>
                  Every engagement ships with a brand book, a calendar, and a
                  metrics dictionary you can hand to your next hire without
                  translation.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t-2 border-navy-900 pt-8">
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                    Operating since
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-navy-900">
                    2026
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                    Coverage
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-navy-900">
                    North America
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                    Programs
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-navy-900">
                    10 integrated
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                    Cadence
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-navy-900">
                    Friday reports
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* MARKET PROBLEM AND OUR SOLUTION */}
      <section className="border-t-2 border-navy-900 bg-paper-deep">
        <Container>
          <div className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-6">
              <SectionLabel number="02b" label="The market problem" />
              <h2 className="mt-6 font-serif text-display-md font-bold text-navy-900 balance">
                Agencies sell decks. Operating companies need work that ships.
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-navy-700">
                <p>
                  Most engagements degrade. The decks pile up. The logins stay
                  with the agency. The brand book lives on a single laptop. The
                  reporting becomes a courtesy. Two years in, the portfolio of
                  work cannot move when the retainer ends.
                </p>
                <p>
                  Operating companies cannot carry that. Marketing is one of
                  the largest non-payroll line items, and it has to reconcile,
                  line by line, to pipeline and brand value across the whole
                  hold period.
                </p>
              </div>
            </Reveal>

            <Reveal className="md:col-span-6" delay={0.08}>
              <div className="border-2 border-navy-900 bg-paper p-8">
                <SectionLabel number="02c" label="Thornwell's solution" />
                <h3 className="mt-6 font-serif text-2xl font-bold text-navy-900">
                  Documented programs. Transferable assets. Honest reporting.
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      label: "Documented programs",
                      body: "Every engagement ships with a brief, a tracker, a metrics dictionary, and a quarterly review document.",
                    },
                    {
                      label: "Transferable assets",
                      body: "Accounts, credentials, creative, and analytics live on client-owned identity from day one. The work moves with the client.",
                    },
                    {
                      label: "Friday executive reports",
                      body: "Every Friday, a one-page narrative report with red, yellow, green KPIs and a recommended action list operators can read in fifteen seconds.",
                    },
                    {
                      label: "Red, yellow, green discipline",
                      body: "Every KPI carries a status. Yellow and red surface to the operator before they become incidents.",
                    },
                  ].map((row) => (
                    <li
                      key={row.label}
                      className="flex gap-3 border-t border-navy-900/15 pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none bg-saffron-500" />
                      <div>
                        <div className="font-bold text-navy-900">{row.label}</div>
                        <p className="mt-1 text-sm leading-relaxed text-navy-700">
                          {row.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="border-y-2 border-navy-900 bg-paper">
        <Container>
          <div className="py-24 md:py-32">
            <div className="max-w-3xl">
              <SectionLabel number="03" label="Operating values" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-navy-900 balance">
                Four commitments. Made at the start. Honored at every review.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <article className="card h-full p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center border-2 border-navy-900 bg-saffron-500 text-navy-900">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-navy-900">
                      {v.title}.
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-navy-700">
                      {v.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* OPERATING DOCTRINE */}
      <section className="border-t-2 border-navy-900 bg-paper">
        <Container>
          <div className="grid gap-12 py-24 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <SectionLabel number="04" label="Operating doctrine" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-navy-900 balance">
                The work, on the record.
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-navy-700">
                {BRAND.shortName} runs as a small, senior operator team. Programs are
                designed and delivered by the same people. Nothing is thrown over the
                wall to a junior delivery pod that has never seen the brief.
              </p>
            </Reveal>

            <div className="md:col-span-7">
              <div className="border-2 border-navy-900 bg-paper p-8">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-700">
                  Three rules of engagement
                </div>
                <ul className="mt-6 space-y-5">
                  {[
                    {
                      label: "Senior operators on every program.",
                      body: "The strategist on your account is the same person running the program week to week.",
                    },
                    {
                      label: "One brief. One tracker. One report.",
                      body: "Every program runs on the same documentation set so handoffs are clean and audits are short.",
                    },
                    {
                      label: "Nothing parades a client without consent.",
                      body: "Case studies, names, and metrics ship to the public site only with written sign-off from the client.",
                    },
                  ].map((row) => (
                    <li
                      key={row.label}
                      className="flex gap-3 border-t border-navy-900/15 pt-5 first:border-t-0 first:pt-0"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none bg-saffron-500" />
                      <div>
                        <div className="font-bold text-navy-900">{row.label}</div>
                        <p className="mt-1 text-sm leading-relaxed text-navy-700">
                          {row.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MISSION + WHAT WE DO NOT DO */}
      <section className="border-t-2 border-navy-900 bg-paper-deep">
        <Container>
          <div className="grid gap-14 py-24 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-6">
              <SectionLabel number="05" label="Mission" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-navy-900 balance">
                Build the brand the way an owner would build the business.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-navy-700">
                {BRAND.name} treats every brand we touch as an asset on the
                balance sheet. The work is durable. The reporting is honest.
                The systems outlast the people running them. The engagement is
                designed to be inherited, not held over the next CMO's head.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={CTAS.primary.href} className="btn-primary group">
                  <span>Book a working session</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services/" className="btn-secondary">
                  See the operator stack
                </Link>
              </div>
            </Reveal>

            <Reveal className="md:col-span-6" delay={0.08}>
              <div className="border-2 border-saffron-400 bg-navy-900 p-8 text-paper">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-400">
                  What we do not do
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    "Pay for editorial coverage and call it earned.",
                    "Hold credentials or accounts hostage from clients.",
                    "Run undisclosed reputation campaigns.",
                    "Publish founder content without written approval.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3 border-t border-paper/20 pt-4 first:border-t-0 first:pt-0">
                      <span className="font-bold text-saffron-400">/</span>
                      <span className="text-paper">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
