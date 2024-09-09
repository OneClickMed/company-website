'use client';

import React, { useState, useEffect } from 'react';
import { MdClose } from "react-icons/md";
import Image from 'next/image';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClose}>
        <div className="bg-[#f4f4f4] p-4 rounded-xl shadow-md max-w-md w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <MdClose size={28} />
          </button>
          <Image
            src="/likeproject.gif"
            alt="Job Opportunity"
            width={500}
            height={300}
            className="w-full h-auto mb-4 rounded max-w-80 mx-auto"
          />
          <div className="text-center mb-4">
            <a
              href="https://bit.ly/OCMT"
              target="_blank"
              rel="noreferrer"
              className="bg-ocmblue text-white px-6 py-3 rounded-md hover:bg-ocmblue transition-all duration-300 relative hover:pl-8 hover:pr-10 group"
            >
              Like Now
              <span className="inline-block pr-2 transform transition-all duration-300 opacity-0 translate-x-0 absolute right-4 top-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
