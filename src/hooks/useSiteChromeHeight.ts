import { useEffect } from "react";

/**
 * Measures every element marked `data-site-chrome` (announcement bar, navbar)
 * and exposes their combined height as `--site-chrome-h` on <html>.
 * The hero uses it so the first fold = viewport minus whatever sits above it.
 */
export function useSiteChromeHeight() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-site-chrome]")
    );

    const update = () => {
      const total = els.reduce((sum, el) => sum + el.offsetHeight, 0);
      root.style.setProperty("--site-chrome-h", `${total}px`);
    };

    update();
    const ro = new ResizeObserver(update);
    els.forEach((el) => ro.observe(el));

    return () => {
      ro.disconnect();
      root.style.removeProperty("--site-chrome-h");
    };
  }, []);
}
