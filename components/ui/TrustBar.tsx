import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

type Item = {
  label: string;
  icon: LucideIcon;
};

type Props = {
  items: Item[];
  variant?: "light" | "dark";
  className?: string;
};

export default function TrustBar({ items, variant = "light", className }: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-3 lg:grid-cols-6",
        dark ? "border-paper/10" : "border-paper-edge",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col items-center gap-2 px-4 py-6",
            dark ? "bg-navy-800/40 text-paper" : "bg-white text-navy-900",
          )}
        >
          <span
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full",
              dark ? "bg-gold-500/15 text-gold-300" : "bg-navy-900/5 text-navy-900",
            )}
          >
            <item.icon className="h-4 w-4" />
          </span>
          <div
            className={cn(
              "text-center font-mono text-[10px] uppercase tracking-[0.18em]",
              dark ? "text-paper/90" : "text-navy-700",
            )}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
