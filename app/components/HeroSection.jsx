import React from 'react';

const HeroSection = ({ img, text }) => {
  return (
    <div className='relative'>
      <div className='absolute z-10 top-0 bg-blue h-[73vh] w-full opacity-70'></div>
      <img src={'./images/' + img + '.png'} alt="" />
      <div className='absolute left-0 right-0 top-40 z-20'>
        <h1 className='text-8xl text-white text-center font-bold '>{text}</h1>
      </div>
    </div>
  );
};

export default HeroSection;