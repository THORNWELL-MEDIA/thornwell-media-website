import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { BRAND, NAP, SOCIAL, CTAS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import Mark from "@/components/ui/Mark";
import QuarterlyPOVForm from "@/components/QuarterlyPOVForm";

const SOCIALS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "Instagram", href: SOCIAL.instagram },
  { label: "X", href: SOCIAL.x },
  { label: "YouTube", href: SOCIAL.youtube },
];

const COMPANY_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/resources/blog/" },
  { label: "Contact", href: "/contact/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative bg-ink text-paper">
      {/* CTA strip */}
      <div>
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-8">
              <div className="eyebrow-on-dark">Start a conversation</div>
              <h2 className="mt-4 font-serif text-display-lg font-semibold leading-tight text-paper balance">
                Bring us the brand book, the search problem, or the pipeline that needs to ship.
              </h2>
              <p className="mt-4 max-w-prose text-paper/85">
                Editorial-grade marketing, documented from day one. We respond
                inside one business day with a tailored brief, never a generic
                deck.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Link
                href={CTAS.primary.href}
                className="btn-primary-on-dark group inline-flex w-full items-center justify-between md:w-auto"
              >
                <span>{CTAS.primary.label}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href={CTAS.secondary.href} className="btn-ghost-on-dark w-full md:w-auto">
                {CTAS.secondary.label}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="rule-thin-dark" aria-hidden />

      {/* Newsletter capture: Quarterly POV */}
      <div className="bg-navy-900/40">
        <Container>
          <div className="grid items-center gap-8 py-12 md:grid-cols-12 md:py-14">
            <div className="md:col-span-7">
              <div className="eyebrow-on-dark text-saffron-400">The Quarterly POV</div>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-paper md:text-3xl">
                A short paper, four times a year, on the work we are seeing across the portfolio.
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-paper/80">
                Twelve to sixteen pages. Operator-led. No promotion. Mailed to
                principals and CMOs. Free.
              </p>
            </div>
            <div className="md:col-span-5">
              <QuarterlyPOVForm />
            </div>
          </div>
        </Container>
      </div>

      <div className="rule-thin-dark" aria-hidden />

      {/* Sitemap & details */}
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Mark variant="dark" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/85">
              {BRAND.tagline}
            </p>

            <ul className="mt-8 space-y-3 text-sm text-paper/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold-400" />
                <span className="leading-relaxed">
                  {NAP.address.line1}, {NAP.address.line2}, {NAP.address.city}, {NAP.address.region} {NAP.address.postalCode}
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
            </ul>

            <div className="mt-8 eyebrow-on-dark">Social</div>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-paper/85 transition hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow-on-dark">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/85 transition hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow-on-dark">Response window</div>
            <p className="mt-4 text-sm leading-relaxed text-paper/85">
              Briefs sent before 5pm local receive a same-day acknowledgement.
              A tailored response from a senior team member follows inside one
              business day.
            </p>
            <ul className="mt-5 space-y-1.5 text-xs text-paper/75">
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
      </Container>

      <div className="rule-thin-dark" aria-hidden />

      <Container>
        <div className="flex flex-col gap-3 py-6 text-xs text-paper/85 md:flex-row md:items-center md:justify-between">
          <div>
            &copy; {year} {BRAND.name}.
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy/" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms/" className="hover:text-paper">
              Terms
            </Link>
            <Link href="/contact/" className="hover:text-paper">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
