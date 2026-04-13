import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { absoluteUrl, siteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Digital Health',
  description:
    'Digital Health is OneClickMed’s provider platform for unified patient profiles, secure data sharing, and AI-supported workflows.',
  keywords: [
    'Digital Health',
    'OneClickMed Digital Health',
    'healthcare provider platform',
    'EHR system',
    'secure health data sharing',
    'AI diagnostics platform',
  ],
  alternates: {
    canonical: '/digital-health',
  },
  openGraph: {
    title: `${siteName} Digital Health`,
    description:
      'Digital Health is OneClickMed’s provider platform for unified patient profiles, secure data sharing, and AI-supported workflows.',
    url: '/digital-health',
    type: 'website',
    images: [{ url: '/digital-health-1024x810.png', alt: 'Digital Health platform preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} Digital Health`,
    description:
      'Digital Health is OneClickMed’s provider platform for unified patient profiles, secure data sharing, and AI-supported workflows.',
    images: ['/digital-health-1024x810.png'],
  },
}

const capabilities = [
  'Unified patient profiles',
  'Cloud-based record access',
  'Secure data interoperability',
  'AI-assisted clinical workflows',
]

export default function DigitalHealthPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Digital Health',
    brand: {
      '@type': 'Brand',
      name: siteName,
    },
    description:
      'A provider-focused digital health platform for coordinated care, secure records, and operational efficiency.',
    image: absoluteUrl('/digital-health-1024x810.png'),
    category: 'Healthcare software',
    url: absoluteUrl('/digital-health'),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Header />
      <main className="mx-auto min-h-screen max-w-content px-6 pb-16 pt-28 md:px-10">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-salmon-red">Product</p>
            <h1 className="mt-3 font-body text-[clamp(36px,6vw,64px)] font-extrabold leading-[1.05] text-black">
              Digital <b className="font-accent">Health</b>
            </h1>
            <p className="mt-5 max-w-[640px] text-lg leading-[1.7] text-black/70">
              A comprehensive provider platform built to centralize records, reduce operational friction,
              and improve patient outcomes through connected care.
            </p>

            <ul className="mt-8 space-y-3">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-xl bg-ice-blue px-4 py-3 text-[15px] font-semibold text-navy"
                >
                  {capability}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-[6px] bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-cobalt"
              >
                Book a Demo
              </a>
            </div>
          </div>

          <div className="rounded-[24px] bg-navy p-6 md:p-8">
            <img
              src="/digital-health-1024x810.png"
              alt="Digital Health platform interface"
              className="mx-auto w-full max-w-[720px]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
