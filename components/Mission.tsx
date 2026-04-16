import Image from "next/image";

const missionImages = {
  interoperability: "/Interoperability%20(1).png",
  optimize: "/Optimize%20822x640.png",
  empower: "/Empower%20Image.png",
};

const missionItems = [
  {
    title: "Interoperability",
    text: "We aim to enable interoperability and efficient collaboration among healthcare institutions through a unified digital platform.",
    panelClass: "bg-beige text-navy md:rounded-bl-[160px] md:rounded-tr-[8px]",
    textClass: "text-black/70",
  },
  {
    title: "Optimize",
    text: "We optimize healthcare delivery by reducing redundancy, lowering costs, and accelerating response times.",
    panelClass: "bg-navy text-white md:rounded-br-[160px]",
    textClass: "text-white/80",
  },
  {
    title: "Empower",
    text: "We empower both patients and providers with access to comprehensive, real time health records that drive better outcomes.",
    panelClass: "bg-ice-blue text-navy md:rounded-br-[160px]",
    textClass: "text-black/70",
  },
];

function MissionPanel({ item }: { item: (typeof missionItems)[number] }) {
  return (
    <div className={`group flex items-center justify-center overflow-hidden ${item.panelClass}`}>
      <div className="relative flex h-[280px] w-full items-center justify-center px-8 text-center md:h-[255px]">
        <h3 className="font-accent text-[clamp(28px,3vw,36px)] font-bold italic opacity-100 transition-opacity duration-300 group-hover:opacity-0">
          {item.title}
        </h3>
        <p
          className={`absolute inset-0 mx-auto flex max-w-[720px] items-center justify-center px-10 text-[clamp(22px,2.4vw,32px)] font-normal leading-[1.25] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.textClass}`}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

function MissionImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative h-[280px] w-full md:h-[255px] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={70}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 30vw"
      />
    </div>
  );
}

export default function Mission() {
  return (
    <section className="px-4 py-16 md:px-10">
      <div className="mx-auto max-w-content">
        <h2 className="mb-12 text-center font-body text-[clamp(32px,4vw,44px)] font-medium leading-none text-black">
          Our <b className="font-accent">Mission</b>
        </h2>

        <div className="grid overflow-hidden rounded-[4px] bg-white shadow-sm">
          <div className="grid h-[560px] grid-cols-1 md:h-[255px] md:grid-cols-[30%_70%]">
            <MissionImage
              src={missionImages.interoperability}
              alt="Interoperability"
              className="order-2 rounded-tl-[150px] md:order-1"
            />
            <div className="order-1 md:order-2">
              <MissionPanel item={missionItems[0]} />
            </div>
          </div>

          <div className="grid h-[560px] grid-cols-1 md:h-[255px] md:grid-cols-[70%_30%]">
            <MissionPanel item={missionItems[1]} />
            <MissionImage
              src={missionImages.optimize}
              alt="Optimize"
              className="rounded-tl-[150px]"
            />
          </div>

          <div className="grid h-[560px] grid-cols-1 md:h-[255px] md:grid-cols-[30%_70%]">
            <MissionImage
              src={missionImages.empower}
              alt="Empower"
              className="order-2 rounded-tl-[150px] md:order-1"
            />
            <div className="order-1 md:order-2">
              <MissionPanel item={missionItems[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}