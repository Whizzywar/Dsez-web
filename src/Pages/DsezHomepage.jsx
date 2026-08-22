import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/sections/HeroSection";
import OverviewSection from "../components/sections/OverviewSection";
import SectorCards from "../components/sections/SectorCards";
import PartnersSection from "../components/sections/PartnersSection";
import CTASection from "../components/sections/CTASection";

const DsezHomepage = () => (
  <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c]">
    <Navbar />
    <HeroSection />
    <OverviewSection />
    <SectorCards />
    <PartnersSection />
    {/*  */}
    <CTASection />
  </div>
);

export default DsezHomepage;
