import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { BRAND, NAP } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { breadcrumbSchema } from "@/lib/schema";
import { IMG, unsplashUrl } from "@/lib/imagery";

export const metadata: Metadata = {
  title: "Contact",
  description: `Open a conversation with ${BRAND.name}, the independent marketing operator for ambitious holdings.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact/" },
        ])}
      />

      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-ink text-paper">
        <Image
          src={unsplashUrl(IMG.contact.id, 2400, 78)}
          alt={IMG.contact.alt}
          fill
          priority
          sizes="100vw"
          className="img-treat object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-vignette" />

        <Container>
          <div className="relative pb-24 pt-32 md:pb-32 md:pt-40">
            <SectionLabel number="01" label="Open a conversation" variant="dark" />
            <h1 className="mt-8 max-w-4xl font-serif text-display-xl font-semibold leading-[1.04] text-paper balance">
              Bring us the brand, the search problem, or the lead engine you need to
              ship.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper">
              A member of the {BRAND.name} team responds within one business day
              with a tailored brief, never a generic deck.
            </p>
          </div>
        </Container>
      </section>

      {/* FORM + CONTACT DETAILS */}
      <section className="bg-paper">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-7">
              <SectionLabel number="02" label="Send a brief" />
              <h2 className="mt-6 font-serif text-display-md font-bold text-navy-900 balance">
                What we need to scope your program.
              </h2>
              <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy-700">
                Fields marked <span className="font-bold text-gold-600">*</span> are required.
                Everything else helps us reply with a brief that actually fits.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="md:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="rounded-2xl border border-gold-400/40 bg-navy-900 p-7 text-paper">
                  <SectionLabel number="03" label="Reach us directly" variant="dark" />
                  <div className="mt-5 font-serif text-2xl font-bold text-paper">
                    {BRAND.name}
                  </div>
                  <ul className="mt-5 space-y-4 text-sm text-paper">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold-400" />
                      <span className="leading-relaxed">
                        {NAP.address.line1}, {NAP.address.line2}
                        <br />
                        {NAP.address.city}, {NAP.address.region} {NAP.address.postalCode}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-4 w-4 flex-none text-gold-400" />
                      <a
                        href={NAP.phone.href}
                        className="text-paper hover:underline"
                      >
                        {NAP.phone.display}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-4 w-4 flex-none text-gold-400" />
                      <a
                        href={`mailto:${NAP.email.general}`}
                        className="text-paper hover:underline"
                      >
                        {NAP.email.general}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-4 w-4 flex-none text-gold-400" />
                      <a
                        href={`mailto:${NAP.email.careers}`}
                        className="text-paper hover:underline"
                      >
                        {NAP.email.careers}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-4 w-4 flex-none text-gold-400" />
                      <a
                        href={`mailto:${NAP.email.press}`}
                        className="text-paper hover:underline"
                      >
                        {NAP.email.press}
                      </a>
                    </li>
                  </ul>

                  <div className="mt-7 border-t border-paper/20 pt-5">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                      <Clock className="h-3 w-3" />
                      <span>Hours / local time</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-xs text-paper">
                      {NAP.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-4">
                          <span>{h.day}</span>
                          <span>
                            {h.open === "Closed" ? "Closed" : `${h.open} to ${h.close}`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-paper-edge bg-white p-7">
                  <div className="eyebrow">
                    Response cadence
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy-700">
                    Briefs sent before 5pm local receive a same-day acknowledgement.
                    A tailored response follows within one business day.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
