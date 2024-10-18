/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";
import { getNews, News, showNews } from "../../lib/fetch";
import striptags from "striptags";
import { useRouter } from "next/router";
import { getFullpath } from "../../lib/getFullpath";

import moment from "moment";
import "moment/locale/id";
import SmedipKristalPage from "@/components/SmedipKristal";
import Image from "next/image";

import { motion } from "framer-motion";
import SocialShare from "@/components/social-share";
import Link from "next/link";

moment.locale("id");

export default function ReadNews({
  news,
  latestNews,
}: {
  news: News;
  latestNews: News[];
}) {
  const { asPath } = useRouter();

  return (
    <AppLayout bright>
      <NextSeo
        title={`${news.title} | SMK Diponegoro Karanganyar`}
        description={striptags(news.content)
          .replaceAll("&nbsp;", "")
          .slice(0, 160)}
        openGraph={{
          title: `${news.title} | SMK Diponegoro Karanganyar`,
          description: striptags(news.content)
            .replaceAll("&nbsp;", "")
            .slice(0, 160),
          url: getFullpath(asPath),
          images: [
            {
              url: news.cover,
              width: 850,
              height: 650,
              alt: news.title,
            },
          ],
        }}
      />
      <Jumbotron
        title={news.title}
        center
        sub={
          <div className='flex flex-col mt-3 font-light text-sm text-white xl:text-base'>
            <span>{news.author.name}</span>
            <span>{formatDate(news.created_at)}</span>
          </div>
        }
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='mt-5 xl:mt-8'>
        <div className='mx-auto mb-5 max-w-6xl'>
          <div className='gap-3 grid grid-cols-12'>
            <div className='border-slate-100 col-span-12 xl:col-span-8 bg-white border'>
              <Image
                src={news.cover}
                alt={news.title}
                className='p-3 w-full object-cover'
                width={850}
                height={650}
              />
              <article
                className={`
                  w-full px-5 py-3
                  text-sm lg:text-base
                  font-roboto
                  aspect-video
                  prose max-w-none prose-green text-black 
                  leading-normal`}
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
              <SocialShare url={getFullpath(asPath)} />
            </div>
            <div className='col-span-12 xl:col-span-4 px-5 xl:px-0'>
              <strong>Tag:</strong> <br />
              {news.categories?.map((cat) => (
                <span
                  key={cat.slug}
                  className='inline-block bg-[#4FBEBC] mr-2 mb-2 px-3 py-1 rounded-full font-semibold text-white text-xs'>
                  {cat.title}
                </span>
              ))}
            </div>
            <div className='col-span-12 px-5 xl:px-0'>
              <div className='gap-3 grid grid-cols-12'>
                <div className='col-span-12'>
                  <h2 className='font-bold text-2xl'>Berita Terbaru</h2>
                </div>
                {latestNews &&
                  latestNews.map((news) => (
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
                      <span className='text-slate-400 text-xs'>
                        {formatDate(news.created_at)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <SmedipKristalPage />
    </AppLayout>
  );
}

const formatDate = (dateString: string) => {
  return moment(dateString).locale("id").format("dddd, DD MMMM YYYY HH:mm");
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: newses } = await getNews();

  return {
    paths: newses.map((pub) => ({
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
  const { data: news } = await showNews(slug);
  const { data: latestNews } = await getNews();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news,
      latestNews: latestNews.slice(0, 12),
    },
    revalidate: 1,
  };
};
