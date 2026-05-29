import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, KeyRound, Briefcase, Wrench, Users, PenLine } from "lucide-react";
import { BRAND, CTAS, NAP } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import JobBoard from "./JobBoard";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Careers, Operate with Us",
  description: `${BRAND.name} hires marketing operators, search engineers, and account leads. See open positions and apply.`,
  alternates: { canonical: "/careers/" },
};

const ROLES = [
  {
    icon: Briefcase,
    title: "Operators",
    body:
      "People who can hold a brief, ship a program, and write a report a CEO can read in fifteen seconds.",
  },
  {
    icon: Wrench,
    title: "Search engineers",
    body: "Technical SEO, schema, indexing, and entity-strategy specialists.",
  },
  {
    icon: Users,
    title: "Account leads",
    body:
      "Marketing operators who can run multiple portfolio brands without losing the thread on any of them.",
  },
  {
    icon: PenLine,
    title: "Editors and writers",
    body: "Content specialists who can hold a brand voice across long programs.",
  },
];

export default function CareersPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers/" },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.team.id, 2400, 78)}
          alt={IMG.team.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-24 pt-32 md:pb-32 md:pt-40">
            <SectionLabel number="01" label="Careers" variant="dark" />
            <h1 className="mt-8 max-w-4xl font-serif text-display-xl font-semibold text-paper balance">
              Operate with us.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
              {BRAND.name} hires operators, people who run programs, document the
              work, and report honestly. If that is the standard you want to operate
              to, we are accepting applications on a rolling basis.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/positions/" className="btn-primary-on-dark group">
                <span>See open positions</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href={CTAS.primary.href} className="btn-ghost-on-dark">
                {CTAS.primary.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE HIRE */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <SectionLabel number="02" label="Who we hire" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Operators, not service providers.
              </h2>
              <p className="mt-6 max-w-md text-navy-700">
                Direct work with operators and founders inside the portfolio.
                Remote-first across {NAP.address.country}.
              </p>
            </Reveal>

            <div className="md:col-span-7 grid gap-5 sm:grid-cols-2">
              {ROLES.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.06}>
                  <article className="card h-full p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-paper">
                      <r.icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900">
                      {r.title}.
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-navy-700">{r.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* HOW TO APPLY */}
      <section className="border-t border-paper-edge bg-white/40">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <SectionLabel number="03" label="How to apply" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Three steps. No theatre.
              </h2>
            </div>

            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  no: "01",
                  title: "Review open positions",
                  body: (
                    <>
                      Browse current roles on the{" "}
                      <Link href="/positions/" className="text-navy-900 underline">
                        positions index
                      </Link>
                      . Open spec applications are welcomed.
                    </>
                  ),
                  icon: FileText,
                },
                {
                  no: "02",
                  title: "Send a working brief",
                  body: (
                    <>
                      Email{" "}
                      <a
                        href={`mailto:${NAP.email.careers}`}
                        className="text-navy-900 underline"
                      >
                        {NAP.email.careers}
                      </a>{" "}
                      with resume, role of interest, and a short note on a program you
                      have shipped.
                    </>
                  ),
                  icon: KeyRound,
                },
                {
                  no: "03",
                  title: "Working session",
                  body: (
                    <>
                      Strong fits move to a paid working session. We hire on the work,
                      not the interview.
                    </>
                  ),
                  icon: Briefcase,
                },
              ].map((step) => (
                <li key={step.no} className="card flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] tracking-[0.18em] text-gold-600">
                      {step.no}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper-deep/40 text-navy-900">
                      <step.icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-navy-700">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <JobBoard />

      <CTASection
        eyebrow="Careers"
        number="04"
        title="Apply to operate with us."
        description={`Send your brief to ${NAP.email.careers}. We respond to every application that engages with the work.`}
      />
    </>
  );
}
