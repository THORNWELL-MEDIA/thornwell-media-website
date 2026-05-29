import type { Metadata } from "next";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Request a Brief",
  description: `Send the shape of your portfolio. We respond within one business day with a tailored brief, a measurement plan, and a sample weekly report.`,
  alternates: { canonical: "/quote/" },
};

const REPORT_SECTIONS = [
  {
    label: "Brand health",
    body:
      "Voice consistency review across landing pages, paid creative, and three social channels. Two flagged inconsistencies on the careers page (resolved Tuesday). Brand book version 1.4 published Wednesday.",
  },
  {
    label: "Channel performance",
    body:
      "Organic sessions +12% week-on-week. Branded search +6%. Local pack visibility +18% in three priority markets. Paid CAC tracking inside target. One creative variant retired for fatigue.",
  },
  {
    label: "Content shipped",
    body:
      "Two long-form articles published. One investor brief delivered. Three editorial photo sets cleared and indexed. Newsletter subscriber list +312 net (year-to-date 2,640).",
  },
  {
    label: "Next-week priorities",
    body:
      "Launch service-line landing page (drafted, awaiting legal). Begin Q3 quarterly review prep. Decommission underperforming display campaign. Operator decision needed on Q3 brand-campaign budget by Wednesday.",
  },
];

export default function QuotePage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Request a Brief", url: "/quote/" },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.notebook.id, 2400, 78)}
          alt={IMG.notebook.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-22"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-24 pt-32 md:pb-32 md:pt-40">
            <SectionLabel number="01" label="Request a Brief" variant="dark" />
            <h1 className="mt-8 max-w-4xl font-serif text-display-xl font-semibold text-paper balance">
              Send the shape of your portfolio. We respond inside one business day.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/90">
              The reply lands as a tailored brief. Scope of work, measurement
              plan, sample of the weekly report you would receive, and the
              senior team that would run the engagement. Never a generic deck.
            </p>
          </div>
        </Container>
      </section>

      {/* FORM + WHAT YOU GET */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-7">
              <SectionLabel number="02" label="The brief" />
              <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
                Tell us the project, the budget tier, and the timeline.
              </h2>
              <p className="mt-5 max-w-prose text-navy-700">
                A line on the brand. A line on the markets. A line on the
                outcome you are targeting. We do the rest.
              </p>
              <div className="mt-10">
                <ContactForm progressive />
              </div>
            </div>

            <aside className="md:col-span-5">
              <div className="sticky top-28 rounded-2xl border border-paper-edge bg-navy-900 p-7 text-paper">
                <SectionLabel number="03" label="What lands in your inbox" variant="dark" />
                <ul className="mt-6 space-y-5 text-paper/95">
                  {[
                    "Scope of work scaled to the portfolio shape.",
                    "Measurement plan with the metrics that matter.",
                    "Sample weekly executive report (preview below).",
                    "The senior team that would run the engagement.",
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex gap-4 border-t border-paper/10 pt-5 first:border-t-0 first:pt-0"
                    >
                      <span className="font-serif text-gold-400">/</span>
                      <span className="text-[15px] leading-7">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* SAMPLE WEEKLY REPORT */}
      <section className="border-t border-paper-edge bg-paper-deep/30">
        <Container width="narrow">
          <div className="py-20 md:py-24">
            <SectionLabel number="04" label="Sample weekly report" />
            <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
              The Friday report. Anonymized.
            </h2>
            <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy-700">
              A single page. Four sections. Read in ninety seconds, decided in
              five. Below is a representative cut from a recent retainer,
              sanitized for client confidentiality.
            </p>

            <div className="mt-12 overflow-hidden rounded-2xl border-2 border-navy-900 bg-paper">
              {/* Report header */}
              <div className="flex items-center justify-between border-b-2 border-navy-900 bg-navy-900 px-7 py-5 text-paper">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-saffron-400">
                    Friday Executive Report
                  </div>
                  <div className="mt-1 font-serif text-xl font-semibold">
                    Week 16 / Q2 / Engagement [redacted]
                  </div>
                </div>
                <div className="hidden text-right md:block">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                    Status
                  </div>
                  <div className="mt-1 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    On track
                  </div>
                </div>
              </div>

              {/* Report body */}
              <div className="divide-y divide-paper-edge">
                {REPORT_SECTIONS.map((s, i) => (
                  <div key={s.label} className="grid grid-cols-[80px_1fr] gap-6 px-7 py-7 md:grid-cols-[120px_1fr] md:gap-10">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-saffron-700">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 font-serif text-base font-semibold text-navy-900 md:text-lg">
                        {s.label}
                      </div>
                    </div>
                    <p className="text-[15px] leading-[1.7] text-navy-800">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-navy-900 bg-paper-deep/40 px-7 py-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-700">
                  Decisions requested
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-800">
                  One. Approve Q3 brand-campaign budget envelope (drafted in
                  the appendix) by end of day Wednesday so production can lock
                  the calendar.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-navy-700">
              The full sample includes an appendix with KPI thresholds, a
              red-yellow-green status grid, and an exception log. Request the
              brief above to receive the unredacted format used in your shape.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
