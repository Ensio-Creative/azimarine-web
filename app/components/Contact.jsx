import React from 'react';

const Contact = () => {
  return (
    <section className='bg-[#F8F6FE] lg:mx-0 mx-6 lg:mb-20 mb-10 rounded-3xl lg:flex justify-between'>
      <div className='pl-20 lg:w-[42%] my-auto text-[#5E5C84]'>
        <h1 className='text-5xl font-bold text-blue mb-8'>Want to know more? </h1>
        <p className='text-3xl mb-8 text-left'>Have question(s) concerning our
          services, operations, and solutions, we are here to answer your questions.
        </p>
        <button className="flex my-auto justify-between py-2 w-44 sm:mb-4 rounded-full px-3">
          <p className="text-lg text-[#220E5B] my-auto">Get in touch</p>
          <img className="w-8" src="/images/arrow-right.svg" alt="" />
        </button>
      </div>
      <img className='object-fit w-1/2' src="/images/get-in-touch.png" alt="" />
    </section>
  );
};

export default Contact;