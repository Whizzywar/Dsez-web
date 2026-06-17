import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

/**
 * DropdownMenu — split-trigger version
 * ─────────────────────────────────────────────────────────────────────────────
 * The label and the chevron are now TWO SEPARATE click targets:
 *
 *  • Clicking the LABEL  → navigates directly to `baseHref` (e.g. "/about")
 *                          and does NOT open the dropdown panel.
 *  • Clicking the CHEVRON → toggles the dropdown panel open/closed and
 *                          does NOT navigate anywhere.
 *  • Hovering the whole group → still opens the panel (desktop convenience),
 *                          but a deliberate click on the label always wins
 *                          and takes the user straight to the page.
 *
 * Props:
 *   label      {string}   — trigger text (e.g. "About Us")
 *   baseHref   {string}   — route the label itself navigates to (e.g. "/about")
 *   items      {Array}    — [{ label, icon, sub, href }] — dropdown sub-links
 *   isScrolled {boolean}  — reserved for theming
 */
const DropdownMenu = ({ label, baseHref, items, isScrolled }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Highlight whole trigger group if the base page OR any child route is active
  const isGroupActive =
    location.pathname === baseHref ||
    items.some((item) => location.pathname.startsWith(item.href));

  return (
    <div className="relative h-full flex items-center" ref={ref}>
      {/* ── Trigger group: label + chevron are independent click targets ── */}
      <div
        className="flex items-center h-full"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* LABEL — navigates straight to the base About page */}
        <NavLink
          to={baseHref}
          end
          className={() =>
            `font-bold text-sm tracking-wide h-full flex items-center pr-1
             transition-colors duration-200
             ${isGroupActive ? "text-[#FF5722]" : "text-[#001e40] hover:text-[#FF5722]"}`
          }
        >
          {label}
        </NavLink>

        {/* CHEVRON — only this toggles the dropdown panel */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label={`Show ${label} submenu`}
          className={`h-full flex items-center pl-1 pr-0.5
                      transition-colors duration-200
                      ${isGroupActive ? "text-[#FF5722]" : "text-[#001e40] hover:text-[#FF5722]"}`}
        >
          <span
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <Icon name="chevronDown" className="w-4 h-4" />
          </span>
        </button>

        {/* Active underline (matches the look of the flat NavLinks beside it) */}
        {isGroupActive && (
          <span className="absolute bottom-0 left-0 right-5 h-0.5 bg-[#FF5722]" />
        )}
      </div>

      {/* ── Dropdown panel — sub-links only, label itself is not duplicated ── */}
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
          role="menu"
          aria-label={`${label} submenu`}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-60 animate-fadeInDown">
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
                    <span
                      className={`
                      w-8 h-8 rounded-lg flex items-center justify-center
                      shrink-0 transition-all duration-150
                      ${
                        isActive
                          ? "bg-orange-100 text-[#FF5722]"
                          : "bg-[#001e40]/5 text-[#001e40] group-hover:bg-orange-50 group-hover:text-[#FF5722]"
                      }
                    `}
                    >
                      <Icon name={item.icon} className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="leading-tight">{item.label}</div>
                      {item.sub && (
                        <div className="text-xs text-gray-400 font-normal mt-0.5 truncate">
                          {item.sub}
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[#FF5722] shrink-0" />
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
