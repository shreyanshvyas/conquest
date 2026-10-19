
import { Link } from "react-router-dom";

import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const title = "Privacy Policy | Conquest Tech Olympiad 2026";
const description =
  "Learn how Conquest by edept handles student and parent information during registration.";

export default function PrivacyPage() {
  useDocumentTitle(title, description);

  return (
    <main className="min-h-screen bg-brand-mist px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <Link
          to="/"
          className="text-sm font-bold text-brand-blue hover:underline"
        >
          ← Back to Conquest
        </Link>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue/65">
          Conquest by edept · Tech Olympiad 2026
        </p>

        <h1 className="mt-3 text-3xl font-display uppercase font-normal text-brand-blue sm:text-4xl">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-brand-blue/65">
          Last updated: 11 October 2026
        </p>

        <div className="mt-8 space-y-7 text-sm leading-7 text-brand-blue/85">
          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              1. Introduction
            </h2>
            <p className="mt-2">
              This policy explains how edept handles information submitted
              through the Conquest by edept: Tech Olympiad 2026 website and
              registration form. It is intended for students, parents and
              guardians visiting or registering for the event.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              2. Information we collect
            </h2>
            <p className="mt-2">
              The registration form is designed to collect the student's
              name, class, stream, selected track, school and city, student
              WhatsApp number, parent's name and phone number, and email
              address. It also records the required consent and whether the
              optional Apexr guidance-session box is selected.
            </p>
            <p className="mt-2">
              Please do not submit passwords, government identification
              numbers, payment details or other information that the form
              does not request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              3. How information may be used
            </h2>
            <p className="mt-2">
              Subject to the final event arrangements, information may be used
              to administer registration, communicate event updates, confirm
              eligibility, coordinate participation, and provide relevant
              event-related information.
            </p>
            <p className="mt-2">
              The final purposes, retention periods and operational processes
              must be confirmed by the event organiser before the form goes
              live.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              4. Optional Apexr guidance-session consent
            </h2>
            <p className="mt-2">
              The Apexr checkbox is optional and is not selected by default.
              Leaving it unchecked should not prevent event registration.
            </p>
            <p className="mt-2">
              If the parent or guardian opts in, the intended purpose is to
              share the parent's contact details for the free Apexr university
              guidance session. Those details must not be shared with Apexr
              unless the applicable consent and legal requirements have been
              satisfied.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              5. Sharing and service providers
            </h2>
            <p className="mt-2">
              Information may need to be handled by authorised service
              providers supporting registration and event delivery. The
              organiser must identify the actual providers, their roles and
              any other recipients before launch.
            </p>
            <p className="mt-2">
              Student registration details must not be published in a public
              list. Information must not be shared with event sponsors or
              partners for their own purposes without an appropriate lawful
              basis and any required consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              6. Security and retention
            </h2>
            <p className="mt-2">
              The organiser should use appropriate access controls and
              security measures to protect personal information, restrict
              access to authorised personnel, and retain information only
              for an appropriate period.
            </p>
            <p className="mt-2">
              The final retention schedule, deletion process and technical
              safeguards must be confirmed before registrations are accepted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              7. Students under 18
            </h2>
            <p className="mt-2">
              Conquest is intended for Class 11 and 12 students, some of whom
              may be under 18. Parent or guardian involvement, consent and
              other safeguards must be implemented as required by applicable
              law before collecting or processing a minor's information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              8. Your choices and requests
            </h2>
            <p className="mt-2">
              You may request information about, correction of, or deletion
              of personal data where applicable. A verified contact channel
              for privacy requests must be added here before publication.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-blue">
              9. Changes to this policy
            </h2>
            <p className="mt-2">
              This policy may be updated to reflect confirmed event
              arrangements or legal requirements. The published version
              should display its effective date.
            </p>
          </section>

          <section className="rounded-2xl bg-brand-orange/10 p-5">
            <h2 className="font-bold text-brand-blue">
              Contact about privacy
            </h2>
            <p className="mt-2">
              Add the official edept privacy contact email here before
              publishing this policy.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-brand-gray pt-6">
          <Link
            to="/terms"
            className="font-semibold text-brand-blue underline"
          >
            Read Terms & Conditions →
          </Link>
        </div>
      </article>
    </main>
  );
}
