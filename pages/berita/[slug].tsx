/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";
import { getNews, News, showNews } from "../../lib/fetch";

export default function ReadNews({ news }: { news: News }) {
  return (
    <AppLayout>
      <Head>
        <title>{news.title}</title>
      </Head>
      <Jumbotron
        title={news.title}
        sub={
          <div className='text-sm xl:text-base text-slate-400 font-light space-x-3'>
            <span>{news.author.name}</span>
            <span> - </span>
            <span>{news.created_at}</span>
          </div>
        }
      />

      <div className='mt-5 xl:mt-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-12 xl:col-span-8 bg-white border border-slate-100'>
              <img
                src={news.cover}
                alt={news.title}
                className='w-full object-cover'
              />
              <article
                className={`
                  w-full px-5 py-3
                  text-sm lg:text-base
                  prose max-w-none prose-green text-black 
                  leading-normal`}
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
            <div className='col-span-12 xl:col-span-4'></div>
          </div>
        </div>
      </div>
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

  if (!news) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news,
    },
    revalidate: 1,
  };
};
