"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

type FAQ = { q: string; a: string };

type Props = {
  items: FAQ[];
  className?: string;
};

export default function FAQAccordion({ items, className }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={cn("divide-y divide-paper-edge border-y border-paper-edge", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg font-semibold text-navy-900 md:text-xl">
                {item.q}
              </span>
              <span
                className={cn(
                  "inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-navy-900 bg-navy-900 text-paper"
                    : "border-navy-900/20 text-navy-900",
                )}
                aria-hidden
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-[16px] leading-7 text-navy-700">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
