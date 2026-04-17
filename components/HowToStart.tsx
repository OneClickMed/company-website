'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const providerSteps = [
  'Contact Sales & Book a Demo',
  'Feasibility Study & Implementation',
  'Training & 24/7 Customer Support',
]

const patientSteps = [
  'Download the Mobile App',
  'Easy Signup & Connect to a Hospital',
  '24/7 Customer Service',
]

function DiagonalArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
    >
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HowToStart() {
  const [open, setOpen] = useState<'providers' | 'patients' | null>('providers')

  return (
    <section id="how-to-start" className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.04em] text-black">
              How to Get Started
            </p>
            <h2 className="mt-3 font-body text-[clamp(36px,4.6vw,56px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-black">
              Getting started is <b className="font-accent italic text-black">simple</b>.
            </h2>
          </div>
          <p className="max-w-[520px] font-body text-[17px] font-medium leading-[1.45] text-black md:mt-6 md:justify-self-end">
Start using smarter healthcare tools today. We&apos;re here to guide you every step of the way.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[0.82fr_1fr] md:gap-[120px]">






          <div className="flex justify-center md:justify-start">
            <Image
              src="/get-started-phone-861x1024.png"
              alt="Get Started"
              width={861}
              height={1024}
              quality={70}
              className="h-auto w-full max-w-[450px]"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>

          <div className="md:pt-2">
            <div className="border-b border-[#2a5fff]">
              <button
                type="button"
                onClick={() => setOpen(open === 'providers' ? null : 'providers')}
                className="flex w-full items-center justify-between gap-4 pb-3 text-left font-body text-[clamp(22px,2.8vw,32px)] leading-none text-black"
              >
                <span className="flex items-center gap-3 text-left whitespace-nowrap">
                  For <b className="font-accent italic text-black">Healthcare Providers</b>
                </span>
                <span className="text-[#2a5fff]">
                  <DiagonalArrowIcon open={open === 'providers'} />
                </span>
              </button>
              {open === 'providers' && (
                <div className="pb-12 pt-8 text-left">
                  <div className="flex flex-col gap-3">
                    {providerSteps.map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#2a5fff] font-body text-base font-medium text-[#2a5fff]">
                          {i + 1}
                        </div>
                        <div className="rounded bg-ice-blue px-5 py-2 font-body text-[15px] font-bold text-[#2a5fff]">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-[5px] bg-[#2a5fff] px-6 py-4 font-body text-[15px] font-bold text-white transition-all hover:-translate-y-px hover:bg-navy"
                  >
                    Contact Sales Team
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-12 border-b border-[#2a5fff]">
              <button
                type="button"
                onClick={() => setOpen(open === 'patients' ? null : 'patients')}
                className="flex w-full items-center justify-between gap-4 pb-3 font-body text-[clamp(26px,3vw,34px)] leading-none text-black"
              >
                <span className="flex items-center gap-3">
                  For <b className="font-accent italic text-black">Patients</b>
                </span>
                <span className="text-salmon-red">
                  <DiagonalArrowIcon open={open === 'patients'} />
                </span>
              </button>
              {open === 'patients' && (
                <div className="pb-12 pt-8">
                  <div className="flex flex-col gap-3">
                    {patientSteps.map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-salmon-red font-body text-base font-medium text-salmon-red">
                          {i + 1}
                        </div>
                        <div className="rounded bg-[#fff0d9] px-5 py-2 font-body text-[15px] font-bold text-salmon-red">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
