'use client'

import React, { useState } from 'react';
import Link from "next/link";
import Contact from "./components/Contact";
import SliderComp from "./components/SliderComp";
import FrontLayout from "./layout/FrontLayout";
import Slider from "react-slick";
import { stringToSlug } from '@/utils/stringtoslug';

export default function Home() {
  const [show, setShow] = useState(false)
  const [single, setSingle] = useState()
  const services = [
    {
      title: "Diving Services & Equipment",
      img: "service-1",
      desc: <div className='text-[#5E5C84]'>
        Over the past two decades, we've solidified our position as industry leaders in commercial diving services, marked by a consistent track record of safe and incident-free operations. Our expertise spans the full spectrum, from conducting inspections and performing repairs to ensuring the upkeep of offshore facilities, all within the challenging depth range of 50 to 150 meters beneath the sea surface, serving the needs of our valued client companies.
        <br /> <br />
        Our established track record demonstrates a history of delivering seamless diving solutions tailored to meet the intricate and distinctive requirements of the oil and gas exploration industry. This track record is not only proven but also meticulously traceable, reflecting our consistent ability to address the complex needs inherent in this sector.
        <br /> <br />

        WE own a vast range of subsea tooling, inspection & diving support equipment, all of which are IMCA (International Marine Contractors Association) certified. This certification ensures that our diving tools and equipment adhere to the highest industry standards for safety, reliability, and performance. These IMCA certified tools and equipment are maintained and regularly inspected to meet the stringent requirements of offshore projects.
        <br /> <br />

        We guarantee that our diving spread are not only capable but also safe for use in challenging underwater environments. This includes compliance with the latest industry regulations and best practices, contributing to the overall safety of our diving operations.</div>
    },
    {
      title: "Design, Construction and Fabrication",
      img: "service-2",
      desc: <div className='text-[#5E5C84]'>
        Our comprehensive range of fabrication services extends from Pipeline and Structural fabrication to Sub-Sea Manifolds, Well Templates, Jumpers, Riser Clamps, Launchers and Receivers, Spool Piping, Meter Skids, Side-Tap Assemblies, Tanks, and Flowline fabrication. Primarily oriented toward the oil & gas industry and related sectors, we collaborate closely with our clients' engineering, maintenance, and inspection teams to deliver comprehensive system design, deployment, and integration.
        <br /> <br />
        Irrespective of the scale or complexity of your system requirements, whether local or international, our team of professionals is dedicated to providing solutions that not only meet but exceed your expectations. We ensure timely delivery and adherence to budgetary constraints without compromising on quality.
        <br /> <br />

        We engage in all phases of module, rig, and platform construction, participating in global onshore and offshore projects. Our involvement encompasses the design, procurement, fabrication, and rigorous testing of a wide range of modules, skids, steel structures, container structures and piping. These components are prepared for ultimate delivery, offshore commissioning, and the commencement of operations.
        <br /> <br />

        Structural fabrication, pipe fabrication, marine fabrication, platform fabrication, exotic metal, modular fabrication.</div>
    },
    {
      title: "Corrosion Control",
      img: "service-3",
      desc: <div className='text-[#5E5C84]'>
        Our core expertise revolves around corrosion mitigation, which is vital for preserving and prolonging the operational life of oil and gas assets. In every project we undertake, we are unwavering in our commitment to employing cutting-edge corrosion engineering techniques, products, and procedures to enhance asset integrity, containment, and mitigation.
        <br /> <br />
        rom surface area preparation to pipeline coating within the oil and gas sector, we stand as your foremost indigenous contractors and project partners, offering industry-standard corrosion management solutions tailored to address the comprehensive range of topside, sub-surface, and subsea infrastructure needs stemming from corrosion-related challenges.
        <br />
        <p className='text-[#FE0000]'> FUNFACT: THE ANNUAL COST OF CORROSION TO THE OIL AND GAS INDSTRY GLOBALLY ACCORDING TO NACE INTERNATIONAL IS $60 BILLION USD.</p>
      </div>
    }
  ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <FrontLayout>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <SliderComp />
      <section className="bg-[#F8F6FE] lg:flex">
        <img className="" src="./images/our-company.png" alt="" />
        <div className="lg:p-16 p-6 lg:my-auto my-4">
          <h2 className="lg:text-5xl text-3xl font-bold text-blue">Our
            Company</h2>
          <p className="text-[#5E5C84] lg:my-8 my-4 lg:text-lg text-left">Azimarine's summit is straight forward: We want to be your company of choice for an extensive range of oilfield products, services and logistic support that will help your company to be more efficiently and profitably across different sectors where we operate.</p>
          <Link href={"/about"}>
            <button className="flex justify-between py-1 w-32 sm:mb-6 rounded-full px-2">
              <p className="text-sm text-blue font-bold my-auto">Learn More</p>
              <img className="w-6" src="./images/arrow-right.svg" alt="" />

            </button>
          </Link>
        </div>
      </section>
      <section className="lg:mx-20 lg:my-20 my-10 lg:pb-10 border-b border-b-blue">
        <div className="flex justify-between sm:mx-6">
          <h1 className="lg:text-5xl text-3xl font-bold text-blue">Services</h1>
          <Link href={"/services"}>
            <button className="flex my-auto justify-between py-1 lg:w-28 rounded-full px-2">
              <p className="text-sm text-blue sm:mr-2 my-auto font-bold">View All</p>
              <img className="w-6" src="./images/arrow-right.svg" alt="" />
            </button>
          </Link>
        </div>
        <div className="my-10 lg:grid grid-cols-3 gap-4">
          {/* <Slider {...settings}> */}
          {
            services.map((single, index) => <div className="sm:px-4">
              <Link href={`/services/${stringToSlug(single.title)}`}>
                <div className="relative">
                  <img className='cursor-pointer' src={'./images/service' + parseInt(index + 1) + '.png'} alt="" />
                  <img src="./images/arrow-right.svg" className="absolute cursor-pointer bottom-10 right-10 w-10" alt="" />
                </div>
              </Link>
              <Link href={`/services/${stringToSlug(single.title)}`}>
                <p className="text-blue text-left cursor-pointer text-xl font-bold my-6">{single.title}</p>
              </Link>
            </div>)
          }
          {/* <div className="sm:px-4">
              <Link href={"/services"}>
                <div className="relative">
                  <img src="./images/service1.png" alt="" />
                  <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
                </div>
                <p className="text-blue my-6 lg:text-lg text-left font-bold">Diving Services & Equipment</p>
              </Link>
            </div>
            <div className="sm:px-4">
              <Link href={"/services"}>
                <div className="relative">
                  <img src="./images/service2.png" alt="" />
                  <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
                </div>
              </Link>
              <p className="text-blue my-6 lg:text-lg text-left font-bold">Design, Construction and Fabrication</p>
            </div>
            <div className="sm:px-4">
              <Link href={"/services"}>
                <div className="relative">
                  <img src="./images/service3.png" alt="" />
                  <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
                </div>
              </Link>
              <p className="text-blue my-6 text-left lg:text-lg font-bold">Corrosion Control</p>
            </div> */}
          {/* </Slider> */}
        </div>
      </section>
      <section className="lg:mx-20 mx-6 my-20">
        <h1 className="lg:text-5xl text-3xl font-bold text-blue">Managing Director's <br />
          Statement</h1>
        <div className="lg:flex my-10">
          <img src="./images/md.png" alt="" />
          <div className="bg-[#F8F6FE] rounded-3xl lg:ml-4 lg:p-12 p-4">
            <p className="text-blue sm:mt-6 text-base">ENGR. MICHAEL ABAKAM</p>
            <p className="text-blue">Managing Director, Azimarine</p>
            <p className="my-8 lg:text-lg text-left text-[#5E5C84]">
              Azimarine and General Services Limited aims to provide defect free services to her customers in oil and gas and  construction sectors. We are committed to excellence and are only satisfied when a project has been delivered efficiently without compromising on budget, timeline, process, standards, quality, and safety.
              <br /> <br />
              The company has been evolving and growing steadily, all thanks to our excellent team that gives great attention to details in all our operations and our customers who strongly believe in us and who have worked very closely to reach our common goals.
              <br /> <br />
              We will continue to focus on shared value while investing in our future success, you can count on us.</p>
          </div>
        </div>
      </section>
      <Contact />
      {show && <section>
        <div onClick={() => setShow(false)} className='bg-[#000000B2] w-full h-screen left-0 z-50 opacity-100 fixed top-0'></div>
        <div className=' lg:h-[100vh] h-[100vh] z-50 fixed top-0 overflow-y-auto bg-white left-0 right-0 p-6'>
          <div className='lg:flex lg:mx-20 my-10 relative'>
            <img className='lg:right-22 right-10 w-12 h-12 fixed cursor-pointer' onClick={() => setShow(false)} src="./images/close.svg" alt="" />

            <div className='lg:w-1/2'>
              <img className='lg:w-[37%] lg:fixed lg:h-[82vh] h-[50vh] rounded-xl object-cover' src={'./images/services/' + single.img + '.png'} alt="" />
            </div>
            <div className='lg:w-1/2 lg:pr-2 pb-10 lg:h-[82vh] overflow-y-auto'>
              <p className="text-blue text-4xl text-left   font-bold lg:my-6 my-4">{single.title}</p>
              {single.desc}
            </div>
          </div>
        </div>
      </section>}
    </FrontLayout>
  )
}
