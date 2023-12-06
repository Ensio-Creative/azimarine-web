import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Contact = () => {
  return (
    <FrontLayout>
      <HeroSection text={"Contact"} img={"contact-us"} />
      <div className='w-80 text-[#5E5C84] text-lg lg:py-12 py-10 mx-auto'>
        <p className='text-center'>For further enquiries on our services,
          operations or solutions, get in touch and
          we’d respond to you as soon as we can.</p>
      </div>
      
      <div className='lg:flex mx-auto my-2 lg:w-[60%] lg:mb-20 mb-12 sm:mx-4'>
        <div className='lg:p-16 p-10 bg-[#F9F9F9] text-[#5E5C84] lg:w-1/2'>
          <p className='font-bold text-xl text-blue'>Head Office</p>
          <p className=' text-[#5E5C84] my-2 text-sm'>
            54 Mobile Terminal Road,
            Inua Eyet Ikot, Akwa Ibom State,
            Nigeria
            <br /> <br />
            +234 803 508 8453 <br />
            +234 803 688 4384 <br />
            +234 803 752 8443
            <br /> <br />
            info@azimarine.com</p>
        </div>
        <div className='lg:p-16 p-10 bg-[#F9F9F9] lg:ml-4 sm:mt-4 lg:w-1/2 '>
          <p className='font-bold text-xl text-blue'>Fabrication Yard</p>

          <p className=' text-[#5E5C84] my-2 text-sm'>
            1 Beach Road, Iwo-Okpom,
            Ibeno, Akwa Ibom State,
            Nigeria
            <br /> <br />
            +(234) 705 171 6019 <br />
            +(234) 802 304 4336
            <br /> <br />
            info@azimarine.com
          </p>

        </div>
      </div>
    </FrontLayout>
  );
};

export default Contact;