export type City = {
  slug: string;
  name: string;
  region: string;
  regionCode: string;
  country: string;
  postalPattern: string;
  blurb: string;
  context: string;
  primaryServices: string[];
};

export const CITIES: City[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "Ontario",
    regionCode: "ON",
    country: "Canada",
    postalPattern: "M-prefix postal codes (M1A through M9W)",
    blurb:
      "Canada's largest market and our operating center. Marketing programs in Toronto are run with the same documentation and reporting discipline we apply everywhere.",
    context:
      "Toronto businesses face the most competitive search environment in Canada. Generic marketing tactics get outranked, outbid, and outpaced. Operator-grade marketing - documented, measured, and reported - is what holds up under that pressure.",
    primaryServices: ["search-dominance", "paid-acquisition", "listings-infrastructure"],
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    region: "Ontario",
    regionCode: "ON",
    country: "Canada",
    postalPattern: "K-prefix postal codes (K1A through K2V)",
    blurb:
      "Ottawa's dual public-sector and private-sector economy demands marketing that holds up to scrutiny - credentialed, accurate, and on the record.",
    context:
      "Marketing programs in Ottawa intersect with regulated industries, government procurement contexts, and a sophisticated bilingual audience. We build for that bar from the start.",
    primaryServices: ["brand-systems", "web-architecture", "operator-reporting"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Ontario",
    regionCode: "ON",
    country: "Canada",
    postalPattern: "L-prefix postal codes (L4T through L5W)",
    blurb:
      "Mississauga sits at the intersection of GTA-wide search demand and a dense local-business directory ecosystem. Listings infrastructure and local SEO drive a disproportionate share of pipeline.",
    context:
      "The market rewards operators who run NAP-consistent listings, ranked Google Business Profiles, and local-pack-eligible service pages. We run the discipline that keeps those signals strong.",
    primaryServices: ["listings-infrastructure", "search-dominance", "reputation-operations"],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Ontario",
    regionCode: "ON",
    country: "Canada",
    postalPattern: "L-prefix postal codes (L8E through L9C)",
    blurb:
      "Hamilton's growing service economy is increasingly searched in the same surfaces as Toronto, but with less competitive saturation. The opportunity is to build a defensible search footprint before the rest of the market catches up.",
    context:
      "We design the listings, content silos, and review pipelines that compound. Programs launched in Hamilton today are designed to hold their position when GTA spillover competition arrives.",
    primaryServices: ["search-dominance", "listings-infrastructure", "social-operations"],
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "Ontario",
    regionCode: "ON",
    country: "Canada",
    postalPattern: "L-prefix postal codes (L6P through L7A)",
    blurb:
      "Brampton's diverse business base and rapid population growth make it a high-leverage market for operators willing to run a real local-SEO program - not a templated checklist.",
    context:
      "We build per-service, per-area pages with verified NAP, local schema, and reviewed content. The goal is local-pack and organic occupancy on the queries that drive bookings.",
    primaryServices: ["listings-infrastructure", "search-dominance", "paid-acquisition"],
  },
];

export const getCityBySlug = (slug: string): City | undefined =>
  CITIES.find((c) => c.slug === slug);
