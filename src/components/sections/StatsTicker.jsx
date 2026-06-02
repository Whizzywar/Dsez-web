import { stats } from "../../data/siteData";

/**
 * StatsTicker
 * Infinite auto-scrolling horizontal marquee ticker of zone metrics.
 * - Duplicates the stats array so the loop appears seamless
 * - Pure CSS animation — no JS scroll logic needed
 * - Pauses on hover
 */
const StatsTicker = () => {
  // Duplicate items so the marquee loops without a visible gap
  const items = [...stats, ...stats];

  return (
    <section className="bg-[#001e40] py-4 overflow-hidden relative">
      {/* Left fade edge */}
      <div
        className="absolute left-0 top-0 h-full w-16 z-10
                      bg-gradient-to-r from-[#001e40] to-transparent pointer-events-none"
      />
      {/* Right fade edge */}
      <div
        className="absolute right-0 top-0 h-full w-16 z-10
                      bg-gradient-to-l from-[#001e40] to-transparent pointer-events-none"
      />

      {/* Scrolling track */}
      <div
        className="flex items-center gap-0 w-max"
        style={{
          animation: "ticker-scroll 30s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {items.map(({ value, label }, i) => (
          <div key={`${label}-${i}`} className="flex items-center shrink-0">
            {/* Stat block */}
            <div className="flex items-center gap-3 px-8 py-1">
              <span className="font-display text-xl font-black text-[#50C878] whitespace-nowrap">
                {value}
              </span>
              <span className="text-white/65 text-xs font-bold uppercase tracking-[0.18em] whitespace-nowrap">
                {label}
              </span>
            </div>

            {/* Separator dot */}
            <span className="text-white/25 text-lg select-none">·</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsTicker;
