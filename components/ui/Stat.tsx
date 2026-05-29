"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caveat?: string;
  variant?: "light" | "dark";
  className?: string;
  decimals?: number;
};

export default function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
  caveat,
  variant = "light",
  className,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col gap-2", className)}
    >
      <div
        className={cn(
          "font-serif font-semibold leading-none tracking-tight",
          variant === "dark" ? "text-paper" : "text-navy-900",
          "text-5xl md:text-6xl",
        )}
      >
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-2 text-[13px] uppercase tracking-[0.18em] font-medium",
          variant === "dark" ? "text-paper/90" : "text-navy-700",
        )}
      >
        {label}
      </div>
      {caveat && (
        <div
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.16em]",
            variant === "dark" ? "text-paper/95" : "text-navy-700/70",
          )}
        >
          {caveat}
        </div>
      )}
    </motion.div>
  );
}
