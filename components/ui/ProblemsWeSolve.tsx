import { AlertTriangle, EyeOff, FileWarning, Hourglass } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Agencies that hide behind retainers.",
    body:
      "Most agencies bill on hours and ship slide decks. Operators get charged for activity, not outcomes. There is no documentation, no tracker, no accountability.",
    fix: "We measure on outputs: indexed pages, verified profiles, lead volume, share of search. Friday reports, red-yellow-green KPIs, no decks.",
  },
  {
    icon: EyeOff,
    title: "Brand assets locked inside vendor accounts.",
    body:
      "Most clients do not own their own ad accounts, content, or analytics. When the agency walks, the institutional knowledge walks with them.",
    fix: "Every account, every credential, every asset is created on client identity from day one. The portfolio is portable on demand.",
  },
  {
    icon: FileWarning,
    title: "No documentation. No transferability.",
    body:
      "Most marketing programs run on tribal knowledge. The strategy lives in someone's head; the dashboards live on someone's laptop. New hires inherit chaos.",
    fix: "Every program ships with a brief, a tracker, a metrics dictionary, and an exception log. A new operator can pick up the work inside one day.",
  },
  {
    icon: Hourglass,
    title: "Slow review cycles. Slower deploys.",
    body:
      "Edits sit in inboxes. Approvals take weeks. By the time the campaign is live, the market moved. Most agencies operate on the calendar, not the clock.",
    fix: "Documented approval workflows, a single source of truth, and dispatch-style coordination. Edits ship the same week. Programs deploy on a clock.",
  },
] as const;

type Props = {
  number?: string;
  title?: string;
  intro?: string;
};

export default function ProblemsWeSolve({
  number = "04",
  title = "What is broken in agency marketing.",
  intro = "Operators do not need another deck. They need documentation, transferability, and outcomes. Here is what we see in the market and what we do about it.",
}: Props) {
  return (
    <section className="border-t-2 border-navy-900 bg-paper-deep">
      <Container>
        <div className="py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <SectionLabel number={number} label="Problems we solve" />
              <h2 className="mt-6 font-serif text-display-lg font-bold text-navy-900 balance">
                {title}
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-navy-700">
                {intro}
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4">
                {PROBLEMS.map((p, i) => (
                  <article
                    key={p.title}
                    className="border-2 border-navy-900 bg-paper p-6 md:p-7"
                  >
                    <div className="flex items-start gap-5">
                      <span className="inline-flex h-12 w-12 flex-none items-center justify-center border-2 border-navy-900 bg-saffron-500 text-navy-900">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-700">
                            {String(i + 1).padStart(2, "0")} / Problem
                          </span>
                        </div>
                        <h3 className="mt-2 font-serif text-2xl font-bold text-navy-900 leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-7 text-navy-700">
                          {p.body}
                        </p>
                        <div className="mt-5 border-t border-navy-200 pt-4">
                          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-900">
                            How we solve it
                          </div>
                          <p className="mt-2 text-[15px] leading-7 text-navy-800">
                            {p.fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
