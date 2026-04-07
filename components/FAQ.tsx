const faqs = [
  {
    question: 'What is OneClick-Med?',
    answer:
      'OneClick-Med is a digital healthcare platform that connects patients, healthcare providers, and medical records through one secure, interoperable system.',
  },
  {
    question: 'Who can use OneClick-Med?',
    answer:
      'The platform is built for patients, hospitals, clinics, healthcare administrators, and care teams that need faster access to accurate health information.',
  },
  {
    question: 'What features does OneClick-Med offer?',
    answer:
      'OneClick-Med supports one-time patient registration, electronic health records, appointment booking, remote consultations, ambulance access, prescription reminders, hospital finder, symptom checks, and health tips.',
  },
  {
    question: 'How do healthcare providers get started?',
    answer:
      'Healthcare providers can contact the sales team to book a demo, complete a feasibility study, and receive implementation support, training, and customer support.',
  },
  {
    question: 'How do patients get started?',
    answer:
      'Patients can get started by downloading the mobile app, creating an account, and connecting to a hospital or healthcare provider on the platform.',
  },
  {
    question: 'How does OneClick-Med protect health data?',
    answer:
      'OneClick-Med is designed with secure access controls and privacy-focused workflows to help protect sensitive healthcare information across connected care teams.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-ice-blue px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[740px] text-left md:text-center">
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black">
            FAQ
          </p>
          <h2 className="mt-3 font-body text-[clamp(36px,4.6vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-black">
            Frequently Asked <b className="font-accent italic text-black">Questions</b>
          </h2>
          <p className="mt-5 font-body text-[17px] font-medium leading-[1.55] text-black/70">
            Quick answers about OneClick-Med, how it works, and how patients and providers can get started.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[18px] bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-brand-menu md:px-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-body text-[18px] font-extrabold leading-[1.35] text-black marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ice-blue text-[28px] font-light leading-none text-[#2a5fff] transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-[780px] font-body text-[16px] font-medium leading-[1.7] text-black/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
