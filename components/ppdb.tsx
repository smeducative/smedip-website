import BgSmedip from "@/public/assets/images/bg-smedip.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    avatar: "/assets/images/testimonials/Abdul Aziz.jpg",
    quote:
      "Belajar di SMK Diponegoro tidak hanya melatih hard skill montir, tetapi juga membentuk mental petarung dan kedisiplinan tinggi. Berkat bimbingan intensif dari sekolah, saya bisa lolos seleksi kerja dan adaptasi dengan cepat di lingkungan industri Jepang.",
    name: "Abdul Aziz",
    role: "Alumni TSM - Magang di Perusahaan Jepang",
  },
  {
    avatar: "/assets/images/testimonials/Agung Suparno.jpg",
    quote:
      "Alat praktik di laboratorium sekolah sudah sangat sesuai dengan standar industri otomotif modern. Pengalaman praktik kerja lapangan (PKL) yang difasilitasi sekolah membuat saya langsung siap kerja di Astra tanpa perlu banyak penyesuaian.",
    name: "Agung Suparno",
    role: "Alumni TSM - Operator Mesin di PT. Astra Otoparts",
  },
  {
    avatar: "/assets/images/testimonials/Ahmad Prastio.jpg",
    quote:
      "Budaya industri 5S yang diterapkan setiap hari di sekolah sangat membantu saya saat memasuki dunia kerja nyata. Terima kasih BKK SMK Diponegoro yang selalu menyalurkan alumninya ke perusahaan-perusahaan nasional terkemuka.",
    name: "Ahmad Prastio",
    role: "Alumni TSM - Tim Produksi di PT. ASTRA DAIHATSU MOTOR",
  },
  {
    avatar: "/assets/images/testimonials/Arina Ifati.jpg",
    quote:
      "SMK tidak menutup peluang untuk kuliah. Di sini, para guru sangat mendukung minat akademis saya hingga berhasil meraih beasiswa penuh. Dasar logika pemrograman dari sekolah menjadi modal kuat saya di bangku perkuliahan.",
    name: "Arina Ifati",
    role: "Alumni TKJ - Mahasiswa Beasiswa ITS NU",
  },
  {
    avatar: "/assets/images/testimonials/Arum Sari.jpg",
    quote:
      "Kemampuan mengelola jaringan dan sistem administrasi digital yang saya pelajari di sekolah sangat terpakai di dunia klinik medis modern. SMK Diponegoro benar-benar mencetak lulusan yang fleksibel di berbagai sektor industri.",
    name: "Arum Sari",
    role: "Alumni TKJ - SOZO CLINIC",
  },
  {
    avatar: "/assets/images/testimonials/Dani Ikhwan.jpg",
    quote:
      "Selain ilmu teknik otomotif, sekolah juga menanamkan jiwa entrepreneurship yang kuat. Berbekal ilmu manajemen bengkel saat sekolah, alhamdulillah sekarang saya bisa mandiri membuka usaha toko ban sendiri.",
    name: "Dani Ikhwan",
    role: "Alumni TSM - Owner Toko Ban Doa Ibu",
  },
  {
    avatar: "/assets/images/testimonials/Sandi Purnomo Aji.jpg",
    quote:
      "Bangga rasanya bisa kembali mengabdi di almamater tercinta. Lingkungan belajar di sini selalu adaptif dengan perkembangan teknologi otomotif terbaru, sehingga kami selalu siap mencetak mekanik andal masa depan.",
    name: "Sandi Purnomo Aji, S.T",
    role: "Alumni TSM - Guru TSM SMK Diponegoro",
  },
  {
    avatar: "/assets/images/testimonials/Alim Assidiq.jpg",
    quote:
      "Melihat perkembangan sekolah dari masa ke masa sebagai alumni sekaligus pengajar, komitmen kami pada pembentukan karakter islami dan akhlakul karimah siswa tetap menjadi pilar utama di samping keahlian kerja.",
    name: "Alim Assidiq, S.Pd.",
    role: "Alumni TSM - Waka Kesiswaan SMK Diponegoro",
  },
  {
    avatar: "/assets/images/testimonials/Khoirul Imam.jpg",
    quote:
      "Kedisiplinan semi-militer, ketepatan waktu, dan pembinaan fisik yang saya dapatkan selama aktif di organisasi sekolah menjadi modal utama saya saat melewati kerasnya seleksi ketat prajurit TNI AU.",
    name: "Khoirul Imam",
    role: "Alumni TSM - TNI AU",
  },
  {
    avatar: "/assets/images/testimonials/M. Nurrohman.jpg",
    quote:
      "Pelatihan komunikasi, kerja sama tim, dan ketelitian yang diajarkan di sekolah sangat berguna dalam manajemen ritel nasional. Jenjang karier di industri retail menjadi lebih terarah berkat pondasi mental dari SMK.",
    name: "M. Nurrohman",
    role: "Alumni TSM - PT. Sumber Alfaria Trijaya TBK",
  },
  {
    avatar: "/assets/images/testimonials/Wadi Yulianto.jpg",
    quote:
      "Belajar di SMK Diponegoro tidak hanya melatih hard skill montir, tetapi juga membentuk mental petarung dan kedisiplinan tinggi. Berkat bimbingan intensif dari sekolah, saya bisa lolos seleksi kerja dan adaptasi dengan cepat di lingkungan industri Jepang.",
    name: "Wadi Yulianto",
    role: "Alumni ATPH - Magang Di Perusahaan Jepang",
  },
  {
    avatar: "/assets/images/testimonials/Reni Meilia.jpg",
    quote:
      "Manajemen klinis membutuhkan ketelitian administrasi dan integrasi sistem yang baik. Semua dasar tersebut telah dibentuk dengan sangat matang sejak saya menempuh pendidikan kejuruan di sini.",
    name: "Reni Meilia",
    role: "Alumni ATPH - PT. POHON BIRU Sozo Clinic",
  },
  {
    avatar: "/assets/images/testimonials/Rico Hamzah.jpg",
    quote:
      "Dunia hospitality dan kuliner menuntut kepemimpinan serta pelayanan prima. Kemampuan organisasi yang saya asah melalui berbagai kegiatan sekolah memberikan rasa percaya diri tinggi untuk memimpin tim di industri restoran.",
    name: "Rico Hamzah",
    role: "Alumni TSM - MANAGER DI SUKA GRILL PEKALONGAN",
  },
];

const PPDBPage = () => {
  const [index, setIndex] = useState(0);
  const orderRef = useRef<number[]>([]);

  const getNextShuffledOrder = () => {
    const total = testimonials.length;
    const remaining = orderRef.current.slice(1);
    if (remaining.length === 0) {
      const all = Array.from({ length: total }, (_, i) => i);
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      orderRef.current = all;
    } else {
      orderRef.current = remaining;
    }
    return orderRef.current[0];
  };

  useEffect(() => {
    orderRef.current = Array.from({ length: testimonials.length }, (_, i) => i);
    setIndex(Math.floor(Math.random() * testimonials.length));
    const timer = setInterval(() => {
      setIndex(getNextShuffledOrder());
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const Card = ({ item }: { item: (typeof testimonials)[number] }) => (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col justify-center items-center text-white'>
      <img
        src={item.avatar}
        alt={`avatar ${item.name}`}
        className='rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg'
      />
      <p className='mt-4 font-inter leading-relaxed max-w-xl text-lg lg:text-xl'>
        {`"${item.quote}"`}
      </p>
      <span className='mt-3 font-bold font-roboto text-base'>{item.name}</span>
      <span className='font-inter text-sm text-white/80 italic'>
        {item.role}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='bg-[#142822] mt-10 py-10 overflow-hidden bg-fixed bg-cover bg-center'
      style={{
        backgroundImage: `linear-gradient(rgba(20,40,34,0.85), rgba(20,40,34,0.85)), url(${BgSmedip.src})`,
      }}>
      <div className='mx-auto px-5 xl:px-0 max-w-6xl text-center'>
        <h2 className='mb-10 font-extrabold font-roboto text-white text-2xl lg:text-3xl'>
          Testimoni Alumni
        </h2>

        <div className='flex justify-center items-center text-white min-h-[360px]'>
          <AnimatePresence mode='wait'>
            <Card key={index} item={testimonials[index]} />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default PPDBPage;
