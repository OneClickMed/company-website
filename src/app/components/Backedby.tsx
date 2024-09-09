'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BackedBy = () => {
  const logos = [
    '/assets/img/clients/fi.png',
    '/assets/img/clients/lsetf.png',

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
        <h2 className="text-ocmblue font-bold mb-2 ">WE ARE BACKED BY        </h2>
        <p className="md:text-2xl text-xl font-bold text-ocmbluedark">Our Innovative concept has gained Momentum through Prestigious Accelerator Programs.</p>
        <div className="relative flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            <div className="flex">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Logo ${index}`}
                  width={128}
                  height={128}
                  className="w-24 h-24 object-contain mx-6 transition-transform" // Increased margin to mx-6
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

export default BackedBy;
