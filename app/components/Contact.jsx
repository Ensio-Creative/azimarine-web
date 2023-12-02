import React from 'react';

const Contact = () => {
  return (
    <section className='bg-[#F9F9F9] flex'>
      <img className='h-96 w-1/2 object-fit' src="./images/get-in-touch.png" alt="" />
      <div className='p-20 w-1/2 my-auto text-[#5E5C84]'>
        <p className='text-2xl mb-8'>Have question(s) concerning our
          services, operations, and solutions, we are here to answer your questions.
        </p>
        <button className="flex my-auto justify-between py-2 w-40 bg-blue rounded-full px-3">
          <p className="text-lg text-white my-auto">Contact us</p>
          <img className="w-6" src="./images/arrow-right.svg" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Contact;