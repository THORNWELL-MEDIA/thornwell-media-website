import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Briefcase, Mail, MapPin } from 'lucide-react'

import SchemaJsonLd from '@/components/SchemaJsonLd'
import Container from '@/components/ui/Container'
import { breadcrumbSchema } from '@/lib/schema'
import { BRAND, SITE } from '@/lib/constants'
import { getAllRoleSlugs, getRoleBySlug, type Role } from '@/lib/data/careers'
import { ApplyButton } from './apply-button'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllRoleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(
  { params }: RouteParams
): Promise<Metadata> {
  const { slug } = await params
  const role = await getRoleBySlug(slug)
  if (!role) {
    return {
      title: `Role Not Found | ${BRAND.name}`,
      robots: { index: false, follow: false },
    }
  }
  const title = `${role.title}, ${role.locationDisplay} | ${BRAND.name} Careers`
  const description = `${role.title} (${role.type}) at ${BRAND.name} in ${role.locationDisplay}. ${role.summary ? role.summary.slice(0, 150) : role.title}`
  return {
    title,
    description,
    alternates: { canonical: `/careers/${role.slug}/` },
    openGraph: {
      title,
      description,
      images: ['/og-share.png'],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

function buildJobPostingSchema(role: Role) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': `${SITE.url}/careers/${role.slug}/#jobposting`,
    title: role.title,
    description: role.htmlDescription || [
      role.summary,
      'Key Responsibilities:',
      ...role.responsibilities.map((r) => `• ${r}`),
      'Required Skills:',
      ...role.requiredSkills.map((r) => `• ${r}`),
    ].join('\n'),
    identifier: {
      '@type': 'PropertyValue',
      name: BRAND.name,
      value: role.jobId,
    },
    datePosted: role.postingStartDate,
    employmentType:
      role.type.toLowerCase() === 'full-time' ? 'FULL_TIME' : 'OTHER',
    hiringOrganization: {
      '@type': 'Organization',
      name: BRAND.name,
      sameAs: SITE.url,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: role.city || 'Toronto',
        addressRegion: role.province || 'ON',
        addressCountry: role.country === 'United States' ? 'US' : 'CA',
      },
    },
    url: `${SITE.url}/careers/${role.slug}/`,
  }
}

export default async function CareerRolePage({ params }: RouteParams) {
  const { slug } = await params
  const role = await getRoleBySlug(slug)
  if (!role) notFound()

  const shareUrl = `${SITE.url}/careers/${role.slug}/`
  const shareSubject = `${role.title} at ${BRAND.name}`

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Careers', url: `${SITE.url}/careers/` },
    { name: role.title, url: shareUrl },
  ])

  return (
    <main className="bg-paper min-h-screen">
      <SchemaJsonLd data={buildJobPostingSchema(role)} />
      <SchemaJsonLd data={breadcrumbs} />

      {/* HERO */}
      <section className="bg-ink text-paper pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16">
        <Container>
          <Link
            href="/careers/#positions"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-paper/85 transition-colors hover:text-paper no-underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            See All Jobs
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:gap-10">
            <div className="min-w-0">
              <h1 className="font-serif text-3xl font-bold leading-[1.05] tracking-tight text-paper sm:text-4xl md:text-5xl lg:text-[4rem]">
                {role.title}
              </h1>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-paper/85 font-mono">
                {role.department}
              </p>

              <dl className="mt-6 space-y-2 text-sm sm:text-base">
                <MetaRow label="Type">{role.type}</MetaRow>
                <MetaRow label="Location(s)">{role.locationDisplay}</MetaRow>
                {role.compensation && (
                  <MetaRow label="Compensation">{role.compensation} Annually</MetaRow>
                )}
              </dl>

              <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
                <div>
                  <p className="text-sm font-semibold text-paper/80">
                    Share this job:
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <ShareIcon
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      label="Share on Facebook"
                    >
                      <FacebookIcon />
                    </ShareIcon>
                    <ShareIcon
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      label="Share on LinkedIn"
                    >
                      <LinkedInIcon />
                    </ShareIcon>
                    <ShareIcon
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareSubject)}`}
                      label="Share on X"
                    >
                      <XIcon />
                    </ShareIcon>
                    <ShareIcon
                      href={`mailto:?subject=${encodeURIComponent(shareSubject)}&body=${encodeURIComponent(shareUrl)}`}
                      label="Share by email"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </ShareIcon>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 lg:pb-1">
                  <ApplyButton
                    role={role.title}
                    jobId={role.jobId}
                    jobOpeningId={role.jobOpeningId}
                    locId={role.locId}
                    workType={role.workType}
                    jobType={role.jobType}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* JOB DESCRIPTION SECTION */}
      <section className="bg-paper py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[14rem_1fr] lg:gap-16 items-start">
            <aside className="lg:pt-2 lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-serif text-2xl font-bold text-navy-900 sm:text-3xl">
                Job
                <br />
                Description
              </h2>

              <ul className="mt-8 hidden space-y-3 text-xs text-navy-700 lg:block">
                <li className="flex items-start gap-2">
                  <Briefcase
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
                    aria-hidden="true"
                  />
                  <span>{role.type}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
                    aria-hidden="true"
                  />
                  <span>{role.locationDisplay}</span>
                </li>
              </ul>

              {/* STICKY IMPORTANT LOCATION REQUIREMENT BOX */}
              <div className="mt-8 hidden lg:block rounded-xl bg-paper-deep/70 p-4 border border-paper-edge shadow-sm">
                <h3 className="text-sm font-bold text-navy-900 mb-2 tracking-wider">
                  Important Location Requirement:
                </h3>
                <div className="text-xs text-navy-700 space-y-3 tracking-wider leading-relaxed">
                  <p>
                    This is a remote position; however, candidates must be located in the same country, city, or region where the job is posted. The successful candidate must be available to attend a local office, meeting, training session, or company event if requested.
                  </p>
                  <p className="text-xs font-semibold text-navy-900 tracking-wider">
                    Please only apply if you are based in the location listed on this job posting. Remote does not mean the position is open worldwide.
                  </p>
                </div>
              </div>
            </aside>

            <article className="min-w-0">
              {role.htmlDescription ? (
                <>
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      .job-desc {
                        color: #0F1E3D;
                      }
                      .job-desc p {
                        margin-top: 1.15rem !important;
                        margin-bottom: 1.15rem !important;
                        line-height: 1.8 !important;
                        font-size: 15px !important;
                      }
                      .job-desc div {
                        margin-top: 0.85rem !important;
                        margin-bottom: 0.85rem !important;
                        line-height: 1.8 !important;
                      }
                      .job-desc h1,
                      .job-desc h2,
                      .job-desc h3,
                      .job-desc h4 {
                        display: block;
                        font-size: 1.2rem !important;
                        font-weight: 800 !important;
                        color: #0A1530 !important;
                        margin-top: 2.25rem !important;
                        margin-bottom: 0.85rem !important;
                        letter-spacing: 0.015em;
                        border-left: 4px solid #C9A96E;
                        padding-left: 0.75rem !important;
                        line-height: 1.4 !important;
                      }
                      .job-desc p strong,
                      .job-desc p b,
                      .job-desc div strong,
                      .job-desc div b,
                      .job-desc li strong,
                      .job-desc li b,
                      .job-desc span strong,
                      .job-desc span b {
                        display: inline !important;
                        font-size: inherit !important;
                        font-weight: 700 !important;
                        color: #0A1530 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border: none !important;
                        text-transform: none !important;
                        width: auto !important;
                      }
                      .job-desc ul {
                        list-style-type: none !important;
                        padding-left: 0 !important;
                        margin-top: 1rem !important;
                        margin-bottom: 1.75rem !important;
                      }
                      .job-desc ul > li {
                        position: relative;
                        padding-left: 1.35rem !important;
                        margin-top: 0.6rem !important;
                        margin-bottom: 0.6rem !important;
                        line-height: 1.75 !important;
                        color: #0F1E3D;
                        font-size: 15px;
                      }
                      .job-desc ul > li::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0.65rem;
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 9999px;
                        background-color: #C9A96E;
                      }
                      .job-desc > *:first-child {
                        margin-top: 0 !important;
                      }
                    `
                  }} />
                  <div
                    className="job-desc bg-white p-8 md:p-12 rounded-2xl border border-paper-edge shadow-sm prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: role.htmlDescription }}
                  />
                </>
              ) : (
                <div className="bg-white p-8 md:p-12 rounded-2xl border border-paper-edge shadow-sm space-y-8">
                  <Block title="Job Description Summary">
                    <p className="text-[15px] leading-[1.8] text-navy-700">
                      {role.summary || `${BRAND.name} is seeking a qualified ${role.title} to join our team.`}
                    </p>
                  </Block>

                  {role.responsibilities.length > 0 && (
                    <Block title="Key Responsibilities">
                      <BulletList items={role.responsibilities} />
                    </Block>
                  )}
                </div>
              )}

              <div className="mt-12 flex flex-wrap gap-3 border-t border-paper-edge pt-10">
                <ApplyButton
                  role={role.title}
                  jobId={role.jobId}
                  jobOpeningId={role.jobOpeningId}
                  locId={role.locId}
                  workType={role.workType}
                  jobType={role.jobType}
                />
                <Link
                  href="/careers/#positions"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-navy-900/20 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-navy-900/40 hover:bg-paper no-underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  See all open roles
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  )
}

function MetaRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-[10rem_1fr] items-baseline gap-x-4 sm:grid-cols-[12.5rem_1fr]">
      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-paper/65">
        {label}
      </dt>
      <dd className="font-semibold text-paper">{children}</dd>
    </div>
  )
}

function ShareIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const isMailto = href.startsWith('mailto:')
  return (
    <a
      href={href}
      aria-label={label}
      {...(isMailto
        ? {}
        : { target: '_blank', rel: 'noopener noreferrer' })}
      className="inline-flex size-9 items-center justify-center rounded-full border border-paper/20 bg-paper/5 text-paper transition-colors hover:border-paper/60 hover:bg-paper/10"
    >
      {children}
    </a>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h3 className="font-serif text-xl font-bold text-navy-900">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-[15px] leading-[1.7] text-navy-700"
        >
          <span
            aria-hidden="true"
            className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-gold-600"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
