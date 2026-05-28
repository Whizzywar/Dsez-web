import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/sections/HeroSection";
import StatsTicker from "../components/sections/StatsTicker";
import OverviewSection from "../components/sections/OverviewSection";
import BentoGrid from "../components/sections/BentoGrid";
import NewsSection from "../components/sections/NewsSection";
import CTASection from "../components/sections/CTASection";

/**
 * HomePage
 * Assembles every section of the DSEZ homepage in order.
 * Swap or reorder sections here without touching individual components.
 */
const HomePage = () => (
  <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
    <Navbar />

    <main className="pt-20">
      <HeroSection />
      <StatsTicker />
      <OverviewSection />
      <BentoGrid />
      <NewsSection />
      <CTASection />
    </main>
  </div>
);

export default HomePage;
