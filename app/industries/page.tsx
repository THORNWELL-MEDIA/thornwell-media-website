import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CTAS } from "@/lib/constants";
import { INDUSTRIES } from "@/lib/industries";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Thornwell Media operates marketing systems for real estate operators, property services, professional services, holding companies, portfolio brands, and family offices.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: INDUSTRIES.map((it, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              url: `/industries/${it.slug}/`,
              name: it.name,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.heroBoardroom.id, 2400, 78)}
          alt={IMG.heroBoardroom.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative grid items-end gap-12 pb-24 pt-32 md:min-h-[68vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-9">
              <SectionLabel number="01" label="Industries we operate in" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                Built for operators that hold across decades, not deal cycles.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                Thornwell Media runs the same operator stack across every category we serve.
                Documented programs, transferable accounts, Friday executive reports. The
                playbook is shared. The application is shaped to the category.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                  <span>{CTAS.primary.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services/" className="btn-ghost-on-dark">
                  See the operator stack
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INDUSTRY GRID */}
      <section className="bg-paper">
        <Container>
          <div className="py-20 md:py-28">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((it, i) => (
                <Reveal key={it.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/industries/${it.slug}/`}
                    className="card card-hover group flex h-full flex-col p-7 no-underline"
                  >
                    <span className="font-mono text-[12px] tracking-[0.18em] text-saffron-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-5 font-serif text-xl font-semibold leading-snug text-navy-900">
                      {it.name}
                    </h2>
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

      <CTASection
        eyebrow="Operating posture"
        number="02"
        title="A category brief, in one working session."
        description="Tell us the category, the portfolio shape, and the time horizon. We bring back a working brief with the operator stack mapped to your environment."
      />
    </>
  );
}
