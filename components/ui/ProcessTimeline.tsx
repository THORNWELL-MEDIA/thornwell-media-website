import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Step = {
  no: string;
  title: string;
  body: string;
  icon: LucideIcon;
  duration?: string;
};

type Props = {
  steps: Step[];
  variant?: "light" | "dark";
  className?: string;
};

export default function ProcessTimeline({ steps, variant = "light", className }: Props) {
  const dark = variant === "dark";
  return (
    <ol className={cn("grid gap-px md:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, idx) => (
        <li
          key={step.no}
          className={cn(
            "relative flex flex-col gap-5 p-7 md:p-8",
            dark
              ? "bg-navy-800/60 ring-1 ring-paper/5"
              : "bg-white ring-1 ring-paper-edge",
          )}
        >
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.18em]",
                dark ? "text-gold-400" : "text-gold-600",
              )}
            >
              {step.no}
            </span>
            {step.duration && (
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.18em]",
                  dark ? "text-paper/50" : "text-navy-700",
                )}
              >
                {step.duration}
              </span>
            )}
          </div>

          <span
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full",
              dark ? "bg-gold-500/15 text-gold-300" : "bg-navy-900 text-paper",
            )}
          >
            <step.icon className="h-5 w-5" />
          </span>

          <h3
            className={cn(
              "font-serif text-xl font-semibold",
              dark ? "text-paper" : "text-navy-900",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "text-[15px] leading-7",
              dark ? "text-paper/90" : "text-navy-700",
            )}
          >
            {step.body}
          </p>

          {idx < steps.length - 1 && (
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 lg:block",
                dark ? "bg-paper/15" : "bg-paper-edge",
              )}
            />
          )}
        </li>
      ))}
    </ol>
  );
}
