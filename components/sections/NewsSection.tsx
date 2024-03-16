import Link from "next/link";
import { News } from "../../lib/fetch";
import NewsList from "../NewsList";

/* eslint-disable @next/next/no-img-element */
export default function NewsSection({ news }: { news: News[] }) {
  return (
    <div className="mt-8 xl:mt-20">
      <div className="bg-[#4FBEBC] px-5 lg:px-0 py-10 font-bold font-roboto text-2xl text-white xl:text-3xl">
        <h1 className="mx-auto max-w-6xl">Informasi Terbaru</h1>
      </div>

      <div className="mx-auto mt-5 xl:mt-8 px-5 max-w-6xl">
        <NewsList list={news} />
      </div>
    </div>
  );
}
