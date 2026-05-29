import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { CTAS } from "@/lib/constants";
import { INDUSTRIES, getIndustryBySlug } from "@/lib/industries";
import { SERVICES } from "@/lib/services";
import { SERVICE_ICONS } from "@/lib/service-icons";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const it = getIndustryBySlug(params.slug);
  if (!it) return {};
  return {
    title: it.name,
    description: it.short,
    alternates: { canonical: `/industries/${it.slug}/` },
  };
}

const HERO_IMG: Record<string, string> = {
  "real-estate-operators": IMG.heroArchitecture.id,
  "property-services": IMG.workMeeting.id,
  "professional-services": IMG.editorialMagazine.id,
  "holding-companies": IMG.heroBoardroom.id,
  "portfolio-brands": IMG.strategySession.id,
  "family-offices": IMG.about.id,
};

export default function IndustryDetailPage({ params }: Params) {
  const it = getIndustryBySlug(params.slug);
  if (!it) notFound();

  const heroImgId = HERO_IMG[it.slug] ?? IMG.heroBoardroom.id;
  const relatedServices = it.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  const idxInList = INDUSTRIES.findIndex((x) => x.slug === it.slug);

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries/" },
          { name: it.name, url: `/industries/${it.slug}/` },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(heroImgId, 2400, 78)}
          alt={`${it.name} brief`}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-20 pt-32 md:pb-28 md:pt-40">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-paper/60">
              <Link href="/industries/" className="hover:text-paper">
                Industries
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper/95">{it.name}</span>
            </nav>

            <div className="mt-10 grid items-end gap-12 md:grid-cols-12">
              <div className="md:col-span-9">
                <SectionLabel
                  number={`${String(idxInList + 1).padStart(2, "0")} / Industry brief`}
                  label="Operating posture"
                  variant="dark"
                />
                <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                  {it.name}.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                  {it.intro}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                    <span>{CTAS.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/industries/" className="btn-ghost-on-dark">
                    All industries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BODY + ASIDE */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-16 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-7">
              <Reveal>
                <SectionLabel number="01" label="The brief" />
                <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                  {it.short}
                </h2>
                <div className="prose prose-slate mt-8 max-w-none text-[17px] leading-[1.75] text-navy-800">
                  {it.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-20" delay={0.05}>
                <SectionLabel number="02" label="Closing" />
                <p className="mt-6 max-w-prose text-[17px] leading-[1.75] text-navy-800">
                  {it.closing}
                </p>
              </Reveal>
            </div>

            <aside className="md:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-paper-edge bg-navy-900 p-7 text-paper">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
                    Operator stack for this industry
                  </div>
                  <ul className="mt-6 space-y-3">
                    {relatedServices.map((s) => {
                      const Icon = SERVICE_ICONS[s.slug];
                      return (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}/`}
                            className="group flex items-center gap-3 rounded-xl border border-transparent p-3 no-underline transition hover:border-paper/20 hover:bg-paper/5"
                          >
                            {Icon && (
                              <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-paper/10 text-gold-300">
                                <Icon className="h-4 w-4" strokeWidth={1.6} />
                              </span>
                            )}
                            <span className="flex-1">
                              <span className="block text-sm font-semibold text-paper">
                                {s.name}
                              </span>
                              <span className="block text-xs text-paper/70">
                                {s.outcome}
                              </span>
                            </span>
                            <ChevronRight className="h-4 w-4 text-paper/60 transition group-hover:translate-x-0.5 group-hover:text-paper" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href={CTAS.primary.href}
                    className="btn-primary-on-dark mt-7 w-full justify-between group"
                  >
                    <span>{CTAS.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Engagement"
        number="03"
        title={`Run the operator stack against ${it.name.toLowerCase()}.`}
        description="Bring us the category brief. We map the operator stack to the environment and report on a Friday cadence from week one."
      />
    </>
  );
}
