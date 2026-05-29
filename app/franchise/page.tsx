import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Box, Tag, Handshake } from "lucide-react";
import { BRAND, CTAS } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Partner with Us, Partnership and White-Label Opportunities",
  description: `Operate ${BRAND.name} systems in your market. Licensing and partnership inquiries.`,
  alternates: { canonical: "/franchise/" },
};

const STRUCTURES = [
  {
    icon: Tag,
    label: "White-label delivery",
    body:
      "We run programs under your brand for your end-clients. Documentation, reporting, and credentials all transfer cleanly.",
  },
  {
    icon: Box,
    label: "Operator licensing",
    body:
      "We license the operating system, brand-book templates, and reporting framework to in-house teams.",
  },
  {
    icon: Handshake,
    label: "Joint operations",
    body:
      "We co-run programs alongside an in-house team that wants the standard without rebuilding the operating model from scratch.",
  },
];

export default function FranchisePage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Partner", url: "/franchise/" },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.heroArchitecture.id, 2400, 78)}
          alt={IMG.heroArchitecture.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-24 pt-32 md:pb-32 md:pt-40">
            <SectionLabel number="01" label="Partner & white-label" variant="dark" />
            <h1 className="mt-8 max-w-4xl font-serif text-display-xl font-semibold text-paper balance">
              Operate the system in your market.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
              {BRAND.name} runs an operator-grade marketing system. For partners
              who need the same standard delivered under their own brand, we offer
              structured partnership and white-label arrangements.
            </p>
          </div>
        </Container>
      </section>

      {/* STRUCTURES */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <SectionLabel number="02" label="Engagement structures" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Three ways to operate together.
              </h2>
              <p className="mt-6 max-w-md text-navy-700">
                Each engagement is scoped to the partner's portfolio shape and market.
                The same operating system applies: documented programs, transferable
                accounts, and accountable reporting.
              </p>
            </Reveal>

            <div className="md:col-span-7 grid gap-5">
              {STRUCTURES.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <article className="card flex items-start gap-5 p-6">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-navy-900 text-paper">
                      <s.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy-900">
                        {s.label}
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-navy-700">
                        {s.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-y border-paper-edge bg-white/40">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-6">
              <SectionLabel number="03" label="Who this is for" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Operators with portfolios. Agencies that need a delivery layer.
                In-house teams without the system.
              </h2>
            </div>
            <div className="md:col-span-6">
              <ul className="divide-y divide-paper-edge border-y border-paper-edge">
                {[
                  "Holdings groups with multiple portfolio brands.",
                  "Boutique agencies wanting an operator-grade delivery layer.",
                  "In-house teams that need documented systems without building them from zero.",
                ].map((line) => (
                  <li key={line} className="py-4 text-[16px] text-navy-700">
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-paper-deep/50 p-5 text-xs text-navy-700">
                Partnership scope, terms, and pricing are set on a per-engagement basis.
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={CTAS.primary.href} className="btn-primary group">
                  <span>{CTAS.primary.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services/" className="btn-secondary">
                  See the operator stack
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Considering a partnership?"
        number="04"
        title="Send a working brief, not a generic intro."
        description="Outline your portfolio shape, markets, and the standard you want to operate to. We respond on the same business day."
      />
    </>
  );
}
