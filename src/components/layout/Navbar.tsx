import { Link } from "react-router-dom";

/* Ad landing navbar: logo + one CTA. No outbound nav links to leak attention. */
export default function Navbar() {
  return (
    <header
      data-site-chrome
      className="sticky top-0 z-50 border-b border-brand-blue/10 bg-white/95 backdrop-blur-md"
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12"
      >
<Link
  to="/"
  className="flex items-center leading-none"
  aria-label="Conquest by edept home"
>
  <img
    src="/conquest-by-edept.svg"
    alt="Conquest by edept"
    className="md:h-12 h-8 w-auto object-contain"
  />
</Link>

        <a
          href="#hero-form"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-orange hover:text-brand-blue sm:px-5 sm:py-3"
        >
          Register free <span aria-hidden="true" className="hidden sm:inline">→</span>
        </a>
      </nav>
    </header>
  );
}
