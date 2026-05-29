# Thornwell Media, Website Overhaul v2

**Deployed:** 2026-04-29
**Production URL:** https://thornwell-media.vercel.app
**Latest deploy:** https://thornwell-media-aui847e03-sams-projects-e51217e7.vercel.app

---

## 1. Contrast audit (WCAG AA fixes)

Bulk pass via perl to remap all low-opacity text classes that were failing or borderline against their backgrounds:

| Old class | New class | Reason |
|---|---|---|
| `text-graphite/85` `text-graphite/80` `text-graphite/70` `text-graphite/65` | `text-navy-700` (#262626) | All AA on white at any weight |
| `text-graphite` (#1F2937 prior) | `text-navy-800` | Stronger AAA-tier on white |
| `text-quiet` (was #6B7280) | `text-navy-700` | quiet was failing 4.5:1 against `bg-paper-deep`; bumped |
| `text-paper/35` `paper/40` `paper/55` `paper/65` `paper/70` `paper/75` `paper/85` | `text-paper/80–95` | All footer / hero secondary text was failing on dark navy; floor lifted |

Quiet color token itself moved from `#6B7280` to `#525252` (navy-500) in `tailwind.config.ts` so any residual `text-quiet` references still pass AA on white.

Specific fixes by section:
- Footer: legal line, sitemap links, social links, NAP block, hours list now all `text-paper` or `text-paper/90` minimum
- Header: nav links unchanged at `text-navy-900/80`, still AA
- Hero overlay copy: bumped to full `text-paper`
- Eyebrows / section labels: now use `text-saffron-700` on light, `text-saffron-400` on dark, both AA-passing
- Map placeholder helper text: `text-quiet` → `text-navy-700`
- Section number-mono labels: `text-saffron-700` on light, AA passes
- Form `*` required marker: `text-gold-600` → `text-saffron-700`

`globals.css` now exports two utility tokens (`text-ink-soft` #262626, `text-ink-mute` #525252) for any quiet-text use case that needs it, both AA on white.

---

## 2. Em-dash / en-dash purge

**Before:** 78 occurrences across `app/ components/ lib/`.
**After:** 0 occurrences.

Verified with `grep -rE "[—–]" app/ components/ lib/` returns zero hits.

Replacement logic (perl one-liner):
- ` — ` → ` - ` (em-dash with surrounding spaces becomes regular hyphen with spaces)
- ` – ` → ` to ` (en-dash with surrounding spaces becomes "to", correct for time ranges)
- `—` → ` - ` (any remaining em-dash, no spaces)
- `–` → `-` (any remaining en-dash, no spaces)

After the pass, key copy was hand-tuned to swap awkward `, ` for ` - ` or rephrase entirely for the new American-operator voice (see #3).

---

## 3. Tone shift, "American operator. Now serving Canada."

Added a saffron pill chip to every hero (home, about, contact, locations) reading literally **"American operator. Now serving Canada."** as the trust signal.

Voice changes:
- Removed agency-soft phrasing ("we'd be happy to", "tailored brief"). Replaced with operator vocabulary: "ship", "dispatch", "on the clock", "book a working session", "route the brief"
- CTA buttons: "Request a working session" → **"Book a working session"**, "Open a conversation" left only on Contact, all-uppercase tracking-bumped
- Quote block updated: "documented, transferable, and accountable" lost its serial comma in the boilerplate to match the punchier American sentence cadence
- "Find a local strategist" routing copy uses operator-terminal voice: *"Tell us where you operate. We will route the brief to the strategist on the ground in your market, with the documentation already loaded."*

No maple leaves added. No "eh." Polite-Canadian apologetic tone removed where present.

---

## 4. Find a Local Agent widget

New component: `components/ui/AgentFinder.tsx`. Visual-only (no backend); form action routes to `/locations/`.

Mounted on:
- **Home** (`app/page.tsx`) - section #02 "Service routing", saffron-tinted band immediately under the hero
- **Contact** (`app/contact/page.tsx`) - section #02, between hero and the form
- **Locations** (`app/locations/page.tsx`) - section #02, between hero and the city grid

Composition:
- City / postal code input with map-pin glyph in saffron
- Block-shadow "Find" button with hover saffron-fill
- Helper text below: *"Service available across our coverage area. Drop a city or postal code and we will route to the operator on the ground."*
- Decorative grid map preview strip with saffron grid lines and a "Coverage map preview" chip
- Footer link: "Browse all coverage areas" → `/locations/`

Variant prop supports `light` and `dark` mounts (only `light` used so far).

For Thornwell-Media specifically: the widget label is **"Find a local strategist"** (agency vertical). Per the brief's vertical guidance, this aligns to the agency-vs-staffing/SaaS distinction.

---

## 5. Template differentiation, unique design tokens

**`tailwind.config.ts`** is now entirely Thornwell-specific. Same token *names* preserved (navy/gold/paper/ink) so the rest of the site doesn't need a mass rename, but every value remapped:

| Token | Old value | New value |
|---|---|---|
| `ink` | #0A1530 (navy) | **#0A0A0A (true black)** |
| `navy.900` | #0A1530 | **#0A0A0A** |
| `navy.500` | #2C426E | **#525252** (charcoal) |
| `navy.50` | #F5F7FB | **#FAFAFA** |
| `gold.500` | #C9A96E (warm tan) | **#F4A300 (saffron)** |
| `gold.400` | #D9BC85 | **#FFB422 (marigold)** |
| `gold.300` | #E5CFA1 | **#FFCB57** |
| `paper.DEFAULT` | #F8F6F1 (cream) | **#FFFFFF (pure white)** |
| `paper.deep` | #EFEAE0 | **#FAF7F0** |
| `quiet` | #6B7280 | **#525252** (AA-safe) |

New aliases added: `saffron.{300,400,500,600,700}` so future code can use the explicit token name.

**Typography:**
- `font-sans`: Inter Tight 400-800 (was: Inter)
- `font-serif`: **Fraunces variable opsz 9-144, weights 400-900** (was: Newsreader)
- Loaded from Google Fonts in `layout.tsx`
- New display sizes added: `display-3xl` (12rem max clamp), `display-2xl` (9.5rem), Pentagram-scale display posture
- New letterSpacing token `tightest-3` at -0.06em for headline kerning

**Shadow scale:**
- New `shadow-block` (8px 8px 0 #0A0A0A, hard-edge editorial)
- New `shadow-block-saffron` (8px 8px 0 #F4A300)
- New `shadow-editorial` (long, soft, tall)

**Component primitives** in globals.css restyled:
- `.btn` is now zero-radius (was rounded-full), uppercase tracking-[0.06em], heavy 2px borders
- `.card` is now zero-radius (was rounded-2xl), 1px navy-200 border
- `.input` is zero-radius, 2px navy-300 border
- New `.chip` and `.chip-saffron` editorial pills

Net effect: the site now reads as black, white, and saffron. All other Rothenbury sites keep their existing shape; Thornwell is sharply differentiated.

---

## 6. Imagery upgrade

`lib/imagery.ts` extended with **25 new editorial-vertical photo IDs** (added under the v2 editorial expansion comment block):

editorial: editorialMagazine, editorialColor, editorialType, editorialBlackWhite, editorialPrint, editorialPoster
branding: brandingDeck, brandingLogos
campaign: campaignWall, campaignLights, campaignBillboard, campaignStudio
workshop: workshopSaffron, workshopType
newsroom: newsroomEditorial, newsroomDesk
content production: contentProduction, contentVideo, socialContent, influencerStudio
performance: paidCampaign, searchOps, reportingDashboard
city: cityToronto2, cityHighway

Hero on home page swapped to `IMG.editorialBlackWhite`; method section to `IMG.editorialPrint`. About hero retained `IMG.about` (warm bright-office shot) for tonal contrast. Total catalogue: ~70 IDs, 25 are new in v2.

Bridgepoint reference doc / image URLs file did not exist for Thornwell (Bridgepoint-only), so no Pixelpedia substitution applied here.

---

## 7. "Problems we solve" section

New component: `components/ui/ProblemsWeSolve.tsx`. Four problem cards, each followed by an inline "How we solve it" treatment:

1. *Agencies that hide behind retainers* → measure on outputs, Friday reports
2. *Brand assets locked inside vendor accounts* → client-owned identity day one
3. *No documentation. No transferability* → brief, tracker, metrics dictionary
4. *Slow review cycles. Slower deploys* → documented approval workflows, dispatch-style coordination

Mounted on:
- **Home** (`app/page.tsx`) - section #04, between Principles and Capabilities
- **About** (`app/about/page.tsx`) - section #04, between Operating Values and Leadership

Title customized per page (home: "What is broken in agency marketing", about: "The problems we solve").

Visual treatment is bold black-bordered cards on `bg-paper-deep`, with saffron icon tiles, mono problem-number labels in saffron-700, and a navy-200 horizontal rule separating the problem from the resolution. Section bordered top with 2px black so it slabs into the page.

---

## 8. Hard rules, verification

- Brand isolation: zero references to Bridgepoint, MoveSmart, Single PM, Northstone, Rothenbury, Langford, or Revun on any Thornwell page. Verified by reading current home/about/contact/locations files.
- No fabricated stats added. Where prior copy used unsubstantiated tone, it was kept generic (no "X% accuracy" or "X clients" claims). The "Founded 2026 / Programs 10 integrated / Markets 5+ active" stats are derived from `SERVICES.length` and `CITIES.length` so they self-document.
- No Nathan personal-brand content.
- NAP TBD-state preserved with explicit `[TBD - ...]` placeholders, footer / contact / schema unchanged structurally.
- Mobile: hero scorecard panel collapses to full-width below `md:`, AgentFinder grid stacks at `md:`, Problems cards single-column at small sizes. Tested in build only (no manual browser run for this v2 pass).
- Build: `npm run build` succeeded, 32 static pages generated, no TS errors.
- Deploy: `vercel deploy --name thornwell-media --prod --yes` succeeded.

---

## Deployment

**Production:** https://thornwell-media.vercel.app
**Build artifact:** `dpl_Fi16LCqVdmXVtxXNK7TZv4Sx5DDR`
**Inspector:** https://vercel.com/sams-projects-e51217e7/thornwell-media/Fi16LCqVdmXVtxXNK7TZv4Sx5DDR

---

## What was not done in this pass (flagged for next iteration)

- Service detail pages (`/services/[slug]`) inherited the new tokens via Tailwind but were not visually re-composed. They look correct under the new color system but still use the prior layout shape.
- Locations city detail pages (`/locations/[city]`) same as above.
- Programmatic Brand Book delivery, listings submission, social account branding (out of scope, MSA workstream).
- Domain swap when Zak provides it (still TBD per master-data-sheet).
