'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import posthog from 'posthog-js'

const socialLinks = [
  {
    label: 'X',
    href: 'https://x.com/oneclickmed_',
    icon: (
      <svg viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/oneclickmedng',
    icon: (
      <svg viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/oneclick_med/',
    icon: (
      <svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://ng.linkedin.com/company/oneclick-med',
    icon: (
      <svg viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@OneClick-Med',
    icon: (
      <svg viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
    ),
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const resourceLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-condition' },
    { label: 'Frequently Asked Questions', href: '/#faq' },
  ]

  const quickLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Digital Health', href: '/digital-health' },
    { label: 'Beta Health', href: '/beta-health' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      posthog.capture('newsletter_subscribed', {
        email_domain: email.split('@')[1] ?? '',
      })
    }
  }

  return (
    <footer className="bg-navy px-10 pb-10 pt-16 text-white/70">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/Logo White.svg"
              alt="OneClickMed"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className="my-4 max-w-[300px] text-sm leading-[1.7]">
              Be the first to hear about new features, product releases, and digital health updates from OneClick-Med.
            </p>
            <form className="flex max-w-[320px] gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 rounded-md border border-white/15 bg-white/[0.08] px-3.5 py-2.5 font-body text-sm text-white placeholder-white/40 focus:border-salmon-red focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-[6px] bg-salmon-red px-4 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-salmon-red"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <p className="mb-4 font-body text-sm font-bold tracking-[0.02em] text-white">
              Resources
            </p>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-sm font-bold tracking-[0.02em] text-white">
              Contact Us
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-[13px]">
                <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" className="mt-0.5 flex-shrink-0 text-white/50">
                  <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"/>
                </svg>
                <div>
                  <div className="mb-0.5 text-[11px] font-semibold text-white/80">Address</div>
                  Plot 901, Katampe, Federal Capital Territory, Abuja, Nigeria
                </div>
              </div>

              <div className="flex items-start gap-2 text-[13px]">
                <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" className="mt-0.5 flex-shrink-0 text-white/50">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                </svg>
                <div>
                  <div className="mb-0.5 text-[11px] font-semibold text-white/80">Phone</div>
                  (+234) 813 836 4425
                </div>
              </div>

              <div className="flex items-start gap-2 text-[13px]">
                <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" className="mt-0.5 flex-shrink-0 text-white/50">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                </svg>
                <div>
                  <div className="mb-0.5 text-[11px] font-semibold text-white/80">Email</div>
                  info@oneclickmed.com
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-sm font-bold tracking-[0.02em] text-white">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-[13px]">© 2026 OneClickMed. All Rights Reserved.</p>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit OneClickMed on ${social.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.08] transition-all hover:border-salmon-red hover:bg-salmon-red"
                onClick={() =>
                  posthog.capture('social_link_clicked', { platform: social.label })
                }
              >
                <svg className="h-3.5 w-3.5 fill-white" viewBox={social.icon.props.viewBox}>
                  {social.icon.props.children}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}