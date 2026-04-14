export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://oneclickmed.com'
export const siteName = 'OneClickMed'
export const defaultTitle = 'OneClickMed – One Click, Total care !'
export const defaultDescription = 'A digital health platform that simplifies care.'
export const defaultOgImage = '/logo-main-scaled.png'

export function absoluteUrl(path: string) {
  const base = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}
