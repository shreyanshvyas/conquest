import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";

const trackChoices = [
  { label: "Cybersecurity", value: "99|Conquest 2026-Cyber Security" },
  { label: "AI", value: "97|Conquest 2026-AI" },
  { label: "Finance", value: "100|Conquest 2026-Finance" },
];

export default function TrackTabs({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hint, setHint] = useState<number | null>(null);
  const selectedIndex = trackChoices.findIndex((t) => t.value === value);
  const pillIndex = selectedIndex >= 0 ? selectedIndex : hint;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const steps = [0, 1, 2, null];
    const timers = steps.map((step, i) => window.setTimeout(() => setHint(step), 1400 + i * 420));
    return () => timers.forEach(window.clearTimeout);
  }, []);

  useLayoutEffect(() => {
    const list = listRef.current;
    const pill = pillRef.current;
    if (!list || !pill) return;

    const place = () => {
      const tab = pillIndex === null ? undefined : tabRefs.current[pillIndex];
      if (!tab) {
        pill.style.opacity = "0";
        return;
      }
      pill.style.opacity = selectedIndex >= 0 ? "1" : "0.18";
      pill.style.width = `${tab.offsetWidth}px`;
      pill.style.transform = `translateX(${tab.offsetLeft}px)`;
    };

    place();
    const ro = new ResizeObserver(place);
    ro.observe(list);
    return () => ro.disconnect();
  }, [pillIndex, selectedIndex]);

  function select(i: number) {
    setHint(null);
    onChange(trackChoices[i].value);
    tabRefs.current[i]?.focus();
  }

  function pick(i: number) {
    select(i);
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(
      () => document.getElementById("hero-form")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }),
      reduce ? 0 : 260
    );
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const current = selectedIndex < 0 ? 0 : selectedIndex;
    const count = trackChoices.length;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (current + 1) % count
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (current - 1 + count) % count
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? count - 1
              : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
  }

  return (
    <div>
      <p id="hero-track-label" className="text-sm font-medium text-white/85 sm:text-base">
        Choose your competition track
      </p>

      <div
        ref={listRef}
        role="radiogroup"
        aria-labelledby="hero-track-label"
        onKeyDown={onKeyDown}
        className="relative mt-2.5 flex w-fit max-w-full rounded-full bg-white/[0.07] p-[3px] ring-1 ring-white/20"
      >
        <span
          ref={pillRef}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[3px] left-0 top-[3px] w-0 rounded-full bg-white opacity-0 shadow-[0_4px_14px_-4px_rgb(0_0_0/0.45)] transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
        />

        {trackChoices.map((t, i) => {
          const on = i === selectedIndex;
          return (
            <button
              key={t.value}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="radio"
              aria-checked={on}
              aria-controls="hero-form"
              tabIndex={on || (selectedIndex < 0 && i === 0) ? 0 : -1}
              onClick={() => pick(i)}
              className={`relative z-10 min-h-9 min-w-0 cursor-pointer rounded-full px-[clamp(0.75rem,3.4vw,1rem)] text-[clamp(0.8125rem,3.7vw,0.875rem)] font-semibold leading-none whitespace-nowrap transition-[color,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:min-h-10 sm:px-5 sm:text-[15px] ${
                on ? "text-brand-blue" : "text-white hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
