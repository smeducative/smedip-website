/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Publikasi } from "../lib/fetch";

import moment from "moment";
import "moment/locale/id";

const PublikasiList = ({ list }: { list: Publikasi[] }) => {
  return (
    <div className='mt-8 px-3 xl:px-0'>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {list?.map((article, index) => (
          <Link
            key={index}
            href={`/publikasi/${encodeURIComponent(article.slug)}`}
            className='block border-slate-200 bg-white hover:bg-teal-400 hover:shadow-lg hover:shadow-slate-200/50 p-4 border rounded-lg transition-transform duration-300 ease-in-out hover:scale-105'>
            <div className='flex items-start'>
              <img
                src={article.cover}
                alt={article.title}
                className='mr-4 rounded-md w-32 h-32 object-cover'
                width={128}
                height={128}
              />
              <div className='flex-1'>
                <h3 className='mb-2 line-clamp-3 font-bold text-lg text-slate-800'>
                  {article.title}
                </h3>
                <p className='mb-1 text-slate-600 text-sm'>
                  {article.author.name}
                </p>
                <p className='text-slate-500 text-sm'>
                  {formatDate(article.created_at)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString: string) => {
  return moment(dateString).locale("id").format("DD MMMM YY, HH:mm");
};

export default PublikasiList;
