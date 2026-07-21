import { useState, useEffect, useRef, useCallback } from "react";

const partners = [
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

// ─── How many cards are visible per slide ─────────────────────────────────────
const getVisible = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

// ─── Partner Card ─────────────────────────────────────────────────────────────
const PartnerCard = ({ partner }) => (
  <div
    className="flex flex-col items-center justify-center gap-3 p-6
               bg-white border border-gray-100 rounded-2xl
               hover:border-gray-300 hover:shadow-md
               transition-all duration-300 select-none h-36"
    style={{ minWidth: 0 }}
  >
    {/* Logo badge — swap this div for <img> when you have real logos */}
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: partner.bg }}
    >
      <svg
        className="w-7 h-7"
        fill="none"
        stroke={partner.color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d={partner.icon} />
      </svg>
    </div>

    <div className="text-center">
      <p className="text-sm font-bold text-[#1a1c1c] leading-tight">
        {partner.name}
      </p>
      <span
        className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 block ${
          partner.tier === "Platinum"
            ? "text-[#C2410C]"
            : partner.tier === "Gold"
              ? "text-[#854D0E]"
              : "text-gray-400"
        }`}
      >
        {partner.tier}
      </span>
    </div>
  </div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const PartnersSection = () => {
  const [visible, setVisible] = useState(getVisible);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef(null);

  const totalSlides = Math.ceil(partners.length / visible);

  // Clamp current index when visible count changes on resize
  useEffect(() => {
    const onResize = () => {
      const v = getVisible();
      setVisible(v);
      setCurrent((c) => Math.min(c, Math.ceil(partners.length / v) - 1));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      const clamped = ((index % totalSlides) + totalSlides) % totalSlides;
      setIsAnimating(true);
      setCurrent(clamped);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, totalSlides],
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = setInterval(() => goTo(current + 1), 3800);
    return () => clearInterval(autoRef.current);
  }, [current, isPaused, goTo]);

  const slidePartners = partners.slice(
    current * visible,
    current * visible + visible,
  );

  // Pad last slide so the grid stays the same width
  const padded = [
    ...slidePartners,
    ...Array(Math.max(0, visible - slidePartners.length)).fill(null),
  ];

  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
            Trusted Globally
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] leading-tight mb-3">
            Our Partners
          </h2>
          <p className="text-[#4A4A4A] text-base max-w-xl mx-auto leading-relaxed">
            Working alongside world-class institutions across finance, trade,
            infrastructure, and energy to drive Africa's industrial
            transformation.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none
                          bg-linear-to-r from-[#f9f9f9] to-transparent"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 h-full w-10 z-10 pointer-events-none
                          bg-linear-to-l from-[#f9f9f9] to-transparent"
          />

          {/* Prev button */}
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous partners"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-white border border-gray-200
                       flex items-center justify-center text-[#001e40]
                       hover:bg-[#001e40] hover:text-white hover:border-[#001e40]
                       shadow-md transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next partners"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20
                       w-10 h-10 rounded-full bg-white border border-gray-200
                       flex items-center justify-center text-[#001e40]
                       hover:bg-[#001e40] hover:text-white hover:border-[#001e40]
                       shadow-md transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards grid — animates opacity + translate on slide change */}
          <div
            className={`grid gap-5 px-6 transition-all duration-500 ease-in-out ${
              isAnimating
                ? "opacity-0 translate-y-1"
                : "opacity-100 translate-y-0"
            }`}
            style={{
              gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))`,
            }}
          >
            {padded.map((partner, i) =>
              partner ? (
                <PartnerCard key={partner.id} partner={partner} />
              ) : (
                // Ghost card keeps the grid stable on the last slide
                <div key={`ghost-${i}`} className="h-36 rounded-2xl" />
              ),
            )}
          </div>
        </div>

        {/* ── Dots ── */}
        <div
          className="flex items-center justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Partner slides"
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === current}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-3 h-2.5 bg-[#003366]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* ── Slide counter ── */}
        <p className="text-center text-xs font-semibold text-gray-400 mt-3 tracking-widest uppercase">
          {current + 1} / {totalSlides}
        </p>

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#4A4A4A] mb-4">
            Interested in partnering with DSEZ?
          </p>
          <button
            className="inline-flex items-center gap-2 bg-[#FF5722]  hover:bg-[#E64A19]
                             text-white font-bold text-sm px-8 py-3.5 rounded-lg
                             transition-all shadow-md active:scale-95"
          >
            Become a Partner
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
