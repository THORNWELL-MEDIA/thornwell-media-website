# Thornwell Media — Design Research

**Vertical:** B2B marketing agency, subsidiary of a private holdings group.
**Reference set:** Pentagram, &Walsh, Athletics NYC, Anomaly, Wolff Olins, Instrument, COLLINS.
**Brand voice (per Element 11):** Operator-grade. Direct. Documented.

The design has to read as **editorial, restrained, and confident** — the visual equivalent of "operator-grade." Think private-equity-meets-design-studio: dense type, generous whitespace, dignified imagery, no decoration for decoration's sake.

---

## What top-tier agency sites do

### Pentagram (pentagram.com)
- Massive editorial type; serif display headlines (50–80px+) carry the weight
- Dense, image-led case-study grid below the hero — the work itself is the content
- Black + white + occasional accent; very little ornament
- Dates and partner credits in monospace tabular type
- Sticky compact navigation; wordmark only — confident enough to not over-brand the chrome
- **Takeaway:** lean into typography hierarchy and let the work speak. Use serif for editorial moments.

### &Walsh (andwalsh.com)
- Animated, color-saturated hero (we won't go this direction — different brand voice) but...
- Very strong section labels: numbered, capitalized, tabular spacing
- Multi-column case-study grids with caption-style metadata (CLIENT · YEAR · DISCIPLINE)
- **Takeaway:** numbered section markers + small all-caps labels with letter-spacing — borrow.

### Athletics NYC (athletics.nyc)
- Reductive black-and-white scheme, grid-based, minimal motion
- Long-form scroll, generous vertical rhythm
- Project tiles use uniform aspect ratios with overlay captions
- **Takeaway:** restraint, vertical rhythm, image discipline.

### Anomaly (anomaly.com)
- Clean wordmark-led nav, black-on-cream warm palette
- Bold positioning statement first; supporting context after
- "What we do" framed as a manifesto, not a list
- **Takeaway:** lead with positioning, use a manifesto tone.

### Wolff Olins (wolffolins.com)
- Editorial article-style sections; large pull quotes
- Numbered process / methodology blocks
- **Takeaway:** numbered "method" blocks reinforce the operator-grade promise.

### Instrument (instrument.com)
- Subtle entrance animations (fade-up, staggered reveal)
- Hover states are slow and deliberate (300–500ms)
- **Takeaway:** motion is a tool, not a flourish — subtle, slow, deliberate.

### COLLINS (collins.studio)
- Very large display type in a serif
- Tight letter-spacing on headlines
- Lots of negative space
- Case studies with full-bleed editorial photography
- **Takeaway:** serif display + negative space = gravitas.

---

## Common patterns across the leading set

| Pattern | How it's used | Apply to Thornwell |
|---|---|---|
| Hero | Big positioning statement, no stock image, restrained or no imagery | Editorial split: serif headline + KPI proof card |
| Section labels | Small caps, letter-spaced, often numbered ("01 — Capabilities") | Use throughout — fits "operator-grade" voice |
| Capabilities | Listed as a manifesto OR a tabular breakdown, never card-spam with icons | Tabular list on home + grid on /services |
| Process | Numbered 03–04 block with short prose | Use this for "How we operate" |
| Social proof | Client logos as a quiet wall-of-trust OR named case studies; never fake testimonials | Use a "portfolio brands" wall (Rothenbury Group + flagged subsidiaries) — but **respect Section 7.5 consent** |
| Footer | Tall, serif/large brand mark, NAP-style address block, sitemap, fine print | Already strong direction in current build — refine |

---

## Color & type direction

### Palette (anchored on brand book Element 6 placeholder values, refined)

| Token | Hex | Usage |
|---|---|---|
| `ink` (primary) | `#0A1530` | Background for hero, footer, deep dark surfaces |
| `navy-deep` | `#0F1E3D` | Headings, primary brand surface |
| `navy-mid` | `#162648` | Subtle navy accent for borders on dark surfaces |
| `gold` | `#C9A96E` | Accent color, eyebrows, hover underlines |
| `gold-soft` | `#D9BC85` | Hover gold |
| `paper` | `#F8F6F1` | Warm background — replaces the cold `#F9FAFB`; gives editorial warmth |
| `paper-deep` | `#EFEAE0` | Borders on paper sections |
| `slate-graphite` | `#1F2937` | Body text on light |
| `slate-quiet` | `#6B7280` | Captions, metadata |

**Rationale for `paper`:** the cold slate-50 on the current build undermines the editorial feel. Warm cream (Anomaly, Pentagram) reads more refined and pairs better with deep navy + gold.

### Typography
- **Display (serif):** Newsreader 600 weight, tight tracking, used for H1 and editorial moments. Already loaded.
- **UI (sans):** Inter 400/500/600/700. Already loaded.
- **Mono (caption):** JetBrains Mono — add. Use for section numbers, tabular metadata, dates.
- Hierarchy:
  - Display H1: 56–80px, `Newsreader 600`, `letter-spacing -0.02em`, `line-height 1.05`
  - H2: 36–48px, `Newsreader 600` OR `Inter 600` — context-dependent
  - H3: 22–24px, `Inter 600`
  - Body: 17–18px, `Inter 400`, line-height 1.65
  - Eyebrow: 11–12px, `Inter 600`, all caps, `letter-spacing 0.18em`
  - Section number: 13px, `JetBrains Mono`, e.g. "01 / Capabilities"

---

## Imagery strategy

### Unsplash URL pattern
`https://images.unsplash.com/photo-{photoid}?w={width}&q={quality}&auto=format&fit=crop`

### Curated photo IDs (Unsplash, royalty-free, verified URLs)
- `photo-1486406146926-c627a92ad1ab` — corporate boardroom Toronto-style (hero)
- `photo-1497366216548-37526070297c` — modern empty boardroom
- `photo-1497366754035-f200968a6e72` — open office
- `photo-1521737604893-d14cc237f11d` — collaborative meeting
- `photo-1515378791036-0648a3ef77b2` — laptop + analytics
- `photo-1517048676732-d65bc937f952` — team meeting
- `photo-1542744173-8e7e53415bb0` — analytics screens
- `photo-1551836022-d5d88e9218df` — desk + planning
- `photo-1497215728101-856f4ea42174` — corporate desk
- `photo-1559136555-9303baea8ebd` — boardroom
- `photo-1454165804606-c3d57bc86b40` — analytics dashboards
- `photo-1556761175-5973dc0f32e7` — strategy meeting

We'll standardize on a **muted, desaturated treatment** to keep imagery from competing with the type — apply via CSS overlay (navy/10 + grayscale-25%) on top of all hero/section imagery.

---

## Components to add

| Component | Purpose | Pattern reference |
|---|---|---|
| `<Container>` | Replaces `container-prose` everywhere; consistent gutter handling | Pentagram |
| `<Section>` | Standardized section wrapper with eyebrow + numbered label + heading slot | Wolff Olins |
| `<Reveal>` | Framer Motion fade-up on scroll for primary headings and section blocks | Instrument |
| `<Button>` (variants) | primary, secondary, ghost, outline-on-dark — replaces ad-hoc `btn-primary` classes | All |
| `<EditorialHero>` | Full-bleed dark hero with serif headline + side proof card + image gradient | Pentagram + COLLINS |
| `<MarqueeRule>` | Top-edge rule with eyebrow + section number (`01 / Capabilities`) | &Walsh |
| `<CapabilitiesTable>` | Tabular list of services, alternating row hover, replaces card grid on home | Pentagram |
| `<MethodSteps>` | Numbered 4-step process block with serif numerals | Wolff Olins |
| `<StatsBar>` | Quiet trust strip — only verifiable, principle-based stats (e.g., "Friday reports, every week") | Generic refined |
| `<PortfolioMarquee>` | Quiet wall of "operates inside the Rothenbury Group portfolio" — placeholder until 7.5 consent | Anomaly |
| `<FAQAccordion>` | Disclosure-based accordion for service-detail FAQs (replaces always-open dl) | shadcn-style |
| `<EditorialCTABanner>` | Replaces current CTASection — full-bleed serif + paired CTAs | COLLINS |

---

## Hard constraints honored

- **No fabricated facts.** No invented client counts, ratings, awards, or testimonials. Trust signals will be principle-based ("Friday reports, weekly", "Documented programs", "Client-owned credentials") rather than fabricated metrics.
- **Section 7.5 (portfolio use).** All references to subsidiary brands are stubbed with `[REQUIRES SECTION 7.5 WRITTEN CONSENT]` markers, not paraded as case studies.
- **Section 3.9 (founder content).** No Nathan-referencing content. Leadership section stays placeholder.
- **NAP placeholders rendered as-is.** The site continues to surface `[TBD - Phone]` etc. — we are not silently faking confirmed values.
- **Color & type fidelity.** No `figma-extracted.md` exists in this brand directory; we're operating on the brand-book Element 6 + 7 placeholder palette/typeface, refined per the rationale above.

---

## Components NOT to build

- Hero image carousels (cliché, lowers perceived quality)
- Testimonial carousels (we have no testimonials to ship)
- "Trusted by 500+ companies" stat blocks (fabricated — would violate the no-fake-facts rule)
- Live chat widgets (don't fit the operator-brief-first lead capture model)
- Floating CTAs / sticky bars (look ad-tech-y)
