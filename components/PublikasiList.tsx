/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Publikasi } from "../lib/fetch";

const PublikasiList = ({ list }: { list: Publikasi[] }) => {
  return (
    <div className='mt-8 px-3 xl:px-0'>
      <div className='grid grid-cols-12 gap-3'>
        {list &&
          list.map((article, i) => (
            <Link
              href={`/publikasi/${encodeURIComponent(article.slug)}`}
              key={i}>
              <a className='py-2 px-3 col-span-12 flex bg-white border border-slate-200 hover:border-green-600/50 hover:shadow hover:shadow-green-600/50'>
                <div className='mr-3 xl:mr-5'>
                  <img
                    src={article.cover}
                    alt={article.title}
                    className='w-60 h-20 xl:h-36 object-cover'
                  />
                </div>
                <div className='break-words'>
                  <div className='text-base xl:text-lg font-bold'>
                    {article.title}
                  </div>
                  <div>
                    <span className='text-xs xl:text-sm font-normal text-slate-400'>
                      {article.author.name}
                    </span>
                    <span className='text-xs xl:text-sm font-normal text-slate-400'>
                      {article.created_at}
                    </span>
                  </div>
                  <div className='hidden xl:block text-xs xl:text-sm font-normal text-slate-500 mt-2'>
                    {article.content.replace(/(<([^>]+)>)/gi, "")}
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