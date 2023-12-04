'use client'

import Link from "next/link";
import Contact from "./components/Contact";
import SliderComp from "./components/SliderComp";
import FrontLayout from "./layout/FrontLayout";

export default function Home() {
  return (
    <FrontLayout>
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
        <div className="lg:flex justify-between my-10">
          <div>
            <div className="relative">
              <img src="./images/service1.png" alt="" />
              <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
            </div>
            <p className="text-blue my-3">Diving Services & Equipment</p>
          </div>
          <div>
            <div className="relative">
              <img src="./images/service2.png" alt="" />
              <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
            </div>
            <p className="text-blue my-3">Design, Construction and Fabrication</p>
          </div>
          <div>
            <div className="relative">
              <img src="./images/service3.png" alt="" />
              <img src="./images/arrow-right.svg" className="absolute bottom-10 right-10 w-10" alt="" />
            </div>
            <p className="text-blue my-3">Corrosion Control</p>
          </div>
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
