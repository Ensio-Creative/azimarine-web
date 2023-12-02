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
        <div className='absolute z-10 top-0 bg-blue h-[90vh] w-full opacity-70'></div>
        <Carousel autoplay effect="fade" dots={false}>
          <div>
            <img className='h-[90vh] w-full' src="./images/hero-1.png" alt="" />
          </div>
          <div>
            <img className='h-[90vh] w-full' src="./images/hero-2.png" alt="" />
          </div>
          <div>
            <img className='h-[90vh] w-full' src="./images/hero-3.png" alt="" />
          </div>
        </Carousel>
        <div className='absolute left-20 top-32 z-20 w-1/2'>
          <h1 className='text-7xl text-white font-bold '> An indigenous
            company driven by experience, quality
            and innovation.</h1>
        </div>
        <div className='absolute bottom-10 z-20 right-0 left-0'>
          <img onClick={handleClick} src="./images/arrow-down.svg" className='w-12 mx-auto cursor-pointer' alt="" />
        </div>
      </div>
      <div ref={ref}>
        <h1 className='text-7xl font-bold text-blue p-10 ml-32'>
          We are committed to providing services and solutions that meet the growing demand across different sectors where we operate.
        </h1>
      </div>
    </section>
  );
};

export default SliderComp;