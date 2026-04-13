import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogDetail from '@/components/blog/BlogDetail'
import { getArticleBySlug, stripHtml, type BlogArticle } from '@/lib/blog'
import { absoluteUrl, defaultOgImage, siteName } from '@/lib/seo'

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    appview?: string
  }>
}

function getDescription(article: BlogArticle | null, fallback: string) {
  if (!article) {
    return fallback
  }

  const fromMeta = article.meta_description?.trim()
  if (fromMeta) {
    return fromMeta
  }

  const fromContent = stripHtml(article.content || article.body || '').slice(0, 160).trim()
  return fromContent || fallback
}

function getKeywords(article: BlogArticle | null): string[] | undefined {
  if (!article) {
    return undefined
  }

  const fromMeta = article.meta_keywords
    ? article.meta_keywords
        .split(',')
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    : []

  const fromCategories = article.categories?.map((category) => category.trim()).filter(Boolean) || []
  const base = ['OneClickMed', 'digital health blog', 'healthcare insights']
  const merged = Array.from(new Set([...fromMeta, ...fromCategories, ...base]))
  return merged.length > 0 ? merged : undefined
}

function getPublishedISO(value: unknown): string | undefined {
  if (!value) {
    return undefined
  }

  let date: Date | null = null

  if (value instanceof Date) {
    date = value
  } else if (
    typeof value === 'object' &&
    value !== null &&
    'seconds' in value &&
    typeof value.seconds === 'number'
  ) {
    date = new Date(value.seconds * 1000)
  } else if (typeof value === 'string') {
    date = new Date(value)
  }

  if (!date || Number.isNaN(date.getTime())) {
    return undefined
  }

  return date.toISOString()
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  const canonical = `/blog/${slug}`
  const fallbackDescription = `Read this ${siteName} article for practical digital health insights.`
  const description = getDescription(article, fallbackDescription)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: fallbackDescription,
      alternates: { canonical },
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const publishedTime = getPublishedISO(article.createdAt)
  const keywords = getKeywords(article)
  const ogImage = article.coverImage || defaultOgImage

  return {
    title: article.title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: article.title,
      description,
      images: [{ url: ogImage, alt: article.title }],
      publishedTime,
      authors: [article.author || siteName],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: [ogImage],
    },
  }
}

export default async function BlogDetailPage({ params, searchParams }: BlogDetailPageProps) {
  const { slug } = await params
  const { appview } = await searchParams
  const isAppView = appview === 'true'
  const article = await getArticleBySlug(slug)

  const description = getDescription(
    article,
    `Read this ${siteName} article for practical digital health insights.`
  )
  const publishedTime = getPublishedISO(article?.createdAt)
  const jsonLd =
    article && !isAppView
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description,
          author: {
            '@type': 'Person',
            name: article.author || siteName,
          },
          publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/ocm-icon.png'),
            },
          },
          datePublished: publishedTime,
          dateModified: publishedTime,
          image: article.coverImage || absoluteUrl(defaultOgImage),
          mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
        }
      : null

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      {!isAppView ? <Header /> : null}
      <BlogDetail slug={slug} appview={isAppView} />
      {!isAppView ? <Footer /> : null}
    </>
  )
}
