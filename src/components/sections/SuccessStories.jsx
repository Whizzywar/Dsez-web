import { useState } from "react";
import { TbQuote } from "react-icons/tb";
import { TbLeaf } from "react-icons/tb";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

// ─── Partner data ─────────────────────────────────────────────────────────────
const stories = [
  {
    id: 1,
    quote:
      "DSEZ has fundamentally changed our export logistics. The integrated customs clearance and dedicated power infrastructure allowed us to scale production by 40% in our first year of operations.",
    name: "John Mensah",
    role: "CEO, AgroTech Exports Ltd.",
    sector: "Agro-processing",
    SectorIcon: TbLeaf,
    stat: { value: "+40%", label: "Production growth" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3A8y34oLeOTfkhMOl-TjvruVGC3cGThkayseyl4KJ1KLmRqcS7jQAwi7CbLe6lKjNeOiY6-dQPEB9_AZkY0eqDuS4g9epPmI2YJ_K0nh_PuSdfZK_tnzeTagLHD_PGqifYYGBP-L4rybUxpTStkzWZzLjN8SB1_OpJ7NSNlbqjDQuAN9JiRkvJH78PoBID8FjczLmvakJkH4Ahh2c_ZUF6ba8SXYN1an8H9MD4cZZj9dI2kCbdAmbPIV7XZiNYY1oOkssZ0MeqgSy",
    accent: "#66dd8b",
  },
  {
    id: 2,
    quote:
      "We set up our regional distribution hub in under 48 hours using DSEZ's single-window portal. The zero-tariff access to AfCFTA markets alone saved us $1.8M in our first trading year.",
    name: "Adaeze Okonkwo",
    role: "Managing Director, TransAfrica Logistics",
    sector: "Logistics",
    SectorIcon: HiOutlineGlobeAlt,
    stat: { value: "$1.8M", label: "Tariff savings — Year 1" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
    accent: "#3B82F6",
  },
  {
    id: 3,
    quote:
      "The 99.9% grid uptime SLA was a game-changer for our semiconductor assembly line. Downtime in this industry is catastrophic — DSEZ's power guarantee gave our investors the confidence they needed.",
    name: "Dr. Julian Chen",
    role: "COO, PrecisionTech Manufacturing",
    sector: "Manufacturing",
    SectorIcon: HiOutlineBolt,
    stat: { value: "99.9%", label: "Power uptime guaranteed" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCGWMoNxn1u0bEGFUofvKTWphr9EHAXeBR93n7FHeH5RNIx76hkugKq_dJPaUPiETMDeAQ4yL6Eha2IjJkWL9u1PTzYaaKxN_lYf0kJ56TmelA99mOL8vteDAe8PPEdN2nH_bRctb6OpqxSzZaABALQBXCriU9YRMnHJhY3HUrBUF7rnKp0ZHpVwLwfdlFD8S50PvrPj4z_wRcrHtgI1ItxUKtqvqLNRcdzBIgu4N5ytnTzyEDPdU7lf7KkJiR7Tn3TtlrmaVdk8BH",
    accent: "#FF5722",
  },
  {
    id: 4,
    quote:
      "We processed over 120 customs declarations in a single week without a single delay. The DSEZ-ONE portal is genuinely the most efficient trade facilitation system we have used across 14 countries.",
    name: "Sarah Whitaker",
    role: "Head of Trade, Global Shipping Partners",
    sector: "Digital Services",
    SectorIcon: HiOutlineChartBar,
    stat: { value: "120+", label: "Declarations per week" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABgecDo7_zNdAxtq2ABEtjwHqrOTHNWCKKfArMlnEnwQmdIQpFBAsyfaUTMz4laOJOjf1pF5rHKjEkGWjoLLS91P0KQVEX20uWQSHKsEgfoUmgtcMOVYjZJCN6EsA_0dgFLIPIEL9zVgOdroRF2nPTRL2pOXoM15YJaXRAFqA6cYefe2SRLqcDGSyXo4SYRX9phKkheBgENOuCu2zEhlVkle_oZFg2YDI3Yvjqx-fpzTCc_RAWfS7WpFewc4DlN2bDlbJdtB6l7Zjq",
    accent: "#8B5CF6",
  },
  {
    id: 5,
    quote:
      "Relocating our regional HQ to DSEZ cut our operational costs by 30% within six months. The combination of the tax holiday, subsidised utilities, and a world-class workforce made this the clearest business decision we have made in a decade.",
    name: "Elena Rostova",
    role: "CFO, Meridian Capital Group",
    sector: "Finance",
    SectorIcon: HiOutlineBuildingOffice2,
    stat: { value: "30%", label: "Cost reduction in 6 months" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
    accent: "#F59E0B",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export const SuccessStories = () => {
  const [active, setActive] = useState(0);
  const story = stories[active];

  const prev = () =>
    setActive((i) => (i - 1 + stories.length) % stories.length);
  const next = () => setActive((i) => (i + 1) % stories.length);

  return (
    <section className="py-28 bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase block mb-2">
              Proven Results
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] leading-tight">
              Partner Success Stories
            </h2>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
                         text-[#001e40] hover:bg-[#001e40] hover:text-white hover:border-[#001e40]
                         transition-all active:scale-95"
            >
              <HiOutlineArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-gray-400 w-10 text-center">
              {active + 1} / {stories.length}
            </span>
            <button
              onClick={next}
              aria-label="Next story"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
                         text-[#001e40] hover:bg-[#001e40] hover:text-white hover:border-[#001e40]
                         transition-all active:scale-95"
            >
              <HiOutlineArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Main card ── */}
        <div
          key={story.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-gray-200
                     shadow-sm animate-fadeIn"
        >
          {/* Left — quote panel */}
          <div className="lg:col-span-7 bg-white p-10 md:p-14 flex flex-col justify-between gap-10">
            <div className="relative">
              {/* Large quote mark */}
              <TbQuote
                className="w-20 h-20 absolute -top-4 -left-3 rotate-180 pointer-events-none"
                style={{ color: story.accent, opacity: 0.1 }}
              />
              <p className="text-xl md:text-2xl text-[#1a1c1c] leading-relaxed font-light italic relative z-10 pt-6">
                "{story.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
              <img
                src={story.img}
                alt={story.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-offset-2"
                style={{ ringColor: story.accent }}
              />
              <div>
                <p className="font-display font-black text-[#001e40]">
                  {story.name}
                </p>
                <p className="text-sm text-[#4A4A4A] mt-0.5">{story.role}</p>
              </div>
              {/* Sector badge */}
              <div className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-bold text-[#43474f]">
                <story.SectorIcon className="w-3.5 h-3.5" />
                {story.sector}
              </div>
            </div>
          </div>

          {/* Right — stat + image */}
          <div
            className="lg:col-span-5 flex flex-col"
            style={{ background: story.accent }}
          >
            {/* Stat */}
            <div className="p-10 md:p-14 flex flex-col gap-2">
              <p className="font-display text-5xl md:text-6xl font-black text-white leading-none">
                {story.stat.value}
              </p>
              <p className="text-white/70 text-sm font-medium">
                {story.stat.label}
              </p>
            </div>

            {/* Photo fills the rest */}
            <div className="flex-1 min-h-45 relative overflow-hidden">
              <img
                src={story.img}
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30" />
            </div>
          </div>
        </div>

        {/* ── Dot nav ── */}
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Story navigation"
        >
          {stories.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`Story ${i + 1}: ${s.name}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2.5 bg-[#FF5722]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* ── All 5 avatar strip ── */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {stories.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              title={`${s.name} — ${s.role}`}
              className={`w-10 h-10 rounded-full overflow-hidden ring-2 ring-offset-2 transition-all duration-200
                          ${
                            i === active
                              ? "ring-[#FF5722] scale-110"
                              : "ring-transparent grayscale opacity-50 hover:opacity-80 hover:grayscale-0"
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
      </div>
    </section>
  );
};

export default SuccessStories;
