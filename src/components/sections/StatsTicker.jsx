import { stats } from "../../data/siteData";

/**
 * StatsTicker
 * Dark navy banner displaying key zone metrics in a horizontal ticker layout.
 */
const StatsTicker = () => (
  <section className="bg-[#001e40] py-5 overflow-hidden">
    <div className="flex gap-16 items-center px-4 md:px-16 flex-wrap justify-center md:justify-start">
      {stats.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-4 shrink-0">
          <span className="font-display text-2xl font-black text-[#FF5722]">
            {value}
          </span>
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
            {label}
          </span>
          {i < stats.length - 1 && (
            <span className="text-white/20 text-2xl hidden md:block">·</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default StatsTicker;
