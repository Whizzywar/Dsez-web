import Icon from "../ui/Icon";

/**
 * CTASection
 * Full-width dark navy call-to-action section with decorative rings,
 * headline, subtext, and primary + secondary buttons.
 */
const CTASection = () => (
  <section className="bg-[#001e40] py-28 relative overflow-hidden">
    {/* Decorative background rings */}
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/5" />
      <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-16 text-center relative z-10">
      <span className="text-xs font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-4 block">
        Limited Availability
      </span>

      <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 leading-tight max-w-4xl mx-auto">
        Secure Your Position in the Future of Trade
      </h2>

      <p className="text-lg md:text-xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed">
        Limited prime industrial plots and commercial blocks are currently
        available for early-stage investors. Leverage exclusive tax incentives
        and rapid permitting in the region's most advanced economic zone.
      </p>

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <button className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold px-14 py-5 rounded-lg shadow-2xl transition-all flex items-center gap-3 text-lg w-full md:w-auto">
          Invest Now
          <Icon name="trendingUp" className="w-5 h-5" />
        </button>
        <button className="bg-white/10 border border-white/20 text-white font-bold px-14 py-5 rounded-lg hover:bg-white/20 transition-all flex items-center gap-3 text-lg w-full md:w-auto">
          Get Prospectus
          <Icon name="download" className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;
