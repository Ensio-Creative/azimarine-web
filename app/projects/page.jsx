import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Projects = () => {
  const projects = [
    "Pipeline Fabrication",
    "Pipeline Fabrication",
    "Deep Water Breathing Air Cylinder",
    "QIT AMP Installation",
    "QIT Camera Installation",
    "QIT Upgrade Scaffolding",
    "Pipe Maintenance",
    "Deep Sea Diving ",
    "Valve Maintenance",
    "Flowline Inspection and Maintenance"
  ]
  return (
    <FrontLayout>
      <HeroSection text={"Projects"} img={"projects-header"} />
      <section className='bg-blue text-center'>
        <div className='lg:w-1/2 mx-auto text-white lg:p-20 p-10'>
          <p className='text-sm mb-4 text-center'>COMPLETED JOB PORTFOLIO</p>
          <h6 className='lg:text-xl text-base'>Drawing from our flawless project portfolio delivery, we take pride in showcasing some of our successfully completed projects, each a testament to our commitment to excellence and client satisfaction. Our expertise and
            dedication shine through in every endeavor we undertake.</h6>
        </div>
      </section>
      <section className='lg:mx-20 mx-6 lg:my-20 my-10'>
        <div className='lg:flex border-y border-[#5E5C84] py-4 mb-10 justify-between'>
          <p className='text-[#5E5C84] text-left'>List of some of our successfully completed projects</p>
          <button className='bg-blue px-4 sm:my-4 text-white py-1 text-sm'>DOWNLOAD PDF</button>
        </div>
        <div className='flex flex-wrap justify-between'>
          {
            projects.map((single, index) => <div className='lg:w-[48%] my-4'>
              <img src={'./images/projects/project-' + parseInt(index+1) + '.png'} alt="" />
              <p className='text-xl text-blue my-4 font-bold text-left'>{single}</p>
            </div>)
          }
        </div>
      </section>
    </FrontLayout>
  );
};

export default Projects;