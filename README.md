# Thornwell Media — Website

Next.js 14 (App Router) + Tailwind CSS marketing site for Thornwell Media,
the in-house marketing operator inside the Rothenbury Group portfolio.

Static-export configured (`output: "export"`) so the build deploys to any
static host (Vercel, Netlify, S3+CloudFront, etc.).

---

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # static export to ./out
```

The build output lands in `./out`. Deploy that directory to any static host.

### Vercel

```bash
cd website
vercel deploy
```

Vercel auto-detects Next.js and serves `./out` as a static deployment.

### Netlify

```bash
cd website
netlify deploy --dir=out --prod
```

Or connect the repository in the Netlify dashboard with `npm run build` as
build command and `out` as publish directory.

---

## Project structure

```
website/
├── app/                  Routes and pages (App Router)
├── components/           Shared React components
├── lib/                  NAP, services, cities, schema generators
├── styles/globals.css    Tailwind base + custom utilities
├── public/               Static assets (favicon, images)
├── next.config.mjs       Static-export config
├── tailwind.config.ts    Tailwind theme (navy + gold palette)
└── tsconfig.json
```

---

## TBD checklist — required before launch

The site is built but several fields are placeholders. None of the items below
should ship live without explicit written confirmation from Zak/Nathan.

### NAP (in `lib/constants.ts`)
- [ ] Street address — `NAP.address.line1`
- [ ] Suite / unit — `NAP.address.line2`
- [ ] City — `NAP.address.city`
- [ ] Province — `NAP.address.region`
- [ ] Postal code — `NAP.address.postalCode`
- [ ] Country — currently `Canada`; confirm vs MSA Section 2.8(b) Panamanian assignment
- [ ] Phone display + E.164 + tel: href — `NAP.phone.*`
- [ ] Domain — replace every `[TBD-domain]` reference (`SITE.url`, `SITE.domain`, `NAP.email.*`)
- [ ] Legal entity name — `BRAND.legalName`

### Hours
- [ ] Confirm Mon–Fri 9-6 / Fri 9-5 / weekend closed (`NAP.hours`) is correct

### Domain & deployment
- [ ] Register domain (proposed: thornwellmedia.com)
- [ ] Configure DNS to point to chosen static host
- [ ] Provision SSL certificate
- [ ] Update `SITE.url` in `lib/constants.ts` to the production domain

### Visual identity
- [ ] Logo files (favicon, apple-touch-icon, header logo, social avatars)
- [ ] Real color palette (currently using placeholder navy + gold)
- [ ] Real typography decision (currently Inter + Newsreader from Google Fonts)
- [ ] OG image / social preview image at `/public/og-image.png`

### Content requiring written approval
- [ ] About page — long-form copy and leadership team section
- [ ] All Nathan-referencing or Rothenbury-portfolio-referencing content (Section 3.9)
- [ ] Case studies (gated on Section 7.5 written portfolio-use consent)
- [ ] Position descriptions on `/positions/` (currently placeholder)
- [ ] Privacy Policy and Terms of Use — require legal review

### Backend integration
- [ ] Wire `ContactForm` submission to a real endpoint (currently `console.log`)
- [ ] Configure GA4 (under tech@revun.com)
- [ ] Configure Google Tag Manager
- [ ] Submit sitemap to Google Search Console + Bing Webmaster Tools

### Per-page launch gate (Section 3.3(d))
For every page, confirm:
- (i) Live at production domain
- (ii) HTTPS with valid TLS
- (iii) Indexable
- (iv) Submitted to GSC + Bing Webmaster
- (v) Returns crawlable HTML with correct schema
- (vi) Logged in Master Launch Tracker

---

## Notes / decisions made during build

- **Jurisdiction:** built as Canadian per brand `CLAUDE.md`. MSA Section 2.8(b)
  assigns Thornwell to the Panamanian-NAP set. Resolve before launch — see
  `../risk-register.md` and `../master-data-sheet.md`.
- **Service-area cities:** Toronto, Ottawa, Mississauga, Hamilton, Brampton.
  Adjust in `lib/cities.ts` if Panamanian framing is confirmed.
- **No fabricated claims.** No invented review counts, case studies, client logos,
  or statistics. Everywhere a specific number would normally appear, the copy is
  generic or marked TBD.
- **No backend.** Contact form logs to console only. Wire to a real endpoint
  before launch.
- **Schema markup** is generated from `lib/schema.ts` and embedded in every page
  via the `SchemaJsonLd` component. The root layout embeds Organization,
  LocalBusiness, and WebSite schemas globally.
