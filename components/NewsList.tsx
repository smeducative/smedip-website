import Link from "next/link";
import { News } from "../lib/fetch";
import moment from "moment";
import "moment/locale/id";
import { motion } from "framer-motion";

moment.locale("id");

/* eslint-disable @next/next/no-img-element */
export default function NewsList({ list }: { list: News[] }) {
  return (
    <div className="mt-5 xl:mt-12 grid grid-cols-12 gap-5 md:gap-y-5">
      {list?.map((news, i) => {
        const content = news.content;
        return (
          <Link
            legacyBehavior
            passHref
            href={`/berita/${encodeURIComponent(news.slug)}`}
            key={news.slug}
          >
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 xl:col-span-4 bg-white border border-slate-200 hover:border-green-700 hover:shadow hover:shadow-green-500 transition duration-200 rounded hover:scale-95"
            >
              <img
                src={news.cover}
                alt={news.title}
                className="w-full h-60 lg:h-48 object-cover"
              />
              <div className="p-3 mt-1 flex flex-col overflow-x-hidden break-words">
                <h2 className="text-base xl:text-lg font-bold">{news.title}</h2>
                <div className="flex gap-1">
                  <span className="font-normal text-sm text-gray-700">
                    {news.author.name} -
                  </span>
                  <span className="font-normal text-sm text-gray-700">
                    {moment(news.created_at).format("LLLL")} WIB
                  </span>
                </div>
              </div>
            </motion.a>
          </Link>
        );
      })}
    </div>
  );
}
