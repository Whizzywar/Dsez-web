import { useRef } from "react";
import Icon from "../ui/Icon";

/**
 * HeroSection.jsx — NASA-style left-aligned hero
 * ─────────────────────────────────────────────────────────────────────────────
 * NASA homepage pattern:
 *  • Full-bleed background video behind everything
 *  • Gradient darkens only the LEFT half so text is readable while the right
 *    side of the video shows through clearly — gives a cinematic split feel
 *  • All text + CTAs pinned to the LEFT on desktop, full-width on mobile
 *  • Two CTA buttons: primary (filled) + secondary (outline ghost)
 *  • Eyebrow label above the headline (small caps tag line)
 *  • Headline is large, bold, left-aligned
 *  • Content sits at vertical centre with equal top/bottom offset for navbar
 *
 * Responsive behaviour:
 *  mobile  (<640px)  : content centred, full-width, smaller type
 *  tablet  (640-1024): content left-aligned, medium type
 *  desktop (>1024px) : content left-aligned, constrained to ~55% width, large type
 */

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section
      className="relative  overflow-hidden flex items-center
                 min-h-screen h-[100svh]"
    >
      {/* ── Video Background ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLn5aXFdH-yeUGTTFnEZFv4AzPscgUoc0aVGqXkHtk8YGn1SW2T1aLZ0eD9yJzN3MBDgunlRfgY0-xF0PpatGQYwM7pTXIvbs3e4dIL2BT3h6bP4HlVy4VzPZER4QL8_vCVC6o08K-ZhEej7wV3MKP5xOrMD3GJUGPRgwQMN3Yj6tnGwfEFWLtOEyn1dRjhWXNT4Fb55Ck5Zrccc7SNDjcmowMtO1QpFfbEUzbmOTEOi7997nkT95QBeHihddzjyn_jPXKZWfbRWT"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Overlays ─────────────────────────────────────────────────────────
          Layer 1: full dark overlay for mobile (full-width cover)
          Layer 2: left-to-right gradient for desktop — darkens left side
                   where text sits, fades to transparent on the right so the
                   video shows through — this is the NASA signature look       */}

      {/* Mobile: simple dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/55 lg:hidden" />

      {/* Desktop: left-side gradient only */}
      <div
        className="absolute inset-0 z-[1] hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(0,15,32,0.92) 0%, rgba(0,15,32,0.80) 35%, rgba(0,15,32,0.40) 65%, rgba(0,15,32,0.05) 100%)",
        }}
      />

      {/* Bottom fade into page body */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-[2]
                      bg-gradient-to-t from-[#f9f9f9]/60 to-transparent"
      />

      {/* ── Content ──────────────────────────────────────────────────────────
          mobile  : centred (text-center, mx-auto on inner)
          lg+     : left-aligned (text-left, no mx-auto on inner)
          pt-20 / pb-20 = equal 80px on both sides — stays centred vertically
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto
                   px-5 sm:px-10 md:px-16
                   pt-30 pb-20
                   text-center lg:text-left"
      >
        {/* Inner block — max 55% width on desktop, full-width on mobile */}
        <div className="mx-auto lg:mx-0 max-w-xl lg:max-w-[55%]">
          {/* Eyebrow — small label above headline, NASA style */}

          {/* Headline */}
          <h1
            className="font-display font-black text-white leading-[1.05]
                       animate-fadeUp-delay-1
                       text-3xl
                       sm:text-4xl
                       md:text-5xl
                       lg:text-5xl
                       xl:text-6xl
                       2xl:text-7xl
                       mb-5 sm:mb-6"
          >
            Delta Special
            <br />
            <span className="text-[#50C878]">Economic Zone</span>
            <br />
            <span className="font-light text-white/80">
              Management Company fzc
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-white/80 leading-relaxed animate-fadeUp-delay-1
                       text-sm sm:text-base md:text-lg
                       mb-8 sm:mb-10
                       max-w-sm mx-auto lg:mx-0 lg:max-w-none"
          >
            Trust... Turns dreams into reality. Africa's premier digital trade
            and industrial hub built for investment, innovation, and sustainable
            economic development.
          </p>

          {/* CTAs — primary + ghost secondary, side by side */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center
                       lg:justify-start gap-3 sm:gap-4
                       animate-fadeUp-delay-2"
          >
            {/* Primary */}
            <button
              className="w-full sm:w-auto
                         bg-[#FF5722] hover:bg-[#E64A19] active:scale-[0.98]
                         text-white font-bold rounded-lg shadow-xl
                         transition-all duration-200 flex items-center justify-center gap-2.5
                         px-8 py-3.5 text-sm sm:text-base"
            >
              Explore the Zone
              <Icon name="arrowRight" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Ghost secondary */}
            <button
              className="w-full sm:w-auto
                         border-2 border-white/50 hover:border-white hover:bg-white/10
                         active:scale-[0.98]
                         text-white font-bold rounded-lg
                         transition-all duration-200 flex items-center justify-center gap-2.5
                         px-8 py-3.5 text-sm sm:text-base"
            >
              Invest Now
              <Icon name="externalLink" className="w-4 h-4" />
            </button>
          </div>

          {/* Stats strip — NASA often shows key metrics below CTAs */}
          <div
            className="flex flex-wrap items-center justify-center lg:justify-start
                       gap-6 sm:gap-8 mt-10 sm:mt-12
                       pt-8 border-t border-white/15
                       animate-fadeUp-delay-2"
          >
            {[
              { value: "$4.2B", label: "FDI Committed" },
              { value: "2,400+", label: "Hectares" },
              { value: "54", label: "AfCFTA Markets" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <p
                  className="font-display font-black text-white
                               text-2xl sm:text-3xl leading-none"
                >
                  {value}
                </p>
                <p className="text-white/50 text-xs font-medium mt-1 tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Decorative rings — right side desktop only ── */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full z-[2]
                      pointer-events-none overflow-hidden hidden lg:block"
      >
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2
                        w-[600px] h-[600px] rounded-full border border-white/5
                        animate-[spin_40s_linear_infinite]"
        />
        <div
          className="absolute -right-16 top-1/2 -translate-y-1/2
                        w-[380px] h-[380px] rounded-full border border-white/5
                        animate-[spin_25s_linear_infinite_reverse]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
