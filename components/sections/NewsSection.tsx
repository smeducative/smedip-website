import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function NewsSection() {
  const blogPost = {
    title: "Pengumuman Hasil Seleksi",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "http://placekitten.com/200/200",
    date: "20-08-2022 16:00",
    author: "Ike lilis",
  };

  return (
    <div className='mt-8 xl:mt-20 px-3 xl:px-0 mx-auto max-w-6xl'>
      <h1 className='text-2xl xl:text-4xl font-bold text-center'>
        Informasi Terbaru
      </h1>

      <div className='mt-12'>
        <div className='mt-8 grid grid-cols-12 gap-3 gap-y-7 md:gap-y-5'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
            <Link href={`#`} key={i}>
              <a className='py-3 px-5 col-span-12 lg:col-span-6 xl:col-span-4 bg-white border border-transparent hover:border-green-700 hover:shadow hover:shadow-green-500 transition duration-150'>
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className='w-full h-44 lg:h-48 object-cover hover:scale-95 duration-100 ease-out'
                />
                <div className='mt-3 flex flex-col overflow-x-hidden break-words'>
                  <div className='mb-2'>
                    <h2 className='text-lg font-bold'>{blogPost.title}</h2>
                    <span className='font-normal text-sm text-gray-600'>
                      {blogPost.author} . {blogPost.date}
                    </span>
                  </div>
                  <p className='text-slate-600 text-sm font-base'>
                    {blogPost.body}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
