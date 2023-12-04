import React from 'react';
import Marquee from "react-fast-marquee";

const FooterNav = () => {
  return (
    <footer className='bg-[#15205A]'>
      <Marquee>
        <div className='lg:text-[196px] overflow-hidden text-8xl font-bold text-white'>
          Azimarine & General Services
        </div>
      </Marquee>
     <section className='lg:mx-20 mx-6 my-10'>
      <div className='flex border-y py-6 justify-between border-white'>
        <p className='lg:text-lg text-sm text-white'>Connect with us, we are social</p>
        <div className='flex justify-between w-44'>
          <img src="./images/icons/Vector.svg" className='w-6' alt="" />
          <img src="./images/icons/Vector-1.svg" className='w-6' alt="" />
          <img src="./images/icons/Instagram.svg" className='w-6' alt="" />
          <img src="./images/icons/Vector-2.svg" className='w-6' alt="" />
          <img src="./images/icons/YouTube.svg" className='w-6' alt="" />
        </div>
      </div>
      <div className='flex lg:text-sm text-xs py-6 justify-between text-white'>
        <p>© 2023 Azimarine & General Services Limited</p>
        <p>Made by <a href="http://ensiocreative.com/" target='_blank'>Ensio Creative</a></p>
      </div>
     </section>
    </footer>
  );
};

export default FooterNav;