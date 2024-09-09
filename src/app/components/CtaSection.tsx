
'use client'
import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const CtaSection = () => {
  return (
        <section id="cta" className="cta py-20 px-4 bg-ocmbluelightshade border-y border-whitesmoke">
        <ScrollAnimation animateIn="animate__fadeIn" initiallyVisible={true} animateOnce={true} duration={0.5} delay={100}>
          <div className="container mx-auto text-center" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-ocmbluedark">The Future is Now: Get Early Access to OneClick-Med</h3>
            <p className="text-lg mb-6 mt-3"> <b> Be among the first</b> to experience the revolution in patient-centered care. Join our waitlist today and secure your spot for a <b> seamless and empowering healthcare experience.</b></p>
            <a href="https://277hfb0ua0w.typeform.com/to/izegW8S1?typeform-source=oneclickmed.ng" target={'_blank'} rel="noreferrer" className="py-3 px-6 rounded bg-ocmyellow transition duration-200 bg-ocmblue text-white px-4 py-2 rounded-md hover:bg-ocmblue transition duration-300">
                Join Waiting List
            </a> 
          </div>
        </ScrollAnimation>

</section>
  );
};

export default CtaSection;


