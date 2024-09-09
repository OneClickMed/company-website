// components/WhoWeAre.js

import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section id="about" className='min-h-[85vh] relative  top-0  p-6 flex justify-center'>
      <div className='flex items-center'>
        <div className="container mx-auto flex  md:flex-row items-center  flex-col-reverse">
        <div className="md:w-1/2 w-full flex flex-wrap gap-2 min-h-[55vh] md:justify-left justify-center ">
            <div className="flex flex-col sm:w-1/2 w-45p gap-6 ">
              <div className="flex-grow relative">
                <Image
                  src="/assets/img/whoweare2.jpg"
                   alt="Who we are placeholder"
                  fill
                  sizes="(max-width: 468px) 100vw, 50vw"
                  className="rounded-3xl shadow-sm hover:scale-95 cursor-pointer object-cover"
                />
              </div>
              <div className="h-1/4 relative">
                <Image
                  src="/assets/img/whoweare4.png"
                  alt="Who we are placeholder"
                  fill
                  sizes="(max-width: 468px) 100vw, 50vw"
                  className="rounded-3xl shadow-sm hover:scale-95 cursor-pointer object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:w-1/3 w-45p gap-6">
              <div className="h-1/4 relative">
                <Image
                  src="/assets/img/whoweare5.png"
                  alt="Who we are placeholder"
                  fill
                  sizes="(max-width: 468px) 100vw, 50vw"
                  className="rounded-3xl shadow-sm hover:scale-95 cursor-pointer object-cover"
                />
              </div>
              <div className="flex-grow relative">
                <Image
                  src="/assets/img/whoweare3.png"
                  alt="Who we are placeholder"    
                  fill
                  sizes="(max-width: 468px) 100vw, 50vw"
                  className="rounded-3xl shadow-sm hover:scale-95 cursor-pointer border-ocmyellow object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left rounded-xl  p2 md:p-6 bg-white md:bg-ocmbluelightshade drop-shadow-sm">
            <div>
            <p className="text-ocmblue font-bold mb-2 typewriter">WHO WE ARE</p>
            </div>
            <h3 className="text-lg md:text-2xl font-semibold text-ocmbluedark mb-6">
              We Connect your Medical Data to any Healthcare Institution you visit.
            </h3>
            <p className="text-base mb-8">
            At OneClick-Med, we are redefining healthcare by centralizing patient registration and data management. Our comprehensive solution streamlines patient registration, health data, diagnosis, medication dispensation, and fosters interoperability within the healthcare ecosystem ensuring healthcare providers have real-time access to accurate patient data, reducing delays, minimizing errors, reducing redundant tests and procedures, and lowering costs.            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
