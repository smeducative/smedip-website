import Head from "next/head";
import AppLayout from "../components/layouts/AppLayout";
import Jumbotron from "../components/sections/Jumbotron";

export default function VisiDanMisi() {
  return (
    <AppLayout>
      <Head>
        <title>Visi dan Misi</title>
      </Head>
      <Jumbotron title='Visi dan Misi SMK DIPONEGORO KARANGANYAR Kab. Pekalongan' />

      <div className='mx-auto max-w-6xl flex items-center justify-center'>
        <div className='mt-8 w-full px-5 xl:p-0 xl:w-2/3'>
          <h1 className='text-center text-lg font-bold'>VISI</h1> <br />
          <p>
            Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan Kejuruan
            dengan Layanan Pendidikan yang Modern Sesuai Perkembangan Ilmu
            Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam
            Prestasi dan Berakhlak Islami (Modern Agamis Unggul)
          </p>
          <div className='mt-3'></div>
          <h1 className='text-center text-lg font-bold'>MISI</h1> <br />
          <ul>
            <li>
              1. Meningkatkan Mutu sumberdaya manusi melalui dukungan IPTEK dan
              IMTAQ
            </li>
            <li>
              2. Memberikan layanan terhadap warga sekolah untuk menghasilkan
              tenaga yang kompeten dan mandiri
            </li>
            <li>
              3. Memberikan kualitas Lulusan dengan Standar kompetensi Nasional
              dalam menghadapi Era Globalisasi
            </li>
            <li>
              4. Mengembangkan Kurikulum berbasis Industri dan Keunggulan
              Keaarifan Lokal
            </li>
            <li>
              5. Melakukan hubungan kemitraan (Link and Match) dengan
              lembaga/Industri yang relevan baik dalam maupun luar negeri
            </li>
            <li>
              6. Menerapkan Budaya Keislamam (Pesantren) di lingkungan sekolah
              guna membentuk karakter yang berakhlakul karimah
            </li>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}
