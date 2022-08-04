import Link from "next/link";
import { News } from "../lib/fetch";
import dynamic from "next/dynamic";

/* eslint-disable @next/next/no-img-element */
export default function NewsList({ list }: { list: News[] }) {
  return (
    <div className='mt-5 xl:mt-12 grid grid-cols-12 gap-3 md:gap-y-5'>
      {list &&
        list.map((news, i) => {
          const content = news.content;
          return (
            <Link
              href={`/berita/${encodeURIComponent(news.slug)}`}
              key={news.slug}>
              <a className='p-3 col-span-12 lg:col-span-6 xl:col-span-4 bg-white border border-slate-200 hover:border-green-700 hover:shadow hover:shadow-green-500 transition duration-150'>
                <img
                  src={news.cover}
                  alt={news.title}
                  className='w-full h-44 lg:h-48 object-cover'
                />
                <div className='mt-1 flex flex-col overflow-x-hidden break-words'>
                  <div className='mb-2'>
                    <h2 className='text-base xl:text-lg font-bold'>
                      {news.title}
                    </h2>
                    <div className='flex gap-1'>
                      <span className='font-normal text-sm text-gray-700'>
                        {news.author.name}.
                      </span>
                      <span className='font-normal text-sm text-gray-700'>
                        {new Date(news.created_at).toLocaleString("id-ID", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className='text-slate-600 text-sm font-base'>
                    {news.content.replace(/(<([^>]+)>)/gi, "").slice(0, 160)}
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
