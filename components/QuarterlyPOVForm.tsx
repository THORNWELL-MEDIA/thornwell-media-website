"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function QuarterlyPOVForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex flex-col gap-3 md:items-end"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {submitted ? (
        <div className="inline-flex items-center gap-2 rounded-none border-2 border-saffron-400 bg-navy-900 px-4 py-3 text-sm text-paper">
          <CheckCircle2 className="h-4 w-4 text-saffron-400" />
          You are on the list. Next issue ships at the start of the quarter.
        </div>
      ) : (
        <>
          <label htmlFor="pov-email" className="sr-only">Work email</label>
          <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input
              id="pov-email"
              name="email"
              type="email"
              required
              placeholder="Work email"
              className="flex-1 border-2 border-paper/30 bg-navy-900 px-4 py-3 text-sm text-paper placeholder:text-paper/55 focus:border-saffron-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 border-2 border-saffron-400 bg-saffron-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-900 transition hover:bg-saffron-400"
            >
              Subscribe
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-paper/55 md:text-right">
            One email per quarter. Unsubscribe in one click.
          </p>
        </>
      )}
    </form>
  );
}
