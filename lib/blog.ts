import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  type DocumentData,
} from 'firebase/firestore'
import { db } from './firebase'

export interface BlogArticle {
  id?: string
  author?: string
  body?: string
  categories?: string[]
  content?: string
  coverImage?: string
  createdAt?: unknown
  meta_description?: string
  meta_keywords?: string
  publish?: boolean
  slug: string
  subtitle?: string
  title: string
}

export const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'emergency', label: 'Emergency' },
  { value: 'health-tips', label: 'Health Tips' },
  { value: 'mental-health', label: 'Mental Health' },
  { value: 'nutrition', label: 'Nutrition' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'healthy-habits', label: 'Healthy Habits' },
  { value: 'preventive-care', label: 'Preventive Care' },
  { value: 'stress-management', label: 'Stress Management' },
  { value: 'health-tech-and-innovation', label: 'Health Tech & Innovation' },
  { value: 'lifestyle', label: 'Lifestyle' },

]

function normalizeArticle(documentData: DocumentData, id: string): BlogArticle {
  return {
    id,
    author: documentData.author,
    body: documentData.body,
    categories: documentData.categories,
    content: documentData.content,
    coverImage: documentData.coverImage,
    createdAt: documentData.createdAt,
    meta_description: documentData.meta_description,
    meta_keywords: documentData.meta_keywords,
    publish: documentData.publish,
    slug: documentData.slug || id,
    subtitle: documentData.subtitle,
    title: documentData.title || 'Untitled article',
  }
}

export function formatDate(dateInput: unknown): string {
  if (!dateInput) {
    return ''
  }

  try {
    let date: Date

    if (dateInput instanceof Date) {
      date = dateInput
    } else if (
      typeof dateInput === 'object' &&
      dateInput !== null &&
      'seconds' in dateInput &&
      typeof dateInput.seconds === 'number'
    ) {
      date = new Date(dateInput.seconds * 1000)
    } else if (typeof dateInput === 'string') {
      date = new Date(dateInput)
    } else {
      return ''
    }

    if (Number.isNaN(date.getTime())) {
      return ''
    }

    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

export function stripHtml(value = ''): string {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

export async function fetchAllArticles(): Promise<BlogArticle[]> {
  if (!db) {
    return []
  }

  try {
    const articlesCollection = collection(db, 'blog_post')
    // Avoid orderBy here: Firestore omits documents without createdAt from
    // ordered results, even when they are published articles.
    const articlesQuery = query(articlesCollection, where('publish', '==', true))
    const snapshot = await getDocs(articlesQuery)

    return snapshot.docs
      .map((articleDoc) => normalizeArticle(articleDoc.data(), articleDoc.id))
      .sort((a, b) => getDateValue(b.createdAt) - getDateValue(a.createdAt))
  } catch (error) {
    console.error('Failed to fetch published blog articles:', error)
    throw error
  }
}

function getDateValue(value: unknown): number {
  if (value instanceof Date) return value.getTime()
  if (typeof value === 'string') return new Date(value).getTime() || 0
  if (typeof value === 'object' && value !== null && 'seconds' in value && typeof value.seconds === 'number') {
    return value.seconds * 1000
  }
  return 0
}

export async function filterByCategory(category: string): Promise<BlogArticle[]> {
  if (!db) {
    return []
  }

  try {
    const articlesCollection = collection(db, 'blog_post')
    const articlesQuery =
      category === 'all'
        ? query(articlesCollection, where('publish', '==', true), orderBy('createdAt', 'desc'))
        : query(
            articlesCollection,
            where('publish', '==', true),
            where('categories', 'array-contains', category),
            orderBy('createdAt', 'desc')
          )
    const snapshot = await getDocs(articlesQuery)

    return snapshot.docs.map((articleDoc) =>
      normalizeArticle(articleDoc.data(), articleDoc.id)
    )
  } catch {
    return []
  }
}

export async function suggestArticles(): Promise<BlogArticle[]> {
  if (!db) {
    return []
  }

  try {
    const articlesCollection = collection(db, 'blog_post')
    const articlesQuery = query(
      articlesCollection,
      where('publish', '==', true),
      orderBy('createdAt', 'desc'),
      limit(3)
    )
    const snapshot = await getDocs(articlesQuery)

    return snapshot.docs.map((articleDoc) =>
      normalizeArticle(articleDoc.data(), articleDoc.id)
    )
  } catch {
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<BlogArticle | null> {
  if (!db) {
    return null
  }

  try {
    const articlesCollection = collection(db, 'blog_post')
    const articlesQuery = query(
      articlesCollection,
      where('slug', '==', slug),
      where('publish', '==', true),
      limit(1)
    )
    const snapshot = await getDocs(articlesQuery)

    if (snapshot.empty) {
      return null
    }

    const articleDoc = snapshot.docs[0]
    return normalizeArticle(articleDoc.data(), articleDoc.id)
  } catch {
    return null
  }
}
