/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Publikasi } from "../lib/fetch";
import striptags from "striptags";

const PublikasiList = ({ list }: { list: Publikasi[] }) => {
  return (
    <div className="mt-8 px-3 xl:px-0">
      <div className="gap-3 grid grid-cols-12">
        {list?.map((article, i) => (
          <Link
            legacyBehavior
            href={`/publikasi/${encodeURIComponent(article.slug)}`}
            key={i}
          >
            <a className="flex border-slate-200 col-span-12 bg-white hover:bg-[#4FBEBC] hover:shadow hover:shadow-slate-200/50 px-3 py-2 border hover:scale-105 transition duration-300">
              <div className="mr-3 xl:mr-5">
                <img
                  src={article.cover}
                  alt={article.title}
                  className="w-32 h-32 object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <div className="break-words">
                <div className="line-clamp-3 font-bold text-base">
                  {article.title}
                </div>
                <div className="flex flex-col">
                  <span className="font-normal text-xs xl:text-sm">
                    {article.author.name}
                  </span>
                  <span className="font-normal text-xs xl:text-sm">
                    {new Date(article.created_at).toLocaleString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
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
