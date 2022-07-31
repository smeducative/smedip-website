import Link from "next/link";
import { useState } from "react";

type Props = {
  open: boolean;
};

export default function AppNavbarMobile({ open }: Props) {
  return (
    <nav>
      <ul
        className={`${
          open ? "flex py-5 px-3" : "hidden"
        } flex-col gap-3 transition duration-100`}>
        <li>
          <Link href={`/`}>
            <a className='nav-link'>Beranda</a>
          </Link>
        </li>
        <li>
          <Link href={`/profile`}>
            <a className='nav-link'>Profile</a>
          </Link>
        </li>
        <li>
          <Link href={`#`}>
            <a className='nav-link'>Kompetensi Keahlian</a>
          </Link>
        </li>
        <li>
          <Link href={`#`}>
            <a className='nav-link'>Akademik</a>
          </Link>
        </li>
        <li>
          <Link href={`#`}>
            <a className='nav-link'>Informasi</a>
          </Link>
        </li>
        <li>
          <Link href={`#`}>
            <a className='nav-link'>PPDB Online</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
