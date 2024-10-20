import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Projects = () => {
  const fabrication = [
    "QIT Jetty Fender Modified Beam",
    "Fabrication of QIT Jetty Fender Boat Anchorage",
    "Fabrication of Oyot Gas Lift Spools",
    "Fabrication of OSO Pig Launcher",
    "Fabrication Work",
  ]
  const construction = [
    "UNIV Road Construction",
    "Obong UNIV Road Construction",
    "Obong UNIV Road Drainage Construction",
    "1.87KM Obong UNIV Road Construction",
    "Drainage Construction",
  ]

  const maintenance = [
    "PCV 091 Spool Modification (QIT Relief Tank 103)",
    "WSGT Box Replacement (QIT Power Plant Area)",
    "QIT Navy Tower Restoration",
    "PCV 128 Spool Modification (QIT Relief Tank 103)",
    "Flow Valve Maintenance",
  ]

  const scaffolding = [
    "QIT Upgrading Scaffolding",
    "QIT Camera Installation Scaffolding",
    "Tank Farm Maintenance Scaffolding",
    "Jetty Maintenance Scaffolding",
  ]

  const painting = [
    "Pipe Painting",
    "Pipe Blasting and Painting",
    "Coating of half inch Pilot Burner Boiler Lines",
  ]
  return (
    <FrontLayout>
      <HeroSection text={"Projects"} img={"projects-header"} />
      <section className='bg-[#F7F7F7] text-center'>
        <div className='lg:w-1/2 mx-auto text-white lg:p-20 p-10'>
          <p className='lg:text-5xl text-3xl font-bold mb-4 text-blue text-center'> Project portfolio</p>
          <h6 className='lg:text-xl font-medium text-[#5E5C84] text-base'>Drawing from our flawless project portfolio delivery, we take pride in showcasing some of our successfully completed projects, each a testament to our commitment to excellence and client satisfaction. Our expertise and
            dedication shine through in every endeavor we undertake.</h6>
        </div>
      </section>
      <section className='lg:mx-20 mx-6 lg:my-20 my-10'>
        <div>
          <h1 className='lg:text-5xl text-3xl font-bold mb-6 text-blue'>Fabrication</h1>
          <div className='grid lg:grid-cols-3 gap-4'>
            {fabrication.map((single, index) => <div>
              <img src={`/images/projects/fab/fab${index + 1}.png`} alt="" />
              <p className='lg:text-[22px] text-xl p-2 text-left text-blue font-semibold'>{single}</p>
            </div>)}
          </div>
        </div>
        <div className='mt-12'>
          <h1 className='lg:text-5xl text-3xl font-bold mb-6 text-blue'>Civil Construction</h1>
          <div className='grid lg:grid-cols-3 gap-4'>
            {construction.map((single, index) => <div>
              <img src={`/images/projects/civil/con${index + 1}.png`} alt="" />
              <p className='lg:text-[22px] text-xl p-2 text-left text-blue font-semibold'>{single}</p>
            </div>)}
          </div>
        </div>
        <div className='mt-12'>
          <h1 className='lg:text-5xl text-3xl font-bold mb-6 text-blue'>Maintenance</h1>
          <div className='grid lg:grid-cols-3 gap-4'>
            {maintenance.map((single, index) => <div>
              <img src={`/images/projects/main/main${index + 1}.png`} alt="" />
              <p className='lg:text-[22px] text-xl text-left p-2 text-blue font-semibold'>{single}</p>
            </div>)}
          </div>
        </div>
        <div className='mt-12'>
          <h1 className='lg:text-5xl text-3xl font-bold mb-6 text-blue'>Scaffolding</h1>
          <div className='grid lg:grid-cols-3 gap-4'>
            {scaffolding.map((single, index) => <div>
              <img src={`/images/projects/scaff/${index + 1}.png`} alt="" />
              <p className='lg:text-[22px] text-xl text-left p-2 text-blue font-semibold'>{single}</p>
            </div>)}
          </div>
        </div>
        <div className='mt-12'>
          <h1 className='lg:text-5xl text-3xl font-bold mb-6 text-blue'>Blasting & Painting</h1>
          <div className='grid lg:grid-cols-3 gap-4'>
            {painting.map((single, index) => <div>
              <img src={`/images/projects/painting/00${index + 1}.png`} alt="" />
              <p className='lg:text-[22px] text-xl p-2 text-left text-blue font-semibold'>{single}</p>
            </div>)}
          </div>
        </div>
      </section>
    </FrontLayout>
  );
};

export default Projects;