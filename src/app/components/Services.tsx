'use client'
import React from 'react';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  ambulance,
  hospitalIcon,
  shieldIcon,
  bellIcon,
  firstAidIcon,
  heartIcon,
  symptopChecker,
  LocationIcon,
  bookmarkIcon,
  HospitalFinder
} from './icons';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: hospitalIcon,
    title: "One-Time Registration (OTR)",
    description: "Simplify your user experience with our seamless One-Time Registration process, ensuring quick and secure access to a range of services without the hassle of repeated data entry.",
    color: "bg-ocmbluehover"
  },
  {
    icon: bookmarkIcon,
    title: "EMR System",
    description: "Effortlessly consolidate and manage your comprehensive medical records with our centralized EMR system, ensuring a seamless and centralized healthcare experience.",
    color: "bg-ocmyellowhover"
  },
  {
    icon: ambulance,
    title: "Emergency Care (Ambulance Services)",
    description: "We understand that critical situations require immediate action. Our Emergency Care feature offers an efficient way to request ambulance assistance during medical emergencies in One Click",
    color: "bg-ocmredhover"
  },
  {
    icon: HospitalFinder,
    title: "Hospital Finder",
    description: "Our Health Services Hub goes beyond just connecting you with doctors. Our seamlessly geo-location  integrated Hospital Finder helps you locate nearby healthcare facilities quickly and easily in times of need.",
    color: "bg-ocmgreenhover"
  },
  {
    icon: shieldIcon,
    title: "Remote Doctor Consultation (Personalized Care)",
    description: "Experience the convenience of personalized healthcare from the comfort of your home with our Remote Doctor Consultation service, connecting you with qualified healthcare professionals for expert advice and tailored medical guidance.",
    color: "bg-ocmyellowhover"
  },

  {
    icon: firstAidIcon,
    title: "First Aid Tips",
    description: "Access essential and practical guidance with our First Aid Tips, providing valuable information for immediate responses to common medical situations, ensuring preparedness in times of need.",
    color: "bg-ocmredhover"
  },


  {
    icon: bellIcon,
    title: "Prescription Reminder",
    description: "Stay on track with your medication regimen through our Prescription Reminder feature, receiving timely alerts to enhance adherence and ensure consistent and effective treatment.",
    color: "bg-ocmbluehover"
  },

  
  {
    icon: heartIcon,
    title: "Health & Wellness Tips",
    description: "Empower yourself with personalized insights and proactive health advice through our Health & Wellness Tips feature, promoting informed lifestyle choices for optimal well-being.",
    color: "bg-ocmgreenhover"
  },

  {
    icon: symptopChecker,
    title: "Symptom Checker",
    description: "Take control of your health by utilizing our Symptom Checker, an intuitive tool providing self-assessment guidance, enabling users to better understand and monitor their health conditions.",
    color: "bg-ocmbluehover"
  },

  {
    icon: LocationIcon,
    title: "Appointment Booking",
    description: "Simplify your healthcare journey with our convenient Appointment Booking system, enabling users to schedule and manage appointments seamlessly, optimizing access to healthcare services.",
    color: "bg-ocmyellowhover"
  }
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`service-card p-6 rounded-lg shadow-sm border border-whitesmoke bg-white sticky top-[20%] w-full`}>
      <div className="flex items-center justify-center mb-4">
        <div className={`w-16 h-16 flex items-center justify-center ${service.color} bg-opacity-30 rounded-full`}>
          <Image src={service.icon} alt={service.title} width={32} height={32}  className=" object-contain"/>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-ocmbluedark text-center">{service.title}</h3>
      <p className="text-gray-700 mb-4 text-center">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen py-16 flex items-start ">
      <div className="container mx-auto flex flex-wrap items-start">
      <ScrollAnimation
              animateIn="fadeIn"
              initiallyVisible={true}
              duration={0.5}
              className="w-full md:w-1/2 px-6 mb-8 md:mb-0 sticky md:top-[40%]"
            >
          <div >
            <p className="text-ocmblue font-bold mb-2">SERVICES</p>
            <p className="text-2xl md:text-3xl font-bold text-ocmbluedark mb-2">Tailored Services for Comprehensive Care</p>
            <p className=" text-gray-700 leading-relaxed">
              Our services are designed to provide comprehensive care and seamless healthcare experiences. From One-Time Registration to Remote Doctor Consultations, we ensure that your healthcare journey is efficient and tailored to your needs. Explore our diverse range of services to discover how we can assist you in managing your health effectively.
            </p>
          </div>
          </ScrollAnimation>

          <div className=" md:w-1/2 flex flex-col gap-4 p-6">
              <ServiceCard service={services[0]} />
              <ServiceCard service={services[1]} />
              <ServiceCard service={services[2]} />
              <ServiceCard service={services[3]} />
              <ServiceCard service={services[4]} />
              <ServiceCard service={services[5]} />
              <ServiceCard service={services[6]} />
              <ServiceCard service={services[7]} />
              <ServiceCard service={services[8]} />
              <ServiceCard service={services[9]} />
          </div>
        </div>
    </section>
  );
};

export default Services;
