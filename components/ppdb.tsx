import Image from "next/image";
import BgOne from "@/public/assets/images/2.png";
import { motion } from "framer-motion";

const PPDBPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#4FBEBC] mt-10 py-10"
    >
      <div className="gap-6 grid grid-cols-12 mx-auto px-5 xl:px-0 max-w-6xl">
        <div className="flex flex-col justify-center items-center order-1 lg:order-none col-span-12 lg:col-span-8">
          <div className="flex flex-col justify-center items-center text-white">
            {/* <h1 className="font-extrabold font-roboto text-[#4FBEBC] text-2xl">
                MAU (Modern, Agamis, Unggul)
              </h1> */}
            <div className="mt-5 font-bold font-inter text-xl lg:text-2xl">
              {`"Jadikan setiap tempat sebagai Sekolah, jadikan setiap orang sebagai Guru."`}{" "}
              <br />
              <span className="font-normal font-roboto text-sm">
                - Ki Hajar Dewantara
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-12 lg:col-span-4">
          <Image
            src={BgOne}
            alt={`siswi narasi`}
            className="w-72 lg:max-w-96 h-72 lg:max-h-96"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PPDBPage;
