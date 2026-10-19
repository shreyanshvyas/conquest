
import type { ReactNode } from "react";
import { Fold, Mark, SectionTitle } from "@/components/ui/Fold";

const icon = "h-7 w-7";

const tracks: {
  name: string;
  tagline: string;
  description: string;
  partner: string;
  partnerLogo: string;
  icon: ReactNode;
  featured?: boolean;
  link?: string;
}[] = [
  {
    name: "Cybersecurity",
    tagline: "Hack the server. Legally.",
    description:
      "Eligibility: Students from a Science background",
    partner: "ThinkCyber",
    partnerLogo: "/thinkcyber.png",
    link:"https://thinkcybergroup.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={icon}
      >
        <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Artificial Intelligence",
    tagline: "Don't just use AI. Build with it.",
    description:
      "Eligibility: Students from a Science background",
    partner: "Base44",
    partnerLogo: "/base44.png",
    link:"https://base44.com/",
    featured: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={icon}
      >
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </svg>
    ),
  },
  {
    name: "Finance",
    tagline: "Build a Fund that Survives.",
    description:
      "Eligibility: Students from a Commerce background",
    partner: "CMT Association",
    partnerLogo: "/cmt.png",
    link:"https://cmtassociation.org/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={icon}
      >
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
];

export default function TracksSection() {
  return (
    <Fold id="tracks" tone="sky" labelledBy="tracks-title">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>

          <SectionTitle id="tracks-title">
            Three tracks.
            <span className="mt-[0.18em] block">
              <Mark>One big opportunity.</Mark>
            </span>
          </SectionTitle>
        </div>

        
      </div>

      <p className="mt-6 text-xs font-semibold text-brand-blue/60 md:hidden">
        Swipe to see all three →
      </p>

      <div className="-mx-5 mt-[clamp(1.25rem,4.5vh,3rem)] flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 lg:gap-5 [&::-webkit-scrollbar]:hidden">
        {tracks.map((t, i) => (
          <article
            key={t.name}
            className={`flex w-[82%] shrink-0 snap-start flex-col rounded-3xl p-[clamp(1.25rem,3vh,2rem)] transition-transform duration-300 hover:-translate-y-1 md:w-auto ${
              t.featured
                ? "bg-brand-blue text-white"
                : "bg-white text-brand-blue"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  t.featured
                    ? "bg-brand-orange text-brand-blue"
                    : "bg-brand-blue text-white"
                }`}
              >
                {t.icon}
              </span>

              <span
                className={`font-display text-3xl ${
                  t.featured ? "text-brand-sky/40" : "text-brand-sky"
                }`}
              >
                0{i + 1}
              </span>
            </div>

            <h3 className="mt-[clamp(1rem,3vh,1.75rem)] font-display text-[clamp(1.75rem,2.6vw,2.25rem)] uppercase leading-none">
              {t.name}
            </h3>

            <p
              className={`mt-2 font-bold ${
                t.featured ? "text-white" : "text-brand-blue"
              }`}
            >
              {t.tagline}
            </p>

            <p
              className={`mt-2 text-sm leading-6 ${
                t.featured ? "text-brand-sky" : "text-brand-blue/70"
              }`}
            >
              {t.description}
            </p>

            {/* Centered partner logo */}
            <div className="mt-auto pt-5">
              <div
                className={`flex h-20 items-center justify-center border-t ${
                  t.featured
                    ? "border-white/15"
                    : "border-brand-gray"
                }`}
              >
                <a href={t.link}  rel="noopener noreferrer">
                <img
                  src={t.partnerLogo}
                  alt={`${t.partner} logo`}
                  loading="lazy"
                  className="max-h-12 max-w-[75%] object-contain"
                />
                </a>
              </div>
            </div>
          </article>
        ))}
        <p className="max-w-sm text-base leading-relaxed text-brand-blue/75">
         Special Note: No coding experience needed.
        </p>
      </div>
    </Fold>
  );
}
