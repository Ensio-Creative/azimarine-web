'use client'

import React from 'react';
import FrontLayout from '@/app/layout/FrontLayout';
import Contact from '@/app/components/Contact';
import { services } from '@/utils/services';
import { stringToSlug } from '@/utils/stringtoslug';
import { usePathname } from 'next/navigation'

const single = () => {
  const pathname = usePathname()

  const route = pathname.substring(10, pathname.length)
  return (
    <FrontLayout>
      <div>
        <div className='lg:px-20 lg:py-32 lg:py-28 sm:pb-20 sm:pt-28 px-4 '>
          {services.map((single, index) => stringToSlug(single.title) === route && <div key={index}>
            <p className='lg:text-5xl text-3xl lg:w-1/2 lg:mb-10 mb-6 font-bold text-blue sm:text-left'> {single.title}</p>
            <img className='w-full lg:h-[550px] rounded-xl object-cover' src={'/images/services/' + single.img + '.png'} alt="" />

            <div className='lg:w-[70%] lg:ml-auto mt-14'>
              {single.desc}
            </div>
          </div>)}
        </div>

        <Contact />
      </div>
    </FrontLayout>
  );
};

export default single;