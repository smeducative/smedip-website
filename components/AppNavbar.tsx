import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav>
      <ul className='flex gap-3'>
        <li>
          <Link href={`/`}>Beranda</Link>
        </li>
        <li>
          <Link href={`/profile`}>Profil</Link>
        </li>
        <li>
          <Link href={`/about`}>Kompetensi Keahlian</Link>
        </li>
        <li>
          <Link href={`/about`}>Akademik</Link>
        </li>
        <li>
          <Link href={`/about`}>Informasi</Link>
        </li>
        <li>
          <Link href={`/about`}>PPDB Online</Link>
        </li>
      </ul>
    </nav>
  );
}
