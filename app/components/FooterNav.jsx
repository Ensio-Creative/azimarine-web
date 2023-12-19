import React from 'react';
import Marquee from "react-fast-marquee";

const FooterNav = () => {
  return (
    <footer className='bg-[#15205A] pt-12'>
      <Marquee>
        <div className='lg:text-[196px] overflow-hidden text-8xl font-bold text-white'>
          Azimarine & General Services
        </div>
        <div className='w-10'>
        </div>
      </Marquee>
      <section className='lg:mx-20 mx-6 my-10'>
        <div className='lg:flex border-y py-6 justify-between border-[#F1C405]'>
          <p className='lg:text-lg text-sm text-white sm:mb-4'>Connect with us, we are social</p>
          <div className='flex justify-between w-44'>
            <img src="./images/icons/Group-29.svg" className='w-8' alt="" />
            <img src="./images/icons/Group-28.svg" className='w-8' alt="" />
            <img src="./images/icons/Group-27.svg" className='w-8' alt="" />
            <img src="./images/icons/Group-26.svg" className='w-8' alt="" />
            <img src="./images/icons/Group-25.svg" className='w-8' alt="" />
          </div>
        </div>
        <div className='lg:flex text-xs py-6 justify-between text-white'>
          <p>© 2023 Azimarine & General Services Limited</p>
          <p className='sm:my-1'>Made by <a href="http://ensiocreative.com/" target='_blank'>Ensio Creative</a></p>
        </div>
      </section>
    </footer>
  );
};

export default FooterNav;