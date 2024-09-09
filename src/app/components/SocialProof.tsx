'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SocialProof = () => {
  const logos = [
    '/assets/img/clients/client-1.png',
    '/assets/img/clients/client-2.png',
    '/assets/img/clients/client-3.png',
    '/assets/img/clients/client-4.png',
    '/assets/img/clients/client-5.png',
    '/assets/img/clients/client-6.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const visibleLogos = [...logos.slice(currentIndex, currentIndex + 5), ...logos.slice(0, 5)].slice(0, 5);

  return (
    <section className="bg-ocmbluelightshade py-12 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-ocmblue font-bold mb-2 hidden">WHAT WE REPRESENT</h2>
        <p className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-ocmbluedark">Our Product prioritizes Security and Efficiency aligning with the Values of Organizations like:</p>

        <div className="relative flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            <div className="flex">
              {visibleLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Logo ${index}`}
                  width={128}
                  height={128}
                  className="w-32 h-32 object-contain mx-6 transition-transform" // Increased margin to mx-6
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            {logos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-ocmblue' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
