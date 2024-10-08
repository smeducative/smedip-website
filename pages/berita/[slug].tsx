/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";
import { getNews, getPublikasi, News, showNews } from "../../lib/fetch";
import striptags from "striptags";
import { useRouter } from "next/router";
import { getFullpath } from "../../lib/getFullpath";

import moment from "moment";
import "moment/locale/id";
import SmedipKristalPage from "@/components/SmedipKristal";
import Publikasi from "../publikasi";
import PublikasiSection from "@/components/sections/PublikasiSection";
import Image from "next/image";

import { motion } from "framer-motion";

moment.locale("id");

export default function ReadNews({
  news,
  publikasi,
}: {
  news: News;
  publikasi: Publikasi[];
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
            <span>{moment(news.created_at).format("LLLL")} WIB</span>
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
        <div className='mx-auto max-w-6xl'>
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
              <div className='sharethis-inline-share-button'></div>
            </div>
            <div className='col-span-12 xl:col-span-4'>
              <PublikasiSection publikasi={publikasi} />
            </div>
          </div>
        </div>
      </motion.div>

      <SmedipKristalPage />
    </AppLayout>
  );
}

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
  const { data: publikasi } = await getPublikasi();

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news,
      publikasi,
    },
    revalidate: 1,
  };
};
