import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { CTAS } from "@/lib/constants";
import { RESOURCES, getResourceBySlug } from "@/lib/resources";
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
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const r = getResourceBySlug(params.slug);
  if (!r) return {};
  return {
    title: r.name,
    description: r.short,
    alternates: { canonical: `/resources/${r.slug}/` },
  };
}

const HERO_IMG: Record<string, string> = {
  "brand-system-templates": IMG.brandWall.id,
  playbooks: IMG.documents.id,
  research: IMG.editorialMagazine.id,
};

export default function ResourceDetailPage({ params }: Params) {
  const r = getResourceBySlug(params.slug);
  if (!r) notFound();

  const heroImgId = HERO_IMG[r.slug] ?? IMG.editorialPrint.id;

  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/" },
          { name: r.name, url: `/resources/${r.slug}/` },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(heroImgId, 2400, 78)}
          alt={`${r.name} resource`}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-20 pt-32 md:pb-28 md:pt-40">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-paper/60">
              <Link href="/resources/" className="hover:text-paper">
                Resources
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper/95">{r.name}</span>
            </nav>

            <div className="mt-10 grid items-end gap-12 md:grid-cols-12">
              <div className="md:col-span-9">
                <SectionLabel number="01" label="Working resource" variant="dark" />
                <h1 className="mt-8 font-serif text-display-xl font-semibold text-paper balance">
                  {r.name}.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
                  {r.intro}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href={CTAS.primary.href} className="btn-primary-on-dark group">
                    <span>{CTAS.primary.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/resources/" className="btn-ghost-on-dark">
                    All resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BODY */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-16 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-8">
              <Reveal>
                <SectionLabel number="02" label="What it covers" />
                <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                  {r.short}
                </h2>
                <div className="prose prose-slate mt-8 max-w-none text-[17px] leading-[1.75] text-navy-800">
                  {r.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="mt-20" delay={0.05}>
                <SectionLabel number="03" label="Closing" />
                <p className="mt-6 max-w-prose text-[17px] leading-[1.75] text-navy-800">
                  {r.closing}
                </p>
              </Reveal>
            </div>

            <aside className="md:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-paper-edge bg-white p-7">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                    Other resources
                  </div>
                  <ul className="mt-5 space-y-2">
                    {RESOURCES.filter((x) => x.slug !== r.slug).map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/resources/${other.slug}/`}
                          className="group flex items-center gap-3 rounded-xl border border-transparent p-3 no-underline transition hover:border-paper-edge hover:bg-paper-deep/40"
                        >
                          <span className="flex-1">
                            <span className="block font-semibold text-navy-900">
                              {other.name}
                            </span>
                            <span className="block text-xs text-navy-700">
                              {other.short}
                            </span>
                          </span>
                          <ChevronRight className="h-4 w-4 text-navy-700 transition group-hover:translate-x-0.5 group-hover:text-navy-900" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/resources/blog/"
                        className="group flex items-center gap-3 rounded-xl border border-transparent p-3 no-underline transition hover:border-paper-edge hover:bg-paper-deep/40"
                      >
                        <span className="flex-1">
                          <span className="block font-semibold text-navy-900">Blog</span>
                          <span className="block text-xs text-navy-700">
                            Notes from the operator desk.
                          </span>
                        </span>
                        <ChevronRight className="h-4 w-4 text-navy-700 transition group-hover:translate-x-0.5 group-hover:text-navy-900" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Engagement"
        number="04"
        title="Run the operator stack inside your operating company."
        description="Templates, playbooks, and research are the public layer. The private layer is the engagement that ships against your portfolio."
      />
    </>
  );
}
