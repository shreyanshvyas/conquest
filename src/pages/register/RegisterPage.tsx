

import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

type Registration = {
  studentName: string;
  studentClass: string;
  stream: string;
  track: string;
  schoolCity: string;
  studentWhatsApp: string;
  parentNamePhone: string;
  email: string;
  consent: boolean;
  apexrOptIn: boolean;
};

const initialForm: Registration = {
  studentName: "",
  studentClass: "",
  stream: "",
  track: "",
  schoolCity: "",
  studentWhatsApp: "",
  parentNamePhone: "",
  email: "",
  consent: false,
  apexrOptIn: false,
};

const inputClass =
  "mt-2 w-full rounded-xl border border-brand-gray bg-white px-4 py-3 text-sm text-brand-blue outline-none transition placeholder:text-brand-blue/40 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10";

const labelClass = "block text-sm font-semibold text-brand-blue";

export default function RegisterPage() {
  useDocumentTitle(
    "Register | Conquest Tech Olympiad 2026",
    "Register free for Conquest by edept: Tech Olympiad 2026."
  );
  const [form, setForm] = useState<Registration>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function updateField(
    field: keyof Registration,
    value: string | boolean
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.consent) {
      setError("Please accept the consent statement to continue.");
      return;
    }

    const email = form.email.trim();
    const phoneDigits = form.studentWhatsApp.replace(/\D/g, "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setError("Please enter a valid student WhatsApp number.");
      return;
    }
    navigate("/register/success");
  }

  if (submitted) {
    const shareMessage = encodeURIComponent(
      "I'm registering for Conquest by edept: Tech Olympiad 2026! It's free for Class 11 and 12 students. Check it out and register too."
    );

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
            You’re almost there!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-brand-blue/75">
            This is a preview of the thank-you screen.
          </p>

          <div className="mt-7 rounded-2xl bg-brand-mist p-5 text-left">
            <h2 className="font-bold text-brand-blue">
              Invite a friend
            </h2>
            <p className="mt-2 text-sm leading-6 text-brand-blue/75">
              Know someone in Class 11 or 12? Share Conquest with them.
            </p>

            <a
              href={`https://wa.me/?text=${shareMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-blue/90"
            >
              Share with a friend on WhatsApp
            </a>
          </div>

          {form.apexrOptIn && (
            <div className="mt-4 rounded-2xl border border-brand-orange bg-brand-orange/10 p-5 text-left">
              <h2 className="font-bold text-brand-blue">
                Parent university guidance
              </h2>
              <p className="mt-2 text-sm leading-6 text-brand-blue/85">
                You selected the optional Apexr guidance-session update.
                The session details and contact-sharing process still need
                to be configured before registration goes live.
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="mt-7 text-sm font-semibold text-brand-blue underline underline-offset-4"
          >
            Back to registration form
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-mist px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
        >
          <span aria-hidden="true">←</span> Back to Conquest
        </Link>

        <header className="py-8 text-center sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue/65">
            Conquest by edept · Tech Olympiad 2026
          </p>

          <h1 className="mt-4 text-3xl font-display uppercase font-normal tracking-tight text-brand-blue sm:text-5xl">
            Your next challenge starts here.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-brand-blue/75 sm:text-base">
            Register individually, choose your track, and explore
            Cybersecurity, AI or Finance. Registration is free.
          </p>

          <div className="mt-5 inline-flex rounded-full bg-brand-orange px-4 py-2 text-sm font-bold text-brand-blue">
            FREE ENTRY · CLASS 11 & 12
          </div>
        </header>

        <section className="rounded-3xl border border-brand-gray bg-white p-5 shadow-sm sm:p-9">
          <div className="mb-7 flex items-center justify-between gap-4 border-b border-brand-gray pb-5">
            <div>
              <h2 className="text-xl font-extrabold text-brand-blue">
                Student registration
              </h2>
              <p className="mt-1 text-sm text-brand-blue/65">
                Complete all 8 fields.
              </p>
            </div>

            <span className="shrink-0 rounded-lg bg-brand-gray px-3 py-2 text-xs font-bold text-brand-blue/75">
              SOLO ENTRY
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="studentName" className={labelClass}>
                  1. Student name *
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Enter full name"
                  value={form.studentName}
                  onChange={(e) => updateField("studentName", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="studentClass" className={labelClass}>
                  2. Class *
                </label>
                <select
                  id="studentClass"
                  name="studentClass"
                  className={inputClass}
                  value={form.studentClass}
                  onChange={(e) => updateField("studentClass", e.target.value)}
                  required
                >
                  <option value="">Select class</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div>
                <label htmlFor="stream" className={labelClass}>
                  3. Stream *
                </label>
                <select
                  id="stream"
                  name="stream"
                  className={inputClass}
                  value={form.stream}
                  onChange={(e) => updateField("stream", e.target.value)}
                  required
                >
                  <option value="">Select stream</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </div>

              <div>
                <label htmlFor="track" className={labelClass}>
                  4. Choose your track *
                </label>
                <select
                  id="track"
                  name="track"
                  className={inputClass}
                  value={form.track}
                  onChange={(e) => updateField("track", e.target.value)}
                  required
                >
                  <option value="">Select a track</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="AI">Artificial Intelligence (AI)</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div>
                <label htmlFor="schoolCity" className={labelClass}>
                  5. School and city *
                </label>
                <input
                  id="schoolCity"
                  name="schoolCity"
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="School name, city"
                  value={form.schoolCity}
                  onChange={(e) => updateField("schoolCity", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="studentWhatsApp" className={labelClass}>
                  6. Student WhatsApp number *
                </label>
                <input
                  id="studentWhatsApp"
                  name="studentWhatsApp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="Include country code if needed"
                  value={form.studentWhatsApp}
                  onChange={(e) =>
                    updateField("studentWhatsApp", e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="parentNamePhone" className={labelClass}>
                  7. Parent’s name and phone *
                </label>
                <input
                  id="parentNamePhone"
                  name="parentNamePhone"
                  autoComplete="off"
                  className={inputClass}
                  placeholder="Parent name and phone number"
                  value={form.parentNamePhone}
                  onChange={(e) =>
                    updateField("parentNamePhone", e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  8. Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-4 border-t border-brand-gray pt-6">
              <label className="flex items-start gap-3 text-sm leading-6 text-brand-blue/75">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={(e) => updateField("consent", e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-brand-blue"
                  required
                />
                <span>
                  I am a parent/guardian, or have my parent&apos;s permission,
                  and agree to the{" "}
                  <Link
                    to="/terms"
                    target="_blank"
                    className="font-semibold text-brand-blue underline"
                  >
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    target="_blank"
                    className="font-semibold text-brand-blue underline"
                  >
                    privacy policy
                  </Link>
                  . *
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-xl bg-brand-mist p-4 text-sm leading-6 text-brand-blue/75">
                <input
                  type="checkbox"
                  name="apexrOptIn"
                  checked={form.apexrOptIn}
                  onChange={(e) => updateField("apexrOptIn", e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-brand-blue"
                />
                <span>
                  Send my parent details of the free Apexr university guidance
                  session.
                  <span className="mt-1 block text-xs text-brand-blue/65">
                    Optional. Leave unticked if you do not want this update.
                  </span>
                </span>
              </label>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl bg-brand-red/10 p-3 text-sm font-medium text-brand-red"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-blue px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-blue/90 focus:outline-none focus:ring-4 focus:ring-brand-blue/20"
            >
              Register free <span aria-hidden="true">→</span>
            </button>

            <p className="text-center text-xs leading-5 text-brand-blue/65">
              Free entry. Individual registration only. Your name will not be
              published in a public registration list.
            </p> 
          </form>
        </section>

        <footer className="py-8 text-center text-xs text-brand-blue/65">
          © 2026 edept · Conquest Tech Olympiad
        </footer>
      </div>
    </main>
  );
}
