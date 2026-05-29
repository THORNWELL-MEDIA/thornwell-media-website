import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { SERVICE_ICONS } from "@/lib/service-icons";
import { cn } from "@/lib/cn";

type Props = {
  service: Service;
  index?: number;
  className?: string;
};

export default function ServiceCard({ service, index, className }: Props) {
  const Icon = SERVICE_ICONS[service.slug];
  return (
    <Link
      href={`/services/${service.slug}/`}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-paper-edge bg-white/70 p-7 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/30 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(15,30,61,0.18)]",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div>
        <div className="flex items-center justify-between gap-3">
          {typeof index === "number" && (
            <span className="font-mono text-[12px] tracking-[0.18em] text-navy-700">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          {Icon && (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-edge bg-paper-deep/40 text-navy-900 transition group-hover:bg-navy-900 group-hover:text-paper">
              <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
            </span>
          )}
        </div>
        <div className="mt-6 eyebrow">{service.outcome}</div>
        <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-navy-900">
          {service.name}
        </h3>
        <p className="mt-4 text-[15px] leading-7 text-navy-700">{service.short}</p>
      </div>
      <div className="mt-8 flex items-center justify-between text-sm">
        <span className="font-medium text-navy-900">Read the file</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-paper">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
