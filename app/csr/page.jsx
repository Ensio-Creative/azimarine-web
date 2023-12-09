import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const CSR = () => {
  return (
    <FrontLayout>
      <HeroSection text={"CSR"} img={"csr-header"} />
      <section className='lg:mx-44 mx-6 lg:mt-20 my-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-blue'>Corperate Social <br /> Responsibility</h1>
        <p className='text-[#5E5C84] lg:ml-40 my-8 text-left'>Our commitment to corporate social responsibility (CSR) goes beyond mere words; it's ingrained in our very ethos.We adhere to the highest standards of corporate governance, ethics, and goodwill, understanding that our role transcends business. CSR is more than a concept; it's a tangible part of our business practices.
          <br /> <br />
          We channel this commitment into creating value-added products and services that not only benefit our clients but also contribute to the betterment of our communities. Our aim is to foster sustainable social investments that empower local communities. This approach is not just about being good corporate citizens; it's about making a meaningful impact.
          <br /> <br />

          At Azimarine, we recognize the profound importance of sustainable development. Each community is unique, and we acknowledge that by tailoring our efforts to meet their distinct needs. A central element of our CSR strategy is the empowerment of individuals, fostering employment opportunities and financial stability. Our employment policy focuses on recruiting from the very communities we operate in, strengthening the bonds that tie us together.
          <br /> <br />

          Our involvement extends to the provision of essential social amenities and enhancing the quality of life for those in our host communities. We recognize the significance of driving development from the inside out, ensuring that it aligns with the pressing needs of the community, not merely perceived requirements.
          <br /> <br />

          Moreover, we understand that true CSR is not just about the present; it's about securing a brighter future. Our engagement strategy is proactive, designed to identify the needs of both the current and upcoming generations. We implement sustainable programs that have a lasting and multiplying effect on our communities, fostering positive change in their way of life.
          <br /> <br />

          In essence, our commitment to CSR is not just a statement; it's a lived reality. We stand committed to creating a better world, one that thrives on shared values, collective growth, and a sustainable future.</p>
      </section>
      <div className='lg:mx-20 mx-6 mt-10 lg:mb-20 mb-12'>
        <img className='sm:h-44 object-cover w-full rounded-lg' src="./images/one.png" alt="" />
        <div className='flex mt-2'>
          <img className='w-1/2 lg:w-[60%] sm:h-44 lg:h-96 object-cover rounded-lg' src="./images/two.png" alt="" />
          <img src="./images/three.png" className='ml-2 w-1/2 lg:w-[40%] sm:h-44 lg:h-96 object-cover rounded-lg' alt="" />
        </div>
      </div>
    </FrontLayout>
  );
};

export default CSR;