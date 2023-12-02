import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Contact = () => {
  return (
    <FrontLayout>
      <HeroSection text={"Contact"} img={"contact-us"} />
      <div className='w-80 text-center text-[#5E5C84] text-sm py-12 mx-auto'>
        <p>For further enquiries on our services,
          operations or solutions, get in touch and
          we’d respond to you as soon as we can.</p>
      </div>
      <div className='flex mx-auto w-[60%] mb-10'>
        <div className='p-16 bg-[#F9F9F9] text-[#5E5C84] rounded-xl'>
          <p className='font-bold text-xl text-blue'>Head Office</p>
          <p className=' text-[#5E5C84] my-2 text-sm'>
            54 Mobile Terminal Road,
            Inua Eyet Ikot, Akwa Ibom State,
            Nigeria
            <br /> <br />
            +234 803 508 8453
            +234 803 688 4384
            +234 803 752 8443
            <br /> <br />
            nfo@azimarine.com</p>
        </div>
        <div className='p-16 bg-[#F9F9F9] ml-2 rounded-xl'>
          <p className='font-bold text-xl text-blue'>Fabrication Yard</p>

          <p className=' text-[#5E5C84] my-2 text-sm'>
            1 Beach Road, Iwo-Okpom,
            Ibeno, Akwa Ibom State,
            Nigeria
            <br /> <br />
            +(234) 705 171 6019
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