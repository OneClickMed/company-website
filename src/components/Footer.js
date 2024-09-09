import React from 'react';
import {FaTwitter,  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="py-12" id='contact'>
      <div className="footer-top py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between mx-4"> 
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <a href="/" className="flex  mb-4 h-30">
                <img src='/assets/img/onclickmedlogo.png' alt="Logo" className="h-10 w-auto cursor-pointer" />
              </a>
              <p className="text-gray-500 mb-4 text-left">
                At OneClick-Med, we are redefining healthcare by centralizing patient registration and data through our
                One-Time Registration (OTR) and Electronic Medical Record (EMR) system. Enhancing inter-connectivity in
                the healthcare ecosystem, we ensure seamless access across the healthcare ecosystem for superior patient
                care.
              </p>
              <div className="social-links flex space-x-4 mt-3">
                <a href="https://x.com/oneclickmed_" className="text-2xl  hover:text-ocmyellow" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://www.facebook.com/oneclickmedng" className="text-2xl hover:text-ocmyellow" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://www.instagram.com/oneclick_med/" className="text-2xl  hover:text-ocmyellow" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://ng.linkedin.com/company/oneclick-med" className="text-2xl  hover:text-ocmyellow" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/@OneClick-Med" className="text-2xl  hover:text-ocmyellow" aria-label="YouTube"><FaYoutube /></a>
              </div>

            </div>
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0  text-left  	">
              <h4 className="text-lg font-semibold  mb-4">Contact Us</h4>
              <p className="text-gray-500">
                Plot 901, Katampe,<br />
                Federal Capital Territory, Abuja,<br />
                Nigeria<br /><br />
                <strong>Phone:</strong> <a href="tel:+0123456789" className="text-ocmblue">(+234) 813 836 4425</a><br />
                <strong>Email:</strong> <a href="mailto:info@oneclickmed.ng" className="text-ocmblue">info@oneclickmed.ng</a><br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ocmbluelightshade mx-auto text-center text-gray-700">
        <div className="py-4 border-t ">
          © 2024 <strong>OneClick-Med</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
