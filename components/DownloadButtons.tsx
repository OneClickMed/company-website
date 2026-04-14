'use client'

import Image from 'next/image'
import posthog from 'posthog-js'

interface DownloadButtonsProps {
  align?: 'left' | 'center'
  mode?: 'one_link' | 'store_badges'
}

const ONE_LINK_URL = 'https://onelink.to/5c3b4m'
const APP_STORE_URL = 'https://apps.apple.com/us/app/beta-health/id6748623139'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=ng.oneclickmeds.patients_app'

export default function DownloadButtons({ align = 'left', mode = 'one_link' }: DownloadButtonsProps) {
  if (mode === 'store_badges') {
    return (
      <div
        className={`mb-4 flex items-center gap-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          onClick={() => posthog.capture('beta_health_download_clicked', { source: 'app_store_badge' })}
        >
          <Image
            src="/assets/img/others/appstore.png"
            alt="Download on the App Store"
            width={120}
            height={70}
          />
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          onClick={() => posthog.capture('beta_health_download_clicked', { source: 'play_store_badge' })}
        >
          <Image
            src="/assets/img/others/playstore.png"
            alt="Get it on Google Play"
            width={135}
            height={90}
          />
        </a>
      </div>
    )
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <a
        href={ONE_LINK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Beta Health"
        className="inline-flex min-h-[38px] items-center gap-2 rounded-[6px] bg-black px-5 py-0.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-black/90"
        onClick={() => posthog.capture('beta_health_download_clicked', { source: 'one_link' })}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 4V15M12 15L7.5 10.5M12 15L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Download Beta Health
      </a>
    </div>
  )
}
