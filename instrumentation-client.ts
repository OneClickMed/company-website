import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '/_ocm',
  ui_host: 'https://eu.posthog.com',
  defaults: '2026-01-30',
  capture_exceptions: true,
  capture_performance: true,
  debug: process.env.NODE_ENV === 'development',
})
