import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../data/siteData";
import { categories } from "../data/siteData";
import {
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

// ─── Scroll reveal ────────────────────────────────────────────────────────────
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
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

// ─── Single FAQ accordion item ────────────────────────────────────────────────
const FaqItem = ({ item, isOpen, onToggle, index }) => (
  <div
    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isOpen
        ? "border-[#001e40] shadow-md"
        : "border-gray-200 hover:border-[#001e40]/40"
    }`}
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-start gap-4 px-7 py-6 text-left group"
    >
      {/* Number badge */}
      <span
        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black
                    transition-colors duration-300 mt-0.5
                    ${isOpen ? "bg-[#001e40] text-white" : "bg-gray-100 text-[#001e40] group-hover:bg-[#001e40]/10"}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className={`flex-1 font-display font-bold text-base leading-snug transition-colors duration-200
                    ${isOpen ? "text-[#001e40]" : "text-[#1a1c1c] group-hover:text-[#001e40]"}`}
      >
        {item.question}
      </span>

      <span
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                    ${isOpen ? "bg-[#001e40] text-white rotate-180" : "bg-gray-100 text-[#001e40] group-hover:bg-[#001e40] group-hover:text-white"}`}
      >
        <HiOutlineChevronDown className="w-4 h-4" />
      </span>
    </button>

    {/* Answer panel */}
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-37.5 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-7 pb-7 pl-19 pr-20">
        <div className="w-full h-px bg-gray-100 mb-5" />
        <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  </div>
);

// ─── Contact channel card ─────────────────────────────────────────────────────
const ContactCard = ({ Icon: CardIcon, title, detail, sub, action, href }) => (
  <a
    href={href}
    className="group bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4
               hover:border-[#001e40]/40 hover:shadow-lg transition-all duration-300"
  >
    <div
      className="w-12 h-12 rounded-xl bg-[#001e40]/8 flex items-center justify-center
                    group-hover:bg-[#001e40] transition-colors duration-300"
    >
      <CardIcon className="w-6 h-6 text-[#001e40] group-hover:text-white transition-colors duration-300" />
    </div>
    <div className="flex-1">
      <p className="font-display font-bold text-[#001e40] mb-1">{title}</p>
      <p className="text-sm text-[#4A4A4A]">{detail}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
    <span
      className="text-xs font-bold text-[#FF5722] inline-flex items-center gap-1
                     group-hover:gap-2 transition-all duration-200"
    >
      {action}
      <HiOutlineArrowRight className="w-3.5 h-3.5" />
    </span>
  </a>
);

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(null);

  // Filter by category only
  const filtered = faqs.filter(
    (f) => activeCategory === "all" || f.category === activeCategory,
  );

  const toggle = (id) => setOpenId(openId === id ? null : id);

  const handleCategory = (id) => {
    setActiveCategory(id);
    setOpenId(null);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <div className="faq-page">
        {/* ══════════════════════════════════════════════════════ HERO ══ */}
        <section className="relative min-h-125 flex items-center overflow-hidden -mt-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCWZtkbi3hu_TSrrxOAXSNeTWT1b2_wfhTBuG4Rm1TQ71eFv7X7m1k8bDAmJEW6ibqgIhQHIcGv1nynAswrSl4M7-4_pXpJuLrThdZffvwbbhzthQkMQpRxaxTL5YtqflstyE5NdCwlHUatZmwuGaUp_lNLpkb2vCElKiu9o5G3pJIGwGOnjshuCmWGq2tIQ1jHRJpDq87ETIsUN051K9TjSgbNfBc4HsfBzYtH4YHTN7vfr-KFcLoH9f4teRtV05vh6QR5xUITQZ"
            alt="DSEZ HQ"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#001e40] via-[#001e40]/90 to-[#001e40]/70" />

          {/* Decorative rings */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div
              className="absolute -right-32 top-1/2 -translate-y-1/2 w-150 h-150
                            rounded-full border border-white/5 animate-[spin_60s_linear_infinite]"
            />
            <div
              className="absolute -right-10 top-1/2 -translate-y-1/2 w-90 h-90
                            rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full pt-36 pb-20">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Frequently Asked
                <br />
                <span className="text-[#FF5722]">Questions</span>
              </h1>
              <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-10">
                Everything you need to know about operating, investing, and
                thriving within the Digital Special Economic Zone.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════ MAIN CONTENT ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* ── Left sidebar: category filter ── */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4 px-1">
                    Browse by Topic
                  </p>
                  {/* Mobile: horizontal scroll */}
                  <div className="flex lg:flex-col gap-2 overflow-x-auto hide-scrollbar pb-2 lg:pb-0">
                    {categories.map(({ id, label, Icon: CatIcon }) => (
                      <button
                        key={id}
                        onClick={() => handleCategory(id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
                                    whitespace-nowrap transition-all duration-200 w-full text-left
                                    ${
                                      activeCategory === id
                                        ? "bg-[#001e40] text-white shadow-md"
                                        : "bg-white border border-gray-200 text-[#4A4A4A] hover:border-[#001e40]/40 hover:text-[#001e40]"
                                    }`}
                      >
                        <CatIcon className="w-4 h-4 shrink-0" />
                        {label}
                        <span
                          className={`ml-auto text-[10px] font-black rounded-full px-2 py-0.5
                                         ${activeCategory === id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}
                        >
                          {id === "all"
                            ? faqs.length
                            : faqs.filter((f) => f.category === id).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </Reveal>
              </div>
            </aside>

            {/* ── Right: FAQ accordion ── */}
            <div className="flex-1 min-w-0">
              {/* Question count */}
              <Reveal className="mb-6">
                <p className="text-sm text-gray-400">
                  Showing {filtered.length} question
                  {filtered.length !== 1 ? "s" : ""}
                </p>
              </Reveal>

              {/* Accordion */}
              <div className="space-y-3">
                {filtered.map((item, i) => (
                  <Reveal key={item.id} delay={i * 40}>
                    <FaqItem
                      item={item}
                      isOpen={openId === item.id}
                      onToggle={() => toggle(item.id)}
                      index={i}
                    />
                  </Reveal>
                ))}
              </div>

              {activeCategory === "all" && filtered.length > 0 && (
                <Reveal className="mt-16 border-t border-gray-200 pt-8 text-center">
                  <p className="text-sm text-gray-400">
                    Browse by a specific topic using the sidebar to see
                    categorised answers.
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════ CONTACT SECTION ══ */}
        <section className="bg-[#f3f3f3] border-y border-gray-200 py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <Reveal className="text-center mb-14">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
                Still have questions?
              </span>
              <h2 className="font-display text-3xl font-black text-[#001e40] mb-4">
                Get in Touch
              </h2>
              <p className="text-[#4A4A4A] max-w-xl mx-auto">
                Our specialist teams are available to answer investment, legal,
                and operational enquiries from pre-approved investors worldwide.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Reveal delay={0}>
                <ContactCard
                  Icon={HiOutlineEnvelope}
                  title="Investment Enquiries"
                  detail="invest@dsez-gov.com"
                  sub="Response within 24 hours"
                  action="Send email"
                  href="mailto:invest@dsez-gov.com"
                />
              </Reveal>
              <Reveal delay={80}>
                <ContactCard
                  Icon={HiOutlinePhone}
                  title="Investor Hotline"
                  detail="+254 700 000 000"
                  sub="Mon–Fri, 08:00–18:00 GMT+3"
                  action="Call now"
                  href="tel:+254700000000"
                />
              </Reveal>
              <Reveal delay={160}>
                <ContactCard
                  Icon={HiOutlineChatBubbleLeftRight}
                  title="Live Chat Support"
                  detail="Instant response during business hours"
                  sub="Available via DSEZ-ONE portal"
                  action="Start chat"
                  href="#"
                />
              </Reveal>
              <Reveal delay={240}>
                <ContactCard
                  Icon={HiOutlineGlobeAlt}
                  title="Press Office"
                  detail="media@dsez-gov.com"
                  sub="Media & analyst queries"
                  action="Contact press team"
                  href="mailto:media@dsez-gov.com"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════ CTA BAND ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-16">
          <Reveal>
            <div
              className="bg-[#001e40] rounded-2xl px-8 md:px-16 py-14 flex flex-col md:flex-row
                            items-center justify-between gap-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#66dd8b]/8 blur-3xl rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF5722]/8 blur-3xl rounded-full -ml-32 -mb-32" />

              <div className="relative z-10">
                <span className="text-[10px] font-bold text-[#66dd8b] tracking-[0.25em] uppercase block mb-2">
                  Ready to join?
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-2">
                  Begin your investment journey today.
                </h3>
                <p className="text-white/60 text-sm">
                  Submit an Expression of Interest and receive a tailored
                  briefing within 48 hours.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-3 shrink-0">
                <Link
                  to="/invest"
                  className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold
                             px-8 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm"
                >
                  Invest Now
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl
                             hover:bg-white/10 transition-all text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default FaqPage;
