import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import Icon from "../ui/Icon";
import DropdownMenu from "../ui/DropdownMenu";
import useScrolled from "../../hooks/useScrolled";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import { aboutItems, investmentItems } from "../../data/siteData";

const flatNavItems = [
  { label: "FAQs", to: "/faqs", icon: "questionMark" },
  { label: "Contact Us", to: "/contact", icon: "contact" },
];

const desktopCls = ({ isActive }) =>
  [
    "font-bold text-sm tracking-wide h-full flex items-center transition-colors duration-200",
    isActive
      ? "text-[#FF5722] border-b-2 border-[#FF5722]"
      : "text-[#43474f] hover:text-[#FF5722]",
  ].join(" ");

const drawerCls = ({ isActive }) =>
  [
    "flex items-center gap-3 p-4 rounded-xl font-semibold transition-all duration-150",
    isActive
      ? "bg-[#FF5722] text-white shadow-md"
      : "text-[#43474f] hover:bg-gray-50",
  ].join(" ");

const drawerSubCls = ({ isActive }) =>
  [
    "flex items-center gap-2 p-3 text-sm rounded-lg transition-colors duration-150 font-medium",
    isActive
      ? "text-[#FF5722] bg-orange-50 font-bold"
      : "text-[#43474f] hover:text-[#FF5722] hover:bg-gray-50",
  ].join(" ");

const Navbar = () => {
  const scrolled = useScrolled(50);
  const location = useLocation();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileInvestOpen, setMobileInvestOpen] = useState(false);

  useBodyScrollLock(drawerOpen);

  // ── FIX 1: Only watch location.pathname — NOT drawerOpen.
  // Including drawerOpen in deps caused the effect to fire the moment the
  // drawer opened, immediately scheduling setDrawerOpen(false) and snapping
  // it shut before the user could see it.

  useEffect(() => {
    const id = setTimeout(() => setDrawerOpen(false), 0);
    return () => clearTimeout(id);
  }, [location.pathname]); // ← pathname only

  // Pre-open the correct accordion when the drawer opens on a deep route
  useEffect(() => {
    if (!drawerOpen) return;
    const id = setTimeout(() => {
      setMobileAboutOpen(
        aboutItems.some((i) => location.pathname.startsWith(i.href)),
      );
      setMobileInvestOpen(
        investmentItems.some((i) => location.pathname.startsWith(i.href)),
      );
    }, 0);
    return () => clearTimeout(id);
  }, [drawerOpen, location.pathname]);

  const accordionHeaderCls = (items) =>
    [
      "w-full flex items-center gap-3 p-4 rounded-xl font-semibold transition-all duration-150 text-left",
      items.some((i) => location.pathname.startsWith(i.href))
        ? "text-[#FF5722] bg-orange-50"
        : "text-[#43474f] hover:bg-gray-50",
    ].join(" ");

  return (
    <>
      {/* ══════════════════════════════════════════════════════ HEADER BAR ══ */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg h-16"
              : "bg-white/90 backdrop-blur-sm border-b border-gray-100 h-20"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-[#003366] lg:hidden rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <Icon name="menu" className="w-7 h-7" />
            </button>

            <Link
              to="/"
              className="font-display text-2xl font-black text-[#003366] tracking-tight hover:opacity-90 transition-opacity"
              aria-label="DSEZ — back to home"
            >
              DS<span className="text-[#FF5722]">EZ</span>
            </Link>
          </div>

          <nav
            className="hidden lg:flex items-center gap-8 h-full"
            aria-label="Main navigation"
          >
            <NavLink to="/" end className={desktopCls}>
              Home
            </NavLink>
            <DropdownMenu
              label="About Us"
              items={aboutItems}
              isScrolled={scrolled}
            />
            <DropdownMenu
              label="Investment Opportunities"
              items={investmentItems}
              isScrolled={scrolled}
            />
            {flatNavItems.map(({ label, to }) => (
              <NavLink key={to} to={to} className={desktopCls}>
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => navigate("/invest")}
            className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white
                       font-bold text-sm px-6 py-2.5 rounded-lg shadow-md
                       transition-all duration-150 flex items-center gap-2"
          >
            Invest Now
            <Icon name="trendingUp" className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════ MOBILE OVERLAY ══ */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm" // ← FIX 2: z-[55]
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ════════════════════════════════════════════════════ MOBILE DRAWER ══ */}
      <aside
        className={`
          fixed left-0 top-0 h-full z-[60] bg-white shadow-2xl w-80
          transition-transform duration-300 ease-in-out overflow-y-auto
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        `} // ← FIX 3: z-[60]
        aria-label="Mobile navigation drawer"
        aria-hidden={!drawerOpen}
      >
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <Link
            to="/"
            className="font-display text-xl font-black text-[#003366] hover:opacity-90 transition-opacity"
            onClick={() => setDrawerOpen(false)}
          >
            DS<span className="text-[#FF5722]">EZ</span> Global
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close navigation menu"
          >
            <Icon name="close" className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-1" aria-label="Mobile navigation links">
          <NavLink to="/" end className={drawerCls}>
            {({ isActive }) => (
              <>
                <Icon name="home" className="w-5 h-5" />
                <span>Home</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                )}
              </>
            )}
          </NavLink>

          {/* About Us accordion */}
          <div>
            <button
              onClick={() => setMobileAboutOpen((v) => !v)}
              aria-expanded={mobileAboutOpen}
              aria-controls="about-submenu"
              className={accordionHeaderCls(aboutItems)}
            >
              <Icon name="info" className="w-5 h-5 shrink-0" />
              <span className="flex-1">About Us</span>
              <span
                className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
              >
                <Icon name="chevronDown" className="w-4 h-4" />
              </span>
            </button>
            <div
              id="about-submenu"
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${mobileAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="ml-4 pl-4 border-l-2 border-gray-100 space-y-1 mt-1 pb-2">
                {aboutItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    end
                    className={drawerSubCls}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0
                          ${isActive ? "bg-orange-100 text-[#FF5722]" : "text-current"}`}
                        >
                          <Icon name={item.icon} className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-tight">{item.label}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Investment Opportunities accordion */}
          <div>
            <button
              onClick={() => setMobileInvestOpen((v) => !v)}
              aria-expanded={mobileInvestOpen}
              aria-controls="invest-submenu"
              className={accordionHeaderCls(investmentItems)}
            >
              <Icon name="briefcase" className="w-5 h-5 shrink-0" />
              <span className="flex-1">Investment Opportunities</span>
              <span
                className={`transition-transform duration-200 ${mobileInvestOpen ? "rotate-180" : ""}`}
              >
                <Icon name="chevronDown" className="w-4 h-4" />
              </span>
            </button>
            <div
              id="invest-submenu"
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${mobileInvestOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="ml-4 pl-4 border-l-2 border-gray-100 space-y-1 mt-1 pb-2">
                {investmentItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    end
                    className={drawerSubCls}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0
                          ${isActive ? "bg-orange-100 text-[#FF5722]" : "text-current"}`}
                        >
                          <Icon name={item.icon} className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-tight">{item.label}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Flat links */}
          {flatNavItems.map(({ label, to, icon }) => (
            <NavLink key={to} to={to} className={drawerCls}>
              {({ isActive }) => (
                <>
                  <Icon name={icon} className="w-5 h-5" />
                  <span className="flex-1">{label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-2 pb-8">
          <button
            onClick={() => navigate("/invest")}
            className="w-full bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white
                       font-bold py-4 rounded-xl transition-all shadow-md
                       flex items-center justify-center gap-2"
          >
            Invest Now
            <Icon name="trendingUp" className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
