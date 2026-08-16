import { useState, useEffect } from "react";
import { sanityClient, PRESS_RELEASES_QUERY, formatDate } from "../lib/sanity";
import { HiOutlineArrowRight } from "react-icons/hi2";

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

const TICKER_DOUBLED = [...TICKER, ...TICKER];

const TAG_COLORS = {
  NEWS: "#FF5722",
  POLICY: "#8B5CF6",
  INVESTMENT: "#001e40",
  EVENTS: "#0EA5E9",
  INFRASTRUCTURE: "#66dd8b",
  PARTNERSHIPS: "#F59E0B",
};

const ArticleCard = ({ article }) => {
  const accent = TAG_COLORS[article.tag] || "#FF5722";

  return (
    <article
      className="bg-white rounded-xs overflow-hidden shadow-sm  border-[1px] border-gray-300
                        hover:shadow-xl transition-all duration-300
                        cursor-pointer group flex flex-col"
    >
      <div className="relative overflow-hidden shrink-0">
        <img
          src={article.img}
          alt={article.headline}
          loading="lazy"
          className="w-full h-full object-cover
                     group-hover:scale-[1.05] transition-transform duration-600"
        />

        <span
          className="absolute top-4 left-4 z-10
                         bg-white text-[#1a1c1c] text-[11px] font-bold
                         px-3 py-1.5 tracking-wider shadow-sm"
        >
          {formatDate(article.date)}
        </span>
      </div>

      <div className="px-5 pt-5 pb-6 flex flex-col flex-1 gap-3">
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

        <h2
          className="font-display font-black text-[#001e40] leading-snug
                       group-hover:text-[#FF5722] transition-colors duration-200
                       text-lg md:text-xl"
        >
          {article.headline}
        </h2>

        {/* Summary */}
        <p className="text-[#4A4A4A] text-sm leading-7 flex-1">
          {article.summary}
        </p>
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
  const [articles, setArticles] = useState([]);
  const [shown, setShown] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetchs live articles from Sanity on mount
  useEffect(() => {
    sanityClient
      .fetch(PRESS_RELEASES_QUERY)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load articles. Please try again.");
        setLoading(false);
      });
  }, []);

  const visible = articles.slice(0, shown);
  const hasMore = shown < articles.length;

  if (loading)
    return (
      <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-10 h-10 border-2 border-[#001e40]
                      border-t-transparent rounded-full animate-spin"
          />
          <p className="text-sm text-gray-400 font-medium">Loading news...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-xl font-black text-[#001e40] mb-2">
            Could not load articles
          </p>
          <p className="text-sm text-gray-400">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <div className="news-dsez">
        <section
          className="relative h-[75vh] min-h-130 max-h-195
                            overflow-hidden -mt-20"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCWZtkbi3hu_TSrrxOAXSNeTWT1b2_wfhTBuG4Rm1TQ71eFv7X7m1k8bDAmJEW6ibqgIhQHIcGv1nynAswrSl4M7-4_pXpJuLrThdZffvwbbhzthQkMQpRxaxTL5YtqflstyE5NdCwlHUatZmwuGaUp_lNLpkb2vCElKiu9o5G3pJIGwGOnjshuCmWGq2tIQ1jHRJpDq87ETIsUN051K9TjSgbNfBc4HsfBzYtH4YHTN7vfr-KFcLoH9f4teRtV05vh6QR5xUITQZ"
            alt="DSEZ industrial zone"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

          <div
            className="absolute inset-0
                          bg-linear-to-b from-black/20 via-black/40 to-black/88"
          />

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

          <div
            className="absolute bottom-0 left-0 w-full
                          px-5 sm:px-10 md:px-16
                          pb-14 pt-28
                          bg-linear-to-t from-black/80 to-transparent"
          >
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
                {articles.length > 0
                  ? `${articles.length} press releases available`
                  : "Loading latest updates..."}
              </span>
            </div>
          </div>
        </section>

        {/* MARQUEE TICKER */}
        <div className="bg-[#001e40] border-b border-white/8 py-4 overflow-hidden relative">
          <div
            className="absolute left-0 top-0 h-full w-14 z-10 pointer-events-none
                          bg-linear-to-r from-[#001e40] to-transparent"
          />

          <div
            className="absolute right-0 top-0 h-full w-14 z-10 pointer-events-none
                          bg-linear-to-l from-[#001e40] to-transparent"
          />

          <div
            className="flex w-max animate-[ticker-roll_45s_linear_infinite]
                          hover:[animation-play-state:paused]"
          >
            {TICKER_DOUBLED.map((item, i) => (
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

        {/* NEWS GRID  */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-14">
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

          {/* Empty state — no articles yet in Sanity */}
          {articles.length === 0 && !loading && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm">
                No articles published yet. Add one in your Sanity Studio.
              </p>
            </div>
          )}

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
