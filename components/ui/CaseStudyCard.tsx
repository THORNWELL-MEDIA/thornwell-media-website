import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  index: string;
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  pending?: boolean;
  span?: "default" | "wide" | "tall";
  className?: string;
};

export default function CaseStudyCard({
  index,
  title,
  category,
  summary,
  imageUrl,
  imageAlt,
  pending = true,
  span = "default",
  className,
}: Props) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-paper-edge bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl",
        span === "wide" ? "md:col-span-2" : "",
        className,
      )}
    >
      <div
        className={cn(
          "relative",
          span === "wide" ? "aspect-[16/9]" : span === "tall" ? "aspect-[3/4]" : "aspect-[5/4]",
        )}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="img-treat object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
        />
        {pending && (
          <div className="absolute right-3 top-3 rounded-full bg-paper/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-navy-900">
            On request
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
            {index} / {category}
          </div>
          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-paper md:text-3xl">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/90 line-clamp-3">
            {summary}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper">
            <span>Read the case file</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </article>
  );
}
