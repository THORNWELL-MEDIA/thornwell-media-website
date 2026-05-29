export type Industry = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  body: string[];
  services: string[]; // service slugs from lib/services.ts
  closing: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate-operators",
    name: "Real Estate Operators",
    short:
      "Brand systems, search occupancy, and reporting discipline for operators who hold portfolios for the long arc.",
    intro:
      "Real estate operators carry more than a logo. They carry tenant trust, capital trust, and a story that has to read the same on a leasing page, an investor deck, and a Friday board note. Thornwell Media runs the marketing system that keeps every surface consistent across the hold.",
    body: [
      "Most real estate marketing degrades the moment a portfolio scales past one region. Different brokers ship different decks. Local pages duplicate or contradict each other. Listings drift. The brand book sits on a laptop. Two years in, the operator cannot answer a basic question about how the brand actually shows up in search, on Google Maps, or inside an LP report.",
      "Thornwell was built for the operator that intends to compound. We document the brand once, then operate it across every property page, every listing, every social channel, and every pitch surface that touches a prospect or an investor. The brand book is a working document, not a deliverable that gets archived.",
      "We treat the website as an indexable asset, not a brochure. Sitemap design, schema, page templates, and Core Web Vitals are tracked weekly. Local SEO runs against the priority directory set plus the aggregator network, with the master NAP record audited every quarter for drift. Paid programs are sized to lead targets, not to a vanity spend number.",
      "The reporting cadence matches the way a real estate operator already runs the business. Friday executive notes. Monthly analytics. Quarterly review with the principals. Red, yellow, green KPIs that an asset manager can read in fifteen seconds between two property tours.",
    ],
    services: [
      "brand-systems",
      "web-architecture",
      "search-dominance",
      "listings-infrastructure",
      "reputation-operations",
      "operator-reporting",
    ],
    closing:
      "If the portfolio is set up to be held for fifteen years, the marketing system should be set up the same way. We design, operate, and document it so the next CMO inherits a working system, not a folder of decks.",
  },
  {
    slug: "property-services",
    name: "Property Services",
    short:
      "Local SEO, listings discipline, and reputation programs for the operators who keep buildings running across multiple markets.",
    intro:
      "Property services companies live on local search. Maintenance brands, leasing agencies, eviction services, cleaning operators, restoration crews. The work is dispatched locally and the demand is captured locally. Thornwell runs the local-marketing system the way an operator runs a service stack: documented, audited, on the same weekly cadence.",
    body: [
      "Property services demand is captured on Google Maps before it is captured anywhere else. If the listings are inconsistent, the phone does not ring. If the reviews are stale, the close rate softens. If the city pages on the website do not match what Google shows on the local pack, the click goes to a competitor who paid less for the same surface.",
      "We build the local-SEO stack to a documented standard. Google Business Profile setup and optimization across every service area. Yext aggregator submissions plus manual submissions to the priority directory set. Master NAP record as a single source of truth, audited quarterly for drift. City pages built on a template that ranks because the architecture is right, not because the page is stuffed.",
      "Reviews are a workflow, not a wishlist. We design the request flow, monitor every platform that hosts reviews, respond on a documented schedule, and escalate platform disputes when reviews violate guidelines. The review profile compounds because somebody owns it on the calendar.",
      "Paid acquisition is sized to lead-cost targets the operator can defend in a board meeting. Google Search, Performance Max, and Local Service Ads where the category supports them. Spend pacing is reported weekly. Cost per qualified lead is reported monthly. Nothing about the program is opaque.",
    ],
    services: [
      "search-dominance",
      "listings-infrastructure",
      "reputation-operations",
      "paid-acquisition",
      "social-operations",
      "operator-reporting",
    ],
    closing:
      "Property services brands win on local search execution, not on creative awards. We run the stack that compounds the local pack across every market the operator covers.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    short:
      "Editorial content, entity strategy, and search programs for firms where the buyer reads the SERP before they take the meeting.",
    intro:
      "Professional services buyers research before they reach out. Law firms, advisory practices, executive search, accounting groups, consultancies. The first conversation happens on the SERP, the firm bio, and the partner LinkedIn long before the discovery call is booked. Thornwell builds the search and editorial system that makes the firm legible in that quiet first round.",
    body: [
      "Most professional services marketing leans on referrals and personal networks. That works until the firm needs to scale beyond the founders, expand into a new vertical, or recruit talent that has never met the partners. At that point, the brand has to do work the partners cannot personally do for every prospect. The SERP has to carry the story.",
      "We build editorial content that earns the click on practice-area queries, the partner-name SERP, and the long-tail questions a serious buyer asks before they pick up the phone. Content programs are run on the same documentation discipline as the rest of the stack: brief, edit cycle, fact-check, publication calendar, distribution plan.",
      "Entity strategy matters in professional services more than in most categories. Knowledge panel presence, Wikidata seeding, partner-name SERP defense, and accurate citations across the legal and financial directory ecosystem are part of the standard build. The brand SERP and the partner SERPs are audited every quarter for risk and opportunity.",
      "Listings discipline still applies. Court, bar, professional association, and industry directories carry weight a generic citation does not. We submit, verify, and audit those directories with the same NAP source of truth that governs the rest of the local-SEO program.",
    ],
    services: [
      "brand-systems",
      "web-architecture",
      "search-dominance",
      "entity-serp-defense",
      "executive-search-presence",
      "operator-reporting",
    ],
    closing:
      "Professional services buyers grade the firm on what they find before the first call. We build the search and editorial system that makes the firm grade well, every quarter, on the record.",
  },
  {
    slug: "holding-companies",
    name: "Holding Companies",
    short:
      "Parent-brand systems and subsidiary marketing infrastructure for operators running multiple businesses under a single roof.",
    intro:
      "Holding companies carry a coordination problem that single-brand operators do not. Subsidiary brands need to ship marketing on their own identity while the parent maintains coherence across the portfolio. Thornwell designs the brand system and the operating cadence that lets every subsidiary run fast without breaking the parent.",
    body: [
      "Most holding companies inherit marketing entropy. Each subsidiary built its own site, ran its own listings, picked its own colors, hired its own freelancer. Two years in, the parent cannot answer a question as basic as how many active brand books exist across the portfolio, or who owns the analytics for any given subsidiary.",
      "We start with the parent brand book. Naming conventions. Voice guardrails. Subsidiary endorsement rules. Visual hierarchy between parent and child. Approval workflows that survive staff turnover. The brand system is delivered as a working document, not a one-time PDF.",
      "Each subsidiary gets its own marketing stack, run to the same documentation standard. Web architecture, search programs, listings infrastructure, social operations, paid acquisition, reputation operations, and operator reporting all run on the same playbook, with subsidiary-level KPIs rolled up to a parent-level Friday note.",
      "Cannibalization risks across the portfolio are surfaced and resolved before they cost money. Subsidiary brands that compete in the same SERP get coordinated, not pitted against each other. Shared analytics email, shared NAP master, shared metrics dictionary keep the parent in control without slowing the subsidiaries down.",
    ],
    services: [
      "brand-systems",
      "web-architecture",
      "search-dominance",
      "operator-reporting",
      "entity-serp-defense",
      "executive-search-presence",
    ],
    closing:
      "Holding companies scale on coordination, not on creative output. We run the system that keeps every subsidiary fast and the parent coherent across the whole arc of ownership.",
  },
  {
    slug: "portfolio-brands",
    name: "Portfolio Brands",
    short:
      "Subsidiary-level marketing stacks that run fast inside a parent operating system, with KPIs the parent can read.",
    intro:
      "Portfolio brands sit inside a parent operator and have to move at the pace of the operating market they serve. Tenants, customers, candidates, and partners on the ground do not care about the parent structure. They need a brand that shows up locally, ranks for the right queries, and responds quickly. Thornwell runs the subsidiary-level stack that ships work weekly while keeping the parent informed.",
    body: [
      "Subsidiary marketing usually breaks in one of two ways. Either the parent overpolices the brand and the subsidiary cannot ship anything fast, or the parent ignores the subsidiary and the brand drifts off the parent system. Neither outcome compounds across the hold.",
      "We design the subsidiary brand to operate inside the parent system without losing local momentum. The brand book references the parent style guide where alignment matters and overrides it where the local market requires a different voice. Approval workflows route through the parent only on the items that actually need parent sign-off.",
      "The local marketing stack is built to the same standard as a standalone operator. Web architecture, local SEO, listings, social, paid, and reputation all run weekly. Friday reports go to the subsidiary lead and the parent operator on the same cadence, with KPIs that roll up to a parent dashboard without requiring an extra reporting cycle.",
      "When a new geography, service line, or vertical opens up inside the subsidiary, the template ships fast. New city page, new listings batch, new content silo, new ad set, new reporting line. The subsidiary moves at the speed of the operating market because the system was designed to move that way.",
    ],
    services: [
      "brand-systems",
      "web-architecture",
      "search-dominance",
      "listings-infrastructure",
      "social-operations",
      "paid-acquisition",
    ],
    closing:
      "Portfolio brands win when the subsidiary can move fast and the parent stays informed. We build the stack that does both, week after week, on a documented cadence.",
  },
  {
    slug: "family-offices",
    name: "Family Offices",
    short:
      "Discreet brand systems, entity defense, and search programs for principal-owned capital and operating platforms.",
    intro:
      "Family offices carry a different marketing posture than venture-backed firms. Brand exists to attract the right operating partners, the right deal flow, and the right hires, while staying off the surfaces the principals choose not to occupy. Thornwell runs the brand and search system that does that quietly, on a long horizon.",
    body: [
      "Most family offices operate behind a thin brand. A short site. A small team page. A handful of press placements. That works until the office starts taking outside capital, building an operating platform, or expanding into geographies where the principals are not personally known.",
      "We start by mapping the surface the office actually wants to occupy. Principal SERP. Office SERP. Operating-platform SERP. Press surface. Investor surface. Recruiting surface. The brand book documents what gets said where, in what tone, with what approvals. Nothing publishes off the principal's name without written approval.",
      "Entity strategy carries more weight in this category than in most. Knowledge panel presence, Wikidata accuracy, brand-name SERP defense, and principal-name SERP curation are core to the build. Risky third-party results are countered with owned properties that rank above them. The brand SERP is audited every quarter.",
      "Where the office runs an operating platform, the subsidiary stack runs the same way it does for a holding company. Documented programs. Transferable assets. Friday executive notes that respect the principal's reading discipline. No deck-driven engagements, no agency-only credentials, no surprises on the SERP.",
    ],
    services: [
      "brand-systems",
      "entity-serp-defense",
      "executive-search-presence",
      "web-architecture",
      "operator-reporting",
      "reputation-operations",
    ],
    closing:
      "Family offices compound across decades. The brand and search system should be set up the same way. We design and operate it on the cadence the principals already trust.",
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  INDUSTRIES.find((i) => i.slug === slug);
