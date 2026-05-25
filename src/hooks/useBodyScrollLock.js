import { useEffect } from "react";

/**
 * useBodyScrollLock
 * Locks the <body> scroll when `isLocked` is true (e.g. when a mobile drawer is open).
 * Automatically restores scroll on unmount.
 *
 * @param {boolean} isLocked
 */
const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
};

export default useBodyScrollLock;
