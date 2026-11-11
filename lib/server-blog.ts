import 'server-only'

import { cache } from 'react'
import { getArticleBySlug } from './blog'

export const getCachedArticleBySlug = cache(getArticleBySlug)
