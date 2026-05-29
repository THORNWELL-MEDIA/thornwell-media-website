import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  meta: string;
  className?: string;
  pending?: boolean;
};

export default function InsightCard({
  category,
  title,
  excerpt,
  imageUrl,
  imageAlt,
  meta,
  className,
  pending = false,
}: Props) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-paper-edge bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="img-treat object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        {pending && (
          <div className="absolute right-3 top-3 rounded-full bg-paper/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-navy-900">
            New issue
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-600">
          {category}
        </div>
        <h3 className="font-serif text-xl font-semibold leading-snug text-navy-900">
          {title}
        </h3>
        <p className="text-sm leading-7 text-navy-700">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between border-t border-paper-edge pt-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy-700">
            {meta}
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
