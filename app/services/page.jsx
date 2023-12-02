import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Services = () => {
  return (
    <FrontLayout>
      <HeroSection text={"Services"} img={"service"} />
      <section className='mx-20 my-10'>
        <h1 className='text-5xl font-bold text-blue'>What we do</h1>
      </section>
    </FrontLayout>
  );
};

export default Services;