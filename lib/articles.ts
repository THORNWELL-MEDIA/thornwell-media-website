export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  date: string; // ISO date
  no: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatArticleDate(iso: string): string {
  // Avoid timezone shift: treat as UTC date-only
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return iso;
  return dateFormatter.format(new Date(Date.UTC(y, m - 1, d)));
}

export const ARTICLES: Article[] = [
  {
    no: "01",
    slug: "operational-marketing-for-operating-companies",
    title:
      "Operational Marketing: Brand-Building for Operating Companies",
    excerpt:
      "Creative agencies optimize for awards. Operating companies need marketing that reconciles to revenue.",
    category: "Marketing",
    date: "2026-04-15",
    body: `Most marketing agencies are built around a creative-first operating model: campaign concepts, brand systems, content production, awards. The model works for consumer brands with large media budgets and abstract differentiation problems. It works poorly for operating companies, property services, industrial services, professional services, where marketing has to reconcile, line by line, to pipeline and revenue.

The difference is structural, and it shows up in five places.

**1. The unit of work is the lead, not the campaign.** A creative agency reports on impressions, engagement, brand lift, and sentiment. An operating company has none of those problems. Its problem is, did this $40,000 in spend produce more qualified pipeline than $40,000 in the alternative channel? The marketing function has to answer that in dollars, with attribution that survives audit. The Interactive Advertising Bureau's 2024 performance marketing benchmark showed B2B services advertisers reporting cost-per-qualified-lead variance of 4-7x across channels, suggesting most operators are running with channel mix decisions that have never been measured.

**2. Content is operational documentation, not thought leadership.** An operating company's prospects want to know how the work is done, what it costs, what the SLA is, what happens when something goes wrong. Generic thought leadership, the standard 800-word LinkedIn post, does not move them. Specific operational documentation, response time data, case studies with named clients and reconciled outcomes, pricing transparency where competitively viable, does. HubSpot's 2024 B2B content study showed conversion rates 3.1x higher for service-sector content rated as operational versus inspirational.

**3. Sales and marketing share a single funnel definition.** In creative-led shops, marketing hands off to sales at the lead stage and stops measuring. In operating companies, that handoff is exactly where leads die. The funnel has to be defined jointly, instrumented end to end, and reviewed weekly with both functions in the room. SiriusDecisions' 2024 demand waterfall data showed conversion rates 2.4x higher when marketing-qualified-lead and sales-accepted-lead definitions were jointly authored versus marketing-defined alone.

**4. Brand is a byproduct of operations, not a campaign output.** An operating company's brand is what its customers say after a service encounter. A polished creative campaign on top of operational mediocrity produces churn. Marketing's job is to surface the operational reality, not to dress it up. Where the operations are weak, marketing should flag it back to leadership rather than paper over it.

**5. Reporting cadence is weekly, not quarterly.** Quarterly campaign reviews are too slow for operating companies. The right cadence is weekly: leads by source, qualified rate by source, pipeline conversion by source, cost per closed deal by source. The numbers move week to week. The decisions, increase spend, kill a channel, change a creative, have to move with them.

The marketing function for an operating company is not a creative service. It is an operations function with creative inputs.`,
  },
  {
    no: "02",
    slug: "paid-media-reconciling-first-party-metrics",
    title:
      "Paid Media for Operators: Reconciling Spend to First-Party Metrics",
    excerpt:
      "Platform-reported conversions are not pipeline. Operators have to reconcile spend to their own systems.",
    category: "Performance Marketing",
    date: "2026-04-19",
    body: `Paid media platforms (Google, Meta, LinkedIn, programmatic) all report on conversions. Operators who trust those reports run their marketing on a fiction. The platform conversion is, at best, a click that took a defined action on a landing page. It is not a sales-qualified lead, not a pipeline opportunity, not closed revenue. The gap between the two is where most paid-media spend is mispriced.

The reconciliation discipline that separates effective operators from ineffective ones has four elements.

**1. First-party tracking from the click to the closed deal.** Every paid click should land with a unique identifier (UTM, GCLID, FBCLID, equivalent) that travels through the form fill, into the CRM, through SQL qualification, into the opportunity, and to the closed-won or closed-lost outcome. If any link in that chain breaks, the reconciliation fails. Salesforce's 2024 marketing operations benchmark showed only 38% of B2B services operators tracking the full chain, despite 91% running paid media programs.

**2. Server-side conversion APIs, not browser pixels.** Browser-based pixels (the legacy approach) are blocked by privacy controls, ad blockers, and platform tracking-prevention features. Apple's ITP and Safari's tracking restrictions reduce browser-based attribution accuracy by an estimated 30-45% on consumer audiences (Statista 2024 ad tech tracking analysis). Server-side conversion APIs (Google Enhanced Conversions, Meta Conversions API, LinkedIn Conversions API) restore most of that signal because they fire from the operator's own servers, not the prospect's browser.

**3. Reconciled revenue per channel, not platform-reported.** The reporting view that matters is: dollars spent in channel X, opportunities created from channel X, opportunities closed from channel X, revenue closed from channel X. The platform's reported conversion count is a leading indicator, useful for daily optimization. The reconciled revenue is the lagging indicator, the only number that justifies the next budget cycle.

**4. Lookback windows tuned to actual sales cycle length.** A B2B services sale with a 90-day median sales cycle cannot be measured against a 7-day attribution window. The lookback has to match the cycle. Most platforms default to short windows because it makes their reporting look better; the operator has to override that default. The Marketing Accountability Standards Board's 2024 attribution guidance recommended lookback windows at 1.5x the median sales cycle as a defensible baseline.

The outcome of this discipline is decision-grade data. When channel A returns $4.20 of closed revenue per dollar spent and channel B returns $0.90, the budget shift is obvious and survives an audit. Without the discipline, the operator is making the same shift based on platform-reported conversions, half of which never become qualified leads, let alone revenue.

Paid media is not expensive because the platforms charge too much. It is expensive because most operators cannot tell which clicks paid back. The reconciliation is what separates the operators who can scale spend from the ones who cap it out of fear.`,
  },
  {
    no: "03",
    slug: "reputation-defense-search-saturated",
    title: "Reputation Defense in a Search-Saturated Market",
    excerpt:
      "An operating company's brand is what shows up when a prospect searches. Defending that surface is a discipline.",
    category: "Brand Protection",
    date: "2026-04-23",
    body: `When a prospective customer or hire searches an operating company's name, the first page of results is the operating company's brand. Whatever the company says about itself on its own site is one tile. The other nine tiles are reviews, news mentions, employee comments, regulatory filings, and competitor content. For most operating companies, the controlled tiles are heavily outnumbered by uncontrolled ones, and the uncontrolled tiles drift over time.

Reputation defense is the discipline of managing that surface. It is not crisis communications. It is the steady-state work that prevents the crisis.

Three workstreams define a functional reputation defense program.

**1. Owned-property dominance for branded search.** The first 10 results for a brand search should be properties the company controls or substantively influences: primary website, careers site, knowledge base, LinkedIn, leadership bios, certified review profiles (Google, BBB, industry-specific), and earned media. BrightLocal's 2024 local consumer review survey found that 87% of B2B prospects review the first page of branded search results before initiating contact; 64% will not contact a vendor whose first page contains an unaddressed negative item. The math is direct: the first page is the qualification stage, whether the operator participates in it or not.

**2. Review velocity and response discipline.** The Google review surface, in particular, rewards both volume and recency. A business with 14 reviews from 2019 ranks differently from one with 142 reviews and three from this month. The mechanism is not just count; it is freshness signal in the local search algorithm and prospect psychology. Harvard Business School's 2024 research on online reviews showed conversion rate lift of 18-31% from a 1-star increase in average rating, with a separate 12-19% lift from review recency under 90 days. The operating discipline is straightforward: a documented post-service review request, a response cadence on every review (positive and negative) within 5 business days, and a service-recovery loop on negative reviews that reconciles to the operating team.

**3. Negative content displacement.** When a negative item lands on page one (a disgruntled former employee post, a Reddit thread, an outdated news article, a competitor comparison page), the response is not removal. Removal is rarely available and often counterproductive. The response is displacement: publishing or amplifying enough authoritative content to push the negative item to page two. SEMrush's 2024 brand search analysis showed that 92% of branded search clicks happen on page one; an item displaced to page two effectively disappears for most prospects.

The failure mode is reactive defense: doing nothing until a negative item appears, then scrambling. The Reputation Institute's 2024 research showed median time-to-recovery from a page-one negative item at 7-11 months for operators without a steady-state program, versus 6-10 weeks for operators with one. The 5-9 month difference is the cost of running without a program. It typically translates into measurable loss of inbound pipeline during that window.

Reputation defense is unglamorous, continuous, and visible mostly when it stops working. The operators who run the program reliably outperform the ones who treat it as a project.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
