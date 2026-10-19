import { useState } from "react";

import HeroRegistrationForm from "./Form";
import TrackTabs from "./TrackTabs";

const heroFacts = ["For class 11 and 12", "Free registration", "100% online"];

export default function HeroSection() {
  const [track, setTrack] = useState("");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate snap-start overflow-hidden bg-[#0a0a0f] text-white lg:flex lg:min-h-[max(560px,calc(100svh-var(--site-chrome-h,5rem)))] lg:items-center"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap"
        precedence="default"
      />
      <HeroBackdrop />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(380px,440px)] lg:items-center lg:gap-14 lg:px-12 lg:py-[clamp(1.5rem,5vh,3.5rem)]">
        <div className="@container flex min-w-0 flex-col">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.75rem,min(6vw,9.5vh),5.5rem)] uppercase leading-[0.95] tracking-[0.005em]"
          >
            India’s Premier <br className="hidden md:block" /> Tech Hackathon
            <span className="mt-[0.12em] block text-[0.7em] leading-none text-brand-orange">with ₹4 Cr in prizes</span>
          </h1>

          <p className="mt-[clamp(1rem,3vh,1.75rem)] flex items-center whitespace-nowrap text-[min(1.125rem,max(11px,calc(100cqw/25.5)))] font-medium text-white/90 @max-[18rem]:flex-col @max-[18rem]:items-start @max-[18rem]:gap-y-1 @max-[18rem]:text-sm">
            {heroFacts.map((fact, i) => (
              <span key={fact} className="flex items-center">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="mx-[0.6em] size-[max(3px,0.24em)] rounded-full bg-white/50 @max-[18rem]:hidden"
                  />
                )}
                {fact}
              </span>
            ))}
          </p>

          <div className="mt-[clamp(1.75rem,5.5vh,3.25rem)] flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-sm font-medium text-white/85 sm:text-base">Sponsored by</span>
            <div className="flex items-center gap-6 md:gap-7">
              <span className="font-['Libre_Caslon_Display',Georgia,serif] text-[1.6rem] leading-none tracking-[0.005em] text-white md:text-[1.85rem]">
                Apexr
              </span>
              <img
                src="/wud.png"
                alt="World University of Design"
                width={508}
                height={211}
                className="h-[30px] w-auto object-contain md:h-10"
              />
            </div>
          </div>

          <div className="mt-[clamp(1.75rem,5.5vh,3.25rem)]">
            <TrackTabs value={track} onChange={setTrack} />
          </div>
        </div>

        <HeroRegistrationForm track={track} onTrackChange={setTrack} />
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(138deg,#1f88e4_0%,#1b67ae_13%,#174d86_27%,#11294a_46%,#0b1424_64%,#0a0a0f_88%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_38%_at_0%_0%,rgb(33_135_230/0.35),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_82%_62%,rgb(12_70_78/0.55),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-[linear-gradient(to_top,rgb(11_16_28/0.85),rgb(11_16_28/0.3)_50%,transparent)]" />
    </div>
  );
}
