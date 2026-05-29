import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  className?: string;
  variant?: "light" | "dark";
};

export default function MarqueeBanner({ items, className, variant = "light" }: Props) {
  // duplicate so the marquee can loop without seams
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "no-scrollbar overflow-hidden border-y",
        variant === "dark"
          ? "border-paper/10 bg-ink text-paper"
          : "border-paper-edge bg-paper/60 text-navy-900",
        className,
      )}
    >
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap py-5">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 font-mono text-[12px] uppercase tracking-[0.22em]">
            <span>{item}</span>
            <span aria-hidden className={variant === "dark" ? "text-gold-400" : "text-gold-600"}>
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
