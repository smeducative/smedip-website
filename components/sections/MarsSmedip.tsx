import { motion } from "framer-motion";

const MarsSmedip = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto pt-12 xl:pt-24 pb-10 max-w-6xl"
      >
        <div className="gap-6 grid grid-cols-12 px-5 xl:px-0">
          <div className="border-[#ffb370] border-2 col-span-12 lg:col-span-7 bg-[#127a77d7] before:bg-black p-5 rounded-xl rotate-0 hover:rotate-2 duration-300">
            <div className="flex flex-col justify-center items-start">
              <h6 className="font-extrabold font-roboto text-[#f8ad63] text-2xl text-center">
                ~ 🎊 Mars SMEDIP 🎗️ ~
              </h6>
              <p className="mt-5 font-roboto text-sm text-white lg:text-base">
                Wahai generasi Indonesia <br />
                Kibarkan semangat cita-cita <br />
                Raihlah mimpi yang nyata, dengan belajar dan berdoa. <br />
                Bersama kami raih masa depan Melangkah maju kita tak gentar{" "}
                <br />
                Kreatif, Cerdas, Tampil inovatif <br />
                Berbekal ilmu mandiri. <br /> <br />
                SMK Diponegoro Pekalongan solusi buat negeri <br />
                SMK Diponegoro Pekalongan mengabdi sepenuh hati <br />
                SMK Diponegoro Pekalongan mendidik kader Islami <br />
                SMK Diponegoro Pekalongan unggul dalam prestasi <br />
                SMK Diponegoro Pekalongan Modern, Agamis, Unggul.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center col-span-12 lg:col-span-5">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CFIfk5g35uk?si=p0HzWstcHcxy1M__"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

{
  /* <div className="mt-12 md:mt-0 w-full md:w-1/2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/WmW3HOSmNC4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div> */
}

export default MarsSmedip;
