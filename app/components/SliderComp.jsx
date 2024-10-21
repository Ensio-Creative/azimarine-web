import React, { useRef } from 'react';
import { Carousel } from 'antd';

const SliderComp = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section>
      <div className='relative'>
        <div className='absolute z-10 top-0 bg-[#00000073] h-[100vh] w-full opacity-100'></div>
        <Carousel autoplay autoplaySpeed={5000} effect="fade" dots={false}>
          <div>
            <img className='h-[100vh] w-full sm:object-cover' src="./images/hero-1.png" alt="" />
          </div>
          <div>
            <img className='h-[100vh] w-full sm:object-cover' src="./images/hero-2.png" alt="" />
          </div>
          <div>
            <img className='h-[100vh] w-full sm:object-cover' src="./images/hero-3.png" alt="" />
          </div>
        </Carousel>
        <div className='absolute lg:left-20 left-10 lg:top-52 top-80 z-20 lg:w-[60%] w-[80%]'>
          <h1 className='lg:text-7xl text-4xl text-white font-bold '> An indigenous
            company driven by experience, quality
            and innovation.</h1>
        </div>
        <div className='absolute bottom-10 z-20 right-0 left-0'>
          <img onClick={handleClick} src="./images/arrow-down.svg" className='w-12 mx-auto cursor-pointer' alt="" />
        </div>
      </div>
      <div ref={ref} className='lg:py-20 py-10'>
        <h1 className='lg:text-7xl text-2xl text-blue p-10 lg:ml-32'>
          We are committed to providing services and solutions that meet the growing demand across different sectors where <br /> we operate.
        </h1>
      </div>
    </section>
  );
};

export default SliderComp;