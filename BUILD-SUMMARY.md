# Thornwell Media Website — BUILD-SUMMARY

**Generated:** 2026-04-25
**Last redesign:** 2026-04-25 (see `DESIGN-OVERHAUL-COMPLETE.md`)
**Stack:** Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion + Lucide React, static export.
**Production URL:** https://thornwell-media.vercel.app

> **Update 2026-04-25 — Production design overhaul shipped.** The site has been
> rebuilt from a functional scaffold into a production-credible B2B agency site.
> Editorial typography, Unsplash hero imagery, framer-motion reveals, refined
> palette (paper cream + ink navy + gold), and a full UI primitives layer
> (`components/ui/*`). See `DESIGN-OVERHAUL-COMPLETE.md` for the full report.

---

## Total files created: 36

### Config (8)
- `package.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`
- `styles/globals.css`
- `README.md`, `BUILD-SUMMARY.md`

### lib/ (4)
- `lib/constants.ts` — single source of truth for NAP, brand, CTAs, social
- `lib/services.ts` — 10 services from brand-book Element 15 with full copy
- `lib/cities.ts` — 5 Ontario cities (Toronto, Ottawa, Mississauga, Hamilton, Brampton)
- `lib/schema.ts` — Organization, LocalBusiness, WebSite, Breadcrumb, Service, FAQ, City schema generators

### components/ (7)
- `SchemaJsonLd.tsx` — JSON-LD embed wrapper
- `Header.tsx` — sticky nav with phone CTA
- `Footer.tsx` — services + locations + company + legal + NAP block
- `NAPBlock.tsx` — reusable NAP card / footer variant
- `ContactForm.tsx` — client component, console.log only (no backend)
- `ServiceCard.tsx` — service grid card
- `CTASection.tsx` — closing CTA band

### app/ (17 page files)
- `layout.tsx` — root layout with Inter+Newsreader fonts, Org/LocalBusiness/WebSite schema embedded globally, skip-link, header, footer
- `page.tsx` — Home (hero, value prop, ten-program grid, locations strip, trust strip, CTA)
- `about/page.tsx` — About + thesis + operating principles + leadership placeholder + mission
- `contact/page.tsx` — Lead form + NAP card + map placeholder
- `services/page.tsx` — Services overview (10 cards)
- `services/[slug]/page.tsx` — Dynamic per-service page (10 routes from `generateStaticParams`)
- `locations/page.tsx` — City index
- `locations/[city]/page.tsx` — Dynamic per-city page (5 routes from `generateStaticParams`)
- `careers/page.tsx` — Careers landing
- `positions/page.tsx` — Open positions index (2 placeholder roles)
- `franchise/page.tsx` — Partnership / white-label
- `quote/page.tsx` — Operator brief lead capture
- `blog/page.tsx` — Insights index placeholder
- `privacy/page.tsx` — Privacy policy placeholder (PIPEDA/CASL stubs, marked for legal review)
- `terms/page.tsx` — Terms of use placeholder (marked for legal review)
- `sitemap.ts` — Dynamic sitemap.xml generator (static + service + city URLs)
- `robots.ts` — Dynamic robots.txt generator

---

## Pages built (24 unique routes)

| URL | Status |
|-----|--------|
| `/` | Home |
| `/about/` | About |
| `/contact/` | Contact + form |
| `/services/` | Services overview |
| `/services/brand-systems/` | Service detail |
| `/services/web-architecture/` | Service detail |
| `/services/search-dominance/` | Service detail |
| `/services/listings-infrastructure/` | Service detail |
| `/services/social-operations/` | Service detail |
| `/services/paid-acquisition/` | Service detail |
| `/services/reputation-operations/` | Service detail |
| `/services/entity-serp-defense/` | Service detail |
| `/services/operator-reporting/` | Service detail |
| `/services/executive-search-presence/` | Service detail |
| `/locations/` | City index |
| `/locations/toronto/` | City page |
| `/locations/ottawa/` | City page |
| `/locations/mississauga/` | City page |
| `/locations/hamilton/` | City page |
| `/locations/brampton/` | City page |
| `/careers/` | Careers |
| `/positions/` | Positions index |
| `/franchise/` | Partner / white-label |
| `/quote/` | Operator brief |
| `/blog/` | Insights index (placeholder) |
| `/privacy/` | Privacy policy (placeholder) |
| `/terms/` | Terms of use (placeholder) |
| `/sitemap.xml` | Auto-generated |
| `/robots.txt` | Auto-generated |

---

## TBD fields requiring Sam/Zak input before launch

### NAP — every field (`lib/constants.ts`)
- [ ] Street address line 1 + 2
- [ ] City
- [ ] Province / state
- [ ] Postal code
- [ ] Country (currently Canada — confirm vs MSA Section 2.8(b) Panamanian assignment)
- [ ] Phone display + E.164 format + tel: href
- [ ] Domain (proposed: thornwellmedia.com)
- [ ] Email (general, careers, press) — depends on domain
- [ ] Legal entity name
- [ ] Confirm hours of operation (default: M–F 9–6, F 9–5, weekend closed)

### Visual identity
- [ ] Favicon files (16, 32, 48, 96, 192, 512 PNG + ICO + SVG)
- [ ] Apple touch icon 180×180
- [ ] Header / footer logo asset
- [ ] OG / social preview image at `/public/og-image.png`
- [ ] Confirm color palette (currently placeholder navy + gold from brand book)
- [ ] Confirm typography (currently Inter + Newsreader from Google Fonts)

### Content requiring written approval
- [ ] About-page long-form copy (Section 3.9 Nathan-referencing approval)
- [ ] Leadership team page (currently placeholder block)
- [ ] Case studies (gated on Section 7.5 written portfolio-use consent)
- [ ] Position descriptions (currently 2 placeholder roles)
- [ ] Privacy Policy — legal review required
- [ ] Terms of Use — legal review required
- [ ] First insights / blog posts

### Backend integration
- [ ] Wire `ContactForm` to a real submission endpoint (currently `console.log`)
- [ ] Configure GA4 + GTM under tech@revun.com
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools
- [ ] Connect contact form to GHL CRM webhook

### Domain & deployment
- [ ] Register domain
- [ ] Configure DNS to chosen static host
- [ ] Provision SSL
- [ ] Update `SITE.url` in `lib/constants.ts`

---

## Deployment instructions

### Vercel (recommended)

```bash
cd website
npm install
vercel deploy --prod
```

Vercel detects Next.js automatically. With `output: "export"`, the build emits
a static site to `./out` and Vercel serves it from the edge network.

### Netlify

```bash
cd website
npm install
npm run build
netlify deploy --dir=out --prod
```

Or in the Netlify dashboard: build command `npm run build`, publish directory
`out`.

### Any static host (S3 + CloudFront, GitHub Pages, etc.)

```bash
cd website
npm install
npm run build
# Upload contents of ./out to your static host
```

The build is fully static — no runtime, no API routes, no server.

---

## Decisions made during build

- **Jurisdiction = Canadian.** Brand `CLAUDE.md` states "Jurisdiction: Canadian"
  while master-data-sheet flags Panamanian per MSA Section 2.8(b). Built as
  Canadian per the brand brief — flagged for resolution before launch.
- **Service-area cities:** Toronto, Ottawa, Mississauga, Hamilton, Brampton
  (Ontario defaults from build instructions).
- **Brand voice:** "Operator-grade marketing for ambitious holdings" used as
  the lead positioning across every page, sourced from `brand-book-skeleton.md`
  Element 11.
- **CTAs:** primary = "Request a working session", secondary = "Get the
  operator brief" (from Brand Book Element 14).
- **Service taxonomy:** all 10 public service names from Brand Book Element 15
  preserved (Brand Systems, Web Architecture, Search Dominance, etc.).
- **Schema strategy:** Organization + LocalBusiness + WebSite embedded in root
  layout (every page). Per-page schemas (Breadcrumb, Service, FAQ, City) added
  by individual pages.
- **No fabricated facts.** No invented review counts, case studies, client
  logos, awards, or statistics. Trust strip on home is generic; subsidiary case
  studies marked as pending Section 7.5 consent.
- **Form has no backend.** `ContactForm` logs payload to console only. Replace
  with real endpoint before launch.
- **Static export.** Configured `output: "export"` so the site deploys to any
  static host — no Vercel lock-in.

---

## Known issues

1. **Jurisdiction conflict** between brand `CLAUDE.md` (Canadian) and MSA
   Section 2.8(b) (Panamanian) is not resolved. The site is built as Canadian.
   If the Panamanian assignment holds, swap `NAP.address.country` to
   "Republic of Panama" in `lib/constants.ts` and adjust `lib/cities.ts` to
   Panama City + LATAM markets.
2. **Contact form has no backend.** Submissions log to console only. This is
   intentional — no external endpoints were wired per build constraints.
3. **No real analytics.** GA4 / GTM / GSC not configured. Will need
   tech@revun.com identity per Section 3.13 before activation.
4. **Placeholder favicon directory.** No favicon files committed; the head
   tags will return 404 for favicon requests until logo assets land.
5. **All NAP placeholders are visible in the rendered output.** The site will
   display literal `[TBD - ...]` strings in the footer and contact page until
   `lib/constants.ts` is populated. This is intentional — better than silently
   shipping fake data.

---

## How to update NAP once Zak confirms

Single file: `lib/constants.ts`. Replace every `[TBD - ...]` value with the
confirmed input and rebuild. NAP propagates everywhere via the `NAP`,
`SITE`, and `BRAND` constants — no other file edits required.
