export default function CTA() {
  return (
    <section id="contact" className="bg-white px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-bl-[10px] rounded-br-[120px] rounded-tl-[120px] rounded-tr-[10px] bg-navy px-6 py-20 text-center md:min-h-[560px] md:rounded-br-[220px] md:rounded-tl-[220px] md:px-16">
          <div className="relative z-10 mx-auto max-w-[820px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/80 md:text-base">
              Ready to simplify healthcare ?
            </p>
            <h2 className="font-body text-[clamp(30px,4.2vw,56px)] font-extrabold leading-[1.1] text-white">
              Choose <b className="text-light-yellow">OneClickMed</b> today
            </h2>
            <p className="mx-auto mt-6 max-w-[620px] text-base font-medium leading-[1.6] text-white/80 md:text-lg">
              Book a demo to explore provider workflows, or download Beta Health to get started now.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdUU_yEHjrlUoo2-irKmHBtKMZlECCgFCKPWC9Ch6rdJOZNUA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center rounded-[6px] bg-salmon-red px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-salmon-red/90"
              >
                Book a Demo
              </a>
              <a
                href="https://onelink.to/5c3b4m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-[6px] border border-navy bg-white px-5 py-2 text-sm font-bold text-navy transition-colors hover:bg-ice-blue"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4V15M12 15L7.5 10.5M12 15L16.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Download Beta Health
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
