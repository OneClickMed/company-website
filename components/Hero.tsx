'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import DownloadButtons from './DownloadButtons'

export default function Hero() {
  const [activeCta, setActiveCta] = useState<'beta' | 'digital'>('beta')

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCta((currentCta) => (currentCta === 'beta' ? 'digital' : 'beta'))
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-start px-6 py-24 text-left md:items-center md:px-10 md:py-32 md:text-center">
      <h1 className="font-body  text-[clamp(32px,5vw,72px)] font-extrabold leading-[1.05] max-w-[900px] text-navy">
        A Digital Health Platform That{' '}
        <b className="font-accent text-navy">Simplifies</b> Care
      </h1>
      <h2 className="font-body text-[clamp(18px,3vw,26px)] font-semibold  mt-4 ">
        Streamline workflows. Simplify records. Share data securely.
      </h2>
      <p className="mt-5   max-w-[560px] leading-[1.7]">
        OneClickMed helps hospitals and clinics work together more efficiently. Our AI-supported platform reduces queues, removes repeat registrations, and ensures every provider sees the same up-to-date patient record.
      </p>
      <div className="mt-9 flex min-h-[96px] w-full max-w-[520px] items-center justify-start py-4 md:justify-center md:px-4">
        {activeCta === 'beta' ? (
          <div>
            <p className="mb-2 text-left text-xs font-bold uppercase tracking-[0.12em] text-navy/60 md:text-center">
              Download Beta Health
            </p>
            <DownloadButtons align="center" />
          </div>
        ) : (
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[58px] items-center gap-2 rounded-[14px] bg-salmon-red px-7 py-4 font-body text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-salmon-red/90 hover:shadow-brand-blue"
          >
            <svg width="14" height="14" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
            </svg>
            Book a Demo
          </Link>
        )}
      </div>
    </section>
  )
}
