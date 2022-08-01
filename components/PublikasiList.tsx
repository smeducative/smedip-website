/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const PublikasiList = () => {
  const publikasi = {
    title: "Contoh publikasi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "http://placekitten.com/200/200",
    date: "22-08-1999 12:22",
    author: "Rio Aprianto",
  };

  return (
    <div className='mt-8 px-3 xl:px-0'>
      <div className='grid grid-cols-12 gap-3'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <Link
            href={`/publikasi/${encodeURIComponent(publikasi.title)}`}
            key={i}>
            <a className='py-2 px-3 col-span-12 flex bg-white border border-slate-200 hover:border-green-600 hover:shadow hover:shadow-green-600'>
              <div className='mr-3 xl:mr-5'>
                <img
                  src={publikasi.image}
                  alt={publikasi.title}
                  className='w-96 h-20 xl:h-44 object-cover'
                />
              </div>
              <div>
                <div className='text-base xl:text-lg font-bold'>
                  {publikasi.title}
                </div>
                <div className='text-xs xl:text-sm font-normal text-slate-400'>
                  {publikasi.author} {publikasi.date}
                </div>
                <div className='text-xs xl:text-sm font-normal text-slate-500 mt-2'>
                  {publikasi.description}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PublikasiList;
