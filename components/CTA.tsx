import DownloadButtons from './DownloadButtons'

export default function CTA() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-bl-[10px] rounded-br-[120px] rounded-tl-[120px] rounded-tr-[10px] bg-navy px-6 py-20 text-center md:min-h-[560px] md:rounded-br-[220px] md:rounded-tl-[220px] md:px-16">
          <div className="relative z-10 mx-auto max-w-[820px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/80 md:text-base">
            The Future is Now
          </p>
            <h2 className="font-body text-[clamp(30px,4.2vw,56px)] font-extrabold leading-[1.1] text-white">
            Get <b className="text-light-yellow">Early</b> Access to OneClickMed
          </h2>
            <p className="mx-auto mt-6 max-w-[620px] text-base font-medium leading-[1.6] text-white/80 md:text-lg">
            We&apos;re building a better way to connect patients and providers. Join the waitlist to be notified when the platform becomes available.
          </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-5">
              <DownloadButtons align="center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
