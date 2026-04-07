const missionImages = {
  interoperability: '/Interoperability%20(1).png',
  optimize: '/Optimize%20822x640.png',
  empower: '/Empower%20Image.png',
}

const missionItems = [
  {
    title: 'Interoperability',
    text: 'We aim to enable interoperability and efficient collaboration among healthcare institutions through a unified digital platform.',
    panelClass: 'bg-beige text-navy md:rounded-bl-[160px] md:rounded-tr-[8px]',
    textClass: 'text-black/70',
  },
  {
    title: 'Optimize',
    text: 'We optimize healthcare delivery by reducing redundancy, lowering costs, and accelerating response times.',
    panelClass: 'bg-navy text-white md:rounded-br-[160px]',
    textClass: 'text-white/80',
  },
  {
    title: 'Empower',
    text: 'We empower both patients and providers with access to comprehensive, real time health records that drive better outcomes.',
    panelClass: 'bg-ice-blue text-navy md:rounded-br-[160px]',
    textClass: 'text-black/70',
  },
]

function MissionPanel({ item }: { item: (typeof missionItems)[number] }) {
  return (
    <div className={`group flex items-center justify-center overflow-hidden ${item.panelClass}`}>
      <div className="relative flex h-[280px] w-full items-center justify-center px-8 text-center md:h-[255px]">
        <h3 className="font-accent text-[clamp(28px,3vw,36px)] font-bold italic opacity-100 transition-opacity duration-300 group-hover:opacity-0">
          {item.title}
        </h3>
        <p className={`absolute inset-0 mx-auto flex max-w-[720px] items-center justify-center px-10 text-[clamp(22px,2.4vw,32px)] font-normal leading-[1.25] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.textClass}`}>
          {item.text}
        </p>
      </div>
    </div>
  )
}

export default function Mission() {
  return (
    <section className="mx-auto  px-4 py-16">
      <h2 className="mb-12 text-center font-body text-[clamp(32px,4vw,44px)] font-medium leading-none text-black">
        Our <b className="font-accent">Mission</b>
      </h2>

      <div className="grid overflow-hidden rounded-[4px] bg-white shadow-sm">
        <div className="grid h-[560px] grid-cols-1 md:h-[255px] md:grid-cols-[30%_70%]">
          <img
            src={missionImages.interoperability}
            alt="Interoperability"
            className="order-2 h-[280px] w-full rounded-tl-[150px] object-cover object-center md:order-1 md:h-[255px]"
          />
          <div className="order-1 md:order-2">
            <MissionPanel item={missionItems[0]} />
          </div>
        </div>

        <div className="grid h-[560px] grid-cols-1 md:h-[255px] md:grid-cols-[70%_30%]">
          <MissionPanel item={missionItems[1]} />
          <img
            src={missionImages.optimize}
            alt="Optimize"
            className="h-[280px] w-full rounded-tl-[150px] object-cover object-center md:h-[255px]"
          />
        </div>

        <div className="grid h-[560px] grid-cols-1 md:h-[255px] md:grid-cols-[30%_70%]">
          <img
            src={missionImages.empower}
            alt="Empower"
            className="order-2 h-[280px] w-full rounded-tl-[150px] object-cover object-center md:order-1 md:h-[255px]"
          />
          <div className="order-1 md:order-2">
            <MissionPanel item={missionItems[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}
