import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  "/assets/images/hero-1.jpg",
  "/assets/images/hero-2.jpg",
  "/assets/images/hero-3.JPG",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-white min-h-[70vh] md:min-h-screen relative overflow-hidden'>
      {heroImages.map((src, i) => (
        <div
          key={src}
          className='absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out'
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      <div className='bg-primary/50 dark:bg-black/60 min-h-[70vh] md:min-h-screen relative z-10'>
        <div className='relative mx-auto pt-16 max-w-7xl min-h-[70vh] md:min-h-screen'>
          <div className='bottom-1 absolute flex md:flex-row flex-col justify-end items-end px-5 2xl:px-0 py-32 w-full'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='flex flex-col drop-shadow-lg shadow-yellow-500 w-full text-center text-white leading-tight'>
              <span className='text-lg lg:text-3xl'>
                Selamat datang di Official Website
              </span>
              <span className='font-extrabold text-2xl lg:text-5xl underline'>
                SMK Diponegoro Karanganyar
              </span>
              <span className='text-lg lg:text-3xl'>Kabupaten Pekalongan</span>
            </motion.div>
            {/* <div className="mt-12 md:mt-0 w-full md:w-1/2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/WmW3HOSmNC4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div> */}
            {/* 
            // wahai genereasi indonesia, kibarkan semangat cita cita, raihlah mimpi yang nyata belajar dan beroda. bersama kami raih masa dpean, melangkah maju kita tak gentar, kreatif cerdas tampil inovatif, berbekal ilmu mandiri, smk diponegoro pekalongan solusi buat negeri, smk diponegoro pekalongan mengabdi sepenuh hati. smk diponegoro pekalongan mendidik kadar islami. smk diponegoro pekalongan unggul dlam prestasi, smk diponegoro pekalongan modern agamis unggul
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
