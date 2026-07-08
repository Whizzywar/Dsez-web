import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

const HOVER_OPEN_DELAY = 80; // ms — avoids opening on an accidental graze
const HOVER_CLOSE_DELAY = 200; // ms — avoids closing while crossing a small gap

const DropdownMenu = ({ label, baseHref, items }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // keyboard-focused item

  const ref = useRef(null);
  const chevronRef = useRef(null);
  const itemRefs = useRef([]);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  const clearTimers = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
  };

  const requestOpen = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), HOVER_OPEN_DELAY);
  }, []);

  const requestClose = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setActiveIndex(-1);
    }, HOVER_CLOSE_DELAY);
  }, []);

  const closeNow = useCallback(() => {
    clearTimers();
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) closeNow();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [closeNow]);

  // Close on route change
  useEffect(() => {
    const id = setTimeout(closeNow);
    return () => clearTimeout(id);
  }, [location.pathname, closeNow]);

  // Clean up pending timers on unmount
  useEffect(() => () => clearTimers(), []);

  // Move focus to the active item whenever it changes via keyboard
  useEffect(() => {
    if (open && activeIndex >= 0) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [open, activeIndex]);

  const isGroupActive =
    location.pathname === baseHref ||
    items.some((item) => location.pathname.startsWith(item.href));

  // ── Keyboard handling on the chevron button ──────────────────────────────
  const onChevronKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex(0);
    }
  };

  // ── Keyboard handling inside the open panel ───────────────────────────────
  const onPanelKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % items.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(items.length - 1);
        break;
      case "Escape":
        e.preventDefault();
        closeNow();
        chevronRef.current?.focus();
        break;
      case "Tab":
        // Let focus naturally leave the panel; just close it behind them.
        closeNow();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="relative h-full flex items-center"
      ref={ref}
      onMouseEnter={requestOpen}
      onMouseLeave={requestClose}
    >
      {/* ── Trigger group: label + chevron are independent click targets ── */}
      <div className="flex items-center h-full">
        {/* LABEL — navigates straight to the base page */}
        <NavLink
          to={baseHref}
          end
          onClick={closeNow}
          className={() =>
            `font-bold text-sm tracking-wide h-full flex items-center pr-1
             transition-colors duration-200 rounded-sm
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]/50
             ${isGroupActive ? "text-[#FF5722]" : "text-[#001e40] hover:text-[#FF5722]"}`
          }
        >
          {label}
        </NavLink>

        {/* CHEVRON — only this toggles the dropdown panel */}
        <button
          ref={chevronRef}
          onClick={() => {
            clearTimers();
            setOpen((v) => {
              const next = !v;
              if (next) setActiveIndex(-1);
              return next;
            });
          }}
          onKeyDown={onChevronKeyDown}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label={`Show ${label} submenu`}
          className={`h-full flex items-center pl-1 pr-0.5 rounded-sm
                      transition-colors duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5722]/50
                      ${isGroupActive ? "text-[#FF5722]" : "text-[#001e40] hover:text-[#FF5722]"}`}
        >
          <span
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <Icon name="chevronDown" className="w-4 h-4" />
          </span>
        </button>

        {/* Active underline */}
        {isGroupActive && (
          <span className="absolute bottom-0 left-0 right-5 h-0.5 bg-[#FF5722]" />
        )}
      </div>

      {/* ── Dropdown panel ── */}
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
          role="menu"
          aria-label={`${label} submenu`}
          onKeyDown={onPanelKeyDown}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-60 animate-fadeInDown">
            {items.map((item, i) => (
              <NavLink
                key={item.label}
                ref={(el) => (itemRefs.current[i] = el)}
                to={item.href}
                role="menuitem"
                end
                tabIndex={-1}
                onClick={closeNow}
                onMouseEnter={() => setActiveIndex(i)}
                style={{ transitionDelay: `${i * 25}ms` }}
                className={({ isActive }) => `
                  flex items-center gap-3 px-5 py-3.5 text-sm font-semibold
                  transition-all duration-150 group outline-none
                  ${activeIndex === i ? "bg-gray-50" : ""}
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
