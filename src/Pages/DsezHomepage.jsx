import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/sections/HeroSection";
import StatsTicker from "../components/sections/StatsTicker";
import OverviewSection from "../components/sections/OverviewSection";
import SectorCards from "../components/sections/SectorCards";
import PartnersSection from "../components/sections/PartnersSection";
import NewsSection from "../components/sections/NewsSection";
import CTASection from "../components/sections/CTASection";

const DSEZHomepage = () => (
  <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
    <Navbar />

    <HeroSection />
    <StatsTicker />
    <OverviewSection />
    <SectorCards />
    <PartnersSection />
    <NewsSection />
    <CTASection />
  </div>
);

export default DSEZHomepage;
