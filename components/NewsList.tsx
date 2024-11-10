import Link from "next/link";
import { News } from "../lib/fetch";
import moment from "moment";
import "moment/locale/id";

moment.locale("id");

/* eslint-disable @next/next/no-img-element */
export default function NewsList({ list }: { list: News[] }) {
  return (
    <div className='gap-5 md:gap-y-5 grid grid-cols-12 mt-5 xl:mt-12'>
      {list?.map((news, i) => (
        <Link
          legacyBehavior
          passHref
          href={`/berita/${encodeURIComponent(news.slug)}`}
          key={news.slug}>
          <a className='border-[#a36220]/20 border-2 col-span-12 lg:col-span-6 xl:col-span-4 bg-white hover:bg-[#DB7710] rounded hover:text-white duration-500'>
            <img
              src={news.cover}
              alt={news.title}
              className='w-full h-60 lg:h-48 object-center object-cover hover:scale-110 duration-700'
            />
            <div className='flex flex-col mt-1 p-3 break-words overflow-x-hidden'>
              <h2 className='line-clamp-3 font-bold text-base xl:text-md'>
                {news.title}
              </h2>
              <div className='flex flex-col gap-1 text-slate-400'>
                <span className='font-normal text-sm'>{news.author.name}</span>
                <span className='font-normal text-sm'>
                  {moment(news.created_at).format("dddd, DD MMMM YYYY HH:mm")}{" "}
                  WIB
                </span>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
