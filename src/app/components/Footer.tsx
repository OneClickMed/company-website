import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Logo from './Logo';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = ({show = true}) => {
  if (!show){
    return null
  }
  return (
    <footer className=" pt-12 border-t border-whitesmoke bg-ocmbluelightshade">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-[40%] mb-8 md:mb-0">
            <div className='bg-whiten inline-block'>
            <Logo/>
            </div>
            <p className=" mt-4 md:text-justify md:pr-6">
              At OneClick-Med, we are redefining healthcare by centralizing patient registration and data through our One-Time Registration (OTR) and Electronic Medical Record (EMR) system. Enhancing inter-connectivity in the healthcare ecosystem, we ensure seamless access across the healthcare ecosystem for superior patient care.
            </p>
            <div className="social-links flex space-x-4 mt-3">
      <a
        href="https://x.com/oneclickmed_"
        className="text-2xl hover:text-ocmyellow cursor-pointer"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/icons/twitter.svg" alt="Twitter" width={30} height={30} />
      </a>
      <a
        href="https://www.facebook.com/oneclickmedng"
        className="text-2xl hover:text-ocmyellow cursor-pointer"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/icons/facebook.svg" alt="Facebook" width={30} height={30} />
      </a>
      <a
        href="https://www.instagram.com/oneclick_med/"
        className="text-2xl hover:text-ocmyellow cursor-pointer"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/icons/instagram.svg" alt="Instagram" width={30} height={30} />
      </a>
      <a
        href="https://ng.linkedin.com/company/oneclick-med"
        className="text-2xl hover:text-ocmyellow cursor-pointer"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" width={30} height={30} />
      </a>
      <a
        href="https://www.youtube.com/@OneClick-Med"
        className="text-2xl hover:text-ocmyellow cursor-pointer"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/assets/icons/youtube.svg" alt="YouTube" width={30} height={30} />
      </a>
    </div>
          </div>
          {/* Contact Us */}
          <div className="w-full md:w-[35%] mb-8 md:mb-0" id='contact'>
            <h2 className="text-lg text-ocmbluedark font-bold mb-4 ">Contact Us</h2>
            <div className="mb-2 ">
              <div className="flex items-center mr-2  text-gray-800">
                <FaMapMarkerAlt className="mr-2  text-ocmbluedark" />
                <p>Address:</p>
              </div>
              <div>Plot 901, Katampe, Federal Capital Territory, Abuja, Nigeria</div>
            </div>
            <div className="mb-2 ">
              <div className="flex items-center mr-2 mb-2 text-gray-800">
                <FaPhoneAlt className="mr-2  text-ocmbluedark" />
                <p >Phone:</p>
              </div>
              <div>(+234) 813 836 4425</div>
            </div>
            <div className="mb-2">
              <div className="flex items-center mr-2 text-gray-800">
                <FaEnvelope className="mr-2  text-ocmbluedark" />
                <p>Email:</p>
              </div>
              <div>info@oneclickmed.ng</div>
            </div>
          </div>
          {/* Download Buttons and Newsletter */}
          <div className="w-full md:w-[25%] mb-12 md:mb-0 ">
            <h2 className="text-lg text-ocmbluedark font-bold mb-4 ">Download Our App</h2>
            <div className="flex space-x-4 mb-4">
              <a href="#">
                <Image src="/assets/img/others/appstore.png" alt="Download on the App Store" width={120} height={70} />
              </a>
              <a href="#">
                <Image src="/assets/img/others/playstore.png" alt="Get it on Google Play" width={135} height={90} />
              </a>
            </div>
            <form className="flex w-full md:w-auto">
              <div className="flex flex-grow border border-gray-300 rounded-md overflow-hidden p-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-gray-900 p-2 border-none focus:outline-none"
                />
                <button type="submit" className="bg-ocmblue  p-2 hover:bg-ocmyellow">
                  Subscribe
                </button>
              </div>
            </form>

          </div>
        </div>
        <div className="mt-12 text-center border-t border-gray py-4 text-[14px]">
          © 2024 <strong> OneClick-Med.</strong>  All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
