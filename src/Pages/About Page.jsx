import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { leaders, objectives, orgDepts } from "../data/siteData";
import { LinkedInIcon, regulatoryItems } from "../components/ui/Icon";

//─── Scroll-reveal hook ───────────────────────────────────────────────────────//
const useReveal = () => {
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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

// ─── Animated progress bar ────────────────────────────────────────────────────
const ProgressBar = ({ label, value, display }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white/80">{label}</span>
        <span className="text-[#66dd8b] font-bold text-sm">{display}</span>
      </div>
      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#66dd8b] rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
};

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AboutPage = () => {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .about-page, .about-page * { font-family: 'DM Sans', sans-serif; }
        .about-page h1,.about-page h2,.about-page h3,.about-page h4,.about-page .font-display { font-family: 'Syne', sans-serif; }
        .dot-grid { background-image: radial-gradient(circle, #D1D5DB 1px, transparent 1px); background-size: 28px 28px; }
        .hero-clip { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
        .leader-card img { filter: grayscale(100%); transition: filter 0.5s ease, transform 0.6s ease; }
        .leader-card:hover img { filter: grayscale(0%); transform: scale(1.05); }
      `}</style>

      <div className="about-page">
        {/* ══════════════════════════════════════════════════════ HERO ══ */}
        <section className="relative hero-clip h-[560px] min-h-[500px] flex items-center overflow-hidden -mt-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYFAlwJ9D0cDp8ZXiH4vKDTHRjKg37VxbP-3Ga4tdL0WGnrc1L6KE-UKg2yfhsL-UvPAE5KD4mxhm5307m2NTdnZTIyHrme2AD4O0gjNLyQ7lbbKa3xb5V2vGFGqh86zLqpvw5tXpZcwcS6gYk6U3gJ0yU1Akr9F343lcJDv1TZRx8v_edUiRV3Iwq5RpeCiNBLhzS-yPm6aN-474iNMQxQM2qK_febldZHoNZ-ZQVc8k8Tr5CuyRG9QUrkiQICG5jTYRzBBa3CFUs"
            alt="DSEZ Corporate Skyline"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] via-[#001e40]/85 to-transparent" />

          {/* Decorative rings */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 animate-[spin_50s_linear_infinite]" />
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full">
            <div className="max-w-3xl">
              <span className="text-[#66dd8b] text-xs font-bold tracking-[0.25em] uppercase block mb-4">
                Global Infrastructure
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Pioneering the Digital
                <br />
                <span className="text-[#FF5722]">Economic Frontier.</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                DSEZ serves as the premier gateway for international trade,
                leveraging advanced logistics and high-tech digital
                infrastructure to redefine economic facilitation in the modern
                era.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════ MISSION INTRO ══ */}
        <section className="py-28 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <Reveal className="md:col-span-4">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-3 block">
                Who We Are
              </span>
              <h2 className="font-display text-3xl font-black text-[#001e40] leading-snug">
                The Mission of Facilitation
              </h2>
              {/* Vertical accent rule */}
              <div className="mt-6 w-0.5 h-16 bg-gradient-to-b from-[#FF5722] to-transparent" />
            </Reveal>

            <Reveal delay={120} className="md:col-span-8 space-y-6">
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                The Digital Special Economic Zone (DSEZ) is an authoritative
                multi-modal logistics hub designed to foster seamless
                cross-border trade. By integrating physical infrastructure with
                sophisticated digital governance, we remove friction from
                international commerce, ensuring that capital and goods flow
                with unprecedented precision.
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Our zone operates under a unique regulatory framework that
                prioritizes investor confidence and operational efficiency.
                Through strategic partnerships with global logistics leaders and
                state-of-the-art technological adoption, DSEZ is not just a
                location — it is an engine for regional and global prosperity.
              </p>

              {/* Quick stats row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                {[
                  ["$1.2B", "Initial Investment"],
                  ["40+", "Partner Nations"],
                  ["2,400+", "Hectares Planned"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-black text-[#001e40]">
                      {val}
                    </p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════ MISSION & VISION ══ */}
        <section className="py-28 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Reveal>
              <div className="bg-white border border-gray-200 rounded-2xl p-12 h-full flex flex-col gap-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#001e40]/8 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#001e40]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.2em] uppercase mb-2 block">
                    Our Mission
                  </span>
                  <h3 className="font-display text-2xl font-black text-[#001e40] mb-4 leading-snug">
                    Empowering World-Class Trade
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed">
                    To provide a world-class environment for digital and
                    physical trade, empowering businesses through streamlined
                    regulations, technological superiority, and logistical
                    excellence.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={120}>
              <div className="bg-[#001e40] rounded-2xl p-12 h-full flex flex-col gap-6 relative overflow-hidden hover:shadow-xl transition-shadow">
                {/* bg ring decoration */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border border-white/5" />
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#66dd8b]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#66dd8b] tracking-[0.2em] uppercase mb-2 block">
                    Our Vision
                  </span>
                  <h3 className="font-display text-2xl font-black text-white mb-4 leading-snug">
                    The World's Most Trusted SEZ
                  </h3>
                  <p className="text-white/75 leading-relaxed">
                    To become the world's most trusted and technologically
                    advanced special economic zone, bridging the gap between
                    physical logistics and the digital global economy.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═════════════════════════════════ STRATEGIC OBJECTIVES ══ */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <Reveal className="mb-14">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
                Roadmap
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40]">
                Strategic Objectives
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {objectives.map((obj, i) => (
                <Reveal key={obj.number} delay={i * 80} className={obj.span}>
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col justify-between min-h-[220px]
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        obj.dark
                          ? "bg-[#001e40]"
                          : obj.green
                            ? "bg-[#83fba5]/20 border border-[#66dd8b]/30"
                            : "bg-white border border-gray-200"
                      }`}
                  >
                    <div>
                      <span
                        className="text-xs font-black tracking-[0.2em] mb-3 block"
                        style={{ color: obj.accent }}
                      >
                        OBJECTIVE {obj.number}
                      </span>
                      <h4
                        className={`font-display text-xl font-black mb-3 leading-snug ${
                          obj.dark ? "text-white" : "text-[#001e40]"
                        }`}
                      >
                        {obj.title}
                      </h4>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${obj.dark ? "text-white/70" : "text-[#4A4A4A]"}`}
                    >
                      {obj.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ LEADERSHIP TEAM ══ */}
        <section className="py-28 bg-[#f3f3f3] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <Reveal className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
                  The Team
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40]">
                  Executive Leadership
                </h2>
                <p className="text-[#4A4A4A] mt-2">
                  The visionaries steering DSEZ towards global dominance.
                </p>
              </div>
              <p className="text-xs text-gray-400 font-medium shrink-0">
                Hover a card to reveal colour
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 80}>
                  <div
                    className="leader-card bg-white border border-gray-200 rounded-2xl overflow-hidden
                               group cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      setActiveLeader(activeLeader === i ? null : i)
                    }
                  >
                    {/* Photo */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={leader.img}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h5 className="font-display text-lg font-black text-[#001e40] mb-0.5">
                        {leader.name}
                      </h5>
                      <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest">
                        {leader.role}
                      </span>
                      <p className="text-xs text-[#4A4A4A] mt-3 leading-relaxed">
                        {leader.bio}
                      </p>

                      {/* LinkedIn */}
                      <a
                        href={leader.linkedin}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#001e40]
                                   hover:text-[#FF5722] transition-colors"
                      >
                        <LinkedInIcon />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════ ORGANISATIONAL CHART ══ */}
        <section className="py-28 dot-grid overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <Reveal className="text-center mb-16">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
                Structure
              </span>
              <h2 className="font-display text-3xl font-black text-[#001e40]">
                Organisational Architecture
              </h2>
            </Reveal>

            <div className="min-w-[640px] flex flex-col items-center">
              {/* Board */}
              <Reveal>
                <div
                  className="bg-[#001e40] text-white px-10 py-4 rounded-xl font-bold text-sm
                                tracking-wide shadow-lg"
                >
                  Board of Directors
                </div>
              </Reveal>

              {/* Connector */}
              <div className="w-0.5 h-10 bg-gray-300" />

              {/* CEO */}
              <Reveal delay={100}>
                <div
                  className="bg-[#001e40] text-white px-10 py-4 rounded-xl font-bold text-sm
                                tracking-wide shadow-lg"
                >
                  CEO Office
                </div>
              </Reveal>

              {/* Connector to departments */}
              <div className="relative w-full flex justify-center">
                <div className="w-0.5 h-10 bg-gray-300" />
              </div>

              {/* Horizontal bridge */}
              <Reveal delay={200} className="w-full px-[12.5%]">
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300" />
                  <div className="grid grid-cols-4 gap-4 pt-8">
                    {orgDepts.map((dept) => (
                      <div key={dept} className="relative">
                        {/* Drop line */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-300" />
                        <div
                          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center
                                        text-xs font-bold text-[#001e40] shadow-sm hover:shadow-md
                                        hover:border-[#FF5722]/40 transition-all"
                        >
                          {dept}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ REGULATORY FRAMEWORK ══ */}
        <section className="py-28 bg-[#001e40]">
          <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <Reveal>
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-3 block">
                Governance
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Institutional Integrity &amp; Regulatory Framework
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-12">
                DSEZ operates under a sovereign-backed legislative mandate,
                providing a stable, transparent, and predictable legal
                environment for global investors.
              </p>

              <div className="space-y-8">
                {regulatoryItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-5 items-start group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-[#66dd8b]/15 flex items-center justify-center
                                    text-[#66dd8b] shrink-0 group-hover:bg-[#66dd8b]/25 transition-colors"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: stats panel */}
            <Reveal delay={150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#66dd8b] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#66dd8b] uppercase tracking-[0.25em]">
                    Live Statistics
                  </span>
                </div>

                <div className="space-y-8">
                  <ProgressBar
                    label="Compliance Rating"
                    value={99.8}
                    display="99.8%"
                  />
                  <ProgressBar
                    label="Regulatory Transparency"
                    value={95}
                    display="AAA"
                  />
                  <ProgressBar
                    label="Investor Satisfaction"
                    value={96}
                    display="96%"
                  />
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-10 pt-8 grid grid-cols-2 gap-6">
                  {[
                    ["48 hrs", "Licensing time"],
                    ["100%", "Foreign ownership"],
                    ["0%", "Capital repatriation tax"],
                    ["10yr", "Tax holiday"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <p className="font-display text-2xl font-black text-white">
                        {val}
                      </p>
                      <p className="text-white/45 text-xs font-medium mt-0.5">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ CTA ══ */}
        <section className="py-24 bg-[#f9f9f9]">
          <Reveal>
            <div className="max-w-3xl mx-auto px-4 text-center">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-3 block">
                Get Involved
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] mb-5 leading-tight">
                Ready to shape Africa's industrial future?
              </h2>
              <p className="text-[#4A4A4A] text-lg mb-10 leading-relaxed">
                Whether you're an investor, logistics partner, or policy maker —
                there's a place for you inside the DSEZ ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold
                                   px-10 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Invest Now
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
                <button
                  className="border-2 border-[#001e40] text-[#001e40] font-bold px-10 py-4 rounded-xl
                                   hover:bg-[#001e40] hover:text-white transition-all"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
