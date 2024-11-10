import { useState, useEffect } from "react";
import AppNavbar from "./AppNavbar";
import AppNavbarMobile from "./AppNavbarMobile";
import AppSiteLogo from "./AppSiteLogo";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Facebook, Youtube } from "react-feather";
import { Mail } from "lucide-react";

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
      className={`top-0 z-50 fixed inset-x-0 bg-gradient-to-r from-[#a5f3fc]/30 to-[#86efac]/20 backdrop-blur-md border-t-4 border-blue-400 filter`}>
      <div
        id='sosmed'
        className={`text-sm bg-gradient-to-r from-[#a5f3fc] to-[#86efac] duration-500 ${
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
                <svg
                  className='w-4 h-4 md:w-6 md:h-6 hover:text-pink-500 transition duration-300 ease-in-out hover:scale-110'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>TikTok</title>
                  <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
                </svg>
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
