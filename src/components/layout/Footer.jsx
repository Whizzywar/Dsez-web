import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import { footerContact } from "../../data/siteData";

// ─── Social media links ───────────────────────────────────────────────────────
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

// ─── Quick links with router paths ───────────────────────────────────────────
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
      {/* ══════════════════════════════════════════ MAIN GRID ══ */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 pt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ── Column 1 : Brand + Social ───────────────────────── */}
        <div className="space-y-6 lg:col-span-1">
          {/* Logo */}
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

          {/* Social icons */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
              Follow Us
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`DSEZ on ${name}`}
                  title={name}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                             hover:bg-[#FF5722] hover:text-white text-white/70
                             transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Column 2 : Quick Links ──────────────────────────── */}
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
                                 group-hover:opacity-100 transition-opacity"
                />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Column 3 : Contact Information ─────────────────── */}
        <div>
          <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
            Contact Information
          </h6>
          <ul className="space-y-4">
            {/* Physical address */}
            <li className="flex gap-3">
              <span
                className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center
                               justify-center shrink-0 text-[#66dd8b]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Address
                </p>
                <p className="text-white/75 text-sm leading-snug">
                  DSEZ Headquarters, Plot A1,
                  <br />
                  Industrial Free Zone,
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </li>

            {/* Phone */}
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

            {/* Email */}
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

            {/* Operating Hours */}
            <li className="flex gap-3 items-start">
              <span
                className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center
                               justify-center shrink-0 text-[#66dd8b]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Operating Hours
                </p>
                <p className="text-white/75 text-sm leading-snug">
                  Mon – Fri: 8:00 AM – 5:00 PM
                  <br />
                  <span className="text-white/45">
                    Weekends & Public Holidays: Closed
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* ── Column 4 : Newsletter ───────────────────────────── */}
        <div>
          <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
            Stay Informed
          </h6>
          <p className="text-white/65 text-sm leading-relaxed mb-5">
            Subscribe for zone updates, investment alerts, and market
            intelligence — delivered straight to your inbox.
          </p>

          {/* Input */}
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
              <Icon name="send" className="w-4 h-4" />
            </button>
          </div>

          {/* Success feedback */}
          {submitted && (
            <p className="mt-3 text-[#66dd8b] text-xs font-semibold flex items-center gap-2 animate-fadeUp">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              You're subscribed! Thanks for joining.
            </p>
          )}

          {/* Trust note */}
          <p className="mt-4 text-white/35 text-xs leading-relaxed">
            No spam. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════ BOTTOM BAR ══ */}
      <div className="border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-4 md:px-16 py-6
                        flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Digital Special Economic Zone (DSEZ).
            All rights reserved.
          </p>

          {/* Legal links */}
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

          {/* Built-in country flag / region tag */}
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
