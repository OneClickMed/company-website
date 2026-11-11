type AnalyticsEventProperties = Record<string, string | number | boolean | null | undefined>

let posthogPromise: Promise<typeof import('posthog-js').default> | undefined

function loadPosthog() {
  const token = process.env.NEXT_PUBLIC_POSTHOG_TOKEN
  if (!token) {
    return Promise.resolve(null)
  }

  posthogPromise ??= import('posthog-js').then(({ default: posthog }) => {
    posthog.init(token, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '/_ocm',
      ui_host: 'https://eu.posthog.com',
      defaults: '2026-01-30',
      capture_exceptions: false,
      capture_performance: false,
      autocapture: false,
      disable_session_recording: true,
      debug: false,
    })
    return posthog
  })

  return posthogPromise
}

export function captureEvent(event: string, properties?: AnalyticsEventProperties) {
  void loadPosthog().then((posthog) => posthog?.capture(event, properties))
}

export function initializeAnalytics() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_TOKEN) {
    return
  }

  const initialize = () => void loadPosthog()

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(initialize, { timeout: 2000 })
  } else {
    window.setTimeout(initialize, 1)
  }
}
