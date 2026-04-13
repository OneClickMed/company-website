import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogList from '@/components/blog/BlogList'
import { siteName } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog',
  description: `Read digital health insights, product updates, and care innovation stories from ${siteName}.`,
  keywords: [
    'OneClickMed blog',
    'digital health insights',
    'healthcare innovation',
    'telemedicine articles',
    'EHR best practices',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `${siteName} Blog`,
    description: `Read digital health insights, product updates, and care innovation stories from ${siteName}.`,
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} Blog`,
    description: `Read digital health insights, product updates, and care innovation stories from ${siteName}.`,
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  )
}
