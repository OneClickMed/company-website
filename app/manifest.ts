import type { MetadataRoute } from 'next'
import { siteName } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: 'A digital health platform that simplifies care.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0124AA',
    icons: [
      {
        src: '/ocm-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ocm-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
