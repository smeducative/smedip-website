import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className="bg-white bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(/assets/images/CBMM4413.JPG)`,
      }}
    >
      <div className="bg-primary/50 min-h-screen">
        <div className="relative mx-auto pt-16 max-w-7xl min-h-screen">
          <div className="bottom-1 absolute flex md:flex-row flex-col justify-end items-end px-5 2xl:px-0 py-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col drop-shadow-lg shadow-yellow-500 w-full text-center text-white leading-tight"
            >
              <span className="text-lg lg:text-3xl">
                Selamat datang di Official Website
              </span>
              <span className="font-extrabold text-2xl lg:text-5xl underline">
                SMK Diponegoro Karanganyar
              </span>
              <span className="text-lg lg:text-3xl">Kabupaten Pekalongan</span>
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
