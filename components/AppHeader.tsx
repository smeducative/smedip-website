import { useState, useEffect } from "react";
import AppNavbar from "./AppNavbar";
import AppNavbarMobile from "./AppNavbarMobile";
import AppSiteLogo from "./AppSiteLogo";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Facebook, Youtube } from "react-feather";
import { FaTiktok } from "react-icons/fa6";
import { Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`top-0 z-50 fixed inset-x-0 bg-gradient-to-r from-[#a5f3fc]/30 to-[#86efac]/20 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-md border-t-4 border-blue-400 dark:border-blue-500/60 filter`}>
      <div
        id='sosmed'
        className={`text-sm bg-gradient-to-r from-[#a5f3fc] to-[#86efac] dark:from-slate-800 dark:to-slate-900 dark:text-slate-200 duration-500 ${
          isVisible ? "py-2" : ""
        }`}
        // then display none
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          height: isVisible ? "auto" : "0",
          opacity: isVisible ? 1 : 0,
          overflow: "hidden",
        }}>
        <div className='px-3 flex justify-between items-center mx-auto max-w-7xl gap-y-1'>
          <div className='flex flex-col items-center sm:items-start gap-1'>
            <span>Ikuti kami di</span>
            <div className='flex items-center gap-3'>
              <Link
                href={"https://www.facebook.com/smkdiponegoro.smkdiponegoro"}
                target='_blank'>
                <Facebook className='w-4 h-4 md:w-6 md:h-6 hover:text-blue-500 transition duration-300 ease-in-out hover:scale-110' />
              </Link>
              <Link
                href={"https://www.instagram.com/smkdiponegorokaranganyar"}
                target='_blank'>
                <InstagramLogoIcon className='w-4 h-4 md:w-6 md:h-6 hover:text-orange-500 transition duration-300 ease-in-out hover:scale-110' />
              </Link>
              <Link
                href={"https://www.youtube.com/@smkdiponegorokaranganyar5628"}
                target='_blank'>
                <Youtube className='w-4 h-4 md:w-6 md:h-6 hover:text-red-500 transition duration-300 ease-in-out hover:scale-110' />
              </Link>
              <Link
                href={"https://www.tiktok.com/@smkdiponegoro"}
                target='_blank'>
                <FaTiktok className='w-4 h-4 md:w-6 md:h-6 hover:text-pink-500 transition duration-300 ease-in-out hover:scale-110' />
              </Link>
            </div>
          </div>
          <div className=''>
            <Link
              href='mailto:smkdipo.pekalongan@gmail.com'
              className='flex items-center justify-center transition duration-300 ease-in-out hover:text-yellow-700 hover:animate-pulse hover:underline'>
              <Mail className='w-4 h-4 mr-2' />
              <span className=''>smkdipo.pekalongan@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='flex justify-between items-center px-5 py-3'>
          <AppSiteLogo />

          <div className='flex items-center gap-1 lg:gap-1'>
            <ThemeToggle />
            <AppNavbar />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='-ml-1 block lg:hidden'>
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
        </div>
        <AppNavbarMobile open={isOpen} />
      </div>
    </div>
  );
}
