'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchAllArticles, formatDate, stripHtml, type BlogArticle } from '@/lib/blog'

interface ResourceCard {
  img?: string
  date: string
  title: string
  desc: string
  href: string
}

function mapArticleToResource(article: BlogArticle) {
  return {
    img: article.coverImage,
    date: formatDate(article.createdAt),
    title: article.title,
    desc: stripHtml(article.body || article.content || '').slice(0, 150),
    href: `/blog/${article.slug}`,
  }
}

export default function Resources() {
  const [resources, setResources] = useState<ResourceCard[]>([])
  const [status, setStatus] = useState<'loading' | 'idle' | 'error'>('loading')

  useEffect(() => {
    async function loadResources() {
      try {
        const articles = await fetchAllArticles()
        setResources(articles.slice(0, 3).map(mapArticleToResource))
        setStatus('idle')
      } catch {
        setStatus('error')
      }
    }

    loadResources()
  }, [])

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-body text-[clamp(24px,3.5vw,42px)] font-extrabold leading-[1.2] text-black">
          Featured <b className="text-navy">Resources</b>
        </h2>
        <Link href="/blog" className="text-sm font-bold text-navy hover:text-cobalt">
          View All Resources
        </Link>
      </div>
      {status === 'loading' ? (
        <div className="carousel-track -mx-6 mt-10 flex gap-6 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-[360px] min-w-[280px] animate-pulse rounded-[20px] bg-ice-blue md:min-w-0" />
          ))}
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="mt-10 rounded-[24px] bg-blush-pink p-8 text-center">
          <h3 className="font-body text-2xl font-bold text-black">
            We could not load resources from Firebase.
          </h3>
          <p className="mt-3 text-sm leading-[1.7] text-black/60">
            Check the Firebase configuration and Firestore rules for the `blog_post` collection.
          </p>
        </div>
      ) : null}

      {status === 'idle' && resources.length === 0 ? (
        <div className="mt-10 rounded-[24px] bg-ice-blue p-8 text-center">
          <h3 className="font-body text-2xl font-bold text-black">
            No published resources yet.
          </h3>

        </div>
      ) : null}

      {status === 'idle' && resources.length > 0 ? (
        <div className="carousel-track -mx-6 mt-10 flex gap-6 overflow-x-auto px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {resources.map((resource) => (
          <Link
            key={resource.title}
            href={resource.href}
            className="block min-w-[280px] overflow-hidden rounded-[20px] bg-ice-blue transition-transform duration-300 hover:-translate-y-1 md:min-w-0"
          >
            <div
              className="relative h-[220px] bg-beige bg-cover bg-center"
              style={{
                backgroundImage: resource.img ? `url(${resource.img})` : undefined,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {resource.date ? (
                <span className="absolute bottom-3 left-4 text-xs text-white/80 font-medium z-10">
                  {resource.date}
                </span>
              ) : null}
            </div>
            <div className="p-5">
              <h3 className="font-body text-[17px] font-bold text-black leading-[1.4] mb-2.5">
                {resource.title}
              </h3>
              <p className="text-sm text-black/60 leading-[1.6]">
                {resource.desc}
                {resource.desc.length >= 150 ? '...' : ''}
              </p>
            </div>
          </Link>
        ))}
        </div>
      ) : null}
    </section>
  )
}
