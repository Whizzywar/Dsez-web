import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

// react-icons — replaces every raw <svg> that was in this file
import {
  HiOutlineMapPin, // address pin  (was raw <svg>)
  HiOutlineClock, // hours clock  (was raw <svg>)
  HiOutlineCheckCircle, // newsletter success check (was raw <svg>)
} from "react-icons/hi2";

import {
  RiLinkedinFill, // was raw <svg>
  RiTwitterXFill, // was raw <svg>
  RiFacebookFill, // was raw <svg>
  RiInstagramFill, // was raw <svg>
  RiYoutubeFill, // was raw <svg>
} from "react-icons/ri";

const footerContact = {
  phone: "+2348023919724",
  email: " info@dsez-mc.ng",
};

// ─── Social links — icon now uses react-icons, no inline SVG ─────────────────
const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", Icon: RiLinkedinFill },
  { name: "Twitter / X", href: "https://twitter.com", Icon: RiTwitterXFill },
  { name: "Facebook", href: "https://facebook.com", Icon: RiFacebookFill },
  { name: "Instagram", href: "https://instagram.com", Icon: RiInstagramFill },
  { name: "YouTube", href: "https://youtube.com", Icon: RiYoutubeFill },
];

// ─── Quick links ──────────────────────────────────────────────────────────────
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about/vision" },
  { label: "Investment Opportunities", to: "/invest" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact Us", to: "/contact" },
];

// ─── Legal links ──────────────────────────────────────────────────────────────
const legalLinks = [
  { label: "Privacy Policy", to: "/legal/privacy" },
  { label: "Terms of Use", to: "/legal/terms" },
  { label: "Accessibility Statement", to: "/legal/accessibility" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="bg-[#001e40] text-white">
      {/* ── MAIN GRID ── */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-16 pt-20 pb-14
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Column 1 — Brand */}
        <div className="space-y-6 lg:col-span-1">
          <Link to="/" className="inline-block">
            <span className="font-display text-3xl font-black tracking-tight">
              DS<span className="text-[#FF5722]">EZ</span>
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-0.5">
              Digital Special Economic Zone
            </p>
          </Link>
          <p className="text-white/65 text-sm leading-relaxed">
            Building the digital backbone for Africa's industrial revolution.
            Authoritative, secure, and globally connected.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
            Quick Links
          </h6>
          <nav className="flex flex-col gap-3" aria-label="Footer quick links">
            {quickLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-white/75 hover:text-[#66dd8b] transition-colors
                           text-sm font-medium flex items-center gap-2 group"
              >
                <span
                  className="w-1 h-1 rounded-full bg-[#FF5722] opacity-0
                                 group-hover:opacity-100 transition-opacity shrink-0"
                />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
            Contact Information
          </h6>
          <ul className="space-y-4">
            {/* Address — HiOutlineMapPin replaces the raw <svg> pin */}
            <li className="flex gap-3">
              <span
                className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center
                               justify-center shrink-0 text-[#66dd8b]"
              >
                <HiOutlineMapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Address
                </p>
                <p className="text-white/75 text-sm leading-snug">
                  No. 24 Ogbolu Onwuka Street,
                  <br />
                  (by DSS Road), Off Anwai Road,
                  <br />
                  Asaba, Delta State.
                </p>
              </div>
            </li>

            {/* Phone — uses shared <Icon> from Icon.jsx (unchanged) */}
            <li className="flex gap-3 items-start">
              <span
                className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center
                               justify-center shrink-0 text-[#66dd8b]"
              >
                <Icon name="phone" className="w-4 h-4" />
              </span>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Phone
                </p>
                <a
                  href={`tel:${footerContact.phone}`}
                  className="text-white/75 hover:text-[#66dd8b] transition-colors text-sm font-medium"
                >
                  {footerContact.phone}
                </a>
              </div>
            </li>

            {/* Email — uses shar
            '[[ed <Icon> from Icon.jsx (unchanged) */}
            <li className="flex gap-3 items-start">
              <span
                className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center
                               justify-center shrink-0 text-[#66dd8b]"
              >
                <Icon name="mail" className="w-4 h-4" />
              </span>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Email
                </p>
                <a
                  href={`mailto:${footerContact.email}`}
                  className="text-white/75 hover:text-[#66dd8b] transition-colors text-sm font-medium"
                >
                  {footerContact.email}
                </a>
              </div>
            </li>

            {/* Hours — HiOutlineClock replaces the raw <svg> clock */}
            <li className="flex gap-3 items-start">
              <span
                className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center
                               justify-center shrink-0 text-[#66dd8b]"
              >
                <HiOutlineClock className="w-4 h-4" />
              </span>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Operating Hours
                </p>
                <p className="text-white/75 text-sm leading-snug">
                  Mon – Fri: 8:00 AM – 5:00 PM
                  <br />
                  <span className="text-white/45">
                    Weekends &amp; Public Holidays: Closed
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4 — Newsletter + Social */}
        <div className="space-y-8">
          <div>
            <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Stay Informed
            </h6>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Subscribe for zone updates, investment alerts, and market
              intelligence — delivered straight to your inbox.
            </p>

            <div
              className="flex rounded-lg overflow-hidden border border-white/15
                            focus-within:border-[#66dd8b] transition-colors"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Your email address"
                aria-label="Email for newsletter subscription"
                className="flex-1 bg-white/8 px-4 py-3 text-sm text-white
                           placeholder:text-white/35 focus:outline-none min-w-0"
              />
              <button
                onClick={handleSubscribe}
                aria-label="Subscribe"
                className="bg-[#66dd8b] hover:bg-white text-[#001e40] px-4 py-3
                           font-bold transition-colors duration-150 shrink-0"
              >
                {/* send icon comes from the shared Icon.jsx — unchanged */}
                <Icon name="send" className="w-4 h-4" />
              </button>
            </div>

            {/* Success state — HiOutlineCheckCircle replaces the raw <svg> check */}
            {submitted && (
              <p className="mt-3 text-[#66dd8b] text-xs font-semibold flex items-center gap-2">
                <HiOutlineCheckCircle className="w-4 h-4 shrink-0" />
                You're subscribed! Thanks for joining.
              </p>
            )}

            <p className="mt-4 text-white/35 text-xs leading-relaxed">
              No spam. Unsubscribe at any time. We respect your privacy.
            </p>
          </div>

          {/* Social — Ri* components replace every raw <svg> social icon */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
              Follow Us
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map(({ name, href, Icon: SocialIcon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`DSEZ on ${name}`}
                  title={name}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                             text-white/70 hover:bg-[#FF5722] hover:text-white
                             transition-all duration-200"
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-4 md:px-16 py-6
                        flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Digital Special Economic Zone (DSEZ).
            All rights reserved.
          </p>
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Legal links"
          >
            {legalLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-white/40 hover:text-white/80 transition-colors text-xs font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span>🌍</span>
            <span>Africa's Industrial Frontier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
