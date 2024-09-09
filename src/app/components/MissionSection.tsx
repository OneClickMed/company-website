'use client'

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'next/image';
import 'animate.css/animate.min.css';
import { FaBullseye, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const missions = [
  {
    id: 1,
    icon: <FaBullseye className="text-white text-3xl" />,
    title: 'Mission 1',
    img: '/assets/img/Layer_2.svg',
    description: '<p>To <b>promote interoperability</b> and efficient communication among healthcare providers through a centralized digital platform.</p>'
  },
  {
    id: 3,
    icon: <FaChartLine className="text-white text-3xl" />,
    title: 'Mission 3',
    img: '/assets/img/connectuser.svg',
    description: '<p>To <b>improve healthcare delivery</b> by reducing redundancy, cutting costs, and enhancing the precision and speed of medical services.</p>',
  },
  {
    id: 2,
    icon: <FaHandsHelping className="text-white text-3xl" />,
    title: 'Mission 2',
    img: '/assets/img/patient.svg',
    description: '<p>To <b> empower patients  </b> by providing them with access to their health records and facilitating better health outcomes.</p>'
  },
];

const MissionSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-16 rounded-2xl mb-6 bg-ocmbluelightshade">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-10">
          <p className="text-ocmblue font-bold mb-2">OUR MISSION</p>
          <h3 className="text-lg md:text-2xl font-semibold text-ocmbluedark mb-6">
            At OneClick-Med, We strive to Revolutionize Healthcare through Digital Innovation.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {missions.map((mission) => (
            <ScrollAnimation
              key={mission.id}
              animateIn="fadeIn"
              duration={0.5}
              initiallyVisible={true}
              className="w-full md:w-1/3 p-6 text-center bg-white rounded-lg shadow-sm min-h-96 drop-shadow-sm transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-full flex items-center justify-center rounded-full">
                  <Image src={mission.img} alt="mission statement icon" width={175} height={175} />
                </div>
              </div>
              <div
                className="text-gray-800 text-lg"
                dangerouslySetInnerHTML={{ __html: mission.description }}
              ></div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
