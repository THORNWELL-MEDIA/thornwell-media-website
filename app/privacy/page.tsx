import type { Metadata } from "next";
import { BRAND, NAP, SITE } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, uses, stores, and protects personal information.`,
  alternates: { canonical: "/privacy/" },
};

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "scope",
    title: "1. Scope and acceptance",
    body: (
      <>
        <p>
          This policy explains how {BRAND.legalName} ("{BRAND.shortName}", "we",
          "our") handles personal information collected through {SITE.domain},
          our newsletters, our proposals, and our client engagements. By using
          this site or contacting us, you accept the terms of this policy. If
          you do not agree, please do not use the site or send us inquiries.
        </p>
        <p>
          We operate as a Canadian agency and follow the Personal Information
          Protection and Electronic Documents Act (PIPEDA), Canada's Anti-Spam
          Legislation (CASL), and applicable provincial privacy law. Where a
          client engagement is governed by GDPR, CCPA, or another regime, the
          engagement-specific data processing addendum will apply alongside this
          policy.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "2. Information we collect",
    body: (
      <>
        <p>We collect three categories of information:</p>
        <ul>
          <li>
            <strong>Information you give us.</strong> Name, company, role,
            email, phone, and the contents of any brief or message you send
            through our forms, by email, or in working sessions.
          </li>
          <li>
            <strong>Information collected automatically.</strong> IP address,
            browser type, device, referring URL, pages viewed, and approximate
            geographic region. We use this to operate the site, prevent abuse,
            and improve content.
          </li>
          <li>
            <strong>Information from clients.</strong> Where we operate
            marketing programs on behalf of a client, we may handle data the
            client has authorized us to access (analytics views, ad accounts,
            CRM exports). We process that data only for the engagement and
            under the agreement signed with the client.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How we use information",
    body: (
      <>
        <p>We use personal information for the following purposes:</p>
        <ul>
          <li>Responding to inquiries and preparing tailored briefs.</li>
          <li>Sending newsletters and updates you have asked to receive.</li>
          <li>Operating, securing, and improving the site.</li>
          <li>
            Delivering services under a signed engagement agreement, including
            analytics, content, advertising, and reporting.
          </li>
          <li>
            Meeting legal, accounting, and audit obligations, and enforcing our
            agreements.
          </li>
        </ul>
        <p>
          We do not sell personal information. We do not buy lists. We do not
          run undisclosed reputation campaigns or astroturf reviews on behalf
          of a client.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies and analytics",
    body: (
      <>
        <p>
          The site uses a small set of essential cookies to operate, and may
          use first-party analytics to understand aggregate usage. We do not
          deploy third-party advertising trackers on this site. If we add
          conversion or retargeting tags in future, we will update this policy
          and surface a consent banner where required.
        </p>
        <p>
          You can disable cookies in your browser. Doing so may affect
          functionality but will not block access to the site.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "5. Third-party processors",
    body: (
      <>
        <p>
          We rely on a short list of vetted processors to operate the site and
          deliver services. These currently include:
        </p>
        <ul>
          <li>
            <strong>Hosting and content delivery.</strong> Vercel (United
            States) for site hosting and edge delivery.
          </li>
          <li>
            <strong>Email and CRM.</strong> Standard business email and CRM
            tooling for inquiries and proposals.
          </li>
          <li>
            <strong>Analytics.</strong> Privacy-respecting analytics where
            deployed.
          </li>
        </ul>
        <p>
          Each processor handles data under its own published terms and only
          for the purpose we have engaged it for. We do not authorize
          processors to repurpose your data.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Retention",
    body: (
      <p>
        We retain inquiry and proposal data for up to twenty-four months after
        last contact, and engagement records for as long as the relationship is
        active plus seven years for accounting and audit. You can request
        earlier deletion at any time using the contact below.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>
            Request deletion of information, subject to retention obligations.
          </li>
          <li>
            Withdraw consent for marketing communications at any time, by
            replying "unsubscribe" to any newsletter or by emailing us.
          </li>
          <li>File a complaint with the Office of the Privacy Commissioner of Canada.</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "8. Security",
    body: (
      <p>
        We use access controls, encryption in transit, and internal review
        before any new processor is added. No system is perfectly secure. If a
        breach affects your information, we will notify you and the relevant
        authority on the timeline required by law.
      </p>
    ),
  },
  {
    id: "children",
    title: "9. Children",
    body: (
      <p>
        The site and our services are not directed to children under sixteen.
        We do not knowingly collect information from children. If you believe a
        child has provided us with personal information, contact us and we
        will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to this policy",
    body: (
      <p>
        We may update this policy as our processors, services, or legal
        obligations change. The version date below indicates the most recent
        revision. Material changes will be communicated by a notice on this
        page or by email if we hold one.
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact",
    body: (
      <>
        <p>
          For privacy questions, data access requests, or complaints, contact
          us at{" "}
          <a
            href={`mailto:${NAP.email.general}`}
            className="border-b-2 border-saffron-500 font-semibold text-navy-900 hover:text-saffron-700"
          >
            {NAP.email.general}
          </a>
          . We respond within one business day and aim to resolve formal
          requests inside thirty days.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  const lastUpdated = "April 30, 2026";
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy/" },
        ])}
      />

      <section className="border-b border-paper-edge bg-paper-deep/40">
        <Container>
          <div className="py-16 md:py-20">
            <SectionLabel number="01" label="Legal" />
            <h1 className="mt-6 max-w-4xl font-serif text-display-lg font-semibold text-navy-900 balance">
              Privacy Policy
            </h1>
            <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.18em] text-navy-700">
              Last updated {lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      <Container width="narrow">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <aside className="md:col-span-4">
            <div className="sticky top-28 rounded-2xl border border-paper-edge bg-white p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-saffron-700">
                Sections
              </div>
              <ul className="mt-4 space-y-2 text-sm text-navy-700">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-navy-900">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="md:col-span-8 prose prose-slate max-w-none text-[17px] leading-[1.8] text-navy-800 prose-headings:font-serif prose-headings:text-navy-900 prose-strong:text-navy-900 prose-a:text-navy-900 prose-li:my-1">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="mt-10 first:mt-0 text-2xl font-semibold">{s.title}</h2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </Container>
    </>
  );
}
