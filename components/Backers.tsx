import Image from "next/image";

const backers = [
  { src: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/The_Founder_Institute_Logo.png', alt: 'Founder Institute' },
  { src: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/LSETF-1024x323.png', alt: 'LSETF' },
  { src: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/H2i__logo.png', alt: 'H2i' },
  { src: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/aii-logo.png', alt: 'African Impact Initiative' },
  { src: 'https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/gcs.webp', alt: 'Google Cloud for Startups' },
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
              className="h-10 w-auto flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}