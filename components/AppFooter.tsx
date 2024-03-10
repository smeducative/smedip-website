/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer
      className="mt-12 text-slate-100"
      style={{
        backgroundColor: `#081c05`,
      }}
    >
      <div className="pt-12 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="gap-6 grid grid-cols-12 px-5">
            <div className="col-span-12">
              <img
                src="/logo.png"
                alt="smk diponegoro pekalongan"
                className="w-14 h-14"
              />
            </div>
            <div className="col-span-12 xl:col-span-4">
              <h1 className="mb-3 font-bold text-xl xl:text-2xl">
                SMK Diponegoro Karanganyar
              </h1>
              <p className="text-slate-400 text-sm">
                Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan
                Kejuruan dengan Layanan Pendidikan yang Modern Sesuai
                Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya
                Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern
                Agamis Unggul)
              </p>
            </div>

            <div className="col-span-12 xl:col-span-4">
              <h1 className="font-bold text-xl xl:text-2xl">
                Kompetensi Keahlian
              </h1>

              <ul className="mt-3 text-slate-400 text-sm">
                <li>
                  <Link legacyBehavior href={`/kompetensi-keahlian/tbsm`}>
                    <a className="hover:text-slate-100 hover:underline">
                      Teknik Otomotif
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/kompetensi-keahlian/tkj`}>
                    <a className="hover:text-slate-100 hover:underline">
                      Teknik Jaringan Komputer dan Telekomunikasi
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/kompetensi-keahlian/atph`}>
                    <a className="hover:text-slate-100 hover:underline">
                      Agribisnis Tanaman / Smart Farming
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`#`}>
                    <a className="hover:text-slate-100 hover:underline">
                      Broadcasting dan Perfilman
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-12 xl:col-span-4">
              <h1 className="mb-3 font-bold text-xl xl:text-2xl">Tautan</h1>

              <ul className="mt-3 text-slate-400 text-sm">
                <li>
                  <Link
                    legacyBehavior
                    href={`https://smeduverse.smkdiponegoropekalongan.sch.id`}
                  >
                    <a className="hover:text-slate-100 hover:underline">
                      Smeduverse
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://orbit.smkdiponegoropekalongan.sch.id`}
                  >
                    <a className="hover:text-slate-100 hover:underline">
                      Smeduverse Orbit
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://cbt.smkdiponegoropekalongan.sch.id`}
                  >
                    <a className="hover:text-slate-100 hover:underline">CBT</a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://ppdb.smkdiponegoropekalongan.sch.id`}
                  >
                    <a className="hover:text-slate-100 hover:underline">PPDB</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/digital-card`}>
                    <a className="hover:text-slate-100 hover:underline">
                      Kartu Digital
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`https://s.id/kurikulum-merdeka`}>
                    <a className="hover:text-slate-100 hover:underline">
                      Kurikulum Merdeka
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-12 xl:col-span-4">
              <h1 className="mb-3 font-bold text-xl xl:text-2xl">
                Lokasi Sekolah
              </h1>
              <address className="text-slate-400 text-sm">
                Jl. Raya Karanganyar No.KM, RW.2, Sawah, Kayugeritan, Kec.
                Karanganyar, Kabupaten Pekalongan, Jawa Tengah 51182
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-5 text-center">
        &copy; {new Date().getFullYear()} SMK Diponegoro Karanganyar.
      </div>
    </footer>
  );
}
