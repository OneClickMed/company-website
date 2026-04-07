'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  formatDate,
  getArticleBySlug,
  stripHtml,
  suggestArticles,
  type BlogArticle,
} from '@/lib/blog'
import { isFirebaseConfigured } from '@/lib/firebase'
import BlogCard from './BlogCard'

interface BlogDetailProps {
  slug: string
}

export default function BlogDetail({ slug }: BlogDetailProps) {
  const [article, setArticle] = useState<BlogArticle | null>(null)
  const [suggestedArticles, setSuggestedArticles] = useState<BlogArticle[]>([])
  const [status, setStatus] = useState<'loading' | 'idle' | 'error' | 'empty'>('loading')

  useEffect(() => {
    async function loadArticle() {
      if (!isFirebaseConfigured) {
        setStatus('empty')
        return
      }

      try {
        const [articleData, suggestions] = await Promise.all([
          getArticleBySlug(slug),
          suggestArticles(),
        ])

        if (!articleData) {
          setStatus('empty')
          return
        }

        setArticle(articleData)
        setSuggestedArticles(
          suggestions.filter((suggestion) => suggestion.slug !== articleData.slug)
        )
        setStatus('idle')
      } catch {
        setStatus('error')
      }
    }

    loadArticle()
  }, [slug])

  return (
    <main className="min-h-screen bg-white px-4 py-16 md:px-10">
      <div className="mx-auto max-w-[980px]">


        {status === 'loading' ? (
          <div className="h-[520px] animate-pulse rounded-[28px] bg-ice-blue" />
        ) : null}

        {status === 'error' ? (
          <div className="rounded-[24px] bg-blush-pink p-8 text-center">
            <h1 className="font-body text-2xl font-bold text-black">
              We could not load this article.
            </h1>
          </div>
        ) : null}

        {status === 'empty' ? (
          <div className="rounded-[24px] bg-beige p-8 text-center">
            <h1 className="font-body text-2xl font-bold text-black">
              Article not found.
            </h1>
            <p className="mt-3 text-sm text-black/60">
              The post may be unpublished, or Firebase may not be configured yet.
            </p>
          </div>
        ) : null}

        {status === 'idle' && article ? (
          <article>
            <div className="text-center">

              <h1 className="font-body text-[clamp(34px,5vw,64px)] font-extrabold leading-[1.05] text-black">
                {article.title}
              </h1>
              {article.subtitle ? (
                <p className="mx-auto mt-4 max-w-[720px] text-lg leading-[1.6] text-black/60">
                  {article.subtitle}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-salmon-red">
                <span>{article.author || 'OneClickMed'}</span>
                {article.createdAt ? <span>{formatDate(article.createdAt)}</span> : null}
              </div>
            </div>

            {article.coverImage ? (
              <img
                src={article.coverImage}
                alt={article.title}
                className="mt-10 h-[360px] w-full rounded-[28px] object-cover md:h-[560px]"
              />
            ) : null}

            <div
              className="mx-auto mt-10 max-w-[820px] font-body text-[17px] leading-[1.9] text-black/75 [&_a]:font-bold [&_a]:text-navy [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-black [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-black [&_img]:rounded-[18px] [&_li]:mb-2 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6"
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
