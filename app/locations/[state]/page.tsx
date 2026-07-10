import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { BRAND, CTAS, SITE } from "@/lib/constants";
import { STATES, getState, SERVICE_LINES } from "@/lib/locations";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

type Params = { params: { state: string } };

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = getState(params.state);
  if (!s) return {};
  const noun = s.country === "Canada" ? "province" : "state";
  return {
    title: `Marketing Agency in ${s.state} | ${s.cities.length} Cities Served`,
    description: `${BRAND.name} runs brand, SEO, paid media, and lead programs across ${s.cities.length} ${s.state} cities. Local marketing agency coverage in the ${s.state} ${noun}.`,
    alternates: { canonical: `/locations/${s.slug}/` },
    openGraph: {
      title: `Marketing Agency in ${s.state}`,
      description: `Local marketing programs across ${s.cities.length} ${s.state} cities.`,
      url: `${SITE.url}/locations/${s.slug}/`,
      siteName: BRAND.name,
      type: "website",
    },
  };
}

export default function StateHubPage({ params }: Params) {
  const s = getState(params.state);
  if (!s) notFound();
  const noun = s.country === "Canada" ? "province" : "state";

  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Locations", url: "/locations/" },
            { name: s.state, url: `/locations/${s.slug}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${BRAND.name} cities in ${s.state}`,
            itemListElement: s.cities.map((c, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              url: `${SITE.url}${c.hubUrl}/`,
              name: `${c.city}, ${c.stateAbbr}`,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.cityArchitecture.id, 2400, 78)}
          alt={`Marketing agency coverage across ${s.state}`}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-20 pt-32 md:pb-28 md:pt-40">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-paper/60"
            >
              <Link href="/" className="hover:text-paper">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/locations/" className="hover:text-paper">
                Locations
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper/95">{s.state}</span>
            </nav>

            <div className="mt-10 grid items-end gap-12 md:grid-cols-12">
              <div className="md:col-span-9">
                <SectionLabel number="01" label={`${s.state} coverage`} variant="dark" />
                <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                  Marketing agency programs across {s.cities.length} {s.state}{" "}
                  {s.cities.length === 1 ? "city" : "cities"}.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                  Brand systems, search, paid media, and lead engines, run with the
                  same documentation and reporting discipline in every {s.state}{" "}
                  market we serve.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                    <span>{CTAS.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/locations/" className="btn-ghost-on-dark">
                    All locations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CITY INDEX */}
      <section className="bg-paper">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <SectionLabel number="02" label="Cities served" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Find your {s.state} city.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.cities.map((c, i) => (
                <Reveal key={c.cityKey} delay={(i % 3) * 0.05}>
                  <Link
                    href={`${c.hubUrl}/`}
                    className="group flex items-center justify-between rounded-xl border border-paper-edge bg-white px-5 py-4 no-underline transition hover:border-navy-900/30 hover:shadow-sm"
                  >
                    <span className="font-serif text-lg font-semibold text-navy-900">
                      {c.city}
                      <span className="ml-2 font-mono text-[11px] tracking-[0.16em] text-navy-700">
                        {c.stateAbbr}
                      </span>
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICE STACK (what runs in every city) */}
      <section className="border-t border-paper-edge bg-white/40">
        <Container>
          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <SectionLabel number="03" label="What we run" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Every {s.state} program draws on the same stack.
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {SERVICE_LINES.map((svc) => (
                <span
                  key={svc.slug}
                  className="rounded-full border border-navy-900/15 bg-white px-4 py-2 text-sm text-navy-800"
                >
                  {svc.label}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Engagement"
        number="→"
        title={`Run a program in ${s.state}.`}
        description="Bring us a brand without a system, a search problem you can't outrank, or a lead engine that won't compound. We respond inside one business day."
      />
    </>
  );
}
