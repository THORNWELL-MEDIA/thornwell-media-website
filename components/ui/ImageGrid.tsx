import Image from "next/image";
import { cn } from "@/lib/cn";

type Item = {
  id: string;
  alt: string;
  label?: string;
  caption?: string;
  span?: "default" | "wide" | "tall";
};

type Props = {
  items: Item[];
  buildUrl: (id: string, w?: number, q?: number) => string;
  className?: string;
};

export default function ImageGrid({ items, buildUrl, className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
        className,
      )}
    >
      {items.map((item, i) => {
        const span =
          item.span === "wide"
            ? "md:col-span-2"
            : item.span === "tall"
            ? "row-span-2"
            : "";
        return (
          <figure
            key={`${item.id}-${i}`}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-paper-edge bg-navy-900",
              span,
              item.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]",
              item.span === "wide" ? "md:aspect-[16/9]" : "",
            )}
          >
            <Image
              src={buildUrl(item.id, 1200, 70)}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="img-treat object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-95"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90"
            />
            {(item.label || item.caption) && (
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                {item.label && (
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400">
                    {item.label}
                  </div>
                )}
                {item.caption && (
                  <div className="mt-1 font-serif text-sm font-semibold leading-snug text-paper md:text-base">
                    {item.caption}
                  </div>
                )}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
