import { useState, useEffect, useRef } from "react";

const DropdownMenu = ({ label, items, isScrolled }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative h-full flex items-center" ref={ref}>
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 font-bold text-sm tracking-wide h-full transition-colors duration-200 ${
          isScrolled
            ? "text-[#001e40] hover:text-[#FF5722]"
            : "text-[#001e40] hover:text-[#FF5722]"
        }`}
      >
        {label}
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <Icon name="chevronDown" className="w-4 h-4" />
        </span>
      </button>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-[220px] animate-fadeInDown">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.href || "#"}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-[#1a1c1c] hover:bg-[#f3f3f3] hover:text-[#FF5722] transition-all group"
              >
                <span className="w-8 h-8 rounded-lg bg-[#001e40]/5 flex items-center justify-center text-[#001e40] group-hover:bg-[#FF5722]/10 group-hover:text-[#FF5722] transition-all">
                  <Icon name={item.icon} className="w-4 h-4" />
                </span>
                <div>
                  <div>{item.label}</div>
                  {item.sub && (
                    <div className="text-xs text-gray-400 font-normal">
                      {item.sub}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
