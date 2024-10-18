/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import { getFullpath } from "../../lib/getFullpath";
import { ParsedUrlQuery } from "querystring";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";
import {
  getNews,
  getPublikasi,
  News,
  Publikasi,
  showPublikasi,
} from "../../lib/fetch";
import striptags from "striptags";
import { useRouter } from "next/router";
import SocialShare from "@/components/social-share";
import Link from "next/link";

import moment from "moment";
import "moment/locale/id";
import SmedipKristalPage from "@/components/SmedipKristal";

export default function ReadPublication({
  data,
  publications,
  newses,
}: {
  data: Publikasi;
  publications: Publikasi[];
  newses: News[];
}) {
  const { asPath } = useRouter();

  return (
    <AppLayout>
      <NextSeo
        title={`${data.title} | SMK Diponegoro Karanganyar`}
        description={extractDescription(data.content)}
        openGraph={generateOpenGraph(data, asPath)}
      />
      <Jumbotron
        title={data.title}
        sub={
          <div className='space-x-3 font-light text-slate-400 text-sm xl:text-base'>
            <span>{data.author.name}</span>
            <span> - </span>
            <span>{formatDate(data.created_at)}</span>
          </div>
        }
      />
      <div className='my-5 xl:my-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='gap-3 grid grid-cols-12'>
            <div className='border-slate-100 col-span-12 xl:col-span-8 bg-white border rounded-lg overflow-hidden'>
              <img
                src={data.cover}
                alt={data.title}
                className='mb-5 w-full object-cover'
              />
              <article
                className='px-5 py-3 w-full max-w-none text-black text-sm lg:text-base leading-normal prose prose-green'
                dangerouslySetInnerHTML={{ __html: data.content }}
              />

              <SocialShare url={getFullpath(asPath)} />
            </div>
            {/* category */}
            <div className='col-span-12 xl:col-span-4 px-5 xl:px-0'>
              <strong>Tag:</strong> <br />
              {data.categories?.map((cat) => (
                <span
                  key={cat.slug}
                  className='inline-block bg-[#4FBEBC] mr-2 mb-2 px-3 py-1 rounded-full font-semibold text-white text-xs'>
                  {cat.title}
                </span>
              ))}
            </div>
            {/* end: category */}

            {/* relevant publikasi */}
            <div className='col-span-12 my-8 px-5 xl:px-0'>
              <div className='gap-3 grid grid-cols-12'>
                <div className='col-span-12'>
                  <h2 className='font-bold text-2xl'>Publikasi Terbaru</h2>
                </div>
                {publications?.map((publikasi) => (
                  <div
                    className='flex flex-col gap-3 border-slate-200 col-span-12 md:col-span-6 xl:col-span-4 bg-white shadow p-3 border rounded-md'
                    key={publikasi.slug}>
                    <img
                      src={publikasi.cover}
                      alt={publikasi.title}
                      // className='w-full h-full object-cover'
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                      }}
                    />
                    <Link
                      href={`/publikasi/${publikasi.slug}`}
                      key={publikasi.slug}
                      className='line-clamp-2 font-bold text-black text-sm hover:text-[#DB7710] hover:underline break-words overflow-x-hidden'>
                      {publikasi.title}
                    </Link>

                    <div className='flex flex-col'>
                      <span className='text-slate-400 text-xs'>
                        {publikasi.author.name}
                      </span>
                      <span className='text-slate-400 text-xs'>
                        {formatDate(publikasi.created_at)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end: relevant publikasi */}

            {/* berita terbaru */}
            <div className='col-span-12 px-5 xl:px-0'>
              <div className='gap-3 grid grid-cols-12'>
                <div className='col-span-12'>
                  <h2 className='font-bold text-2xl'>Berita Terbaru</h2>
                </div>
                {newses?.map((news) => (
                  <div
                    className='gap-3 border-slate-200 col-span-12 md:col-span-6 xl:col-span-4 bg-white p-3 border'
                    key={news.slug}>
                    <img
                      src={news.cover}
                      alt={news.title}
                      // className='w-full h-full object-cover'
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                      }}
                    />
                    <Link
                      href={`/berita/${news.slug}`}
                      key={news.slug}
                      className='line-clamp-2 text-black text-sm hover:text-[#DB7710] hover:underline break-words overflow-x-hidden'>
                      {news.title}
                    </Link>
                    {/* time */}
                    <div className='flex flex-col'>
                      <span className='text-slate-400 text-xs'>
                        {formatDate(news.created_at)}
                      </span>
                    </div>
                    {/* end: time */}
                  </div>
                ))}
              </div>
            </div>
            {/* end:berita terbaru */}
          </div>
        </div>
      </div>

      <SmedipKristalPage />
    </AppLayout>
  );
}

const extractDescription = (content: string) => {
  return striptags(content).replaceAll("&nbsp;", "").slice(0, 160);
};

const generateOpenGraph = (data: Publikasi, asPath: string) => {
  return {
    title: `${data.title} | SMK Diponegoro Karanganyar`,
    description: extractDescription(data.content),
    url: getFullpath(asPath),
    images: [
      {
        url: data.cover,
        width: 850,
        height: 650,
        alt: data.title,
      },
    ],
  };
};

const formatDate = (dateString: string) => {
  return moment(dateString).locale("id").format("DD MMMM YYYY HH:mm");
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: publications } = await getPublikasi();

  return {
    paths: publications.map((pub) => ({
      params: {
        slug: pub.slug,
      },
    })),
    fallback: "blocking",
  };
};

interface IProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params as IProps;
  const { data } = await showPublikasi(slug);
  const { data: publications } = await getPublikasi();
  const { data: latestNews } = await getNews();

  const newses = latestNews.slice(0, 12);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      publications,
      newses,
    },
    revalidate: 10,
  };
};
