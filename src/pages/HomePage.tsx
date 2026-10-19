import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useSiteChromeHeight } from "@/hooks/useSiteChromeHeight";

import Navbar from "@/components/layout/Navbar";
// import MobileRegisterBar from "@/components/layout/MobileRegisterBar";

import HeroSection from "@/components/sections/HeroSection";
import PrizesSection from "@/components/sections/PrizesSection";
import TracksSection from "@/components/sections/TracksSection";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import ScrollToTop from "@/components/ui/ScrollToTop";

/*
 * Single-page ad landing. Every section is one screen on desktop;
 * every CTA scrolls to the registration form in the hero.
 */
export default function HomePage() {
  useSiteChromeHeight();
  useDocumentTitle(
    "Conquest by edept · Tech Olympiad 2026",
    "A free, online competition for Class 11 and 12 students to explore Cybersecurity, AI and Finance."
  );

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PrizesSection />
        <TracksSection />
        <HowItWorks />
        <FAQSection />
        <FinalCTA />
        <ScrollToTop />
      </main>
      {/* <MobileRegisterBar /> */}
    </>
  );
}
