import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { BRAND, CTAS, SITE } from "@/lib/constants";
import { COUNTRIES, STATES, TOTAL_CITIES } from "@/lib/locations";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Locations | Marketing Agency Coverage Across the US & Canada",
  description: `${BRAND.name} runs brand, search, and lead programs in ${TOTAL_CITIES} cities across ${STATES.length} states and provinces in the United States and Canada. Find your market.`,
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Locations", url: "/locations/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${BRAND.name} location coverage`,
            itemListElement: STATES.map((s, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              url: `${SITE.url}/locations/${s.slug}/`,
              name: `${s.state} (${s.cities.length} cities)`,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.heroSkyline.id, 2400, 78)}
          alt="City skylines across the United States and Canada"
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative grid items-end gap-12 pb-24 pt-32 md:min-h-[64vh] md:grid-cols-12 md:pb-32 md:pt-40">
            <div className="md:col-span-9">
              <SectionLabel number="01" label="Coverage" variant="dark" />
              <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                Local programs in {TOTAL_CITIES} cities across the US and Canada.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                We run the same brand, search, and lead-engine discipline in every
                market we serve. Find your state or province below, then your city.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                  <span>{CTAS.primary.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/services/" className="btn-ghost-on-dark">
                  See the service stack
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COUNTRY -> STATE INDEX */}
      {COUNTRIES.map((country, ci) => (
        <section
          key={country.country}
          className={ci % 2 === 0 ? "bg-paper" : "border-t border-paper-edge bg-white/40"}
        >
          <Container>
            <div className="py-20 md:py-28">
              <div className="max-w-3xl">
                <SectionLabel
                  number={String(ci + 2).padStart(2, "0")}
                  label={country.country}
                />
                <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                  {country.cityCount} cities across {country.states.length}{" "}
                  {country.country === "Canada" ? "provinces" : "states"}.
                </h2>
              </div>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {country.states.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                    <Link
                      href={`/locations/${s.slug}/`}
                      className="group block h-full rounded-2xl border border-paper-edge bg-white p-7 no-underline transition hover:border-navy-900/30 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
                          <MapPin className="h-4 w-4 text-navy-700" />
                          {s.state}
                        </span>
                        <span className="font-mono text-[12px] tracking-[0.18em] text-navy-700">
                          {s.stateAbbr}
                        </span>
                      </div>
                      <p className="mt-3 text-[15px] text-navy-700">
                        {s.cities.length} {s.cities.length === 1 ? "city" : "cities"}{" "}
                        served
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy-900">
                        View {s.state}
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CTASection
        eyebrow="Engagement"
        number="→"
        title="Don't see your market listed?"
        description="We open new markets every month. Tell us where you operate and we will scope a program for your city."
      />
    </>
  );
}
