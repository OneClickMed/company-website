import Image from "next/image";

const backers = [
  { src: '/partners/founder-institute.png', alt: 'Founder Institute', href: 'https://fi.co/' },
  { src: '/partners/lsetf.png', alt: 'LSETF', href: 'https://www.lsetf.ng/' },
  { src: '/partners/h2i.png', alt: 'H2i', href: 'https://h2i.utoronto.ca/' },
  { src: '/partners/african-impact-initiative.png', alt: 'African Impact Initiative', href: 'https://www.africanimpact.ca/' },
  { src: '/partners/google-cloud-startups.png', alt: 'Google Cloud for Startups', href: 'https://startup.google.com/' },
  { src: '/partners/kjoller.jpeg', alt: 'Kjøller', href: 'https://kjoller.com/' },
];

export default function Backers() {
  return (
    <section id="partners" className="px-6 py-[60px] md:px-10">
      <div className="mx-auto max-w-content text-center">
        <p className="mb-8 font-body text-sm font-semibold uppercase tracking-[0.1em] text-black/60">
          Trusted by hospitals, clinics, and ecosystem partners
        </p>

        <div className="carousel-track -mx-6 flex items-center gap-10 overflow-x-auto px-6 md:mx-0 md:justify-center md:gap-12 md:overflow-visible md:px-0">
          {backers.map((b) => (
            <a
              key={b.alt}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${b.alt} website`}
              className="flex-shrink-0"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={120}
                height={40}
                quality={70}
                style={{ width: 'auto', height: '40px' }}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
