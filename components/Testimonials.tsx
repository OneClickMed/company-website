'use client'

import { useRef, useState, useCallback } from 'react'
import testimonialsData from '@/data/testimonials.json'

type TestimonialItem = {
  role: string
  name: string
  initials: string
  pullQuote: string
  testimonial: string
}

const testimonials: TestimonialItem[] = testimonialsData

// ─── Desktop: editorial split layout ───────────────────────────────────────

function DesktopTestimonials() {
  const [active, setActive] = useState(0)
  const featured = testimonials[active]
  const go = (next: number) => setActive((next + testimonials.length) % testimonials.length)

  return (
    <div className="hidden md:block">
      <div className="relative overflow-hidden rounded-[22px] bg-salmon-red p-10">
        {/* decorative quote mark */}
        <span
          className="absolute top-2 left-5 text-white/10 select-none pointer-events-none"
          style={{ fontSize: 180, lineHeight: 1, fontFamily: 'Georgia, serif' }}
          aria-hidden
        >
          &ldquo;
        </span>

        <div className="relative z-10">
          {/* Pull quote — large, bold */}
          <p
            key={`pull-${active}`}
            className="animate-fade-in font-body leading-[1.3] font-semibold tracking-tight text-white mb-5"
            style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', maxWidth: '620px' }}
          >
            {featured.pullQuote}
          </p>

          {/* Thin divider */}
          <div className="w-10 mb-5" style={{ height: '1.5px', background: 'rgba(255,255,255,0.35)' }} />

          {/* Full testimonial — smaller, muted */}
          <p
            key={`body-${active}`}
            className="animate-fade-in whitespace-pre-line font-body font-medium leading-[1.75] text-white"
            style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}
          >
            {featured.testimonial}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex items-center gap-3 pt-6">
          <div className="h-10 w-10 shrink-0 rounded-full bg-white/10 text-[12px] font-semibold text-white/80 flex items-center justify-center">
            {featured.initials}
          </div>
          <div>
            <p className="font-body text-[15px] font-bold text-white">{featured.name}</p>
            <p className="mt-0.5 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-ice-blue">
              {featured.role}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-col items-start gap-2">
        <div className="flex gap-5">
          <button
            onClick={() => go(active - 1)}
            aria-label="Previous testimonial"
            className="font-body text-[42px] font-light leading-none text-black transition-all hover:text-black/80"
          >
            ←
          </button>
          <button
            onClick={() => go(active + 1)}
            aria-label="Next testimonial"
            className="font-body text-[42px] font-light leading-none text-black transition-all hover:text-black/80"
          >
            →
          </button>
        </div>
        <div className="flex items-center gap-[6px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="h-[7px] rounded-full transition-all duration-200"
              style={{
                width: i === active ? 22 : 7,
                background: i === active ? 'rgb(var(--black-rgb))' : 'rgb(var(--black-rgb) / 0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Mobile: full-width stage + swipe + dots + arrows ───────────────────────

function MobileTestimonials() {
  const [cur, setCur] = useState(0)
  const [fading, setFading] = useState(false)
  const touchX = useRef(0)
  const animating = useRef(false)

  const go = useCallback((next: number) => {
    if (animating.current) return
    animating.current = true
    setFading(true)
    setTimeout(() => {
      setCur((next + testimonials.length) % testimonials.length)
      setFading(false)
      animating.current = false
    }, 180)
  }, [])

  const item = testimonials[cur]

  return (
    <div className="md:hidden">
      {/* Stage */}
      <div
        className="relative overflow-hidden rounded-[20px] bg-salmon-red p-7"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(dx < 0 ? cur + 1 : cur - 1)
        }}
      >
        <span
          className="absolute top-1 left-4 text-white/10 select-none pointer-events-none"
          style={{ fontSize: 110, lineHeight: 1, fontFamily: 'Georgia, serif' }}
          aria-hidden
        >
          &ldquo;
        </span>

        {/* Pull quote — large */}
        <p
          className="font-body text-[19px] font-semibold leading-[1.35] tracking-tight text-white relative z-10 transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {item.pullQuote}
        </p>

        {/* Thin divider */}
        <div
          className="my-4 w-8 transition-opacity duration-200"
          style={{ height: '1.5px', background: 'rgba(255,255,255,0.35)', opacity: fading ? 0 : 1 }}
        />

        {/* Full testimonial — muted */}
        <p
          className="font-body text-[14px] font-medium leading-[1.75] text-white/75 whitespace-pre-line relative z-10 transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {item.testimonial}
        </p>

        <div
          className="mt-6 flex items-center gap-3 pt-5 transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div className="h-9 w-9 shrink-0 rounded-full bg-white/10 text-[11px] font-semibold text-white/80 flex items-center justify-center">
            {item.initials}
          </div>
          <div>
            <p className="font-body text-[14px] font-bold text-white">{item.name}</p>
            <p className="mt-0.5 font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-ice-blue">
              {item.role}
            </p>
          </div>
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="mt-5 flex flex-col items-start gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => go(cur - 1)}
            aria-label="Previous"
            className="font-body text-[42px] font-light leading-none text-black transition-all hover:text-black/80"
          >
            ←
          </button>
          <button
            onClick={() => go(cur + 1)}
            aria-label="Next"
            className="font-body text-[42px] font-light leading-none text-black transition-all hover:text-black/80"
          >
            →
          </button>
        </div>
        <div className="flex items-center gap-[6px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="h-[7px] rounded-full transition-all duration-200"
              style={{
                width: i === cur ? 22 : 7,
                background: i === cur ? 'rgb(var(--black-rgb))' : 'rgb(var(--black-rgb) / 0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-content">
        <div className="mb-10 max-w-[760px]">
          <p className="mb-4 font-body text-[15px] font-medium uppercase tracking-[0.04em] text-black">
            Testimonials
          </p>
          <h2 className="font-body text-[clamp(36px,4vw,44px)] font-normal leading-[1.08] text-black">
            Trusted by <b className="font-accent text-black">Healthcare Teams</b>
          </h2>
          <p className="mt-5 max-w-[560px] font-body text-[15px] leading-[1.55] text-black">
            Real feedback from professionals using OneClickMed across hospital departments.
          </p>
        </div>

        <DesktopTestimonials />
        <MobileTestimonials />
      </div>
    </section>
  )
}
