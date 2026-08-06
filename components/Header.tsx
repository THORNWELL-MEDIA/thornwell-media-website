"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAP, CTAS, BRAND } from "@/lib/constants";
import { INDUSTRIES } from "@/lib/industries";
import { RESOURCES } from "@/lib/resources";
import { SERVICES } from "@/lib/services";
import Mark from "@/components/ui/Mark";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type DropdownColumn = {
  label: string;
  items: { href: string; label: string; description?: string }[];
};

const SERVICES_DROPDOWN: DropdownColumn = {
  label: "The operator stack",
  items: SERVICES.map((s) => ({
    href: `/services/${s.slug}/`,
    label: s.name,
    description: s.outcome,
  })),
};

const INDUSTRIES_DROPDOWN: DropdownColumn = {
  label: "Industries we serve",
  items: INDUSTRIES.map((i) => ({
    href: `/industries/${i.slug}/`,
    label: i.name,
    description: i.short,
  })),
};

const RESOURCES_DROPDOWN: DropdownColumn = {
  label: "Working resources",
  items: [
    { href: "/resources/blog/", label: "Blog", description: "Notes from the operator desk." },
    { href: "/careers/", label: "Careers", description: "Open positions and career opportunities." },
    ...RESOURCES.map((r) => ({
      href: `/resources/${r.slug}/`,
      label: r.name,
      description: r.short,
    })),
  ],
};

const NAV: { href: string; label: string; dropdown?: DropdownColumn }[] = [
  { href: "/services/", label: "Services", dropdown: SERVICES_DROPDOWN },
  { href: "/industries/", label: "Industries", dropdown: INDUSTRIES_DROPDOWN },
  { href: "/resources/", label: "Resources", dropdown: RESOURCES_DROPDOWN },
  { href: "/pricing/", label: "Pricing" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-paper-edge bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0",
      )}
      onMouseLeave={handleLeave}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="no-underline" aria-label={`${BRAND.name} home`}>
            <Mark />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.dropdown && handleEnter(item.label)}
              >
                <Link
                  href={item.href}
                  className="group relative inline-flex items-center gap-1 text-[14px] font-medium text-navy-900/80 no-underline transition hover:text-navy-900"
                  aria-haspopup={item.dropdown ? "true" : undefined}
                  aria-expanded={
                    item.dropdown ? activeMenu === item.label : undefined
                  }
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        activeMenu === item.label && "rotate-180",
                      )}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={CTAS.primary.href} className="btn-primary hidden md:inline-flex">
              {CTAS.primary.label}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Container>

      {/* MEGA-MENU dropdown panel */}
      {activeMenu && (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-paper-edge bg-paper/95 backdrop-blur-md lg:block"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
        >
          <Container>
            {NAV.filter((n) => n.dropdown && n.label === activeMenu).map((item) => (
              <div key={item.href} className="py-10">
                <div className="mb-6 flex items-baseline justify-between">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-saffron-700">
                    {item.dropdown!.label}
                  </div>
                  <Link
                    href={item.href}
                    className="text-xs font-semibold text-navy-900 no-underline hover:text-saffron-700"
                  >
                    View all {item.label.toLowerCase()}
                  </Link>
                </div>
                <ul
                  className={cn(
                    "grid gap-x-8 gap-y-4",
                    item.dropdown!.items.length > 6
                      ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-2 lg:grid-cols-3",
                  )}
                >
                  {item.dropdown!.items.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="group block rounded-lg p-3 no-underline transition hover:bg-paper-deep/50"
                      >
                        <div className="text-[14px] font-semibold text-navy-900 group-hover:text-saffron-700">
                          {sub.label}
                        </div>
                        {sub.description && (
                          <div className="mt-1 text-[12px] leading-snug text-navy-700">
                            {sub.description}
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        </div>
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-paper-edge bg-paper transition-all duration-300",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 no-underline transition hover:bg-paper-deep"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <ul className="ml-3 mb-2 space-y-0.5 border-l border-paper-edge pl-3">
                    {item.dropdown.items.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block rounded px-3 py-2 text-sm text-navy-700 no-underline transition hover:bg-paper-deep hover:text-navy-900"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-paper-edge pt-4">
              <Link
                href={CTAS.primary.href}
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                {CTAS.primary.label}
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
