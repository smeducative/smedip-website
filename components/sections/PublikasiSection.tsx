/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function PublikasiSection() {
  const publikasi = {
    title: "Contoh publikasi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "http://placekitten.com/200/200",
    date: "22-08-1999 12:22",
    author: "Rio Aprianto",
  };

  return (
    <div className='mt-8 xl:mt-20'>
      <div className='mx-auto max-w-6xl'>
        <div className='text-center'>
          <h1 className='text-xl xl:text-3xl font-bold'>Publikasi </h1>
        </div>

        <div className='mt-8'>
          <div className='grid grid-cols-12 gap-3'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
              <Link href={"#"} key={i}>
                <a className='py-2 px-4 col-span-12 flex bg-white gap-5 border border-transparent hover:border-green-600 hover:shadow hover:shadow-green-600'>
                  <div>
                    <img
                      src={publikasi.image}
                      className='w-80 h-44 object-cover hover:scale-105 transition duration-200'
                    />
                  </div>
                  <div>
                    <div className='text-lg font-bold'>{publikasi.title}</div>
                    <div className='text-sm text-slate-600'>
                      {publikasi.author} {publikasi.date}
                    </div>
                    <div className='text-sm font-normal text-slate-600'>
                      {publikasi.description}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
