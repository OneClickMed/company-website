export default function ProblemSolution() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-content gap-6 rounded-[22px] border border-black/10 bg-ice-blue/40 p-6 md:grid-cols-2 md:p-10">
        <article className="rounded-[16px] bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-salmon-red">The Problem</p>
          <h3 className="mt-3 font-body text-[28px] font-extrabold leading-[1.1] text-black">
            Fragmented systems slow care.
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-black/70">
            Repeated registrations, disconnected records, and delayed coordination create friction for
            both care teams and patients.
          </p>
        </article>

        <article className="rounded-[16px] bg-navy p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-light-yellow">The Solution</p>
          <h3 className="mt-3 font-body text-[28px] font-extrabold leading-[1.1] text-white">
            One unified platform for connected care.
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-white/80">
            OneClickMed centralizes patient data, enables secure collaboration, and helps providers make
            faster decisions with real-time context.
          </p>
        </article>
      </div>
    </section>
  )
}
