import Image from 'next/image'

const stats = [
  {
    metric: '45%',
    text: 'reduction in admin time per patient',
    desc: 'Teams can focus more on care and less on paperwork.',
    img: '/block1-1024x661.png',
    imgAlt: 'Admin dashboard showing patient waitlist data',
    cardClass: 'rounded-[10px] rounded-br-[120px] bg-cobalt text-white md:rounded-br-[220px]',
    contentClass: 'max-w-[320px] text-left md:ml-auto md:max-w-[300px] md:text-right md:group-hover/card:max-w-[440px]',
    descClass: 'text-white/85 md:mr-auto md:max-w-[300px] md:text-left',
    imageClass: 'bottom-0 left-5 w-[350px] max-w-none md:left-8 md:w-[400px] lg:w-[460px]',
  },
  {
    metric: '55%',
    text: 'fewer missed appointments',
    desc: 'Patients stay engaged and connected to their care plans.',
    img: '/block2-e1766247407466-1.png',
    imgAlt: 'Mobile appointment rescheduling screen',
    cardClass: 'rounded-[10px] rounded-tl-[120px] bg-iceblue text-black md:rounded-tl-[340px]',
    contentClass: 'ml-auto max-w-[250px] text-right md:mt-auto md:ml-0 md:max-w-[240px] md:text-left md:group-hover/card:max-w-[320px]',
    descClass: 'text-black/70',
    imageClass: 'bottom-0 -right-5 h-[62%] w-[220px] max-w-none md:-right-32 md:h-[82%] md:w-[260px]',
  },
  {
    metric: '80%',
    text: 'faster data sharing',
    desc: 'Providers get the information they need exactly when they need it.',
    img: '/block3-e1766247426398-722x1024.png',
    imgAlt: 'Mobile medical records screen',
    cardClass: 'rounded-[10px] rounded-bl-[120px] bg-navy text-white md:rounded-bl-[220px]',
    contentClass: 'max-w-[320px] text-left md:max-w-[260px] md:group-hover/card:max-w-[360px]',
    descClass: 'text-white/85 md:max-w-[330px]',
    imageClass: 'bottom-0 left-6 h-[58%] w-[220px] max-w-none md:left-auto md:-right-40 md:h-[92%] md:w-[260px]',
  },
]

export default function Stats() {
  return (
    <section className="px-4 py-16 md:px-10">
      <div className="group/stats mx-auto flex max-w-content flex-col gap-2 md:h-[520px] md:flex-row md:gap-0">
        {stats.map((stat) => (
          <article
            key={stat.metric}
            className={`group/card relative flex min-h-[460px] min-w-0 cursor-pointer flex-col overflow-hidden p-5 pt-8 transition-[flex,transform] duration-500 ease-out md:h-full md:min-h-[440px] md:flex-[1] md:p-8 md:group-hover/stats:flex-[0.86] md:hover:!flex-[1.45] ${stat.cardClass}`}
          >
            <div className={`relative z-20 transition-[max-width] duration-500 ${stat.contentClass}`}>
              <h2 className="break-words font-body text-[clamp(24px,7vw,36px)] font-medium leading-[1.08] tracking-[-0.03em] transition-[font-size] duration-500 md:text-[clamp(22px,1.8vw,38px)] md:group-hover/card:text-[clamp(24px,2vw,42px)]">
                <span>{stat.metric}</span> {stat.text}
              </h2>

              <p
                className={`mt-4 font-body text-[13px] font-semibold leading-[1.35] md:text-[16px] md:leading-[1.45] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover/card:opacity-100 ${stat.descClass}`}
              >
                {stat.desc}
              </p>
            </div>

            <div className={`absolute z-10 ${stat.imageClass}`}>
              <div className="relative h-full w-full">
                <Image
                  src={stat.img}
                  alt={stat.imgAlt}
                  fill
                  quality={70}
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 70vw, 33vw"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}