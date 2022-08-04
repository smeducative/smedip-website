import Link from "next/link";
import NavDropdown from "./NavDropdown";

export default function AppNavbar() {
  return (
    <nav>
      <ul className='hidden lg:flex flex-wrap gap-2'>
        <li>
          <Link href='/'>
            <a className='nav-link'>Beranda</a>
          </Link>
        </li>
        <li>
          <NavDropdown
            title='Profile'
            items={[{ title: "Visi dan Misi", href: "/visi-dan-misi" }]}
          />
        </li>
        <li>
          <Link href={`#`}>
            <a className='nav-link'>Kompetensi Keahlian</a>
          </Link>
        </li>
        <li>
          <NavDropdown
            title='Informasi'
            items={[
              { title: "Berita", href: "/berita" },
              { title: "Publikasi", href: "/publikasi" },
            ]}
          />
        </li>
        <li>
          <Link href={`https://ppdb.smkdiponegoropekalongan.sch.id`}>
            <a target='_blank' className='nav-link'>
              PPDB Online
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
