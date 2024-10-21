import React from 'react';

const Contact = () => {
  return (
    <section className='bg-[#F8F6FE] lg:mx-0 rounded-3xl lg:flex justify-between'>
      <div className='lg:pl-20 sm:p-4 sm:pt-8 lg:w-[42%] my-auto text-[#5E5C84]'>
        <h1 className='lg:text-5xl text-3xl font-bold text-blue mb-8'>Want to know more? </h1>
        <p className='lg:text-3xl text-xl mb-8 text-left'>Have question(s) concerning our
          services, operations, and solutions, we are here to answer your questions.
        </p>
        <button className="flex my-auto justify-between py-2 w-44 sm:mb-4 rounded-full px-3">
          <p className="text-lg text-[#220E5B] my-auto">Get in touch</p>
          <img className="w-8" src="/images/arrow-right.svg" alt="" />
        </button>
      </div>
      <img className='object-fit lg:w-1/2' src="/images/get-in-touch.png" alt="" />
    </section>
  );
};

export default Contact;