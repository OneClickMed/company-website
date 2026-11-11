'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { captureEvent } from '@/lib/analytics'

import {
  formatDate,
  stripHtml,
  suggestArticles,
  type BlogArticle,
} from '@/lib/blog'
import BlogCard from './BlogCard'
import ArticleCoverImage from './ArticleCoverImage'

interface BlogDetailProps {
  slug: string
  initialArticle: BlogArticle | null
  appview?: boolean
}

export default function BlogDetail({ slug, initialArticle, appview = false }: BlogDetailProps) {
  const article = initialArticle
  const [suggestedArticles, setSuggestedArticles] = useState<BlogArticle[]>([])

  useEffect(() => {
    let active = true
    setSuggestedArticles([])

    if (!initialArticle) {
      return () => {
        active = false
      }
    }

    captureEvent('blog_article_viewed', {
      article_slug: initialArticle.slug,
      article_title: initialArticle.title,
      author: initialArticle.author ?? 'OneClickMed',
    })

    // Suggestions load independently so their query cannot delay the article or cover image.
    void suggestArticles().then((suggestions) => {
      if (active) {
        setSuggestedArticles(
          suggestions.filter((suggestion) => suggestion.slug !== initialArticle.slug)
        )
      }
    })

    return () => {
      active = false
    }
  }, [initialArticle, slug])

  return (
    <main className="min-h-screen bg-white px-4 py-16 md:px-10">
      <div className="mx-auto w-full max-w-content">


        {!article ? (
          <div className="rounded-[24px] bg-beige p-8 text-center">
            <h1 className="font-body text-2xl font-bold text-black">
              Article not found.
            </h1>
            <p className="mt-3 text-sm text-black/60">
              The post may be unpublished or unavailable.
            </p>
          </div>
        ) : null}

        {article ? (
          <article>
            <div className="text-left">

              <h1 className="font-body text-[clamp(34px,5vw,64px)] font-extrabold leading-[1.05] text-black">
                {article.title}
              </h1>
              {article.subtitle ? (
                <p className="mt-4 text-lg leading-[1.6] text-black/60">
                  {article.subtitle}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-salmon-red">
                <span>{article.author || 'OneClickMed'}</span>
                {article.createdAt ? <span>{formatDate(article.createdAt)}</span> : null}
              </div>
            </div>


            {article.coverImage ? (
              <div className="relative mt-10 h-[360px] overflow-hidden rounded-[28px] bg-gray-200 md:h-[560px]">
                <ArticleCoverImage
                  src={article.coverImage}
                  alt={article.title}
                  preload
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            ) : null}

            <div
              className="mt-10 font-body text-[17px] leading-[1.9] text-black/75 [&_a]:font-bold [&_a]:text-navy [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-black [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-black [&_img]:rounded-[18px] [&_li]:mb-2 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{
                __html: article.content || article.body || stripHtml(article.body),
              }}
            />

            {suggestedArticles.length > 0 ? (
              <section className="mt-14 border-t border-black/10 pt-10">
                <h2 className="font-body text-3xl font-extrabold text-black">
                  More <b className="text-navy">Resources</b>
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {suggestedArticles.map((suggestedArticle) => (
                    <BlogCard
                      key={suggestedArticle.id || suggestedArticle.slug}
                      article={suggestedArticle}
                      appview={appview}
                    />
                  ))}
                </div>
              </section>
            ) : null}
          </article>
        ) : null}
      </div>
    </main>
  )
}
