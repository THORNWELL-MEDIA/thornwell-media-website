import type { Metadata } from "next";
import { BRAND, SITE, NAP } from "@/lib/constants";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing use of ${SITE.domain} and the relationship between visitors and ${BRAND.name}.`,
  alternates: { canonical: "/terms/" },
};

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "agreement",
    title: "1. Agreement",
    body: (
      <p>
        These terms govern your use of {SITE.domain}, operated by{" "}
        {BRAND.legalName} ("{BRAND.shortName}", "we", "our"). By accessing the
        site, requesting a brief, or subscribing to a newsletter, you agree to
        these terms. If you do not agree, do not use the site.
      </p>
    ),
  },
  {
    id: "engagement-vs-site",
    title: "2. Site terms vs. engagement agreement",
    body: (
      <p>
        These terms apply to public use of the site. The relationship between{" "}
        {BRAND.name} and a client is governed exclusively by the
        engagement-specific agreement signed between the parties (master
        services agreement, statement of work, or similar). In any conflict,
        the signed engagement agreement controls.
      </p>
    ),
  },
  {
    id: "informational-use",
    title: "3. Informational use only",
    body: (
      <p>
        Content on the site is published for general informational purposes.
        It is not a proposal, a contract, a guarantee of outcome, or a
        substitute for professional advice tailored to your circumstances. Do
        not rely on it as such.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual property",
    body: (
      <>
        <p>
          The site, its design system, copy, photography, illustrations,
          logos, and code are the property of {BRAND.legalName} or licensed to
          us. The {BRAND.name} name and any associated marks are owned by us.
          You may not copy, redistribute, mirror, or republish the site or its
          contents without prior written permission.
        </p>
        <p>
          Excerpting short passages with attribution and a link back is
          permitted. Wholesale reproduction is not.
        </p>
      </>
    ),
  },
  {
    id: "client-confidentiality",
    title: "5. Client confidentiality",
    body: (
      <p>
        Where we describe past work, the descriptions are anonymized.
        Identifying information (client names, results tied to specific
        identifiers, internal assets) is released only with the client's
        written approval. We do not parade work without consent. If you would
        like access to a full case file, request it through the contact below
        and we will route it to the client for sign-off.
      </p>
    ),
  },
  {
    id: "submissions",
    title: "6. Inquiries and submissions",
    body: (
      <>
        <p>
          When you send us a brief or inquiry, you grant us a limited,
          non-exclusive license to read, evaluate, and respond to it for the
          purpose of preparing a proposal or response. We will not publish
          your submission publicly. If we engage, the engagement-specific
          agreement governs IP, confidentiality, and non-disclosure.
        </p>
        <p>
          Do not send us materials you regard as confidential without first
          executing a mutual NDA. Volunteered confidentiality without an
          executed agreement is not enforceable.
        </p>
      </>
    ),
  },
  {
    id: "no-warranty",
    title: "7. No warranty",
    body: (
      <p>
        The site is provided on an "as is" and "as available" basis. We make
        no warranty that it will be uninterrupted, error-free, or secure
        against every threat. To the fullest extent permitted by law, we
        disclaim implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement.
      </p>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, {BRAND.legalName} is not
        liable for indirect, incidental, special, consequential, or punitive
        damages arising from your use of the site. Our aggregate liability for
        public site use is limited to one hundred Canadian dollars. Limits on
        engagement liability are set in the signed agreement.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "9. Third-party links",
    body: (
      <p>
        The site may link to third-party properties. Those properties are
        operated by their own owners. We do not endorse, control, or assume
        responsibility for their content, terms, or practices.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "10. Governing law and venue",
    body: (
      <p>
        These terms are governed by the laws of the Province of Ontario,
        Canada, and the federal laws of Canada applicable in Ontario. Any
        dispute arising from these terms is subject to the exclusive
        jurisdiction of the courts of Ontario.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes",
    body: (
      <p>
        We may revise these terms as the site and our practices evolve. The
        version date below shows the most recent revision. Continued use of
        the site after a revision is acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact",
    body: (
      <p>
        Questions about these terms can be sent to{" "}
        <a
          href={`mailto:${NAP.email.general}`}
          className="border-b-2 border-saffron-500 font-semibold text-navy-900 hover:text-saffron-700"
        >
          {NAP.email.general}
        </a>
        . We respond within one business day.
      </p>
    ),
  },
];

export default function TermsPage() {
  const lastUpdated = "April 30, 2026";
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms of Use", url: "/terms/" },
        ])}
      />

      <section className="border-b border-paper-edge bg-paper-deep/40">
        <Container>
          <div className="py-16 md:py-20">
            <SectionLabel number="01" label="Legal" />
            <h1 className="mt-6 max-w-4xl font-serif text-display-lg font-semibold text-navy-900 balance">
              Terms of Use
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
