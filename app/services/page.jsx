"use client"

import React, { useState } from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';

const Services = () => {
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
      title: "Design, Construction & Fabrication",
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
    },
    {
      title: "Field Maintenance",
      img: "service-4",
      desc: <div className='text-[#5E5C84]'>
        <p className='text-[#FE0000]'>"In the oil and gas industry, we work relentlessly to 'Harmonize Operations' during field maintenance projects, ensuring peak client asset performance and minimal production downtime."</p>
        <br /> <br />
        Within the oil and gas industry, we hold steadfast to our commitment to 'Harmonizing Operations' during field maintenance schedules, a pledge that ensures peak client asset performance and minimal production downtime for all our valued clientele.
        <br /> <br />

        Azimarine stands at the forefront of Nigerian engineering, delivering comprehensive project and integrated maintenance solutions to the Oil and Gas Industry. As a versatile contractor, Azimarine boasts extensive expertise in executing specialized offshore project and maintenance services, encompassing:
        <br /> <br />

        Offshore Services (Pipeline/Wellhead):<br />
        Construction and maintenance of mechanical installations <br />
        Pipeline survey and protection<br />
        Intelligent pigging and pipeline flushing<br />
        Inspection and replacement of cathodic protection systems underwater<br />
        Trenching and backfilling<br />
        Thermal insulation and intervention<br />
        Pre-sweeping<br />
        Sub-sea installation and intervention<br />
        Seabed stabilization<br />
        Wire-line services<br />
        Wellhead removal using diamond wire cutting tools and a 230 HP ROV<br />
        Tubular inspection and well leakage management<br />
        Down-hole video camera system<br />
        Infrastructural maintenance and repairs.<br />
        <br /> <br />

        Azimarine's dedication to excellence in offshore services is a testament to its leading role in the industry, providing bespoke solutions to meet the unique demands of each project.
      </div>
    },
    {
      title: "Scaffolding",
      img: "service-5",
      desc: <div className='text-[#5E5C84]'>

        When it comes to turnkey offshore projects demanding scaffolding services, we stand ready with our expertise and experience. Whether your project is situated onshore or offshore, we offer a broad spectrum of high-quality scaffolding solutions.
        <br /> <br />
        Our comprehensive services cover everything from on-site troubleshooting to project consultation, cost estimation, engineering assessments, and insights derived from years of practical experience and industry knowledge.
        <br /> <br />

        For clients seeking guidance on system selection, layout and planning, financial considerations, and process optimization, our team of experts provides reliable support. We have a dedicated and professional workforce that consistently delivers safe and top-quality scaffolding services at every job site and on every occasion. Additionally, we offer independent scaffold inspections with detailed reports and written recommendations when required, prioritizing safety and customer satisfaction.
        <br /> <br />

        When you're embarking on turnkey offshore projects that necessitate scaffolding services, you can count on us for unmatched expertise, efficiency, and a steadfast commitment to safety and quality. Our experience-driven solutions are designed to meet your specific project needs, ensuring smooth operations and successful project outcomes.</div>
    },
    {
      title: "Procurement",
      img: "service-6",
      desc: <div className='text-[#5E5C84]'>
        <p className='text-[#FE0000]'>

          "At Azimarine, we've revolutionized the art of oil field procurement and delivery with a forward-thinking, precisely orchestrated strategy. Our mission is to not just meet but exceed your expectations by expanding and reinforcing our Foreign Procurement Network. This strategic move positions us as your unrivaled global gateway for material procurement, ensuring timely and efficient deliveries that keep your projects running smoothly."
        </p>
        <br /> <br />
        Operating from two fully operational offices in both the UK and the USA, supported by a cutting-edge information network, Azimarine stands ready to provide 24/7 material procurement services, 365 days a year.
        <br /> <br />

        Our comprehensive array of services includes:
        <br /> <br />

        Sourcing: We excel in identifying and sourcing the materials crucial to your operations. <br />
        Critical Order Management & Information Updates: Azimarine is committed to keeping you informed with real-time order status updates, ensuring a seamless procurement process.<br />
        Procurement: We handle all aspects of the procurement process, from initial requests to final acquisitions.<br />
        Shipment, Freighting, and Insurance: Our services encompass managing the logistics of your materials, including secure shipping, freighting, and necessary insurance coverage.<br />
        Warehousing: We maintain well-equipped warehousing facilities to ensure the safe storage of your materials.<br />
        On-Site Deliveries: Azimarine streamlines the process by delivering materials directly to your project site, minimizing disruptions and delays.
        <br /> <br />

        With resident advisors stationed in both the UK and the USA, Azimarine's procurement capabilities are significantly bolstered. Our aim is to optimize your deliveries in the most cost-effective and efficient manner, reinforcing our reputation as a reliable partner for your material procurement needs.
      </div>
    }
  ]
  return (
    <FrontLayout>
      <HeroSection text={"Services"} img={"service"} />
      <section className='lg:mx-20 mx-6 my-10'>
        <h1 className='lg:text-5xl text-3xl font-bold text-blue'>What we do</h1>
        <div className="flex flex-wrap justify-between">
          {
            services.map((single, index) => <div className='lg:w-[49%] my-6'>
              <div className="relative">
                <img src={'./images/services/' + single.img + '.png'} alt="" />
                <img onClick={() => { setShow(true), setSingle(single) }} src="./images/arrow-right.svg" className="absolute cursor-pointer bottom-10 right-10 w-10" alt="" />
              </div>
              <p className="text-blue font-bold my-3">{single.title}</p>


            </div>)
          }
        </div>
      </section>
      {show && <section>
        <div onClick={() => setShow(false)} className='bg-[#000000B2] w-full h-screen left-0 z-30 opacity-50 fixed top-0'></div>
        <div className='z-40 lg:h-[80vh] h-[90vh] overflow-y-auto fixed lg:top-20 top-10 bg-white lg:left-32 left-5 right-5 lg:right-32 p-6'>
          <div className='lg:flex relative'>
            <img className='right-2 w-6 absolute cursor-pointer' onClick={() => setShow(false)} src="./images/close.svg" alt="" />

            <div className='lg:w-1/2'>
              <img className='lg:w-[37%] lg:fixed lg:h-[72vh] object-cover' src={'./images/services/' + single.img + '.png'} alt="" />
            </div>
            <div className='lg:w-1/2'>
              <p className="text-blue text-lg font-bold my-3">{single.title}</p>
              {single.desc}
            </div>
          </div>
        </div>
      </section>}
    </FrontLayout>
  );
};

export default Services;