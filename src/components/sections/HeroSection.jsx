import { useRef } from "react";
import Icon from "../ui/Icon";

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen flex items-center overflow-hidden   pb-20 md:pb-24 lg:pb-28">
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

      <div className="video-overlay absolute inset-0 z-[1]" />
      <div
        className="absolute right-0 top-0 w-1/2 h-full z-[2]
                      pointer-events-none overflow-hidden hidden md:block"
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

      {/* ── Content ─────────────────────────────────────────────────────────────
          FIX 1: added pt-20 lg:pt-28 — gives breathing room above content
                 on desktop where the navbar is fixed at 80px (mt-20).
          FIX 2: added mx-auto on the inner div to properly centre it.
          FIX 3: buttons use justify-center so they centre within the block.
          FIX 4: text and button sizes scale across all breakpoints.           */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto
                      px-5 sm:px-10 md:px-16
                      pt-20 md:pt-24 lg:pt-28
                      
                      text-center"
      >
        {/* Inner wrapper — centred with mx-auto */}
        <div className="mx-auto max-w-3xl">
          {/* Headline */}
          <h1
            className="font-display font-black text-white leading-tight
                         animate-fadeUp-delay-1
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         mb-5 md:mb-6"
          >
            Delta Special
            <br />
            <span className="text-[#50C878]">Economic Zone</span>
            <br />
            Management Company fzc
          </h1>

          {/* Subtext */}
          <p
            className="text-white/90 leading-relaxed animate-fadeUp-delay-2
                        text-base sm:text-lg md:text-xl
                        mb-8 md:mb-10
                        max-w-xl mx-auto"
          >
            Trust... Turns dreams into reality.
          </p>

          {/* CTA button — centred */}
          <div className="flex flex-wrap justify-center gap-4 animate-fadeUp-delay-2">
            <button
              className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95
                         text-white font-bold rounded-lg shadow-xl
                         transition-all flex items-center gap-3
                         px-8 py-3.5 text-sm sm:px-10 sm:py-4 sm:text-base"
            >
              Explore More
              <Icon name="arrowRight" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
