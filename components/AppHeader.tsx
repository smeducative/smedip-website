import { useState } from "react";
import AppNavbar from "./AppNavbar";
import AppNavbarMobile from "./AppNavbarMobile";
import AppSiteLogo from "./AppSiteLogo";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 inset-x-0 z-50 bg-white shadow shadow-green-200 bg-opacity-75 filter backdrop-blur-md border-t-4 border-green-600'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-5 xl:px-0 py-3 flex items-center justify-between'>
          <AppSiteLogo />

          <AppNavbar />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='block lg:hidden'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
        <AppNavbarMobile open={isOpen} />
      </div>
    </div>
  );
}
