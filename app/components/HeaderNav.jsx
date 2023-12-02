import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <header className='flex p-2 px-20 justify-between'>
      <Link href={"/"}>
        <img className='w-12' src="./images/azimarine-logo.png" alt="" />
      </Link>
      <div className='w-1/2 flex justify-between text-blue text-sm'>

        <p className='my-auto'><Link href={"/about"}> About us</Link></p>
        <p className='my-auto'><Link href={"/services"}>Services</Link></p>
        <p className='my-auto'> <Link href={'/csr'}>CSR</Link> </p>
        <p className='my-auto'><Link href={"/projects"}>Projects</Link> </p>
        <p className='my-auto'><Link href={"/contact"}>Contact us</Link></p>
      </div>
    </header>
  );
};

export default HeaderNav;