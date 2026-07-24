import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight, HiOutlineArrowUpRight } from "react-icons/hi2";

// ─── Articles ─────────────────────────────────────────────────────────────────
const articles = [
  {
    id: 1,
    date: "JUN 30, 2026",
    tag: "NEWS",
    headline: "DSEZ Phase II Smart Grid Now Fully Operational",
    summary:
      "The Authority has successfully integrated the Phase II AI-driven smart energy grid, delivering 99.9% uptime and cutting average energy costs by 22% for all industrial operators.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
  },
  {
    id: 2,
    date: "JUN 18, 2026",
    tag: "NEWS",
    headline: "Strategic MoU Signed with Global Logistics Alliance",
    summary:
      "A landmark MoU targeting a 40% reduction in transit times for all registered zone entities through integrated digital customs processing.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
  },
  {
    id: 3,
    date: "JUN 12, 2026",
    tag: "POLICY",
    headline: "Revised Digital Asset Regulatory Framework Published",
    summary:
      "DSEZ Regulatory Wing releases DARF-2024, providing clear licensure pathways for fintech and blockchain operators within the zone.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
  },
  {
    id: 4,
    date: "MAY 5, 2026",
    tag: "INVESTMENT",
    headline: "Zone Investment Surpasses $4B Target for Q3",
    summary:
      "DSEZ closed Q3 with $4.2B in verified FDI commitments, outperforming the annual target by 18% — driven by manufacturing and digital services.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qi2sHfPHAm1Aac7yQKuR7Yks0QZ3KGf-UlMAMhgbtap-_oMdXXVYZXrA6PC_TqCgzo1iNWN0-s5M4QhLH9e3cxKVrJFN8i_kJ7FP4NQaTHlJHAqWl9S0Y5c2YV1vLAnS0n8UMbLHh0ggN1uTwC4Y8_nxcNiGFKBzAW3-hx8FdKhYGRj8E7fIbgETLCUKIh_2l9mVADXSf5B6Kc6I-t7gQNxvGEHMqPqBw8F08YR3xfXk2uCxkzxYiNf76pWy39gCQyVQfh7o",
  },
  {
    id: 5,
    date: "APR 28, 2026",
    tag: "EVENTS",
    headline: "Regional Investment Summit 2026 — Official Recap",
    summary:
      "320 delegates from 42 nations attended DSEZ's flagship summit, resulting in 17 letters of intent and three confirmed anchor tenant agreements.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
  },
  {
    id: 6,
    date: "MAR 14, 2026",
    tag: "INFRASTRUCTURE",
    headline: "Port Integration Milestone: Berth 7 Now Operational",
    summary:
      "Berth 7 adds 12,000 TEU/month to DSEZ's maritime gateway, making it the highest-throughput inland digital port in the subregion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
  },
  {
    id: 7,
    date: "FEB 22, 2026",
    tag: "PARTNERSHIPS",
    headline: "DSEZ Signs Landmark AfDB Co-Financing Agreement",
    summary:
      "AfDB and DSEZ enter into a $220M co-financing arrangement for Phase III infrastructure — roads, water treatment, and broadband expansion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
  },
  {
    id: 8,
    date: "JAN 9, 2026",
    tag: "NEWS",
    headline: "DSEZ Awarded Highest-Tier AfCFTA Hub Certification",
    summary:
      "Following an 18-month review, DSEZ is certified as a Tier-1 Integrated Logistics Hub, unlocking preferential access across 54 AfCFTA markets.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
  },
  {
    id: 9,
    date: "DEC 5, 2025",
    tag: "NEWS",
    headline: "DSEZ Launches Single-Window Digital Trade Portal",
    summary:
      "DSEZ-ONE goes live, consolidating registration, customs, work permits, and tax filing into a single digital interface available 24/7.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBgWZVO94131r5JY3tpSsAuS9O_WklwMkptYDBWzal-BC3E4ZoyUasOjxSUCQE-9HkhTbnq7Y9PZJy8Tr_tQHkcc5XeY1omoRQLH_sKbACbGz3sjncTKAxRKHY9eWNx5gx6kgbayux9a9ua6q-ip8S2P5suSSR47OvYIf6IgJCye_d0xPFLsjGON8yETUKdN4NrhVzgBQR8yLQfBaHiYc6ZGsxUNGIvDXvKvJStFlMNopx9LBZMXUVpzhkzY9TtlHsBXMha2nCblqS",
  },
];

// ─── Ticker items ─────────────────────────────────────────────────────────────
const TICKER = [
  "● Phase II Smart Grid — Fully Operational",
  "● $4.2B FDI Confirmed — Q3 2026",
  "● MoU: Global Logistics Alliance",
  "● Berth 7 Maritime Gateway Now Open",
  "● DARF-2024 Fintech Framework Published",
  "● AfDB Co-Financing $220M Secured",
  "● AfCFTA Tier-1 Hub Certification Awarded",
  "● DSEZ-ONE Digital Portal Goes Live",
  "● Investment Summit 2026 Recap Available",
];

// tag → accent color mapping (DSEZ palette)
const TAG_COLORS = {
  NEWS: "#FF5722",
  POLICY: "#8B5CF6",
  INVESTMENT: "#001e40",
  EVENTS: "#0EA5E9",
  INFRASTRUCTURE: "#66dd8b",
  PARTNERSHIPS: "#F59E0B",
};

const INITIAL_SHOW = 6; // 2 full rows of 3

// ─── Article Card — Blue Origin structure, DSEZ colors ────────────────────────
const ArticleCard = ({ article }) => {
  const accent = TAG_COLORS[article.tag] || "#FF5722";

  return (
    <article
      className="bg-white rounded-sm overflow-hidden shadow-sm
                        hover:shadow-xl transition-all duration-300
                        cursor-pointer group flex flex-col"
    >
      {/* Image + white date badge — exact Blue Origin placement */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={article.img}
          alt={article.headline}
          loading="lazy"
          className="w-full h-full object-cover
                     group-hover:scale-[1.05] transition-transform duration-600"
        />
        {/* White date pill top-left */}
        <span
          className="absolute top-4 left-4 z-10
                         bg-white text-[#1a1c1c] text-[11px] font-bold
                         px-3 py-1.5 tracking-wider shadow-sm"
        >
          {article.date}
        </span>
      </div>

      {/* Text block */}
      <div className="px-5 pt-5 pb-6 flex flex-col flex-1 gap-3">
        {/* Coloured horizontal rule + tag — Blue Origin pattern, DSEZ orange accent */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-0.75 rounded-sm shrink-0"
            style={{ background: accent }}
          />
          <span
            className="text-[11px] font-bold tracking-[0.2em]"
            style={{ color: accent }}
          >
            {article.tag}
          </span>
        </div>

        {/* Headline — DSEZ navy */}
        <h2
          className="font-display font-black text-[#001e40] leading-snug
                       group-hover:text-[#FF5722] transition-colors duration-200
                       text-lg md:text-xl"
        >
          {article.headline}
        </h2>

        {/* Summary */}
        <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1">
          {article.summary}
        </p>

        {/* Read more */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-bold
                         text-[#001e40] group-hover:text-[#FF5722]
                         transition-colors mt-auto pt-2"
        >
          Read more
          <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </article>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
export default function NewsPage() {
  const [shown, setShown] = useState(INITIAL_SHOW);
  const visible = articles.slice(0, shown);
  const hasMore = shown < articles.length;

  // Double for seamless loop
  const tickerItems = [...TICKER, ...TICKER];

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <div className="news-dsez">
        {/* ══════════════════════════════════════════════════════ HERO ══ */}
        <section
          className="relative h-[75vh] min-h-130 max-h-195
                            overflow-hidden -mt-20"
        >
          {/* Background */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCWZtkbi3hu_TSrrxOAXSNeTWT1b2_wfhTBuG4Rm1TQ71eFv7X7m1k8bDAmJEW6ibqgIhQHIcGv1nynAswrSl4M7-4_pXpJuLrThdZffvwbbhzthQkMQpRxaxTL5YtqflstyE5NdCwlHUatZmwuGaUp_lNLpkb2vCElKiu9o5G3pJIGwGOnjshuCmWGq2tIQ1jHRJpDq87ETIsUN051K9TjSgbNfBc4HsfBzYtH4YHTN7vfr-KFcLoH9f4teRtV05vh6QR5xUITQZ"
            alt="DSEZ industrial zone"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0
                          bg-linear-to-b from-black/20 via-black/40 to-black/88"
          />

          {/* Decorative ring (DSEZ signature) */}
          <div
            className="absolute right-0 top-0 w-1/2 h-full
                          pointer-events-none overflow-hidden"
          >
            <div
              className="absolute -right-32 top-1/2 -translate-y-1/2
                            w-140 h-140 rounded-full border border-white/5
                            animate-[spin_60s_linear_infinite]"
            />
            <div
              className="absolute -right-10 top-1/2 -translate-y-1/2
                            w-85 h-85 rounded-full border border-white/5
                            animate-[spin_40s_linear_infinite_reverse]"
            />
          </div>

          {/* Content — bottom-left, Blue Origin style */}
          <div
            className="absolute bottom-0 left-0 w-full
                          px-5 sm:px-10 md:px-16
                          pb-14 pt-28
                          bg-linear-to-t from-black/80 to-transparent"
          >
            {/* Main headline */}
            <h1
              className="font-display font-black text-white tracking-tight
                           leading-[0.95] max-w-3xl
                           text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              The Latest
              <br />
              <span className="text-[#FF5722]">from DSEZ</span>
            </h1>

            {/* Live indicator */}
            <div className="flex items-center gap-2.5 mt-7">
              <span
                className="w-2 h-2 rounded-full bg-[#66dd8b] animate-pulse
                               shrink-0"
              />
              <span className="text-white/50 text-xs font-medium">
                Last updated: Jun 30, 2026 &nbsp;·&nbsp; 9 press releases this
                quarter
              </span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════ MARQUEE TICKER ══
            Navy band directly beneath hero — pauses on hover              */}
        <div className="bg-[#001e40] border-b border-white/8 py-4 overflow-hidden relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 h-full w-14 z-10 pointer-events-none
                          bg-linear-to-r from-[#001e40] to-transparent"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 h-full w-14 z-10 pointer-events-none
                          bg-linear-to-l from-[#001e40] to-transparent"
          />

          <div className="ticker-track">
            {tickerItems.map((item, i) => (
              <span
                key={i}
                className="text-xs font-bold text-white/55 px-8
                           whitespace-nowrap tracking-[0.18em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════ NEWS GRID ══
            desktop: 3 columns   (lg:grid-cols-3)
            mobile:  1 column    (grid-cols-1 — default)              */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-14">
          {/* Section header */}
          <div
            className="flex items-end justify-between
                          mb-10 pb-6 border-b border-gray-300"
          >
            <div>
              <span
                className="text-[10px] font-bold text-[#FF5722]
                               tracking-[0.25em] uppercase block mb-1"
              >
                Press Releases
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-[#001e40]">
                All Updates
              </h2>
            </div>
            <span className="text-xs text-gray-400 font-medium hidden sm:block">
              {articles.length} articles
            </span>
          </div>

          {/* THE GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {visible.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Show More — plain centred, Blue Origin style */}
          {hasMore ? (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShown((s) => s + 3)}
                className="border border-[#001e40] text-[#001e40] text-sm font-bold
                           px-12 py-3.5 tracking-wide
                           hover:bg-[#001e40] hover:text-white
                           transition-all duration-200 active:scale-95"
              >
                Show More Posts
              </button>
            </div>
          ) : (
            <p className="text-center text-sm text-gray-400 mt-14">
              You've reached the end of our news archive.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
