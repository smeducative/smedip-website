import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import { News } from "../lib/fetch";
import SpotlightCard from "./SpotlightCard";
import StarBorder from "./StarBorder";

moment.locale("id");

/* eslint-disable @next/next/no-img-element */
export default function NewsList({
  list,
  showLoadMore = false,
}: {
  list: News[];
  showLoadMore?: boolean;
}) {
  return (
    <div className='flex flex-col gap-4 mt-5 xl:mt-12'>
      {list?.map((news, i) => (
        <Link
          legacyBehavior
          passHref
          href={`/berita/${encodeURIComponent(news.slug)}`}
          key={news.slug}>
          <a
            className='group block opacity-0 animate-fade-in-up'
            style={{ animationDelay: `${i * 80}ms` }}>
            <SpotlightCard
              spotlightColor='rgba(219, 119, 16, 0.2)'
              className='border-[#a36220]/20 border-2 flex flex-row bg-white hover:bg-[#DB7710] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full'>
              <div className='relative w-28 sm:w-48 lg:w-60 flex-shrink-0 overflow-hidden'>
                <img
                  src={news.cover}
                  alt={news.title}
                  className='absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/5 to-transparent group-hover:opacity-0 transition-opacity duration-500' />
              </div>
              <div className='flex flex-col justify-center p-3 sm:p-4 xl:p-5 flex-1 break-words overflow-x-hidden'>
                <span className='text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#DB7710] group-hover:text-orange-200 transition-colors duration-500 mb-0.5 sm:mb-1'>
                  Informasi
                </span>
                <h2 className='line-clamp-2 font-bold text-sm sm:text-base xl:text-lg leading-snug'>
                  {news.title}
                </h2>
                <div className='flex flex-col gap-0.5 text-slate-400 group-hover:text-white/70 mt-2 sm:mt-3 transition-colors duration-500'>
                  <span className='font-medium text-sm'>{news.author.name}</span>
                  <span className='font-normal text-xs'>
                    {moment(news.created_at).format("DD MMMM YYYY")}&nbsp;·&nbsp;
                    {moment(news.created_at).format("HH:mm")} WIB
                  </span>
                </div>
                <div className='mt-3 flex items-center gap-1 text-[#DB7710] group-hover:text-white text-sm font-semibold transition-colors duration-500'>
                  <span>Baca selengkapnya</span>
                  <svg
                    className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </div>
            </SpotlightCard>
          </a>
        </Link>
      ))}

      {showLoadMore && (
        <div
          className='flex justify-center mt-4 opacity-0 animate-fade-in-up'
          style={{ animationDelay: `${(list?.length ?? 0) * 80}ms` }}>
          <Link href='/berita' legacyBehavior passHref>
            <StarBorder as='a' color='#DB7710' speed='4s'>
              Lihat Semua Berita &rarr;
            </StarBorder>
          </Link>
        </div>
      )}
    </div>
  );
}
