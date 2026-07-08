"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackLead } from "@/components/Analytics";

type Status = "idle" | "submitting" | "submitted";

const PROJECT_TYPES = [
  "Brand system / identity",
  "Editorial / content engine",
  "Web architecture rebuild",
  "Search and listings program",
  "Paid media pipeline",
  "Reputation and entity defense",
  "Full retainer engagement",
];

const BUDGET_TIERS = [
  "Under CA$60k / first quarter",
  "CA$60k to CA$150k / first quarter",
  "CA$150k to CA$400k / first quarter",
  "CA$400k+ / first quarter",
  "Open / want a recommendation",
];

const TIMELINES = [
  "Inside thirty days",
  "Inside ninety days",
  "Next quarter",
  "Open / planning",
];

export default function ContactForm({ progressive = false }: { progressive?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("https://rothenbury-contact-api.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand: "thornwell", ...payload }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      trackLead("contact_form");
      setStatus("submitted");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "submitted") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-paper-edge bg-white p-8 text-navy-800"
      >
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-paper">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div className="mt-5 font-serif text-2xl font-semibold text-navy-900">
          Brief received.
        </div>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-navy-700">
          A senior member of the Thornwell Media team will read it and
          respond inside one business day with a tailored brief.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
      {/* STAGE 1: Project & budget (progressive only) */}
      {progressive && (
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            id="projectType"
            label="Project type"
            options={PROJECT_TYPES}
            placeholder="Select a project type"
            required
          />
          <SelectField
            id="budgetTier"
            label="Budget tier"
            options={BUDGET_TIERS}
            placeholder="Select a budget tier"
            required
          />
        </div>
      )}

      {/* STAGE 2: Contact */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" autoComplete="name" required />
        <Field id="company" label="Company" autoComplete="organization" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" type="email" autoComplete="email" required />
        <Field id="phone" label="Phone" type="tel" autoComplete="tel" />
      </div>

      {/* STAGE 3: Timeline */}
      {progressive && (
        <SelectField
          id="timeline"
          label="Timeline"
          options={TIMELINES}
          placeholder="Select a timeline"
        />
      )}

      {/* STAGE 4: Brief */}
      <div>
        <label htmlFor="message" className="input-label">
          {progressive ? "Brief" : "What are you looking to build?"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A line on the brand. A line on the markets. A line on the outcome you're after."
          className="input mt-2"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-paper-edge pt-6 sm:flex-row sm:items-center">
        <p className="text-xs text-navy-700">
          By submitting, you consent to Thornwell Media contacting you about
          your inquiry. See our{" "}
          <a href="/privacy/" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="submit"
          className="btn-primary group"
          disabled={status === "submitting"}
        >
          <span>{status === "submitting" ? "Sending..." : "Send the brief"}</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
      {error && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
  required,
  className,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="input-label">
        {label}
        {required && <span className="ml-1 text-gold-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={cn("input mt-2")}
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
        {required && <span className="ml-1 text-gold-600">*</span>}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        className="input mt-2 appearance-none bg-white"
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
