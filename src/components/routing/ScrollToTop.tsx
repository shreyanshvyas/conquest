import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Next.js scrolls to the top on navigation; React Router does not.
 * Scrolls to top on path changes, or to the element when a #hash is present.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
