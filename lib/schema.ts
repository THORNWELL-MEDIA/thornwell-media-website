import { BRAND, NAP, SITE, SOCIAL } from "./constants";
import type { City } from "./cities";
import type { Service } from "./services";

// Portfolio parent: Rothenbury Group. Thornwell is the independent agency subsidiary.
const PARENT_ORG = {
  "@type": "Organization",
  "@id": "https://rothenbury.com/#organization",
  name: "Rothenbury Group",
  url: "https://rothenbury.com",
};

// Canonical San Jose office per master NAP 2026-05-15.
const THORNWELL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "2150 N. 1st Street, 4th Floor",
  addressLocality: "San Jose",
  addressRegion: "CA",
  postalCode: "95131",
  addressCountry: "US",
};

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: BRAND.name,
  legalName: BRAND.legalName,
  url: SITE.url,
  logo: `${SITE.url}/og-default.png`,
  description: BRAND.positioning,
  address: THORNWELL_ADDRESS,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: NAP.phone.e164,
      contactType: "customer service",
      availableLanguage: ["en"],
      areaServed: ["US", "CA"],
    },
  ],
  parentOrganization: PARENT_ORG,
  sameAs: Object.values(SOCIAL),
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND.name,
  url: SITE.url,
  telephone: NAP.phone.e164,
  email: NAP.email.general,
  description: BRAND.positioning,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${NAP.address.line1} ${NAP.address.line2}`.trim(),
    addressLocality: NAP.address.city,
    addressRegion: NAP.address.region,
    postalCode: NAP.address.postalCode,
    addressCountry: NAP.address.countryCode,
  },
  openingHoursSpecification: NAP.hours
    .filter((h) => h.open !== "Closed")
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
  sameAs: Object.values(SOCIAL),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND.name,
  url: SITE.url,
  publisher: { "@type": "Organization", name: BRAND.name },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: `${SITE.url}${item.url}`,
  })),
});

export const serviceSchema = (svc: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: svc.name,
  name: `${svc.name}, ${BRAND.name}`,
  description: svc.short,
  provider: {
    "@type": "Organization",
    name: BRAND.name,
    url: SITE.url,
  },
  areaServed: {
    "@type": "Country",
    name: NAP.address.country,
  },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
});

export const cityServiceSchema = (city: City) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Marketing Agency",
  name: `${BRAND.name} in ${city.name}`,
  description: city.blurb,
  provider: {
    "@type": "Organization",
    name: BRAND.name,
    url: SITE.url,
  },
  areaServed: {
    "@type": "City",
    name: city.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: city.region,
    },
  },
});
