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
        <div className='w-1/2 mx-auto text-white p-16'>
          <p className='text-sm mb-4'>COMPLETED JOB PORTFOLIO</p>
          <h6 className='text-xl font-bold'>Drawing from our flawless project portfolio delivery, we take pride in showcasing some of our successfully completed projects, each a testament to our commitment to excellence and client satisfaction. Our expertise and
            dedication shine through in every endeavor we undertake.</h6>
        </div>
      </section>
      <section className='mx-20 my-10'>
        <div className='flex border-y border-[#5E5C84] py-4 justify-between'>
          <p className='text-[#5E5C84]'>List of some of our successfully completed projects</p>
          <button className='bg-blue px-4 text-white py-1 text-sm'>DOWNLOAD PDF</button>
        </div>
        <div className='flex flex-wrap justify-between'>
          {
            projects.map((single, index) => <div className='w-[48%] my-4'>
              <img src={'./images/projects/project-' + parseInt(index+1) + '.png'} alt="" />
              <p className='text-lg text-blue mt-2 font-bold'>{single}</p>
            </div>)
          }
        </div>
      </section>
    </FrontLayout>
  );
};

export default Projects;