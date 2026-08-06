// Single source of truth for NAP and brand constants.

export const BRAND = {
  name: "Thornwell Media",
  shortName: "Thornwell",
  legalName: "Thornwell Media",
  tagline: "We build editorial-grade brand systems for operating companies that hold for decades, not deal cycles.",
  positioning:
    "An independent creative agency for operating companies. Brand books, content engines, search systems, and lead pipelines built to compound across decades of ownership, not the next campaign cycle.",
  voice: "Senior. Considered. On the record.",
} as const;

export const NAP = {
  name: "Thornwell Media",
  address: {
    line1: "2150 N. 1st Street",
    line2: "4th Floor",
    city: "San Jose",
    region: "CA",
    postalCode: "95131",
    country: "United States",
    countryCode: "US",
  },
  phone: {
    display: "+1 (866) 444-3931",
    e164: "+18664443931",
    href: "tel:+18664443931",
  },
  email: {
    general: "hello@thornwellmedia.com",
    careers: "careers@thornwellmedia.com",
    press: "press@thornwellmedia.com",
  },
  hours: [
    { day: "Monday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: "Closed", close: "" },
    { day: "Sunday", open: "Closed", close: "" },
  ],
} as const;

export const SITE = {
  url: "https://www.thornwellmedia.com",
  domain: "thornwellmedia.com",
  defaultLocale: "en-CA",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/thornwellmedia",
  facebook: "https://www.facebook.com/thornwellmedia",
  instagram: "https://www.instagram.com/thornwellmedia",
  x: "https://x.com/thornwellmedia",
  youtube: "https://www.youtube.com/@thornwellmedia",
  tiktok: "https://www.tiktok.com/@thornwellmedia",
  pinterest: "https://www.pinterest.com/thornwellmedia",
  threads: "https://www.threads.net/@thornwellmedia",
  bluesky: "https://bsky.app/profile/thornwellmedia.bsky.social",
} as const;

export const CTAS = {
  primary: { label: "Request a brief", href: "/contact/" },
  secondary: { label: "See how we work", href: "/quote/" },
  contact: { label: "Start a conversation", href: "/contact/" },
  careers: { label: "Apply to work with us", href: "/careers/" },
  caseStudy: { label: "Read the case file", href: "/contact/" },
  newsletter: { label: "Get the Quarterly POV", href: "/blog/" },
} as const;
