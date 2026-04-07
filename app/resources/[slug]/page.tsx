import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogDetail from '@/components/blog/BlogDetail'

interface ResourceDetailPageProps {
  params: {
    slug: string
  }
}

export default function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  return (
    <>
      <Header />
      <BlogDetail slug={params.slug} />
      <Footer />
    </>
  )
}
