import Icon from "../ui/Icon";
import { overviewStats } from "../../data/siteData";

/**
 * OverviewSection
 * Two-column layout: text + stats on the left, image with floating badge on the right.
 */
const OverviewSection = () => (
  <section className="py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ── Left: text ── */}
        <div className="space-y-7">
          <div>
            <span className="text-xs font-bold text-[#FF5722] tracking-[0.25em] uppercase mb-3 block">
              Strategic Vision
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#001e40] leading-tight">
              Redefining Economic Development
            </h2>
          </div>

          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            The Digital Special Economic Zone serves as a catalyst for
            sustainable industrialization across the continent. By integrating
            high-speed digital infrastructure with traditional logistics, we
            provide a seamless environment for global corporations and local
            innovators alike.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
            {overviewStats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-4xl font-black text-[#001e40] mb-1">
                  {value}
                </div>
                <div className="text-xs font-bold text-[#4A4A4A] uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#001e40] font-bold border-b-2 border-[#001e40] pb-1 hover:text-[#FF5722] hover:border-[#FF5722] transition-all group"
          >
            Explore Our Vision
            <Icon
              name="arrowRight"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* ── Right: image ── */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgkLdFOKJLnI0zcWLoD5zPbvMXuEVK1_Drc_pfLzKdBbqJpCgUcVd-aBIdjD2qseOVzYl8eXZn30DO0vMB93u5TSjY0QuAjs1_soio1EFkad9tsVjqgkwHO-LZs8C7WbN4cWpRXWKntFhxcDJLJhg76-5PXppICvbLgNA_ww_lIODioR1n3r6-7TbwOGcFXcByGN7whX3vFd-hi2fiA7df3uXO0BIyqiaZPVxYnMhBVNFI007zcNFjlsINU1OrzzrAKt1UyT0dPxiD"
              alt="DSEZ digital control center"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-[#001e40] p-6 rounded-2xl shadow-2xl hidden md:flex items-center gap-4">
            <Icon name="analytics" className="w-8 h-8 text-[#66dd8b]" />
            <div className="text-white">
              <div className="font-display text-lg font-bold leading-tight">
                Data-Driven
              </div>
              <div className="text-white/70 text-sm">Growth Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OverviewSection;
