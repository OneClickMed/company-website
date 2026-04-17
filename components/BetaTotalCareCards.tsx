'use client'

import { useEffect, useRef, useState } from 'react'

type Feature = {
  title: string
  description: string
  icon: string
  tone: string
}

const features: Feature[] = [
  {
    title: 'Ask AI - Your Personal Health Assistant',
    description:
      'A medical-grade assistant for private answers to symptoms, medication questions, and next-step guidance.',
    icon: 'AI',
    tone: 'bg-navy text-white md:col-span-2',
  },
  {
    title: 'Digital Health Passport',
    description:
      'Carry your verified medical identity and records so any partnered facility can access your profile quickly.',
    icon: 'ID',
    tone: 'bg-ice-blue text-black',
  },
  {
    title: 'Smart File Management - MediVault',
    description:
      'Store and organize lab results, prescriptions, and reports with secure retrieval and easy sharing.',
    icon: 'FM',
    tone: 'bg-beige text-black',
  },
  {
    title: 'One-Tap Emergency Care',
    description:
      'Book an ambulance in one tap and share critical health context with responders in real time.',
    icon: 'EC',
    tone: 'bg-salmon-red text-white',
  },
  {
    title: 'Prescription Reminders',
    description: 'Set smart reminders to stay consistent with medications and long-term treatment plans.',
    icon: 'RX',
    tone: 'bg-white text-black border border-black/10',
  },
  {
    title: 'Hospital Finder',
    description:
      'Locate verified facilities by distance and specialty when you need care quickly.',
    icon: 'HF',
    tone: 'bg-white text-black border border-black/10',
  },
  {
    title: 'Health and Wellness Tips',
    description: 'Receive practical daily insights tailored to your profile and care journey.',
    icon: 'WT',
    tone: 'bg-ice-blue text-black',
  },
]

const featureShapeClasses = [
  'rounded-[16px] md:rounded-tr-[64px]',
  'rounded-[16px] md:rounded-bl-[64px]',
  'rounded-[16px] md:rounded-tl-[52px]',
  'rounded-[16px] md:rounded-br-[52px]',
  'rounded-[16px] md:rounded-tl-[64px]',
  'rounded-[16px] md:rounded-tr-[52px]',
  'rounded-[16px] md:rounded-bl-[52px]',
  'rounded-[16px] md:rounded-br-[64px]',
]

export default function BetaTotalCareCards() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateProgress = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setActiveIndex(0)
        return
      }

      const cardsRow = track.firstElementChild
      const cardWidth =
        cardsRow?.firstElementChild instanceof HTMLElement
          ? cardsRow.firstElementChild.offsetWidth + 16
          : 1
      setActiveIndex(Math.min(features.length - 1, Math.round(track.scrollLeft / cardWidth)))
    }

    updateProgress()
    track.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      track.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <>
      <div
        ref={trackRef}
        className="carousel-track mt-10 -mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0"
      >
        <div className="flex gap-4 pb-2 snap-x snap-mandatory md:grid md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`w-[calc(100vw-5rem)] max-w-[360px] flex-shrink-0 snap-start flex min-h-[250px] flex-col justify-between p-7 md:w-auto md:max-w-none ${featureShapeClasses[index % featureShapeClasses.length]} ${feature.tone}`}
            >
              <div>
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-xs font-bold ${feature.tone.includes('text-white')
                      ? 'bg-white/15 text-white'
                      : 'bg-navy/10 text-navy'
                    }`}
                >
                  {feature.icon}
                </span>
                <h3 className="mt-5 text-[22px] font-extrabold leading-[1.2]">{feature.title}</h3>
                <p className={`mt-3 text-sm font-medium leading-[1.65] ${feature.tone.includes('text-white') ? 'text-white/80' : 'text-black/65'}`}>
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-2 md:hidden">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`h-[4px] w-7 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-cobalt' : 'bg-[#d9dee8]'
            }`}
          />
        ))}
      </div>
    </>
  )
}
