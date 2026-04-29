'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BookDemoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-content px-6 pb-16 pt-28 md:px-10 md:pt-32 ">
          <div className="mx-auto max-w-[860px]">
            <h1 className="mt-5 font-body text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.02] text-black">
              Book A <b className="font-accent italic text-navy">Demo</b>
            </h1>
            <p className="mt-2 font-body text-[clamp(24px,3vw,34px)] font-bold leading-[1.15] text-black">
              Experience the Future of Healthcare Record Management
            </p>

            <div className="mt-8 rounded-[24px] bg-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-navy">Request Access</p>
              <div
                style={{ textAlign: 'left' }}
                className="sender-form-field "
                data-sender-form-id="dwpN6J"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
