import { useState, useEffect, useRef, useCallback } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

// ─── 5 Partners ───────────────────────────────────────────────────────────────
const partners = [
  {
    id: 1,
    abbr: "AFX",
    name: "Afreximbank",
    role: "Pan-African Trade Finance",
    desc: "Africa's premier trade finance institution, co-financing DSEZ Phase III infrastructure development with a $220M commitment.",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    tier: "Platinum",
  },
  {
    id: 2,
    abbr: "AfDB",
    name: "African Dev. Bank",
    role: "Multilateral Development",
    desc: "Providing multilateral financing, technical assistance, and policy advisory services supporting DSEZ's long-term growth strategy.",
    color: "#15803D",
    bg: "#F0FDF4",
    tier: "Platinum",
  },
  {
    id: 3,
    abbr: "IFC",
    name: "IFC World Bank",
    role: "Private Sector Development",
    desc: "Global private sector arm of the World Bank Group, structuring investment vehicles for international operators entering the zone.",
    color: "#B45309",
    bg: "#FFFBEB",
    tier: "Platinum",
  },
  {
    id: 4,
    abbr: "DAN",
    name: "Dangote Group",
    role: "Industrial Anchor Tenant",
    desc: "Africa's largest industrial conglomerate and DSEZ's flagship anchor tenant, driving manufacturing output and supply chain integration.",
    color: "#BE123C",
    bg: "#FFF1F2",
    tier: "Gold",
  },
  {
    id: 5,
    abbr: "DPW",
    name: "DP World",
    role: "Logistics & Port Operations",
    desc: "World-class port and logistics operator managing DSEZ's maritime gateway, including the newly commissioned Berth 7 facility.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    tier: "Platinum",
  },
];

const TIER_STYLE = {
  Platinum: "text-[#C2410C] bg-orange-50 border-orange-200",
  Gold: "text-[#92400E] bg-amber-50  border-amber-200",
};

// ─── Single Partner Card ──────────────────────────────────────────────────────
const PartnerCard = ({ partner, isActive }) => (
  <div
    className={`flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500
                ${
                  isActive
                    ? "bg-[#001e40] shadow-2xl scale-[1.02]"
                    : "bg-white border border-gray-100 shadow-sm scale-100"
                }`}
  >
    {/* Top accent bar */}
    <div
      className="h-1 w-full shrink-0"
      style={{ background: isActive ? "#FF5722" : partner.color }}
    />

    <div className="flex flex-col flex-1 p-7 sm:p-8 gap-5">
      {/* Logo badge + tier */}
      <div className="flex items-start justify-between gap-4">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center
                     justify-center shrink-0 font-black text-lg sm:text-xl
                     transition-all duration-300"
          style={{
            background: isActive ? "rgba(255,255,255,0.12)" : partner.bg,
            color: isActive ? "#fff" : partner.color,
          }}
        >
          {partner.abbr}
        </div>

        <span
          className={`text-[10px] font-bold uppercase tracking-widest
                      px-2.5 py-1 rounded-full border shrink-0 mt-1
                      ${
                        isActive
                          ? "bg-white/10 text-white border-white/20"
                          : TIER_STYLE[partner.tier]
                      }`}
        >
          {partner.tier}
        </span>
      </div>

      {/* Name + role */}
      <div>
        <h3
          className={`font-display text-lg sm:text-xl font-black leading-snug mb-1
                      ${isActive ? "text-white" : "text-[#001e40]"}`}
        >
          {partner.name}
        </h3>
        <p
          className={`text-xs font-bold uppercase tracking-wider
                      ${isActive ? "text-[#66dd8b]" : "text-[#4A4A4A]"}`}
        >
          {partner.role}
        </p>
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed flex-1
                    ${isActive ? "text-white/70" : "text-[#4A4A4A]"}`}
      >
        {partner.desc}
      </p>

      {/* CTA link */}
      <div
        className={`flex items-center gap-1.5 text-xs font-bold uppercase
                    tracking-wider transition-colors mt-auto
                    ${isActive ? "text-[#FF5722]" : "text-[#001e40]/50"}`}
      >
        Learn more
        <HiOutlineArrowRight className="w-3.5 h-3.5" />
      </div>
    </div>
  </div>
);

// ═════════════════════════════════════════════════════════════════════════════
const PartnersSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1=forward -1=backward
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visCount, setVisCount] = useState(3); // cards visible at once
  const timerRef = useRef(null);
  const touchRef = useRef(null);
  const sectionRef = useRef(null);

  // ── Responsive visible count ────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisCount(3);
      else if (window.innerWidth >= 640) setVisCount(2);
      else setVisCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = partners.length;

  // ── Navigation ──────────────────────────────────────────────────────────
  const goTo = useCallback(
    (next, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(((next % total) + total) % total);
        setAnimating(false);
      }, 380);
    },
    [animating, total],
  );

  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // ── Auto-advance ────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next, isPaused]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  };

  const handlePrev = () => {
    prev();
    resetTimer();
  };
  const handleNext = () => {
    next();
    resetTimer();
  };
  const handleDot = (i) => {
    if (i === current) return;
    goTo(i, i > current ? 1 : -1);
    resetTimer();
  };

  // ── Touch swipe ─────────────────────────────────────────────────────────
  const onTouchStart = (e) => {
    touchRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchRef.current === null) return;
    const diff = touchRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrev();
    }
    touchRef.current = null;
  };

  // ── Visible cards (wrapping slice) ──────────────────────────────────────
  const visibleCards = Array.from(
    { length: visCount },
    (_, i) => partners[(current + i) % total],
  );

  // ── Slide animation ──────────────────────────────────────────────────────
  const slideClass = animating
    ? direction === 1
      ? "-translate-x-4 opacity-0"
      : "translate-x-4 opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-28 bg-[#f9f9f9] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* ── Header ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-end
                        justify-between gap-6 mb-12 sm:mb-14"
        >
          <div>
            <span
              className="text-[10px] font-bold text-[#FF5722]
                             tracking-[0.25em] uppercase block mb-2"
            >
              Trusted Globally
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl font-black
                           text-[#001e40] leading-tight"
            >
              Our Partners
            </h2>
            <p className="text-[#4A4A4A] text-sm mt-2 max-w-sm">
              Working with world-class institutions across finance, trade,
              infrastructure and logistics.
            </p>
          </div>
        </div>

        {/* ── Slide-over carousel ── */}
        <div
          className={`grid gap-5 sm:gap-6 transition-all duration-[380ms] ease-out ${slideClass}`}
          style={{ gridTemplateColumns: `repeat(${visCount}, minmax(0, 1fr))` }}
        >
          {visibleCards.map((partner, i) => (
            <PartnerCard
              key={`${partner.id}-${current}-${i}`}
              partner={partner}
              isActive={
                (i === Math.floor(visCount / 2) && visCount > 1) ||
                visCount === 1
              }
            />
          ))}
        </div>

        {/* ── Dot nav ── */}
        <div
          className="flex items-center justify-center gap-2 mt-10"
          role="tablist"
          aria-label="Partner navigation"
        >
          {partners.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Partner ${i + 1}`}
              onClick={() => handleDot(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-2.5 h-2.5 bg-[#FF5722]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
