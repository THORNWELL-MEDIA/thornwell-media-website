"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  index: string;
  title: string;
  outcome: string;
  href: string;
  imageUrl?: string;
  className?: string;
};

// &Walsh / Athletics-style: huge type list rows with a hover-revealed image preview.
export default function CapabilityRow({
  index,
  title,
  outcome,
  href,
  imageUrl,
  className,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <Link
      href={href}
      className={cn(
        "group relative block border-t border-paper-edge no-underline",
        "transition-colors duration-300 hover:bg-paper-deep/40",
        className,
      )}
    >
      <div className="relative grid grid-cols-[60px_1fr_auto] items-center gap-6 py-7 md:grid-cols-[80px_1fr_220px_auto] md:py-9">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-navy-700">
          {index}
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <h3 className="truncate font-serif text-3xl font-semibold text-navy-900 transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
              {title}
            </h3>
          </div>
        </div>
        <div className="hidden text-sm text-navy-800/75 md:block">
          {outcome}
        </div>
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-all duration-300 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Hover image preview */}
      {imageUrl && !reduce && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          whileHover={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute right-32 top-1/2 hidden h-32 w-44 -translate-y-1/2 overflow-hidden rounded-xl border border-paper-edge opacity-0 shadow-2xl transition-opacity duration-300 group-hover:opacity-100 lg:block"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="" className="h-full w-full object-cover" />
        </motion.div>
      )}
    </Link>
  );
}
