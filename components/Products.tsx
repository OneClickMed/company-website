'use client'
import { useState } from 'react'

type ProductKey = 'digital' | 'beta'

const SparkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M11.5 3C11.5 3 12.8 6.7 14.5 8.5C16.3 10.2 20 11.5 20 11.5C20 11.5 16.3 12.8 14.5 14.5C12.8 16.3 11.5 20 11.5 20C11.5 20 10.2 16.3 8.5 14.5C6.7 12.8 3 11.5 3 11.5C3 11.5 6.7 10.2 8.5 8.5C10.2 6.7 11.5 3 11.5 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M5 20V19C5 15.134 8.134 12 12 12C15.866 12 19 15.134 19 19V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
  </svg>
)

const CloudIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M20 17.6C21.5 17 23 15.7 23 13C23 9 19.7 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.3 8 1 9 1 13C1 15.7 2.5 17 4 17.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M14 12C14 9.5 11.7 7 8.9 7H7.1C4.3 7 2 9.2 2 12C2 14.4 3.7 16.4 6 16.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M10 12C10 14.5 12.3 17 15.1 17H16.9C19.7 17 22 14.8 22 12C22 9.6 20.3 7.6 18 7.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M22 8.9C22 10.4 21.4 11.9 20.3 12.9C17.9 15.5 15.5 18.2 13 20.6C12.4 21.2 11.5 21.1 10.9 20.6L3.7 12.9C1.4 10.7 1.4 7 3.7 4.7C5.9 2.4 9.5 2.4 11.7 4.7L12 5L12.3 4.7C13.3 3.6 14.8 3 16.3 3C17.8 3 19.3 3.6 20.3 4.7C21.4 5.8 22 7.3 22 8.9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
)

const MsgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M3 20.3V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15C21 16.1 20.1 17 19 17H8C7.4 17 6.8 17.3 6.4 17.8L4.1 20.7C3.7 21.1 3 20.9 3 20.3Z" stroke="currentColor" strokeWidth="1.7" />
  </svg>
)

const DigitalLogoIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M5 15.5C5 9.8 9.8 5 15.5 5H19v3.5C19 14.2 14.2 19 8.5 19H5v-3.5Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5.5 18.5L15 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const BetaLogoIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M12 21S4 16.6 4 9.9C4 6.6 6.5 4 9.7 4C11 4 12 4.6 12 4.6S13 4 14.3 4C17.5 4 20 6.6 20 9.9C20 16.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8.2 10.8H10.7L12 8.4L13.6 13.9L15 10.8H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const products = {
  digital: {
    eyebrow: 'Track your data',
    title: 'Digital Health',
    subtitle: 'A comprehensive solution built for healthcare organizations.',
    description: 'Centralise patient data, enhance communication across departments, and support advanced diagnostics within a scalable and secure system.',
    stat: '72%',
    statText: 'Fewer duplicate patient profiles after migration',
    summary: 'Our platform streamlines operations, reduces admin tasks, and gives care teams real-time data for better decisions.',
    tint: 'bg-light-yellow',
    image: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/digital-health-1024x810.png',
    imageAlt: 'Digital Health Platform',
    logo: '/digital-health-logo.png',
    contentClass: 'lg:max-w-[370px]',
    imageClass: 'hidden lg:block absolute bottom-0 left-[43%] w-[68%] max-w-[700px] rounded-tl-[18px]',
    mobileImageClass: 'mt-10 w-full rounded-[18px] lg:hidden',
    bubbleClass: 'bg-light-yellow',
    bubblePosition: 'right-[-170px] bottom-[-240px] w-[620px] h-[620px]',
    features: [
      { icon: <UserIcon />, text: 'Unified patient profiles' },
      { icon: <CloudIcon />, text: 'Cloud-based data storage' },
      { icon: <LinkIcon />, text: 'Secure data sharing' },
      { icon: <SparkIcon />, text: 'AI-powered diagnostics' },
    ],
  },
  beta: {
    eyebrow: 'Care in your pocket',
    title: 'Beta Health',
    subtitle: 'Smart care. Real time. Anywhere.',
    description: 'An innovative mobile platform that enables healthcare organizations to extend care beyond the clinic, providing patients with AI powered health tracking, real time data sharing, and seamless connectivity with their care providers.',
    stat: '83%',
    statText: 'Higher patient engagement through connected, live care',
    summary: 'Our beta app connects patients and providers through smart tracking and secure data sharing.',
    tint: 'bg-blush-pink',
    image: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/beta-health-894x1024.png',
    imageAlt: 'Beta Health App',
    logo: '/beta-health-logo.png',
    contentClass: 'lg:max-w-[460px]',
    imageClass: 'hidden lg:block absolute bottom-[-120px] right-[-8px] w-[40%] max-w-[410px]',
    mobileImageClass: 'mx-auto mt-10 w-[70%] max-w-[320px] lg:hidden',
    bubbleClass: 'bg-blush-pink',
    bubblePosition: 'right-[-120px] bottom-[-250px] w-[560px] h-[560px]',
    features: [
      { icon: <SparkIcon />, text: 'AI-powered health tracking' },
      { icon: <CloudIcon />, text: 'Secure remote data sharing' },
      { icon: <HeartIcon />, text: 'Direct provider connectivity' },
      { icon: <MsgIcon />, text: 'In-app consultations' },
    ],
  },
} satisfies Record<ProductKey, {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  stat: string
  statText: string
  summary: string
  tint: string
  image: string
  imageAlt: string
  logo: string
  contentClass: string
  imageClass: string
  mobileImageClass: string
  bubbleClass: string
  bubblePosition: string
  features: Array<{ icon: JSX.Element; text: string }>
}>

export default function Products() {
  const [activeTab, setActiveTab] = useState<ProductKey>('digital')
  const product = products[activeTab]
  const sideCards = (
    <aside className="grid grid-cols-1 gap-5">
      <div className={`${product.tint} min-h-[245px] rounded-[16px] rounded-tr-[150px] p-8 flex flex-col items-center justify-center text-center`}>
        <div className="font-accent text-[clamp(56px,7vw,82px)] leading-none text-black">{product.stat}</div>
        <p className="mt-5 max-w-[240px] text-[16px] leading-[1.25] text-black">{product.statText}</p>
      </div>
      <div className={`${product.tint} min-h-[245px] rounded-[16px] p-8 flex items-center justify-center text-center`}>
        <p className="max-w-[250px] text-[16px] leading-[1.35] text-black">{product.summary}</p>
      </div>
    </aside>
  )

  return (
    <section className="px-5 py-20 md:px-10">
      <div className="mx-auto max-w-content">
        <h2 className="mx-auto max-w-[760px] text-center font-body text-[clamp(34px,4vw,52px)] font-medium leading-[1.05] text-black">
          AI-powered tools for <b className="font-accent">smarter</b>, connected healthcare operations.
        </h2>

        <div className="mx-auto mb-10 mt-9 grid w-fit grid-cols-2 overflow-hidden rounded-full border border-navy bg-white p-0">
          {(['digital', 'beta'] as const).map((tab) => {
            const isActive = activeTab === tab
            const activeBg = tab === 'digital' ? 'bg-light-yellow' : 'bg-blush-pink'
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`min-w-[200px] rounded-full px-8 py-4 font-body text-base font-semibold transition-all ${
                  isActive ? `${activeBg} text-navy` : 'bg-white text-black hover:bg-ice-blue'
                }`}
              >
                {tab === 'digital' ? 'Digital Health' : 'Beta Health'}
              </button>
            )
          })}
        </div>

        <div className={`grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)] ${activeTab === 'beta' ? 'lg:grid-cols-[minmax(260px,1fr)_minmax(0,3fr)]' : ''}`}>
          {activeTab === 'beta' && sideCards}

          <article className="relative min-h-[540px] overflow-hidden rounded-[16px] bg-navy p-10 text-white md:p-14">
            <div className={`absolute rounded-full ${product.bubbleClass} ${product.bubblePosition}`} />
            <div className={`relative z-10 ${product.contentClass}`}>
              <p className="mb-5 text-[15px] font-extrabold uppercase tracking-[0.06em] text-light-yellow">
                {product.eyebrow}
              </p>
              <div className="mb-5">
                <img
                  src={product.logo}
                  alt={`${product.title} logo`}
                  className="h-auto max-h-12 w-auto max-w-[260px]"
                />
              </div>
              <p className="mb-8 text-base font-extrabold leading-[1.45] text-white">{product.subtitle}</p>
              <p className="mb-9 text-[17px] leading-[1.55] text-white/85">{product.description}</p>
              <ul className="flex flex-col gap-4 text-[17px] text-white">
                {product.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-4">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <img src={product.image} alt={product.imageAlt} className={product.mobileImageClass} />
            </div>
            <img src={product.image} alt={product.imageAlt} className={product.imageClass} />
          </article>

          {activeTab === 'digital' && sideCards}
        </div>
      </div>
    </section>
  )
}
