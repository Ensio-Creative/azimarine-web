import React from 'react';

const HeroSection = ({ img, text }) => {
  return (
    <div className='relative'>
      <div className='absolute z-10 top-0 bg-[#00000073] lg:h-[600px] h-[65vh] w-full opacity-100'></div>
      <img className='lg:h-[600px] sm:pt-20 w-full object-cover object-top h-[65vh]' src={'./images/' + img + '.png'} alt="" />
      <div className='absolute left-0 right-0 lg:top-64 sm:top-80 z-20'>
        <h1 className='lg:text-8xl text-5xl text-white text-center font-bold '>{text}</h1>
      </div>
    </div>
  );
};

export default HeroSection;