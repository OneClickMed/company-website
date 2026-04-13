'use client'

import posthog from 'posthog-js'

interface DownloadButtonsProps {
  align?: 'left' | 'center'
}

export default function DownloadButtons({ align = 'left' }: DownloadButtonsProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <a
        href="https://onelink.to/5c3b4m"
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
