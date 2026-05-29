# DECOUPLE-COMPLETE — Thornwell Media

**Date:** 2026-04-28
**Directive:** Strip ALL cross-brand references — Thornwell Media is now positioned as a standalone independent marketing operator.

---

## Final deployment URL

**Production:** https://thornwell-media.vercel.app
**Deployment ID:** dpl_EY6wUx1gpYJsXsfs4Xx35CCThMQy
**Inspect:** https://vercel.com/sams-projects-e51217e7/thornwell-media/EY6wUx1gpYJsXsfs4Xx35CCThMQy

---

## Files deleted

- `app/technology/page.tsx` (full directory `app/technology/` removed) — page was primarily a Revun feature showcase
- `lib/revun.ts` — Revun feature names, stats, integrations, trust badges, sister-brand directory
- `components/ui/LogoStrip.tsx` — typographic strip listing all 7 sister entities

## Files modified

| File | Change |
|------|--------|
| `lib/constants.ts` | Removed `BRAND.parent` field; rewrote `tagline` and `positioning` to drop Rothenbury Group framing |
| `lib/schema.ts` | Removed `parentOrganization` from organization schema |
| `lib/cities.ts` | Toronto blurb no longer references "Rothenbury Group portfolio" |
| `app/layout.tsx` | (no change required — already drives off `BRAND.*` constants) |
| `app/sitemap.ts` | Removed `/technology/` from STATIC_PATHS |
| `app/page.tsx` | Removed entire "TECHNOLOGY — BUILT ON REVUN" section (~90 lines); rewrote PORTFOLIO/TRUST as "Operating standards" with no parent reference; renumbered sections; replaced "Parent" data cell with "Cadence" |
| `app/about/page.tsx` | Hero copy de-Rothenburyed; metadata title/description rewritten; removed entire "TECHNOLOGY BACKBONE" section; removed "REQUIRES NATHAN APPROVAL" gating note (replaced with neutral "Pending leadership approval"); rewrote thesis + mission + stat-grid copy; renumbered sections |
| `app/services/[slug]/page.tsx` | Removed `SERVICE_REVUN_CALLOUT` import + the per-service "Built on Revun" block; rewrote `COMMON_FAQS` to drop every Revun / Rothenbury / portfolio-CRM mention; rewrote "Why operators pick this approach" copy |
| `app/franchise/page.tsx` | Hero copy no longer says "in-house marketing function for the Rothenbury Group portfolio" |
| `app/locations/[city]/page.tsx` | Local-context copy no longer says "the same operator-grade program we run for the Rothenbury Group portfolio" |
| `components/Header.tsx` | Removed `/technology` from `NAV` array |
| `components/Footer.tsx` | Removed entire portfolio strip section (sister-brand link grid); removed "Powered by Revun ↗" link in bottom legal strip; removed "Part of the Rothenbury Group portfolio" attribution; removed "Technology" link in footer-nav row; dropped `SISTER_BRANDS` + `REVUN` imports; dropped reference to `BRAND.parent` in tagline |

---

## Verification grep (per directive)

```
$ grep -r "Revun\|Rothenbury\|Northstone\|Bridgepoint\|MoveSmart\|Thornwell\|Langford\|Single Property" app/ components/ lib/ 2>&1 | grep -v "node_modules\|\.next\|out/"

components/ui/StickyMobileCTA.tsx:          aria-label="Call Thornwell Media"
components/ui/Mark.tsx:        Thornwell Media
components/ContactForm.tsx:          A member of the Thornwell Media team will review it and respond within one
components/ContactForm.tsx:          By submitting, you consent to Thornwell Media contacting you about your
lib/constants.ts:  name: "Thornwell Media",
lib/constants.ts:  shortName: "Thornwell",
lib/constants.ts:  name: "Thornwell Media",
```

**Result:** Clean. All remaining matches are Thornwell Media's own identity (this brand's own name) — exactly what the directive permits ("Exception: if THIS site IS that brand … keep those mentions"). Zero references to Revun, Rothenbury, Northstone, Bridgepoint, MoveSmart, Langford, or Single Property remain.

---

## Build status

`npm run build` ✓ Compiled successfully — 32/32 static pages generated. `/technology` route removed from manifest.

---

## Internal docs note

The pre-existing internal docs (`BUILD-SUMMARY.md`, `DESIGN-OVERHAUL-COMPLETE.md`, `DESIGN-RESEARCH.md`, `REVUN-LEVEL-UP-COMPLETE.md`, `REPAIR-LOG.md`) were left intact. **Cross-brand references in those internal docs are out-of-date as of this 2026-04-28 directive — see this file for current state.**
