import {  Fold, Mark, SectionTitle } from "@/components/ui/Fold";

const faqs = [
  {
    q: "Is Conquest really free?",
    a: "Yes. Registration and the online workshop are free. There is no fee at any stage.",
  },
  {
    q: "Do I need coding experience?",
    a: "No. The free online workshop on 21 November introduces the basics of your track.",
  },
  {
    q: "Is everything online?",
    a: "Yes. The workshop, Round 1 and the final all happen online, so you can take part from home. No travel needed.",
  },
  {
    q: "Can I enter more than one track?",
    a: "No. Choose one: Cybersecurity, AI or Finance. All three have the same cash prizes.",
  },
  {
    q: "What do I need to take part?",
    a: "A laptop or computer and a Wi-Fi connection.",
  },
];

export default function FAQSection() {
  return (
    <Fold id="faq" tone="white" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
        <div>
          <SectionTitle id="faq-title">
            Got
            <span className="mt-[0.18em] block"><Mark>questions?</Mark></span>
          </SectionTitle>
          <p className="mt-[clamp(0.75rem,2.5vh,1.25rem)] max-w-sm text-base leading-relaxed text-brand-blue/75 sm:text-lg">
            Everything students and parents ask before signing up.
          </p>
          <div className="mt-[clamp(1.25rem,4vh,2rem)] hidden lg:block">
            {/* <RegisterCta variant="blue" /> */}
          </div>
        </div>

        <div className="divide-y divide-brand-gray border-y border-brand-gray">
          {faqs.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[clamp(0.9rem,2.6vh,1.25rem)] text-left [&::-webkit-details-marker]:hidden">
                <span className="text-base font-bold sm:text-lg">{f.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-sky text-xl font-bold transition-transform group-open:rotate-45 group-open:bg-brand-orange"
                >
                  +
                </span>
              </summary>
              <p className="-mt-1 pb-5 pr-12 text-sm leading-6 text-brand-blue/75 sm:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Fold>
  );
}
