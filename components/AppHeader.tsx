import Image from "next/image";
import AppNavbar from "./AppNavbar";

export default function AppHeader() {
  return (
    <div className='fixed top-0 inset-x-0 bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-5 lg:px-0 py-3 flex items-center justify-between '>
          <div className='flex'>
            <Image
              src='/logo.png'
              alt='smedip logo'
              width={50}
              height={50}
              className='h-8 w-8'
            />
          </div>

          <AppNavbar />
        </div>
      </div>
    </div>
  );
}
