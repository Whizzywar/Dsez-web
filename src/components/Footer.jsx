import { useState } from "react";
import Icon from "../ui/Icon";
import {
  footerNavLinks,
  footerLegalLinks,
  footerContact,
} from "../../data/siteData";

/**
 * Footer
 * Site-wide footer with brand, navigation, legal links,
 * newsletter sign-up, and contact details.
 */
const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#001e40] pt-20 pb-10 px-4 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-white">
        {/* ── Brand ── */}
        <div className="space-y-6">
          <span className="font-display text-2xl font-black block">
            DS<span className="text-[#FF5722]">EZ</span>
          </span>
          <p className="text-white/70 text-sm leading-relaxed">
            Building the digital backbone for Africa's industrial revolution.
            Authoritative, secure, and globally connected.
          </p>
          <div className="flex gap-3">
            {["share", "globe"].map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#66dd8b] hover:text-[#001e40] transition-all"
              >
                <Icon name={icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div>
          <h6 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-white/40">
            Navigation
          </h6>
          <nav className="flex flex-col gap-4" aria-label="Footer navigation">
            {footerNavLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 hover:text-[#66dd8b] transition-colors text-sm font-semibold"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Legal ── */}
        <div>
          <h6 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-white/40">
            Legal &amp; Governance
          </h6>
          <nav className="flex flex-col gap-4" aria-label="Legal navigation">
            {footerLegalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 hover:text-[#66dd8b] transition-colors text-sm font-semibold"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* ── Newsletter ── */}
        <div>
          <h6 className="text-xs font-bold mb-8 uppercase tracking-[0.2em] text-white/40">
            Intelligence
          </h6>
          <p className="text-white/70 text-sm mb-5 leading-relaxed">
            Get the latest zone updates and market insights delivered to your
            inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              aria-label="Email for newsletter"
              className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 w-full text-white placeholder:text-white/40 text-sm focus:border-[#66dd8b] transition-colors"
            />
            <button
              aria-label="Subscribe to newsletter"
              className="bg-[#66dd8b] text-[#001e40] px-4 py-3 rounded-r-lg font-bold hover:bg-white transition-colors"
            >
              <Icon name="send" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 items-center">
        <span className="text-white/50 text-xs">
          © 2024 Digital Special Economic Zone. All rights reserved.
        </span>
        <div className="flex flex-col md:flex-row gap-8">
          <span className="text-white/70 text-xs flex items-center gap-2">
            <Icon name="phone" className="w-4 h-4 text-[#66dd8b]" />
            {footerContact.phone}
          </span>
          <span className="text-white/70 text-xs flex items-center gap-2">
            <Icon name="mail" className="w-4 h-4 text-[#66dd8b]" />
            {footerContact.email}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
