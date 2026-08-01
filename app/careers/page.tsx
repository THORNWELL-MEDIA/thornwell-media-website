import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, KeyRound, Briefcase, Wrench, Users, PenLine } from "lucide-react";
import { BRAND, CTAS, NAP } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";
import { fetchRolesFromApi } from "@/lib/data/careers";

import { CareersFilterProvider } from "./careers-filter-context";
import JobFilterControls from "./job-filter-controls";
import JobFilterList from "./job-filter-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers, Operate with Us",
  description: `${BRAND.name} hires marketing operators, search engineers, and account leads. See live positions and apply.`,
  alternates: { canonical: "/careers/" },
};

const ROLES_CATEGORIES = [
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

export default async function CareersPage() {
  const allRoles = await fetchRolesFromApi();
  const totalRoles = allRoles.length;

  return (
    <CareersFilterProvider allRoles={allRoles}>
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
              {BRAND.name} hires operators—people who run programs, document the
              work, and report honestly. Live postings are updated automatically.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#positions" className="btn-primary-on-dark group">
                <span>View open positions ({totalRoles})</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link href={CTAS.primary.href} className="btn-ghost-on-dark">
                {CTAS.primary.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE HIRE */}
      <section className="bg-paper border-b border-paper-edge">
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
              {ROLES_CATEGORIES.map((r, i) => (
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

      {/* LIVE OPEN POSITIONS SECTION */}
      <section id="positions" className="bg-paper py-20 md:py-28 scroll-mt-20">
        <Container>
          <div className="max-w-3xl mb-10">
            <SectionLabel number="03" label="Open Positions" />
            <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
              {totalRoles} {totalRoles === 1 ? "role" : "roles"} open right now.
            </h2>
            <p className="mt-3 text-navy-700">
              Filtered by country, region, and city. Click a role to read the full job description and apply.
            </p>
          </div>

          <div className="mb-10">
            <JobFilterControls scrollToId="positions" />
          </div>

          <JobFilterList />
        </Container>
      </section>

      {/* HOW TO APPLY */}
      <section className="border-t border-paper-edge bg-white/40">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <SectionLabel number="04" label="How to apply" />
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
                      Browse current live roles on the{" "}
                      <a href="#positions" className="text-navy-900 underline font-medium">
                        positions index
                      </a>
                      . Open spec applications are also welcomed.
                    </>
                  ),
                  icon: FileText,
                },
                {
                  no: "02",
                  title: "Send a working brief",
                  body: (
                    <>
                      Click any position to review full details and apply online, or email{" "}
                      <a
                        href={`mailto:${NAP.email.careers}`}
                        className="text-navy-900 underline font-medium"
                      >
                        {NAP.email.careers}
                      </a>{" "}
                      with your resume.
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
                    <span className="font-mono text-[12px] tracking-[0.18em] text-gold-600 font-semibold">
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

      <CTASection
        eyebrow="Careers"
        number="05"
        title="Apply to operate with us."
        description={`Send your brief or application. We respond to every candidate that engages with the work.`}
      />
    </CareersFilterProvider>
  );
}
