import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";

const Tbsm = () => {
  return (
    <AppLayout>
      <Head>
        <title>TBSM | Teknik dan Bisnis Sepeda Motor</title>
      </Head>

      <Jumbotron title='Teknik dan Bisnis Sepeda Motor (TBSM)' center />

      <div className='mx-auto max-w-6xl flex items-center justify-center font-roboto'>
        <div className='mt-8 w-full p-5 xl:w-2/3 bg-white rounded-md shadow'>
          <h1 className='text-xl font-bold mt-5'>Visi</h1>
          <p>
            Terwujudnya Pendidikan yang Modern Sesuai Perkembangan Ilmu
            Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam
            Prestasi dan Berakhlak Islami (Modern Agamis Unggul)
          </p>
          <h1 className='text-xl font-bold mt-5'>Misi</h1>
          <p>
            Melaksanakan layanan prima dengan mengintegrasikan pendidikan
            Normatif, Adaptip dan Produktif di bidang Teknik Otomotif Sepeda
            Motor serta mampu berkomperisi di Dunia Usaha Dunia Kerja dengan
            Etos Kerja Ahlussunnah Wal Jamaah.
          </p>
          <h1 className='text-xl font-bold mt-5'>TARGET PENDIDIKAN</h1>
          <div className='px-5'>
            <ol className='list-decimal'>
              <li>Menguasai Technology Smart Motor Injection</li>
              <li>
                Mampu melakukan perbaikan sepeda Motor di sistem kelistrikan,
                mesin, chasis dan modifikasi motor
              </li>
              <li>
                Mampu melakukan perbaikan jenis motor MATIC, MOPET dan SPORT
              </li>
              <li>Mampu melakukan perbaikan semua tipe motor injection</li>
              <li>Mampunyai jiwa kewirausahaan di bidang otomotif</li>
            </ol>
          </div>
          <h1 className='text-xl font-bold mt-5'>Keunggulan</h1>
          <p>
            Kurikulum Integrate Industri ( PT. Astra Motor ). <br />{" "}
            Pembelajaran Berbasis Teaching Factory Kelas Astra Budaya Industri
            Fasilitas Belajar yang terstandart Industri FASILITAS Workshop
            Standar Astra
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Tbsm;
