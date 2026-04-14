import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DownloadButtons from '@/components/DownloadButtons'
import { absoluteUrl, siteName } from '@/lib/seo'

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
  'Hospitals and clinics',
  'End-to-end encrypted',
  'iOS and Android',
  'Built for Africa',
  'AI-powered',
  'Offline-ready',
]

const statCards = [
  {
    value: '1-tap',
    title: 'access to your full medical history',
    copy: 'No more repeating your health story at every hospital. Your records travel with you.',
    className: 'bg-cobalt text-white rounded-[10px] md:rounded-br-[180px]',
  },
  {
    value: '24/7',
    title: 'AI health guidance at your fingertips',
    copy: 'Get instant symptom assessments and answers to your health questions, anytime.',
    className: 'bg-ice-blue text-black rounded-[10px] md:rounded-tl-[180px]',
  },
  {
    value: '8 min',
    title: 'average emergency response time',
    copy: 'One tap dispatches support with your health profile pre-loaded for the response team.',
    className: 'bg-navy text-white rounded-[10px] md:rounded-bl-[180px]',
  },
]

const features = [
  {
    title: 'Ask AI - Your Personal Health Assistant',
    description:
      'A medical-grade assistant for private answers to symptoms, medication questions, and next-step guidance.',
    icon: 'AI',
    tone: 'bg-navy text-white md:col-span-2',
  },
  {
    title: 'Digital Health Passport',
    description:
      'Carry your verified medical identity and records so any partnered facility can access your profile quickly.',
    icon: 'ID',
    tone: 'bg-ice-blue text-black',
  },
  {
    title: 'Smart File Management - MediVault',
    description:
      'Store and organize lab results, prescriptions, and reports with secure retrieval and easy sharing.',
    icon: 'FM',
    tone: 'bg-beige text-black',
  },
  {
    title: 'One-Tap Emergency Care',
    description:
      'Book an ambulance in one tap and share critical health context with responders in real time.',
    icon: 'EC',
    tone: 'bg-salmon-red text-white',
  },
  {
    title: 'Prescription Reminders',
    description: 'Set smart reminders to stay consistent with medications and long-term treatment plans.',
    icon: 'RX',
    tone: 'bg-white text-black border border-black/10',
  },
  {
    title: 'Hospital Finder',
    description:
      'Locate verified facilities by distance and specialty when you need care quickly.',
    icon: 'HF',
    tone: 'bg-white text-black border border-black/10',
  },
  {
    title: 'Health and Wellness Tips',
    description: 'Receive practical daily insights tailored to your profile and care journey.',
    icon: 'WT',
    tone: 'bg-ice-blue text-black',
  },
]

const featureShapeClasses = [
  'rounded-[16px] md:rounded-tr-[64px]',
  'rounded-[16px] md:rounded-bl-[64px]',
  'rounded-[16px] md:rounded-tl-[52px]',
  'rounded-[16px] md:rounded-br-[52px]',
  'rounded-[16px] md:rounded-tl-[64px]',
  'rounded-[16px] md:rounded-tr-[52px]',
  'rounded-[16px] md:rounded-bl-[52px]',
  'rounded-[16px] md:rounded-br-[64px]',
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
        <section className="px-6 pb-14 pt-12 md:px-10 md:pb-16 md:pt-16">
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


        <section className="relative overflow-hidden px-6 py-16 md:px-10 md:py-20">
          <div className="pointer-events-none absolute -left-24 top-6 h-52 w-52 rounded-full bg-cobalt/10" />
          <div className="pointer-events-none absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-salmon-red/10" />

          <div className="relative mx-auto max-w-content">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-black/45">Everything you need</p>
            <h2 className="mt-3 font-body text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.03] text-black">
              One Click <b className="font-accent">Total Care</b>
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`flex min-h-[250px] flex-col justify-between p-7 ${featureShapeClasses[index % featureShapeClasses.length]} ${feature.tone}`}
                >
                  <div>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-xs font-bold ${
                        feature.tone.includes('text-white')
                          ? 'bg-white/15 text-white'
                          : 'bg-navy/10 text-navy'
                      }`}
                    >
                      {feature.icon}
                    </span>
                    <h3 className="mt-5 text-[22px] font-extrabold leading-[1.2]">{feature.title}</h3>
                    <p className={`mt-3 text-sm font-medium leading-[1.65] ${feature.tone.includes('text-white') ? 'text-white/80' : 'text-black/65'}`}>
                      {feature.description}
                    </p>
                  </div>


                </article>
              ))}
            </div>
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

        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <article className="relative overflow-hidden rounded-[24px] bg-navy p-9 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cobalt/20" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-salmon-red/20" />

              <div className="relative z-10">
                <div className="mb-7 h-9 w-11 rounded-[6px] bg-light-yellow/90" />
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">
                  Beta Health - Digital Health Passport
                </p>
                <p className="mt-2 font-accent text-[34px]">Adaobi Okonkwo</p>
                <p className="text-xs font-semibold tracking-[0.08em] text-white/45">OTR-NG-2024-009382</p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  {[
                    ['Blood Group', 'O+'],
                    ['Genotype', 'AA'],
                    ['Allergies', 'Penicillin'],
                    ['Last Visit', 'Mar 28, 2025'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/45">{label}</p>
                      <p className="mt-1 text-sm font-semibold text-white/90">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-black/45">Your Health Identity</p>
              <h2 className="mt-3 font-body text-[clamp(30px,3.8vw,44px)] font-extrabold leading-[1.08] text-black">
                One ID.<br />
                <b className="font-accent">Every hospital.</b><br />
                Zero forms.
              </h2>
              <p className="mt-5 text-[17px] font-medium leading-[1.65] text-black/65">
                Your Beta Health passport is your verified medical identity. When presented at partnered facilities,
                your history, allergies, and medication context are ready instantly.
              </p>

              <div className="mt-6 space-y-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3 text-[15px] font-medium text-black/75">
                    <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-cobalt" aria-hidden="true" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-10 md:pb-20">
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
