import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { absoluteUrl, siteName } from '@/lib/seo'
import SupademoEmbed from '@/components/SupademoEmbed'
import Image from 'next/image'
import FAQ from '@/components/FAQ'


export const metadata: Metadata = {
  title: 'Digital Health',
  description:
    "Digital Health is OneClickMed's provider platform for unified patient profiles, secure data sharing, and AI-supported workflows.",
  keywords: [
    'Digital Health',
    'OneClickMed Digital Health',
    'healthcare provider platform',
    'EHR system',
    'secure health data sharing',
    'AI diagnostics platform',
  ],
  alternates: { canonical: '/digital-health' },
  openGraph: {
    title: `${siteName} Digital Health`,
    description:
      "Digital Health is OneClickMed's provider platform for unified patient profiles, secure data sharing, and AI-supported workflows.",
    url: '/digital-health',
    type: 'website',
    images: [
      {
        url: '/digital-health-1024x810.png',
        alt: 'Digital Health platform preview',
        // FIX: explicit OG image dimensions help crawlers and social platforms
        width: 1024,
        height: 810,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} Digital Health`,
    description:
      "Digital Health is OneClickMed's provider platform for unified patient profiles, secure data sharing, and AI-supported workflows.",
    images: ['/digital-health-1024x810.png'],
  },
}

const stats = [
  { value: '45%', label: 'Reduction in admin time' },
  { value: '80%', label: 'Faster data sharing' },
  { value: '72%', label: 'Fewer duplicate profiles' },
  { value: '55%', label: 'Fewer missed appointments' },
]

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 20V19C5 15.134 8.134 12 12 12C15.866 12 19 15.134 19 19V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    title: 'Unified Patient Profiles',
    description: 'One complete record per patient, accessible across every department and care touchpoint.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M20 17.6C21.5 17 23 15.7 23 13C23 9 19.7 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.3 8 1 9 1 13C1 15.7 2.5 17 4 17.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    title: 'Cloud-Based Record Access',
    description: 'Securely retrieve patient data from anywhere—clinic, ward, or remote consultation.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 12C14 9.5 11.7 7 8.9 7H7.1C4.3 7 2 9.2 2 12C2 14.4 3.7 16.4 6 16.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M10 12C10 14.5 12.3 17 15.1 17H16.9C19.7 17 22 14.8 22 12C22 9.6 20.3 7.6 18 7.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    title: 'Secure Data Interoperability',
    description: 'Share records safely between providers with fine-grained access controls and audit trails.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M11.5 3C11.5 3 12.8 6.7 14.5 8.5C16.3 10.2 20 11.5 20 11.5C20 11.5 16.3 12.8 14.5 14.5C12.8 16.3 11.5 20 11.5 20C11.5 20 10.2 16.3 8.5 14.5C6.7 12.8 3 11.5 3 11.5C3 11.5 6.7 10.2 8.5 8.5C10.2 6.7 11.5 3 11.5 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI-Assisted Clinical Workflows',
    description: 'Surface diagnostics insights, flag anomalies, and reduce cognitive load for care teams.',
  },
]

const steps = [
  { num: '01', title: 'Contact Sales & Book a Demo', desc: 'Speak to our team to understand fit and see the platform live.' },
  { num: '02', title: 'Feasibility Study & Implementation', desc: 'We assess your infrastructure and tailor the rollout to your organisation.' },
  { num: '03', title: 'Training & 24/7 Support', desc: 'Your team is onboarded with hands-on training and ongoing expert support.' },
]

const digitalHealthFaqs = [
  {
    question: 'Is the Digital Health EHR suitable for small clinics and large hospitals?',
    answer:
      'Yes. Our Digital Health EHR is designed to support healthcare facilities of all sizes, from small clinics to large hospitals and multi-branch systems.',
  },
  {
    question: 'Can the Digital Health EHR work without internet access?',
    answer:
      'Yes. The Digital Health EHR can be used offline and automatically syncs your data once internet access is restored.',
  },
  {
    question: 'How does the Digital Health EHR improve healthcare delivery?',
    answer:
      'By connecting patient records, departments, and care processes in one system, the Digital Health EHR helps reduce delays, improve coordination, and support better clinical decision-making.',
  },
  {
    question: 'Does the Digital Health EHR connect with the Beta Health App?',
    answer:
      'Yes. The Digital Health EHR integrates with the Beta Health App to support smooth interaction between healthcare providers and individuals, including record access and appointment management.',
  },
  {
    question: 'How do I get started with the Digital Health EHR?',
    answer:
      'You can get started by booking a demo with our team to explore features and find the right setup for your facility.',
  },
]

export default function DigitalHealthPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Digital Health',
    brand: { '@type': 'Brand', name: siteName },
    description: 'A provider-focused digital health platform for coordinated care, secure records, and operational efficiency.',
    image: absoluteUrl('/digital-health-1024x810.png'),
    category: 'Healthcare software',
    url: absoluteUrl('/digital-health'),
  }

  // FIX: Added HowTo schema — makes the 3-step onboarding section eligible
  // for rich results in Google Search (steps shown directly in SERP)
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get started with OneClickMed Digital Health',
    description: 'Three steps to onboard your organisation onto the Digital Health provider platform.',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* FIX: Second schema block for HowTo rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="mx-auto max-w-content px-6 pt-28 pb-20 md:px-10">
          <div className="grid lg:grid-cols-2 items-center">

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ice-blue px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-navy">
                For Providers
              </span>

              {/*
                FIX: H1 is now keyword-richer — targets "healthcare provider platform"
                and "digital health platform" while keeping the brand name prominent.
                Previously was just "Digital Health" which is too generic.
              */}
              <h1 className="mt-5 font-body text-[clamp(38px,5.2vw,68px)] font-extrabold leading-[1.02] text-black">
                Digital{' '}
                <b className="font-accent italic text-navy">Health EHR</b>
                {' '}Platform
              </h1>

              <p className="mt-5 max-w-[560px] text-lg leading-[1.7] text-black/65">
                A comprehensive provider platform built to centralise records, reduce operational friction,
                and improve patient outcomes through connected care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[8px] bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-cobalt"
                >
                  Book a Demo
                </a>

                <a
                  href="#interactive-demo"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-navy/20 bg-white px-6 py-3 text-sm font-bold text-navy transition-all hover:-translate-y-px hover:bg-ice-blue"
                >
                  See it in action ↓
                </a>
              </div>
            </div>


            <div className="relative mt-10 lg:mt-0">
              {/* Subtle background rings */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="absolute aspect-square w-[clamp(240px,58vw,420px)] rounded-full border border-navy/10" />
                <div className="absolute aspect-square w-[clamp(300px,72vw,540px)] rounded-full border border-navy/5" />
                <div className="absolute aspect-square w-[clamp(360px,86vw,660px)] rounded-full border border-navy/5" />
              </div>

              {/* Floating cards */}
              <div className="absolute left-[-10px] top-[80px] hidden md:block rounded-[14px] border border-black/5 bg-light-yellow px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                  Patient Records
                </p>
                <p className="text-sm font-bold text-black">Unified profiles</p>
              </div>

              <div className="absolute right-[0px] top-[20px] hidden md:block rounded-[14px] border border-black/5 bg-ice-blue px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                  Workflow
                </p>
                <p className="text-sm font-bold text-black">Less admin time</p>
              </div>

              <div className="absolute right-[-80px] bottom-[-20px] hidden md:block rounded-[14px] border border-black/5 bg-[#EAF7EE] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                  Connected Care
                </p>
                <p className="text-sm font-bold text-black">Secure data sharing</p>
              </div>

              {/* Main image */}
              <div className="relative z-10 rounded-[24px] p-4">
           
                <Image
  src="/hero_doctors.png"
  alt="Digital Health provider platform showing unified patient profiles and clinical workflows"
  width={600}
  height={450}
  quality={70}
  preload
  fetchPriority='high'
  className="w-full rounded-[14px]"
/>
              </div>
            </div>

          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-navy px-6 py-10 md:px-10">
          <div className="mx-auto max-w-content grid grid-cols-2 gap-px md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col items-center gap-1 px-6 py-6 text-center">
                <span className="font-accent text-[clamp(36px,5vw,54px)] font-extrabold leading-none text-light-yellow">
                  {s.value}
                </span>
                {/*
                  FIX: Bumped from text-white/60 to text-white/70 for better contrast ratio.
                  white/60 on navy often falls below the 4.5:1 WCAG AA threshold for small text.
                */}
                <span className="text-[13px] font-medium text-white/70">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-6 md:px-10 min-h-[750px] flex items-center">
          <div className="w-full py-20 md:py-28">

            <div className="mb-12">
              {/*
                FIX: Changed from <p> to <span> — this was a decorative label sitting
                above an <h2>, so it shouldn't be a block-level paragraph that implies
                it's a peer of the heading. Using a <span> with display:block avoids
                creating a misleading document outline.
              */}
              <span className="block text-[13px] font-bold uppercase tracking-[0.1em] text-black/40">
                Platform capabilities
              </span>
              <h2 className="mt-3 font-body text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.05] text-black">
                Everything your team needs,<br className="hidden md:block" />
                <b className="font-accent italic"> in one place</b>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`rounded-[20px] p-7 flex flex-col gap-4 ${i === 0 ? 'bg-navy text-white' :
                      i === 1 ? 'bg-light-yellow text-black' :
                        i === 2 ? 'bg-ice-blue text-black' :
                          'bg-beige text-black'
                    }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${i === 0 ? 'bg-white/10 text-white' :
                      i === 1 ? 'bg-black/10 text-navy' :
                        'bg-navy/10 text-navy'
                    }`}>
                    {f.icon}
                  </div>

                  <div>
                    <h3 className={`font-body text-[16px] font-extrabold leading-[1.2] mb-2 ${i === 0 ? 'text-white' : 'text-black'}`}>
                      {f.title}
                    </h3>
                    {/*
                      FIX: Bumped from text-white/70 → text-white/80 on navy card (i===0)
                      to improve contrast. /70 white on navy is borderline failing.
                    */}
                    <p className={`text-[14px] leading-[1.6] ${i === 0 ? 'text-white/80' : 'text-black/60'}`}>
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── INTERACTIVE DEMO ── */}
        <section id="interactive-demo" className="bg-ice-blue px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-content">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="block text-[13px] font-bold uppercase tracking-[0.1em] text-black/40">Try it yourself</span>
                <h2 className="mt-3 font-body text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.05] text-black">
                  Interactive <b className="font-accent italic">Demo</b>
                </h2>
                <p className="mt-3 max-w-[520px] text-[15px] leading-[1.65] text-black/60">
                  Walk through real provider workflows—from patient onboarding to clinical data access—without signing up.
                </p>
              </div>
            </div>
            <div className="max-w-content mx-auto rounded-[20px] border border-navy/10  p-0 shadow-sm">
            
              <SupademoEmbed demoId="cmo0a8tzk0fpm8v9xkn506tbn" title="Digital Health Product Demo" />
              </div>
            
          </div>
        </section>


        {/* ── HOW TO GET STARTED ── */}
        <section className="bg-navy px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-content">
            <div className="mb-14">
              <span className="block text-[13px] font-bold uppercase tracking-[0.1em] text-white/60">Onboarding</span>
              <h2 className="mt-3 font-body text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.05] text-white">
                Getting started is <b className="font-accent italic text-light-yellow">simple</b>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex flex-col gap-5 rounded-[20px] border border-white/10 bg-white/5 p-7"
                >
                  <span className="font-accent text-[42px] font-extrabold leading-none text-light-yellow/30">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-body text-[16px] font-extrabold text-white mb-2">{step.title}</h3>
                    {/* FIX: Bumped from text-white/55 → text-white/70 for WCAG AA compliance */}
                    <p className="text-[14px] leading-[1.65] text-white/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] bg-salmon-red px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-salmon-red/90"
              >
                Contact Sales Team →
              </a>
              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/20 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Explore the demo first
              </a>
            </div>
          </div>
        </section>

        <FAQ
          sectionId="faq-digital-health"
          eyebrow="FAQ"
          title={
            <>
              FAQ  - <b className="font-accent italic text-black">Digital Health EHR</b>
            </>
          }
          description="Answers to common questions about Digital Health EHR and how it supports healthcare facilities."
          faqs={digitalHealthFaqs}
        />

        {/* ── CTA ── */}
        <section className="mx-auto max-w-content px-6 py-20 md:px-10">
          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-bl-[10px] rounded-br-[120px] rounded-tl-[120px] rounded-tr-[10px] bg-salmon-red px-6 py-16 text-center md:min-h-[420px] md:rounded-br-[200px] md:rounded-tl-[200px] md:px-16">
            <div className="relative z-10 mx-auto max-w-[700px]">
              {/* FIX: Bumped from text-white/70 → text-white/80 */}
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                Ready to transform your operations?
              </p>
              <h2 className="font-body text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] text-white">
                Start with <b className="text-light-yellow">Digital Health</b> today
              </h2>
              {/* FIX: Bumped from text-white/75 → text-white/85 */}
              <p className="mx-auto mt-5 max-w-[520px] text-[15px] font-medium leading-[1.65] text-white/85">
                Join hospitals and clinics already using OneClickMed to deliver faster, smarter, more connected care.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-[8px] bg-white px-7 py-3 text-sm font-bold text-navy transition-all hover:-translate-y-px hover:bg-ice-blue"
                >
                  Book a Demo
                </a>
                <a
                  href="#interactive-demo"
                  className="inline-flex items-center gap-2 rounded-[8px] border border-white/30 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  Try the interactive demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
