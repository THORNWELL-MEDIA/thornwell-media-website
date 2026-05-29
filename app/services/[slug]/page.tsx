import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { BRAND, CTAS } from "@/lib/constants";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { SERVICE_ICONS } from "@/lib/service-icons";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  return {
    title: svc.name,
    description: `${BRAND.name}'s ${svc.name} program: ${svc.outcome.toLowerCase()}. Built for ambitious operators.`,
    alternates: { canonical: `/services/${svc.slug}/` },
  };
}

// Common FAQs appended to every service to bring accordion item counts to 8+.
const COMMON_FAQS = [
  {
    q: "Who owns the accounts and credentials the program runs on?",
    a: "Client-owned credentials, always. Registrar, hosting, analytics, and ad accounts are stood up under the client's identity from day one. Nothing operates under an agency-only login.",
  },
  {
    q: "How do you handle audit trail and accountability?",
    a: "Every meaningful action, campaign launch, approval, asset publication, is logged to a comprehensive audit trail. Timestamped, attributable, exportable for compliance review.",
  },
  {
    q: "What does the engagement look like in week one?",
    a: "Foundation Sprint: account audit, brief documentation, KPI dictionary, and operating cadence agreement. The first week ends with a working program brief, not a proposal deck.",
  },
  {
    q: "Are reporting and metrics standardized?",
    a: `Yes. Every ${BRAND.shortName} program reports against the same operator-grade KPI framework. Friday executive reports. Red-yellow-green KPIs. Exceptions surface before they become incidents.`,
  },
  {
    q: "Can the program scale across multiple brands or business units?",
    a: `${BRAND.shortName} was built to operate marketing across multi-brand environments. Each brand keeps its own front-end identity while the underlying documentation, KPI dictionary, and reporting cadence stay unified.`,
  },
  {
    q: "What is the minimum engagement length?",
    a: "Programs are scoped quarterly. We do not lock clients into multi-year contracts and we do not hold credentials hostage. The work is portable on demand under documented handoff terms.",
  },
];

const SERVICE_HERO_IMG: Record<string, string> = {
  "brand-systems": IMG.brandWall.id,
  "web-architecture": IMG.laptopStrategy.id,
  "search-dominance": IMG.analyticsDesk.id,
  "listings-infrastructure": IMG.mapsScreen.id,
  "social-operations": IMG.socialContent.id,
  "paid-acquisition": IMG.paidCampaign.id,
  "reputation-operations": IMG.workMeeting.id,
  "entity-serp-defense": IMG.editorialPrint.id,
  "operator-reporting": IMG.reportingDashboard.id,
  "executive-search-presence": IMG.editorialMagazine.id,
};

export default function ServiceDetailPage({ params }: Params) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) notFound();

  const Icon = SERVICE_ICONS[svc.slug];
  const heroImgId = SERVICE_HERO_IMG[svc.slug] ?? IMG.heroBoardroom.id;

  const related = svc.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  const idxInStack = SERVICES.findIndex((s) => s.slug === svc.slug);

  return (
    <>
      <SchemaJsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services/" },
            { name: svc.name, url: `/services/${svc.slug}/` },
          ]),
          serviceSchema(svc),
          faqSchema([...svc.faq, ...COMMON_FAQS]),
        ]}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(heroImgId, 2400, 78)}
          alt={`${svc.name} program`}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-20 pt-32 md:pb-28 md:pt-40">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-paper/60">
              <Link href="/services/" className="hover:text-paper">
                Services
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper/95">{svc.name}</span>
            </nav>

            <div className="mt-10 grid items-end gap-12 md:grid-cols-12">
              <div className="md:col-span-9">
                <SectionLabel
                  number={`${String(idxInStack + 1).padStart(2, "0")} / Operator stack`}
                  label={svc.outcome}
                  variant="dark"
                />
                <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                  {svc.name}.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                  {svc.short}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                    <span>{CTAS.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/services/" className="btn-ghost-on-dark">
                    All services
                  </Link>
                </div>
              </div>
              <div className="hidden md:col-span-3 md:flex md:justify-end">
                {Icon && (
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl border border-paper/15 bg-paper/5 text-gold-400 backdrop-blur">
                    <Icon className="h-10 w-10" strokeWidth={1.4} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DESCRIPTION + ASIDE */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-16 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-7">
              <Reveal>
                <SectionLabel number="01" label="What it is" />
                <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                  {svc.outcome}.
                </h2>
                <div className="prose prose-slate mt-8 max-w-none text-[17px] leading-[1.75] text-navy-800">
                  <p>{svc.description}</p>
                </div>
              </Reveal>

              <Reveal className="mt-20" delay={0.05}>
                <SectionLabel number="02" label="Why operators pick this approach" />
                <p className="mt-6 max-w-prose text-[17px] leading-[1.75] text-navy-800">
                  Ambitious operators cannot afford undocumented work. They need
                  programs they can audit, accounts they own, and reports they can
                  read in fifteen seconds. {svc.name} is run to that bar by default.
                </p>
              </Reveal>

              <Reveal className="mt-20" delay={0.05}>
                <SectionLabel number="03" label="What you get" />
                <ul className="mt-8 space-y-5">
                  {svc.whatYouGet.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-navy-900 text-paper">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-[16px] leading-[1.7] text-navy-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-20" delay={0.05}>
                <SectionLabel number="04" label="How we measure" />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {svc.measure.map((m, i) => (
                    <div
                      key={m}
                      className="card flex items-start gap-3 p-5"
                    >
                      <span className="mt-0.5 font-mono text-[12px] tracking-[0.18em] text-gold-600">
                        M{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] leading-7 text-navy-800">{m}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-20" delay={0.05}>
                <SectionLabel number="05" label="Frequently asked" />
                <FAQAccordion items={[...svc.faq, ...COMMON_FAQS]} className="mt-10" />
              </Reveal>
            </div>

            <aside className="md:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-paper-edge bg-navy-900 p-7 text-paper">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
                    Engagement model
                  </div>
                  <ul className="mt-6 space-y-5 text-paper/95">
                    <li>
                      <div className="font-semibold text-paper">Onboarding</div>
                      <p className="mt-1 text-sm leading-7 text-paper/90">
                        Foundation Sprint to document state and launch the program.
                      </p>
                    </li>
                    <li className="border-t border-paper/10 pt-5">
                      <div className="font-semibold text-paper">Cadence</div>
                      <p className="mt-1 text-sm leading-7 text-paper/90">
                        Weekly executive report. Monthly analytics. Quarterly review.
                      </p>
                    </li>
                    <li className="border-t border-paper/10 pt-5">
                      <div className="font-semibold text-paper">Ownership</div>
                      <p className="mt-1 text-sm leading-7 text-paper/90">
                        Every account under client identity. Credentials transferable
                        on demand.
                      </p>
                    </li>
                  </ul>
                  <Link
                    href={CTAS.primary.href}
                    className="btn-primary-on-dark mt-7 w-full justify-between group"
                  >
                    <span>{CTAS.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {related.length > 0 && (
                  <div className="rounded-2xl border border-paper-edge bg-white p-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                      Related programs
                    </div>
                    <ul className="mt-5 space-y-2">
                      {related.map((r) => {
                        const RelatedIcon = SERVICE_ICONS[r.slug];
                        return (
                          <li key={r.slug}>
                            <Link
                              href={`/services/${r.slug}/`}
                              className="group flex items-center gap-4 rounded-xl border border-transparent p-3 no-underline transition hover:border-paper-edge hover:bg-paper-deep/40"
                            >
                              {RelatedIcon && (
                                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-paper-deep/40 text-navy-900">
                                  <RelatedIcon className="h-4 w-4" strokeWidth={1.6} />
                                </span>
                              )}
                              <span className="flex-1">
                                <span className="block font-semibold text-navy-900">
                                  {r.name}
                                </span>
                                <span className="block text-xs text-navy-700">
                                  {r.outcome}
                                </span>
                              </span>
                              <ChevronRight className="h-4 w-4 text-navy-700 transition group-hover:translate-x-0.5 group-hover:text-navy-900" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Engagement"
        number="06"
        title={`Run ${svc.name} as part of the operator stack.`}
        description="Pick this program standalone, or layer it with brand, web, search, paid, listings, and reputation as one integrated operating system."
      />
    </>
  );
}
