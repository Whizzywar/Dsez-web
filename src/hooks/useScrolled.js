import { useState, useEffect } from "react";

/**
 * useScrolled
 * Returns `true` when the page has been scrolled past `threshold` pixels.
 *
 * @param {number} threshold — scroll distance in px before returning true (default: 50)
 * @returns {boolean}
 */
const useScrolled = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrolled;
