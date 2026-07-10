import { useRef } from "react";
import Icon from "../ui/Icon";

/**
 * HeroSection
 * Full-screen video hero with gradient overlay, animated badge,
 * headline, subtext, and dual CTAs.
 *
 * Replace the <source> src with your own hosted .mp4 for production.
 * The `poster` attribute acts as a static fallback image.
 */
const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen flex items-center overflow-hidden -mt-20">
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
        {/* TODO: replace with your production video URL */}
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Gradient Overlay ── */}
      <div className="video-overlay absolute inset-0 z-1" />

      {/* ── Decorative Animated Rings ── */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-2 pointer-events-none overflow-hidden">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-4 animate-fadeUp-delay-1">
            Delta Special
            <br />
            <span className="text-[#50C878]">Economic Zone</span> Management
            Company fzc
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl animate-fadeUp-delay-2">
            Trust... Turns dreams into reality.
          </p>
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fadeUp-delay-2">
            <button className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-bold px-10 py-4 rounded-lg shadow-xl transition-all flex items-center gap-3 text-base">
              Explore More
              <Icon name="arrowRight" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom fade into page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#f9f9f9] to-transparent z-3" />
    </section>
  );
};

export default HeroSection;
