import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  advantages,
  sectors,
  incentives,
  resources,
  partnerStats,
  journeySteps,
} from "../data/siteData";
import Icon from "../components/ui/Icon"; // ← single shared Icon, PageIcon removed entirely

// ─── Scroll-reveal hook (same pattern used on AboutPage) ──────────────────────
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

// ─── Plot enquiry modal ───────────────────────────────────────────────────────
const EnquiryModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-fadeUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200
                     flex items-center justify-center text-gray-500 transition-colors"
          aria-label="Close"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div
              className="w-14 h-14 rounded-full bg-[#66dd8b]/15 flex items-center justify-center
                            text-[#66dd8b] mx-auto mb-5"
            >
              {/* "check" isn't in the shared icon map — using "trendingUp" success state instead.
                  If you want a literal checkmark, add HiOutlineCheck to Icon.jsx's iconMap. */}
              <Icon name="trendingUp" className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-black text-[#001e40] mb-2">
              Enquiry Submitted
            </h3>
            <p className="text-[#4A4A4A] text-sm">
              Our investment team will reach out within one business day to
              schedule your site walkthrough.
            </p>
          </div>
        ) : (
          <>
            <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-2 block">
              Express Interest
            </span>
            <h3 className="font-display text-2xl font-black text-[#001e40] mb-6">
              Reserve a Plot Walkthrough
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <input
                required
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm
                           focus:outline-none focus:border-[#001e40] transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Company email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm
                           focus:outline-none focus:border-[#001e40] transition-colors"
              />
              <select
                required
                defaultValue=""
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm
                           focus:outline-none focus:border-[#001e40] transition-colors text-gray-600"
              >
                <option value="" disabled>
                  Sector of interest
                </option>
                {sectors.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder="Plot size / facility requirements"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none
                           focus:outline-none focus:border-[#001e40] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold py-3.5
                           rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
              >
                Submit Enquiry
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// ─── Live ROI calculator (enhancement) ─────────────────────────────────────────
const RoiCalculator = () => {
  const [plotSize, setPlotSize] = useState(5000);
  const [years, setYears] = useState(10);

  const baseCostPerSqm = 45;
  const dsezCostPerSqm = baseCostPerSqm * 0.7;
  const annualSavings = plotSize * (baseCostPerSqm - dsezCostPerSqm);
  const taxHolidayYears = Math.min(years, 10);
  const projectedSavings = annualSavings * years;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full bg-[#66dd8b] animate-pulse" />
        <span className="text-[10px] font-bold text-[#66dd8b] uppercase tracking-[0.2em]">
          Illustrative Tool
        </span>
      </div>
      <h4 className="font-display text-xl font-black text-[#001e40] mb-1">
        Estimate Your Operational Savings
      </h4>
      <p className="text-xs text-gray-400 mb-6">
        Directional estimate only — actual figures depend on sector, facility
        type, and final lease terms.
      </p>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-[#001e40]">
              Plot Size
            </label>
            <span className="text-sm font-bold text-[#FF5722]">
              {plotSize.toLocaleString()} sqm
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={plotSize}
            onChange={(e) => setPlotSize(Number(e.target.value))}
            className="w-full accent-[#FF5722]"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-[#001e40]">
              Operating Horizon
            </label>
            <span className="text-sm font-bold text-[#FF5722]">
              {years} years
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-[#FF5722]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
        <div>
          <p className="font-display text-2xl font-black text-[#001e40]">
            ${Math.round(annualSavings).toLocaleString()}
          </p>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Estimated annual savings
          </p>
        </div>
        <div>
          <p className="font-display text-2xl font-black text-[#FF5722]">
            ${Math.round(projectedSavings).toLocaleString()}
          </p>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Projected over {years}yr{" "}
            {taxHolidayYears === 10 ? "+ tax holiday" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// Page Component
// ═════════════════════════════════════════════════════════════════════════════
const InvestmentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .invest-page, .invest-page * { font-family: 'DM Sans', sans-serif; }
        .invest-page h1,.invest-page h2,.invest-page h3,.invest-page h4,.invest-page .font-display { font-family: 'Syne', sans-serif; }
      `}</style>

      <div className="invest-page">
        {/* ══════════════════════════════════════════════════════ HERO ══ */}
        <section className="relative h-[680px] min-h-[560px] flex items-center overflow-hidden -mt-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQiHThBhrofGhpCVxoqDUO1JcBOqhkhda1aTzu-OMF8oDKLf6yb6BUbyd_PANOIi5Y0LushuKJXsBAhTGjRmVw07ZbgHJsnrhhXGwcRDWivLsbJm3sny1UWlEvhAeXC-mcKe90hpyWGPBVQNQf83RUl1mPjMnQskH91gVnQiyOUrEaEPQw26gzmucqRf03SD4oYocGjAVt5-zdmYswsrhTFrFUkng_jkLqGhDlVQ61N2AO4Hh9cb0W2l60RbAVs5XgMDyQ_UW1glZU"
            alt="DSEZ industrial zone at dusk"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001e40]/95 via-[#001e40]/75 to-[#001e40]/30" />

          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/5 animate-[spin_45s_linear_infinite]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full">
            <nav className="flex items-center gap-2 text-white/50 text-xs font-medium mb-8">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF5722]">Investment Opportunities</span>
            </nav>

            <div className="max-w-3xl space-y-6">
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#66dd8b]/30
                              bg-[#66dd8b]/10 text-[#66dd8b] text-xs font-bold uppercase tracking-wider"
              >
                Strategic Economic Advantage
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight">
                Unlock Growth in Africa's
                <br />
                <span className="text-[#66dd8b]">
                  Emerging Industrial Frontier
                </span>
              </h1>
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                DSEZ provides world-class infrastructure, unparalleled logistics
                connectivity, and specialised incentives for global
                manufacturing and trade.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#66dd8b] hover:bg-[#5bc97c] text-[#00210c] px-8 py-4 rounded-lg
                             font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  View Available Plots
                  <Icon name="arrowRight" className="w-5 h-5" />
                </button>
                <button
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white
                                   px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
                >
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════ WHY INVEST ══ */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-8">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase block">
                The Opportunity
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] leading-tight">
                Why Invest in DSEZ?
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Positioned at the nexus of global trade routes, DSEZ serves as
                the premier gateway for international investors seeking to tap
                into the African Continental Free Trade Area (AfCFTA).
              </p>

              <ul className="space-y-6">
                {advantages.map((a) => (
                  <li key={a.title} className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-[#001e40]/8 flex items-center justify-center">
                      {/* "check" isn't in the shared map — "trendingUp" used as a stand-in bullet icon */}
                      <Icon
                        name="trendingUp"
                        className="w-3.5 h-3.5 text-[#001e40]"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001e40] mb-1">
                        {a.title}
                      </h4>
                      <p className="text-[#4A4A4A] text-sm leading-relaxed">
                        {a.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="absolute -inset-4 bg-[#001e40]/5 rounded-2xl" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAON6-M9vrzolOE7IogoTPGZya-BDDLYIM9u6v3zRJwNTwYTqicllOpUS15uYjJaj7V4D9nJjaystwZh57trLR8lHU6jKCamBVEK94pIHGsMPGPKx9e1E9XtPlfj_TCZUzX5tac0NKVRIOEOwGUN2FvXTukPtRbJDPPREQ7qXYvPDiVOvSJsUJ59AvE3Cy_RAgP27Mf0sW9V35OmOg4DbhkiJ_SosbKD7t9TVQNc6Z3nB6aOCMVCW-d8U1cyptMhuQ5zOCJ2e-YPOQf"
                alt="DSEZ headquarters architecture"
                className="relative rounded-xl w-full h-[480px] object-cover shadow-sm"
              />
              <div className="absolute bottom-8 -left-6 bg-white p-7 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <div className="font-display text-3xl font-black text-[#001e40]">
                  30%
                </div>
                <p className="text-xs text-[#4A4A4A] mt-1">
                  Reduction in average operational costs compared to regional
                  competitors.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═════════════════════════ PRIORITY SECTORS (Bento) ══ */}
        <section className="py-28 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase block mb-3">
                Focus Areas
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] mb-4">
                Priority Investment Sectors
              </h2>
              <p className="text-[#4A4A4A]">
                Focused development in industries that drive long-term economic
                stability and technological advancement.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div
                    className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#001e40]/30
                                  hover:shadow-lg transition-all duration-300 group h-full"
                  >
                    <div
                      className="w-14 h-14 rounded-xl bg-[#001e40]/8 flex items-center justify-center
                                    mb-6 group-hover:scale-110 group-hover:bg-[#FF5722]/10 transition-all"
                    >
                      <Icon
                        name={s.icon}
                        className="w-7 h-7 text-[#001e40] group-hover:text-[#FF5722] transition-colors"
                      />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#001e40] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ LAND & FACILITIES ══ */}
        <section className="py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col lg:flex-row gap-16 items-center">
            <Reveal className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5bsZBcipXkW9QL-RWdAKlDXmDjLGJkcBj7gyGpR4HobtijtMBI9PJkHZXC_y1i_2qQpZLG03EYEFmnpMPZT4pZMfKJ5vwSfjkriN3_cXHWecWkTvVnA0kKMnwwaQzohL7nC3zr0HbMO4q9T4mYi76ut8ZeQbDJfchwHgex-2I83UkeFPKmU0bkR81DQbhzlpiOKnMcJ0jfiwdsRO-EIkjs8EV4iNITNw-7WhMHYmh_RodgFZHqeSw0CLYa0fwxzpXxm6Mv90Ea0qS"
                  alt="Warehouse park"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-bold bg-[#66dd8b] text-[#00210c] px-3 py-1 rounded-full mb-2 inline-block">
                      Featured Facility
                    </span>
                    <h4 className="font-display text-xl font-bold">
                      Standard Warehouse Shell (Type-A)
                    </h4>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="w-full lg:w-1/2 space-y-8">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase block">
                Real Estate
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] leading-tight">
                Land &amp; Built-to-Suit Facilities
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Choose from serviced plots ranging from 5,000 sqm to 50
                hectares, or opt for our ready-built industrial factory shells
                for immediate setup.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-[#FF5722] pl-6">
                  <div className="font-display text-3xl font-black text-[#001e40]">
                    1,200ha
                  </div>
                  <div className="text-xs font-bold text-[#4A4A4A] uppercase tracking-widest mt-1">
                    Total Serviced Land
                  </div>
                </div>
                <div className="border-l-2 border-[#FF5722] pl-6">
                  <div className="font-display text-3xl font-black text-[#001e40]">
                    250+
                  </div>
                  <div className="text-xs font-bold text-[#4A4A4A] uppercase tracking-widest mt-1">
                    Built Shells
                  </div>
                </div>
              </div>

              <button
                className="bg-[#001e40] hover:bg-[#003366] text-white px-10 py-4 rounded-lg
                                 font-bold transition-all flex items-center gap-2"
              >
                Explore Site Map
                <Icon name="map" className="w-4 h-4" />
              </button>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════ ROI CALCULATOR (Enhancement) ══ */}
        <section className="py-28 bg-[#f3f3f3]">
          <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase block mb-3">
                Plan Ahead
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] mb-5 leading-tight">
                Model Your Cost Advantage
              </h2>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">
                Use the interactive calculator to get a directional sense of how
                DSEZ's reduced operational costs compound over your planned
                facility size and timeline.
              </p>
              <div className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                <Icon
                  name="shield"
                  className="w-5 h-5 text-[#66dd8b] shrink-0"
                />
                Figures are illustrative; request a formal quote for binding
                terms.
              </div>
            </Reveal>

            <Reveal delay={150}>
              <RoiCalculator />
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════ INCENTIVES & BENEFITS ══ */}
        <section className="py-28 bg-[#001e40] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-16">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
                Unmatched Incentives &amp; Benefits
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Our fiscal regime is designed to maximise ROI and foster
                long-term reinvestment within the zone.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {incentives.map((inc, i) => (
                <Reveal key={inc.title} delay={i * 80}>
                  <div
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10
                                  transition-colors h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#66dd8b]/15 flex items-center justify-center mb-6">
                      <Icon
                        name={inc.icon}
                        className="w-7 h-7 text-[#66dd8b]"
                      />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3">
                      {inc.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">
                      {inc.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ INVESTMENT JOURNEY ══ */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <Reveal className="text-center mb-16">
              <span className="text-[10px] font-bold text-[#FF5722] tracking-[0.25em] uppercase block mb-3">
                Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40]">
                Your Investment Journey
              </h2>
            </Reveal>

            <div className="relative">
              <div className="hidden lg:block absolute top-7 left-0 w-full h-0.5 bg-gray-200 z-0" />
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {journeySteps.map((step, i) => (
                  <Reveal
                    key={step.num}
                    delay={i * 100}
                    className="text-center space-y-4"
                  >
                    <div
                      className="w-14 h-14 rounded-full bg-[#001e40] text-white mx-auto flex items-center
                                    justify-center font-display font-bold text-lg border-4 border-white shadow-md"
                    >
                      {step.num}
                    </div>
                    <h4 className="font-bold text-[#001e40]">{step.title}</h4>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ TESTIMONIALS ══ */}
        <section className="py-28 bg-[#eeeeee]">
          <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40]">
                Partner Success Stories
              </h2>
              <div className="bg-white p-10 rounded-2xl border border-gray-200 relative">
                <Icon
                  name="quote"
                  className="w-16 h-16 text-[#001e40]/10 absolute -top-3 -left-3"
                />
                <p className="text-lg italic text-[#4A4A4A] mb-8 relative z-10">
                  "DSEZ has fundamentally changed our export logistics. The
                  integrated customs clearance and dedicated power
                  infrastructure allowed us to scale production by 40% in our
                  first year of operations."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3A8y34oLeOTfkhMOl-TjvruVGC3cGThkayseyl4KJ1KLmRqcS7jQAwi7CbLe6lKjNeOiY6-dQPEB9_AZkY0eqDuS4g9epPmI2YJ_K0nh_PuSdfZK_tnzeTagLHD_PGqifYYGBP-L4rybUxpTStkzWZzLjN8SB1_OpJ7NSNlbqjDQuAN9JiRkvJH78PoBID8FjczLmvakJkH4Ahh2c_ZUF6ba8SXYN1an8H9MD4cZZj9dI2kCbdAmbPIV7XZiNYY1oOkssZ0MeqgSy"
                    alt="John Mensah"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-[#001e40]">John Mensah</h5>
                    <p className="text-xs text-[#4A4A4A]">
                      CEO, AgroTech Exports Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="grid grid-cols-2 gap-4">
              {partnerStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white p-6 rounded-2xl border border-gray-200
                                              text-center flex flex-col justify-center hover:shadow-md transition-shadow"
                >
                  <div className="font-display text-2xl font-black text-[#001e40]">
                    {s.value}
                  </div>
                  <p className="text-xs text-[#4A4A4A] mt-1">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════ RESOURCES + FINAL CTA ══ */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div
            className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between
                          items-center gap-8"
          >
            <Reveal>
              <h3 className="font-display text-xl font-bold text-[#001e40] mb-1">
                Ready to learn more?
              </h3>
              <p className="text-[#4A4A4A] text-sm">
                Download our latest investment guides and policy documentation.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-wrap gap-4">
              {resources.map((r) => (
                <a
                  key={r.label}
                  href="#"
                  download
                  className="flex items-center gap-3 px-6 py-3 border border-gray-200 rounded-lg
                             hover:bg-gray-50 hover:border-[#001e40]/30 transition-all"
                >
                  <Icon name={r.icon} className="w-5 h-5 text-[#001e40]" />
                  <span className="text-sm font-bold text-[#001e40]">
                    {r.label}
                  </span>
                  <span className="text-xs text-gray-400">{r.size}</span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-[#001e40] text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="font-display text-3xl font-black text-white mb-4">
                Begin Your DSEZ Investment Journey Today
              </h2>
              <p className="text-white/65 mb-8">
                Schedule a call with our Business Development team or reserve a
                plot walkthrough.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold
                             px-10 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  Reserve a Plot
                  <Icon name="arrowRight" className="w-4 h-4" />
                </button>
                <button
                  className="border-2 border-white/30 text-white font-bold px-10 py-4
                                   rounded-xl hover:bg-white/10 transition-all"
                >
                  Talk to Investment Team
                </button>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default InvestmentPage;
