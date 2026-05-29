# Build Repair Log — Thornwell Media

**Status:** SUCCESS
**Date:** 2026-04-25
**Build command:** `npm run build` (Next.js 14.2.5 static export)

## Error

```
TypeError: Invalid URL
    at new URL (node:internal/url:819:25)
    ...
  code: 'ERR_INVALID_URL',
  input: 'https://[TBD-domain]'
}

> Build error occurred
Error: Failed to collect page data for /_not-found
```

## Root cause

`app/layout.tsx` set `metadataBase` with a guard that only checked
`SITE.url.startsWith("http")`. Since `SITE.url` in `lib/constants.ts` is the
placeholder `"https://[TBD-domain]"` (waiting on the real domain from Zak),
the guard passed but `new URL(...)` rejected the bracketed host as invalid,
crashing page-data collection for `/_not-found`.

## Fix

Tightened the guard in `app/layout.tsx:14` to also reject placeholder URLs
containing a `[`, falling back to `https://example.com` when the domain is
still TBD. No brand content, page, or constant was changed — only the URL
guard logic.

```ts
metadataBase: new URL(
  SITE.url.startsWith("http") && !SITE.url.includes("[") ? SITE.url : "https://example.com",
),
```

When the real domain is provided, updating `SITE.url` in `lib/constants.ts`
will automatically flow through (no further code changes needed).

## Verification

- `npm run build` completes cleanly.
- 32 static pages generated (home, about, blog, careers, contact, franchise,
  locations + 5 city pages, positions, privacy, quote, services + 7 service
  pages, terms, robots.txt, sitemap.xml, _not-found).
- `out/index.html` exists (67 KB).
- `out/404.html` exists.
