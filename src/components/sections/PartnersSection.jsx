import { useState, useEffect, useRef, useCallback } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

// ─── 4 Partners ───────────────────────────────────────────────────────────────
const partners = [
  {
    id: 1,
    abbr: "AfDB",
    name: "African Development Bank",
    image: "/images/deltalogo-300x231-1-150x150.jpg",
  },
  {
    id: 2,
    abbr: "FZT",
    name: "Free Zone Trades",
    image: "/images/nepza-150x150-1.jpg",
  },
  {
    id: 3,
    abbr: "IFC",
    name: "IFC World Bank",
    image: "/images/download-150x150-1.jpg",
  },
  {
    id: 4,
    abbr: "DPW",
    name: "DP World",
    image: "/images/4d596b20-66d7-4e00-935c-d2bb40ac050c.png",
  },
];

// ─── Badge Card ──────────────────────────────────────────────────────────────
const BadgeCard = ({ partner, isActive }) => (
  <div
    className={`
      relative flex flex-col items-center justify-center
      rounded-3xl
      py-8 px-5
      sm:py-10 sm:px-6
      min-h-[300px]
      transition-all duration-500
      cursor-default select-none
      overflow-hidden
    
    `}
  >
    {/* Logo */}
    {partner.image ? (
      <div
        className={`
          relative z-10
          w-40 h-40
          sm:w-48 sm:h-48
          rounded-2xl
          flex items-center justify-center
          overflow-hidden
          transition-all duration-500
          ${isActive ? "bg-[]" : "bg-white"}
        `}
      >
        <img
          src={partner.image}
          alt={partner.name}
          className="
            w-full h-full
            object-contain
            p-3
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>
    ) : (
      <div
        className="
          relative z-10
          w-28 h-28
          sm:w-32 sm:h-32
          rounded-full
          flex items-center justify-center
          font-black
          text-2xl sm:text-3xl
          transition-all duration-500
        "
        style={{
          background: isActive ? "rgba(255,255,255,0.10)" : partner.bg,
          color: isActive ? "#ffffff" : partner.color,
        }}
      >
        {partner.abbr}
      </div>
    )}

    {/* Company name */}
    <p
      className={`
        relative z-10
        mt-6
        max-w-[220px]
        text-xs sm:text-sm
        font-bold
        text-center
        leading-snug
        ${isActive ? "text-black" : "text-[#4A4A4A]"}
      `}
    >
      {partner.name}
    </p>

    {/* Accent line */}
    <div
      className={`
        relative z-10
        mt-5
        h-1
        rounded-full
        transition-all duration-500
       
      `}
    />
  </div>
);

// ═════════════════════════════════════════════════════════════════════════════
const PartnersSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visCount, setVisCount] = useState(3);

  const timerRef = useRef(null);
  const touchRef = useRef(null);

  // ── Responsive visible count ──────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) {
        setVisCount(3);
      } else if (window.innerWidth >= 640) {
        setVisCount(2);
      } else {
        setVisCount(1);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const total = partners.length;

  // ── Navigation ────────────────────────────────────────────────────────────
  const goTo = useCallback(
    (nextIndex, dir) => {
      if (animating) return;

      setDirection(dir);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(((nextIndex % total) + total) % total);
        setAnimating(false);
      }, 380);
    },
    [animating, total],
  );

  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // ── Auto advance ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(next, 4000);

    return () => {
      clearInterval(timerRef.current);
    };
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

  const handleDot = (index) => {
    if (index === current) return;

    goTo(index, index > current ? 1 : -1);

    resetTimer();
  };

  // ── Touch swipe ────────────────────────────────────────────────────────────
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

  // ── Visible cards ─────────────────────────────────────────────────────────
  const visibleCards = Array.from(
    { length: visCount },
    (_, i) => partners[(current + i) % total],
  );

  // ── Slide animation ───────────────────────────────────────────────────────
  const slideClass = animating
    ? direction === 1
      ? "-translate-x-4 opacity-0"
      : "translate-x-4 opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <section
      className="
        relative
        py-20
        sm:py-24
        lg:py-28
        bg-[#f9f9f9]
        overflow-hidden
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          md:px-16
        "
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-12 sm:mb-14">
          <span
            className="
              text-[10px]
              font-bold
              text-[#FF5722]
              tracking-[0.25em]
              uppercase
              block
              mb-2
            "
          >
            Our Partners
          </span>

          <h2
            className="
              font-display
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-black
              text-[#001e40]
              leading-tight
              mb-4
            "
          >
            Trusted Partners
          </h2>

          <p
            className="
              text-[#4A4A4A]
              text-sm
              sm:text-base
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            We collaborate with leading organizations to drive growth,
            facilitate trade, and create sustainable economic impact.
          </p>
        </div>
        {/* ── Partner Carousel ───────────────────────────────────────────── */}
        <div className="relative flex items-center">
          {/* Left Navigation */}
          <button
            onClick={handlePrev}
            aria-label="Previous partner"
            className="
      absolute
      left-0
      sm:-left-5
      lg:-left-14
      top-1/2
      -translate-y-1/2
      z-20
      w-10
      h-10
      sm:w-12
      sm:h-12
      rounded-full
      bg-white
      border
      border-gray-200
      shadow-lg
      flex
      items-center
      justify-center
      text-[#001e40]
      hover:bg-[#001e40]
      hover:text-white
      hover:border-[#001e40]
      transition-all
      duration-300
      active:scale-95
    "
          >
            <HiOutlineArrowLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div
            className={`
      w-full
      grid
      gap-5
      sm:gap-6
      transition-all
      duration-[380ms]
      ease-out
      ${slideClass}
    `}
            style={{
              gridTemplateColumns: `repeat(${visCount}, minmax(0, 1fr))`,
            }}
          >
            {visibleCards.map((partner, i) => (
              <BadgeCard
                key={`${partner.id}-${current}-${i}`}
                partner={partner}
                isActive={
                  visCount === 1 ||
                  (visCount === 2 && i === 0) ||
                  (visCount === 3 && i === 1)
                }
              />
            ))}
          </div>

          {/* Right Navigation */}
          <button
            onClick={handleNext}
            aria-label="Next partner"
            className="
      absolute
      right-0
      sm:-right-5
      lg:-right-14
      top-1/2
      -translate-y-1/2
      z-20
      w-10
      h-10
      sm:w-12
      sm:h-12
      rounded-full
      bg-white
      border
      border-gray-200
      shadow-lg
      flex
      items-center
      justify-center
      text-[#001e40]
      hover:bg-[#001e40]
      hover:text-white
      hover:border-[#001e40]
      transition-all
      duration-300
      active:scale-95
    "
          >
            <HiOutlineArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* ── Dots ───────────────────────────────────────────────────────── */}
        <div
          className="
    flex
    items-center
    justify-center
    gap-2
    mt-8
  "
          role="tablist"
        >
          {partners.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Partner ${i + 1}`}
              onClick={() => handleDot(i)}
              className={`
        rounded-full
        transition-all
        duration-300
        ${
          i === current
            ? "w-2.5 h-2.5 bg-[#001e40]"
            : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
        }
      `}
            />
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default PartnersSection;
