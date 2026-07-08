import {
  HiOutlinePhoto,
  HiOutlineSwatch,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineBolt,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi2";

// ─── Navbar Dropdown Data ─────────────────────────────────────────────────────

export const aboutItems = [
  {
    label: "Our Vision & Mission",
    icon: "globe",
    sub: "Africa's industrial future",
    href: "/about/vision",
  },
  {
    label: "Leadership Team",
    icon: "office",
    sub: "Meet our executives",
    href: "/about/leadership",
  },
  {
    label: "Zone Master Plan",
    icon: "map",
    sub: "2.4k+ hectares planned",
    href: "/about/master-plan",
  },
  {
    label: "Governance & Compliance",
    icon: "info",
    sub: "Regulatory framework",
    href: "/about/governance",
  },
];

export const investmentItems = [
  {
    label: "Smart Manufacturing",
    icon: "factory",
    sub: "Industrial & precision mfg.",
    href: "/invest/manufacturing",
  },
  {
    label: "Logistics Hubs",
    icon: "globe",
    sub: "Multi-modal transport",
    href: "/invest/logistics",
  },
  {
    label: "Digital Services",
    icon: "cloud",
    sub: "Licensing & fintech gateways",
    href: "/invest/digital",
  },
  {
    label: "Green Energy",
    icon: "bolt",
    sub: "100% sustainable power grid",
    href: "/invest/energy",
  },
  {
    label: "Commercial Real Estate",
    icon: "office",
    sub: "Prime plots & blocks",
    href: "/invest/real-estate",
  },
];

// ─── Media Dropdown Data ─────────────────────────────────────────────────────

export const mediaItems = [
  {
    label: "News & Events",
    icon: "analytics",
    sub: "Press releases & zone updates",
    href: "/media/news",
  },
  {
    label: "Gallery",
    icon: "photo",
    sub: "Photos & videos from the zone",
    href: "/media/gallery",
  },
];

// ─── Stats Ticker ─────────────────────────────────────────────────────────────

export const stats = [
  { value: "2,400+", label: "Hectares Planned" },
  { value: "$1.2B", label: "Initial Investment" },
  { value: "40+", label: "Partner Nations" },
  { value: "100%", label: "Renewable Power" },
  { value: "0%", label: "Bureaucratic Friction" },
];

// ─── Overview Section ─────────────────────────────────────────────────────────

export const overviewStats = [
  { value: "2.4k+", label: "Hectares Planned" },
  { value: "$1.2B", label: "Initial Investment" },
];

// ─── Sector Grid Cards ─────────────────────────────────────────────────────────

export const SectorCards = [
  {
    id: "manufacturing",
    span: "md:col-span-2 md:row-span-2",
    dark: true,
    accent: "#66dd8b",
    icon: "factory",
    title: "Smart Manufacturing",
    desc: "Plug-and-play facilities for high-precision electronics and industrial equipment.",
    cta: "Explore Sector",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN0M1x3egZuOtUSakYZEHQOnaIZjqMSpG8fSjyYDhKgb6vev0dbtxR2XgspKOATvhNLDPMSjRwv66al1u8pRinX_YQjhX9yF6f2HZKRAfW3BPmIbtfmQpPHPZbawPGfrWlxKvJBw8L4C17hm2N9EO9m449ay-ZQYQT8RiG5rjl8gUSJUNTRSWg1hgn7cPQgbpsdt5HEUBya1nT4TzVmk9LlbnpaQ-47DqOn4IDvTZSncnJS6d4FpL6IihxDactyhmDbcckwtizKufz",
  },
  {
    id: "logistics",
    span: "md:col-span-2",
    dark: false,
    icon: "globe",
    title: "Logistics & Hubs",
    desc: "Integrated dry ports and multi-modal transport networks connecting to global markets.",
    showExternal: true,
  },
  {
    id: "digital",
    span: "",
    dark: false,
    icon: "cloud",
    title: "Digital Services",
    desc: "Seamless licensing and financial gateways for modern businesses.",
  },
  {
    id: "energy",
    span: "",
    dark: false,
    orange: true,
    icon: "bolt",
    title: "Green Energy",
    desc: "100% sustainable power grid for net-zero operations.",
  },
];
// ─── Partner data ─────────────────────────────────────────────────────────────
export const partners = [
  {
    id: 1,
    name: "Afreximbank",
    abbr: "AFX",
    icon: "M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z",
    bg: "#EFF6FF",
    color: "#1D4ED8",
    tier: "Platinum",
  },
  {
    id: 2,
    name: "African Dev. Bank",
    abbr: "AfDB",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    bg: "#F0FDF4",
    color: "#15803D",
    tier: "Gold",
  },
  {
    id: 3,
    name: "IFC World Bank",
    abbr: "IFC",
    icon: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 018.027 13H4.062a8.008 8.008 0 005.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0013.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 01-1.683 6.667A8.008 8.008 0 0019.938 13zM4.062 11h3.965A17.9 17.9 0 019.71 4.333 8.008 8.008 0 004.062 11zm5.969 0h3.938A15.905 15.905 0 0012 4.248 15.905 15.905 0 0010.03 11zm4.259-6.667A17.9 17.9 0 0115.938 11h3.965a8.008 8.008 0 00-5.648-6.667z",
    bg: "#FFF7ED",
    color: "#C2410C",
    tier: "Platinum",
  },
  {
    id: 4,
    name: "NEPC Nigeria",
    abbr: "NEPC",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    bg: "#FDF4FF",
    color: "#7E22CE",
    tier: "Gold",
  },
  {
    id: 5,
    name: "Dangote Group",
    abbr: "DAN",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    bg: "#FFF1F2",
    color: "#BE123C",
    tier: "Platinum",
  },
  {
    id: 6,
    name: "Africa Finance Corp",
    abbr: "AFC",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    bg: "#ECFDF5",
    color: "#065F46",
    tier: "Gold",
  },
  {
    id: 7,
    name: "Siemens Energy",
    abbr: "SIE",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    bg: "#EFF6FF",
    color: "#1E40AF",
    tier: "Gold",
  },
  {
    id: 8,
    name: "DP World",
    abbr: "DPW",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    bg: "#FFF7ED",
    color: "#9A3412",
    tier: "Platinum",
  },
  {
    id: 9,
    name: "Standard Bank",
    abbr: "STD",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    bg: "#F5F3FF",
    color: "#6D28D9",
    tier: "Gold",
  },
  {
    id: 10,
    name: "Julius Berger",
    abbr: "JB",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    bg: "#F0FDF4",
    color: "#166534",
    tier: "Silver",
  },
  {
    id: 11,
    name: "Zenith Bank",
    abbr: "ZEN",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
    bg: "#FFF1F2",
    color: "#9F1239",
    tier: "Silver",
  },
  {
    id: 12,
    name: "Shell Petroleum",
    abbr: "SHL",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    bg: "#FEFCE8",
    color: "#854D0E",
    tier: "Platinum",
  },
];

// ─── AboutUs Data ─────────────────────────────────────────────────────────────────────
export const leaders = [
  {
    name: "Marcus Thorne",
    role: "Chief Executive Officer",
    bio: "Over 25 years of experience in global trade logistics and special economic zone policy development.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
  },
  {
    name: "Elena Rostova",
    role: "Chief Operating Officer",
    bio: "Specialist in digital governance and cross-border regulatory harmonization for technology hubs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
  },
  {
    name: "Dr. Julian Chen",
    role: "Chief Technology Officer",
    bio: "A pioneer in blockchain-based supply chain management and automated customs systems.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCGWMoNxn1u0bEGFUofvKTWphr9EHAXeBR93n7FHeH5RNIx76hkugKq_dJPaUPiETMDeAQ4yL6Eha2IjJkWL9u1PTzYaaKxN_lYf0kJ56TmelA99mOL8vteDAe8PPEdN2nH_bRctb6OpqxSzZaABALQBXCriU9YRMnHJhY3HUrBUF7rnKp0ZHpVwLwfdlFD8S50PvrPj4z_wRcrHtgI1ItxUKtqvqLNRcdzBIgu4N5ytnTzyEDPdU7lf7KkJiR7Tn3TtlrmaVdk8BH",
  },
  {
    name: "Sarah Whitaker",
    role: "Chief Financial Officer",
    bio: "Expert in international capital markets and structured finance for large-scale infrastructure projects.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABgecDo7_zNdAxtq2ABEtjwHqrOTHNWCKKfArMlnEnwQmdIQpFBAsyfaUTMz4laOJOjf1pF5rHKjEkGWjoLLS91P0KQVEX20uWQSHKsEgfoUmgtcMOVYjZJCN6EsA_0dgFLIPIEL9zVgOdroRF2nPTRL2pOXoM15YJaXRAFqA6cYefe2SRLqcDGSyXo4SYRX9phKkheBgENOuCu2zEhlVkle_oZFg2YDI3Yvjqx-fpzTCc_RAWfS7WpFewc4DlN2bDlbJdtB6l7Zjq",
  },
];

export const objectives = [
  {
    number: "01",
    title: "Digital Trade Harmonization",
    body: "Implementing unified digital protocols to reduce customs clearance times by 40% within the next three fiscal years.",
    span: "md:col-span-2",
    dark: false,
    accent: "#FF5722",
  },
  {
    number: "02",
    title: "Green Logistics",
    body: "Achieving a net-zero carbon footprint for all zone-operated transport facilities by 2030.",
    span: "",
    dark: false,
    accent: "#66dd8b",
    green: true,
  },
  {
    number: "03",
    title: "Foreign Investment",
    body: "Attracting $10B in cumulative foreign direct investment by simplifying the corporate setup process.",
    span: "",
    dark: false,
    accent: "#FF5722",
  },
  {
    number: "04",
    title: "Infrastructure Expansion",
    body: "Phase II expansion of the ultra-high-speed data corridor connecting all regional logistics nodes.",
    span: "md:col-span-2",
    dark: true,
    accent: "#66dd8b",
  },
];

export const orgDepts = [
  "Operations & Logistics",
  "Digital Strategy",
  "Regulatory Affairs",
  "Investor Relations",
];

// ───Investment Data ─────────────────────────────────────────────────────────────────────
export const advantages = [
  {
    title: "Strategic Location",
    body: "Direct access to deep-water ports and major rail networks connecting 14 landlocked nations.",
  },
  {
    title: "AfCFTA Alignment",
    body: "Benefit from zero-tariff trade across the continent through our certified regional hub status.",
  },
  {
    title: "Digital-First Infrastructure",
    body: "Fibre-optic backbone and dedicated power grid ensures 99.9% operational uptime.",
  },
];

// ─── Priority sectors — icon keys match Icon.jsx's iconMap ────────────────────
export const sectors = [
  {
    icon: "factory",
    title: "Agro-processing",
    body: "Advanced facilities for value-addition to regional agricultural exports.",
  },
  {
    icon: "bolt",
    title: "Oil & Gas",
    body: "Downstream processing and specialised logistics for energy infrastructure.",
  },
  {
    icon: "office",
    title: "Manufacturing",
    body: "Light and heavy industrial facilities with ready-to-use factory shells.",
  },
  {
    icon: "ship",
    title: "Global Logistics",
    body: "State-of-the-art warehousing and smart supply chain management systems.",
  },
];

// ─── Incentives — icon keys match Icon.jsx's iconMap ──────────────────────────
export const incentives = [
  {
    icon: "receipt",
    title: "Tax Exemptions",
    body: "10-year corporate income tax holiday, followed by a flat rate of 15% for the subsequent decade.",
  },
  {
    icon: "exchange",
    title: "Capital Repatriation",
    body: "100% foreign ownership allowed with guaranteed full repatriation of profits and capital dividends.",
  },
  {
    icon: "leaf",
    title: "Sustainability Credits",
    body: "Additional carbon credit offsets for enterprises implementing green energy and waste management.",
  },
];

// ─── Investment journey steps ──────────────────────────────────────────────────
export const journeySteps = [
  {
    num: "01",
    title: "Expression of Interest",
    body: "Submit your preliminary project proposal and facility requirements.",
  },
  {
    num: "02",
    title: "Review & Approval",
    body: "Our technical committee evaluates the proposal for zone alignment within 14 days.",
  },
  {
    num: "03",
    title: "Licensing",
    body: "Obtain your SEZ operator licence through our integrated single-window portal.",
  },
  {
    num: "04",
    title: "Development",
    body: "Commence site construction or move into your pre-built factory shell.",
  },
];

// ─── Resources — icon keys match Icon.jsx's iconMap ───────────────────────────
export const resources = [
  { icon: "doc", label: "DSEZ Brochure 2024", size: "3.2 MB" },
  { icon: "doc", label: "Tax Policy Docs", size: "1.4 MB" },
  { icon: "map", label: "Site Map & Plots", size: "5.1 MB" },
];

// ─── News & Events for hompage section ────────────────────────────────────────────────────────────

export const newsItems = [
  {
    tag: "Partnership",
    tagColor: "bg-orange-100 text-[#FF4500]",
    title: "Strategic MoU Signed with Global Logistics Giant",
    desc: "Agreement to develop a 400-acre automated terminal expected to triple export capacity by 2026.",
    date: "October 24, 2024",
    datetime: "2024-10-24",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
  },
  {
    tag: "Growth",
    tagColor: "bg-green-100 text-green-700",
    title: "Phase 1 Infrastructure Completion Report",
    desc: "Official audit confirms all power, water, and fiber-optic networks for the Alpha District are live.",
    date: "October 12, 2024",
    datetime: "2024-10-12",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
  },
  {
    tag: "Event",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Upcoming: Regional Investment Summit 2024",
    desc: "Join world-class investors and policy makers for an exclusive tour of DSEZ facilities next month.",
    date: "September 28, 2024",
    datetime: "2024-09-28",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
  },
];

// ─── Data for media page ─────────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  "All",
  "Infrastructure",
  "Partnerships",
  "Policy",
  "Investment",
  "Events",
];

export const pressReleases = [
  {
    id: 1,
    category: "Infrastructure",
    categoryColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    date: "Oct 24, 2024",
    title: "DSEZ Unveils Phase II Smart Grid Integration",
    body: "The Authority has successfully integrated the Phase II AI-driven smart energy grid, ensuring 99.9% uptime for all industrial partners within the zone, cutting average energy costs by 22%.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
    featured: true,
  },
  {
    id: 2,
    category: "Partnerships",
    categoryColor: "bg-blue-50 text-blue-700 border border-blue-200",
    date: "Oct 18, 2024",
    title: "Strategic MoU Signed with Global Logistics Alliance",
    body: "New partnership aims to streamline cross-border digital customs processing, reducing transit times by up to 40% for all registered entities operating within DSEZ jurisdiction.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
    featured: false,
  },
  {
    id: 3,
    category: "Policy",
    categoryColor: "bg-orange-50 text-orange-700 border border-orange-200",
    date: "Oct 12, 2024",
    title: "Revised Digital Asset Framework Published",
    body: "The Regulatory Wing has released the updated framework for blockchain-based transactions within DSEZ jurisdiction, providing clarity for fintech operators seeking licensure.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
    featured: false,
  },
  {
    id: 4,
    category: "Investment",
    categoryColor: "bg-purple-50 text-purple-700 border border-purple-200",
    date: "Oct 5, 2024",
    title: "Zone Investment Surpasses $4B Target for Q3",
    body: "DSEZ closed Q3 with $4.2B in verified foreign direct investment commitments, outperforming the annual target by 18% — driven by manufacturing and digital services entrants.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
    featured: false,
  },
  {
    id: 5,
    category: "Events",
    categoryColor: "bg-sky-50 text-sky-700 border border-sky-200",
    date: "Sep 28, 2024",
    title: "Regional Investment Summit 2024 — Official Recap",
    body: "Over 320 delegates from 42 nations attended the DSEZ Authority's flagship summit, resulting in 17 letters of intent and three confirmed anchor tenant agreements.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
    featured: false,
  },
  {
    id: 6,
    category: "Infrastructure",
    categoryColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    date: "Sep 14, 2024",
    title: "Port Integration Milestone: Berth 7 Now Operational",
    body: "The completion of Berth 7 adds 12,000 TEU/month capacity to the zone's maritime gateway, making DSEZ the highest-throughput inland digital port in the subregion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
    featured: false,
  },
];

export const inTheNews = [
  {
    outlet: "Global Trade Journal",
    headline:
      "How DSEZ is Redefining the Future of Trans-Continental Digital Trade",
    summary:
      "An in-depth analysis of the zone's regulatory framework and its ripple effect across APAC trade corridors.",
    date: "November 2024",
    large: true,
  },
  {
    outlet: "The Financial Standard",
    headline: "Zone Investment Surpasses $4B Target for Q3",
    date: "October 2024",
  },
  {
    outlet: "Maritime Weekly",
    headline: "Port Integration Complete: A New Logistics Milestone",
    date: "October 2024",
  },
  {
    outlet: "Tech Insights Africa",
    headline: "DSEZ Named AI Governance Lead in Emerging Markets Report",
    date: "September 2024",
  },
];

// ─── Media assets — icon now uses react-icons components, NOT raw SVGs ────────
export const mediaAssets = [
  {
    Icon: HiOutlinePhoto,
    title: "DSEZ Photo Gallery",
    meta: "84 High-Res Images (.JPG)",
  },
  {
    Icon: HiOutlineSwatch,
    title: "Logo & Style Guide",
    meta: "Vector Assets (.SVG, .AI)",
  },
  {
    Icon: HiOutlineDocumentText,
    title: "Official Press Kit",
    meta: "Factsheets & Boilerplate",
  },
];

export const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qi2sHfPHAm1Aac7yQKuR7Yks0QZ3KGf-UlMAMhgbtap-_oMdXXVYZXrA6PC_TqCgzo1iNWN0-s5M4QhLH9e3cxKVrJFN8i_kJ7FP4NQaTHlJHAqWl9S0Y5c2YV1vLAnS0n8UMbLHh0ggN1uTwC4Y8_nxcNiGFKBzAW3-hx8FdKhYGRj8E7fIbgETLCUKIh_2l9mVADXSf5B6Kc6I-t7gQNxvGEHMqPqBw8F08YR3xfXk2uCxkzxYiNf76pWy39gCQyVQfh7o",
];

// ── FAQs Page ──────────────────────────────────────────────────────────────

export const categories = [
  { id: "all", label: "All Questions", Icon: HiOutlineClipboardDocumentList },
  { id: "eligibility", label: "Eligibility", Icon: HiOutlineCheckCircle },
  { id: "licensing", label: "Licensing & Setup", Icon: HiOutlineDocumentText },
  {
    id: "investment",
    label: "Investment & Finance",
    Icon: HiOutlineCurrencyDollar,
  },
  { id: "operations", label: "Operations", Icon: HiOutlineBuildingOffice2 },
  { id: "legal", label: "Legal & Compliance", Icon: HiOutlineShieldCheck },
  { id: "digital", label: "Digital Services", Icon: HiOutlineBolt },
  { id: "location", label: "Location & Logistics", Icon: HiOutlineMapPin },
];

export const faqs = [
  // ── Eligibility ──────────────────────────────────────────────────────────────
  {
    id: 1,
    category: "eligibility",
    question: "Who is eligible to operate within the DSEZ?",
    answer:
      "Any legally incorporated entity — domestic or foreign — engaged in manufacturing, digital services, logistics, agro-processing, or financial technology may apply for a DSEZ operator licence. Sole proprietors and individuals are not eligible to register directly; a registered company structure is required. Joint ventures with local entities are encouraged but not mandated.",
  },
  {
    id: 2,
    category: "eligibility",
    question: "Are there minimum investment thresholds for zone entry?",
    answer:
      "Yes. The minimum verified investment for a Standard Operator Licence is USD 500,000 in committed capital expenditure within the first 24 months of operations. Anchor Tenants (flagship industrial enterprises) require a minimum of USD 5 million. Micro-enterprise designations for digital-only operators carry a reduced threshold of USD 50,000.",
  },
  {
    id: 3,
    category: "eligibility",
    question: "Can a foreign-owned company hold 100% equity in a DSEZ entity?",
    answer:
      "Yes. DSEZ operates under a 100% foreign ownership policy for all licensed entities, with no mandatory local partnership requirement. This is codified in the DSEZ Special Economic Zone Act (Section 14B) and applies across all approved sectors. Dividend repatriation is also fully guaranteed with no capital controls.",
  },
  {
    id: 4,
    category: "eligibility",
    question: "Which sectors are prioritised for zone licensing in 2024–2026?",
    answer:
      "The current Strategic Priority Framework prioritises: (1) Advanced Manufacturing & Precision Engineering, (2) Agro-Industrial Processing & Cold Chain, (3) Digital Services, Fintech & Data Centres, (4) Clean Energy Infrastructure, and (5) Integrated Logistics & Multimodal Transport. Applications in these sectors receive expedited review within 5 business days.",
  },

  // ── Licensing & Setup ─────────────────────────────────────────────────────────
  {
    id: 5,
    category: "licensing",
    question: "How long does the licensing process take?",
    answer:
      "Standard operator licences are processed within 14 business days from submission of a complete application package. Priority Sector applicants receive a decision within 5 business days. The single-window digital portal (DSEZ-ONE) enables real-time tracking of application status, document verification, and payment processing — eliminating the need for in-person visits.",
  },
  {
    id: 6,
    category: "licensing",
    question: "What documents are required to begin the registration process?",
    answer:
      "The core registration package includes: (1) Certificate of Incorporation or equivalent from country of origin, (2) Audited financial statements for the last two fiscal years, (3) Detailed Business Plan with 3-year financial projections, (4) Board Resolution authorising DSEZ registration, (5) KYC documentation for all Ultimate Beneficial Owners (UBOs) holding ≥10% equity, and (6) Proof of initial capitalisation. All documents must be certified translations in English if issued in another language.",
  },
  {
    id: 7,
    category: "licensing",
    question:
      "Can I operate multiple business activities under a single DSEZ licence?",
    answer:
      "A Primary Activity licence permits up to two related activities under a single entity without additional licencing fees. Materially distinct activities — for example, combining manufacturing and financial services — require a Multi-Activity Endorsement, which carries a supplementary annual review fee of USD 2,500. All activities must fall within DSEZ's approved sector classifications.",
  },

  // ── Investment & Finance ──────────────────────────────────────────────────────
  {
    id: 8,
    category: "investment",
    question: "What tax incentives are available to DSEZ entities?",
    answer:
      "DSEZ offers a comprehensive incentive package: a 10-year full corporate income tax holiday upon commencement of operations, followed by a preferential rate of 15% for the subsequent 10 years. Additionally, operators benefit from zero customs duty on capital equipment imports, VAT exemption on qualifying inputs, and a full waiver of withholding tax on dividends repatriated to foreign shareholders. Sustainability Compliance Certificates unlock an additional 2% tax credit.",
  },
  {
    id: 9,
    category: "investment",
    question: "How is the AfCFTA free trade status applied within the zone?",
    answer:
      "As a certified AfCFTA-integrated hub, goods manufactured or substantially transformed within DSEZ qualify for zero-tariff access to all 54 African Union signatory markets under the Agreement's Rules of Origin provisions. A DSEZ Certificate of Origin (Form CO-DSEZ/2024) is issued alongside each commercial shipment and is recognised at all participating customs territories without additional authentication requirements.",
  },
  {
    id: 10,
    category: "investment",
    question:
      "Can DSEZ entities access external financing or raise debt within the zone?",
    answer:
      "Yes. DSEZ entities may raise capital through any internationally recognised mechanism including equity issuance, commercial bank debt, development finance institution loans, sukuk, or project finance structures. DSEZ maintains correspondent relationships with Afreximbank, the Africa Finance Corporation, and the IFC. The zone's dedicated Commercial Court provides lender protection through international arbitration under UNCITRAL rules, significantly reducing credit risk premiums.",
  },

  // ── Operations ────────────────────────────────────────────────────────────────
  {
    id: 11,
    category: "operations",
    question: "What physical facilities are available within the zone?",
    answer:
      "DSEZ offers: (1) Serviced industrial plots from 5,000 sqm to 50 hectares, (2) Type-A Standard Warehouse Shells (5,000–20,000 sqm, ready for immediate occupation), (3) Built-to-Suit Facility Development (custom construction under a Design-Build-Lease model, 18–24 month delivery), (4) Grade-A Office Suites in the Sovereign Commerce Tower, and (5) Shared Innovation Labs for digital and R&D enterprises. All facilities connect to the DSEZ Power Grid with a guaranteed 99.9% uptime SLA.",
  },
  {
    id: 12,
    category: "operations",
    question:
      "What are the working hours and operational schedules permitted within DSEZ?",
    answer:
      "DSEZ is a 24/7 operational zone with no restrictions on shift patterns or production hours. The zone's integrated customs and port facilities operate continuously. Entities in manufacturing may employ shift workers around the clock subject to applicable labour standards. The DSEZ Authority's Single-Window Portal and all digital government services are available 24/7 with a maximum 4-hour response SLA for critical service requests.",
  },
  {
    id: 13,
    category: "operations",
    question: "How is the energy and utility supply managed?",
    answer:
      "The DSEZ Smart Grid — powered by Phase II AI-driven load management — delivers dedicated industrial-grade power from both grid-tied renewable sources (65% solar and wind) and gas-backed redundancy. Each operator receives a metered allocation with a guaranteed minimum supply commitment. Water, sewerage, and fibre-optic connectivity (1Gbps uplink standard, with 10Gbps available for Tier-1 facilities) are bundled into the zone's unified utility tariff.",
  },

  // ── Legal & Compliance ────────────────────────────────────────────────────────
  {
    id: 14,
    category: "legal",
    question:
      "Which legal jurisdiction governs commercial disputes within DSEZ?",
    answer:
      "The DSEZ Commercial Court operates as an independent judicial body with jurisdiction over all intra-zone and zone-international commercial matters. Proceedings are conducted in English under a codified DSEZ Commercial Law framework modelled on English common law. International arbitration is available under UNCITRAL, ICC, and LCIA rules. Judgements are mutually enforceable under bilateral investment treaty obligations with 47 partner nations.",
  },
  {
    id: 15,
    category: "legal",
    question: "What intellectual property protections apply within the zone?",
    answer:
      "DSEZ is a signatory to the WIPO Convention and provides full patent, trademark, copyright, and trade secret protection under its IP statute. Rights registered in any WIPO member state are automatically recognised within DSEZ without re-registration. The DSEZ IP Enforcement Unit provides expedited provisional measures (injunctive relief within 48 hours) for cases of suspected IP infringement affecting zone-registered entities.",
  },
  {
    id: 16,
    category: "legal",
    question: "Are DSEZ employees subject to local labour laws?",
    answer:
      "Entities within DSEZ are governed by the DSEZ Employment Standards Act, which establishes minimum wage benchmarks (indexed annually to CPI), mandatory contributions to the DSEZ Worker Provident Fund, occupational health and safety requirements, and anti-discrimination protections. The Act is substantially aligned with ILO core conventions. Collective bargaining rights are preserved. Operators employing more than 100 staff are required to maintain a certified HR Compliance Officer.",
  },

  // ── Digital Services ──────────────────────────────────────────────────────────
  {
    id: 17,
    category: "digital",
    question:
      "What digital government services are available to zone operators?",
    answer:
      "DSEZ-ONE (the Single-Window Digital Portal) consolidates all government touchpoints: business registration, licence management, customs declarations, work permit applications, tax filing, utility connections, and zoning approvals. All services are accessible via web and mobile with full API integration for enterprise-grade ERP systems. Digital signatures issued under the DSEZ e-Signature Framework have full legal standing in all zone proceedings.",
  },
  {
    id: 18,
    category: "digital",
    question:
      "Can DSEZ entities issue or transact in digital assets and cryptocurrencies?",
    answer:
      "Yes, subject to the DSEZ Digital Asset Regulatory Framework (DARF-2024). Licensed Digital Asset Operators (DAO designation) may issue, trade, and custody regulated digital assets including utility tokens, security tokens, and stablecoins. All DAOs are subject to AML/KYC requirements aligned with FATF Recommendation 16. Consumer-facing crypto exchanges require a separate Exchange Operating Licence with additional capital adequacy requirements.",
  },

  // ── Location & Logistics ──────────────────────────────────────────────────────
  {
    id: 19,
    category: "location",
    question:
      "Where is DSEZ located and how does it connect to major trade routes?",
    answer:
      "DSEZ is strategically situated at the convergence of two international highway corridors, a dedicated standard-gauge rail link to the national network, and a deep-water port berth with 14-metre draft clearance. The zone is 45 minutes from the international airport by dedicated shuttle. Berth 7 (operational from Oct 2024) provides direct container throughput of 12,000 TEU/month. Feeder vessel connections serve 22 coastal and island destinations weekly.",
  },
  {
    id: 20,
    category: "location",
    question:
      "What customs procedures apply to goods entering and leaving the zone?",
    answer:
      "DSEZ operates as a bonded free zone — goods imported into the zone are not subject to customs duty, VAT, or import levies until they leave the zone for the domestic market. Zone-to-zone transfers within DSEZ are duty-free. Exports to international markets are processed through DSEZ's integrated customs declaration system (ISO 9001-certified) with an average clearance time of 4 hours for standard cargo and 24 hours for specialised or oversized consignments.",
  },
];

// ─── Contact page Data ─────────────────────────────────────────────────────────────────────/; //

export const subjects = [
  "Investment Inquiry",
  "Operational Support",
  "Media Relations",
  "Regulatory Framework",
  "Other",
];

export const contactInfo = [
  {
    Icon: HiOutlineEnvelope,
    label: "Email",
    primary: "invest@dsez.gov.int",
    secondary: "General: info@dsez.gov.int",
  },
  {
    Icon: HiOutlinePhone,
    label: "Phone",
    primary: "+1 (800) DSEZ-GOV",
    secondary: "Mon–Fri, 08:00–18:00 GMT+3",
  },
  {
    Icon: HiOutlineMapPin,
    label: "Headquarters",
    primary: "400 Innovation Drive",
    secondary: "Financial District, DSEZ 90210",
  },
  {
    Icon: HiOutlineClock,
    label: "Hours",
    primary: "Mon–Fri  08:00–18:00",
    secondary: "Saturday  09:00–13:00",
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerNavLinks = [
  "Home",
  "About Us",
  "Investment Hub",
  "Resource Center",
];

export const footerLegalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Investor Relations",
  "Compliance",
];

export const footerContact = {
  phone: "+2348023919724",
  email: " info@dsez-mc.ng",
};
