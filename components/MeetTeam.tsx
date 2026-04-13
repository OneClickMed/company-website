'use client'

import { useEffect, useRef, useState } from 'react'

type TeamMember = {
  name: string
  role: string
  accent: string
  frameClass: string
  cardTint: string
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Reagan Rowland',
    role: 'CEO',
    accent: 'bg-navy',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[64px] rounded-bl-[18px]',
    cardTint: 'bg-[#f5f8ff]',
  },
  {
    name: 'Theodora Isola',
    role: 'COO',
    accent: 'bg-light-yellow',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[64px]',
    cardTint: 'bg-[#fffef5]',
    image:
      '',
  },
  {
    name: 'Ajomale Wale',
    role: 'CBO',
    accent: 'bg-salmon-red',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[64px] rounded-bl-[18px]',
    cardTint: 'bg-[#fff8f5]',
  },
  {
    name: 'Nelson Fai',
    role: 'CTO',
    accent: 'bg-cobalt',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[64px]',
    cardTint: 'bg-[#f5f8ff]',
    image: ""
  },
  {
    name: 'Kingsley Usuro',
    role: 'Senior Lead Developer',
    accent: 'bg-ice-blue',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[64px] rounded-bl-[18px]',
    cardTint: 'bg-[#f5fbff]',
  },
  {
    name: 'Anthony Ekpei',
    role: 'Senior Lead Developer',
    accent: 'bg-salmon-red',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[64px]',
    cardTint: 'bg-[#fff8f5]',
  },
  {
    name: 'Oluwatayo Emmanuel',
    role: 'Developer',
    accent: 'bg-navy',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[64px]',
    cardTint: 'bg-[#f5f8ff]',
  },
  {
    name: 'Roseline Akpa',
    role: 'CMO',
    accent: 'bg-cobalt',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[64px] rounded-bl-[18px]',
    cardTint: 'bg-[#f5f8ff]',
  },
  {
    name: 'Faith Taiwo',
    role: 'Product Manager',
    accent: 'bg-ice-blue',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[18px] rounded-bl-[64px]',
    cardTint: 'bg-[#f5fbff]',
  },
  {
    name: 'Faderera Farombi',
    role: 'QA',
    accent: 'bg-navy',
    frameClass: 'rounded-tl-[18px] rounded-tr-[18px] rounded-br-[64px] rounded-bl-[18px]',
    cardTint: 'bg-[#f5f8ff]',
  },
]

function TeamPortrait({
  image,
  accent,
  frameClass,
  name,
}: {
  image?: string
  accent: string
  frameClass: string
  name: string
}) {
  return (
    <div className={`relative h-[310px] overflow-hidden ${accent} ${frameClass}`}>
      {image ? (
        <img
          src={image}
          alt={name}
          className="absolute inset-x-0 bottom-0 mx-auto h-[292px] w-[88%] rounded-t-[26px] object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : null}
    </div>
  )
}

export default function MeetTeam() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateProgress = () => {
      const cardWidth = track.firstElementChild instanceof HTMLElement
        ? track.firstElementChild.offsetWidth + 16
        : 1
      setActiveIndex(Math.min(teamMembers.length - 1, Math.round(track.scrollLeft / cardWidth)))
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
    <section className="flex min-h-screen items-center bg-white px-6 py-12 md:px-10">
      <div className="mx-auto w-full max-w-content">
        <div className="max-w-[580px]">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.1em] text-cobalt">
            Meet Our Team
          </p>
          <h2 className="mt-3 font-body text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-black">
            The people building{' '}
            <span className="font-accent italic">OneClickMed</span>
          </h2>
          <p className="mt-3 max-w-[480px] font-body text-[14px] font-medium leading-[1.55] text-black/50">
            Changing healthcare one click at a time.
          </p>
        </div>

        <div
          ref={trackRef}
          className="carousel-track -mx-6 mt-8 flex gap-4 overflow-x-auto px-6 md:mx-0 md:px-0"
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className={`group min-w-[330px] max-w-[330px] flex-shrink-0 overflow-hidden rounded-[24px] border border-black/5 ${member.cardTint} transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-menu`}
            >
              <TeamPortrait
                image={member.image}
                accent={member.accent}
                frameClass={member.frameClass}
                name={member.name}
              />
              <div className="px-6 pb-6 pt-5">
                <h3 className="font-body text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
                  {member.name}
                </h3>
                <p className="mt-2 font-body text-[12px] font-bold uppercase tracking-[0.1em] text-black/45">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`h-[4px] w-7 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-cobalt' : 'bg-[#d9dee8]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
