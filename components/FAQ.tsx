'use client'

import posthog from 'posthog-js'
import type { ReactNode } from 'react'

export type FAQItem = {
  question: string
  answer: string
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'What is OneClickMed?',
    answer:
      'OneClickMed is a healthcare technology company developing digital tools that support healthcare providers and help individuals manage their health.',
  },
  {
    question: 'What are OneClickMed’s products?',
    answer:
      'We build two main digital health solutions: The Digital Health EHR and the Beta Health App.',
  },
  {
    question: 'Who are OneClickMed’s products designed for?',
    answer:
      'The Digital Health EHR is designed for healthcare providers such as hospitals, clinics, pharmacies, and medical practices, while the Beta Health App is designed for individuals managing their personal health.',
  },
  {
    question: 'What features does the Digital Health EHR have?',
    answer:
      'The Digital Health EHR supports full hospital operations, including patient records, appointments, clinical workflows, billing, insurance, inventory, departmental modules, and connected care through the Beta Health App.',
  },
  {
    question: 'What features does the Beta Health App have?',
    answer:
      'The Beta Health App includes emergency access, health records management, symptom checking, teleconsultation, hospital finder, prescription reminders, health tips, and AI-powered health support.',
  },
  {
    question: 'How does OneClick-Med protect health data?',
    answer:
      'Our tools are designed with secure access controls and privacy-focused workflows to help protect sensitive healthcare information across connected care teams.',
  },
]

type FAQProps = {
  sectionId?: string
  eyebrow?: string
  title?: ReactNode
  description?: string
  faqs?: FAQItem[]
  className?: string
}

export default function FAQ({
  sectionId = 'faq',
  eyebrow = 'FAQ',
  title = (
    <>
      Frequently Asked <b className="font-accent italic text-black">Questions</b>
    </>
  ),
  description = 'Quick answers about OneClickMed, how it works, and how patients and providers can get started.',
  faqs = defaultFaqs,
  className = 'bg-ice-blue px-6 py-20 md:px-10 md:py-24',
}: FAQProps) {
  return (
    <section id={sectionId} className={className}>
      <div className="mx-auto max-w-[980px]">
        <div className="mx-auto max-w-[740px] text-left md:text-center">
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-body text-[clamp(36px,4.6vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-black">
            {title}
          </h2>
          <p className="mt-5 font-body text-[17px] font-medium leading-[1.55] text-black/70">
            {description}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[18px] bg-white px-6 py-5 shadow-sm transition-all duration-300 open:shadow-brand-menu md:px-8"
              onToggle={(e) => {
                if ((e.currentTarget as HTMLDetailsElement).open) {
                  posthog.capture('faq_expanded', { question: faq.question, section: sectionId })
                }
              }}
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
