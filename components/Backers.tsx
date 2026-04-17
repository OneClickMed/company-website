import Image from "next/image";

const backers = [
  { src: '/partners/founder-institute.png', alt: 'Founder Institute' },
  { src: '/partners/lsetf.png', alt: 'LSETF' },
  { src: '/partners/h2i.png', alt: 'H2i' },
  { src: '/partners/african-impact-initiative.png', alt: 'African Impact Initiative' },
  { src: '/partners/google-cloud-startups.png', alt: 'Google Cloud for Startups' },
];

export default function Backers() {
  return (
    <section className="px-6 py-[60px] md:px-10">
      <div className="mx-auto max-w-content text-center">
        <p className="font-body text-sm font-semibold text-black/60 tracking-[0.1em] uppercase mb-8">
          Trusted by hospitals, clinics, and ecosystem partners
        </p>

        <div className="carousel-track -mx-6 flex items-center gap-10 overflow-x-auto px-6 md:mx-0 md:justify-center md:gap-12 md:overflow-visible md:px-0">
          {backers.map((b) => (
            <Image
              key={b.alt}
              src={b.src}
              alt={b.alt}
              width={120}   // required
              height={40}   // required
              quality={70}  // now valid ✅
              style={{ width: 'auto', height: '40px' }}
              className="flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
