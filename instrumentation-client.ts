import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '/_ocm',
  ui_host: 'https://eu.posthog.com',
  defaults: '2026-01-30',
  capture_exceptions: false,
  capture_performance: false,
  autocapture: false,
  disable_session_recording: true,
  debug: false,
})
