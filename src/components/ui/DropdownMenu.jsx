import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../ui/Icon";

/**
 * DropdownMenu
 * ─────────────────────────────────────────────────────────────────────────────
 * Desktop navbar dropdown built with React Router.
 *
 * React Router integrations:
 *  • useLocation()  — detects if a child route is currently active so the
 *                     trigger button lights up in brand orange
 *  • useEffect on location.pathname — auto-closes the panel whenever the
 *                     user navigates away (keyboard, direct URL, back button)
 *  • <NavLink to={item.href}> — each menu item gets isActive from the router;
 *                     active item shows orange text + icon bg + dot indicator
 *
 * UX:
 *  • Opens on hover OR click (works on touch devices too)
 *  • Closes on outside mousedown
 *  • Smooth fadeInDown entrance animation (defined in globals.css)
 *
 * Props:
 *   label      {string}   — trigger button text
 *   items      {Array}    — [{ label, icon, sub, href }]
 *   isScrolled {boolean}  — passed from Navbar (reserved for theming)
 */
const DropdownMenu = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  // ── Close on outside click ─────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Close on route change ──────────────────────────────────────────────────
  useEffect(() => {
    return () => setOpen(false);
  }, [location.pathname]);

  // ── Highlight trigger when a child route is active ─────────────────────────
  const isGroupActive = items.some((item) =>
    location.pathname.startsWith(item.href),
  );

  return (
    <div className="relative h-full flex items-center" ref={ref}>
      {/* ── Trigger button ── */}
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`
          flex items-center gap-1 font-bold text-sm tracking-wide h-full
          transition-colors duration-200 select-none
          ${
            isGroupActive
              ? "text-[#FF5722] border-b-2 border-[#FF5722]"
              : "text-[#001e40] hover:text-[#FF5722]"
          }
        `}
      >
        {label}
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <Icon name="chevronDown" className="w-4 h-4" />
        </span>
      </button>

      {/* ── Dropdown panel ── */}
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
          role="menu"
          aria-label={`${label} submenu`}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[240px] animate-fadeInDown">
            {items.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                role="menuitem"
                end
                className={({ isActive }) => `
                  flex items-center gap-3 px-5 py-3.5 text-sm font-semibold
                  transition-all duration-150 group
                  ${
                    isActive
                      ? "bg-orange-50 text-[#FF5722]"
                      : "text-[#1a1c1c] hover:bg-gray-50 hover:text-[#FF5722]"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* Icon badge */}
                    <span
                      className={`
                      w-8 h-8 rounded-lg flex items-center justify-center
                      flex-shrink-0 transition-all duration-150
                      ${
                        isActive
                          ? "bg-orange-100 text-[#FF5722]"
                          : "bg-[#001e40]/5 text-[#001e40] group-hover:bg-orange-50 group-hover:text-[#FF5722]"
                      }
                    `}
                    >
                      <Icon name={item.icon} className="w-4 h-4" />
                    </span>

                    {/* Label + sub-text */}
                    <div className="flex-1 min-w-0">
                      <div className="leading-tight">{item.label}</div>
                      {item.sub && (
                        <div className="text-xs text-gray-400 font-normal mt-0.5 truncate">
                          {item.sub}
                        </div>
                      )}
                    </div>

                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[#FF5722] flex-shrink-0" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
