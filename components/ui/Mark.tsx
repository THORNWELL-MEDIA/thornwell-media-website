import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Wordmark monogram. Until a real logo asset is delivered we render a
 * typographically-set "TM" mark inside a square - clean, brand-correct,
 * legible at favicon size.
 */
export default function Mark({ className, variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-sm border font-serif text-[15px] font-semibold tracking-tightest-1",
          isDark
            ? "border-paper/30 bg-transparent text-paper"
            : "border-navy-900/20 bg-paper-deep text-navy-900",
        )}
      >
        <span className="relative">
          T
          <span
            className={cn(
              "absolute -right-1 -top-0.5 h-1 w-1 rounded-full",
              isDark ? "bg-gold-400" : "bg-gold-500",
            )}
          />
        </span>
      </span>
      <span
        className={cn(
          "font-sans text-[15px] font-semibold tracking-tight",
          isDark ? "text-paper" : "text-navy-900",
        )}
      >
        Thornwell Media
      </span>
    </div>
  );
}
