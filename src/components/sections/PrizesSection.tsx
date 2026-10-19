import { useState, type ReactNode } from "react";
import { Fold } from "@/components/ui/Fold";

/*
 * Prizes — card layout (3 prize cards + 2 benefit cards) on white.
 * ₹4 crore is the hero of the section: giant Anton numerals with an orange marker underline.
 * Desktop order 2nd · 1st · 3rd so 1st sits in the centre, raised; mobile shows 1st first.
 *
 * Logos: expects /edept.png and /wud.png in /public (falls back to a text wordmark if missing).
 */

const icon = "h-7 w-7";

const prizes = [
  {
    place: "1st place",
    amount: "₹1,00,000",
    featured: true,
    order: "lg:order-2",
    tile: "bg-gradient-to-br from-brand-orange to-[#d98f22] text-brand-blue",
    icon: (
      // trophy
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={icon}>
        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M17 6h3v1a3 3 0 0 1-3 3M7 6H4v1a3 3 0 0 0 3 3" />
      </svg>
    ),
  },
  {
    place: "2nd place",
    amount: "₹70,000",
    order: "lg:order-1",
    tile: "bg-gradient-to-br from-brand-blue to-[#0d3f7a] text-white",
    icon: (
      // medal
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={icon}>
        <circle cx="12" cy="15" r="5" />
        <path d="M8.5 11.5 6 3h4l2 4 2-4h4l-2.5 8.5" />
      </svg>
    ),
  },
  {
    place: "3rd place",
    amount: "₹30,000",
    order: "lg:order-3",
    tile: "bg-gradient-to-br from-brand-sky to-[#a9c6e8] text-brand-blue",
    icon: (
      // star
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={icon}>
        <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />
      </svg>
    ),
  },
];

export default function PrizesSection() {
  return (
    <Fold id="prizes" tone="white" labelledBy="prizes-title">
      {/* ── Header: ₹4 crore lockup ───────────────────────── */}
      <div className="flex flex-col items-center text-center">

        <h2
          id="prizes-title"
          className="mt-[clamp(0.5rem,1.8vh,1rem)] flex flex-col items-center gap-x-5 gap-y-1 font-display uppercase sm:flex-row sm:items-center"
        >
          <span className="relative whitespace-nowrap text-[clamp(3.5rem,min(10vw,10.5vh),8.5rem)] leading-[0.85] tracking-tight">
            {/* orange marker underline */}
            <span
              aria-hidden="true"
              className="absolute inset-x-[-0.06em] bottom-[0.04em] -z-10 h-[0.32em] -skew-x-6 rounded-sm bg-brand-orange"
            />
            <span className="mr-[0.04em] align-top text-[0.55em] leading-none">₹</span>4 crore
          </span>
          <span
            aria-hidden="true"
            className="hidden h-[clamp(3rem,8vh,5rem)] w-px bg-brand-blue/20 sm:block"
          />
          <span className="text-[clamp(1.5rem,min(3vw,4.4vh),2.5rem)] leading-[0.95] text-brand-blue sm:text-left">
            in prizes &amp;
            <span className="block">scholarships</span>
          </span>
        </h2>

        <p className="mt-[clamp(0.4rem,1.6vh,1.1rem)] max-w-md text-base leading-relaxed text-brand-blue/75">
          The same cash prizes in every track. 
        </p>
      </div>

      {/* ── Prize cards ───────────────────────────────────── */}
      <ul className="mt-[clamp(1rem,3.4vh,2.5rem)] grid grid-cols-2 items-center gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
        {prizes.map((p) => (
          <li key={p.place} className={`${p.order} ${p.featured ? "col-span-2 lg:col-span-1" : ""} h-full lg:h-auto`}>
            <PrizeCard {...p} />
          </li>
        ))}
      </ul>

      {/* ── Benefit cards ─────────────────────────────────── */}
      <div className="mt-[clamp(0.75rem,2.4vh,1.5rem)] grid gap-4 md:grid-cols-2 lg:gap-6">
        <BenefitCard
          tile="bg-gradient-to-br from-brand-blue to-[#0d3f7a] text-white"
          who="Top 20 in each track"
          what="Up to 100% scholarship"
          note=""
          logos={
            <>
              <Logo src="/edept1.png" alt="edept" />
              <span className="text-brand-blue/30">×</span>
              <Logo src="/wud.png" alt="WUD" />
            </>
          }
          icon={
            // graduation cap
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="m2 9 10-5 10 5-10 5L2 9z" />
              <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
            </svg>
          }
        />
        <BenefitCard
          tile="bg-gradient-to-br from-brand-orange to-[#d98f22] text-brand-blue"
          who="Every participant"
          what="Certificate + scholarship"
          note="Across edept programs"
          icon={
            // certificate
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <rect x="3" y="4" width="18" height="13" rx="2" />
              <path d="M7 9h10M7 12h6M15 17l1.5 4 1.5-1.5 1.5 1.5L18 17" />
            </svg>
          }
        />
      </div>

    </Fold>
  );
}

/* ───────────────────────── Pieces ───────────────────────── */

function PrizeCard({
  place,
  amount,
  tile,
  icon: glyph,
  featured = false,
}: {
  place: string;
  amount: string;
  tile: string;
  icon: ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border text-center transition-all duration-300 ease-out hover:-translate-y-2 ${
        featured
          ? "border-brand-blue bg-brand-blue py-[clamp(1rem,3.4vh,2.25rem)] text-white shadow-2xl shadow-brand-blue/30 hover:shadow-brand-blue/40 lg:scale-[1.04]"
          : "border-brand-gray bg-white py-[clamp(0.8rem,2.6vh,1.75rem)] text-brand-blue shadow-sm hover:border-brand-sky hover:shadow-xl hover:shadow-brand-blue/10"
      } px-3 sm:px-6`}
    >
      {/* top accent bar grows on hover */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
          featured ? "bg-brand-orange" : "bg-brand-blue"
        }`}
      />
      {/* soft glow on the featured card */}
      {featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-sky/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
        />
      )}

      <span
        className={`relative flex h-[clamp(2.6rem,6.2vh,3.75rem)] w-[clamp(2.6rem,6.2vh,3.75rem)] items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tile}`}
      >
        {glyph}
      </span>

      <p className={`relative mt-[clamp(0.5rem,1.6vh,1.1rem)] text-sm font-bold uppercase tracking-[0.16em] ${featured ? "text-brand-sky" : "text-brand-blue/65"}`}>
        {place}
      </p>
      <p
        className={`relative mt-1.5 font-display leading-none transition-transform duration-300 group-hover:scale-105 ${
          featured ? "text-[clamp(2.5rem,min(4.4vw,7.5vh),3.75rem)] text-brand-orange" : "text-[clamp(1.85rem,min(3.6vw,6.2vh),3rem)] text-brand-blue"
        }`}
      >
        {amount}
      </p>
      <p className={`relative mt-2 text-xs sm:text-sm ${featured ? "text-brand-sky" : "text-brand-blue/65"}`}>Cash prize · per track</p>
    </article>
  );
}

function BenefitCard({
  tile,
  who,
  what,
  note,
  icon: glyph,
  logos,
}: {
  tile: string;
  who: string;
  what: string;
  note: string;
  icon: ReactNode;
  logos?: ReactNode;
}) {
  return (
    <article className="group flex flex-wrap items-center gap-4 rounded-3xl sm:flex-nowrap border border-brand-gray bg-white p-[clamp(0.75rem,2.2vh,1.5rem)] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-sky hover:shadow-xl hover:shadow-brand-blue/10 sm:gap-5">
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tile}`}
      >
        {glyph}
      </span>

      <div className="min-w-0 flex-1 text-brand-blue">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue/60">{who}</p>
        <p className="mt-1 font-display text-[clamp(1.35rem,3.4vh,1.75rem)] uppercase leading-none">{what}</p>
        <p className="mt-1 text-sm text-brand-blue/70">{note}</p>
      </div>

      {logos && <div className="flex w-full shrink-0 items-center gap-2.5 border-t border-brand-gray pt-3 pl-16 sm:w-auto sm:border-0 sm:pt-0 sm:pl-0">{logos}</div>}
    </article>
  );
}

/** Partner logo with a text fallback if the image file is missing. */
function Logo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="text-sm font-extrabold tracking-wide text-brand-blue">{alt}</span>;
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-[clamp(1.5rem,4.6vh,3rem)] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );
} 