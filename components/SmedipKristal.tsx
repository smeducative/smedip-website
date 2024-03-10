import Image from "next/image";
import SmedipKristal from "@/public/assets/images/smedip-kristal.png";
import { motion } from "framer-motion";

const SmedipKristalPage = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-12 pb-10 xl:pt-24 mx-auto max-w-6xl"
      >
        <div className="px-5 xl:px-0 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <Image src={SmedipKristal} alt={`sambutan kepsek src`} />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-2xl font-extrabold font-roboto text-[#4FBEBC]">
                MAU (Modern, Agamis, Unggul)
              </h1>
              <p className="mt-5 font-inter text-sm lg:text-base">
                Terinspirasi oleh julukan Indonesia sebagai{" "}
                <strong>Zamrud Khatulistiwa</strong>, SMK Diponegoro Karanganyar
                (SMEDIP) diharapkan menjadi representasi kecil dari kesuburan
                dan kehijauan negara di garis khatulistiwa. Layaknya zamrud yang
                berharga, SMEDIP berupaya menjadi lembaga pendidikan yang
                modern, agamis, dan unggul dalam membentuk generasi muda yang
                berkualitas. Dengan visi dan misi yang kuat, SMEDIP bertekad
                menjadi cerminan kecil dari keindahan dan potensi besar bangsa
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmedipKristalPage;
