"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";

type Props = {
  variant?: "light" | "dark";
  title?: string;
  helper?: string;
  cta?: string;
};

/**
 * Visual-only "Find a Local Strategist" widget. No backend wired.
 * Submitting routes to the Locations page so users can browse markets.
 */
export default function AgentFinder({
  variant = "light",
  title = "Find a local strategist",
  helper = "Service available across our coverage area. Tell us where you operate and we will route you to the local team.",
  cta = "Find",
}: Props) {
  const [value, setValue] = useState("");
  const isDark = variant === "dark";

  return (
    <div
      className={[
        "w-full border-2",
        isDark
          ? "border-paper bg-navy-900 text-paper"
          : "border-navy-900 bg-paper text-navy-900",
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ borderColor: isDark ? "#FFFFFF" : "#0A0A0A" }}>
        <span className={isDark ? "text-saffron-400" : "text-saffron-700"}>
          Coverage finder
        </span>
        <span className={isDark ? "text-paper" : "text-navy-900"}>
          North America
        </span>
      </div>

      <form
        className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-end"
        action="/contact/"
      >
        <label className="block">
          <span className={[
            "mb-2 block text-xs font-semibold uppercase tracking-[0.14em]",
            isDark ? "text-paper" : "text-navy-900",
          ].join(" ")}>
            {title}
          </span>
          <div className="relative">
            <MapPin
              aria-hidden
              className={[
                "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
                isDark ? "text-saffron-400" : "text-saffron-600",
              ].join(" ")}
            />
            <input
              type="text"
              name="city"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="City or postal code"
              className={[
                "w-full border-2 px-10 py-3 text-sm font-medium placeholder:font-normal",
                isDark
                  ? "border-paper/60 bg-navy-800 text-paper placeholder:text-paper/60 focus:border-saffron-400 focus:outline-none"
                  : "border-navy-900 bg-paper text-navy-900 placeholder:text-navy-500 focus:border-saffron-600 focus:outline-none",
              ].join(" ")}
            />
          </div>
        </label>
        <button
          type="submit"
          className={[
            "inline-flex h-[46px] items-center justify-center gap-2 border-2 px-6 text-sm font-semibold uppercase tracking-[0.06em] transition",
            isDark
              ? "border-saffron-400 bg-saffron-500 text-navy-900 hover:bg-paper hover:border-paper"
              : "border-navy-900 bg-navy-900 text-paper hover:bg-saffron-500 hover:text-navy-900 hover:border-saffron-500",
          ].join(" ")}
        >
          <Search className="h-4 w-4" />
          {cta}
        </button>
      </form>

      <div className={[
        "border-t-2 px-5 py-3 text-[12px] leading-relaxed",
        isDark ? "border-paper/40 text-paper" : "border-navy-200 text-navy-700",
      ].join(" ")}>
        {helper}{" "}
        <Link
          href="/contact/"
          className={[
            "font-semibold underline-offset-4 hover:underline",
            isDark ? "text-saffron-400" : "text-saffron-700",
          ].join(" ")}
        >
          Browse all coverage areas
        </Link>
        .
      </div>

      {/* Map placeholder strip */}
      <div
        aria-hidden
        className={[
          "h-16 border-t-2",
          isDark ? "border-paper/40 bg-navy-800" : "border-navy-200 bg-paper-deep",
        ].join(" ")}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 11px, rgba(244,163,0,0.18) 11px, rgba(244,163,0,0.18) 12px), repeating-linear-gradient(90deg, transparent 0px, transparent 11px, rgba(244,163,0,0.18) 11px, rgba(244,163,0,0.18) 12px)",
        }}
      >
        <div className="flex h-full items-center justify-center">
          <span className={[
            "rounded-none border-2 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
            isDark
              ? "border-saffron-400 bg-navy-900 text-saffron-400"
              : "border-navy-900 bg-paper text-navy-900",
          ].join(" ")}>
            Coverage map preview
          </span>
        </div>
      </div>
    </div>
  );
}
