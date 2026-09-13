import { useState, useEffect, useCallback, useRef } from "react";
import { TbQuote } from "react-icons/tb";

// ─── Stories — extended with accent + stat + real image URLs ─────────────────
const stories = [
  {
    id: 1,
    quote:
      "DSEZ has fundamentally changed our export logistics. The integrated customs clearance and dedicated power infrastructure allowed us to scale production by 40% in our first year of operations.",
    name: "John Mensah",
    company: "AgroTech Exports Ltd.",
    sector: "Agro-processing",

    accent: "#FF5722",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3A8y34oLeOTfkhMOl-TjvruVGC3cGThkayseyl4KJ1KLmRqcS7jQAwi7CbLe6lKjNeOiY6-dQPEB9_AZkY0eqDuS4g9epPmI2YJ_K0nh_PuSdfZK_tnzeTagLHD_PGqifYYGBP-L4rybUxpTStkzWZzLjN8SB1_OpJ7NSNlbqjDQuAN9JiRkvJH78PoBID8FjczLmvakJkH4Ahh2c_ZUF6ba8SXYN1an8H9MD4cZZj9dI2kCbdAmbPIV7XZiNYY1oOkssZ0MeqgSy",
  },
  {
    id: 2,
    quote:
      "Operating within DSEZ has given us the infrastructure and connectivity we needed to expand across regional markets with confidence. The zero-tariff access saved us $1.8M in year one.",
    name: "Adaeze Okonkwo",
    company: "TransAfrica Logistics",
    sector: "Logistics",
    accent: "#FF5722",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
  },
  {
    id: 3,
    quote:
      "DSEZ provided the ideal environment for our manufacturing operations. The reliable infrastructure and business-friendly ecosystem have helped us grow efficiently.",
    name: "Dr. Julian Chen",
    company: "PrecisionTech Manufacturing",
    sector: "Manufacturing",
    accent: "#FF5722",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCGWMoNxn1u0bEGFUofvKTWphr9EHAXeBR93n7FHeH5RNIx76hkugKq_dJPaUPiETMDeAQ4yL6Eha2IjJkWL9u1PTzYaaKxN_lYf0kJ56TmelA99mOL8vteDAe8PPEdN2nH_bRctb6OpqxSzZaABALQBXCriU9YRMnHJhY3HUrBUF7rnKp0ZHpVwLwfdlFD8S50PvrPj4z_wRcrHtgI1ItxUKtqvqLNRcdzBIgu4N5ytnTzyEDPdU7lf7KkJiR7Tn3TtlrmaVdk8BH",
  },
  {
    id: 4,
    quote:
      "The digital infrastructure and strategic location at DSEZ have made it much easier for us to serve international clients while expanding our operations.",
    name: "Sarah Whitaker",
    company: "Global Shipping Partners",
    sector: "Digital Services",
    accent: "#FF5722",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABgecDo7_zNdAxtq2ABEtjwHqrOTHNWCKKfArMlnEnwQmdIQpFBAsyfaUTMz4laOJOjf1pF5rHKjEkGWjoLLS91P0KQVEX20uWQSHKsEgfoUmgtcMOVYjZJCN6EsA_0dgFLIPIEL9zVgOdroRF2nPTRL2pOXoM15YJaXRAFqA6cYefe2SRLqcDGSyXo4SYRX9phKkheBgENOuCu2zEhlVkle_oZFg2YDI3Yvjqx-fpzTCc_RAWfS7WpFewc4DlN2bDlbJdtB6l7Zjq",
  },
  {
    id: 5,
    quote:
      "DSEZ has created an environment where businesses can operate, connect and scale. The ecosystem has been a major advantage for our company.",
    name: "Elena Rostova",
    company: "Meridian Capital Group",
    sector: "Finance",
    accent: "#FF5722",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const SuccessStories = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animKey, setAnimKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchRef = useRef(null);
  const story = stories[active];
  const total = stories.length;

  // ── Core navigate (fixes animation not replaying on same-id revisit) ────
  const goTo = useCallback(
    (index, dir) => {
      setDirection(dir);
      setAnimKey((k) => k + 1);
      setActive(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(active + 1, "right"), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1, "left"), [active, goTo]);
  const selectStory = useCallback(
    (index) => {
      if (index === active) return;
      goTo(index, index > active ? "right" : "left");
    },
    [active, goTo],
  );

  // ── Auto-advance ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      return;
    }
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
    selectStory(i);
    resetTimer();
  };

  // ── Touch swipe ──────────────────────────────────────────────────────────
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

  return (
    <section
      className="w-full bg-[#f9f9f9] py-20 sm:py-24 lg:py-28 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <span
            className="text-[10px] font-bold text-[#FF5722]
                           tracking-[0.25em] uppercase block mb-2"
          >
            Proven Results
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl
                         font-black text-[#001e40] mb-4"
          >
            Partner Success Stories
          </h2>
          <p
            className="text-[#4A4A4A] text-sm sm:text-base
                        max-w-xl mx-auto leading-relaxed"
          >
            Discover how businesses are growing and thriving within the Delta
            Special Economic Zone.
          </p>
        </div>

        <div className="relative">
          {/* Card — animKey forces re-mount on every navigation */}
          <div
            key={animKey}
            className={`mx-10 sm:mx-12 rounded-2xl overflow-hidden shadow-lg
                        border border-gray-100
                        ${direction === "right" ? "slide-right" : "slide-left"}`}
          >
            <div
              className="flex flex-col md:flex-row bg-white
                            min-h-105 md:min-h-85 lg:min-h-90"
            >
              {/* ── Left: avatar + identity + stat ── */}
              <div
                className="flex flex-col items-center justify-center text-center
                              shrink-0 px-8 py-10 md:py-12 md:w-[36%]
                              border-b md:border-b-0 md:border-r border-gray-100"
              >
                {/* Avatar */}
                <div
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36
                             rounded-full overflow-hidden shadow-md
                             "
                >
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-display text-base sm:text-lg font-black text-[#001e40]">
                  {story.name}
                </h3>

                {/* Company */}
                <p className="mt-0.5 text-sm font-semibold text-[#4A4A4A]">
                  {story.company}
                </p>

                {/* Sector pill */}
                <span
                  className="mt-3 text-[10px] font-bold uppercase tracking-widest
                             px-3 py-1 rounded-full"
                  style={{
                    background: `${story.accent}20`,
                    color: story.accent,
                  }}
                >
                  {story.sector}
                </span>
              </div>

              {/* ── Right: quote ── */}
              <div
                className="flex flex-col justify-center
                              px-8 py-10 sm:px-10 md:py-12 md:flex-1"
              >
                <TbQuote
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-5"
                  style={{ color: story.accent, opacity: 0.25 }}
                />

                <blockquote
                  className="text-lg sm:text-xl lg:text-2xl font-medium
                             text-[#1a1c1c] leading-relaxed italic"
                >
                  "{story.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Dots  */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          {/* Pill dots */}
          <div className="flex items-center gap-2" role="tablist">
            {stories.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={active === index}
                aria-label={`Go to story ${index + 1}`}
                onClick={() => handleDot(index)}
                className="rounded-full transition-all duration-300"
                style={
                  active === index
                    ? { width: 10, height: 10, background: story.accent }
                    : { width: 10, height: 10, background: "#D1D5DB" }
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
