/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer
      className='mt-12 text-slate-100'
      style={{
        backgroundColor: `#081c05`,
      }}>
      <div className='pt-12 pb-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='gap-6 grid grid-cols-12 px-5'>
            <div className='col-span-12'>
              <img
                src='/logo.png'
                alt='smk diponegoro pekalongan'
                className='w-14 h-14'
              />
            </div>
            <div className='col-span-12 xl:col-span-4'>
              <h1 className='mb-3 font-bold text-xl xl:text-2xl'>
                SMK Diponegoro Karanganyar
              </h1>
              <p className='text-slate-400 text-sm'>
                Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan
                Kejuruan dengan Layanan Pendidikan yang Modern Sesuai
                Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya
                Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern
                Agamis Unggul)
              </p>
            </div>

            <div className='col-span-12 xl:col-span-4'>
              <h1 className='font-bold text-xl xl:text-2xl'>
                Kompetensi Keahlian
              </h1>

              <ul className='mt-3 text-slate-400 text-sm'>
                <li>
                  <Link legacyBehavior href={`/kompetensi-keahlian/tbsm`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Teknik Otomotif
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/kompetensi-keahlian/tkj`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Teknik Jaringan Komputer dan Telekomunikasi
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/kompetensi-keahlian/atph`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Agribisnis Tanaman / Smart Farming
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`#`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Broadcasting dan Perfilman
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-span-12 xl:col-span-4'>
              <h1 className='mb-3 font-bold text-xl xl:text-2xl'>Tautan</h1>

              <ul className='mt-3 text-slate-400 text-sm'>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://smeduverse.smkdiponegoropekalongan.sch.id`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Smeduverse
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://orbit.smkdiponegoropekalongan.sch.id`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Smeduverse Orbit
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://cbt.smkdiponegoropekalongan.sch.id`}>
                    <a className='hover:text-slate-100 hover:underline'>CBT</a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={`https://ppdb.smkdiponegoropekalongan.sch.id`}>
                    <a className='hover:text-slate-100 hover:underline'>PPDB</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/digital-card`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Kartu Digital
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`https://s.id/kurikulum-merdeka`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Kurikulum Merdeka
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-span-12'>
              <div className='flex md:flex-row flex-col gap-3'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.01362109823!2d109.62673867475796!3d-7.015330492986182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e701eff40b400c7%3A0x2c1c5d7a08fe8ead!2sSMK%20Diponegoro%20Kab.%20Pekalongan!5e1!3m2!1sen!2sid!4v1728121292470!5m2!1sen!2sid'
                  width='340'
                  height='230'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'></iframe>
                <div>
                  <h1 className='mb-3 font-bold text-xl xl:text-2xl'>
                    Lokasi Sekolah
                  </h1>
                  <address className='text-slate-400 text-sm'>
                    Jl. Raya Karanganyar KM 1.5, Kayugeritan, <br /> Kec.
                    Karanganyar, Kabupaten Pekalongan, Jawa Tengah 51182
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black py-5 text-center'>
        &copy; {new Date().getFullYear()} SMK Diponegoro Karanganyar.
      </div>
    </footer>
  );
}
