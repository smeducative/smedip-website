import Image from "next/image";
import AppNavbar from "./AppNavbar";
import AppSiteLogo from "./AppSiteLogo";

export default function AppHeader() {
  return (
    <div className='fixed top-0 inset-x-0 bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-5 lg:px-0 py-3 flex items-center justify-between '>
          <AppSiteLogo />

          <AppNavbar />
        </div>
      </div>
    </div>
  );
}
