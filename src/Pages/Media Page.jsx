import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  pressReleases,
  CATEGORIES,
  mediaAssets,
  galleryImages,
  inTheNews,
} from "../data/siteData.js";
// ─── react-icons — every icon used on this page ───────────────────────────────
// All from react-icons/hi2 (Heroicons v2 outline). No inline SVGs anywhere.
import {
  HiOutlineArrowRight, // section CTAs, card links, featured card
  HiOutlineChevronRight, // "Read" link in PressCard
  HiOutlineArrowDownTray, // toolkit download button
  HiOutlineArrowTopRightOnSquare, // "In The News" external link icon
  HiOutlineCheckCircle, // newsletter success state
} from "react-icons/hi2";

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
        {/* ← HiOutlineChevronRight replaces the raw <svg> chevron */}
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

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        {/* ← HiOutlineCheckCircle replaces the raw <svg> check */}
        <HiOutlineCheckCircle className="w-12 h-12 text-[#66dd8b] mx-auto mb-3" />
        <p className="font-bold text-white">You're subscribed.</p>
        <p className="text-white/60 text-sm mt-1">
          Your first briefing arrives next month.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Professional email address"
        className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white
                   placeholder-white/40 text-sm focus:outline-none focus:border-[#66dd8b] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#66dd8b] hover:bg-[#50c878] text-[#001e40] font-bold px-8 py-3.5
                   rounded-xl transition-all text-sm whitespace-nowrap active:scale-95"
      >
        Subscribe
      </button>
    </form>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// Page
// ═════════════════════════════════════════════════════════════════════════════
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .news-page { font-family: 'DM Sans', sans-serif; }
        .news-page h1,.news-page h2,.news-page h3,.news-page h4,.news-page .font-display { font-family: 'Syne', sans-serif; }
        .ticker-track { animation: ticker 35s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

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
            <nav className="flex items-center gap-2 text-white/45 text-xs font-medium mb-10">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#66dd8b]">News & Media</span>
            </nav>
            <div className="max-w-3xl">
              <span className="text-[#66dd8b] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
                Communications Hub
              </span>
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

        {/* ════════════════════════════════════ MEDIA TOOLKIT ══ */}
        <section className="bg-[#f3f3f3] border-y border-gray-200 py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-3 block">
                  Press Resources
                </span>
                <h2 className="font-display text-3xl font-black text-[#001e40] mb-4">
                  Media Toolkit
                </h2>
                <p className="text-[#4A4A4A] leading-relaxed mb-8">
                  High-resolution assets for press use. All materials are
                  subject to DSEZ brand usage guidelines for international
                  recognition.
                </p>

                <div className="space-y-3">
                  {mediaAssets.map(({ Icon: AssetIcon, title, meta }) => (
                    <div
                      key={title}
                      className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4
                                 hover:border-[#001e40]/30 hover:shadow-sm transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg bg-[#001e40]/5 flex items-center justify-center
                                      text-[#001e40] shrink-0 group-hover:bg-[#001e40] group-hover:text-white transition-all"
                      >
                        {/* ← AssetIcon is now HiOutlinePhoto / HiOutlineSwatch / HiOutlineDocumentText */}
                        <AssetIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-[#001e40]">
                          {title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{meta}</p>
                      </div>
                      {/* ← HiOutlineArrowDownTray replaces raw <svg> download arrow */}
                      <button
                        className="text-xs font-bold text-[#001e40] hover:text-[#FF5722] transition-colors
                                         flex items-center gap-1 shrink-0"
                      >
                        Download
                        <HiOutlineArrowDownTray className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120} className="grid grid-cols-2 gap-4">
                {galleryImages.slice(0, 2).map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden aspect-video"
                  >
                    <img
                      src={img}
                      alt="DSEZ facility"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
                <div className="col-span-2 rounded-xl overflow-hidden aspect-video">
                  <img
                    src={galleryImages[2]}
                    alt="DSEZ digital infrastructure"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════ IN THE NEWS ══ */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-16">
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
                    {/* ← HiOutlineArrowTopRightOnSquare replaces raw <svg> */}
                    <HiOutlineArrowTopRightOnSquare className="w-4 h-4 text-gray-300 group-hover:text-[#001e40] transition-colors" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════ NEWSLETTER ══ */}
        <section className="pb-24 px-4 md:px-16 max-w-7xl mx-auto">
          <Reveal>
            <div className="bg-[#001e40] rounded-2xl px-8 md:px-16 py-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#66dd8b]/8 blur-3xl rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF5722]/8 blur-3xl rounded-full -ml-32 -mb-32" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-[#66dd8b] tracking-[0.25em] uppercase mb-4 block">
                  Stay Informed
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
                  Monthly Executive Briefing
                </h2>
                <p className="text-white/65 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                  Policy updates, infrastructure progress reports, and
                  investment opportunities — curated for decision-makers,
                  delivered once a month.
                </p>
                <NewsletterForm />
                <p className="text-white/30 text-xs mt-6">
                  By subscribing, you agree to the DSEZ Privacy Policy.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default MediaPage;
