import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type KompetensiKeahlian = {
  svg?: ReactNode;
  image?: string;
  code: string;
  name: string;
};

export default function KompetensiKeahlianList({
  items,
}: {
  items: KompetensiKeahlian[];
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className='gap-3 grid grid-cols-2 md:grid-cols-4 px-3 xl:px-0 pt-5'>
        {items?.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            key={item.code}>
            <Card
              name={item.name}
              image={
                item.image ||
                "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              code={item.code}
              svg={item.svg}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

function Card({ code, name, image }: KompetensiKeahlian) {
  return (
    <div className='w-full max-w-xs group/card'>
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
        style={{
          backgroundImage: 'url("' + image + '")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className='top-0 left-0 absolute bg-black opacity-40 w-full h-full transition duration-300'></div>
        <div className='z-10 flex flex-row items-center space-x-4'></div>
        <div>
          <h1 className='relative z-10 font-bold text-gray-50 text-xl md:text-2xl'>
            {code}
          </h1>
          <p className='relative z-10 my-4 font-normal text-gray-50 text-sm'>
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
