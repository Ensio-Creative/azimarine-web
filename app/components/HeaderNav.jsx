"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeaderNav = () => {
  const [open, setOpen] = useState(false)

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
      <div className='flex w-full z-50 bg-white p-4 lg:px-20 px-6 justify-between'>
        <Link href={"/"}>
          <img className='w-16' src="./images/azimarine-logo.png" alt="" />
        </Link>
        <div className='w-[40%] sm:hidden flex justify-between text-blue text-sm font-bold'>
          <p className='my-auto'><Link href={"/about"}> About us</Link></p>
          <p className='my-auto'><Link href={"/services"}>Services</Link></p>
          <p className='my-auto'> <Link href={'/csr'}>CSR</Link> </p>
          <p className='my-auto'><Link href={"/projects"}>Projects</Link> </p>
          <p className='my-auto'><Link href={"/contact"}>Contact us</Link></p>
        </div>

        <div onClick={() => openNav()} className='cursor-pointer flex lg:hidden '>
          <p className='my-auto text-blue text-lg mr-2'>MENU</p>

          <img className=' w-6 burger' src="./images/bar.svg" alt="" />
        </div>
        <div id="mySidenav" className='sidenav'>
          <div className="w-[90%] mx-auto">
            <p onClick={() => closeNav()} className="float-right flex text-4xl cursor-pointer"> <p className='text-sm font-bold my-auto mr-3'>CLOSE MENU</p> &times;</p>
            <p className='my-auto pt-20 font-bold  border-b border-blue pb-3 text-3xl'><Link href={"/about"}> About us</Link></p>
            <p className='my-auto text-3xl font-bold  border-b border-blue py-3'><Link href={"/services"}>Services</Link></p>
            <p className='my-auto text-3xl font-bold  border-b border-blue py-3'> <Link href={'/csr'}>CSR</Link> </p>
            <p className='my-auto text-3xl font-bold  border-b border-blue py-3'><Link href={"/projects"}>Projects</Link> </p>
            <p className='my-auto text-3xl font-bold  border-b border-blue py-3'><Link href={"/contact"}>Contact us</Link></p>

            <div className='flex mt-20 w-[80%] justify-between'>
              <img src="./images/icons/mobile/Group-29.svg" className='w-10' alt="" />
              <img src="./images/icons/mobile/Group-28.svg" className='w-10' alt="" />
              <img src="./images/icons/mobile/Group-27.svg" className='w-10' alt="" />
              <img src="./images/icons/mobile/Group-26.svg" className='w-10' alt="" />
              <img src="./images/icons/mobile/Group-25.svg" className='w-10' alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;