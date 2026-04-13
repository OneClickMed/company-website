const reasons = [
  {
    title: 'Interoperability-First',
    description: 'Connect data across providers so teams see one consistent patient story.',
  },
  {
    title: 'AI-Powered Insights',
    description: 'Surface actionable signals faster for better triage and clinical workflows.',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Built for clinics and hospitals that need reliable growth without rework.',
  },
  {
    title: 'Real-Time Access',
    description: 'Get up-to-date records and status instantly for faster, coordinated care.',
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-black">Why Choose Us</p>
          <h2 className="mt-3 font-body text-[clamp(34px,4.2vw,52px)] font-extrabold leading-[1.06] text-black">
            Built for <b className="font-accent italic text-black">modern</b> healthcare teams
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-[18px] border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-navy">{reason.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-black/70">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
