# Thornwell Media — Design Overhaul Complete

**Date:** 2026-04-25
**Brand:** Thornwell Media (B2B marketing agency, subsidiary of Rothenbury Group)
**Deployment URL:** https://thornwell-media.vercel.app
**Latest deploy:** https://thornwell-media-j4ct0dzpx-sams-projects-e51217e7.vercel.app

---

## Summary of changes

The site went from a functional Next.js scaffold (cold gray + minimal styling) to a production-credible B2B agency design with editorial typography, generous whitespace, motion, and real photography. Every page was rebuilt around a common design system.

### Visual direction
- **Palette pivoted** from cold slate → warm `paper` (#F8F6F1) cream + deep `ink` (#0A1530) navy + gold (#C9A96E). Pentagram/Anomaly-style warmth.
- **Typography upgraded**: Newsreader serif now carries display headlines (clamped 48–80px). JetBrains Mono added for section numbers and metadata. Inter still drives UI.
- **Section grammar** standardized across pages: numbered eyebrow (`01 / Capabilities`) → display headline → supporting paragraph → grid/list.
- **Motion** introduced via Framer Motion: fade-up reveal on scroll, prefers-reduced-motion respected.
- **Real imagery**: full-bleed Unsplash hero photos with vignette overlay on every primary template (home, about, services, locations, contact, careers, etc.).

### Components added (`/components/ui/*`)
- `Container` — single source of truth for page gutters
- `SectionLabel` — numbered eyebrow + rule with light/dark variants
- `Reveal` — Framer Motion fade-up wrapper
- `Mark` — typographically-set "TM" wordmark (replaces text-only header brand)
- `FAQAccordion` — animated disclosure pattern (replaces always-open `<dl>` lists)

### Components redesigned
- `Header` — sticky scroll-aware shell, animated underline nav, mobile menu drawer, bordered phone pill
- `Footer` — full-width CTA strip + 4-column sitemap with NAP icons + AODA/PIPEDA/CASL legal line
- `ServiceCard` — icon + numbered index + arrow-circle hover, lift-on-hover shadow
- `ContactForm` — refined input styling, scope dropdown, success state with serif headline
- `CTASection` — editorial mid-page banner (distinct from footer's closing CTA)

### Pages rebuilt
| Page | Treatment |
|---|---|
| `/` (home) | 7-section editorial layout: hero with KPI proof card → principles → capabilities grid → method (numbered) → portfolio + facts → coverage city tiles → boilerplate quote |
| `/about` | Hero → thesis (split layout with metadata) → 4 values cards → leadership (placeholder, Section 3.9 honored) → mission + "what we do not do" navy block |
| `/services` | Hero → capabilities grid → at-a-glance index table |
| `/services/[slug]` | Hero with service icon → numbered content sections (description, why, what you get, measurement, FAQ accordion) → sticky engagement-model + related-programs aside |
| `/locations` | Hero → city tile grid with full-bleed imagery |
| `/locations/[city]` | Hero → local context narrative → featured programs cards → FAQ accordion → sticky NAP card with hours + service-area block |
| `/contact` | Hero → form (scope dropdown, refined fields) + dark NAP card with hours and map placeholder |
| `/careers` | Hero → "who we hire" 4-card grid → "how to apply" 3-step process |
| `/positions` | Hero → tabular role list with status pills |
| `/franchise` | Hero → 3 engagement structures cards → "who this is for" split |
| `/quote` | Hero → form + dark "what you get back" card |
| `/blog` | Hero → "coming soon" 3-card grid for planned topics |
| `/privacy`, `/terms` | Editorial-numbered legal heroes (kept legal content; reformatted shell) |

### Design tokens (Tailwind)
```ts
colors: {
  ink: "#0A1530",
  navy: { 50…950 }, // full ramp
  gold: { 300, 400, 500, 600, 700 },
  paper: { DEFAULT, deep, edge },
  graphite: "#1F2937",
  quiet:    "#6B7280",
}
fontFamily: { sans: Inter, serif: Newsreader, mono: JetBrains Mono }
fontSize: {
  display-xl: clamp(3rem, 5.5vw + 1rem, 5.5rem),
  display-lg: clamp(2.5rem, 4vw + 0.5rem, 4rem),
  display-md: clamp(2rem, 2.5vw + 1rem, 3rem),
}
```

---

## Competitor sites referenced

- **Pentagram** — large editorial type, generous whitespace, restrained chrome
- **&Walsh** — numbered section labels with letter-spaced metadata
- **Athletics NYC** — reductive grid + image discipline
- **Anomaly** — manifesto-style positioning, warm cream palette
- **Wolff Olins** — numbered method/methodology blocks
- **Instrument** — subtle entrance animations, slow hover transitions
- **COLLINS** — serif display + negative space = gravitas

Full notes in `./DESIGN-RESEARCH.md`.

---

## Imagery

Standardized through `lib/imagery.ts` → `unsplashUrl()` builder:
- `heroBoardroom` (1486406146926) — home hero
- `about` (1497366754035) — about hero
- `strategySession` (1556761175) — services hero
- `cityCanada` (1517090504586) — locations hero
- `cityArchitecture` (1494522855154) — city tile imagery
- `documents` (1450101499163) — quote hero, method section underlay
- `notebook` (1454165804606) — blog hero
- `team` (1559136555) — careers hero
- `workMeeting` (1521737604893) — positions hero
- `heroArchitecture` (1487958449943) — franchise hero
- `contact` (1497215728101) — contact hero

All loaded via `next/image` with `priority` only on hero, `sizes="100vw"`, and `img-treat` CSS filter for desaturation. `unoptimized: true` is preserved (static export requirement).

---

## Hard constraints — honored

- ✅ **No fabricated facts.** No invented client counts, ratings, awards, or testimonials. Trust signals are principle-based ("Friday reports, weekly", "Documented programs", "Client-owned credentials").
- ✅ **Section 7.5 (portfolio use) respected.** Subsidiary case studies are explicitly marked "pending Section 7.5 written portfolio-use consent" — never paraded.
- ✅ **Section 3.9 (Nathan / founder content) respected.** Leadership section is a placeholder labeled `[REQUIRES NATHAN APPROVAL — Section 3.9]` with stripe-gold filler tiles and no biographical content.
- ✅ **Real NAP everywhere** — pulled from `lib/constants.ts`. Continues to surface `[TBD - …]` strings until Zak provides values (no silent fakes).
- ✅ **Color & font fidelity** — built directly on Brand Book Element 6 + Element 7 placeholder palette/typography. No `figma-extracted.md` exists in this brand directory; ready to swap in confirmed tokens once Nathan/Zak approve.
- ✅ **Performance** — all images via `next/image`, hero is `priority`, body images lazy by default. Static export to `out/` succeeds clean (32 pages).

---

## Build output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    540 B           149 kB
├ ○ /about                               540 B           149 kB
├ ○ /blog                                193 B          99.9 kB
├ ○ /careers                             540 B           149 kB
├ ○ /contact                             2.2 kB          103 kB
├ ○ /franchise                           541 B           149 kB
├ ○ /locations                           540 B           149 kB
├ ● /locations/[city]                    145 B           152 kB  (5 cities)
├ ○ /positions                           194 B          99.9 kB
├ ○ /privacy                             140 B          87.4 kB
├ ○ /quote                               2.19 kB         103 kB
├ ○ /services                            540 B           149 kB
├ ● /services/[slug]                     145 B           152 kB  (10 services)
└ ○ /terms                               139 B          87.4 kB
+ First Load JS shared by all            87.3 kB
```

32 static pages generated. All return 200 in local smoke test (`npx serve out`).

---

## Known TBD items

### Brand assets still pending
- **Logo files** — currently rendering typographic "TM" monogram via `<Mark />`. Replace with real wordmark/mark assets once delivered.
- **Favicon set** — 16/32/48/96/192/512 PNG + ICO + SVG. Apple touch icon 180x180. None committed.
- **OG image** — `/public/og-image.png` placeholder. Build a 1200x630 social card with brand mark + tagline.
- **Real photography** — Unsplash imagery is a credible placeholder layer. Commission portrait + workspace photography once budget approved.

### Content awaiting approval
- **Leadership team page** (Section 3.9) — placeholder block with stripe-gold filler. Awaits Nathan-approved bios/headshots.
- **Real testimonials** — currently no fake testimonials shown (correct). Add a testimonials section to home + service pages once Section 7.5 portfolio-use consent is on file for at least one Rothenbury subsidiary.
- **Case studies** — same gating. The portfolio section on home currently surfaces facts (parent, voice, reporting cadence) instead of case files.
- **Bios** for executive profiles, partner contacts, etc.

### Backend & integrations
- **Contact/quote forms** still log to `console`. Wire to GHL webhook or `/api/contact` once endpoint exists.
- **GA4 / GTM / GSC / Bing** — none configured yet (per Section 3.13, must use `tech@revun.com` identity).
- **Map embed** on contact page is a stripe-gold placeholder. Insert Google Maps iframe once registered address is finalized.

### NAP — single source of truth at `lib/constants.ts`
- Address line 1 / 2 / city / region / postal code — all `[TBD - …]`
- Phone display + e164 + tel-href — `[TBD]`
- Domain — `[TBD-domain]`
- Email addresses (general, careers, press) — `[TBD-domain]`
- Country still set to "Canada" — **flagged**: MSA Section 2.8(b) assigns Panamanian NAP. Resolve before launch.

---

## Files added/modified

### Added
- `DESIGN-RESEARCH.md` — competitor research + design direction
- `DESIGN-OVERHAUL-COMPLETE.md` — this file
- `lib/cn.ts` — Tailwind merge helper
- `lib/imagery.ts` — Unsplash photo IDs + URL builder
- `lib/service-icons.ts` — service slug → Lucide icon map
- `components/ui/Container.tsx`
- `components/ui/SectionLabel.tsx`
- `components/ui/Reveal.tsx`
- `components/ui/Mark.tsx`
- `components/ui/FAQAccordion.tsx`

### Rewritten
- `tailwind.config.ts` (full token overhaul + display fontSize clamps)
- `styles/globals.css` (component layer rebuilt: btn variants, card variants, input, hero-vignette, stripe-gold, etc.)
- `app/layout.tsx` (Newsreader optical-size axis + JetBrains Mono added)
- `app/page.tsx` (home — full editorial layout)
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/services/[slug]/page.tsx`
- `app/locations/page.tsx`
- `app/locations/[city]/page.tsx`
- `app/contact/page.tsx`
- `app/careers/page.tsx`
- `app/positions/page.tsx`
- `app/franchise/page.tsx`
- `app/quote/page.tsx`
- `app/blog/page.tsx`
- `app/privacy/page.tsx` (hero shell only — legal content preserved)
- `app/terms/page.tsx` (hero shell only — legal content preserved)
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/CTASection.tsx`
- `components/ServiceCard.tsx`
- `components/ContactForm.tsx`

### New dependencies
- `framer-motion` — entrance animations + accordion
- `lucide-react` — icon library
- `clsx` + `tailwind-merge` — className composition

---

## Deployment

Production deployed to Vercel at:

- **Alias (stable):** https://thornwell-media.vercel.app
- **Latest deployment:** https://thornwell-media-j4ct0dzpx-sams-projects-e51217e7.vercel.app

Re-deploy command:
```
cd website && vercel deploy --prod --yes
```
