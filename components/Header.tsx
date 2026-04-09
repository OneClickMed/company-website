'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy/[0.08]">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between gap-6 px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/Logo.svg" alt="OneClickMed" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="#" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-lg hover:bg-ice-blue hover:text-navy transition-all">About</Link>
          <Link href="/resources" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-lg hover:bg-ice-blue hover:text-navy transition-all">Resources</Link>

          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-lg hover:bg-ice-blue hover:text-navy transition-all flex items-center gap-1">
              Products <span className="text-xs">▾</span>
            </button>
            <div className={`absolute top-[calc(100%+8px)] left-0 bg-white border border-navy/[0.12] rounded-xl p-2 min-w-[220px] shadow-brand-menu transition-all duration-200 ${productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <Link href="#" className="block rounded-lg bg-navy px-4 py-3 transition-all hover:bg-cobalt">
                <img src="/digital-health-logo.png" alt="Digital Health" className="h-5 w-auto" />
              </Link>
              <Link href="#" className="mt-2 block rounded-lg bg-navy px-4 py-3 transition-all hover:bg-cobalt">
                <img src="/beta-health-logo.png" alt="Beta Health" className="h-5 w-auto" />
              </Link>
            </div>
          </div>

          <Link href="#" className="font-body text-[15px] font-medium text-black px-4 py-2 rounded-lg hover:bg-ice-blue hover:text-navy transition-all">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-[22px] py-[10px] rounded-[10px] bg-salmon-red text-white text-sm font-semibold font-body hover:bg-salmon-red/90 hover:-translate-y-px hover:shadow-brand-blue transition-all"
        >
          Book a Demo
        </Link>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="var(--navy-blue)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-navy/[0.08] px-5 py-4 flex flex-col gap-2 bg-white">
          {[
            { label: 'About', href: '#' },
            { label: 'Resources', href: '/resources' },
            { label: 'Products', href: '#' },
            { label: 'Contact', href: '#' },
          ].map(item => (
            <Link key={item.label} href={item.href} className="text-[15px] font-medium text-black px-4 py-2 rounded-lg hover:bg-ice-blue">{item.label}</Link>
          ))}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center items-center gap-2 px-[22px] py-[10px] rounded-[10px] bg-salmon-red text-white text-sm font-semibold"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  )
}
