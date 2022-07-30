import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav>
      <ul className='hidden md:flex flex-wrap gap-1'>
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
