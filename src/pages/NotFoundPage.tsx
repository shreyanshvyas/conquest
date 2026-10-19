import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function NotFoundPage() {
  useDocumentTitle("Page not found | Conquest Tech Olympiad 2026");

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-mist px-4 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-brand-gray bg-white p-7 text-center shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue/65">
          404
        </p>
        <h1 className="mt-3 text-3xl font-display uppercase font-normal tracking-tight text-brand-blue sm:text-4xl">
          Page not found
        </h1>
        <Link
          to="/"
          className="mt-7 inline-block text-sm font-semibold text-brand-blue underline underline-offset-4"
        >
          Back to Conquest
        </Link>
      </section>
    </main>
  );
}
