'use client'
import React, {  useEffect,useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const tabs = ['tab1', 'tab2', 'tab3'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex]);
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);



  return (
    <section className="min-h-[80vh]  bg-white p-6 flex justify-center items-center border-t-1 rounded-t-2xl max-w-7xl  mx-auto ">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between text-left w-full mx-auto gap-6">

        <div className="md:w-1/2">
          <p className="text-ocmblue font-bold mt-10 mb-2 typewriter">WHAT WE ARE ABOUT</p>
          <h3 className="text-2xl text-ocmbluedark font-bold mb-5">Transforming Patient Care through Innovation, Collaboration and Empathy</h3>
          <ul className="flex flex-wrap mb-4 border-t border-whitesmoke text-sm">
            <li className="mr-2">
              <button className={`px-2 py-2 uppercase font-bold ${activeTab === 'tab1' ? 'border-t-2 border-ocmblue text-ocmblue' : 'text-ocmbluedark'}`} onClick={() => setActiveTab('tab1')}>EMR System</button>
            </li>
            <li className="mr-2">
              <button className={`px-2 py-2 uppercase font-bold ${activeTab === 'tab2' ? 'border-t-2 border-ocmblue text-ocmblue' : 'text-ocmbluedark'}`} onClick={() => setActiveTab('tab2')}>Patient-Centered Features</button>
            </li>
            <li>
              <button className={`px-2 py-2 uppercase font-bold ${activeTab === 'tab3' ? 'border-t-2 border-ocmblue text-ocmblue' : 'text-ocmbluedark'}`} onClick={() => setActiveTab('tab3')}>Preventive Health Tips</button>
            </li>
          </ul>
          {activeTab === 'tab1' && (
            <div>
              <p>Our Electronic Medical Record (EMR) system is meticulously crafted to seamlessly integrate patient records, offering a comprehensive solution for healthcare providers.</p>
            </div>
          )}  

          {activeTab === 'tab2' && (
            <div>
              <p>With patient-centered features like; Prescription Reminder, Hospital Finder, Symptom Checker, Emergency Care (Ambulance Services), etc., OneClick-Med is designed with a singular focus – to enhance patient care. From delivering timely reminders, providing map guides, and reducing self medication, to providing access to critical emergency care all in One Click.</p>
            </div>
          )}
          {activeTab === 'tab3' && (
            <div>
              <p>Our Healthcare Tips feature goes beyond conventional healthcare platforms. It not only provides medical information but also offers valuable insights to proactively manage well-being. With a wealth of curated tips and advice, this feature becomes a trusted companion for users on their journey towards a healthier lifestyle.</p>
 
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/assets/img/others/about.png" 
            width={400} 
            height={300} 
            className="w-full img-fluid rounded-lg bg-ocmbluelightshade" 
            alt="Sign up"
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureTabs;
