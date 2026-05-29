import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BRAND, CTAS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Services",
  description: `The full operator stack: brand systems, web, search, listings, social, paid, reputation, entity defense, and reporting.`,
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: SERVICES.map((s, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              url: `/services/${s.slug}/`,
              name: s.name,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.strategySession.id, 2400, 78)}
          alt={IMG.strategySession.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative grid items-end gap-12 pb-24 pt-32 md:min-h-[68vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-9">
              <SectionLabel number="01" label="The operator stack" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                Ten programs. One operating system.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                Each program runs on the same documentation, reporting, and review
                discipline. Pick one to start, or run the full stack. They were
                designed to compound together.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                  <span>{CTAS.primary.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/about/" className="btn-ghost-on-dark">
                  How we operate
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES INDEX */}
      <section className="bg-paper">
        <Container>
          <div className="py-20 md:py-28">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <ServiceCard service={s} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INDEX TABLE - at-a-glance summary */}
      <section className="border-t border-paper-edge bg-white/40">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <SectionLabel number="02" label="At a glance" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                What each program is built to deliver.
              </h2>
            </div>
            <div className="mt-12 overflow-hidden rounded-2xl border border-paper-edge bg-white">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="group grid grid-cols-[64px_1fr_auto] items-center gap-6 border-t border-paper-edge px-6 py-6 no-underline transition first:border-t-0 hover:bg-paper md:grid-cols-[80px_3fr_4fr_auto] md:gap-8 md:px-8"
                >
                  <span className="font-mono text-[12px] tracking-[0.18em] text-navy-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-lg font-semibold text-navy-900 md:text-xl">
                    {s.name}
                  </span>
                  <span className="hidden text-[15px] text-navy-700 md:block">
                    {s.outcome}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Engagement"
        number="03"
        title="Need the full stack run as one program?"
        description="We design and operate the integrated portfolio: brand, web, search, listings, social, paid, reputation, entity defense, and reporting, all on the same documentation and reporting discipline."
      />
    </>
  );
}
