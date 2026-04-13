import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Backers from '@/components/Backers'
import Products from '@/components/Products'
import About from '@/components/About'
import MeetTeam from '@/components/MeetTeam'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import HowToStart from '@/components/HowToStart'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Resources from '@/components/Resources'
import Footer from '@/components/Footer'
import { absoluteUrl, defaultDescription, siteName, siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Home',
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} – One Click, One Heart, One Care`,
    description: defaultDescription,
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} – One Click, One Heart, One Care`,
    description: defaultDescription,
  },
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/ocm-icon.png'),
    sameAs: [
      'https://x.com/oneclickmed_',
      'https://www.facebook.com/oneclickmedng',
      'https://www.instagram.com/oneclick_med/',
      'https://ng.linkedin.com/company/oneclick-med',
      'https://www.youtube.com/@OneClick-Med',
    ],
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <Header />
      <Hero />
      <Backers />
      <Stats />

      <About />

      <Products />
      <Services />
      <HowToStart />

      <Mission />
      <MeetTeam />

      <FAQ />
      <CTA />
      <Resources />
      <Footer />
    </main>
  )
}
