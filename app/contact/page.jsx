'use client'

import React, { useState } from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Contact = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [company, setCompany] = useState("")

  const [loading, setLoading] = useState(false)
  const sendMessage = () => {
    setLoading(true)
    fetch("https://formsubmit.co/ajax/info@azimarine.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        subject: subject,
        email: email,
        company: company
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === "true") {
          alert("Message sent Successfully!")
          // message.open({
          //   type: 'success',
          //   content: '',
          // });
        }
        setLoading(false)

      })
      .catch((error) => {
        console.log(error);
        // alert("An error occured, Please try again", error.text);
        // message.open({
        //   type: 'error',
        //   content: "An error occured, Please try again",
        // });
        alert('An error occured, Please try again')
        setLoading(false)
        // messageApi.info("An error occured, Please try again", error.text);
      });
  }

  return (
    <FrontLayout>
      <HeroSection text={"How can we help you?"} img={"contact-us"} />
      {/* <div className='w-80 text-[#5E5C84] text-lg lg:py-12 py-10 mx-auto'>
        <p className='text-center'>For further enquiries on our services,
          operations or solutions, get in touch and
          we’d respond to you as soon as we can.</p>
      </div> */}

      <div className='lg:flex justify-evenly lg:my-20 my-12 sm:mx-4'>
        <div className='lg:w-[40%] '>
          <p className='text-[#5E5C84] pb-4 w-[80%]'>Let us know how we can help you with our
            services, operations, and solutions, and we will
            get back to you as soon as we can.</p>
          <div className=' p-10 mb-3 rounded-xl bg-[#F7F7F7] text-[#5E5C84]'>
            <p className='font-bold text-2xl text-blue'>Head Office</p>
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
            <button className='flex mt-4 text-blue font-bold text-lg'>
              <p>Get Directions</p>
              <img className='my-auto ml-4' src="/images/arrow.png" alt="" />
            </button>
          </div>
          <div className='p-10 bg-[#F7F7F7] rounded-xl mt-4'>
            <p className='font-bold text-2xl text-blue'>Fabrication Yard</p>

            <p className=' text-[#5E5C84]  my-2 text-sm'>
              1 Beach Road, Iwo-Okpom,
              Ibeno, Akwa Ibom State,
              Nigeria
              <br /> <br />
              +(234) 705 171 6019 <br />
              +(234) 802 304 4336
              <br /> <br />
              info@azimarine.com
            </p>
            <button className='flex mt-4 text-blue font-bold text-lg'>
              <p>Get Directions</p>
              <img className='my-auto ml-4' src="/images/arrow.png" alt="" />
            </button>
          </div>
        </div>
        <div className='lg:w-[40%] sm:mt-8'>
          <p className='lg:text-4xl text-3xl text-left text-blue font-bold pb-4'>Send us a message</p>
          <div className='border border-[#D9D9D9] sm:mt-4 p-6 rounded-xl'>
            <input value={name} onChange={e => setName(e.target.value)} type="text" className='p-3 rounded-md w-full border border-[#D9D9D9] mb-2' placeholder='Full Name*' />
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" className='p-3 rounded-md w-full border border-[#D9D9D9] my-2' placeholder='Email Address*' />
            <input value={company} onChange={e => setCompany(e.target.value)} type="text" className='p-3 rounded-md w-full border border-[#D9D9D9] my-2' placeholder='Company Name*' />
            <input value={subject} onChange={e => setSubject(e.target.value)} type="text" className='p-3 rounded-md w-full border border-[#D9D9D9] my-2' placeholder='Subject*' />
            <textarea value={message} onChange={e => setMessage(e.target.value)} className='p-3 rounded-md w-full border border-[#D9D9D9] h-32 my-2' placeholder='Message*' ></textarea>
            <button onClick={() => sendMessage()} className='text-[#220E5B] font-semibold p-3 rounded-md my-2 bg-[#F1C405] w-full'>{loading ? 'sending...' : 'Send Message'}</button>
          </div>
        </div>
      </div>
    </FrontLayout>
  );
};

export default Contact;