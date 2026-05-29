import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Open Positions",
  description: `Apply to operate at ${BRAND.name}. Current openings across marketing, search, and account roles.`,
  alternates: { canonical: "/positions/" },
};

const OPEN_ROLES = [
  {
    slug: "senior-marketing-operator",
    title: "Senior Marketing Operator",
    short:
      "Lead end-to-end marketing programs for one or more portfolio brands. Document, ship, and report.",
    type: "Full-time",
    location: "Remote",
    status: "Accepting applications",
  },
  {
    slug: "search-listings-specialist",
    title: "Search & Listings Specialist",
    short:
      "Run technical SEO, local SEO, and listings infrastructure across a portfolio of multi-entity brands.",
    type: "Full-time",
    location: "Remote",
    status: "Accepting applications",
  },
];

export default function PositionsPage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Careers", url: "/careers/" },
            { name: "Open Positions", url: "/positions/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: OPEN_ROLES.map((role, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: role.title,
              url: `/positions/`,
            })),
          },
        ]}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.workMeeting.id, 2400, 78)}
          alt={IMG.workMeeting.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-24 pt-32 md:pb-32 md:pt-40">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-paper/60">
              <Link href="/careers/" className="hover:text-paper">
                Careers
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper/95">Open positions</span>
            </nav>
            <SectionLabel number="01" label="Open positions" variant="dark" className="mt-10" />
            <h1 className="mt-8 max-w-4xl font-serif text-display-xl font-semibold text-paper balance">
              Roles that ship programs.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
              {BRAND.name} hires on a rolling basis. Live openings are listed below.
              Open spec applications are also welcomed. See the{" "}
              <Link
                href="/careers/"
                className="border-b border-gold-400/60 text-paper hover:border-gold-400"
              >
                careers page
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ROLES */}
      <section className="bg-paper">
        <Container>
          <div className="py-20 md:py-28">
            <div className="overflow-hidden rounded-2xl border border-paper-edge bg-white">
              {OPEN_ROLES.map((role, i) => (
                <div
                  key={role.slug}
                  className="grid items-center gap-6 border-t border-paper-edge px-8 py-8 first:border-t-0 md:grid-cols-12"
                >
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-6 bg-paper-edge" />
                      <span>
                        {role.type} · {role.location}
                      </span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl font-semibold text-navy-900 md:text-3xl">
                      {role.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-7 text-navy-700">
                      {role.short}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <span className="inline-flex items-center rounded-full border border-emerald-700/30 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-900">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
                      {role.status}
                    </span>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <a
                      href={`mailto:${NAP.email.careers}?subject=${encodeURIComponent(role.title)}`}
                      className="btn-primary group"
                    >
                      <span>Apply</span>
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-paper-edge bg-white/60 p-6 text-sm text-navy-700">
              <span className="font-semibold text-navy-900">
                A note on the role descriptions:
              </span>{" "}
              Final compensation, equity treatment, and reporting line are confirmed
              in the application response. We hire on the work and document the offer
              on signed terms before a start date is set.
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Open application"
        number="02"
        title="Don't see a role that fits?"
        description={`Send a working brief to ${NAP.email.careers}. We hire when the right operator surfaces.`}
      />
    </>
  );
}
