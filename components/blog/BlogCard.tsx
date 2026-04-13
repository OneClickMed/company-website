'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { formatDate, stripHtml, type BlogArticle } from '@/lib/blog'

interface BlogCardProps {
  article: BlogArticle
  appview?: boolean
}

export default function BlogCard({ article, appview = false }: BlogCardProps) {
  const summary = stripHtml(article.body || article.content || '').slice(0, 140)

  return (
    <Link
      href={`/resources/${article.slug}${appview ? '?appview=true' : ''}`}
      className="group block min-w-[280px] overflow-hidden rounded-[22px] bg-ice-blue transition-transform duration-300 hover:-translate-y-1 md:min-w-0"
      onClick={() => posthog.capture('blog_article_clicked', { article_slug: article.slug, article_title: article.title })}
    >
      <div
        className="relative h-[230px] bg-beige bg-cover bg-center"
        style={{
          backgroundImage: article.coverImage ? `url(${article.coverImage})` : undefined,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {article.createdAt ? (
          <span className="absolute bottom-4 left-5 z-10 text-xs font-semibold text-white/85">
            {formatDate(article.createdAt)}
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="font-body text-[18px] font-bold leading-[1.35] text-black transition-colors group-hover:text-navy">
          {article.title}
        </h3>
        {summary ? (
          <p className="mt-3 text-sm leading-[1.7] text-black/60">
            {summary}
            {summary.length >= 140 ? '...' : ''}
          </p>
        ) : null}
      </div>
    </Link>
  )
}
