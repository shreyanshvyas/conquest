import { useEffect, useState } from "react";

/* Sticky mobile CTA. Hides while the registration form is on screen. */
export default function MobileRegisterBar() {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("hero-form");
    if (!form) return;
    const io = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-brand-blue/10 bg-white/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        formVisible ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={formVisible}
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg uppercase leading-none text-brand-blue">
            Conquest 2026
          </p>
          <p className="mt-1 text-xs text-brand-blue/70">Free · Class 11 &amp; 12 · Ends 20 Nov</p>
        </div>
        <a
          href="#hero-form"
          tabIndex={formVisible ? -1 : 0}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-brand-blue"
        >
          Register free <span className="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
