import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";
import { fetchRolesFromApi } from "@/lib/data/careers";
import { CareersFilterProvider } from "../careers/careers-filter-context";
import JobFilterControls from "../careers/job-filter-controls";
import JobFilterList from "../careers/job-filter-list";

export const metadata: Metadata = {
  title: "Open Positions",
  description: `Apply to operate at ${BRAND.name}. Current openings across marketing, search, and account roles.`,
  alternates: { canonical: "/positions/" },
};

export default async function PositionsPage() {
  const roles = await fetchRolesFromApi();
  const totalRoles = roles.length;

  return (
    <CareersFilterProvider allRoles={roles}>
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
            itemListElement: roles.map((role, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: role.title,
              url: `/careers/${role.slug}/`,
            })),
          },
        ]}
      />

      {/* HEROO */}
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
              {BRAND.name} hires on a rolling basis. {totalRoles} live {totalRoles === 1 ? "opening is" : "openings are"} listed below.
              See the main{" "}
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

      {/* ROLES LIST */}
      <section id="positions" className="bg-paper py-20 md:py-28 scroll-mt-20">
        <Container>
          <div className="mb-10">
            <JobFilterControls scrollToId="positions" />
          </div>

          <JobFilterList />

          <div className="mt-12 rounded-2xl border border-paper-edge bg-white/60 p-6 text-sm text-navy-700">
            <span className="font-semibold text-navy-900">
              A note on role descriptions:
            </span>{" "}
            Final compensation, equity treatment, and reporting lines are confirmed
            in the application response. We hire on the work and document the offer
            on signed terms before a start date is set.
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Open application"
        number="02"
        title="Don't see a role that fits?"
        description={`Send a working brief to ${NAP.email.careers}. We hire when the right operator surfaces.`}
      />
    </CareersFilterProvider>
  );
}
