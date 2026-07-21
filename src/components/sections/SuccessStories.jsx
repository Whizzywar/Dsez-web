import { useState, useEffect, useRef, useCallback } from "react";
import { TbQuote } from "react-icons/tb";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { TbLeaf } from "react-icons/tb";

// ─── Data ─────────────────────────────────────────────────────────────────────
const stories = [
  {
    id: 1,
    quote:
      "DSEZ has fundamentally changed our export logistics. The integrated customs clearance and dedicated power infrastructure allowed us to scale production by 40% in our first year of operations.",
    name: "John Mensah",
    role: "CEO, AgroTech Exports Ltd.",
    company: "AgroTech",
    sector: "Agro-processing",
    SectorIcon: TbLeaf,
    stat: { value: "+40%", label: "Production growth" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3A8y34oLeOTfkhMOl-TjvruVGC3cGThkayseyl4KJ1KLmRqcS7jQAwi7CbLe6lKjNeOiY6-dQPEB9_AZkY0eqDuS4g9epPmI2YJ_K0nh_PuSdfZK_tnzeTagLHD_PGqifYYGBP-L4rybUxpTStkzWZzLjN8SB1_OpJ7NSNlbqjDQuAN9JiRkvJH78PoBID8FjczLmvakJkH4Ahh2c_ZUF6ba8SXYN1an8H9MD4cZZj9dI2kCbdAmbPIV7XZiNYY1oOkssZ0MeqgSy",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
    accent: "#66dd8b",
    accentDark: "#3aad68",
  },
  {
    id: 2,
    quote:
      "We set up our regional distribution hub in under 48 hours using DSEZ's single-window portal. The zero-tariff access to AfCFTA markets alone saved us $1.8M in our first trading year.",
    name: "Adaeze Okonkwo",
    role: "Managing Director, TransAfrica Logistics",
    company: "TransAfrica",
    sector: "Logistics",
    SectorIcon: HiOutlineGlobeAlt,
    stat: { value: "$1.8M", label: "Tariff savings — Year 1" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
    accent: "#3B82F6",
    accentDark: "#1D4ED8",
  },
  {
    id: 3,
    quote:
      "The 99.9% grid uptime SLA was a game-changer for our semiconductor assembly line. Downtime in this industry is catastrophic — DSEZ's power guarantee gave our investors the confidence they needed.",
    name: "Dr. Julian Chen",
    role: "COO, PrecisionTech Manufacturing",
    company: "PrecisionTech",
    sector: "Manufacturing",
    SectorIcon: HiOutlineBolt,
    stat: { value: "99.9%", label: "Power uptime guaranteed" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCGWMoNxn1u0bEGFUofvKTWphr9EHAXeBR93n7FHeH5RNIx76hkugKq_dJPaUPiETMDeAQ4yL6Eha2IjJkWL9u1PTzYaaKxN_lYf0kJ56TmelA99mOL8vteDAe8PPEdN2nH_bRctb6OpqxSzZaABALQBXCriU9YRMnHJhY3HUrBUF7rnKp0ZHpVwLwfdlFD8S50PvrPj4z_wRcrHtgI1ItxUKtqvqLNRcdzBIgu4N5ytnTzyEDPdU7lf7KkJiR7Tn3TtlrmaVdk8BH",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qi2sHfPHAm1Aac7yQKuR7Yks0QZ3KGf-UlMAMhgbtap-_oMdXXVYZXrA6PC_TqCgzo1iNWN0-s5M4QhLH9e3cxKVrJFN8i_kJ7FP4NQaTHlJHAqWl9S0Y5c2YV1vLAnS0n8UMbLHh0ggN1uTwC4Y8_nxcNiGFKBzAW3-hx8FdKhYGRj8E7fIbgETLCUKIh_2l9mVADXSf5B6Kc6I-t7gQNxvGEHMqPqBw8F08YR3xfXk2uCxkzxYiNf76pWy39gCQyVQfh7o",
    accent: "#FF5722",
    accentDark: "#E64A19",
  },
  {
    id: 4,
    quote:
      "We processed over 120 customs declarations in a single week without a single delay. The DSEZ-ONE portal is genuinely the most efficient trade facilitation system we have used across 14 countries.",
    name: "Sarah Whitaker",
    role: "Head of Trade, Global Shipping Partners",
    company: "Global Shipping",
    sector: "Digital Services",
    SectorIcon: HiOutlineChartBar,
    stat: { value: "120+", label: "Declarations per week" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABgecDo7_zNdAxtq2ABEtjwHqrOTHNWCKKfArMlnEnwQmdIQpFBAsyfaUTMz4laOJOjf1pF5rHKjEkGWjoLLS91P0KQVEX20uWQSHKsEgfoUmgtcMOVYjZJCN6EsA_0dgFLIPIEL9zVgOdroRF2nPTRL2pOXoM15YJaXRAFqA6cYefe2SRLqcDGSyXo4SYRX9phKkheBgENOuCu2zEhlVkle_oZFg2YDI3Yvjqx-fpzTCc_RAWfS7WpFewc4DlN2bDlbJdtB6l7Zjq",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
    accent: "#8B5CF6",
    accentDark: "#6D28D9",
  },
  {
    id: 5,
    quote:
      "Relocating our regional HQ to DSEZ cut our operational costs by 30% within six months. The combination of the tax holiday, subsidised utilities, and a world-class workforce made this the clearest business decision we have made in a decade.",
    name: "Elena Rostova",
    role: "CFO, Meridian Capital Group",
    company: "Meridian Capital",
    sector: "Finance",
    SectorIcon: HiOutlineBuildingOffice2,
    stat: { value: "30%", label: "Cost reduction in 6 months" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
    accent: "#F59E0B",
    accentDark: "#B45309",
  },
];

// ═════════════════════════════════════════════════════════════════════════════
const SuccessStories = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // 1 = forward, -1 = backward
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStart = useRef(null);

  const total = stories.length;
  const story = stories[active];

  // ── Navigate ──────────────────────────────────────────────────────────────
  const goTo = useCallback(
    (next, direction) => {
      if (animating) return;
      setDir(direction);
      setAnimating(true);
      setTimeout(() => {
        setActive(next);
        setAnimating(false);
      }, 420);
    },
    [animating],
  );

  const prev = useCallback(
    () => goTo((active - 1 + total) % total, -1),
    [active, total, goTo],
  );

  const next = useCallback(
    () => goTo((active + 1) % total, 1),
    [active, total, goTo],
  );

  // ── Auto-advance ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next, isPaused]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
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
    if (i === active) return;
    goTo(i, i > active ? 1 : -1);
    resetTimer();
  };

  // ── Touch / swipe ─────────────────────────────────────────────────────────
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrev();
    }
    touchStart.current = null;
  };

  // ── Slide animation classes ───────────────────────────────────────────────
  // "entering" = the card coming IN (slides in from the opposite direction)
  // We toggle between two visible/hidden states on the same card.
  const slideClass = animating
    ? dir === 1
      ? "-translate-x-8 opacity-0"
      : "translate-x-8 opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <section
      className="py-24 md:py-32 bg-[#001e40] overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Background image blur ── */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={story.bg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10 blur-sm scale-110
                     transition-all duration-700"
        />
        <div className="absolute inset-0 bg-[#001e40]/80" />
      </div>

      {/* Decorative ring */}
      <div
        className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full
                      border border-white/5 pointer-events-none"
      />
      <div
        className="absolute -left-20 -top-20 w-[320px] h-[320px] rounded-full
                      border border-white/5 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span
              className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block"
              style={{ color: story.accent }}
            >
              Proven Results
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight">
              Partner Success Stories
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center
                               justify-center text-white/70 hover:bg-white hover:text-[#001e40]
                               transition-all duration-200 active:scale-95"
            >
              <HiOutlineArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-sm font-bold text-white/40 tabular-nums">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next story"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center
                               justify-center text-white/70 hover:bg-white hover:text-[#001e40]
                               transition-all duration-200 active:scale-95"
            >
              <HiOutlineArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Slide card ── */}
        <div
          className={`transition-all duration-[420ms] ease-out ${slideClass}`}
        >
          <div
            className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl
                          bg-white/[0.06] backdrop-blur-sm p-8 sm:p-12 md:p-14
                          flex flex-col gap-10 max-w-4xl mx-auto"
          >
            {/* Quote */}
            <div className="relative">
              <TbQuote
                className="w-16 h-16 md:w-20 md:h-20 absolute -top-4 -left-2
                           rotate-180 pointer-events-none"
                style={{ color: story.accent, opacity: 0.15 }}
              />
              <p
                className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed
                             font-light italic relative z-10 pt-6"
              >
                "{story.quote}"
              </p>
            </div>

            {/* Author row */}
            <div className="flex flex-wrap items-center gap-5 pt-8 border-t border-white/10">
              <img
                src={story.img}
                alt={story.name}
                className="w-14 h-14 rounded-full object-cover shrink-0
                           ring-2 ring-offset-2 ring-offset-transparent"
                style={{ outlineColor: story.accent }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-display font-black text-white text-lg">
                  {story.name}
                </p>
                <p className="text-sm text-white/55 mt-0.5">{story.role}</p>
              </div>

              {/* Stat inline — replaces the removed right panel */}
              <div className="shrink-0 text-right">
                <p
                  className="font-display text-2xl font-black text-white leading-none"
                  style={{ color: story.accent }}
                >
                  {story.stat.value}
                </p>
                <p className="text-xs text-white/45 mt-1">{story.stat.label}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-px bg-white/10 -mx-8 sm:-mx-12 md:-mx-14 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 h-full"
                style={{
                  background: story.accent,
                  width: isPaused ? "100%" : "0%",
                  animation: isPaused
                    ? "none"
                    : "progress-fill 5s linear forwards",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Bottom nav: dots + avatar strip ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between
                        gap-6 mt-10"
        >
          {/* Avatar strip */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            {stories.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleDot(i)}
                title={`${s.name} — ${s.role}`}
                aria-label={`Go to story ${i + 1}: ${s.name}`}
                className={`rounded-full overflow-hidden transition-all duration-300
                            ring-2 ring-offset-1 ring-offset-[#001e40] ${
                              i === active
                                ? "w-12 h-12 ring-[#FF5722] scale-110"
                                : "w-9 h-9 ring-transparent grayscale opacity-40 hover:opacity-70 hover:grayscale-0"
                            }`}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Pill dots */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Story navigation"
          >
            {stories.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`Story ${i + 1}`}
                onClick={() => handleDot(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2.5"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
                style={i === active ? { background: story.accent } : {}}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar keyframe */}
      <style>{`
        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
