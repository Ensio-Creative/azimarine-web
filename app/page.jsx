'use client'

import Link from "next/link";
import Contact from "./components/Contact";
import SliderComp from "./components/SliderComp";
import FrontLayout from "./layout/FrontLayout";
import Slider from "react-slick";

export default function Home() {
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
      <section className="bg-[#F9F9F9] lg:flex">
        <img className="" src="./images/our-company.png" alt="" />
        <div className="lg:p-16 p-6 my-auto">
          <h2 className="lg:text-5xl text-3xl font-bold text-blue">Our
            Company</h2>
          <p className="text-[#5E5C84] my-6 text-lg">Azimarine's summit is straight forward: We want to be your company of choice for an extensive range of oilfield products, services and logistic support that will help your company to be more efficiently and profitably across different sectors where we operate.</p>
          <Link href={"/about"}>
            <button className="flex justify-between py-1 w-32 border rounded-full px-2 border-[#220E5B]">
              <p className="text-sm text-blue my-auto">Learn More</p>
              <img className="w-6" src="./images/arrow-right.svg" alt="" />
            </button>
          </Link>
        </div>
      </section>
      <section className="lg:mx-20 mx-6 my-10 border-b border-b-blue">
        <div className="flex justify-between">
          <h1 className="lg:text-5xl text-3xl font-bold text-blue">Services</h1>
          <Link href={"/services"}>
            <button className="flex my-auto justify-between py-1 w-32 border rounded-full px-2 border-[#220E5B]">
              <p className="text-sm text-blue my-auto">View All</p>
              <img className="w-6" src="./images/arrow-right.svg" alt="" />
            </button>
          </Link>
        </div>
        <div className=" my-10">
          <Slider {...settings}>
            <div className="sm:px-4">
              <div className="relative">
                <img src="./images/service1.png" alt="" />
                <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
              </div>
              <p className="text-blue my-3">Diving Services & Equipment</p>
            </div>
            <div className="sm:px-4">
              <div className="relative">
                <img src="./images/service2.png" alt="" />
                <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
              </div>
              <p className="text-blue my-3">Design, Construction and Fabrication</p>
            </div>
            <div className="sm:px-4">
              <div className="relative">
                <img src="./images/service3.png" alt="" />
                <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
              </div>
              <p className="text-blue my-3">Corrosion Control</p>
            </div>
          </Slider>
        </div>
      </section>
      <section className="lg:mx-20 mx-6 my-10">
        <h1 className="lg:text-5xl text-3xl font-bold text-blue">Statement <br />
          from our MD</h1>
        <div className="lg:flex my-10">
          <img src="./images/md.png" alt="" />
          <div className="bg-[#F9F9F9] rounded-3xl lg:ml-4 lg:p-12 p-4">
            <p className="text-blue text-sm">ENGR. MICHAEL ABAKAM</p>
            <p className="text-blue">Managing Director, Azimarine</p>
            <p className="my-8 lg:text-lg text-[#5E5C84]">
              Dr Awele V. Elumelu oversees the healthcare investments in the Heirs Holdings' portfolio. She holds a Bachelor of Medicine, Bachelor of Surgery degree from the University of Benin. Her experience as a medical doctor includes general medical practice and emergency medicine. In Nigeria, Dr Elumelu has worked with the Lagos University Teaching Hospital and in the UK, with Grantham and District Hospital, Grantham. In November 2020, she was appointed to the Yale Institute for Global Health Advisory Board. In January 2018, Dr Elumelu was appointed as the Champion for immunisation in Africa by the Global Alliance for Vaccines and Immunisation (GAVI).</p>
          </div>
        </div>
      </section>
      <Contact />
    </FrontLayout>
  )
}
