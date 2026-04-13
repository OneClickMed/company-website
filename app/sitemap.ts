import type { MetadataRoute } from 'next'
import { fetchAllArticles } from '@/lib/blog'
import { absoluteUrl } from '@/lib/seo'

function getDate(value: unknown): Date {
  if (!value) {
    return new Date()
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? new Date() : value
  }

  if (
    typeof value === 'object' &&
    value !== null &&
    'seconds' in value &&
    typeof value.seconds === 'number'
  ) {
    const date = new Date(value.seconds * 1000)
    return Number.isNaN(date.getTime()) ? new Date() : date
  }

  if (typeof value === 'string') {
    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? new Date() : date
  }

  return new Date()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/blog'),
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/resources'),
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/privacy-policy'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: absoluteUrl('/terms-condition'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: absoluteUrl('/beta-health'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/digital-health'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  try {
    const articles = await fetchAllArticles()
    const dynamicRoutes: MetadataRoute.Sitemap = articles.flatMap((article) => {
      const lastModified = getDate(article.createdAt)
      return [
        {
          url: absoluteUrl(`/blog/${article.slug}`),
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: absoluteUrl(`/resources/${article.slug}`),
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.8,
        },
      ]
    })

    return [...staticRoutes, ...dynamicRoutes]
  } catch {
    return staticRoutes
  }
}
