import type { Metadata } from "next";
import { headers } from "next/headers";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import { BRAND, SITE } from "@/lib/constants";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(
    SITE.url.startsWith("http") && !SITE.url.includes("[") ? SITE.url : "https://example.com",
  ),
  title: {
    default: `${BRAND.name}, ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.positioning,
  alternates: { canonical: "https://www.thornwellmedia.com" },
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: `${BRAND.name}, ${BRAND.tagline}`,
    description: BRAND.positioning,
    locale: SITE.defaultLocale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name}, ${BRAND.tagline}`,
    description: BRAND.positioning,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "tiktok-developers-site-verification": "B25I7G8oabScrGZCIShFP0RSnxkVCmbH",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const isPreview = (h.get("host") || "").endsWith(".vercel.app");
  return (
    <html lang="en-CA">
      <head>
        {isPreview && <meta name="robots" content="noindex, nofollow" />}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&display=swap"
        />
        <SchemaJsonLd data={organizationSchema()} />
        <SchemaJsonLd data={localBusinessSchema()} />
        <SchemaJsonLd data={websiteSchema()} />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WKHVNPTS');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* GA4 fallback gtag.js */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WQF0PCYLXN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-WQF0PCYLXN');`,
          }}
        />
      </head>
      <body className="bg-paper pb-20 lg:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKHVNPTS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-navy-800 focus:shadow"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
