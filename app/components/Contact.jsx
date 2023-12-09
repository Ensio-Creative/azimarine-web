import React from 'react';

const Contact = () => {
  return (
    <section className='bg-[#F8F6FE] lg:mx-20 mx-6 lg:mb-20 rounded-3xl lg:p-16 p-6 lg:flex justify-between'>
      <div className=' lg:w-[42%] my-auto text-[#5E5C84]'>
        <h1 className='text-5xl font-bold text-blue mb-8'>Got <br />
          Questions?</h1>
        <p className='text-3xl mb-8 text-left'>Have question(s) concerning our
          services, operations, and solutions, we are here to answer your questions.
        </p>
        <button className="flex my-auto justify-between py-2 w-44 rounded-full px-3">
          <img className="w-8" src="./images/arrow-right.svg" alt="" />

          <p className="text-lg text-[#220E5B] my-auto">Get in touch</p>
        </button>
      </div>
      <img className=' object-fit' src="./images/get-in-touch.png" alt="" />

    </section>
  );
};

export default Contact;