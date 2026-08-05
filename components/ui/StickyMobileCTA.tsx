"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CTAS, NAP } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on job detail pages (/careers/[slug])
  const isJobDetailPage = pathname?.startsWith('/careers/') && pathname !== '/careers' && pathname !== '/careers/';
  if (isJobDetailPage) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-30 lg:hidden",
        "transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none",
      )}
    >
      <div className="flex items-stretch gap-2 rounded-2xl border border-paper-edge bg-paper/95 p-2 shadow-[0_12px_32px_-12px_rgba(10,21,48,0.35)] backdrop-blur-md">
        <a
          href={`mailto:${NAP.email.general}`}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-navy-900/15 px-3 py-3 text-sm font-medium text-navy-900 no-underline"
          aria-label={`Email ${NAP.email.general}`}
        >
          <Mail className="h-4 w-4 text-gold-600" />
          <span className="font-mono text-[12px] uppercase tracking-[0.14em]">Email</span>
        </a>
        <Link
          href={CTAS.primary.href}
          className="flex min-h-[44px] flex-[1.5] items-center justify-center gap-2 rounded-xl bg-navy-900 px-3 py-3 text-sm font-medium text-paper no-underline"
        >
          <span>{CTAS.primary.label}</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
