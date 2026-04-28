import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DownloadButtons from '@/components/DownloadButtons'
import BetaTotalCareCards from '@/components/BetaTotalCareCards'
import { absoluteUrl, siteName } from '@/lib/seo'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Beta Health',
  description:
    'Beta Health is your digital health passport from OneClickMed. Carry records, access AI guidance, and get emergency support in one secure app.',
  keywords: [
    'Beta Health',
    'OneClickMed Beta Health',
    'digital health passport',
    'patient app',
    'MediVault',
    'emergency healthcare app',
    'connected healthcare',
  ],
  alternates: {
    canonical: '/beta-health',
  },
  openGraph: {
    title: `${siteName} Beta Health`,
    description:
      'Your digital health passport for records, AI support, and emergency care in one app.',
    url: '/beta-health',
    type: 'website',
    images: [{ url: '/beta-health-894x1024.png', alt: 'Beta Health app preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} Beta Health`,
    description:
      'Your digital health passport for records, AI support, and emergency care in one app.',
    images: ['/beta-health-894x1024.png'],
  },
}

const trustItems = [
  { icon: '🔒', label: 'End-to-end encrypted' },
  { icon: '💳', label: 'Free to download' },
  { icon: '📡', label: 'Works offline' },
  { icon: '📱', label: 'iOS + Android' },
]

const statCards = [
  {
    value: '1x',
    title: 'enter your health data once',
    copy: 'Create your profile once and never fill the same forms again — your information follows you everywhere.',
    className: 'rounded-[14px] bg-navy text-white',
  },
  {
    value: 'Instant',
    title: 'share records across hospitals',
    copy: 'Securely send your medical history to any provider in seconds — no delays, no back-and-forth.',
    className: 'rounded-[14px] bg-ice-blue text-navy',
  },
  {
    value: '0',
    title: 'paper records to carry',
    copy: 'Everything is stored digitally and securely, so you never have to carry or lose physical files.',
    className: 'rounded-[14px] bg-light-yellow text-navy',
  },
  {
    value: '0',
    title: 'repeated tests or scans',
    copy: 'Avoid unnecessary tests — doctors can access your previous results instantly.',
    className: 'rounded-[14px] bg-navy text-white',
  },
  {
    value: 'Full',
    title: 'control over your data',
    copy: 'Decide who can access your records and revoke permissions anytime, with complete transparency.',
    className: 'rounded-[14px] bg-ice-blue text-navy',
  },
  {
    value: 'Instant',
    title: 'emergency access when it matters',
    copy: 'Share your location and critical medical information in seconds — even if you can’t speak for yourself.',
    className: 'rounded-[14px] bg-light-yellow text-navy',
  },
  {
    value: '24/7',
    title: 'access to your records',
    copy: 'Your health information is always available — anytime, anywhere, from your phone.',
    className: 'rounded-[14px] bg-navy text-white',
  },
  {
    value: 'Seamless',
    title: 'care across multiple hospitals',
    copy: 'Move between providers without losing your history, ensuring consistent and informed treatment.',
    className: 'rounded-[14px] bg-ice-blue text-navy',
  },
  {
    value: 'Faster',
    title: 'treatment with full context',
    copy: 'Doctors see your history before treatment begins, reducing delays and improving care decisions.',
    className: 'rounded-[14px] bg-light-yellow text-navy',
  },
]

const peopleSlides = [
  {
    image: '/Interoperability%20(1).png',
    alt: 'Interoperability in healthcare',
    title: 'Amaka, 34 — Lagos',
    copy: 'Shared her records with 3 different hospitals last year — without repeating a single form.',
  },
  {
    image: '/Optimize%20822x640.png',
    alt: 'Optimized healthcare support',
    title: 'Dr. Emeka — Abuja',
    copy: 'Gets complete patient histories on arrival so care starts immediately, not after paperwork.',
  },
  {
    image: '/Empower%20Image.png',
    alt: 'Empowered emergency response',
    title: 'The Adeyemi Family — Ibadan',
    copy: 'Manages health records for multiple family members in one secure place.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Download the App',
    description: 'Install Beta Health and open your account in minutes.',
  },
  {
    step: '02',
    title: 'One-Time Registration',
    description: 'Create your secure profile once and stop repeating forms at every visit.',
  },
  {
    step: '03',
    title: 'Connect to a Hospital',
    description: 'Link your account to partnered facilities for smooth records access.',
  },
  {
    step: '04',
    title: 'Take Control of Your Health',
    description: 'Use records, AI support, reminders, and emergency tools in one place.',
  },
]

const perks = [
  'End-to-end encrypted with biometric unlock',
  'Works offline when connectivity is limited',
  'Accepted at partnered hospitals nationwide',
  'Family accounts for premium users',
]

const betaHealthFaqs = [
  {
    question: 'Can I connect my hospital or clinic through the Beta Health App?',
    answer:
      'Yes. The Beta Health App allows individuals to connect with healthcare providers and facilities for better access to care and health management.',
  },
  {
    question: 'Can I find hospitals and clinics on the Beta Health App?',
    answer:
      'Yes. The Beta Health App helps you discover and connect with healthcare facilities based on your needs and location.',
  },
  {
    question: 'Can I access emergency support on the Beta Health App?',
    answer:
      'Yes. The Beta Health App provides access to emergency care features to help you reach support when you need it most.',
  },
  {
    question: 'Does the Beta Health App have AI support for health questions?',
    answer:
      'Yes. The app includes an AI-powered assistant designed to help answer general health-related questions and guide users.',
  },
  {
    question: 'Can I book teleconsultations on the Beta Health App?',
    answer:
      'Yes. Users can access teleconsultation services to connect with healthcare professionals remotely.',
  },
]

export default function BetaHealthPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Beta Health',
    brand: {
      '@type': 'Brand',
      name: siteName,
    },
    description:
      'A patient-facing digital health passport that combines secure records, AI assistance, and emergency workflows.',
    image: absoluteUrl('/beta-health-894x1024.png'),
    category: 'Health application',
    url: absoluteUrl('/beta-health'),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Header />

      <main className="min-h-screen bg-white pt-24">
        <section className="px-6 pb-14 pt-2 md:px-10 md:pb-16 md:pt-16">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1fr_1fr] xl:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-ice-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-cobalt">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
                Now live
              </p>
              <h1 className="mt-5 font-body text-[clamp(38px,5.2vw,68px)] font-extrabold leading-[1.02] text-navy">
                Your Health.<br />
                <b className="font-accent">Always With You.</b>
              </h1>
              <p className="mt-5 max-w-[560px] text-[17px] font-medium leading-[1.7] text-black/65">
                Beta Health is your digital health passport. Keep your complete medical history, AI-powered
                guidance, and emergency tools in one secure app.
              </p>

              <div className="mt-8">
                <DownloadButtons mode="store_badges" />
              </div>

              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-black/50">
                <span className="inline-block h-3 w-3 rounded-full border border-navy/40" aria-hidden="true" />
                Encrypted, private, and free to download
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:justify-self-end">
              <div className="absolute left-0 top-8 z-10 rounded-[12px] bg-white px-4 py-3 shadow-brand-menu">
                <p className="font-accent text-2xl text-navy">78%</p>
                <p className="mt-1 max-w-[110px] text-[11px] font-semibold leading-[1.3] text-black/50">Health score this month</p>
              </div>

              <div className="absolute -bottom-2 left-3 z-10 rounded-[12px] bg-light-yellow px-4 py-3 shadow-brand-menu">
                <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-black/60">Emergency</p>
                <p className="text-sm font-bold text-navy">Support in 8 min</p>
              </div>

              <div className="relative mx-auto h-[560px] w-[300px] overflow-hidden rounded-[36px] bg-navy shadow-[0_40px_80px_rgba(1,36,170,0.25)]">
                <div className="flex h-full flex-col gap-3 px-5 pb-4 pt-6">
                  <div className="flex items-center justify-between text-[10px] font-semibold text-white/45">
                    <span>9:41</span>
                    <span>...</span>
                  </div>

                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/45">Good morning,</p>
                      <p className="text-lg font-bold text-white">Adaobi</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt text-sm font-extrabold text-white">
                      A
                    </div>
                  </div>

                  <div className="rounded-[18px] bg-cobalt p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/65">Health Score</p>
                    <p className="mt-1 font-accent text-[42px] leading-none text-white">78</p>
                    <p className="mt-1 text-[11px] text-white/65">Up from last month</p>
                    <div className="mt-3 h-1 rounded-full bg-white/20">
                      <div className="h-full w-[78%] rounded-full bg-light-yellow" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {['Medications', 'Ask AI', 'Emergency', 'Records'].map((item) => (
                      <div key={item} className="rounded-[12px] bg-white/10 px-3 py-3">
                        <p className="text-[11px] font-semibold text-white/85">{item}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white/40">Recent Records</p>
                  <div className="flex items-center justify-between rounded-[12px] bg-white/10 px-3 py-3">
                    <div>
                      <p className="text-xs font-semibold text-white/90">Blood Test Results</p>
                      <p className="text-[10px] text-white/45">Mar 28</p>
                    </div>
                    <span className="rounded-full bg-light-yellow/20 px-2 py-0.5 text-[10px] font-semibold text-light-yellow">
                      New
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



<section className="px-6 py-10 md:px-10 md:py-14">
  <div className="mx-auto max-w-content">
    <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
      {/* Sticky left column */}
      <div className="grid gap-6 lg:sticky lg:top-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-salmon-red">
            For Real People
          </p>
          <h2 className="mt-4 font-body text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.06] text-black">
            Healthcare that moves
            <br />
            as fast as <b className="font-accent">you do.</b>
          </h2>
        </div>

        <div>
          <p className="text-lg font-medium leading-[1.6] text-black/75">
            From a routine check-up to a midnight emergency, Beta Health keeps your
            records, identity, and care tools connected so every healthcare moment is
            faster and safer.
          </p>
        </div>

        <div className="overflow-hidden rounded-[20px] rounded-br-[100px] md:rounded-br-[140px]">
<div className="overflow-hidden rounded-[20px] rounded-br-[100px] md:rounded-br-[140px]">
  <div className="people-carousel">
    <div className="people-carousel-track">
      {peopleSlides.map((slide) => (
        <div
          key={slide.image}
          className="people-slide relative h-[280px] overflow-hidden rounded-[20px] rounded-br-[100px] md:h-[380px] md:rounded-br-[140px]"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            quality={70}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 380px"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:px-7 md:pb-7">
            <div className="max-w-[78%] md:max-w-[72%]">
              <p className="text-[clamp(18px,1.5vw,24px)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
                {slide.title}
              </p>
              <p className="mt-2 text-[clamp(13px,0.95vw,15px)] font-medium leading-[1.45] text-white">
                {slide.copy}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Stacking cards column */}
      <div className="relative grid gap-5">
        {statCards.map((card, index) => (
          <article
            key={card.value}
            className={`min-h-[260px] rounded-[28px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:p-10 xl:sticky xl:top-[var(--stack-top)] ${card.className}`}
            style={{ '--stack-top': `calc(50vh - 150px + ${index * 18}px)` } as React.CSSProperties}
          >
            <p className=" text-lg leading-none md:text-xl">
              {card.value}
            </p>

            <h3 className="mt-3 max-w-[360px] text-[30px] font-bold leading-[1.15] tracking-[-0.02em] md:text-4xl">
              {card.title}
            </h3>

            <p className="mt-4 max-w-[460px] text-base font-medium leading-[1.6] md:text-lg md:leading-[1.65]">
              {card.copy}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

        <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute -left-24 top-6 h-52 w-52 rounded-full bg-cobalt/10" />
          <div className="pointer-events-none absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-salmon-red/10" />

          <div className="relative mx-auto max-w-content">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-black/45">Everything you need</p>
            <h2 className="mt-3 font-body text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.03] text-black">
              One Click <b className="font-accent">Total Care</b>
            </h2>

            <BetaTotalCareCards />
          </div>
        </section>

        <section className="bg-salmon-red px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-content">
            <div className="grid items-end gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/65">Getting started</p>
                <h2 className="mt-3 font-body text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.03] text-white">
                  Up and running<br />
                  <b className="font-accent">in minutes.</b>
                </h2>
              </div>
              <p className="text-[17px] font-medium leading-[1.6] text-white/80">
                Beta Health is simple to onboard. Download, register once, and keep your care journey connected.
              </p>
            </div>

            <div className="mt-10 space-y-1.5">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="grid items-center gap-5 rounded-[12px] bg-white/10 px-6 py-5 md:grid-cols-[48px_1fr]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 text-sm font-bold text-white/80">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-[1.6] text-white/75">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          sectionId="faq-beta-health"
          eyebrow="FAQ"
          title={
            <>
              FAQ  - <b className="font-accent italic text-black">Beta Health</b>
            </>
          }
          description="Answers to common questions about the Beta Health App and how users can get care support."
          faqs={betaHealthFaqs}
        />



        <section className="px-6 pb-16 md:px-10 md:py-20 pt-8">
          <div className="relative mx-auto max-w-content overflow-hidden rounded-bl-[10px] rounded-br-[120px] rounded-tl-[120px] rounded-tr-[10px] bg-navy px-8 py-16 text-center md:px-14 md:py-20">
            <div className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 rounded-full bg-cobalt/25" />
            <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-salmon-red/25" />

            <div className="relative z-10 mx-auto max-w-[760px]">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/65">Start today - it&apos;s free</p>
              <h2 className="mt-3 font-body text-[clamp(34px,4.2vw,54px)] font-extrabold leading-[1.04] text-white">
                Your health.<br />
                <b className="text-light-yellow">Simplified.</b>
              </h2>
              <p className="mx-auto mt-5 max-w-[670px] text-base font-medium leading-[1.7] text-white/80">
                Download Beta Health and carry your complete medical history wherever you go.
              </p>
              <div className="mt-8 flex justify-center">
                <DownloadButtons align="center" mode="store_badges" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
