'use client'

import Link from 'next/link'
import posthog from 'posthog-js'

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 py-24 text-left md:items-center md:px-10 md:py-32 md:text-center">
      <h1 className="font-body  text-[clamp(32px,5vw,72px)] font-extrabold leading-[1.05] max-w-[900px] text-navy">
        A Digital Health Platform That <b className="font-accent text-navy">Simplifies</b> Care
      </h1>
      <h2 className="font-body text-[clamp(18px,3vw,26px)] font-semibold  mt-4 ">
        One platform. Connected care. Better outcomes.
      </h2>
      <p className="mt-5   max-w-[560px] leading-[1.7]">
        Our digital health solutions help providers deliver better care, connect patients to healthcare services, and give individuals simple ways to manage their health.
      </p>
      <div className="mt-9 flex w-full max-w-[560px] flex-col items-start gap-3 md:flex-row md:justify-center">
        <Link
          href="/book-demo"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-[8px] bg-navy px-6 py-2 font-body text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-cobalt"
          onClick={() => posthog.capture('hero_book_demo_clicked', { location: 'hero' })}
        >
          Book a Demo
        </Link>
        <Link
          href="https://onelink.to/5c3b4m"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-[8px] border border-navy bg-white px-6 py-2 font-body text-sm font-bold text-navy transition-all hover:-translate-y-px hover:bg-ice-blue"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 4V15M12 15L7.5 10.5M12 15L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Download Beta Health
        </Link>
      </div>
    </section>
  )
}
