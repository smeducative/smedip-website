import Head from "next/head";
import AppLayout from "../components/layouts/AppLayout";
import Jumbotron from "../components/sections/Jumbotron";

const MikroTikAcademy = () => {
  return (
    <AppLayout>
      <Head>
        <title>MikroTik Academy | SMK Diponegoro Karanganyar Kab. Pekalongan</title>
      </Head>

      <Jumbotron title={<span>Program MikroTik Academy di <strong>SMK Diponegoro Karanganyar Kab. Pekalongan</strong></span>} center />

      <div className='mx-auto max-w-6xl flex items-center justify-center font-roboto'>
        <div className='mt-8 mb-20 w-full p-8 lg:p-12 xl:w-3/4 bg-white rounded-md shadow-lg'>
          <article className='prose prose-slate max-w-none'>
            <p className='text-lg leading-relaxed mb-6'>
              Program MikroTik Academy merupakan program khusus yang dirancang bagi institusi pendidikan, termasuk universitas, STMIK, AMIK, institut teknik, serta SMK dan sekolah menengah kejuruan lainnya yang menerapkan sistem pembelajaran berbasis semester. Melalui program ini, sekolah dapat secara resmi membuka kelas MikroTik (<a href="https://www.mikrotik.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.mikrotik.com</a>) bersertifikasi sebagai bagian integral dari kurikulum pembelajaran, sekaligus memberikan kesempatan kepada siswa untuk mengikuti ujian sertifikasi resmi di akhir periode pembelajaran.
            </p>
            
            <p className='text-lg leading-relaxed mb-6'>
              Sebagai salah satu bentuk implementasi program tersebut, <strong>SMK Diponegoro Karanganyar Kab. Pekalongan</strong> telah ditunjuk sebagai Training Partner Akademi MikroTik resmi melalui <a href="https://www.belajarmikrotik.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.belajarmikrotik.com</a>. Program MikroTik Academy ini diperuntukkan khusus bagi siswa Jurusan Teknik Komputer dan Jaringan.
            </p>

            <p className='text-lg leading-relaxed mb-6'>
              Program ini diintegrasikan ke dalam kurikulum sekolah pada semester 3 dan semester 4 melalui mata pelajaran Manajemen Jaringan Komputer. Pelaksanaannya dilakukan secara terpisah sebagai kegiatan kelas tambahan berbasis praktik di laboratorium, sehingga siswa dapat lebih mendalami materi secara langsung dan aplikatif sesuai dengan mata pelajaran Jaringan Komputer.
            </p>

            <p className='text-lg leading-relaxed mb-6'>
              Pada akhir masa pembelajaran, siswa akan mengikuti ujian sertifikasi resmi MikroTik. Ujian ini bertujuan untuk mengukur tingkat pemahaman dan kemampuan siswa dalam mengelola jaringan komputer berbasis MikroTik. Bagi siswa yang berhasil lulus dengan nilai di atas 60%, mereka akan memperoleh Sertifikat MikroTik bertaraf internasional serta berhak menyandang gelar MikroTik Certified Network Associate (MTCNA).
            </p>

            <p className='text-lg leading-relaxed mb-4'>
              Dalam kelas MikroTik Academy di <strong>SMK Diponegoro Karanganyar Kab. Pekalongan</strong>, siswa diajarkan berbagai topik penting dan relevan dengan dunia jaringan komputer, di antaranya:
            </p>

            <ul className='list-disc pl-6 space-y-2 text-lg leading-relaxed mb-6'>
              <li>MikroTik Router</li>
              <li>Topologi Jaringan</li>
              <li>Manajemen Jaringan Layer 2 dan Layer 3</li>
              <li>Wireless</li>
              <li>Routing</li>
              <li>Firewall Filter</li>
              <li>QoS (Quality of Service)</li>
            </ul>

            <p className='text-lg leading-relaxed mb-6'>
              Program ini diselenggarakan selama satu semester penuh dengan pendekatan yang mengutamakan praktik langsung di laboratorium.
            </p>

            <p className='text-lg leading-relaxed font-semibold'>
              Pelaksanaan MikroTik Academy di <strong>SMK Diponegoro Karanganyar Kab. Pekalongan</strong> didukung sepenuhnya oleh Belajar MikroTik sebagai Koordinator Resmi MikroTik Academy di Indonesia.
            </p>
          </article>
        </div>
      </div>
    </AppLayout>
  );
};

export default MikroTikAcademy;
