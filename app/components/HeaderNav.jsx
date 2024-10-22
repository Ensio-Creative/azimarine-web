"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { services } from '@/utils/services';
import { stringToSlug } from '@/utils/stringtoslug';
import single from '../services/[slug]/page';


const HeaderNav = () => {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState(0)
  const pathname = usePathname()
  const [service, showServices] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    setOpen(true)
  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    setOpen(false)
  }

  return (
    <header >
      <div className={pos > 500 || pathname.includes('services') ? 'flex fixed left-0 right-0 w-full lg:px-20 z-50 bg-white text-blue p-4 mx-auto mx-6 justify-between' :
        'flex fixed left-0 right-0 lg:w-[88%] z-50 lg:bg-transparent sm:bg-white border-b border-[#FFFFFF66] text-white p-4 mx-auto mx-6 justify-between'}>
        <Link href={"/"}>
          <img className='w-16' src="/images/azimarine-logo.png" alt="" />
        </Link>
        <div className='w-[45%] sm:hidden flex justify-between text-sm'>
          <p className='my-auto'><Link href={"/about"}> Home</Link></p>
          <p className='my-auto'><Link href={"/about"}> About us</Link></p>

          <div className='flex cursor-pointer' onClick={() => showServices(!service)}>
            <p className='my-auto'>
              {/* <Link href={"/services"}> */}
              Services
              {/* </Link> */}
            </p>
            {pos > 500 ? <img className={service ? 'w-3 my-auto h-2 ml-2 rotate-180' : 'w-3 my-auto h-2 ml-2'} src="/images/drop.svg" alt="" /> :
              <img className={service ? 'w-3 my-auto h-2 rotate-180 ml-2' : 'w-3 my-auto h-2 ml-2'} src="/images/down-2.svg" alt="" />}
          </div>

          {service && <div className='bg-white sm:hidden border border-[#F7F7F7] rounded-xl px-6 py-3 text-[#370CB2] lg:absolute right-44 top-20'>
            {services.map((single, index) => <Link key={index} href={`/services/${stringToSlug(single.title)}`}>
              <p className='text-base text-[14px] my-2'>{single.title}</p>
            </Link>)}
          </div>}
          {/* <Popup arrow trigger={<button> Trigger</button>} position="bottom center">
            <div>Popup content here !!</div>
          </Popup> */}
          <p className='my-auto'><Link href={"/policies"}>Policies</Link></p>
          <p className='my-auto'> <Link href={'/csr'}>CSR</Link> </p>
          <p className='my-auto'><Link href={"/projects"}>Projects</Link> </p>
          <p className='my-auto'><Link href={"/contact"}>Contact us</Link></p>
        </div>

        <div onClick={() => openNav()} className='cursor-pointer flex lg:hidden '>
          <p className='my-auto text-blue font-bold text-lg mr-2'>MENU</p>
          <img className=' w-6 burger' src="/images/bar.svg" alt="" />
        </div>
        <div id="mySidenav" className='sidenav'>
          <div className="w-[90%] mx-auto">
            <div onClick={() => closeNav()} className="float-right flex text-4xl cursor-pointer"> <p className='text-xl font-black my-auto mr-3'>CLOSE MENU</p> <img className='w-4' src="/images/close-bar.svg" alt="" /></div>
            <p className='my-auto pt-20 font-semibold uppercase border-b border-blue pb-3 text-2xl'><Link href={"/"}> Home</Link></p>
            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'><Link href={"/about"}>About us</Link></p>

            <div className='border-b border-blue'>
              <div className='flex w-full justify-between '>
                <p className='my-auto text-2xl font-semibold uppercase  py-5'><Link href={"/services"}>Services</Link></p>

                <img onClick={() => showServices(!service)} className={service ? 'w-6 my-auto h-5 rotate-180' : 'w-6 my-auto h-5'} src="/images/drop.svg" alt="" />
              </div>
              {service && <div className='px-4'>
                {services.map((single, index) => <Link key={index} href={`/services/${stringToSlug(single.title)}`}>
                  <p className='text-[#370CB2]  font-semibold my-4 text-left text-2xl'>{single.title}</p>
                </Link>)}
              </div>}
            </div>
            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'><Link href={"/policies"}>Policies</Link></p>
            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'> <Link href={'/csr'}>CSR</Link> </p>
            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'><Link href={"/projects"}>Projects</Link> </p>
            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'><Link href={"/contact"}>Contact us</Link></p>

            {/* <div className='flex mt-20 w-[80%] justify-between'>
              <img src="./images/icons/Group-29.svg" className='w-10' alt="" />
              <img src="./images/icons/Group-28.svg" className='w-10' alt="" />
              <img src="./images/icons/Group-27.svg" className='w-10' alt="" />
              <img src="./images/icons/Group-26.svg" className='w-10' alt="" />
              <img src="./images/icons/Group-25.svg" className='w-10' alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;