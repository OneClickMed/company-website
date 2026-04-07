import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogDetail from '@/components/blog/BlogDetail'

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return (
    <>
      <Header />
      <BlogDetail slug={params.slug} />
      <Footer />
    </>
  )
}
