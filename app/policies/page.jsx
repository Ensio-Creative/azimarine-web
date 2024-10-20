import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const policies = () => {
  return (
    <FrontLayout>
      <HeroSection text={"Policies"} img={"policies"} />
      <section className='lg:px-20 px-4 py-12'>
        <p className='lg:text-5xl text-3xl font-bold text-blue'>Our Policies</p>
        <div className='bg-[#F7F7F7] lg:p-8 p-4 rounded-[20px] lg:my-10 my-4'>
          <div className='flex border-y border-[#5E5C84] justify-between py-6'>
            <p className='lg:text-4xl text-2xl font-bold text-blue'>Safety</p>
            <p className='text-[#5E5C84] lg:text-xl'>No document here.</p>
          </div>
          <div className='flex border-b border-[#5E5C84] justify-between py-6'>
            <p className='lg:text-4xl text-2xl font-bold text-blue'>Diving</p>
            <p className='text-[#5E5C84] lg:text-xl'>No document here.</p>
          </div>
          <div className='flex border-b border-[#5E5C84] justify-between py-6'>
            <p className='lg:text-4xl text-2xl font-bold text-blue'>QA/QC</p>
            <p className='text-[#5E5C84] lg:text-xl'>No document here.</p>
          </div>
          <div className='flex border-b border-[#5E5C84] justify-between py-6'>
            <p className='lg:text-4xl text-2xl font-bold text-blue'>Offshore</p>
            <p className='text-[#5E5C84] lg:text-xl'>No document here.</p>
          </div>
        </div>
      </section>
    </FrontLayout>
  );
};

export default policies;