/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AppFooter() {
  return (
    <footer
      className='mt-12 text-slate-100'
      style={{
        backgroundColor: `#081c05`,
      }}>
      <div className='pt-12 pb-10 '>
        <div className='mx-auto max-w-7xl'>
          <div className='px-5 xl:px-0 grid grid-cols-12 gap-6'>
            <div className='col-span-12'>
              <img
                src='/logo.png'
                alt='smk diponegoro pekalongan'
                className='w-14 h-14'
              />
            </div>
            <div className='col-span-12 xl:col-span-4'>
              <h1 className='mb-3 text-xl xl:text-2xl font-bold'>
                SMK Diponegoro Karanganyar
              </h1>
              <p className='text-sm text-slate-400'>
                Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan
                Kejuruan dengan Layanan Pendidikan yang Modern Sesuai
                Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya
                Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern
                Agamis Unggul)
              </p>
            </div>

            <div className='col-span-12 xl:col-span-4'>
              <h1 className='text-xl xl:text-2xl font-bold'>
                Kompetensi Keahlian
              </h1>

              <ul className='mt-3 text-slate-400 text-sm'>
                <li>
                  <Link href={`/kompetensi-keahlian/tbsm`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Teknik dan Bisnis Sepeda Motor
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/kompetensi-keahlian/tkj`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Teknik Komputer dan Jaringan
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/kompetensi-keahlian/atph`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Agribisnis Tanaman Pangan dan Holtikultura
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`#`}>
                    <a className='hover:text-slate-100 hover:underline'>
                      Broadcasting dan Perfilman
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-span-12 xl:col-span-4'>
              <h1 className='text-xl xl:text-2xl font-bold mb-3'>
                Lokasi Sekolah
              </h1>
              <address className='text-slate-400 text-sm'>
                Jl. Raya Karanganyar No.KM, RW.2, Sawah, Kayugeritan, Kec.
                Karanganyar, Kabupaten Pekalongan, Jawa Tengah 51182
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 text-center bg-black'>
        &copy; {new Date().getFullYear()} SMK Diponegoro Karanganyar.
      </div>
    </footer>
  );
}
