'use client'

import { useEffect, useMemo, useState } from 'react'
import BlogCard from './BlogCard'
import {
  fetchAllArticles,
  filterByCategory,
  filterOptions,
  formatDate,
  stripHtml,
  type BlogArticle,
} from '@/lib/blog'
import { isFirebaseConfigured } from '@/lib/firebase'
import Link from 'next/link'

export default function BlogList() {
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState<'loading' | 'idle' | 'error'>('loading')

  useEffect(() => {
    async function loadArticles() {
      if (!isFirebaseConfigured) {
        setStatus('idle')
        return
      }

      try {
        const data = await fetchAllArticles()
        setArticles(data)
        setFilteredArticles(data)
        setStatus('idle')
      } catch {
        setStatus('error')
      }
    }

    loadArticles()
  }, [])

  const featuredArticle = selectedCategory === 'all' ? filteredArticles[0] : null
  const visibleArticles = useMemo(
    () => (featuredArticle ? filteredArticles.slice(1) : filteredArticles),
    [featuredArticle, filteredArticles]
  )

  async function handleCategoryChange(category: string) {
    setSelectedCategory(category)
    setSearchQuery('')
    setStatus('loading')

    try {
      const data = category === 'all' ? articles : await filterByCategory(category)
      setFilteredArticles(data)
      setStatus('idle')
    } catch {
      setStatus('error')
    }
  }

  function handleSearch(query: string) {
    setSearchQuery(query)
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      setFilteredArticles(articles)
      setSelectedCategory('all')
      return
    }

    setFilteredArticles(
      articles.filter((article) =>
        article.title.toLowerCase().includes(normalizedQuery)
      )
    )
  }

  return (
    <main className="min-h-screen bg-white px-4 py-16 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="mb-3 font-body text-[13px] font-bold uppercase tracking-[0.12em] text-salmon-red">
            Resources
          </p>
          <h1 className="font-body text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.08] text-black">
            Health <b className="text-navy">Insights</b>
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-base leading-[1.7] text-black/60">
            Explore OneClickMed updates, healthcare operations insights, and patient-centered digital health resources.
          </p>
        </div>

        <div className="sticky top-0 z-20 rounded-[22px]  bg-white/95 p-4 backdrop-blur">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-col gap-3 md:flex-row"
          >
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Search resources..."
              className="min-h-[48px] flex-1 rounded-[14px] border border-black/10 px-4 font-body text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-navy"
            />
            <button
              type="submit"
              className="min-h-[48px] rounded-[14px] bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-cobalt"
            >
              Search
            </button>
          </form>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleCategoryChange(option.value)}
                disabled={status === 'loading'}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === option.value
                    ? 'border-navy bg-navy text-white'
                    : 'border-navy/20 bg-white text-navy hover:bg-ice-blue'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {!isFirebaseConfigured ? (
          <div className="mt-10 rounded-[24px] bg-beige p-8 text-center">
            <h2 className="font-body text-2xl font-bold text-black">
              Firebase is not configured yet.
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-sm leading-[1.7] text-black/60">
              Add the `NEXT_PUBLIC_FIREBASE_*` environment variables to fetch and display published blog posts from Firestore.
            </p>
          </div>
        ) : null}

        {status === 'loading' ? (
          <div className="carousel-track -mx-4 mt-10 flex gap-6 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-[360px] min-w-[280px] animate-pulse rounded-[22px] bg-ice-blue md:min-w-0" />
            ))}
          </div>
        ) : null}

        {status === 'error' ? (
          <div className="mt-10 rounded-[24px] bg-blush-pink p-8 text-center">
            <h2 className="font-body text-2xl font-bold text-black">
              We could not load the articles.
            </h2>
            <p className="mt-3 text-sm text-black/60">
              Please refresh the page or check the Firebase configuration.
            </p>
          </div>
        ) : null}

        {status === 'idle' && featuredArticle ? (
          <section className="mt-10 grid items-center gap-8 rounded-[28px] bg-navy p-5 md:grid-cols-2 md:p-8">
            <div
              className="min-h-[360px] rounded-[22px] bg-ice-blue bg-cover bg-center"
              style={{
                backgroundImage: featuredArticle.coverImage
                  ? `url(${featuredArticle.coverImage})`
                  : undefined,
              }}
            />
            <div className="py-4">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-light-yellow">
                Featured Post
              </p>
              <h2 className="font-body text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.15] text-white">
                {featuredArticle.title}
              </h2>
              {featuredArticle.createdAt ? (
                <p className="mt-3 text-sm font-semibold text-white/60">
                  {formatDate(featuredArticle.createdAt)}
                </p>
              ) : null}
              <p className="mt-5 max-w-[520px] text-sm leading-[1.8] text-white/75">
                {stripHtml(featuredArticle.body || featuredArticle.content || '').slice(0, 240)}
              </p>
              <Link
                href={`/resources/${featuredArticle.slug}`}
                className="mt-7 inline-flex rounded-[14px] bg-white px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-ice-blue"
              >
                Read More
              </Link>
            </div>
          </section>
        ) : null}

        {status === 'idle' && visibleArticles.length > 0 ? (
          <div className="carousel-track -mx-4 mt-10 flex gap-6 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {visibleArticles.map((article) => (
              <BlogCard key={article.id || article.slug} article={article} />
            ))}
          </div>
        ) : null}

        {status === 'idle' && isFirebaseConfigured && filteredArticles.length === 0 ? (
          <div className="mt-10 rounded-[24px] bg-ice-blue p-8 text-center">
            <h2 className="font-body text-2xl font-bold text-black">
              No articles found.
            </h2>
            <p className="mt-3 text-sm text-black/60">
              Try a different search term or category.
            </p>
          </div>
        ) : null}
      </div>
    </main>
  )
}
