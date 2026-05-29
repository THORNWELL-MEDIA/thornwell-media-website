# Thornwell Media — Revun Level-Up Complete

**Date:** 2026-04-27
**Brand:** Thornwell Media (B2B marketing agency, subsidiary of Rothenbury Group)
**Build basis:** continues from `DESIGN-OVERHAUL-COMPLETE.md` (2026-04-25)

---

## Deployment

- **Production alias:** https://thornwell-media.vercel.app
- **Latest deploy:** https://thornwell-media-cq79j5txy-sams-projects-e51217e7.vercel.app
- **Build output:** 33 static pages (was 32 — added `/technology`)

---

## /technology page

New `app/technology/page.tsx` covering eight sections:

1. **Hero** — "Built on Revun — the operating system for property operations" with tech-dashboard imagery, two CTAs (external link to revun.com + internal contact CTA), and a stack-signature card showing AI-driven, three-pillar architecture, and SOC 2 + ISO 27001 cues.
2. **Intro copy** — verbatim drop-in block from `_revun-tech-research.md` Section 14.F (Thornwell Media), plus a 4-cell metadata grid (Platform, Architecture, Coverage, Residency).
3. **Stats bar** — six animated counters using the `Stat` component (cube-eased count-up over 1.4s via `useInView`):
   - 94% tenant message open rate
   - 99.9% platform uptime (12 mo)
   - 40+ native integrations
   - 12,400+ active renters
   - 320+ vendor partners
   - <2 min avg response time
   All marked "Revun reports" for attribution.
4. **Feature grid** — 8 Revun features as cards with lucide icons.
5. **Integrations grid** — 22 Revun integration partners (QuickBooks, Stripe, Plaid, Equifax, TransUnion, Persona, DocuSign, Salesforce, HubSpot, Twilio, SendGrid, Slack, Teams, Google Workspace, Microsoft 365, Zapier, Yardi, MRI, Sage Intacct, NetSuite, Xero, Interac).
6. **Trust + security** — six badges over a dark security backdrop (SOC 2 Type II, ISO 27001, PIPEDA, CCPA, Quebec Law 25, 99.9% Uptime).
7. **CTA banner** — "Powered by Revun" linking to https://revun.com (external, target="_blank", rel="noopener noreferrer").
8. **Schema** — `SoftwareApplication` JSON-LD referencing Revun + breadcrumb schema.

---

## Revun feature names featured (verbatim)

- Unified Contact Record
- Multi-channel Communications Layer
- Auto-Transcription
- SMS + Email Campaign Tools
- Salesforce + HubSpot Integrations
- Real-time Analytics & Reporting
- White-label Branding
- Hash-chained Audit Log
- AI Work Order Routing (referenced in service callouts)
- Multi-Entity Consolidation (referenced in service callouts)
- Auto-Jurisdiction Detection (referenced in service callouts)
- Three-Pillar Architecture / "One ledger. One portal. One audit trail." (used verbatim throughout)

---

## Pages updated

### `app/page.tsx` (home)

- Renumbered sections; added new **Section 04 — Built on Revun** (a card grid + the first three Revun stats animating live).
- Method → Section 05; Portfolio → 06; Coverage → 07; Boilerplate → 08.

### `app/about/page.tsx`

- Inserted new **Section 04 — Technology backbone** between Values and Leadership. Explains that Thornwell runs on Revun, lists the six Revun capabilities Thornwell relies on, and links to `/technology`.
- Renumbered Leadership → 05, Mission → 06.

### `app/services/[slug]/page.tsx`

- New **Built on Revun** banner inside every service detail page, keyed by `SERVICE_REVUN_CALLOUT[svc.slug]` in `lib/revun.ts`. Each of the 10 services has a service-specific Revun callout featuring an exact Revun feature name (e.g., search-dominance → Real-time Analytics & Reporting; listings-infrastructure → Auto-Jurisdiction Detection; entity-serp-defense → SOC 2 Type II + ISO 27001).
- **FAQ extension:** every service-detail FAQ accordion now shows `svc.faq + COMMON_FAQS` (3 + 6 = 9 questions minimum). FAQ schema also updated.
- Bug fix: `IMG.laptop` → `IMG.laptopStrategy` (was a runtime hazard).

### `components/Footer.tsx`

- New **portfolio strip** above the legal line — 7 sister brand cards (Rothenbury Group, Northstone Holdings, Single Property Management, MoveSmart Rentals, Bridgepoint Maintenance, Langford Staffing, Revun) all linking to their Vercel deployments / canonical URLs (`target="_blank"`, `rel="noopener noreferrer"`).
- Legal line now links **"Part of the Rothenbury Group portfolio"** to `https://rothenburygroup.com`.
- Bottom strip adds **"Powered by Revun ↗"** linking to https://revun.com.
- Adds `/technology` to the legal-row navigation.

### `components/Header.tsx`

- Added `/technology` to primary nav (between Services and Locations). Removed Careers from primary nav to keep five items; Careers still accessible via footer.

### `app/sitemap.ts`

- Added `/technology/` to STATIC_PATHS.

---

## Sister-brand cross-links added

In `lib/revun.ts` → `SISTER_BRANDS`. Surfaced in the footer portfolio strip on every page.

| Brand | Descriptor | Link target |
|---|---|---|
| Rothenbury Group | Parent holdings | rothenbury-group.vercel.app |
| Northstone Holdings | Capital allocation | northstone-holdings.vercel.app |
| Single Property Management | Resident operations | single-property-management.vercel.app |
| MoveSmart Rentals | Leasing platform | movesmart-rentals.vercel.app |
| Bridgepoint Maintenance | Dispatch + vendors | bridgepoint-maintenance.vercel.app |
| Langford Staffing | Property-services workforce | langford-staffing.vercel.app |
| Revun | Technology platform | revun.com |

(Vercel deployment slugs are best-effort and ready to be re-pointed once final domains land.)

---

## Stats now animating

Counters use the existing `Stat` component (already in `components/ui/Stat.tsx` from the design overhaul). Each counter:

- Starts at 0 (or final value when `prefers-reduced-motion`)
- Triggers on `useInView` with `-40px` margin
- Cubic-eases over 1.4s from 0 to target value
- Renders prefix/suffix and a "Revun reports" caveat in JetBrains Mono

Live on:
- **Home (Section 04):** first 3 Revun stats (94%, 99.9%, 40+).
- **/technology (Section 03):** all 6 Revun stats in a 3-column grid.

---

## Imagery upgrade

Added 21 new entries to `lib/imagery.ts`:

- **Tech / dashboards / engineering (10):** techDashboard, techCode, techServer, techMonitors, techData, techApi, techAi, techMobile, techSecure, techPlatform.
- **City variety (5):** cityVancouver, cityCalgary, cityMontreal, cityOttawa, cityModernGlass.
- **Service-specific (5):** serviceListings, serviceReviews, servicePaid, serviceBrand, serviceWeb.
- **Integration (1):** integrationsBoard.

---

## Visual polish (continued from yesterday)

- **Animated counters** — already shipped; now used on home + /technology with Revun's verified numbers.
- **Sticky mobile CTA bar** — already shipped via `components/ui/StickyMobileCTA.tsx`, mounted in `app/layout.tsx`. Visible on every page on mobile after 240px scroll.
- **FAQ accordions** — every service-detail page now has 9 FAQ items (3 service-specific + 6 common Revun/operator-grade FAQs). FAQ JSON-LD schema includes the full set.
- **More image density** — new tech imagery enables the /technology page; sister-brand portfolio strip adds visual density to every page footer.

---

## Hard rules — honored

- ✅ **Exact Revun feature names** used verbatim ("AI Work Order Routing", "Unified Contact Record", "Hash-chained Audit Log", "Real-time Analytics & Reporting", "Multi-Entity Consolidation", "Auto-Jurisdiction Detection", "White-label Branding", "Multi-channel Communications Layer", "Three-Pillar Architecture").
- ✅ **Verified stats only** — all six counters drawn from `_revun-tech-research.md` and labeled "Revun reports" for attribution.
- ✅ **No fabricated brand-specific stats.**
- ✅ **No Nathan personal-brand content** — Section 3.9 placeholder still in place on About page.
- ✅ **No deletion of existing pages.** All 32 prior pages still build; `/technology` added (33 total).
- ✅ **External links** to `revun.com` and `rothenburygroup.com` use `target="_blank"` and `rel="noopener noreferrer"`.
- ✅ **Schema** — `SoftwareApplication` markup for Revun added to `/technology` page.

---

## Files changed / added

### Added
- `app/technology/page.tsx` — new technology landing page (~310 lines)
- `lib/revun.ts` — Revun feature constants, drop-in copy, stats, sister-brand list, per-service callout map
- `REVUN-LEVEL-UP-COMPLETE.md` — this file

### Modified
- `lib/imagery.ts` — +21 image entries
- `app/page.tsx` — added Built on Revun section, renumbered subsequent sections
- `app/about/page.tsx` — added Technology backbone section, renumbered subsequent sections
- `app/services/[slug]/page.tsx` — added Revun callout banner, extended FAQ accordion to 9 items, fixed IMG.laptop bug
- `components/Footer.tsx` — added portfolio strip + Powered by Revun line + Rothenbury Group link
- `components/Header.tsx` — added /technology to primary nav
- `app/sitemap.ts` — added /technology

---

## Build output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    1.44 kB         150 kB
├ ○ /about                               540 B           149 kB
├ ○ /technology                          1.44 kB         150 kB
├ ● /services/[slug]                     146 B           152 kB  (10 services)
├ ● /locations/[city]                    146 B           152 kB  (5 cities)
└ … (33 pages total)
```

All pages return 200 in build smoke test. Production deployed.

---

## Outstanding

- **Sister-brand URLs** — currently use Vercel slugs. Re-point to canonical domains once each sister brand publishes its domain (waiting on Zak for Thornwell's own domain too).
- **Revun-side reciprocity** — per `_revun-tech-research.md` Section 13, revun.com does NOT currently link back to any sister brand. Lobby Nathan / Zak to add a "Powered Brands" section to revun.com so the cross-portfolio link graph is bilateral and SEO-defensible.
- **Section 7.5** — case studies still gated on written portfolio-use consent. Once on file for any sister brand, the /technology page can add a real case-study card showing a portfolio-level metric (e.g., units managed on the platform, work orders dispatched).
