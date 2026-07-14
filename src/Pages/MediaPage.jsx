import { useState, useRef, useEffect } from "react";

import {
  HiOutlineArrowRight,
  HiOutlineChevronRight,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

// ─── Data for media page ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Infrastructure",
  "Partnerships",
  "Policy",
  "Investment",
  "Events",
];

const pressReleases = [
  {
    id: 1,
    category: "Infrastructure",
    categoryColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    date: "Oct 24, 2024",
    title: "DSEZ Unveils Phase II Smart Grid Integration",
    body: "The Authority has successfully integrated the Phase II AI-driven smart energy grid, ensuring 99.9% uptime for all industrial partners within the zone, cutting average energy costs by 22%.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe0HJ02N6S_7UkF452R9ajOu2SoPuMHtCLxAm-ckAycMeZu4MsSDO34gqJGZvNj2e4kTGO4OId80VNWaBJYIrSljEaJnERerlezeV5NvKbmv6D-jJx99JnmZmY2cFbjQtsqexm5xFHOtjPg-Xj-2YdMr_cpIk0wKW9yzIF7RzwuyPmc4eRudwKLgwx3Coz3rbRZj7H99zSQqPZqyTuFoMqR1LOl7fMYiiy86aA34lXozdkgF7_CPsQzEWZ9en76wehEwNfjzkF5Lov",
    featured: true,
  },
  {
    id: 2,
    category: "Partnerships",
    categoryColor: "bg-blue-50 text-blue-700 border border-blue-200",
    date: "Oct 18, 2024",
    title: "Strategic MoU Signed with Global Logistics Alliance",
    body: "New partnership aims to streamline cross-border digital customs processing, reducing transit times by up to 40% for all registered entities operating within DSEZ jurisdiction.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
    featured: false,
  },
  {
    id: 3,
    category: "Policy",
    categoryColor: "bg-orange-50 text-orange-700 border border-orange-200",
    date: "Oct 12, 2024",
    title: "Revised Digital Asset Framework Published",
    body: "The Regulatory Wing has released the updated framework for blockchain-based transactions within DSEZ jurisdiction, providing clarity for fintech operators seeking licensure.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNrRV7BzY8qVscTLGrJUR57sufDr_YUUh9Q6T8aLYYPqObvQs2z3BTMrzGBYDV7T6vdy07n8FQI8Qu07pxHv6Un6k_v1rQrhqua7Sz_VnFih2_EX1XNMGqgjGgIMyypbLaT0NWTU_P8pfc9_dS8wdD_J8-TWUt7-3Z3C_zaxTm89gD4XFcYdeGy8CkyHJvThl2euIB3u6HGMvVFAgLGVpbwjus_OvOQHeYTvZ4dTJ1mr2JPbhB4w_XQ172iMzGlqa7z8OaEinYjVi",
    featured: false,
  },
  {
    id: 4,
    category: "Investment",
    categoryColor: "bg-purple-50 text-purple-700 border border-purple-200",
    date: "Oct 5, 2024",
    title: "Zone Investment Surpasses $4B Target for Q3",
    body: "DSEZ closed Q3 with $4.2B in verified foreign direct investment commitments, outperforming the annual target by 18% — driven by manufacturing and digital services entrants.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGInBh8G-7Wr7K0bcFu6IiUSYb2zS1C1LvHLDG4pXy2-8tB0kgUeXBluqolE4gjZ557cEw4gUWbAtbUIKquku9t-sDAhBjj2n7-QNdtYCX3-CIGBt7WlvzmwSKjpezEhbUaHO9IH43xXQ1FivCEehEodI0RHJOMTKaC1Y5p1jYgNrxaqKytJ9EiBeCuc3WuMwTdzT7Qn1PWOAlb4XJmbxocEa_fFWMnXNRYaAS-UKBTsR1NQ60GC-9eLTpWvRPGsMtTomtEfhttd0",
    featured: false,
  },
  {
    id: 5,
    category: "Events",
    categoryColor: "bg-sky-50 text-sky-700 border border-sky-200",
    date: "Sep 28, 2024",
    title: "Regional Investment Summit 2024 — Official Recap",
    body: "Over 320 delegates from 42 nations attended the DSEZ Authority's flagship summit, resulting in 17 letters of intent and three confirmed anchor tenant agreements.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlxpCrMl4bpiPRW0h9HLylNqQMWDxx49SfJMwZemZP2jEbl_jZwEkn-OZBpgu2iFwzwR-srtMYAcK13aUB4Xs46OhUrz2Vf41BYNWv5D2gkaKhBISWvLY2Ysg-qWYbyoHtFnyuRr2tx0_DDqVgsO3SshW34hmFnckeSVZGMXrex-beYHpXmCrBYWIGEIszCSSbl2uFsY4gX2dDrEfF3g2dcKA6XD8li2xKqczqOHqnIqFjeF6UL7A7Hz0JcXvctxgSgrWkdQPsyCeZ",
    featured: false,
  },
  {
    id: 6,
    category: "Infrastructure",
    categoryColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    date: "Sep 14, 2024",
    title: "Port Integration Milestone: Berth 7 Now Operational",
    body: "The completion of Berth 7 adds 12,000 TEU/month capacity to the zone's maritime gateway, making DSEZ the highest-throughput inland digital port in the subregion.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rmKgH2pe3_wz_q5R75t21k30Uqwbc3B4SMtLNf8Cnt-ZSb4XInvpKr7o6_sypPsSQ6JeNMpb988Ree_5vBQA4WSbgn1_aAZjZUhAQfa_bkKy3Wk3eFosRgtMlkHYrdTpDbBPSkFiKReBzObqs58xycwbaJXatBYmDLs3pz7PoxJDvt1_uGc4D8jzXIwGmEIVC6ABjmGbkYv_NK9YfB0MaDwRkOszvfMTxrX0gC8nFcOkfkl2iw6mMeZi7xZMNc3Z-mnBXAZigTqH",
    featured: false,
  },
];

const inTheNews = [
  {
    outlet: "Global Trade Journal",
    headline:
      "How DSEZ is Redefining the Future of Trans-Continental Digital Trade",
    summary:
      "An in-depth analysis of the zone's regulatory framework and its ripple effect across APAC trade corridors.",
    date: "November 2024",
    large: true,
  },
  {
    outlet: "The Financial Standard",
    headline: "Zone Investment Surpasses $4B Target for Q3",
    date: "October 2024",
  },
  {
    outlet: "Maritime Weekly",
    headline: "Port Integration Complete: A New Logistics Milestone",
    date: "October 2024",
  },
  {
    outlet: "Tech Insights Africa",
    headline: "DSEZ Named AI Governance Lead in Emerging Markets Report",
    date: "September 2024",
  },
];

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
const useReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

//
// ─── Sub-components ───────────────────────────────────────────────────────────
const FeaturedCard = ({ article }) => (
  <article
    className="group relative rounded-2xl overflow-hidden border border-gray-200
                      hover:shadow-xl transition-all duration-500 cursor-pointer bg-white"
  >
    <div className="relative h-72 overflow-hidden">
      <img
        src={article.img}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#001e40]/90 via-[#001e40]/30 to-transparent" />
      <div className="absolute top-4 left-4">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${article.categoryColor}`}
        >
          {article.category}
        </span>
      </div>
    </div>
    <div className="p-7">
      <p className="text-xs text-gray-400 font-medium mb-3">{article.date}</p>
      <h3
        className="font-display text-xl font-black text-[#001e40] mb-3 leading-snug
                     group-hover:text-[#FF5722] transition-colors"
      >
        {article.title}
      </h3>
      <p className="text-sm text-[#4A4A4A] leading-relaxed line-clamp-3 mb-5">
        {article.body}
      </p>
      {/* ← HiOutlineArrowRight replaces the raw <svg> arrow */}
      <span
        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#001e40]
                       group-hover:text-[#FF5722] group-hover:gap-2.5 transition-all"
      >
        Read Statement
        <HiOutlineArrowRight className="w-4 h-4" />
      </span>
    </div>
  </article>
);

const PressCard = ({ article, delay = 0 }) => (
  <Reveal delay={delay}>
    <article
      className="group flex gap-5 bg-white border border-gray-100 rounded-2xl p-6
                        hover:border-[#001e40]/30 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${article.categoryColor}`}
            >
              {article.category}
            </span>
            <span className="text-[10px] text-gray-400">{article.date}</span>
          </div>
          <h4
            className="font-bold text-sm text-[#001e40] leading-snug line-clamp-2
                         group-hover:text-[#FF5722] transition-colors"
          >
            {article.title}
          </h4>
        </div>

        <span
          className="text-xs font-bold text-[#001e40]/60 mt-2 group-hover:text-[#FF5722]
                         inline-flex items-center gap-1 transition-colors"
        >
          Read
          <HiOutlineChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  </Reveal>
);

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = pressReleases.find((a) => a.featured);
  const filtered =
    activeCategory === "All"
      ? pressReleases
      : pressReleases.filter((a) => a.category === activeCategory);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <div className="news-page">
        {/* ══════════════════════════════════════════════════════ HERO ══ */}
        <section className="relative min-h-135 flex items-center overflow-hidden -mt-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCWZtkbi3hu_TSrrxOAXSNeTWT1b2_wfhTBuG4Rm1TQ71eFv7X7m1k8bDAmJEW6ibqgIhQHIcGv1nynAswrSl4M7-4_pXpJuLrThdZffvwbbhzthQkMQpRxaxTL5YtqflstyE5NdCwlHUatZmwuGaUp_lNLpkb2vCElKiu9o5G3pJIGwGOnjshuCmWGq2tIQ1jHRJpDq87ETIsUN051K9TjSgbNfBc4HsfBzYtH4YHTN7vfr-KFcLoH9f4teRtV05vh6QR5xUITQZ"
            alt="DSEZ Authority HQ"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#001e40]/95 via-[#001e40]/80 to-[#001e40]/50" />
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-160 h-160 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-90 h-90 rounded-full border border-white/5 animate-[spin_35s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full pt-32 pb-20">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                News &amp; Media
                <br />
                <span className="text-[#FF5722]">Center</span>
              </h1>
              <p className="text-lg text-white/75 leading-relaxed max-w-xl">
                The official source for DSEZ updates, institutional coverage,
                and media assets for global investors and press partners.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <span className="w-2 h-2 rounded-full bg-[#66dd8b] animate-pulse" />
                <span className="text-xs text-white/60 font-medium">
                  Last updated: Oct 24, 2024 · 6 press releases this quarter
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ LIVE TICKER ══ */}
        <div className="bg-[#001e40] py-3.5 overflow-hidden border-b border-white/5">
          <div className="flex w-max ticker-track">
            {[...Array(2)]
              .flatMap(() => [
                "● Phase II Smart Grid Live",
                "● $4.2B FDI Confirmed — Q3",
                "● MoU: Global Logistics Alliance",
                "● Berth 7 Now Operational",
                "● Digital Asset Framework Updated",
                "● Regional Investment Summit Recap",
              ])
              .map((item, i) => (
                <span
                  key={i}
                  className="text-xs font-bold text-white/60 px-8 whitespace-nowrap tracking-wider"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>

        {/* ══════════════════════════════════ PRESS RELEASES ══ */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-16">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="border-l-4 border-[#FF5722] pl-5">
              <h2 className="font-display text-3xl font-black text-[#001e40]">
                Press Releases
              </h2>
              <p className="text-[#4A4A4A] text-sm mt-1">
                Official statements and milestone announcements.
              </p>
            </div>
            {/* ← HiOutlineArrowRight replaces raw <svg> */}
            <button
              className="text-[#001e40] text-sm font-bold inline-flex items-center gap-1.5
                               hover:text-[#FF5722] transition-colors shrink-0"
            >
              View Archive
              <HiOutlineArrowRight className="w-4 h-4" />
            </button>
          </Reveal>

          {/* Filter pills */}
          <Reveal delay={60} className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#001e40] text-white border-[#001e40]"
                    : "bg-white text-[#4A4A4A] border-gray-200 hover:border-[#001e40]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Featured + grid */}
          {activeCategory === "All" && featured && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Reveal className="lg:col-span-2">
                <FeaturedCard article={featured} />
              </Reveal>
              <div className="flex flex-col gap-6">
                {pressReleases.slice(1, 3).map((a, i) => (
                  <PressCard key={a.id} article={a} delay={i * 80} />
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(activeCategory === "All" ? rest : filtered)
              .slice(0, visibleCount)
              .map((a, i) => (
                <PressCard key={a.id} article={a} delay={i * 60} />
              ))}
          </div>

          {(activeCategory === "All" ? rest : filtered).length >
            visibleCount && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((v) => v + 3)}
                className="border border-[#001e40] text-[#001e40] font-bold px-8 py-3 rounded-xl
                           hover:bg-[#001e40] hover:text-white transition-all text-sm"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* ════════════════════════════════ IN THE NEWS ══ */}
        <section className="py-10 max-w-7xl mx-auto px-4 md:px-16">
          <Reveal className="text-center mb-14">
            <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
              External Coverage
            </span>
            <h2 className="font-display text-3xl font-black text-[#001e40]">
              In The News
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Large feature card */}
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <div
                className="bg-[#001e40] rounded-2xl p-8 h-full flex flex-col justify-between
                              group cursor-pointer hover:bg-[#002a5a] transition-colors duration-300 min-h-65"
              >
                <div>
                  <p className="text-[#66dd8b] text-xs font-bold uppercase tracking-widest mb-4">
                    {inTheNews[0].outlet}
                  </p>
                  <h3 className="font-display text-xl font-black text-white leading-snug mb-4">
                    "{inTheNews[0].headline}"
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {inTheNews[0].summary}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                  <span className="text-white/40 text-xs">
                    {inTheNews[0].date}
                  </span>
                  {/* ← HiOutlineArrowTopRightOnSquare replaces raw <svg> external link */}
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 text-white/40 group-hover:text-[#66dd8b] transition-colors" />
                </div>
              </div>
            </Reveal>

            {/* Small news cards */}
            {inTheNews.slice(1).map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col
                                justify-between group cursor-pointer hover:border-[#001e40]/30
                                hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <p className="text-[#FF5722] text-[10px] font-bold uppercase tracking-widest mb-2">
                      {item.outlet}
                    </p>
                    <h4 className="font-bold text-[#001e40] text-sm leading-snug group-hover:text-[#FF5722] transition-colors">
                      {item.headline}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 text-[10px]">
                      {item.date}
                    </span>

                    <HiOutlineArrowTopRightOnSquare className="w-4 h-4 text-gray-300 group-hover:text-[#001e40] transition-colors" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaPage;
