import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-12  m-auto w-full border-b border-whitesmoke bg-white mx-auto background-gradient px-6  ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-1/2 mb-12 md:mb-0 md:text-left text-center ">
          <h1 className="text-4xl md:text-5xl font-bold text-ocmbluedark mb-4" >
            Top rated digital health platform in Africa
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-600 nunito">
          Eliminating Queues, Multiple Registrations, & Inconsistent Medical Records...
          </h2>
          <a
            href="https://277hfb0ua0w.typeform.com/to/izegW8S1?typeform-source=oneclickmed.ng"
            target="_blank"
            rel="noreferrer"
            className="bg-ocmblue text-white px-6 py-3 rounded-md hover:bg-ocmblue transition-all duration-300 relative hover:pl-8 hover:pr-10 group mb-6"
          >
            Sign up for WaitList
            <span className="inline-block pr-2 transform transition-all duration-300 opacity-0 translate-x-0 absolute right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
        <div className="md:w-1/2 relative perspective md:mt-12  max-w-2xl  ">
          <div className="relative w-full h-full flex justify-center items-center">
              <Image
              src="/assets/img/hero.png"
              alt="Hero"
              width={616}
              height={422}
              className="rounded-lg relative z-10"
                priority
              />
<div className="orbit-container flex items-center justify-center">
  <div className="circle circle1">
    <Image src="/assets/icons/4.png" alt="Icon 5" className="item item1 orbit-icon orbit-icon-5" width={100} height={100} />
    <Image src="/assets/icons/2.png" alt="Icon 2" className="item item2 orbit-icon orbit-icon-2" width={100} height={100} />
  </div>
  <div className="circle circle2">
    <Image src="/assets/icons/3.png" alt="Icon 3" className="item item1 orbit-icon orbit-icon-3" width={100} height={100} />
    <Image src="/assets/icons/5.png" alt="Icon 4" className="item item2 orbit-icon orbit-icon-4" width={100} height={100} />
  </div>
  <div className="circle circle3">
  <Image src="/assets/icons/7.png" alt="Icon 7" className="item item1 orbit-icon orbit-icon-7" width={100} height={100} />

    <Image src="/assets/icons/6.png" alt="Icon 6" className="item item2 orbit-icon orbit-icon-6" width={100} height={100} />
  </div>
  <div className="circle circle4">
    <Image src="/assets/icons/1.png" alt="Icon 1" className="item item1 orbit-icon orbit-icon-1" width={100} height={100} />
    <Image src="/assets/icons/8.png" alt="Icon 8" className="item item2 orbit-icon orbit-icon-8" width={100} height={100} />
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
