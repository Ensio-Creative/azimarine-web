"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeaderNav = () => {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState(0)

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

  // useEffect(() => {
  //   interval
  // }, [])

  // const interval = setInterval(function () {
  //   setPos(window.scrollY)
  //   // console.log(pos)
  // }, 1000);

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
      <div className={pos > 500 ? 'flex fixed left-0 right-0 w-full lg:px-20 z-50 bg-white text-blue p-4 mx-auto mx-6 justify-between' :
        'flex fixed left-0 right-0 lg:w-[88%] z-50 lg:bg-transparent sm:bg-white border-b border-[#FFFFFF66] text-white p-4 mx-auto mx-6 justify-between'}>
        <Link href={"/"}>
          <img className='w-16' src="/images/azimarine-logo.png" alt="" />
        </Link>
        <div className='w-[45%] sm:hidden flex justify-between text-sm'>
          <p className='my-auto'><Link href={"/about"}> Home</Link></p>
          <p className='my-auto'><Link href={"/about"}> About us</Link></p>
          <p className='my-auto'><Link href={"/services"}>Services</Link></p>
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
            <div onClick={() => closeNav()} className="float-right flex text-4xl cursor-pointer"> <p className='text-xl font-black my-auto mr-3'>CLOSE MENU</p> <img className='w-4' src="./images/close-bar.svg" alt="" /></div>
            <p className='my-auto pt-20 font-semibold uppercase border-b border-blue pb-3 text-2xl'><Link href={"/"}> Home</Link></p>
            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'><Link href={"/about"}>About us</Link></p>

            <p className='my-auto text-2xl font-semibold uppercase border-b border-blue py-5'><Link href={"/services"}>Services</Link></p>
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