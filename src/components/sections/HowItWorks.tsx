import { useState } from "react";
import { Fold, RegisterCta, SectionTitle } from "@/components/ui/Fold";

/*
 * Key dates + who can join.
 * Left: an "entry pass" ticket that carries the eligibility rules.
 * Right: a November 2026 wall calendar. Hovering a date or a list row highlights both.
 */

const eligibility = [
  "Class 11 or 12, any school in India",
  "Science (any track) or Commerce (Finance)",
  "Solo entry, no team needed",
  "Laptop + Wi-Fi. No coding experience needed",
];

type Step = { day: number; title: string; detail: string; kind: "deadline" | "event" | "bonus" | "final" };

const steps: Step[] = [
  { day: 20, title: "Register free", detail: "Last day · pick your track", kind: "deadline" },
  { day: 21, title: "Online workshop", detail: "Learn the basics", kind: "event" },
  { day: 22, title: "Round 1", detail: "Show what you know", kind: "event" },
  { day: 25, title: "Counseling session", detail: "Complimentary · by Apexr, 7 pm", kind: "bonus" },
  { day: 29, title: "Grand final", detail: "Compete for prizes", kind: "final" },
];

/* November 2026 starts on a Sunday → 30 days in 5 Sunday-first rows */
const YEAR = 2026;
const MONTH = 10; // 0-based: November
const firstWeekday = new Date(YEAR, MONTH, 1).getDay();
const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
const cells: (number | null)[] = [
  ...Array.from({ length: firstWeekday }, () => null),
  ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
];
const weekdayShort = (d: number) =>
  new Date(YEAR, MONTH, d).toLocaleDateString("en-US", { weekday: "short" });

const markStyle: Record<Step["kind"], string> = {
  deadline: "bg-brand-orange text-brand-blue",
  event: "bg-brand-blue text-white",
  bonus: "bg-brand-sky text-brand-blue",
  final: "bg-brand-blue text-brand-orange",
};

export default function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null);
  const stepByDay = new Map(steps.map((s) => [s.day, s]));

  return (
    <Fold id="how-it-works" tone="blue" labelledBy="how-title">
      {/* Giant outlined "NOV" — background texture */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] -left-[0.04em] -z-10 select-none font-display text-[clamp(10rem,30vw,26rem)] uppercase leading-none text-transparent [-webkit-text-stroke:2px_rgb(197_218_241/0.12)]"
      >
        Nov
      </span>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14">
        {/* ── Left: title + entry pass ─────────────────────── */}
        <div>
          <SectionTitle id="how-title">
            Five dates.
            <span className="block text-brand-orange">All online.</span>
          </SectionTitle>

          <EntryPass />

          <div className="mt-[clamp(1.25rem,3.5vh,2rem)] hidden lg:block">
            <RegisterCta />
          </div>
        </div>

        {/* ── Right: wall calendar ─────────────────────────── */}
        <div className="relative">
          {/* binder rings */}
          <div aria-hidden="true" className="absolute -top-3 left-0 right-0 z-10 flex justify-around px-16">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-6 w-2.5 rounded-full bg-gradient-to-b from-brand-gray to-brand-sky shadow" />
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl bg-white text-brand-blue shadow-2xl shadow-black/30">
            {/* month header */}
            <div className="flex items-end justify-between bg-brand-orange px-6 pb-3 pt-[clamp(1rem,2.6vh,1.5rem)]">
              <p className="font-display text-[clamp(1.75rem,4.4vh,2.5rem)] uppercase leading-none">November</p>
              <p className="font-display text-[clamp(1.25rem,3vh,1.6rem)] leading-none text-brand-blue">{YEAR}</p>
            </div>

            <div className="grid gap-5 p-[clamp(0.9rem,2.6vh,1.5rem)] sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6">
              {/* month grid */}
              <div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-brand-blue/45">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>
                <div className="mt-1.5 grid grid-cols-7 gap-1">
                  {cells.map((d, i) => {
                    if (d === null) return <span key={`e${i}`} />;
                    const step = stepByDay.get(d);
                    const isHot = hovered === d;
                    return (
                      <span
                        key={d}
                        onMouseEnter={() => step && setHovered(d)}
                        onMouseLeave={() => setHovered(null)}
                        title={step ? `${step.title} · ${weekdayShort(d)} ${d} Nov` : undefined}
                        className={`relative flex aspect-square w-[clamp(1.9rem,4.6vh,2.4rem)] items-center justify-center rounded-lg text-sm transition-all duration-200 ${
                          step
                            ? `${markStyle[step.kind]} cursor-default font-display text-base ${isHot ? "scale-110 shadow-lg" : ""}`
                            : d < 20
                              ? "text-brand-blue/25"
                              : "text-brand-blue/55"
                        }`}
                      >
                        {d}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* event list */}
              <ol className="flex flex-col justify-center divide-y divide-brand-gray">
                {steps.map((s) => {
                  const isHot = hovered === s.day;
                  return (
                    <li
                      key={s.day}
                      onMouseEnter={() => setHovered(s.day)}
                      onMouseLeave={() => setHovered(null)}
                      className={`-mx-2 flex items-center gap-3 rounded-xl px-2 py-[clamp(0.35rem,1.1vh,0.6rem)] transition-colors duration-200 ${
                        isHot ? "bg-brand-mist" : ""
                      }`}
                    >
                      <span className="w-11 shrink-0 text-center leading-none">
                        <span className="block font-display text-[clamp(1.4rem,3.4vh,1.75rem)]">{s.day}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue/50">
                          {weekdayShort(s.day)}
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="font-bold leading-tight">{s.title}</span>
                          {s.kind === "deadline" && (
                            <span className="rounded-full bg-brand-red px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                              Deadline
                            </span>
                          )}
                        </span>
                        <span className="block text-xs text-brand-blue/65">{s.detail}</span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Fold>
  );
}

/* Ticket-style card: perforated stub on the right, notches cut into the edge */
function EntryPass() {
  return (
    <div className="relative mt-[clamp(1.25rem,3.5vh,2rem)] flex max-w-xl overflow-hidden rounded-2xl bg-white text-brand-blue shadow-xl shadow-black/20 transition-transform duration-300 hover:-rotate-1 hover:scale-[1.01]">
      {/* main */}
      <div className="flex-1 p-[clamp(0.9rem,2.4vh,1.25rem)] pr-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue/55">Entry pass · Who can join</p>
        <ul className="mt-2.5 space-y-[clamp(0.3rem,1vh,0.5rem)]">
          {eligibility.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-snug sm:text-[15px]">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-orange text-brand-blue">
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* perforation + notches */}
      <div aria-hidden="true" className="relative w-0 border-l-2 border-dashed border-brand-gray">
        <span className="absolute -left-[11px] -top-[10px] h-5 w-5 rounded-full bg-brand-blue" />
        <span className="absolute -bottom-[10px] -left-[11px] h-5 w-5 rounded-full bg-brand-blue" />
      </div>

      {/* stub */}
      <div className="flex w-[clamp(5.5rem,22%,7.5rem)] shrink-0 flex-col items-center justify-center bg-brand-mist px-2 text-center">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-blue/55">Admit one</span>
        <span className="mt-1 font-display text-3xl uppercase leading-none">Free</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-wider">Class 11 &amp; 12</span>
      </div>
    </div>
  );
}