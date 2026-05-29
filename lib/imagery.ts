// Curated Unsplash photo IDs for editorial agency imagery.
// All free for commercial use under the Unsplash license.
// Standardized URL builder so the whole site uses one image pipeline.

export type Img = {
  id: string;
  alt: string;
};

export const IMG = {
  // Hero / boardroom / corporate
  heroBoardroom: {
    id: "1486406146926-c627a92ad1ab",
    alt: "Looking up at a financial-district tower under a clear sky",
  },
  heroSkyline: {
    id: "1517048676732-d65bc937f952",
    alt: "Professional team meeting in a modern office",
  },
  heroArchitecture: {
    id: "1487958449943-2429e8be8625",
    alt: "Modern architecture, abstract corporate facade",
  },
  heroEditorial: {
    id: "1497032628192-86f99bcd76bc",
    alt: "Editorial workspace with creative tools and notebooks",
  },
  heroCreative: {
    id: "1542435503-956c469947f6",
    alt: "Creative agency workspace with bold light",
  },

  // Strategy / operating sessions
  workMeeting: {
    id: "1497366216548-37526070297c",
    alt: "Calm corner office with a laptop on a quiet table",
  },
  strategySession: {
    id: "1497032628192-86f99bcd76bc",
    alt: "Editorial workspace overhead with notebook, coffee, and a laptop",
  },
  whiteboardStrategy: {
    id: "1552581234-26160f608093",
    alt: "Strategy whiteboard with marketing planning",
  },
  brainstorm: {
    id: "1542626991-cbc4e32524cc",
    alt: "Creative brainstorm session with sticky notes",
  },
  agencyMeeting: {
    id: "1542744094-3a31f272c490",
    alt: "Agency team in a brand strategy meeting",
  },
  pitch: {
    id: "1573164713619-24c711fe7878",
    alt: "Operators reviewing a pitch on a large monitor",
  },
  laptopStrategy: {
    id: "1607706189992-eae578626c86",
    alt: "Code editor on a dark display showing structured markup",
  },

  // Analytics / reporting / data
  analyticsDesk: {
    id: "1551288049-bebda4e38f71",
    alt: "Analytics dashboard with charts and KPIs on a screen",
  },
  analyticsClose: {
    id: "1460925895917-afdab827c52f",
    alt: "Analytics report on screen",
  },
  reporting: {
    id: "1454165804606-c3d57bc86b40",
    alt: "Notebook and pen on a marketing brief",
  },
  documents: {
    id: "1543286386-713bdd548da4",
    alt: "Hand-drawn growth chart on graph paper with a planner and ruler",
  },
  charts: {
    id: "1551288049-bebda4e38f71",
    alt: "Charts and data visualization on a tablet",
  },

  // Brand / design
  brandWall: {
    id: "1572044162444-ad60f128bdea",
    alt: "Design studio brand wall with typography",
  },
  designStudio: {
    id: "1503602642458-232111445657",
    alt: "Design studio with mood boards",
  },
  typeSpecimen: {
    id: "1485988412941-77a35537dae4",
    alt: "Editorial typography spread on a desk",
  },
  printSamples: {
    id: "1517842645767-c639042777db",
    alt: "Print design samples and color swatches",
  },
  designerHands: {
    id: "1611532736597-de2d4265fba3",
    alt: "Designer's hands working on a layout",
  },

  // Editorial / writing / content
  notebook: {
    id: "1454165804606-c3d57bc86b40",
    alt: "Notebook and pen on a marketing brief",
  },
  writing: {
    id: "1455390582262-044cdead277a",
    alt: "Editorial writing session with coffee",
  },
  longform: {
    id: "1499750310107-5fef28a66643",
    alt: "Long-form editorial writing on a laptop",
  },

  // City / coverage
  cityCanada: {
    id: "1517090504586-fde19ea6066f",
    alt: "Toronto skyline at dusk",
  },
  cityArchitecture: {
    id: "1517090504586-fde19ea6066f",
    alt: "Toronto skyline with the CN Tower",
  },
  cityNight: {
    id: "1480714378408-67cf0d13bc1b",
    alt: "City skyline at night with light trails",
  },
  cityToronto: {
    id: "1517248135467-4c7edcad34c4",
    alt: "Toronto financial district",
  },
  cityFinancial: {
    id: "1444084316824-dc26d6657664",
    alt: "Financial district architecture",
  },
  cityModern: {
    id: "1486325212027-8081e485255e",
    alt: "Modern city architecture and glass facades",
  },

  // People / portrait silhouettes
  team: {
    id: "1497366811353-6870744d04b2",
    alt: "Calm modern studio interior with concrete ceiling and large windows",
  },
  portrait: {
    id: "1573497019940-1c28c88b4f3e",
    alt: "Professional executive portrait",
  },
  portraitTwo: {
    id: "1494790108377-be9c29b29330",
    alt: "Professional executive portrait",
  },
  portraitThree: {
    id: "1500648767791-00dcc994a43e",
    alt: "Professional executive portrait",
  },

  // Office / interior
  office: {
    id: "1497366216548-37526070297c",
    alt: "Modern empty boardroom",
  },
  about: {
    id: "1497366754035-f200968a6e72",
    alt: "Minimalist office hallway with black-frame glass partitions",
  },
  contact: {
    id: "1486325212027-8081e485255e",
    alt: "Modern editorial workspace with bold light",
  },
  desk: {
    id: "1499914485622-a88fac536970",
    alt: "Designer's desk overhead view",
  },
  studioWide: {
    id: "1497366811353-6870744d04b2",
    alt: "Wide modern open studio space",
  },

  // Search / SEO / local
  searchScreen: {
    id: "1542435503-956c469947f6",
    alt: "Search results review on a monitor",
  },
  mapsScreen: {
    id: "1531403009284-440f080d1e12",
    alt: "Designer pinning UX wireframes and a maps mockup to a planning wall",
  },

  // Press / publications
  newspaper: {
    id: "1495020689067-958852a7765e",
    alt: "Newspaper press placement",
  },
  press: {
    id: "1504711434969-e33886168f5c",
    alt: "Press and editorial materials",
  },

  // Macro / abstract / texture
  textureWarm: {
    id: "1531297484001-80022131f5a1",
    alt: "Warm minimalist texture",
  },
  textureCool: {
    id: "1487014679447-9f8336841d58",
    alt: "Cool architectural texture",
  },
  paperTexture: {
    id: "1535320903710-d993d3d77d29",
    alt: "Paper and editorial print texture",
  },

  // Workshops / collaborative
  workshopWide: {
    id: "1552664730-d307ca884978",
    alt: "Wide collaborative workshop",
  },
  workshopClose: {
    id: "1543269865-cbf427effbad",
    alt: "Hands collaborating across documents",
  },

  // Technology / dashboards / engineering
  techDashboard: {
    id: "1551288049-bebda4e38f71",
    alt: "Real-time dashboard with charts and KPIs",
  },
  techCode: {
    id: "1517694712202-14dd9538aa97",
    alt: "Engineer reviewing code on a dark display",
  },
  techServer: {
    id: "1558494949-ef010cbdcc31",
    alt: "Modern data infrastructure rack",
  },
  techMonitors: {
    id: "1581291518857-4e27b48ff24e",
    alt: "Multi-monitor operations console",
  },
  techData: {
    id: "1543286386-713bdd548da4",
    alt: "Engineer working with data visualizations",
  },
  techApi: {
    id: "1555066931-4365d14bab8c",
    alt: "Code editor with API integration",
  },
  techAi: {
    id: "1677756119517-756a188d2d94",
    alt: "AI workflow visualization",
  },
  techMobile: {
    id: "1512941937669-90a1b58e7e9c",
    alt: "Mobile app interface in hand",
  },
  techSecure: {
    id: "1563013544-824ae1b704d3",
    alt: "Cybersecurity and encryption",
  },
  techPlatform: {
    id: "1581090700227-1e37b190418e",
    alt: "Platform integration ecosystem",
  },

  // Cities / coverage extensions
  cityVancouver: {
    id: "1514519273132-6a1abd48302c",
    alt: "Vancouver skyline at dusk",
  },
  cityCalgary: {
    id: "1601751818941-571144562ff8",
    alt: "Calgary downtown skyline",
  },
  cityMontreal: {
    id: "1466921583968-f07aa80c526e",
    alt: "Montreal historic district",
  },
  cityOttawa: {
    id: "1503614472-8c93d56e92ce",
    alt: "Ottawa Parliament Hill",
  },
  cityModernGlass: {
    id: "1497366216548-37526070297c",
    alt: "Modern glass office tower",
  },

  // Service-specific shots
  serviceListings: {
    id: "1432888622747-4eb9a8efeb07",
    alt: "Local listings on a map",
  },
  serviceReviews: {
    id: "1553877522-43269d4ea984",
    alt: "Reputation review platform",
  },
  servicePaid: {
    id: "1460925895917-afdab827c52f",
    alt: "Ad campaign performance dashboard",
  },
  serviceBrand: {
    id: "1517842645767-c639042777db",
    alt: "Brand identity studio",
  },
  serviceWeb: {
    id: "1517694712202-14dd9538aa97",
    alt: "Web architecture and code",
  },

  // Integration partner placeholders
  integrationsBoard: {
    id: "1518770660439-4636190af475",
    alt: "Integration ecosystem visualization",
  },

  // ── v2 editorial expansion (added 2026-04-29) ────────────────
  editorialMagazine: {
    id: "1611532736597-de2d4265fba3",
    alt: "Designer drawing a serif letterform on an iPad next to an editorial book",
  },
  editorialColor: {
    id: "1558655146-9f40138edfeb",
    alt: "Bold editorial color block composition",
  },
  editorialType: {
    id: "1551816230-ef5deaed4a26",
    alt: "Massive type specimen on a saffron background",
  },
  editorialBlackWhite: {
    id: "1492551557933-34265f7af79e",
    alt: "High-contrast black and white editorial portrait",
  },
  editorialPrint: {
    id: "1585776245991-cf89dd7fc73a",
    alt: "Vintage Olympia typewriter with a freshly typed page reading Update",
  },
  editorialPoster: {
    id: "1593696140826-c58b021acf8b",
    alt: "Brutalist editorial poster on a studio wall",
  },
  brandingDeck: {
    id: "1542435503-956c469947f6",
    alt: "Brand presentation deck on a workspace",
  },
  brandingLogos: {
    id: "1572044162444-ad60f128bdea",
    alt: "Logo lockup variations on a layout sheet",
  },
  campaignWall: {
    id: "1505740420928-5e560c06d30e",
    alt: "Campaign concept wall with printed comps",
  },
  campaignLights: {
    id: "1492684223066-81342ee5ff30",
    alt: "Concert lighting rig casting saffron color",
  },
  campaignBillboard: {
    id: "1517457373958-b7bdd4587205",
    alt: "Outdoor billboard at dusk with editorial type",
  },
  campaignStudio: {
    id: "1542038784456-1ea8e935640e",
    alt: "Studio photography setup with bold lighting",
  },
  workshopSaffron: {
    id: "1551836022-d5d88e9218df",
    alt: "Operator workshop with saffron toned lighting",
  },
  workshopType: {
    id: "1505740420928-5e560c06d30e",
    alt: "Wall of typographic poster comps in a studio",
  },
  newsroomEditorial: {
    id: "1504711434969-e33886168f5c",
    alt: "Newsroom editorial layout being marked up",
  },
  newsroomDesk: {
    id: "1495020689067-958852a7765e",
    alt: "Editorial desk stacked with printed publications",
  },
  contentProduction: {
    id: "1485846234645-a62644f84728",
    alt: "Content production set with cameras and lights",
  },
  contentVideo: {
    id: "1585776245991-cf89dd7fc73a",
    alt: "Video production monitor on set",
  },
  socialContent: {
    id: "1626785774573-4b799315345d",
    alt: "Designer's desk with Adobe Creative Cloud icons and a graphic design book",
  },
  influencerStudio: {
    id: "1556742044-3c52d6e88c62",
    alt: "Influencer-style studio set with saffron props",
  },
  paidCampaign: {
    id: "1460925895917-afdab827c52f",
    alt: "Paid campaign performance dashboard close-up",
  },
  searchOps: {
    id: "1432888622747-4eb9a8efeb07",
    alt: "Local search results map session",
  },
  reportingDashboard: {
    id: "1551288049-bebda4e38f71",
    alt: "Operator reporting dashboard with KPIs",
  },
  cityToronto2: {
    id: "1517248135467-4c7edcad34c4",
    alt: "Toronto financial district at golden hour",
  },
  cityHighway: {
    id: "1469474968028-56623f02e42e",
    alt: "Highway lights into a city skyline",
  },
} satisfies Record<string, Img>;

export type ImgKey = keyof typeof IMG;

export function unsplashUrl(id: string, w: number = 1600, q: number = 80): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}
