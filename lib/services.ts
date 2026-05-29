export type Service = {
  slug: string;
  name: string;
  outcome: string;
  short: string;
  description: string;
  whatYouGet: string[];
  measure: string[];
  faq: { q: string; a: string }[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "brand-systems",
    name: "Brand Systems",
    outcome: "Brand books that operate, not decorate",
    short:
      "Documented brand systems with the rules, assets, and approvals a multi-entity portfolio actually needs to stay consistent.",
    description:
      "Brand Systems is the documentation layer that lets a multi-entity holdings group run consistent identity across every subsidiary, every channel, and every operator. We design name conventions, voice, color, typography, logo usage, and approval workflows, and we deliver them in a format that survives staff turnover and platform sprawl.",
    whatYouGet: [
      "Complete brand book covering naming, voice, logo usage, color, typography, and platform-specific rules",
      "Asset library with logo lockups, social avatars, banner templates, and presentation masters",
      "Operating rules: what gets used where, who approves what, and how exceptions are documented",
      "Versioning model so the brand book stays current as the portfolio evolves",
    ],
    measure: [
      "Brand book element coverage (mandatory elements documented)",
      "Cross-platform consistency audit score",
      "Time-to-approve for new branded assets",
    ],
    faq: [
      {
        q: "Do you replace our existing brand if we already have one?",
        a: "No. We document, harden, and extend what works. If the existing identity is sound, we systematize it. If gaps are exposing the brand to inconsistency risk, we propose targeted fixes, not a redesign for its own sake.",
      },
      {
        q: "How long does a brand system take to deliver?",
        a: "A first-pass operating brand book is typically delivered inside the Foundation Sprint window. Full asset library and platform-specific lockups follow once the core system is approved.",
      },
      {
        q: "Can the brand book accommodate multiple subsidiaries?",
        a: "Yes, that is the design intent. The system is built to govern a parent identity plus subsidiary brands without forcing every entity into a single template.",
      },
    ],
    related: ["web-architecture", "social-operations"],
  },
  {
    slug: "web-architecture",
    name: "Web Architecture",
    outcome: "Sites built to index, convert, and scale",
    short:
      "Information architecture, technical builds, and hosting strategy designed for search performance and operator handoff.",
    description:
      "Web Architecture covers the full stack: sitemap design, page templates, schema, Core Web Vitals, hosting strategy, and analytics instrumentation. We build for search engines and conversion, then document the build so the operating team can maintain it without us in the loop.",
    whatYouGet: [
      "Sitemap and information architecture aligned to search intent and service taxonomy",
      "Page templates: home, about, services, locations, contact, careers, insights",
      "Schema markup library: Organization, LocalBusiness, Service, Article, JobPosting, FAQ, BreadcrumbList",
      "Performance budget enforcement: LCP under 2.5s, CLS under 0.1, INP under 200ms",
      "Documented hosting, DNS, SSL, CDN, and backup configuration under client-owned accounts",
    ],
    measure: [
      "Indexed page count vs. submitted",
      "Core Web Vitals pass rate",
      "Organic sessions per page",
      "Form completion rate",
    ],
    faq: [
      {
        q: "Do you host the site for us?",
        a: "Hosting is set up under client-owned accounts. We configure, document, and operate. The registrar, DNS, hosting, and CDN credentials live with the client throughout.",
      },
      {
        q: "Which CMS do you build on?",
        a: "We default to whichever stack the client's tech function will support long-term. WordPress is the typical baseline; static-export Next.js is used where speed and lock-in concerns favor it.",
      },
      {
        q: "Can the build accommodate future subsidiary microsites?",
        a: "Yes. The architecture pattern is designed to be replicated across subsidiaries with shared schema, shared analytics, and consistent IA conventions.",
      },
    ],
    related: ["search-dominance", "operator-reporting"],
  },
  {
    slug: "search-dominance",
    name: "Search Dominance",
    outcome: "Visibility across every surface a buyer searches",
    short:
      "Technical SEO, local SEO, content programs, and entity strategy aimed at occupying every relevant SERP surface.",
    description:
      "Search Dominance is the program that turns a website into a search-occupancy asset. We run technical audits, build content silos, ship local-SEO infrastructure, and manage entity signals across the open web. The objective is share of search across every surface: paid, organic, maps, knowledge panels, and the AI-answer layer.",
    whatYouGet: [
      "Technical SEO audit and remediation plan",
      "Keyword research, content silo design, and editorial calendar",
      "Local SEO program: Google Business Profile optimization, listings, citations",
      "Entity strategy: Wikidata, knowledge panel, brand-name SERP defense",
      "Monthly share-of-search reporting against named competitors",
    ],
    measure: [
      "Indexed pages",
      "Keywords ranking in top 10 / top 3",
      "Share of search vs. competitor set",
      "Organic and local-pack click-through rate",
    ],
    faq: [
      {
        q: "How long until we see ranking movement?",
        a: "Technical fixes and local-SEO improvements typically show movement inside 30 to 60 days. Competitive non-brand keywords are a longer-cycle program. We report progress against leading indicators every week.",
      },
      {
        q: "Do you write content or just plan it?",
        a: "Both. We design the content program and operate it. Where the client has internal subject-matter experts, we structure interview and edit cycles so the operating voice survives.",
      },
      {
        q: "Will you compete against our other subsidiary brands?",
        a: "No. Subsidiary brands within the portfolio are coordinated, not pitted against each other. Cannibalization risks are surfaced and resolved during keyword planning.",
      },
    ],
    related: ["listings-infrastructure", "entity-serp-defense"],
  },
  {
    slug: "listings-infrastructure",
    name: "Listings Infrastructure",
    outcome: "NAP-consistent presence across every directory that matters",
    short:
      "Seventy-five-plus directory citations submitted, verified, and audited under a single source-of-truth NAP record.",
    description:
      "Listings Infrastructure is the citation layer of local SEO. We submit, verify, and audit business listings across the priority set (Google, Bing, Apple, Foursquare, HERE, OpenStreetMap, MapQuest, Yelp), the Yext aggregator network, and high-authority industry directories. Every submission matches the master NAP record exactly.",
    whatYouGet: [
      "Master NAP source-of-truth record",
      "Submission to the priority set (10 platforms) and aggregator network (25+)",
      "Manual submission to industry, regional, and chamber directories (40+)",
      "Verification tracking: submitted, in review, verified, live URL",
      "Quarterly audit for NAP drift and silent listing changes",
    ],
    measure: [
      "Listings submitted vs. live",
      "Verification completion rate",
      "NAP exact-match audit score",
      "Time-to-resolution on flagged drift",
    ],
    faq: [
      {
        q: "What is the minimum listings count?",
        a: "We target seventy-five active citations as a baseline and continue submissions through Tier 3 directories until the audit shows diminishing returns.",
      },
      {
        q: "Who owns the listing accounts?",
        a: "Every account is created under client-owned email and stored in a client-controlled credential vault. Operating access is documented and transferable.",
      },
      {
        q: "What happens when a directory changes our NAP without permission?",
        a: "It is captured during the quarterly audit, flagged in the operator report, and corrected through the directory's normal update channel, or through the aggregator that fed the listing.",
      },
    ],
    related: ["search-dominance", "reputation-operations"],
  },
  {
    slug: "social-operations",
    name: "Social Operations",
    outcome: "Branded, verified, and active across every required platform",
    short:
      "Account creation, branding, verification, and posting cadence across the nine required social platforms.",
    description:
      "Social Operations is the system that runs the social presence, not the content engine that pretends to be one. We create and brand every required account, pursue platform verification where attainable, and operate a documented posting cadence with weekly reporting against follower and engagement metrics.",
    whatYouGet: [
      "Account creation and branding across Facebook, Instagram, LinkedIn, YouTube, TikTok, X, Pinterest, Threads, and Bluesky",
      "Verification pursuit on every platform with a verifiable pathway",
      "Posting cadence: minimum 3 posts per week on Facebook, Instagram, and LinkedIn",
      "Content calendar tied to brand voice and service taxonomy",
      "Weekly reporting on followers, engagement, and reach",
    ],
    measure: [
      "Posts published vs. cadence target",
      "Follower growth",
      "Engagement rate",
      "Verification status by platform",
    ],
    faq: [
      {
        q: "Do you create the content from scratch?",
        a: "We design the calendar, write the posts in the approved brand voice, and source assets from the brand library. Where executive voices need to be present, we run a structured intake instead of fabricating quotes.",
      },
      {
        q: "Can you get us verified on every platform?",
        a: "We pursue every available pathway. Some platforms (Instagram, X, Meta) require eligibility documentation that the client must provide. We document the process and the outcome.",
      },
      {
        q: "What if a platform restricts our category?",
        a: "We document the restriction, propose alternatives, and adjust the rollout plan. No platform is launched on a category that violates its terms.",
      },
    ],
    related: ["brand-systems", "reputation-operations"],
  },
  {
    slug: "paid-acquisition",
    name: "Paid Acquisition",
    outcome: "Demand captured before competitors can outbid you",
    short:
      "Google and Meta paid programs structured for measurable lead capture, share-of-search dominance, and disciplined spend.",
    description:
      "Paid Acquisition is the lead-engine layer that runs alongside organic search. We design account structure, ship campaigns, manage bids, and report on cost-per-lead and share-of-search at the keyword level. Spend is documented, capped, and tied to KPIs every operator can read in fifteen seconds.",
    whatYouGet: [
      "Account structure across Google Search, Performance Max, and Meta",
      "Conversion tracking and audience configuration",
      "Creative and copy aligned to brand voice and service taxonomy",
      "Weekly bid management and budget pacing",
      "Reporting on impressions, clicks, conversions, cost-per-lead, and share-of-search",
    ],
    measure: [
      "Impression share on priority keywords",
      "Conversion volume",
      "Cost-per-lead vs. target",
      "Share-of-search across paid and organic",
    ],
    faq: [
      {
        q: "What is the minimum monthly ad spend?",
        a: "We size the program to the lead-generation target, not a fixed minimum. Spend recommendations are presented with expected outcomes and a clear stop-loss.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "Ad accounts are client-owned. We operate under documented access; spend is tied to client billing relationships throughout.",
      },
      {
        q: "Do you run programmatic or display?",
        a: "Programmatic and display are added when the strategy calls for it, typically retargeting and brand-defense campaigns. Net-new prospecting is run through search and Meta first.",
      },
    ],
    related: ["search-dominance", "operator-reporting"],
  },
  {
    slug: "reputation-operations",
    name: "Reputation Operations",
    outcome: "A review profile that compounds, not erodes",
    short:
      "Review request workflows, response governance, and platform-side dispute escalation.",
    description:
      "Reputation Operations is the program that turns customer interactions into a durable review asset. We design the request workflow, monitor every platform that hosts reviews, respond on a documented schedule, and escalate platform disputes when reviews violate guidelines.",
    whatYouGet: [
      "Review request workflow and template library",
      "Monitoring across Google, Yelp, Facebook, Trustpilot, and industry-specific platforms",
      "Response governance: who responds, in what tone, on what timeline",
      "Dispute escalation playbook for guideline-violating reviews",
      "Monthly reporting on volume, average rating, and response rate",
    ],
    measure: [
      "New reviews per month",
      "Average rating across platforms",
      "Response rate within target SLA",
      "Disputes filed and resolved",
    ],
    faq: [
      {
        q: "Do you generate reviews?",
        a: "No. We never solicit, fabricate, or incentivize reviews in violation of platform terms. We design the request workflow so that legitimate customer interactions consistently end with a review request.",
      },
      {
        q: "Can you respond to reviews on our behalf?",
        a: "Yes, under a documented voice and approval workflow. Negative reviews are typically routed to a designated approver before response.",
      },
      {
        q: "What if a competitor leaves a fake review?",
        a: "We file a platform dispute with documentation. Some platforms remove fake reviews promptly; others require persistence. We track every dispute through to resolution.",
      },
    ],
    related: ["listings-infrastructure", "entity-serp-defense"],
  },
  {
    slug: "entity-serp-defense",
    name: "Entity & SERP Defense",
    outcome: "Brand-name SERPs that you control, not your competitors",
    short:
      "Knowledge panel, Wikidata, and SERP-occupancy strategy for brand-name and founder-name queries.",
    description:
      "Entity & SERP Defense is the discipline of owning brand-name and founder-name searches. We seed Wikidata, design knowledge-panel triggers, build entity-aligned property pages, and audit the brand SERP for risk. Where third-party content threatens the SERP, we counter with on-page assets that rank above it.",
    whatYouGet: [
      "Wikidata seeding and entity record",
      "Knowledge panel pursuit through structured-data signals",
      "Brand SERP audit and ongoing monitoring",
      "Counter-content strategy for risky third-party results",
      "Founder-tier SERP defense protocol where applicable",
    ],
    measure: [
      "Knowledge panel presence",
      "Brand SERP risk score",
      "First-page occupancy on brand-name queries",
    ],
    faq: [
      {
        q: "Can you guarantee a knowledge panel?",
        a: "No. Knowledge panels are awarded by Google based on entity verification signals. We can engineer the signals; we cannot force the outcome.",
      },
      {
        q: "What counts as a SERP risk?",
        a: "Negative press, lookalike or impersonator profiles, low-quality directory listings, and unverified third-party data outranking owned properties on brand queries.",
      },
      {
        q: "Is founder-name defense in scope?",
        a: "Founder-tier defense is engaged separately and requires founder-level approval. We do not draft founder-referencing content without written sign-off.",
      },
    ],
    related: ["search-dominance", "reputation-operations"],
  },
  {
    slug: "operator-reporting",
    name: "Operator Reporting",
    outcome: "Reports an operator can read in fifteen seconds",
    short:
      "Weekly executive reporting and monthly analytics on the metrics that drive decisions.",
    description:
      "Operator Reporting is the discipline of putting evidence in front of decision-makers in a format they trust. We deliver weekly executive reports on Friday and a monthly analytics deep dive: metrics, exceptions, blockers, and a recommended action list. No dashboards as deliverables. Narrative reports.",
    whatYouGet: [
      "Friday weekly executive report",
      "Monthly analytics report with quarter-over-quarter trend analysis",
      "Exception-flagged KPI tracker (red, yellow, green)",
      "Documented metrics dictionary so every number is auditable",
      "GA4, GSC, and Bing Webmaster centralized to a single client-owned analytics email",
    ],
    measure: [
      "Reports delivered on time",
      "KPIs tracked vs. KPIs targeted",
      "Decisions informed by reporting cycle",
    ],
    faq: [
      {
        q: "Do we get a real-time dashboard?",
        a: "Real-time dashboards are configured in GA4 and Looker Studio, but the deliverable is the narrative report. Dashboards explain what; reports explain what to do about it.",
      },
      {
        q: "Who owns the analytics accounts?",
        a: "Every analytics property is centralized under a client-owned email. We document access; we never hold it exclusively.",
      },
      {
        q: "What if a KPI goes red?",
        a: "Red KPIs are surfaced in the same week with a root-cause analysis and a remediation plan. Persistent red status escalates to the client review cadence defined in the engagement.",
      },
    ],
    related: ["search-dominance", "paid-acquisition"],
  },
  {
    slug: "executive-search-presence",
    name: "Executive Search Presence",
    outcome: "Founder and executive SERPs that match the role",
    short:
      "LinkedIn, Wikipedia eligibility, press placement, and executive SERP curation aligned to the executive's actual track record.",
    description:
      "Executive Search Presence is the program that builds an executive's owned-search footprint: LinkedIn, speaker bios, conference profiles, press, and where eligible, Wikipedia. The work is grounded in verifiable accomplishments. We do not invent credentials, and we do not run undisclosed reputation campaigns.",
    whatYouGet: [
      "Executive bio canonicalization across LinkedIn, speaker profiles, and press kits",
      "Press placement strategy aligned to verifiable accomplishments",
      "Wikipedia eligibility assessment and content prep where notable",
      "Owned-property build-out for the executive name SERP",
      "Quarterly SERP audit with risk and opportunity items",
    ],
    measure: [
      "Owned properties ranking on executive-name SERP",
      "Press placements per quarter",
      "Owned-property share of first page",
    ],
    faq: [
      {
        q: "Can you get the executive into a major publication?",
        a: "Pitches are grounded in verifiable, newsworthy accomplishments. Where the story is real, we land placements on a regular cadence. We do not pay for editorial coverage.",
      },
      {
        q: "Is this a personal-brand service?",
        a: "It is a search-presence service. The deliverable is what shows up when someone searches the executive's name, not follower counts on social.",
      },
      {
        q: "Do you require executive approval before publishing?",
        a: "Always. Every executive-referencing asset requires written sign-off before it ships.",
      },
    ],
    related: ["entity-serp-defense", "social-operations"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);
