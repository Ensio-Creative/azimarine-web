"use client"

import React, { useState } from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';
import Contact from '../components/Contact';
import { services } from '@/utils/services';
import { stringToSlug } from '@/utils/stringtoslug';
import Link from 'next/link';

const Services = () => {
  const [show, setShow] = useState(false)
  const [single, setSingle] = useState()

  return (
    <FrontLayout>
      <HeroSection text={"Services"} img={"service"} />
      <section className='lg:mx-20 mx-6 lg:my-20 my-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-blue'>What we do</h1>
        <div className="flex flex-wrap my-6 justify-between">
          {
            services.map((single, index) => <div className='lg:w-[49%] lg:my-6 my-2'>
              <div className="relative">
                <Link href={`/services/${stringToSlug(single.title)}`}>
                  <img className='cursor-pointer' src={'./images/services/' + single.img + '.png'} alt="" />
                </Link>
                <Link href={`/services/${stringToSlug(single.title)}`}>
                  <img src="./images/arrow-right.svg" className="absolute cursor-pointer lg:bottom-10 lg:right-10 right-4 bottom-4  w-10" alt="" />
                </Link>
              </div>
              <Link href={`/services/${stringToSlug(single.title)}`}>
                <p className="text-blue text-left cursor-pointer text-2xl font-bold my-6">{single.title}</p>
              </Link>
            </div>)
          }
        </div>
      </section>
      {show && <section>
        <div onClick={() => setShow(false)} className='bg-[#000000B2] w-full h-screen left-0 z-50 opacity-100 fixed top-0'></div>
        <div className=' lg:h-[100vh] h-[100vh] z-50 fixed top-0 overflow-y-auto bg-white left-0 right-0 p-6'>
          <div className='lg:flex lg:mx-20 my-10 relative'>
            <img className='lg:right-22 right-10 w-12 h-12 fixed cursor-pointer' onClick={() => setShow(false)} src="./images/close.svg" alt="" />

            <div className='lg:w-1/2'>
              <img className='lg:w-[37%] lg:fixed lg:h-[82vh] h-[50vh] rounded-xl object-cover' src={'./images/services/' + single.img + '.png'} alt="" />
            </div>
            <div className='lg:w-1/2 lg:pr-2 pb-10 lg:h-[82vh] overflow-y-auto'>
              <p className="text-blue text-4xl text-left   font-bold lg:my-6 my-4">{single.title}</p>
              {single.desc}
            </div>
          </div>
        </div>
      </section>}
      <Contact />
    </FrontLayout>
  );
};

export default Services;