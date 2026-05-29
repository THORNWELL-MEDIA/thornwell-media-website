import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  label?: string;
  className?: string;
};

/**
 * Bold geometric editorial divider. Saffron + ink line pattern with optional
 * tracking label, in the spirit of Wallpaper* / Pentagram page furniture.
 */
export default function EditorialDivider({
  variant = "light",
  label,
  className,
}: Props) {
  const fg = variant === "dark" ? "#FFFFFF" : "#0A0A0A";
  const muted = variant === "dark" ? "rgba(255,255,255,0.5)" : "rgba(10,10,10,0.55)";
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span aria-hidden className="block h-3 w-3 flex-none bg-saffron-500" />
      <svg
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        aria-hidden
        className="h-2 flex-1"
      >
        <line x1="0" y1="4" x2="200" y2="4" stroke={fg} strokeWidth="1.5" />
        <line x1="0" y1="4" x2="22" y2="4" stroke="#F4A300" strokeWidth="3" />
        <line x1="178" y1="4" x2="200" y2="4" stroke="#F4A300" strokeWidth="3" />
      </svg>
      {label && (
        <span
          className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ color: muted }}
        >
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 60 8"
        preserveAspectRatio="none"
        aria-hidden
        className="h-2 w-16 flex-none"
      >
        <line x1="0" y1="4" x2="60" y2="4" stroke={fg} strokeWidth="1.5" />
      </svg>
      <span aria-hidden className="block h-3 w-3 flex-none border-2 border-saffron-500" />
    </div>
  );
}
