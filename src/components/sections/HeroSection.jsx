import { useRef } from "react";
import Icon from "../ui/Icon";

/**
 * HeroSection.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Centering strategy:
 *   The section uses `flex items-center justify-center` so the content block
 *   is always perfectly centred in the viewport both vertically and horizontally.
 *
 *   The only padding needed is `pt-20` to offset the fixed navbar height (80px),
 *   otherwise the navbar physically overlaps the top of the content.
 *   We then add equal `pb-20` to match, keeping both sides balanced.
 *
 *   No extra pt/pb beyond that — every extra pixel pushes content off-centre.
 */

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section
      className="relative -mt-20 overflow-hidden flex items-center justify-center
                 min-h-screen
                 h-[100svh]"
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

      {/* ── Overlay ── */}
      <div className="video-overlay absolute inset-0 z-[1]" />

      {/* ── Decorative rings — desktop only ── */}
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
                        w-[400px] h-[400px] rounded-full border border-white/5
                        animate-[spin_25s_linear_infinite_reverse]"
        />
      </div>

      {/* ── Content block ──────────────────────────────────────────────────────
          pt-20 = 80px  → exactly the navbar height, so the top of the content
                          block starts right where the navbar ends visually.
          pb-20 = 80px  → mirrors pt exactly so both sides are equal weight,
                          keeping the content at true vertical centre.

          This is the only padding. No extra pt/pb at any breakpoint —
          adding more on one side would throw the balance off again.
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto text-center
                   px-5 sm:px-10 md:px-16
                   pt-20 pb-20"
      >
        <div className="mx-auto max-w-3xl">
          {/* Headline — scales from mobile to XL desktop */}
          <h1
            className="font-display font-black text-white leading-tight
                       animate-fadeUp-delay-1
                       text-3xl
                       sm:text-4xl
                       md:text-5xl
                       lg:text-6xl
                       xl:text-7xl
                       mb-4 sm:mb-5 md:mb-6"
          >
            Delta Special
            <br />
            <span className="text-[#50C878]">Economic Zone</span>
            <br />
            Management Company fzc
          </h1>

          {/* Subtext — scales with headline */}
          <p
            className="text-white/85 leading-relaxed animate-fadeUp-delay-2
                       max-w-lg mx-auto
                       text-sm sm:text-base md:text-lg lg:text-xl
                       mb-6 sm:mb-8 md:mb-10"
          >
            Trust... Turns dreams into reality.
          </p>

          {/* CTA — centred, scales on sm+ */}
          <div className="flex justify-center animate-fadeUp-delay-2">
            <button
              className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95
                         text-white font-bold rounded-lg shadow-xl
                         transition-all duration-200 flex items-center gap-2.5
                         px-7 py-3 text-sm
                         sm:px-9 sm:py-3.5 sm:text-base"
            >
              Explore More
              <Icon name="arrowRight" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
