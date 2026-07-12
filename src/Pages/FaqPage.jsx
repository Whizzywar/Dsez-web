import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
  HiOutlineDocumentText,
  HiOutlineBolt,
} from "react-icons/hi2";

const categories = [
  { id: "all", label: "All Questions", Icon: HiOutlineClipboardDocumentList },
  { id: "eligibility", label: "Eligibility", Icon: HiOutlineCheckCircle },
  { id: "licensing", label: "Licensing & Setup", Icon: HiOutlineDocumentText },
  {
    id: "investment",
    label: "Investment & Finance",
    Icon: HiOutlineCurrencyDollar,
  },
  { id: "operations", label: "Operations", Icon: HiOutlineBuildingOffice2 },
  { id: "legal", label: "Legal & Compliance", Icon: HiOutlineShieldCheck },
  { id: "digital", label: "Digital Services", Icon: HiOutlineBolt },
  { id: "location", label: "Location & Logistics", Icon: HiOutlineMapPin },
];

const faqs = [
  // ── Eligibility ──────────────────────────────────────────────────────────────
  {
    id: 1,
    category: "eligibility",
    question: "Who is eligible to operate within the DSEZ?",
    answer:
      "Any legally incorporated entity — domestic or foreign — engaged in manufacturing, digital services, logistics, agro-processing, or financial technology may apply for a DSEZ operator licence. Sole proprietors and individuals are not eligible to register directly; a registered company structure is required. Joint ventures with local entities are encouraged but not mandated.",
  },
  {
    id: 2,
    category: "eligibility",
    question: "Are there minimum investment thresholds for zone entry?",
    answer:
      "Yes. The minimum verified investment for a Standard Operator Licence is USD 500,000 in committed capital expenditure within the first 24 months of operations. Anchor Tenants (flagship industrial enterprises) require a minimum of USD 5 million. Micro-enterprise designations for digital-only operators carry a reduced threshold of USD 50,000.",
  },
  {
    id: 3,
    category: "eligibility",
    question: "Can a foreign-owned company hold 100% equity in a DSEZ entity?",
    answer:
      "Yes. DSEZ operates under a 100% foreign ownership policy for all licensed entities, with no mandatory local partnership requirement. This is codified in the DSEZ Special Economic Zone Act (Section 14B) and applies across all approved sectors. Dividend repatriation is also fully guaranteed with no capital controls.",
  },
  {
    id: 4,
    category: "eligibility",
    question: "Which sectors are prioritised for zone licensing in 2024–2026?",
    answer:
      "The current Strategic Priority Framework prioritises: (1) Advanced Manufacturing & Precision Engineering, (2) Agro-Industrial Processing & Cold Chain, (3) Digital Services, Fintech & Data Centres, (4) Clean Energy Infrastructure, and (5) Integrated Logistics & Multimodal Transport. Applications in these sectors receive expedited review within 5 business days.",
  },

  // ── Licensing & Setup ─────────────────────────────────────────────────────────
  {
    id: 5,
    category: "licensing",
    question: "How long does the licensing process take?",
    answer:
      "Standard operator licences are processed within 14 business days from submission of a complete application package. Priority Sector applicants receive a decision within 5 business days. The single-window digital portal (DSEZ-ONE) enables real-time tracking of application status, document verification, and payment processing — eliminating the need for in-person visits.",
  },
  {
    id: 6,
    category: "licensing",
    question: "What documents are required to begin the registration process?",
    answer:
      "The core registration package includes: (1) Certificate of Incorporation or equivalent from country of origin, (2) Audited financial statements for the last two fiscal years, (3) Detailed Business Plan with 3-year financial projections, (4) Board Resolution authorising DSEZ registration, (5) KYC documentation for all Ultimate Beneficial Owners (UBOs) holding ≥10% equity, and (6) Proof of initial capitalisation. All documents must be certified translations in English if issued in another language.",
  },
  {
    id: 7,
    category: "licensing",
    question:
      "Can I operate multiple business activities under a single DSEZ licence?",
    answer:
      "A Primary Activity licence permits up to two related activities under a single entity without additional licencing fees. Materially distinct activities — for example, combining manufacturing and financial services — require a Multi-Activity Endorsement, which carries a supplementary annual review fee of USD 2,500. All activities must fall within DSEZ's approved sector classifications.",
  },

  // ── Investment & Finance ──────────────────────────────────────────────────────
  {
    id: 8,
    category: "investment",
    question: "What tax incentives are available to DSEZ entities?",
    answer:
      "DSEZ offers a comprehensive incentive package: a 10-year full corporate income tax holiday upon commencement of operations, followed by a preferential rate of 15% for the subsequent 10 years. Additionally, operators benefit from zero customs duty on capital equipment imports, VAT exemption on qualifying inputs, and a full waiver of withholding tax on dividends repatriated to foreign shareholders. Sustainability Compliance Certificates unlock an additional 2% tax credit.",
  },
  {
    id: 9,
    category: "investment",
    question: "How is the AfCFTA free trade status applied within the zone?",
    answer:
      "As a certified AfCFTA-integrated hub, goods manufactured or substantially transformed within DSEZ qualify for zero-tariff access to all 54 African Union signatory markets under the Agreement's Rules of Origin provisions. A DSEZ Certificate of Origin (Form CO-DSEZ/2024) is issued alongside each commercial shipment and is recognised at all participating customs territories without additional authentication requirements.",
  },
  {
    id: 10,
    category: "investment",
    question:
      "Can DSEZ entities access external financing or raise debt within the zone?",
    answer:
      "Yes. DSEZ entities may raise capital through any internationally recognised mechanism including equity issuance, commercial bank debt, development finance institution loans, sukuk, or project finance structures. DSEZ maintains correspondent relationships with Afreximbank, the Africa Finance Corporation, and the IFC. The zone's dedicated Commercial Court provides lender protection through international arbitration under UNCITRAL rules, significantly reducing credit risk premiums.",
  },

  // ── Operations ────────────────────────────────────────────────────────────────
  {
    id: 11,
    category: "operations",
    question: "What physical facilities are available within the zone?",
    answer:
      "DSEZ offers: (1) Serviced industrial plots from 5,000 sqm to 50 hectares, (2) Type-A Standard Warehouse Shells (5,000–20,000 sqm, ready for immediate occupation), (3) Built-to-Suit Facility Development (custom construction under a Design-Build-Lease model, 18–24 month delivery), (4) Grade-A Office Suites in the Sovereign Commerce Tower, and (5) Shared Innovation Labs for digital and R&D enterprises. All facilities connect to the DSEZ Power Grid with a guaranteed 99.9% uptime SLA.",
  },
  {
    id: 12,
    category: "operations",
    question:
      "What are the working hours and operational schedules permitted within DSEZ?",
    answer:
      "DSEZ is a 24/7 operational zone with no restrictions on shift patterns or production hours. The zone's integrated customs and port facilities operate continuously. Entities in manufacturing may employ shift workers around the clock subject to applicable labour standards. The DSEZ Authority's Single-Window Portal and all digital government services are available 24/7 with a maximum 4-hour response SLA for critical service requests.",
  },
  {
    id: 13,
    category: "operations",
    question: "How is the energy and utility supply managed?",
    answer:
      "The DSEZ Smart Grid — powered by Phase II AI-driven load management — delivers dedicated industrial-grade power from both grid-tied renewable sources (65% solar and wind) and gas-backed redundancy. Each operator receives a metered allocation with a guaranteed minimum supply commitment. Water, sewerage, and fibre-optic connectivity (1Gbps uplink standard, with 10Gbps available for Tier-1 facilities) are bundled into the zone's unified utility tariff.",
  },

  // ── Legal & Compliance ────────────────────────────────────────────────────────
  {
    id: 14,
    category: "legal",
    question:
      "Which legal jurisdiction governs commercial disputes within DSEZ?",
    answer:
      "The DSEZ Commercial Court operates as an independent judicial body with jurisdiction over all intra-zone and zone-international commercial matters. Proceedings are conducted in English under a codified DSEZ Commercial Law framework modelled on English common law. International arbitration is available under UNCITRAL, ICC, and LCIA rules. Judgements are mutually enforceable under bilateral investment treaty obligations with 47 partner nations.",
  },
  {
    id: 15,
    category: "legal",
    question: "What intellectual property protections apply within the zone?",
    answer:
      "DSEZ is a signatory to the WIPO Convention and provides full patent, trademark, copyright, and trade secret protection under its IP statute. Rights registered in any WIPO member state are automatically recognised within DSEZ without re-registration. The DSEZ IP Enforcement Unit provides expedited provisional measures (injunctive relief within 48 hours) for cases of suspected IP infringement affecting zone-registered entities.",
  },
  {
    id: 16,
    category: "legal",
    question: "Are DSEZ employees subject to local labour laws?",
    answer:
      "Entities within DSEZ are governed by the DSEZ Employment Standards Act, which establishes minimum wage benchmarks (indexed annually to CPI), mandatory contributions to the DSEZ Worker Provident Fund, occupational health and safety requirements, and anti-discrimination protections. The Act is substantially aligned with ILO core conventions. Collective bargaining rights are preserved. Operators employing more than 100 staff are required to maintain a certified HR Compliance Officer.",
  },

  // ── Digital Services ──────────────────────────────────────────────────────────
  {
    id: 17,
    category: "digital",
    question:
      "What digital government services are available to zone operators?",
    answer:
      "DSEZ-ONE (the Single-Window Digital Portal) consolidates all government touchpoints: business registration, licence management, customs declarations, work permit applications, tax filing, utility connections, and zoning approvals. All services are accessible via web and mobile with full API integration for enterprise-grade ERP systems. Digital signatures issued under the DSEZ e-Signature Framework have full legal standing in all zone proceedings.",
  },
  {
    id: 18,
    category: "digital",
    question:
      "Can DSEZ entities issue or transact in digital assets and cryptocurrencies?",
    answer:
      "Yes, subject to the DSEZ Digital Asset Regulatory Framework (DARF-2024). Licensed Digital Asset Operators (DAO designation) may issue, trade, and custody regulated digital assets including utility tokens, security tokens, and stablecoins. All DAOs are subject to AML/KYC requirements aligned with FATF Recommendation 16. Consumer-facing crypto exchanges require a separate Exchange Operating Licence with additional capital adequacy requirements.",
  },

  // ── Location & Logistics ──────────────────────────────────────────────────────
  {
    id: 19,
    category: "location",
    question:
      "Where is DSEZ located and how does it connect to major trade routes?",
    answer:
      "DSEZ is strategically situated at the convergence of two international highway corridors, a dedicated standard-gauge rail link to the national network, and a deep-water port berth with 14-metre draft clearance. The zone is 45 minutes from the international airport by dedicated shuttle. Berth 7 (operational from Oct 2024) provides direct container throughput of 12,000 TEU/month. Feeder vessel connections serve 22 coastal and island destinations weekly.",
  },
  {
    id: 20,
    category: "location",
    question:
      "What customs procedures apply to goods entering and leaving the zone?",
    answer:
      "DSEZ operates as a bonded free zone — goods imported into the zone are not subject to customs duty, VAT, or import levies until they leave the zone for the domestic market. Zone-to-zone transfers within DSEZ are duty-free. Exports to international markets are processed through DSEZ's integrated customs declaration system (ISO 9001-certified) with an average clearance time of 4 hours for standard cargo and 24 hours for specialised or oversized consignments.",
  },
];

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
