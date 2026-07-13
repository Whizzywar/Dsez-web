import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { HiShield, HiScale, HiDoc } from "../components/ui/Icon";

const iconMap = {
  linkedin: RiLinkedinFill,
};

const Icon = ({ name, className = "w-6 h-6", title, ...rest }) => {
  const Component = iconMap[name];

  if (!Component) {
    if (typeof import.meta !== "undefined" && import.meta.env?.DEV) {
      console.warn(
        `[Icon] Unknown icon name: "${name}". ` +
          `Available: ${Object.keys(iconMap).join(", ")}`,
      );
    }
    return null;
  }

  return (
    <Component
      className={className}
      aria-hidden={!title}
      aria-label={title}
      title={title}
      {...rest}
    />
  );
};

const leaders = [
  {
    name: "Marcus Thorne",
    role: "Chief Executive Officer",
    bio: "Over 25 years of experience in global trade logistics and special economic zone policy development.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhruhFdWA4dZdtwy21d3iI6lFKovTgwPze0C_dvQspRPJ84aGmgy824Ly7beIKJhqDCUQRfj1SQPhJ2H06AbBzva01iJgiA-0rM2g-kQl4oRzgjptmCKj63cmKXg63__ziQTVSYjZsPseZKH9Ew6fXvXrYjSMqJBJjd0wdShMArIUxl9GhekJqjuMzrJKLOAE6Ht2DjUue9qiJn8MhBKzuWRHA-FDn80-bmzqHyU4HEiMXL3rHtqmyhvByP7csta3zGlnHw9bALZF",
  },
  {
    name: "Elena Rostova",
    role: "Chief Operating Officer",
    bio: "Specialist in digital governance and cross-border regulatory harmonization for technology hubs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2v_nFjvWw5HsEx23JsWobLyhc5UQLnooRZDv0pAgV0xcASzCm9ol-d6OHBhqDV1tBqIy3hNtuAeUScXiXnb4c0kcYVISvHyVjlDHP9rVsayoGZHm-NFKYS7aLpDqb3SGeztcgl7mae2cg1ztWXa78G6MFJRHTxud8n6JWoTddLhWfn8PgAwUzKFbeME6kdIEsr2eZOJrimfneenJCQwYK6mNglJDKZ8sM53l_VQgQ56_4ArZtYaCKLn-No567bgCucU9cdA5DF64D",
  },
  {
    name: "Dr. Julian Chen",
    role: "Chief Technology Officer",
    bio: "A pioneer in blockchain-based supply chain management and automated customs systems.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCGWMoNxn1u0bEGFUofvKTWphr9EHAXeBR93n7FHeH5RNIx76hkugKq_dJPaUPiETMDeAQ4yL6Eha2IjJkWL9u1PTzYaaKxN_lYf0kJ56TmelA99mOL8vteDAe8PPEdN2nH_bRctb6OpqxSzZaABALQBXCriU9YRMnHJhY3HUrBUF7rnKp0ZHpVwLwfdlFD8S50PvrPj4z_wRcrHtgI1ItxUKtqvqLNRcdzBIgu4N5ytnTzyEDPdU7lf7KkJiR7Tn3TtlrmaVdk8BH",
  },
  {
    name: "Sarah Whitaker",
    role: "Chief Financial Officer",
    bio: "Expert in international capital markets and structured finance for large-scale infrastructure projects.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABgecDo7_zNdAxtq2ABEtjwHqrOTHNWCKKfArMlnEnwQmdIQpFBAsyfaUTMz4laOJOjf1pF5rHKjEkGWjoLLS91P0KQVEX20uWQSHKsEgfoUmgtcMOVYjZJCN6EsA_0dgFLIPIEL9zVgOdroRF2nPTRL2pOXoM15YJaXRAFqA6cYefe2SRLqcDGSyXo4SYRX9phKkheBgENOuCu2zEhlVkle_oZFg2YDI3Yvjqx-fpzTCc_RAWfS7WpFewc4DlN2bDlbJdtB6l7Zjq",
  },
];

const objectives = [
  {
    number: "01",
    title: "Digital Trade Harmonization",
    body: "Implementing unified digital protocols to reduce customs clearance times by 40% within the next three fiscal years.",
    span: "md:col-span-2",
    dark: false,
    accent: "#FF5722",
  },
  {
    number: "02",
    title: "Green Logistics",
    body: "Achieving a net-zero carbon footprint for all zone-operated transport facilities by 2030.",
    span: "",
    dark: false,
    accent: "#66dd8b",
    green: true,
  },
  {
    number: "03",
    title: "Foreign Investment",
    body: "Attracting $10B in cumulative foreign direct investment by simplifying the corporate setup process.",
    span: "",
    dark: false,
    accent: "#FF5722",
  },
  {
    number: "04",
    title: "Infrastructure Expansion",
    body: "Phase II expansion of the ultra-high-speed data corridor connecting all regional logistics nodes.",
    span: "md:col-span-2",
    dark: true,
    accent: "#66dd8b",
  },
];

const orgDepts = [
  "Operations & Logistics",
  "Digital Strategy",
  "Regulatory Affairs",
  "Investor Relations",
];

const regulatoryItems = [
  {
    icon: <HiScale className="w-6 h-6" />,
    title: "Independent Judiciary",
    body: "A dedicated commercial court system for swift dispute resolution based on international law.",
  },
  {
    icon: <HiShield className="w-6 h-6" />,
    title: "Capital Protection",
    body: "Guarantees against expropriation and 100% foreign ownership of companies and assets.",
  },
  {
    icon: <HiDoc className="w-6 h-6" />, // ← HiDoc (hi2), not HiDocument (hi v1)
    title: "One-Stop Licensing",
    body: "Streamlined digital permitting process reducing registration time to less than 48 hours.",
  },
];

const LinkedInIcon = ({ className = "w-4 h-4", ...rest }) => (
  <RiLinkedinFill className={className} {...rest} />
);

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
  const navigate = useNavigate();
  const [activeLeader, setActiveLeader] = useState(null);
  // ↑ ENHANCEMENT: this state existed before but was never actually used
  //   anywhere — clicking a leader card toggled it but nothing visually
  //   changed. Now it expands the bio with a "Read more" interaction.

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <div className="about-page">
        {/* ══════════════════════════════════════════════════════ HERO ══ */}
        <section className="relative hero-clip h-140 min-h-125 flex items-center overflow-hidden -mt-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYFAlwJ9D0cDp8ZXiH4vKDTHRjKg37VxbP-3Ga4tdL0WGnrc1L6KE-UKg2yfhsL-UvPAE5KD4mxhm5307m2NTdnZTIyHrme2AD4O0gjNLyQ7lbbKa3xb5V2vGFGqh86zLqpvw5tXpZcwcS6gYk6U3gJ0yU1Akr9F343lcJDv1TZRx8v_edUiRV3Iwq5RpeCiNBLhzS-yPm6aN-474iNMQxQM2qK_febldZHoNZ-ZQVc8k8Tr5CuyRG9QUrkiQICG5jTYRzBBa3CFUs"
            alt="DSEZ Corporate Skyline"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#001e40] via-[#001e40]/85 to-transparent" />

          {/* Decorative rings */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-white/5 animate-[spin_50s_linear_infinite]" />
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[320px] h-80 rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full">
            <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Pioneering the Digital
              <br />
              <span className="text-[#FF5722]">Economic Frontier.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              DSEZ serves as the premier gateway for international trade,
              leveraging advanced logistics and high-tech digital infrastructure
              to redefine economic facilitation in the modern era.
            </p>
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
              <div className="mt-6 w-0.5 h-16 bg-linear-to-b from-[#FF5722] to-transparent" />
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
                  {/* FIX: was raw <svg> with a bolt path — now uses the shared Icon */}
                  <Icon name="bolt" className="w-7 h-7 text-[#001e40]" />
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
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border border-white/5" />
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  {/* FIX: was raw <svg> with an eye path — needs "eye" added
                      to Icon.jsx's iconMap (see Icon_add_eye.txt) */}
                  <Icon name="eye" className="w-7 h-7 text-[#66dd8b]" />
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
                    className={`rounded-2xl p-8 h-full flex flex-col justify-between min-h-55
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
                        className={`font-display text-xl font-black mb-3 leading-snug ${obj.dark ? "text-white" : "text-[#001e40]"}`}
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
                Click a card to read full bio
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, i) => {
                const isExpanded = activeLeader === i;
                return (
                  <Reveal key={leader.name} delay={i * 80}>
                    <div
                      className="leader-card bg-white border border-gray-200 rounded-2xl overflow-hidden
                                 group cursor-pointer hover:shadow-xl transition-all duration-300"
                      onClick={() => setActiveLeader(isExpanded ? null : i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveLeader(isExpanded ? null : i);
                        }
                      }}
                      aria-expanded={isExpanded}
                    >
                      {/* Photo */}
                      <div className="aspect-3/4 overflow-hidden">
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

                        {/* ENHANCEMENT: activeLeader now actually drives an
                            expand/collapse of the bio instead of doing nothing */}
                        <p
                          className={`text-xs text-[#4A4A4A] mt-3 leading-relaxed transition-all duration-300 ${
                            isExpanded ? "line-clamp-none" : "line-clamp-2"
                          }`}
                        >
                          {leader.bio}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <a
                            href={leader.linkedin}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001e40]
                                       hover:text-[#FF5722] transition-colors"
                          >
                            <LinkedInIcon />
                            LinkedIn
                          </a>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest text-gray-400
                                       transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          >
                            <Icon name="chevronDown" className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
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

            <div className="min-w-160 flex flex-col items-center">
              <Reveal>
                <div className="bg-[#001e40] text-white px-10 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg">
                  Board of Directors
                </div>
              </Reveal>

              <div className="w-0.5 h-10 bg-gray-300" />

              <Reveal delay={100}>
                <div className="bg-[#001e40] text-white px-10 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg">
                  CEO Office
                </div>
              </Reveal>

              <div className="relative w-full flex justify-center">
                <div className="w-0.5 h-10 bg-gray-300" />
              </div>

              <Reveal delay={200} className="w-full px-[12.5%]">
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300" />
                  <div className="grid grid-cols-4 gap-4 pt-8">
                    {orgDepts.map((dept) => (
                      <div key={dept} className="relative">
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
                {/* ENHANCEMENT: button now actually navigates instead of doing nothing */}
                <button
                  onClick={() => navigate("/invest")}
                  className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold
                             px-10 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Invest Now
                  {/* FIX: was raw <svg> with arrowRight path — now uses Icon */}
                  <Icon name="arrowRight" className="w-4 h-4" />
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
