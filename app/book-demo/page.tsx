'use client'

import { FormEvent, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type PositionOption = 'CEO/CMO/Director/MD/CMD etc.' | 'Dr./Nr.' | 'Admin' | 'Other'

type FormState = {
  position: PositionOption | ''
  positionOther: string
  name: string
  email: string
  hospitalName: string
  phone: string
  comments: string
}

const initialForm: FormState = {
  position: '',
  positionOther: '',
  name: '',
  email: '',
  hospitalName: '',
  phone: '',
  comments: '',
}

export default function BookDemoPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const isOther = form.position === 'Other'

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSuccess(false)

    if (!form.position || !form.name || !form.email || !form.hospitalName || !form.phone) {
      setError('Please complete all required fields.')
      return
    }

    if (isOther && !form.positionOther.trim()) {
      setError('Please provide your position in the Other field.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        setError(result.message || 'Failed to submit form.')
        return
      }
      setSuccess(true)
      setForm(initialForm)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-content px-6 pb-16 pt-28 md:px-10 md:pt-32">
          <div className="mx-auto max-w-[860px]">
            <div>

              <h1 className="mt-5 font-body text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.02] text-black">
                Book A <b className="font-accent italic text-navy">Demo</b>
              </h1>
              <p className="mt-2 font-body text-[clamp(24px,3vw,34px)] font-bold leading-[1.15] text-black">
                Experience the Future of Healthcare Record Management
              </p>

              <p className="mt-6 max-w-[620px] text-[15px] leading-[1.75] text-black/65">
                We&rsquo;re excited to introduce you to the OneClick-Med Digital Health (EHR) system, designed
                specifically for healthcare providers across Africa to streamline patient care, reduce paperwork,
                and improve operational efficiency.
              </p>
              <p className="mt-4 max-w-[620px] text-[15px] leading-[1.75] text-black/65">
                Whether you&apos;re a clinic, hospital, specialist center, or diagnostic facility, our system helps you
                manage patient records, appointments, billing, prescriptions, and more, all in one place.
              </p>

            </div>

            <div className="mt-8 rounded-[24px] bg-white ">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-navy">Request Access</p>
              <form className="space-y-5" onSubmit={onSubmit}>
                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-black">
                    Position <span className="text-salmon-red">*</span>
                  </legend>
                  <div className="grid gap-3 text-base text-black/80 sm:grid-cols-2">
                    {(['CEO/CMO/Director/MD/CMD etc.', 'Dr./Nr.', 'Admin', 'Other'] as PositionOption[]).map(
                      (option) => (
                        <label
                          key={option}
                          className="flex min-h-[56px] cursor-pointer items-center gap-3 rounded-[12px] bg-ice-blue/60 px-4 py-3 hover:bg-ice-blue"
                        >
                          <input
                            type="radio"
                            name="position"
                            value={option}
                            checked={form.position === option}
                            onChange={(e) =>
                              setForm((prev) => ({ ...prev, position: e.target.value as PositionOption }))
                            }
                        className="h-5 w-5 accent-navy"
                          />
                          {option}
                        </label>
                      )
                    )}
                  </div>
                  {isOther ? (
                    <input
                      type="text"
                      value={form.positionOther}
                      onChange={(e) => setForm((prev) => ({ ...prev, positionOther: e.target.value }))}
                      placeholder="Please specify your position"
                      className="mt-3 w-full rounded-[12px] bg-ice-blue/40 px-4 py-4 text-base outline-none focus:bg-ice-blue/60"
                    />
                  ) : null}
                </fieldset>

                <Input
                  label="Name"
                  required
                  value={form.name}
                  onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                />
                <Input
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                />
                <Input
                  label="Name of Hospital"
                  required
                  value={form.hospitalName}
                  onChange={(value) => setForm((prev) => ({ ...prev, hospitalName: value }))}
                />
                <Input
                  label="Phone number (preferably WhatsApp)"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
                />

                <div>
                  <label className="mb-2 block text-sm font-bold text-black">Comments</label>
                  <textarea
                    value={form.comments}
                    onChange={(e) => setForm((prev) => ({ ...prev, comments: e.target.value }))}
                    rows={4}
                    className="w-full rounded-[12px] bg-ice-blue/40 px-4 py-4 text-base outline-none focus:bg-ice-blue/60"
                  />
                </div>

                {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
                {success ? (
                  <p className="rounded-[6px] border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
                    Success. Your demo request has been submitted.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center rounded-[6px] bg-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-cobalt disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>



              </form>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}

function Input({
  label,
  value,
  onChange,
  required = false,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  type?: string
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-black">
        {label} {required ? <span className="text-salmon-red">*</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-[6px] bg-ice-blue/40 px-4 py-4 text-base outline-none focus:bg-ice-blue/60"
      />
    </div>
  )
}
