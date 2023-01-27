import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type NavDropdownProps = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const navbar = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (evt: MouseEvent) => {
      if (!navbar.current || !trigger.current) return;
      if (
        !isOpen ||
        navbar.current.contains(evt.target as Node) ||
        trigger.current.contains(evt.target as Node)
      )
        return;
      setIsOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (evt: KeyboardEvent) => {
      if (!isOpen || evt.code !== "esc") return;
      setIsOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className='relative'>
      <button
        className='flex items-center focus:outline-none focus:shadow-outline'
        aria-haspopup='true'
        aria-expanded='false'
        ref={trigger}
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
        ref={navbar}
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
                  <Link legacyBehavior href={item.href}>
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
