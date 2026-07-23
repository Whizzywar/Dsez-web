/**
 * NewsPage.jsx — Exact Blue Origin mobile/desktop news UI
 * ─────────────────────────────────────────────────────────────────────────────
 * Pixel-matched from the screenshots provided:
 *
 * Per-article structure (top → bottom):
 *   ┌─────────────────────────────────┐
 *   │  [image, full-width]            │
 *   │  ┌───────────────┐              │
 *   │  │ JAN 22, 2026  │  ← white    │
 *   │  │ date badge    │    pill      │
 *   │  └───────────────┘    top-left  │
 *   └─────────────────────────────────┘
 *   ▬▬  NEWS                ← blue rule + tag label
 *
 *   Headline in bold blue (#0033DD / #0038FF)
 *
 *   Body text in dark grey, loose line-height
 *   ─────────────────────────── subtle divider
 *
 * Desktop: max-width container, same vertical stack, images wider
 * Mobile:  full-bleed, articles card-like with slight rounding + shadow
 */

import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Article data ─────────────────────────────────────────────────────────────
const articles = [
  {
    id: 1,
    date: "JUN 30, 2026",
    tag: "NEWS",
    headline: "DSEZ Phase II Smart Grid Now Fully Operational",
    summary:
      "A note from the Director General: The Authority has successfully integrated the Phase II AI-driven smart energy grid across all industrial parcels, delivering 99.9% uptime and cutting average energy costs for operators by 22%.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
  },
  {
    id: 2,
    date: "JUN 18, 2026",
    tag: "NEWS",
    headline: "Strategic MoU Signed with Global Logistics Alliance",
    summary:
      "DSEZ announced a landmark memorandum of understanding with the Global Logistics Alliance, targeting a 40% reduction in transit times for all registered zone entities through integrated digital customs processing.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
  },
  {
    id: 3,
    date: "JUN 12, 2026",
    tag: "POLICY",
    headline: "Revised Digital Asset Regulatory Framework Published",
    summary:
      "The DSEZ Regulatory Wing has released the updated DARF-2024 framework for blockchain-based transactions within the zone's jurisdiction, providing clear licensure pathways for fintech operators.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
  },
  {
    id: 4,
    date: "MAY 5, 2026",
    tag: "INVESTMENT",
    headline: "Zone Investment Surpasses $4B Target for Q3",
    summary:
      "DSEZ closed Q3 with $4.2B in verified foreign direct investment commitments, outperforming the annual target by 18% — driven primarily by manufacturing and digital services entrants.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qi2sHfPHAm1Aac7yQKuR7Yks0QZ3KGf-UlMAMhgbtap-_oMdXXVYZXrA6PC_TqCgzo1iNWN0-s5M4QhLH9e3cxKVrJFN8i_kJ7FP4NQaTHlJHAqWl9S0Y5c2YV1vLAnS0n8UMbLHh0ggN1uTwC4Y8_nxcNiGFKBzAW3-hx8FdKhYGRj8E7fIbgETLCUKIh_2l9mVADXSf5B6Kc6I-t7gQNxvGEHMqPqBw8F08YR3xfXk2uCxkzxYiNf76pWy39gCQyVQfh7o",
  },
  {
    id: 5,
    date: "APR 28, 2026",
    tag: "EVENTS",
    headline: "Regional Investment Summit 2026 — Official Recap",
    summary:
      "Over 320 delegates from 42 nations attended the DSEZ Authority's flagship summit, resulting in 17 letters of intent and three confirmed anchor tenant agreements.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
  },
  {
    id: 6,
    date: "MAR 14, 2026",
    tag: "INFRASTRUCTURE",
    headline: "Port Integration Milestone: Berth 7 Now Operational",
    summary:
      "The completion of Berth 7 adds 12,000 TEU/month capacity to the zone's maritime gateway, making DSEZ the highest-throughput inland digital port in the subregion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
  },
  {
    id: 7,
    date: "FEB 22, 2026",
    tag: "PARTNERSHIPS",
    headline: "DSEZ Signs Landmark AfDB Co-Financing Agreement",
    summary:
      "The African Development Bank and DSEZ entered into a $220M co-financing arrangement to accelerate Phase III infrastructure, covering road networks, water treatment, and broadband expansion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
  },
  {
    id: 8,
    date: "JAN 9, 2026",
    tag: "NEWS",
    headline: "DSEZ Awarded Highest-Tier AfCFTA Hub Certification",
    summary:
      "Following an 18-month review, the AfCFTA secretariat has certified DSEZ as a Tier-1 Integrated Logistics Hub, unlocking preferential treatment across 54 signatory markets.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
  },
];

const INITIAL_SHOW = 4;

// ─── Article card — pixel-matched to the screenshots ─────────────────────────
const ArticleCard = ({ article }) => (
  <article
    className="bg-white rounded-xl overflow-hidden shadow-sm
               hover:shadow-md transition-shadow duration-300 cursor-pointer"
  >
    {/* Image with date badge overlay — top-left white pill */}
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    >
      <img
        src={article.img}
        alt={article.headline}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      {/* White date badge — top-left, exactly as in screenshot */}
      <div className="absolute top-4 left-4">
        <span
          className="bg-white text-[#1a1c1c] text-xs font-bold
                         px-3 py-1.5 tracking-wide"
        >
          {article.date}
        </span>
      </div>
    </div>

    {/* Content block */}
    <div className="px-5 pt-6 pb-7 sm:px-7 sm:pt-7 sm:pb-8">
      {/* Blue rule + NEWS tag — exact from screenshot */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-[3px] bg-[#0033DD]" />
        <span className="text-xs font-bold tracking-[0.18em] text-[#1a1c1c]">
          {article.tag}
        </span>
      </div>

      {/* Headline — large, bold, bright blue exactly as screenshot */}
      <h2
        className="font-display font-black leading-tight mb-5 text-[#0033DD]"
        style={{ fontSize: "clamp(1.35rem, 4vw, 1.75rem)" }}
      >
        {article.headline}
      </h2>

      {/* Summary — dark text, generous line-height matching screenshot */}
      <p className="text-[#2a2a2a] leading-[1.85] text-[15px]">
        {article.summary}
      </p>
    </div>
  </article>
);

// ═════════════════════════════════════════════════════════════════════════════
export default function MediaPage() {
  const [shown, setShown] = useState(INITIAL_SHOW);
  const visible = articles.slice(0, shown);
  const hasMore = shown < articles.length;

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#1a1c1c]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        .news-bo { font-family: 'DM Sans', sans-serif; }
        .news-bo .font-display { font-family: 'Syne', sans-serif; }
        .news-bo h1,.news-bo h2,.news-bo h3 { font-family: 'Syne', sans-serif; }
      `}</style>

      <div className="news-bo">
        {/* ══════════════════════ HERO (kept from original NewsPage) ══
            Full-bleed grayscale image, title bottom-left, dark overlay fade   */}
        <section
          className="relative h-[70vh] min-h-[480px] max-h-[720px]
                            overflow-hidden -mt-20"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCWZtkbi3hu_TSrrxOAXSNeTWT1b2_wfhTBuG4Rm1TQ71eFv7X7m1k8bDAmJEW6ibqgIhQHIcGv1nynAswrSl4M7-4_pXpJuLrThdZffvwbbhzthQkMQpRxaxTL5YtqflstyE5NdCwlHUatZmwuGaUp_lNLpkb2vCElKiu9o5G3pJIGwGOnjshuCmWGq2tIQ1jHRJpDq87ETIsUN051K9TjSgbNfBc4HsfBzYtH4YHTN7vfr-KFcLoH9f4teRtV05vh6QR5xUITQZ"
            alt="DSEZ industrial zone"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b
                          from-black/30 via-black/40 to-black/80"
          />

          <div
            className="absolute bottom-0 left-0 w-full
                          px-5 sm:px-10 md:px-16 pb-12 pt-24
                          bg-gradient-to-t from-black/70 to-transparent"
          >
            <nav className="flex items-center gap-2 text-white/50 text-xs mb-5">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/80">News</span>
            </nav>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black
                           text-white leading-none tracking-tight max-w-2xl"
            >
              The Latest from DSEZ
            </h1>
          </div>
        </section>

        {/* ══════════════════════════════════ ARTICLE LIST ══
            Grey page background, white article cards, vertical stack.
            Each card: image (with date badge) → blue rule + tag → blue
            headline → dark body text.  Matches screenshot pixel-for-pixel.   */}
        <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">
          {visible.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}

          {/* Show More — plain centred button */}
          {hasMore && (
            <div className="flex justify-center pt-4 pb-8">
              <button
                onClick={() => setShown((s) => s + 4)}
                className="border border-[#1a1c1c] text-[#1a1c1c] text-sm font-bold
                           px-10 py-3 hover:bg-[#1a1c1c] hover:text-white
                           transition-all duration-200 active:scale-95 tracking-wide"
              >
                Show More Posts
              </button>
            </div>
          )}

          {!hasMore && (
            <p className="text-center text-sm text-gray-400 py-10">
              You've reached the end of our news archive.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
