"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Item = {
  body: string;
  attribution: string;
  meta: string;
  pending?: boolean;
};

type Props = {
  items: Item[];
  className?: string;
};

export default function TestimonialCarousel({ items, className }: Props) {
  const [i, setI] = useState(0);
  const [direction, setDirection] = useState(0);
  const next = () => {
    setDirection(1);
    setI((p) => (p + 1) % items.length);
  };
  const prev = () => {
    setDirection(-1);
    setI((p) => (p - 1 + items.length) % items.length);
  };
  const item = items[i];

  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden border-2 border-navy-900 bg-paper p-8 md:p-16">
        {/* Dramatic saffron quote mark */}
        <span
          aria-hidden
          className="absolute -left-2 -top-6 select-none font-serif text-[14rem] font-black leading-none text-saffron-500/90 md:-left-4 md:-top-10 md:text-[20rem]"
        >
          &ldquo;
        </span>
        {/* Closing mark, smaller, bottom-right */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-2 select-none font-serif text-[12rem] font-black leading-none text-saffron-500/15 md:-bottom-24 md:-right-4 md:text-[18rem]"
        >
          &rdquo;
        </span>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={i}
            custom={direction}
            initial={{ opacity: 0, y: 20, x: direction * 24 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -16, x: -direction * 24 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <p className="balance font-serif text-3xl font-medium leading-[1.1] text-navy-900 md:text-5xl lg:text-[3.4rem]">
              {item.body}
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-navy-900/15" />
              <div className="text-right">
                <div className="font-serif text-lg font-bold text-navy-900">
                  {item.attribution}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-700">
                  {item.meta}
                </div>
              </div>
            </div>
            {item.pending && (
              <div className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-navy-700/70">
                Identifying detail generalized by client request
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-navy-900">
            {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <span aria-hidden className="block h-2 w-2 bg-saffron-500" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-700">
            Operator voices
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-12 w-12 items-center justify-center border-2 border-navy-900 text-navy-900 transition hover:bg-saffron-500"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-12 w-12 items-center justify-center border-2 border-navy-900 bg-navy-900 text-paper transition hover:bg-saffron-500 hover:text-navy-900 hover:border-navy-900"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
