import Link from "next/link";
import { useState } from "react";

type NavDropdownProps = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        className='flex items-center focus:outline-none focus:shadow-outline'
        aria-haspopup='true'
        aria-expanded='false'
        onClick={() => setIsOpen(!isOpen)}>
        <span className='nav-link'>{title}</span>
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'></path>
        </svg>
      </button>
      <div
        className={
          isOpen
            ? "absolute left-0 mt-2 -ml-1 origin-top-left rounded-md shadow-lg"
            : "hidden"
        }>
        <div className='rounded-md bg-white shadow-xs'>
          <ul className='w-48 py-1 text-sm leading-6 divide-y divide-gray-50'>
            {items &&
              items.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>
                    <a className='block px-4 py-2 text-left text-gray-900 hover:bg-green-100 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
