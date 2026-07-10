// Country -> State -> City hub tree derived from the silo bundle.
// NOT engine-generated: this is the presentation-side aggregation that turns
// the flat silo into a hub-and-spoke link graph (homepage -> /locations ->
// state hub -> city hub -> service-in-city). Reads content.json read-only.
import bundle from "@/lib/silo/content.json";

type Page = {
  type: string;
  url: string;
  city: string;
  city_key: string;
  state: string;
  state_abbr: string;
  country?: string;
  service_label?: string;
  service_slug?: string;
};

const PAGES = bundle.pages as Page[];

export function stateSlug(state: string): string {
  return state
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type CityEntry = {
  city: string;
  cityKey: string;
  state: string;
  stateAbbr: string;
  country: string;
  hubUrl: string; // the {city}-{st}-marketing-agency city hub
  serviceCount: number; // service-in-city pages under this city
};

export type StateEntry = {
  state: string;
  stateAbbr: string;
  country: string;
  slug: string;
  cities: CityEntry[];
};

export type CountryEntry = {
  country: string;
  states: StateEntry[];
  cityCount: number;
};

function buildStates(): StateEntry[] {
  const hubs = PAGES.filter((p) => p.type === "city_hub");
  const byState = new Map<string, StateEntry>();

  for (const hub of hubs) {
    const slug = stateSlug(hub.state);
    if (!byState.has(slug)) {
      byState.set(slug, {
        state: hub.state,
        stateAbbr: hub.state_abbr,
        country: hub.country || "United States",
        slug,
        cities: [],
      });
    }
    const serviceCount = PAGES.filter(
      (p) => p.type === "service_in_city" && p.city_key === hub.city_key
    ).length;
    byState.get(slug)!.cities.push({
      city: hub.city,
      cityKey: hub.city_key,
      state: hub.state,
      stateAbbr: hub.state_abbr,
      country: hub.country || "United States",
      hubUrl: hub.url,
      serviceCount,
    });
  }

  const states = Array.from(byState.values());
  for (const s of states) s.cities.sort((a, b) => a.city.localeCompare(b.city));
  states.sort((a, b) => a.state.localeCompare(b.state));
  return states;
}

export const STATES: StateEntry[] = buildStates();

export const COUNTRIES: CountryEntry[] = (() => {
  // Order United States first, then Canada, then anything else alphabetically.
  const order = (c: string) =>
    c === "United States" ? 0 : c === "Canada" ? 1 : 2;
  const byCountry = new Map<string, StateEntry[]>();
  for (const s of STATES) {
    if (!byCountry.has(s.country)) byCountry.set(s.country, []);
    byCountry.get(s.country)!.push(s);
  }
  return Array.from(byCountry.entries())
    .map(([country, states]) => ({
      country,
      states,
      cityCount: states.reduce((n, s) => n + s.cities.length, 0),
    }))
    .sort((a, b) => order(a.country) - order(b.country));
})();

export const TOTAL_CITIES = STATES.reduce((n, s) => n + s.cities.length, 0);

export function getState(slug: string): StateEntry | undefined {
  return STATES.find((s) => s.slug === slug);
}

// The 18 marketing service lines, derived once from the bundle for hub copy.
export const SERVICE_LINES: Array<{ label: string; slug: string }> = (() => {
  const seen = new Map<string, string>();
  for (const p of PAGES) {
    if (p.type === "service_in_city" && p.service_slug && p.service_label) {
      if (!seen.has(p.service_slug)) seen.set(p.service_slug, p.service_label);
    }
  }
  return Array.from(seen.entries())
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.label.localeCompare(b.label));
})();
