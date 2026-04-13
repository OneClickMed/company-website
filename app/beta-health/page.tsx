import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DownloadButtons from '@/components/DownloadButtons'
import { absoluteUrl, siteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Beta Health',
  description:
    'Beta Health is OneClickMed’s patient-facing product for AI-assisted health support, secure data access, and connected care.',
  keywords: [
    'Beta Health',
    'OneClickMed Beta Health',
    'patient app',
    'AI symptom checker',
    'emergency healthcare app',
    'digital health passport',
    'remote healthcare',
  ],
  alternates: {
    canonical: '/beta-health',
  },
  openGraph: {
    title: `${siteName} Beta Health`,
    description:
      'Beta Health is OneClickMed’s patient-facing product for AI-assisted health support, secure data access, and connected care.',
    url: '/beta-health',
    type: 'website',
    images: [{ url: '/beta-health-894x1024.png', alt: 'Beta Health app preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} Beta Health`,
    description:
      'Beta Health is OneClickMed’s patient-facing product for AI-assisted health support, secure data access, and connected care.',
    images: ['/beta-health-894x1024.png'],
  },
}

const highlights = [
  {
    title: 'Instant Health Data Access',
    description: 'View prescriptions, lab results, and care history from your phone whenever needed.',
  },
  {
    title: 'Seamless EMR Connection',
    description: 'Sync with care providers for better continuity and fewer repeated forms.',
  },
  {
    title: 'AI-Powered Insights',
    description: 'Get quick guidance through AI-assisted questions and symptom support.',
  },
  {
    title: 'Secure by Design',
    description: 'Privacy-first controls and strong data protection across patient workflows.',
  },
]

const features = [
  {
    title: 'Ask AI',
    description:
      'Get fast answers to health questions with reliable, context-aware guidance in a private experience.',
    tags: ['Free', 'Instant Responses', 'Privacy Protected'],
  },
  {
    title: 'AI Symptom Checker',
    description:
      'Receive rapid symptom assessments with red-flag alerts and suggested next steps.',
    tags: ['Personalized', '24/7 Support', 'Triage Guidance'],
  },
  {
    title: 'My Health Data',
    description:
      'Access your records, care timeline, and verified digital health identity in one place.',
    tags: ['Secure Access', 'Health Passport', 'Patient Control'],
  },
  {
    title: 'File Management',
    description:
      'Store reports, prescriptions, and medical documents with simple sharing and retrieval.',
    tags: ['Cloud Backup', 'Organized Records', 'Shareable'],
  },
  {
    title: 'Emergency Care',
    description:
      'Request emergency support quickly with location-aware workflows and care coordination.',
    tags: ['Fast Response', 'Location Aware', 'Critical Support'],
  },
  {
    title: 'Emergency Contacts',
    description:
      'Alert trusted contacts instantly and share critical context during emergencies.',
    tags: ['Instant Alerts', 'Live Status', 'Privacy Controls'],
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
      'A patient-facing digital health product that supports AI-assisted care, secure records access, and connected provider experiences.',
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

      <main className="min-h-screen bg-white pb-16 pt-24">
        <section className="bg-gradient-to-b from-ice-blue/45 to-white px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-salmon-red">Beta Health</p>
              <h1 className="mt-3 font-body text-[clamp(38px,6vw,72px)] font-extrabold leading-[1.03] text-black">
                Your Complete <b className="font-accent">Health Companion</b>
              </h1>
              <p className="mt-6 max-w-[680px] text-lg leading-[1.75] text-black/70">
                Inspired by the original Beta Health product experience, this page presents the app as an
                all-in-one digital health companion for everyday care, urgent support, and connected
                provider communication.
              </p>

              <div className="mt-8">
                <DownloadButtons />
              </div>
            </div>

            <div className="rounded-[28px] bg-navy p-6 md:p-8">
              <img
                src="/beta-health-894x1024.png"
                alt="Beta Health mobile app interface"
                className="mx-auto max-h-[700px] w-auto"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-content">
            <div className="mx-auto max-w-[780px] text-center">
              <h2 className="font-body text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.08] text-black">
                Built for <b className="font-accent">Connected Care</b>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-black/65">
                Core capabilities inspired by the original Beta Health page, focused on practical outcomes
                for patients and care teams.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-[18px] border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-black/65">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ice-blue/35 px-6 py-16 md:px-10">
          <div className="mx-auto max-w-content">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="font-body text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.1] text-black">
                See Beta Health in Action
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-black/65">
                Product walkthrough inspired by the original Beta Health media section.
              </p>
            </div>

            <div className="mx-auto mt-8 w-full max-w-[960px] overflow-hidden rounded-[20px] shadow-brand-menu">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.youtube.com/embed/_E9JEh-8Jew"
                  title="Beta Health Demo"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-content">
            <div className="mx-auto max-w-[780px] text-center">
              <h2 className="font-body text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] text-black">
                Powerful Features for Your Health Journey
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-black/65">
                A practical, patient-first toolkit influenced by the previous product narrative.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-[20px] border border-black/10 bg-white p-6 shadow-sm">
                  <h3 className="text-2xl font-extrabold text-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-black/70">{feature.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ice-blue px-3 py-1 text-xs font-semibold uppercase tracking-[0.04em] text-navy"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-4 md:px-10">
          <div className="mx-auto max-w-content rounded-[24px] bg-navy p-8 text-center md:p-12">
            <h2 className="font-body text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] text-white">
              Ready to Start with Beta Health?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-sm leading-[1.75] text-white/75">
              Download Beta Health and begin with a connected care experience designed for modern patient
              journeys.
            </p>
            <div className="mt-7">
              <DownloadButtons align="center" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
