import { cn } from "@/lib/cn";

type Props = {
  number?: string;
  label: string;
  variant?: "light" | "dark";
  className?: string;
};

export default function SectionLabel({ number, label, variant = "light", className }: Props) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {number && (
        <span
          className={
            variant === "dark"
              ? "section-number-dark"
              : "section-number"
          }
        >
          {number}
        </span>
      )}
      <span
        aria-hidden
        className={cn(
          "h-px flex-none",
          variant === "dark" ? "w-8 bg-gold-400/60" : "w-8 bg-gold-500/60",
        )}
      />
      <span
        className={
          variant === "dark"
            ? "eyebrow-on-dark"
            : "eyebrow"
        }
      >
        {label}
      </span>
    </div>
  );
}
