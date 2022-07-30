import Image from "next/image";
import AppNavbar from "./AppNavbar";
import AppSiteLogo from "./AppSiteLogo";

export default function AppHeader() {
  return (
    <div className='fixed top-0 inset-x-0 bg-white shadow shadow-green-200'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-5 lg:px-0 h-[75px] flex items-center justify-between'>
          <AppSiteLogo />

          <AppNavbar />
        </div>
      </div>
    </div>
  );
}
