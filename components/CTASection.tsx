import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTAS } from "@/lib/constants";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

type Props = {
  title?: string;
  description?: string;
  eyebrow?: string;
  number?: string;
};

/**
 * Mid-page CTA banner. Distinct from the closing CTA in the Footer.
 * Editorial tone - paper background, serif headline, paired CTAs.
 */
export default function CTASection({
  title = "Operate with us.",
  description = "Bring us a brand without a system, a search problem you can't outrank, or a lead engine that won't compound. We respond inside one business day.",
  eyebrow = "Engagement",
  number = "→",
}: Props) {
  return (
    <section className="border-y border-paper-edge bg-paper">
      <Container>
        <div className="grid items-end gap-10 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <SectionLabel number={number} label={eyebrow} />
            <h2 className="mt-6 font-serif text-display-md font-semibold leading-tight text-navy-900 balance">
              {title}
            </h2>
            <p className="mt-5 max-w-prose text-navy-700">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link href={CTAS.primary.href} className="btn-primary group">
              <span>{CTAS.primary.label}</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href={CTAS.secondary.href} className="btn-secondary">
              {CTAS.secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
