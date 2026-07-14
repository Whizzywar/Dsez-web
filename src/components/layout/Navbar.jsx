import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { aboutItems, investmentItems, mediaItems } from "../siteData";
import Icon from "../ui/Icon";
import DropdownMenu from "../ui/DropdownMenu";
import useScrolled from "../../hooks/useScrolled";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

// ─── Route config for flat top-level links ────────────────────────────────────
const flatNavItems = [
  { label: "FAQs", to: "/faqs", icon: "questionMark" },
  { label: "Contact Us", to: "/contact", icon: "contact" },
];

const accordionSections = [
  {
    key: "about",
    label: "About Us",
    baseHref: "/about",
    icon: "info",
    items: aboutItems,
  },
  {
    key: "invest",
    label: "Investment Opportunities",
    baseHref: "/invest",
    icon: "briefcase",
    items: investmentItems,
  },
  {
    key: "news",
    label: "Media",
    baseHref: "/media",
    icon: "photo",
    items: mediaItems,
  },
];

// ─── NavLink class factories ──────────────────────────────────────────────────
const desktopCls = ({ isActive }) =>
  [
    "font-bold text-sm tracking-wide h-full flex items-center transition-colors duration-200",
    isActive
      ? "text-[#FF5722] border-b-2 border-[#FF5722]"
      : "text-[#43474f] hover:text-[#FF5722]",
  ].join(" ");

const drawerCls = ({ isActive }) =>
  [
    "flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-150 text-sm",
    isActive
      ? "bg-[#FF5722] text-white shadow-md"
      : "text-[#43474f] hover:bg-gray-50 active:bg-gray-100",
  ].join(" ");

const drawerSubCls = ({ isActive }) =>
  [
    "flex items-center gap-2.5 px-3 py-3 text-sm rounded-lg transition-colors duration-150 font-medium",
    isActive
      ? "text-[#FF5722] bg-orange-50 font-bold"
      : "text-[#43474f] hover:text-[#FF5722] hover:bg-gray-50 active:bg-gray-100",
  ].join(" ");

// ─── Component ────────────────────────────────────────────────────────────────
const Navbar = () => {
  const scrolled = useScrolled(50);
  const location = useLocation();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  // Single source of truth for which mobile accordion is open, instead of
  // three separate booleans that previously got mixed up. Only one section
  // is open at a time, which also reads better on small screens.
  const [openSection, setOpenSection] = useState(null);

  useBodyScrollLock(drawerOpen);

  // ── Auto-close drawer when the route changes ─────────────────────────────
  useEffect(() => {
    if (!drawerOpen) return;
    const t = setTimeout(() => setDrawerOpen(false), 0);
    return () => clearTimeout(t);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Pre-open the right accordion when the drawer opens on a deep route ──
  useEffect(() => {
    if (!drawerOpen) return;
    const t = setTimeout(() => {
      const match = accordionSections.find((s) =>
        s.items.some((i) => location.pathname.startsWith(i.href)),
      );
      setOpenSection(match ? match.key : null);
    }, 0);
    return () => clearTimeout(t);
  }, [drawerOpen, location.pathname]);

  const toggleSection = (key) =>
    setOpenSection((current) => (current === key ? null : key));

  const accordionHeaderCls = (items) =>
    [
      "flex-1 flex items-center gap-3 py-3.5 px-4 font-semibold text-sm transition-colors duration-150",
      items.some((i) => location.pathname.startsWith(i.href))
        ? "text-[#FF5722]"
        : "text-[#43474f]",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 h-full flex items-center justify-between gap-2">
          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              className="p-2 -ml-2 text-[#003366] lg:hidden rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <Icon name="menu" className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <Link
              to="/"
              className="font-display text-xl sm:text-2xl font-black text-[#003366] tracking-tight hover:opacity-90 transition-opacity shrink-0"
              aria-label="DSEZ — back to home"
            >
              DS<span className="text-[#FF5722]">EZ</span>
            </Link>
          </div>

          {/* ── Desktop nav ──────────────────────────────────────────────── */}
          <nav
            className="hidden lg:flex items-center gap-8 h-full"
            aria-label="Main navigation"
          >
            <NavLink to="/" end className={desktopCls}>
              Home
            </NavLink>

            <DropdownMenu
              label="About Us"
              baseHref="/about"
              items={aboutItems}
              isScrolled={scrolled}
            />
            <DropdownMenu
              label="Investment Opportunities"
              baseHref="/invest"
              items={investmentItems}
              isScrolled={scrolled}
            />
            <DropdownMenu
              label="Media"
              baseHref="/media"
              items={mediaItems}
              isScrolled={scrolled}
            />

            {flatNavItems.map(({ label, to }) => (
              <NavLink key={to} to={to} className={desktopCls}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ── Invest Now CTA ─────────────────────────────────────────────
               Hidden below sm to keep the header from crowding on small
               phones — the same action is always available in the drawer. */}
          <button
            onClick={() => navigate("/invest")}
            className="
              hidden sm:flex bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white
              font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg shadow-md
              transition-all duration-150 items-center gap-1.5 sm:gap-2 shrink-0
            "
          >
            <span className="hidden md:inline">Invest Now</span>
            <span className="md:hidden">Invest</span>
            <Icon name="trendingUp" className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════ MOBILE OVERLAY ══ */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-55 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ════════════════════════════════════════════════════ MOBILE DRAWER ══
           - w-full on the smallest screens so content never feels cramped
           - max-w-sm caps it on slightly bigger phones / small tablets
           - flex flex-col + the CTA pinned at the bottom via mt-auto        */}
      <aside
        className={`
          fixed left-0 top-0 h-full z-60 bg-white shadow-2xl
          w-[85vw] max-w-sm
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Mobile navigation drawer"
        aria-hidden={!drawerOpen}
      >
        {/* ── Drawer header ── */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex justify-between items-center shrink-0">
          <Link
            to="/"
            className="font-display text-lg sm:text-xl font-black text-[#003366] hover:opacity-90 transition-opacity"
            onClick={() => setDrawerOpen(false)}
          >
            DS<span className="text-[#FF5722]">EZ</span> Global
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Close navigation menu"
          >
            <Icon
              name="close"
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
            />
          </button>
        </div>

        {/* ── Drawer links — scrollable if content overflows on short screens ── */}
        <nav
          className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1"
          aria-label="Mobile navigation links"
        >
          {/* Home */}
          <NavLink to="/" end className={drawerCls}>
            {({ isActive }) => (
              <>
                <Icon name="home" className="w-5 h-5 shrink-0" />
                <span className="flex-1">Home</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                )}
              </>
            )}
          </NavLink>

          {/* ── Split-trigger accordions, generated from one config array ──
               This replaces the three hand-copied blocks that all pointed
               at the same `aboutItems` / `mobileAboutOpen` by mistake.      */}
          {accordionSections.map((section) => {
            const isOpen = openSection === section.key;
            return (
              <div key={section.key} className="rounded-xl overflow-hidden">
                <div
                  className={`flex items-center rounded-xl transition-colors duration-150 ${
                    isOpen ? "bg-orange-50" : "hover:bg-gray-50"
                  }`}
                >
                  {/* LABEL — navigates straight to the section's base page */}
                  <NavLink
                    to={section.baseHref}
                    end
                    className={() => accordionHeaderCls(section.items)}
                  >
                    <Icon name={section.icon} className="w-5 h-5 shrink-0" />
                    <span className="flex-1 text-left">{section.label}</span>
                  </NavLink>

                  {/* CHEVRON — only toggles the accordion, no navigation */}
                  <button
                    onClick={() => toggleSection(section.key)}
                    aria-expanded={isOpen}
                    aria-controls={`${section.key}-submenu`}
                    aria-label={`Toggle ${section.label} submenu`}
                    className="p-3.5 sm:p-4 text-[#43474f] hover:text-[#FF5722] transition-colors"
                  >
                    <span
                      className={`block transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <Icon name="chevronDown" className="w-4 h-4" />
                    </span>
                  </button>
                </div>

                <div
                  id={`${section.key}-submenu`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3.5 sm:ml-4 pl-3.5 sm:pl-4 border-l-2 border-gray-100 space-y-0.5 mt-1 pb-2">
                    {section.items.map((item) => (
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
            );
          })}

          {/* ── Flat links ── */}
          {flatNavItems.map(({ label, to, icon }) => (
            <NavLink key={to} to={to} className={drawerCls}>
              {({ isActive }) => (
                <>
                  <Icon name={icon} className="w-5 h-5 shrink-0" />
                  <span className="flex-1">{label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── Drawer CTA — pinned to the bottom via mt-auto on the flex column ── */}
        <div className="p-3 sm:p-4 pb-[max(1rem,env(safe-area-inset-bottom))] border-t border-gray-100 shrink-0">
          <button
            onClick={() => navigate("/invest")}
            className="
              w-full bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white
              font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-md
              flex items-center justify-center gap-2 text-sm sm:text-base
            "
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
