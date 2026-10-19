
// import { Link } from "react-router-dom";

import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const title = "Registration | Conquest Tech Olympiad 2026";
const description =
  "Thank you for your interest in Conquest by edept.";

export default function RegistrationSuccessPage() {
  useDocumentTitle(title, description);



  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-mist px-4 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-brand-gray bg-white p-7 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-3xl">
          ✓
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue/65">
          Conquest by edept · Tech Olympiad 2026
        </p>

        <h1 className="mt-3 text-3xl font-display uppercase font-normal tracking-tight text-brand-blue sm:text-4xl">
          Thank you!
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-brand-blue/75">
          Your registration has been received successfully. Get ready to explore Cybersecurity, Artificial Intelligence, and Finance, and put your skills to the test.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-brand-blue/75">
          Further details and updates will be shared with you shortly.
        </p>
      </section>
    </main>
  );
}
