export default function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-salmon-red px-4 py-20 md:px-10">
      <div className="relative mx-auto min-h-[600px] w-full max-w-content">
        <div className="relative z-10 flex min-h-[600px] max-w-[520px] flex-col justify-center">
          <p className="mb-4 font-body text-[15px] font-medium uppercase tracking-[0.04em] text-white">
            Who We Are
          </p>
          <h2 className="font-body text-[clamp(36px,4vw,44px)] font-normal leading-[1.08] text-white">
            Your health data, securely accessible wherever care happens.
          </h2>
          <p className="mt-5 max-w-[560px] font-body text-[15px] leading-[1.55] text-white">
            OneClickMed helps providers and patients work from one source of truth, reducing repeated
            registrations, minimizing delays, and improving continuity of care.
          </p>
        </div>

        <img
          src="https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/about-1024x1018.png"
          alt="About OneClickMed"
          className="mt-10 h-[420px] w-full rounded-[10px] rounded-bl-[180px] object-cover object-center md:absolute md:right-0 md:top-10 md:mt-0 md:h-[525px] md:w-[48%] md:rounded-bl-[230px]"
        />
      </div>
    </section>
  )
}
