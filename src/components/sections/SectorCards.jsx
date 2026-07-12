import Icon from "../ui/Icon";

const SectorCardData = [
  {
    id: "manufacturing",
    span: "md:col-span-2 md:row-span-2",
    dark: true,
    accent: "#66dd8b",
    icon: "factory",
    title: "Smart Manufacturing",
    desc: "Plug-and-play facilities for high-precision electronics and industrial equipment.",
    cta: "Explore Sector",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN0M1x3egZuOtUSakYZEHQOnaIZjqMSpG8fSjyYDhKgb6vev0dbtxR2XgspKOATvhNLDPMSjRwv66al1u8pRinX_YQjhX9yF6f2HZKRAfW3BPmIbtfmQpPHPZbawPGfrWlxKvJBw8L4C17hm2N9EO9m449ay-ZQYQT8RiG5rjl8gUSJUNTRSWg1hgn7cPQgbpsdt5HEUBya1nT4TzVmk9LlbnpaQ-47DqOn4IDvTZSncnJS6d4FpL6IihxDactyhmDbcckwtizKufz",
  },
  {
    id: "logistics",
    span: "md:col-span-2",
    dark: false,
    icon: "globe",
    title: "Logistics & Hubs",
    desc: "Integrated dry ports and multi-modal transport networks connecting to global markets.",
    showExternal: true,
  },
  {
    id: "digital",
    span: "",
    dark: false,
    icon: "cloud",
    title: "Digital Services",
    desc: "Seamless licensing and financial gateways for modern businesses.",
  },
  {
    id: "energy",
    span: "",
    dark: false,
    orange: true,
    icon: "bolt",
    title: "Green Energy",
    desc: "100% sustainable power grid for net-zero operations.",
  },
];

const SectorCards = () => (
  <section className="py-28 bg-[#f3f3f3]">
    <div className="max-w-7xl mx-auto px-4 md:px-16">
      <h3 className="font-display text-3xl font-black text-[#FF4500] mb-14 text-center lg:text-left">
        Core Sectors &amp; Resources
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-165">
        {/* ── Smart Manufacturing (large) ── */}
        <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-[#001e40] rounded-2xl p-10 flex flex-col justify-end sector-card-hover">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN0M1x3egZuOtUSakYZEHQOnaIZjqMSpG8fSjyYDhKgb6vev0dbtxR2XgspKOATvhNLDPMSjRwv66al1u8pRinX_YQjhX9yF6f2HZKRAfW3BPmIbtfmQpPHPZbawPGfrWlxKvJBw8L4C17hm2N9EO9m449ay-ZQYQT8RiG5rjl8gUSJUNTRSWg1hgn7cPQgbpsdt5HEUBya1nT4TzVmk9LlbnpaQ-47DqOn4IDvTZSncnJS6d4FpL6IihxDactyhmDbcckwtizKufz"
            alt="Smart Manufacturing floor"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          />
          <div className="relative z-10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#66dd8b]/20 flex items-center justify-center mb-2">
              <Icon name="factory" className="w-6 h-6 text-[#66dd8b]" />
            </div>
            <h4 className="font-display text-2xl font-bold text-white">
              Smart Manufacturing
            </h4>
            <p className="text-white/80 text-base leading-relaxed">
              Plug-and-play facilities for high-precision electronics and
              industrial equipment.
            </p>
            <a
              href="#"
              className="text-[#FF4500] font-bold text-sm flex items-center gap-2 mt-2 group/link"
            >
              Explore Sector
              <Icon
                name="arrowRight"
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* ── Logistics & Hubs ── */}
        <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm sector-card-hover flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#001e40]/8 flex items-center justify-center">
                <Icon name="globe" className="w-5 h-5 text-[#50C878]" />
              </div>
              <h4 className="font-display text-xl font-bold text-[#50C878]">
                Logistics &amp; Hubs
              </h4>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Integrated dry ports and multi-modal transport networks
                connecting to global markets.
              </p>
            </div>
            <Icon
              name="externalLink"
              className="w-5 h-5 text-gray-300 shrink-0"
            />
          </div>
        </div>

        {/* ── Digital Services ── */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm sector-card-hover">
          <div className="w-10 h-10 rounded-xl bg-[#001e40]/8 flex items-center justify-center mb-4">
            <Icon name="cloud" className="w-5 h-5 text-[#50C878]" />
          </div>
          <h4 className="font-display text-lg font-bold text-[#50C878] mb-2">
            Digital Services
          </h4>
          <p className="text-[#4A4A4A] text-sm leading-relaxed">
            Seamless licensing and financial gateways for modern businesses.
          </p>
        </div>

        {/* ── Green Energy ── */}
        <div className="bg-[#50C878] rounded-2xl p-8 sector-card-hover">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
            <Icon name="bolt" className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-display text-lg font-bold text-white mb-2">
            Green Energy
          </h4>
          <p className="text-[#001e40]/85 text-sm leading-relaxed">
            100% sustainable power grid for net-zero operations.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SectorCards;
