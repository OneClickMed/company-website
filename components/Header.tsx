'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import posthog from 'posthog-js'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between gap-6 px-6 md:px-10">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/Logo.svg"
            alt="OneClickMed"
            width={160}
            height={40}
            priority
            style={{ width: 'auto', height: '40px' }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-md hover:bg-ice-blue hover:text-navy transition-all flex items-center gap-1">
              Product <span className="text-xs">▾</span>
            </button>
            <div className={`absolute top-full left-0 bg-white border border-navy/[0.12] rounded-md p-2 min-w-[220px] shadow-brand-menu transition-all duration-200 ${productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <Link href="/digital-health" className="block rounded-md px-4 py-2 font-body text-sm font-medium text-black transition-all hover:bg-ice-blue hover:text-navy">
                Digital Health
              </Link>
              <Link href="/beta-health" className="mt-1 block rounded-md px-4 py-2 font-body text-sm font-medium text-black transition-all hover:bg-ice-blue hover:text-navy">
                Beta Health
              </Link>
            </div>
          </div>
          <Link href="/#solutions" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-md hover:bg-ice-blue hover:text-navy transition-all">Solutions</Link>
          <Link href="/resources" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-md hover:bg-ice-blue hover:text-navy transition-all">Resources</Link>
          <Link href="/#about" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-md hover:bg-ice-blue hover:text-navy transition-all">About</Link>
          <Link href="/#contact" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-md hover:bg-ice-blue hover:text-navy transition-all">Contact</Link>
        </nav>

        <Link
          href="/book-demo"
          className="hidden md:inline-flex items-center gap-2 px-[20px] py-[6px] rounded-[6px] bg-salmon-red text-white text-sm font-semibold font-body hover:bg-salmon-red/90 hover:-translate-y-px transition-all"
          onClick={() => posthog.capture('book_demo_clicked', { location: 'header_desktop' })}
        >
          Book a Demo
        </Link>

        <button
          type="button"
          className="relative z-[60] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="var(--navy-blue)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300 ${
          mobileOpen ? 'max-h-[420px] border-t border-navy/[0.08] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2 px-5 py-4">
          {[
            { label: 'Digital Health', href: '/digital-health' },
            { label: 'Beta Health', href: '/beta-health' },
            { label: 'Resources', href: '/resources' },
            { label: 'About', href: '/#about' },
            { label: 'Contact', href: '/#contact' },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-black px-4 py-2 rounded-md hover:bg-ice-blue"
              onClick={() => {
                setMobileOpen(false)
                posthog.capture('nav_link_clicked', { label: item.label, location: 'mobile_menu' })
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book-demo"
            className="mt-2 inline-flex justify-center items-center gap-2 px-[20px] py-[6px] rounded-[6px] bg-salmon-red text-white text-sm font-semibold"
            onClick={() => {
              setMobileOpen(false)
              posthog.capture('book_demo_clicked', { location: 'header_mobile' })
            }}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  )
}
