import React from 'react';
import FrontLayout from '../layout/FrontLayout';
import HeroSection from '../components/HeroSection';
import { Collapse } from 'antd';

const items = (panelStyle) => [
  {
    key: '1',
    label: <p className='lg:text-2xl text-left text-base font-bold text-blue'>Corporate Pledge of Commitment & Competence</p>,
    children: <div className='text-[#5E5C84] text-lg mb-6'>
      We firmly believe that, through the utilization of our extensive human resources, wealth of experience, skilled workforce, and diverse skillsets, we have the capacity to deliver sustainable and standardized solutions on a per project basis. The sesolutions  arecharacterized  bytheir reliability, trustworthiness, flexibility, and cost-efficiency, meeting and often exceeding the needs and expectations of all our valued clients."
      <br /><br />
      Our mission is to assist organizations in achieving their corporate objectives by  deliveringexceptional customer experiences, maintaining  qualitysafety standards, optimizing operational efficiency, ensuring compliance, and promoting sustainability .We achieve this by harnessing the potential of new technology, competent human resources, and constant innovation.
      <br /> <br />
      Our mission is to empower organizations in reaching their corporate goals by providing unparalleled customer experiences, upholding rigorous safety standards, enhancing operational efficiency, ensuring full compliance, and championing sustainability. We realize this vision by harnessing the capabilities of cutting-edge technology, skilled human resources, and continuous innovation.
    </div>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p className='lg:text-2xl text-left text-base font-bold text-blue'>Management Team</p>,
    children: <div className='text-[#5E5C84] text-lg mb-6'>
      "In the dynamic realm of oil and gas exploration, our company is guided by a distinguished management team,which collectively boasts an impressive industry experience of over 100 years.Each member of our management team is not only seasoned in their respective roles but also deeply committed to elevating our operational and administrative efficiency.
      <br /> <br />
      Our leadership includes individuals with a profound understanding of the oil and gas exploration industry's intricate demands. Their wealth of experience encompasses various facets, from upstream to downstream operations, including drilling, field development, reservoir management, and environmental compliance.
      <br /> <br />

      With this depthof expertise, our management team excels in navigating the complex challenges of the sector.They are dedicated to ensuring that every project and service delivery not only
      meets but surpasses industry expectations. This commitment extends to improving exploration techniques,enhancing safety protocols, and promoting sustainable practices in every facet of our operations.
      <br /> <br />

      In a continually evolving industry, our management team's vision and expertise provide the guiding force necessary to remain at the forefront of oil and gas exploration, setting high standards for operational excellence, safety, and environmental stewardship
    </div>,
    style: panelStyle,
  }
];
const AboutPage = () => {
  const work = [
    {
      title: "Flexibility and Adaptability",
      text: "We tailor our approach to meet your specific client requirements and project expectations, ensuring that our solutions align with your unique needs."
    },
    {
      title: "Quality Control",
      text: "Our commitment to quality extends to complying with international best practices in the oil and gas industry. We maintain rigorous quality control measures to deliver excellence."
    },
    {
      title: "Competence and Capacity",
      text: "Our success is built on the foundation of highly trained and skilled personnel and staff who possess the knowledge and expertise required to execute projects effectively."
    },
    {
      title: "Innovative Solutions",
      text: "We continually strive to stay at the forefront of the industry by adopting innovative solutions, new technological devices, equipment, and systems that enhance project efficiency and results."
    },
    {
      title: "Safety Standards",
      text: "Safety is a non-negotiable priority for us. We adhere to the highest safety standards and protocols to ensure the well-being of our workforce and the successful execution of every project."
    },
    {
      title: "Teamwork",
      text: "We believe in the power of collaboration. Our emphasis on teamwork ensures that our efforts are synchronized and aligned to achieve project success."
    },
  ]
  const panelStyle = {
    margin: 24,
    background: "white",
    borderTop: '1px solid #5E5C84',
    borderBottom: '1px solid #5E5C84',
    borderRadius: "0px"
  };


  return (
    <FrontLayout>
      <HeroSection img={"about"} text={"About us"} />
      <section className='lg:px-20 px-6 lg:pt-20 py-10'>
        <h1 className='lg:text-5xl text-3xl text-blue font-bold'>Our Story & <br />
          History</h1>
        <p className='my-6 text-left lg:ml-40 text-[#5E5C84]'>
          Established in 1985 in the oil-rich region of the Southern Hemisphere of Nigeria, Azimarine is an entity duly incorporated under the laws of the Federal Republic of Nigeria. Our operational footprint extends across various oil assets and facilities nationwide. Over the years, our company has evolved into a premier indigenous firm, equipped with a blend of local and international expertise to address the ever-evolving demands and challenges of the industry.
          <br /> <br />
          Azimarine and General Services Limited have overtime cultivated a well-known reputation for delivering essential oil and gas services. These services encompass an array of critical areas such as rig maintenance and repair, vessel leasing, cutting-edge design, fabrication, and installation, as well as comprehensive offshore and onshore engineering solutions. We also excel in advanced coating and blasting techniques, along with a suite of specialized oil and gas-themed services.
          <br /> <br />

          At the heart of our success is our pool of competent and capable personnel, each possessing valuable experience in offshore and onshore oil-based activities. This collective expertise ensures that we consistently meet and exceed industry standards while embracing innovation and reliability. Our journey has been one of growth, adaptability, and unwavering commitment to the energy sector's evolving needs.
          <br /> <br />

          In the Oil & Gas sector, the primacy of health, safety, and environmental concerns cannot be overstated. It is for this very reason that Azimarine and General Services Limited has implemented a robust Occupational Health and Safety management system that aligns with the stringent requirements of industry standards, including:
          <br /> <br />
          <ul className='ml-6'>
            <li>BS 8800:1996 - Guide to Occupational Health and Safety Management</li>
            <li>OHSAS 18001:1999 - Occupational Health and Management System Specifications</li>
            <li>Health Safety and Environment guidance publication HS(G)65 - Successful Health and Safety Management</li>
          </ul>

          <br /> <br />

          These comprehensive standards underpin our unwavering commitment to ensuring the well-being and security of our workforce, the integrity of our operations, and the preservation of the environment. Our dedication to health, safety, and environmental stewardship is not just a priority but an integral part of our corporate ethos.
        </p>
      </section>
      <img src="./images/about-img-1.png" alt="" />
      <section className='bg-[#F8F6FE] lg:flex'>
        <div className='lg:px-20 p-7 my-auto lg:w-[60%]'>
          <h1 className='lg:text-4xl text-3xl mb-4 text-blue font-bold'>Corporate Pledge of  <br />
            Commitment & Competence</h1>
          <p className='text-blue'>We firmly believe that, through the utilization of our extensive human resources, wealth of experience, skilled workforce, and diverse skill sets, we have the capacity to deliver sustainable and standardized solutions on a per project basis. These solutions are characterized by their reliability, trustworthiness, flexibility, and cost-efficiency, meeting and often exceeding the needs and expectations of all our valued clients."
            <br /> <br />
            "Our mission is to assist organizations in achieving their corporate objectives by delivering exceptional customer experiences, maintaining quality safety standards, optimizing operational efficiency, ensuring compliance, and promoting sustainability. We achieve this by harnessing the potential of new technology, competent human resources, and constant innovation."
            <br /> <br />

            "Our mission is to empower organizations in reaching their corporate goals by providing unparalleled customer experiences, upholding rigorous safety standards, enhancing operational efficiency, ensuring full compliance, and championing sustainability. We realize this vision by harnessing the capabilities of cutting-edge technology, skilled human resources, and continuous innovation."</p>
        </div>
        <img className='lg:w-[40%] h-[100vh]' src="./images/abut-img.png" alt="" />
      </section>
      <section className='lg:p-20 p-6'>
        <h1 className='lg:text-5xl text-3xl font-bold text-blue'>Meet the <br /> Management Team</h1>

      </section>

      <section className='lg:px-20 px-6 lg:flex lg:py-20 py-10 lg:mt-20 mt-10 bg-[#F9F9F9]'>
        <div className='lg:w-[30%]'>
          <h1 className='lg:text-5xl text-3xl font-bold text-blue'>How We Work</h1>
          <p className='text-blue'>AZIMAG - Success Factor</p>
        </div>
        <div className='flex lg:w-[70%] lg:mt-10 mt-6 flex-wrap justify-between'>
          {
            work.map((single, index) =>
              <div key={index} className='lg:w-[49%] bg-white p-8 w-[98%] my-2'>
                <p className='my-4 font-bold text-2xl text-blue'>0{index + 1}</p>
                <div className='border-t border-t-blue'>
                  <h6 className='text-lg font-bold text-blue my-4'>{single.title}</h6>
                  <p className='text-[#5E5C84] text-left'>{single.text}</p>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </FrontLayout>
  );
};

export default AboutPage;