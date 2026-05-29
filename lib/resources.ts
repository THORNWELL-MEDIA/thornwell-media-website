export type Resource = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  body: string[];
  closing: string;
};

export const RESOURCES: Resource[] = [
  {
    slug: "brand-system-templates",
    name: "Brand System Templates",
    short:
      "The working brand-book scaffolding Thornwell ships into every operating company we touch.",
    intro:
      "A brand system is not a logo file. It is the documented set of rules that lets a team make brand decisions when the founder is not in the room. Thornwell ships every engagement with a working brand-book template the operator owns from day one.",
    body: [
      "Most brand books fail the day they are delivered. The PDF sits in a folder. The colors get repulled out of a screenshot. The voice gets reinterpreted by every new hire. Six months later, the brand is whatever the most recent freelancer thought it was. Two years later, the asset has effectively expired.",
      "Our template ships as a working document, not a deliverable. Naming conventions, voice guardrails, color tokens, type scale, logo lockups, social avatar specs, presentation masters, approval workflows, exception protocols, and a versioning model are all in one place. The brand book updates as the brand evolves and the version history is part of the document.",
      "Subsidiary brands inside a holding portfolio use an extension template that references the parent style guide where alignment matters and overrides it where the local market requires a different voice. Holding companies use a parent template that governs endorsement, visual hierarchy, and approval routing without forcing every subsidiary into a single template.",
      "The template is delivered as a Google Doc, a Figma file, and a downloadable PDF. The Google Doc is the canonical version. The Figma file holds the visual assets. The PDF is for offline reference. All three live on client-owned identity from day one. The brand book moves with the operator on demand.",
    ],
    closing:
      "If your operating company needs a brand book that survives staff turnover, platform sprawl, and the next CMO, the template is the place to start. We deliver and operate it in the Foundation Sprint window.",
  },
  {
    slug: "playbooks",
    name: "Playbooks",
    short:
      "Operating playbooks for the marketing programs Thornwell runs across the portfolio.",
    intro:
      "A playbook is the documented sequence of steps that turns a marketing program into something repeatable. Thornwell ships the same playbook into every engagement so the work is auditable, transferable, and not dependent on one operator's tribal knowledge.",
    body: [
      "Most agencies operate on tribal knowledge. The senior strategist knows how to run the program. The junior account manager copies what they see. When the senior leaves, the program quietly degrades because nobody documented how it actually ran. Operators pay for that gap in dropped quality and missed deadlines.",
      "Our playbook library covers the programs we operate. Foundation Sprint, brand book delivery, web architecture build, technical SEO audit, local SEO program, listings infrastructure, social operations setup, paid acquisition launch, reputation operations workflow, entity strategy, operator reporting cadence, and executive search presence are all documented as step-by-step playbooks.",
      "Each playbook is delivered with the engagement and updated as the program evolves. The client owns the document. The operating team uses the same document. When a new team member joins, the playbook is the onboarding. When the client wants to bring the program in house, the playbook is the handoff.",
      "Playbooks are written for operators, not for marketers. The language is plain. The sequence is numbered. The decision points are explicit. A property manager, a partner at a law firm, or a family office chief of staff can read the playbook and know exactly what is happening in the program week to week.",
    ],
    closing:
      "Operating companies cannot run marketing on tribal knowledge. Playbooks are how we make sure the program survives the people who built it.",
  },
  {
    slug: "research",
    name: "Research",
    short:
      "Field research and category notes Thornwell publishes on the categories we operate in.",
    intro:
      "Research is how Thornwell stays accountable to the operators we serve. We publish category notes on the verticals we work in so prospective clients can grade our thinking before they ever ask for a brief.",
    body: [
      "Most agencies publish thought leadership that reads like sales material. Our research is written for the operator who wants to know whether we actually understand the category. The audience is the principal, the operating partner, or the chief of staff who has to make a real decision about marketing spend.",
      "Category notes cover the verticals we operate in. Real estate operators, property services, professional services, holding companies, portfolio brands, and family offices each get their own working document. The notes cover the search environment, the listings landscape, the paid acquisition dynamics, the reputation dynamics, and the entity strategy that matters in the category.",
      "Field research is run quietly. We do not publish proprietary client data without written consent. We do publish aggregated patterns we have seen across multiple engagements. The work is sourced, the methodology is documented, and the conclusions are calibrated to what the data actually supports.",
      "Research notes are updated on a quarterly cadence. Each note carries a published date, a version number, and a changelog. When the category shifts, the note shifts with it. Operators can subscribe to the Quarterly POV and get the updated notes mailed in print, four times a year.",
    ],
    closing:
      "Research is how we earn the right to be in the room before we are hired. Read the notes, grade the thinking, and decide whether the operator stack is worth a brief.",
  },
];

export const getResourceBySlug = (slug: string): Resource | undefined =>
  RESOURCES.find((r) => r.slug === slug);
