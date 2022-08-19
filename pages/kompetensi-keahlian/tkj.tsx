import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";

const TKJ = () => {
  return (
    <AppLayout>
      <Head>
        <title>TKJ | Teknik Komputer dan Jaringan</title>
      </Head>

      <Jumbotron title='Teknik Komputer dan Jaringan (TKJ)' center />

      <div className='mx-auto max-w-6xl flex items-center justify-center font-roboto'>
        <div className='mt-8 w-full p-5 xl:w-2/3 bg-white rounded-md shadow'>
          <p className='mt-10'>
            Teknik Komputer &amp; Jaringan (<strong>TKJ</strong>) merupakan
            salah satu program keahlian&nbsp;<strong>SMK</strong>&nbsp;yang
            bergerak di bidang Informasi dan Teknologi. Siswa jurusan&nbsp;
            <strong>TKJ</strong>&nbsp;dididik untuk mampu melakukan installasi
            jaringan komputer, baik itu jaringan komputer dalam rumah / kantor,
            antar kantor, antar kota, antar provinsi, bahkan antar negara.
          </p>
          <p className='mt-10'>
            Program Studi Teknik Komputer dan Jaringan di SMK Diponegoro
            Karanganyar telah dirancang untuk selalu Up To date. Didukung oleh
            pengajar yang telah memenuhi Standar Kompetensi di bidang IT dan
            sarana / prasarana di atas rata-rata serta model pembelajaran
            berbasis IT (media Online) siap mengantar anda menuju pintu gerbang
            zona digital.
          </p>
          <p className='mt-10'>
            Salah satu keunggulan TKJ adalah penggunaan Metode Praktik Langsung
            sehingga mampu menyediakan sumber belajar yang tidak terbatas,
            penilaian transparan serta mendidik siswa untuk berfikir ilmiah
            dengan memperhatikan potensi masing-masing individu. Dengan dukungan
            fasilitas belajar yang memadai dan dukungan ruang praktik yang
            memenuhi standard untuk memfasilitasi keinginan siswa/siswi dalam
            mengembangkan ilmu komputer.
          </p>
          <p className='mt-10'>
            Kompetensi keahlian TKJ SMK Diponegoro Karanganyar sebagai Jurusan
            yang bergerak di bidang Hardware dan Networking juga memberikan
            ruang dan fasilitas yang baik bagi siswa yang memiliki minat di
            bidang Administrator Jaringan Komputer, Technical Support, Computer
            Network Maintenance/teknisi maupun Keamanan Jaringan Komputer.
            Dengan didukung berbagai Fasilitas Online yang dapat diakses di
            Lokal maupun di Luar Sekolah /Internet, diantaranya adalah :
          </p>

          <ul>
            <li>Akses Internet</li>
            <li>Hotspot Area seluruh wilayah sekolah.</li>
          </ul>
          <p className='mt-10'>
            <strong>Materi Pembelajaran</strong>&nbsp;menyesuaikan dengan
            teknologi terkini berbasis pada :
          </p>
          <ul>
            <li>Open Source.</li>
            <li>Web Design.</li>
          </ul>

          <p className='mt-10'>
            <strong>
              {" "}
              Dari segi peluang kerja setelah lulus sangat banyak peluangnya.
              Mulai dari menjadi teknisi komputer, teknisi jaringan, membuka
              toko komputer, atau bisa juga membuka warnet sendiri dan
              melanjutkan ke Perguruan Tinggi.
            </strong>
          </p>

          <p className='mt-10'>
            <strong>Fasilitas</strong>&nbsp;Jurusan Teknik Komputer &amp;
            Jaringan SMKN 1 Kaliwungu :
          </p>

          <ul>
            <li>Lab Komputer TKJ.</li>
            <li>Lab Komputer Software.</li>
            <li>Lab Komputer Hardware.</li>
            <li>Tower Wireless.</li>
            <li>Peralatan Pembelajaran Lengkap.</li>
          </ul>

          <p className='mt-10'>
            Keunggulan Kompetensi Keahlian TKJ SMK Diponegoro Karanganyar
          </p>
          <p className='mt-10'>
            <strong>SEGI PENDIDIKAN</strong>
          </p>

          <ul>
            <li>Mudah Dipahami.</li>
            <li>
              Masih Kelas XI,, sudah bisa menghasilkan uang (dengan hanya
              berbekal kompetensi Instalasi OS dan perakitan PC .
            </li>
            <li>
              Dapat memperdalam jurusan lain (seperti Animasi, Multimedia,
              Desain Grafis, Pemrograman).
            </li>
            <li>
              Menjadi jurusan yang memperdalam ilmu Teknologi, baik Software
              ataupun Hardware.
            </li>
            <li>
              Lulusan Selain dapat Ijazah juga dapat Sertifikat yang diakui oleh
              Internasional. Dalam hal ini Sertifikasinya IT Networking dari
              MIKROTIK.
            </li>
          </ul>

          <p className='mt-10'>
            <strong>SEGI PEKERJAAN</strong>
          </p>

          <ul>
            <li>Dapat menjadi seorang ahli IT Networking.</li>
            <li>Dapat membuka usaha jaringan.</li>
            <li>Dapat melanjutkan kuliah dengan jurusan berbeda.</li>
            <li>
              Dapat menjadi teknisi baik jaringan internet maupun PC/Laptop.
            </li>
          </ul>

          <p className='mt-10'>
            <strong>Pembelajaran Interaktif</strong>
          </p>
          <p className='mt-10'>
            Sistem pembelajaran semua kelas sudah menggunakan Kurikulum 2013
            dengan pendekatan keilmuan, di mana proses pembelajaran
            diselenggarakan secara interaktif, menyenangkan, inspiratif,
            memotivasi siswa untuk berpartisipasi aktif, serta memberikan ruang
            yang cukup bagi prakarsa, kreativitas, dan kemandirian sesuai dengan
            bakat, minat serta kemampuan dan perkembangan fisik serta psikologis
            peserta didik. Siswa juga menerima pembelajaran spesial dari
            guru-guru tamu yang didatangkan dari DU/DI mitra sekolah.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default TKJ;
