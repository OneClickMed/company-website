'use client'
import { useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M26.9167 17H17M17 17L21.25 21.25M17 17L21.25 12.75" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M26.9154 8.5V6.25C26.9154 5.14543 26.0199 4.25 24.9154 4.25H9.08203C7.97746 4.25 7.08203 5.14543 7.08203 6.25V27.75C7.08203 28.8546 7.97746 29.75 9.08203 29.75H24.9154C26.0199 29.75 26.9154 28.8546 26.9154 27.75V25.5" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'One-Time Registration (OTR)',
    desc: 'One-Time Registration gives you quick, secure access without repeated entry.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M19.832 16.9965C19.832 13.4665 16.5497 9.9165 12.5463 9.9165C12.0721 9.9165 10.509 9.91651 10.1177 9.91651C6.09396 9.91651 2.83203 13.0863 2.83203 16.9965C2.83203 20.3659 5.25414 23.1856 8.4987 23.901C9.0194 24.0158 9.56129 24.0764 10.1177 24.0764" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.168 16.9967C14.168 20.5266 17.4503 24.0767 21.4537 24.0767C21.9279 24.0767 23.491 24.0767 23.8823 24.0767C27.906 24.0767 31.168 20.9068 31.168 16.9967C31.168 13.6273 28.7459 10.8076 25.5013 10.0922C24.9806 9.97735 24.4387 9.91672 23.8823 9.91672" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'AI-Driven EHR System',
    desc: 'Easily manage all your medical records in one secure, connected system.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M16.9987 31.1668C24.8227 31.1668 31.1654 24.8242 31.1654 17.0002C31.1654 9.17613 24.8227 2.8335 16.9987 2.8335C9.17466 2.8335 2.83203 9.17613 2.83203 17.0002C2.83203 24.8242 9.17466 31.1668 16.9987 31.1668Z" stroke="var(--salmon-red)" strokeWidth="2.5" strokeLinecap="round"/><path d="M11.332 16.9998H22.6654M11.332 16.9998V9.9165M11.332 16.9998V24.0832M22.6654 16.9998V24.0832M22.6654 16.9998V9.9165" stroke="var(--salmon-red)" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    title: 'Emergency Care (Ambulance Services)',
    desc: 'Get fast, reliable emergency help with one simple tap.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M21.25 5.66683V2.8335M21.25 5.66683V8.50016M21.25 5.66683H14.875M4.25 14.1668V26.9168C4.25 28.4817 5.51853 29.7502 7.08333 29.7502H26.9167C28.4815 29.7502 29.75 28.4817 29.75 26.9168V14.1668H4.25Z" stroke="var(--salmon-red)" strokeWidth="2" strokeLinecap="round"/><path d="M4.25 14.1665V8.49984C4.25 6.93503 5.51853 5.6665 7.08333 5.6665H9.91667" stroke="var(--salmon-red)" strokeWidth="2" strokeLinecap="round"/><path d="M9.91797 2.8335V8.50016" stroke="var(--salmon-red)" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: 'Prescription Reminder',
    desc: 'Get gentle reminders to take your medicine on time for steady, effective care.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M24.082 24.0835L29.7487 29.7502" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round"/><path d="M4.25 15.5833C4.25 21.8426 9.32411 26.9167 15.5833 26.9167C18.7184 26.9167 21.5561 25.6437 23.6079 23.5865C25.6525 21.5365 26.9167 18.7075 26.9167 15.5833C26.9167 9.32411 21.8426 4.25 15.5833 4.25C9.32411 4.25 4.25 9.32411 4.25 15.5833Z" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round"/></svg>,
    title: 'Hospital Finder',
    desc: 'Find nearby hospitals and clinics quickly with our built-in location finder.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M7.08203 18.4165L12.7487 24.0832L26.9154 9.9165" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'AI-Driven Symptom Checker',
    desc: 'Understand your symptoms and track your health with our easy-to-use Symptom Checker.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M7.08203 29.75V6.25C7.08203 5.14543 7.97746 4.25 9.08203 4.25H24.9154C26.0199 4.25 26.9154 5.14543 26.9154 6.25V29.75L18.0802 24.0703C17.4214 23.6467 16.576 23.6467 15.9172 24.0703L7.08203 29.75Z" stroke="var(--salmon-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Appointment Booking',
    desc: 'Book & manage your appointments easily with our simple scheduling system.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M25.5 28.3333L30.9909 22.8424C31.1035 22.7299 31.1667 22.5773 31.1667 22.4181V14.75C31.1667 13.6454 30.2712 12.75 29.1667 12.75H28.9167C27.8121 12.75 26.9167 13.6454 26.9167 14.75V21.25" stroke="var(--salmon-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.4987 28.3333L3.00777 22.8424C2.89525 22.7299 2.83203 22.5773 2.83203 22.4181V14.75C2.83203 13.6454 3.72746 12.75 4.83203 12.75H5.08203C6.1866 12.75 7.08203 13.6454 7.08203 14.75V21.25" stroke="var(--salmon-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.3598 16.9998H14.6376V13.6943H11.332V8.97206H14.6376V5.6665H19.3598V8.97206H22.6654V13.6943H19.3598V16.9998Z" stroke="var(--salmon-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Remote Doctor Consultation',
    desc: 'Connect with qualified doctors from home for personalized care and expert medical guidance.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M19.9417 25.5H14.0583C13.727 25.5 13.4583 25.2314 13.4583 24.9V21.1417C13.4583 20.8103 13.1897 20.5417 12.8583 20.5417H9.1C8.76863 20.5417 8.5 20.273 8.5 19.9417V14.0583C8.5 13.727 8.76863 13.4583 9.1 13.4583H12.8583C13.1897 13.4583 13.4583 13.1897 13.4583 12.8583V9.1C13.4583 8.76863 13.727 8.5 14.0583 8.5H19.9417C20.273 8.5 20.5417 8.76863 20.5417 9.1V12.8583C20.5417 13.1897 20.8103 13.4583 21.1417 13.4583H24.9C25.2314 13.4583 25.5 13.727 25.5 14.0583V19.9417C25.5 20.273 25.2314 20.5417 24.9 20.5417H21.1417C20.8103 20.5417 20.5417 20.8103 20.5417 21.1417V24.9C20.5417 25.2314 20.273 25.5 19.9417 25.5Z" stroke="var(--salmon-red)" strokeWidth="2"/><circle cx="17" cy="17" r="14.1667" stroke="var(--salmon-red)" strokeWidth="2"/></svg>,
    title: 'First Aid Tips',
    desc: 'Get practical first aid tips and guidance to help you respond confidently in medical situations.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M31.1654 12.5548C31.1654 14.7457 30.3242 16.85 28.8219 18.4065C25.3639 21.991 22.0101 25.7285 18.4229 29.183C17.6006 29.9633 16.2962 29.9347 15.5095 29.1192L5.17485 18.4065C2.05109 15.1685 2.05109 9.94107 5.17485 6.70306C8.32932 3.43322 13.4683 3.43322 16.6227 6.70306L16.9984 7.09242L17.3738 6.70328C18.8863 5.13471 20.9461 4.25 23.0979 4.25C25.2496 4.25 27.3094 5.13463 28.8219 6.70306C30.3243 8.2598 31.1654 10.364 31.1654 12.5548Z" stroke="var(--salmon-red)" strokeWidth="3" strokeLinejoin="round"/></svg>,
    title: 'Health & Wellness Tips',
    desc: 'Stay informed with personalized health insights and wellness tips that help you make better choices.',
  },
]

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const displayedServices = [...services.slice(3), ...services.slice(0, 3)]

  const scroll = (dir: 'prev' | 'next') => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir === 'next' ? 340 : -340, behavior: 'smooth' })
  }

  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-content">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-[860px]">
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black">
              Our Services
            </p>
            <h2 className="mt-5 max-w-[650px] font-body text-[clamp(38px,5vw,58px)] font-extrabold leading-[1.03] tracking-[-0.04em] text-black">
              Tailored for <b className="font-accent italic text-black">Healthcare</b> Organizations
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[17px] font-medium leading-[1.55] text-black">
              Our services are designed for full-scale healthcare delivery and seamless institutional workflows.
              From one-time registration through to remote consultations, we support your organisation every
              step of the way. Explore how we assist you in managing operations more effectively
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#2a5fff] px-7 py-4 font-body text-[15px] font-bold text-white transition-all hover:-translate-y-px hover:bg-navy md:mb-1"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="carousel-track flex gap-7 overflow-x-auto pb-1"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {displayedServices.map((s, i) => (
              <div
                key={i}
                className="flex min-h-[310px] min-w-[calc(100vw-48px)] max-w-[calc(100vw-48px)] flex-shrink-0 flex-col items-center justify-center rounded-[10px] bg-beige px-9 py-10 text-center transition-all duration-300 hover:-translate-y-1 sm:min-w-[380px] sm:max-w-[380px] md:min-w-[306px] md:max-w-[306px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="mb-9 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-salmon-red/20 text-salmon-red [&_svg]:h-[34px] [&_svg]:w-[34px]">
                  {s.icon}
                </div>
                <h3 className="mb-6 font-body text-[17px] font-extrabold leading-[1.3] text-black">
                  {s.title}
                </h3>
                <p className="font-body text-[16px] font-medium leading-[1.45] text-black">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex gap-5">
          <button
            onClick={() => scroll('prev')}
            className="font-body text-[42px] font-light leading-none text-black transition-all hover:text-[#2a5fff]"
            aria-label="Previous service"
          >
            ←
          </button>
          <button
            onClick={() => scroll('next')}
            className="font-body text-[42px] font-light leading-none text-black transition-all hover:text-[#2a5fff]"
            aria-label="Next service"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
