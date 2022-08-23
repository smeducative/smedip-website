import Image from "next/image";
import SambutanKepsekSrc from "../assets/sambutan-kepsek.png";

const SambutanKepsek = () => {
  return (
    <div className='mt-12 xl:mt-24 mx-auto max-w-6xl'>
      <div className='px-5 xl:px-0 grid grid-cols-12 gap-6'>
        <div className='col-span-12 lg:col-span-4 flex items-center justify-center'>
          <Image src={SambutanKepsekSrc} alt={`sambutan kepsek src`} />
        </div>
        <div className='col-span-12 lg:col-span-8'>
          <div className='flex flex-col items-start justify-center'>
            <h1 className='text-2xl font-extrabold font-roboto text-yellow-400 underline'>
              Sambutan Kepala Sekolah
            </h1>
            <p className='mt-5 font-roboto text-sm lg:text-base'>
              {`Assalamu'alaikum wr. wb.`} <br /> <br />
              Alhamdulillah, kami panjatkan kehadirat Allah SWT, bahwasanya
              dengan rahmat dan karunia-Nya lah akhirnya website sekolah ini
              dengan alamat{" "}
              <a
                href='//smkdiponegoropekalongan.sch.id'
                className='text-green-600 underline'>
                smkdiponegoropekalongan.sch.id
              </a>{" "}
              dapat kami perbaharui. Kami mengucapkan selamat datang di website
              kami Sekolah Menegah Kejuruan (SMK) Diponegoro Pekalongan yang
              kami tunjukan untuk seluruh pimpinan, guru, karyawan dan siswa
              serta khalayak umum guna dapat mengakses seluruh informasi tentang
              aktifitas dan kegiatan serta fasilitas sekolah kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SambutanKepsek;
