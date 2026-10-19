

import Navbar from "@/components/layout/Navbar";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const title = "Privacy Policy | Terms & Conditions";
const description =
  "Read the participation terms, privacy policy for Conquest by edept: Tech Olympiad 2026.";


export default function PrivacyPolicy() {

    useDocumentTitle(title, description);

  return (
    <>
    <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h2>
        <p className="text-base md:text-lg mb-8 leading-relaxed">
          edept is committed to protecting the privacy of individuals who visit
          our website or use our services. This Privacy Policy outlines the
          types of personal information we collect, how we use it, and with whom
          we may share it. By accessing our website or using our services, you
          consent to the collection, use, and disclosure of your personal
          information as described in this Privacy Policy.
        </p>

        {/* Information We Collect */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Information We Collect
          </h3>

          <h4 className="text-xl md:text-2xl font-semibold mb-2">1.1 Personal Information</h4>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>
              When you visit our website or use our services, we may collect
              personal information such as your name, email address, phone
              number, mailing address, and other contact details.
            </li>
            <li>
              We may also collect demographic information such as age, gender,
              educational background, and interests.
            </li>
          </ul>

          <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
            1.2 Usage Information
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            We may automatically collect information about your usage of our
            website and services, including your IP address, browser type,
            operating system, pages viewed, and referring website.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            How We Use Your Information
          </h3>

          <h4 className="text-xl md:text-2xl font-semibold mb-2">
            2.1 Provide and Improve Services
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            We use your personal information to provide, operate, and improve
            our website and services. This includes communicating with you,
            responding to your inquiries, and customizing your experience.
          </p>

          <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
            2.2 Marketing and Promotions
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            With your consent, we may use your contact information to send you
            promotional materials, newsletters, and updates via call/ email/ whatsapp/ sms/ rcs about our products
            and services. You can opt-out of receiving these communications at
            any time by following the unsubscribe instructions included in the
            emails.
          </p>

          <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
            2.3 Analytics and Research
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            We may use aggregated and anonymized data for analytics, research,
            and reporting purposes to understand trends and improve our
            services.
          </p>
        </section>

        {/* Sharing of Information */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Sharing of Information
          </h3>

          <h4 className="text-xl md:text-2xl font-semibold mb-2">
            3.1 Third-Party Service Providers
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            We may share your personal information with third-party service
            providers who assist us in operating our website, conducting our
            business, or providing services to you. These service providers are
            contractually obligated to use your information only for the
            purposes of providing the services requested by us.
          </p>

          <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
            3.2 Legal Requirements
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            We may disclose your personal information if required to do so by
            law or in response to a valid legal request, such as a court order
            or subpoena.
          </p>

          <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
            3.3 Business Transfers
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            In the event of a merger, acquisition, or sale of all or a portion
            of our assets, your personal information may be transferred as part
            of the transaction. We will notify you via email or a prominent
            notice on our website of any change in ownership or use of your
            personal information.
          </p>
        </section>

        {/* Your Choices */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Your Choices
          </h3>

          <h4 className="text-xl md:text-2xl font-semibold mb-2">4.1 Opt-Out</h4>
          <p className="text-sm md:text-base leading-relaxed">
            You may choose not to provide certain personal information, but this
            may limit your ability to use certain features of our website or
            services. You can opt-out of receiving marketing communications from
            us by following the instructions provided in the communications.
          </p>

          <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
            4.2 Access and Update
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            You may access, update, or delete your personal information by
            contacting us using the contact information provided below.
          </p>
        </section>

        {/* Security */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Security</h3>
          <p className="text-sm md:text-base leading-relaxed">
            We take reasonable measures to protect the security of your personal
            information and to prevent unauthorized access, use, or disclosure.
            However, no method of transmission over the internet or electronic
            storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>

        {/* Children’s Privacy */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Children’s Privacy
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Our website and services are not intended for children under the age
            of 13. We do not knowingly collect personal information from
            children under the age of 13. If you are a parent or guardian and
            believe that your child has provided us with personal information,
            please contact us using the contact information provided below.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Changes to this Privacy Policy
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            We reserve the right to update or change this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised Privacy Policy on our website. We encourage you to review
            this Privacy Policy periodically for any changes.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm md:text-base leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at{" "}
            <a
              href="mailto:admissions@edept.co"
              className="text-blue-600 underline"
            >
              admissions@edept.co
            </a>
            .
          </p>
        </section>

        <p className="mt-12 text-xs md:text-sm text-gray-600">
          Effective Date: 14th August 2023
        </p>
      </main>
    </>
  );
}
