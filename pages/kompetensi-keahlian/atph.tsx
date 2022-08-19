import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";

const ATPH = () => {
  return (
    <AppLayout>
      <Head>
        <title>ATPH | Agribisnis Tanaman Pangan dan Holtikultura</title>
      </Head>

      <Jumbotron
        title='Agribisnis Tanaman Pangan dan Holtikultura (ATPH)'
        center
      />

      <div className='mx-auto max-w-6xl flex items-center justify-center font-roboto'>
        <div className='mt-8 w-full p-5 xl:w-2/3 bg-white rounded-md shadow'>
          <p className=''>Kompetensi ATPH</p>
          <p className='mt-10 font-bold'>
            PROFIL PAKET KEAHLIAN AGRIBISNIS TANAMAN PANGAN DAN HORTIKULTURA
          </p>
          <p className='mt-10'>
            Agribisnis Tanaman Pangan dan Hortikultura (ATPH) adalah salah satu
            paket keahlian di SMK Diponegoro Karanganyar yang semakin
            menunjukkan jati dirinya sebagai &ldquo;Jurusan Pertanian&rdquo; dan
            sekaligus menjadi tolok ukur atau barometer SMK Diponegoro
            Karanganyar sebagaimana dikenal sejak awal berdirinya.&nbsp; Paket
            Keahlian ATPH terus menerus dan berkesinambungan melaksanakan
            pembelajaran teori maupun praktik yang menciptakan suasana belajar
            yang mengasyikan, digandrungi peserta didik, dinantikan jam demi jam
            pertemuanya, dan memberi kesan mendalam bagi seluruh peserta
            didiknya.
          </p>
          <p className='mt-10'>
            Proses pembelajaran diciptakan dalam kondisi&nbsp; yang merangsang
            terjadinya komunikasi dan interaksi yang indah, hubungan harmonis
            antara pendidik dan peserta didik, suasana kondusif dalam melakukan
            inovasi, kreasi dan produksi sehingga penguasaan kompetensi yang
            diharapkan dapat tercapai dengan baik. Selain itu didukung pula oleh
            suasana alam yang sejuk hingga hangat, lahan atau tempat&nbsp;
            praktik yang memadai serta fasilitas penunjang yang cukup mampu
            melahirkan putra-putri yang kreatif, inovatif, dan produktif serta
            kompetitif.
          </p>
          <p className='mt-10'>
            Pembinaan peserta didik dengan pendekatan kesamaptaan, kerohanian
            dan kekeluargaan (hubungan orang tua-anak) terbukti mampu mencetak
            putra-putri yang HEBAT yakni Handal, Energik, Butuh, Antusias dan
            Takwa.&nbsp; Alumnus ATPH siap menempuh perjuangan lanjutan terutama
            bekerja dan wirausaha dengan mental HEBAT
          </p>

          <p className='mt-10 font-bold'>KOMPETENSI LULUSAN</p>
          <p className='mt-5'>
            Di antara kompetensi yang dimiliki Lulusan ATPH, yaitu:
          </p>
          <ul className='px-5 list-decimal'>
            <li>Agribisnis tanaman sayur hidroponik</li>
            <li>Agribisnis tanaman sayur aquaponik</li>
            <li>Agribisnis tanaman organic</li>
            <li>Agribisnis Tanaman Sayuran</li>
            <li>Agribisnis Tanaman Buah</li>
            <li>Agribisnis Tanaman Hias</li>
            <li>Agribisnis Tanaman Pangan</li>
            <li>Agribisnis Tanaman Palawija</li>
            <li>Pembibitan Tanaman Sayur, Buah, dan Hias</li>
          </ul>
          <p className='mt-10 font-bold'>KEUNGGULAN PAKET KEAHLIAN ATPH</p>

          <p className='mt-5'>
            Beberapa Keunggulan Lokal yang Terus Diusung dan Dikembangkan&nbsp;
            Oleh Paket Keahlian ATPH Diantaranya Yaitu :
          </p>
          <ul className='px-5 list-decimal'>
            <li>Agribisnis sayur organic</li>
            <li>Agrinisnis sayur hidroponik</li>
            <li>Agribisnis sayur aquaponik</li>
            <li>Agribisnis cabai</li>
            <li>Produksi pupuk organik (Bokashi)</li>
            <li>
              Pelatihan kompetensi agribisnis tanaman dengan konsep
              &ldquo;edutaintment&rdquo; bagi siswa PAUD,TK dan SD
            </li>
            <li>
              Pelatihan kompetensi agribisnis tanaman dengan konsep
              &ldquo;production&rdquo; bagi kelompok remaja (karang taruna), PKK
              dan Dharma wanita
            </li>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
};

export default ATPH;
