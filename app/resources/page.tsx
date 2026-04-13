import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogList from '@/components/blog/BlogList'
import { siteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Resources',
  description: `Explore healthcare operations guides, digital health resources, and patient-centered content from ${siteName}.`,
  keywords: [
    'healthcare resources',
    'digital health resources',
    'hospital operations guide',
    'patient-centered care resources',
    'OneClickMed resources',
  ],
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: `${siteName} Resources`,
    description: `Explore healthcare operations guides, digital health resources, and patient-centered content from ${siteName}.`,
    url: '/resources',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} Resources`,
    description: `Explore healthcare operations guides, digital health resources, and patient-centered content from ${siteName}.`,
  },
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  )
}
