import Link from "next/link";
import { News } from "../../lib/fetch";
import NewsList from "../NewsList";

/* eslint-disable @next/next/no-img-element */
export default function NewsSection({ news }: { news: News[] }) {
  return (
    <div className="mt-8 xl:mt-20 px-3 xl:px-0 mx-auto max-w-6xl">
      <h1 className="text-2xl xl:text-4xl font-bold">Informasi Terbaru</h1>

      <div className="mt-5 xl:mt-8">
        <NewsList list={news} />
      </div>
    </div>
  );
}
