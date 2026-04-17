import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-salmon-red px-4 py-20 md:px-10"
    >
      <div className="relative mx-auto min-h-[600px] w-full max-w-content">
        <div className="relative z-10 flex min-h-[600px] max-w-[520px] flex-col justify-center">
          <p className="mb-4 font-body text-[15px] font-medium uppercase tracking-[0.04em] text-white">
            Who We Are
          </p>
          <h2 className="font-body text-[clamp(36px,4vw,44px)] font-normal leading-[1.08] text-white">
            Simplifying healthcare for providers and individuals
          </h2>
          <p className="mt-5 max-w-[560px] font-body text-[15px] leading-[1.55] text-white">
            OneClickMed is a Nigerian health technology company building digital solutions to improve how healthcare is delivered, accessed, and managed
          </p>
          <p className="mt-5 max-w-[560px] font-body text-[15px] leading-[1.55] text-white">
            Through our platforms, we help reduce repeated registrations, minimize delays in care, and support better continuity across the healthcare system. We also make it easier for individuals to access, track, and manage their health in a more connected and reliable way.
          </p>
        </div>

        <div className="relative mt-10 h-[420px] w-full overflow-hidden rounded-[10px] rounded-bl-[180px] md:absolute md:right-0 md:top-10 md:mt-0 md:h-[525px] md:w-[48%] md:rounded-bl-[230px]">
          <Image
            src="https://beta.kiuloper.com/ocm/wp-content/uploads/2025/12/about-1024x1018.png"
            alt="About OneClickMed"
            fill
            quality={70}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}