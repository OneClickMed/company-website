"use client";

import React, { useState ,useRef, createRef,useEffect} from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleChevDown } from "react-icons/ci";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "1. What is OneClick-Med?",
    answer: "OneClick-Med is a comprehensive digital healthcare platform designed to streamline healthcare delivery in Africa. Our solution integrates one-time patient registration (OTR), electronic medical records (EMR), remote consultations, emergency care, symptom checkers, preventive health and more, all tailored to meet the unique challenges of patients and healthcare providers in the African healthcare ecosystem."
  },
  {
    question: "2. How does OneClick-Med work?",
    answer: "OneClick-Med works by providing a centralized interoperable platform for managing patient data to enable healthcare providers to access patient records in real-time, reducing the need for redundant tests and improving the accuracy of diagnoses and treatments."
  },
  {
    question: "3. What features does OneClick-Med offer?",
    answer: `
    <div class="text-gray-700 flex flex-wrap">
      <ul class="list-none list-inside md:w-1/2">
        <li class="text-gray-700 flex items-start w-full list-disc"><p><b>Patient App:</b></p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Manage your health records: One-Time Registration, unified Patient EMR.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Access telemedicine services: Remote doctor consultation.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Symptom Checker: An AI-driven tool to help users understand potential health issues.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Emergency Care: Integration with ambulance services for quick response.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Prescription Reminder: Notifications to help patients adhere to their medication schedules.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Health & Wellness Blog: Expert articles and tips on maintaining good health.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>First Aid Tips: Guidance on handling common medical emergencies.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Hospital Finder: Geolocate the closest hospital to you in real-time.</p></li>
      </ul>
      <ul class='md:w-1/2'>
         <li class="text-gray-700  flex items-start w-full list-disc"><p><b>Healthcare Facility Software:</b></p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Electronic Medical Record (EMR): A robust electronic medical records system for healthcare providers.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Doctors App: Tools for healthcare professionals to manage patient interactions and records.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Admin Dashboard: Comprehensive management tools for healthcare administrators.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full "><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p>Analytics Dashboard: Comprehensive financial, inventory, and patient data analytics.</p></li>
      </ul>
  </div>`
  },
  {
    question: "4. Who can use OneClick-Med?",
    answer: `
      <ul class='list-none list-inside flex flex-wrap'>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Healthcare Providers</b>: Hospitals, clinics, and health centers across Africa, especially those in rural and underserved regions that struggle with outdated systems. Our platform aids these institutions by streamlining patient management, improving data flow, and facilitating more effective treatment delivery.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Medical Professionals</b>: Doctors, nurses, and administrative staff in hospitals and clinics will directly benefit from our platform’s efficient patient registration and data management systems reducing administrative burdens and allowing healthcare professionals to focus more on patient care rather than paperwork.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Patients</b>: Patients across various demographics can use the OneClcik-Med mobile app to monitor and track their health record/history, book appointments, request ambulances, remote consultation and lots more.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Healthcare Administrators</b>: Hospital and clinic managers will find the platform invaluable for streamlining operations and reducing operational costs. Efficient data management leads to fewer errors and a more streamlined workflow, significantly impacting the overall facility management.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Government Health Departments</b>: By improving the efficiency of healthcare services, OneClick-Med aids government health departments in better managing public health data, which is crucial for policymaking and resource allocation.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Insurance Companies</b>: Insurers can process claims more efficiently and accurately with better access to patient data, reducing fraud and improving service delivery to policyholders.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Researchers and Public Health Officials</b>: Improved data collection and management provide a richer dataset for clinical research and public health monitoring, enabling more effective health interventions and strategies.</p></li>
      </ul>`
  },
  {
    question: "5. Is OneClick-Med available in my country?",
    answer: "OneClick-Med is currently focusing on Nigeria, with plans to expand to other African countries. We are starting with major cities like Abuja and Lagos and will gradually roll out to other regions."
  },
  {
    question: "6. How does OneClick-Med ensure data security and privacy?",
    answer: "We employ robust security measures, including encryption, secure access controls, and regular security audits to protect sensitive healthcare data. Our platform complies with relevant data protection regulations to ensure patient information is kept confidential and secure."
  },
  {
    question: "7. What are the benefits of using OneClick-Med?",
    answer: `
      <ul class="list-none list-inside flex flex-wrap">
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Reduced Wait Time</b>: Elimination of time-wasting administrative processes.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Enhanced Interoperability</b>: Seamless data exchange across various healthcare platforms.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Reduced Healthcare Costs</b>: Streamlined administrative processes and reduced redundant tests.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Improved Patient Outcomes</b>: Accurate and readily available patient data for better treatment decisions.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>User-Friendly Interface</b>: Designed to be accessible for users with varying levels of tech literacy.</p></li>
        <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Comprehensive Integration</b>: A single platform for managing multiple aspects of healthcare delivery.</p></li>
      </ul>`
  },
  {
    question: "8. How do I get started with OneClick-Med?",
    answer: `<p className="text-gray-700"> <b> Patients:</b> To get started, visit our website or download our application from the Android and iOS stores.<br> <b>Healthcare Facilities:</b> Fill this <a href='contact?formType=healthcare' class="text-ocmblue " > form </a> and our sales team will be in touch.   </p>`
  },
  {
    question: "9. What support does OneClick-Med offer?",
    answer: "We offer comprehensive support to all our users, including a help center with FAQs, user guides, and tutorials. Our customer support team is also available to assist with any issues or questions you may have."
  },

  {question: "10. How is OneClick-Med different from other digital healthcare solutions?",
  answer: `
    <ul class="list-none list-inside flex flex-wrap">
      <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Interoperability</b>: Our competitive advantage includes interoperability, which significantly improves healthcare delivery across Africa. OneClick-Med enables different healthcare IT systems and software applications to communicate, exchange data, and use the information effectively and efficiently without compromising standards, privacy, and security.</p></li>
      <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Local Adaptation and Focus</b>: While many solutions like Helium Health and Babylon Health offer broad healthcare technologies, OneClick-Med is specifically tailored to address the unique challenges and intricacies of the African healthcare landscape.</p></li>
      <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Comprehensive Integration</b>: Unlike platforms that may focus solely on telemedicine or EMR, OneClick-Med integrates patient registration, data management, EMR, remote consultations, and other features such as Emergency care (Ambulance services), Symptom checker, Prescription reminder, Health & Wellness blog, and First Aid tips into a cohesive platform.</p></li>
      <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Accessibility and User-Centric Design</b>: OneClick-Med emphasizes user-friendly interfaces suitable for varying levels of tech literacy, which is particularly important in regions with lower digital literacy rates.</p></li>
      <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Cost-Effectiveness</b>: By focusing on reducing redundant medical tests and streamlining administrative procedures, OneClick-Med is particularly geared towards cost reduction, which is a significant concern in African healthcare settings.</p></li>
      <li class="text-gray-700 mb-3 flex items-start w-full md:w-1/2"><span class="inline-block text-ocmblue mr-2">&#x2713;</span><p><b>Community and Capacity Building</b>: Beyond technology, OneClick-Med is committed to capacity building by training healthcare workers and administrators to use digital tools effectively, thereby ensuring the sustainability and long-term impact of their solution.</p></li>
    </ul>
  `},
  {
    question: "11. How can I contact OneClick-Med for more information?",
    answer: `<p className='text-gray-700'>You can contact us through our website, email us at <b>info@oneclickmed.ng </b>, or call our customer support line at <b> +234-813-836-4425.</b> We are here to answer any questions and provide the information you need.</p>`
  }
];


const FrequentlyAsked: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const refs = useRef(faqs.map(() => createRef<HTMLDivElement>()));
  const activeRef = useRef<HTMLDivElement | null>(null);
  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      activeRef.current = refs.current[index].current;
    }
  };

  useEffect(() => {
    if (activeRef.current) {
      const yOffset = -150; // Adjust this value to fine-tune the scroll position
      const y = activeRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeIndex]);

    

  return (
    <div className="w-full max-w-4xl mx-auto my-10 px-6">
      <p className="text-ocmblue font-bold mb-2 text-center">FAQ</p>

      <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-ocmbluedark mb-12 text-center">
        Frequently Asked Questions
      </h3>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b" >
          <div className="flex items-center gap-2 pr-4">
            <h2 className="text-lg  cursor-pointer text-left flex-grow my-6" onClick={() => handleClick(index)} >
              <span className={`inline-block ${activeIndex === index ? 'text-ocmblue' : ''}`}>{faq.question}</span>
            </h2>
            <div ref={refs.current[index]} className="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 cursor-pointer mt-2" onClick={() => handleClick(index)}>
              {activeIndex === index ? <IoIosCloseCircleOutline size={32} /> : <CiCircleChevDown size={32} />}
            </div>
          </div>
          {activeIndex === index && <p className="py-4 text-left" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>}
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAsked;