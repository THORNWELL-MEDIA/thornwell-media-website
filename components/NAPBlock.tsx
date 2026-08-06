import { BRAND, NAP } from "@/lib/constants";

type Props = { variant?: "footer" | "card"; showHours?: boolean };

export default function NAPBlock({ variant = "footer", showHours = false }: Props) {
  const isCard = variant === "card";
  return (
    <address
      className={
        isCard
          ? "not-italic rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-700"
          : "not-italic text-sm text-slate-300"
      }
    >
      <div className={isCard ? "font-semibold text-navy-800" : "font-semibold text-white"}>
        {BRAND.name}
      </div>
      <div className="mt-2 space-y-1">
        <div>{NAP.address.line1}</div>
        <div>{NAP.address.line2}</div>
        <div>
          {NAP.address.city}, {NAP.address.region} {NAP.address.postalCode}
        </div>
        <div>{NAP.address.country}</div>
      </div>
      <div className="mt-3 space-y-1">
        <div>
          <a
            href={NAP.phone.href}
            className={
              isCard ? "text-navy-800 underline-offset-2 hover:underline" : "text-white underline-offset-2 hover:underline"
            }
          >
            {NAP.phone.display}
          </a>
        </div>
        {NAP.email.general && (
          <div>
            <a
              href={`mailto:${NAP.email.general}`}
              className={
                isCard ? "text-navy-800 underline-offset-2 hover:underline" : "text-white underline-offset-2 hover:underline"
              }
            >
              {NAP.email.general}
            </a>
          </div>
        )}
      </div>
      {showHours && (
        <div className="mt-4 border-t border-slate-200 pt-3 text-xs">
          <div className={isCard ? "font-semibold text-navy-800" : "font-semibold text-white"}>
            Hours
          </div>
          <ul className="mt-2 space-y-1">
            {NAP.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.open === "Closed" ? "Closed" : `${h.open} to ${h.close}`}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </address>
  );
}
