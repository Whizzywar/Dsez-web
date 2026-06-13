import { useState, useEffect, useRef, useCallback } from "react";
import { partners } from "../../data/siteData";

// Replace `icon` SVG paths and `bg`/`color` with real logo images:
//   <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />

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
