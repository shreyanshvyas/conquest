import { Link } from "react-router-dom";
import { RegisterCta } from "@/components/ui/Fold";

/* Last fold: closing CTA + slim footer share one screen. */
export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-title"
      className="relative isolate flex snap-start flex-col overflow-hidden bg-brand-orange text-brand-blue lg:min-h-[calc(100svh-var(--site-chrome-h,5rem))]"
    >
      {/* blue rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full border-[64px] border-white/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-52 -left-24 -z-10 h-[26rem] w-[26rem] rounded-full border-[56px] border-white/25" />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:py-[clamp(1.5rem,5vh,4rem)]">
   
        <h2
          id="final-title"
          className="mt-[clamp(0.75rem,2.5vh,1.25rem)] font-display text-[clamp(2.75rem,min(7vw,10vh),6.5rem)] uppercase leading-[0.92]"
        >
          Your track is waiting.
          <span className="mt-[0.18em] block"><span className="inline-block bg-white px-[0.14em] pt-[0.06em] leading-[1.05]">Claim your spot.</span></span>
        </h2>
        <p className="mt-[clamp(0.75rem,3vh,1.5rem)] max-w-lg text-base font-medium leading-relaxed sm:text-lg">
          Free for Class 11 &amp; 12 students across India. Cybersecurity, AI or Finance.
        </p>
        <RegisterCta variant="blue" className="mt-[clamp(1rem,4vh,2rem)] w-full sm:w-auto" />
      </div>

      <footer className="bg-brand-blue text-brand-sky">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs sm:flex-row sm:px-8 lg:px-12">
          <p className="flex items-center gap-3">
            <img src="/edept.png" alt="conquest" className="h-6 w-auto" />
            © 2026 edept. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy policy</Link>
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Terms &amp; conditions</Link>
          </nav>
        </div>
      </footer>
    </section>
  );
}
