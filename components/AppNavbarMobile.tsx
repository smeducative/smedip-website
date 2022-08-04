import Link from "next/link";
import NavDropdown from "./NavDropdown";

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
          <NavDropdown
            title='Profile'
            items={[{ title: "Visi dan Misi", href: "/visi-dan-misi" }]}
          />
        </li>
        <li>
          <Link href={`/#kompetensi-keahlian`}>
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
            <a className='nav-link' target={"_blank"}>
              PPDB Online
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
