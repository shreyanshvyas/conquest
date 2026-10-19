import type { ReactNode } from "react";

/*
 * Shared building blocks for the single-page landing.
 *
 * <Fold> — on desktop every section is exactly one screen tall (viewport minus
 * navbar) with its content centered, and the page snaps gently to each one.
 * If content is taller than the screen the section simply grows, so nothing
 * is ever clipped. On mobile sections flow naturally.
 */

const tones = {
  blue: "bg-brand-blue text-white",
  white: "bg-white text-brand-blue",
  sky: "bg-brand-mist text-brand-blue",
  orange: "bg-brand-orange text-brand-blue",
} as const;

export type Tone = keyof typeof tones;

export function Fold({
  id,
  tone = "white",
  labelledBy,
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate flex snap-start flex-col overflow-hidden lg:min-h-[calc(100svh-var(--site-chrome-h,5rem))] ${tones[tone]} ${className}`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[clamp(1.25rem,5vh,4.5rem)] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={`inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
        onDark ? "text-brand-sky" : "text-brand-blue/70"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-4 font-display text-[clamp(2.25rem,min(4.6vw,7.5vh),4.25rem)] uppercase leading-[0.95] ${className}`}
    >
      {children}
    </h2>
  );
}

/** Every CTA on the page scrolls to the hero form. */
export function RegisterCta({
  variant = "orange",
  className = "",
  children = "Register free",
}: {
  variant?: "orange" | "blue" | "white";
  className?: string;
  children?: ReactNode;
}) {
  const styles = {
    orange: "bg-brand-orange text-brand-blue hover:bg-white",
    blue: "bg-brand-blue text-white hover:bg-brand-blue/90",
    white: "bg-white text-brand-blue hover:bg-brand-sky",
  }[variant];

  return (
    <a
      href="#hero-form"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-lg font-bold transition-colors ${styles} ${className}`}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}

/** Orange highlight for heading emphasis on light backgrounds (orange text on white fails contrast). */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-brand-orange px-[0.14em] pt-[0.06em] leading-[1.05] text-brand-blue">
      {children}
    </span>
  );
}
