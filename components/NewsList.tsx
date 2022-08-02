import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function NewsList() {
  const blogPost = {
    title: "Pengumuman Hasil Seleksi",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "http://placekitten.com/200/200",
    date: "20-08-2022 16:00",
    author: "Ike lilis",
  };

  return (
    <div className='mt-5 xl:mt-12 grid grid-cols-12 gap-3 md:gap-y-5'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <Link href={`/berita/${encodeURIComponent(blogPost.title)}`} key={i}>
          <a className='p-3 col-span-12 lg:col-span-6 xl:col-span-4 bg-white border border-slate-200 hover:border-green-700 hover:shadow hover:shadow-green-500 transition duration-150'>
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className='w-full h-44 lg:h-48 object-cover'
            />
            <div className='mt-1 flex flex-col overflow-x-hidden break-words'>
              <div className='mb-2'>
                <h2 className='text-base xl:text-lg font-bold'>
                  {blogPost.title}
                </h2>
                <span className='font-normal text-sm text-gray-700'>
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
  );
}
