/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";
import { getFullpath } from "../../lib/getFullpath";
import { ParsedUrlQuery } from "querystring";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";
import { getPublikasi, Publikasi, showPublikasi } from "../../lib/fetch";
import striptags from "striptags";
import { useRouter } from "next/router";

export default function ReadPublication({ data }: { data: Publikasi }) {
  const { asPath } = useRouter();

  return (
    <AppLayout>
      <NextSeo
        title={`${data.title} | SMK Diponegoro Karanganyar`}
        description={striptags(data.content)
          .replaceAll("&nbsp;", "")
          .slice(0, 160)}
        openGraph={{
          title: `${data.title} | SMK Diponegoro Karanganyar`,
          description: striptags(data.content)
            .replaceAll("&nbsp;", "")
            .slice(0, 160),
          url: getFullpath(asPath),
          images: [
            {
              url: data.cover,
              width: 850,
              height: 650,
              alt: data.title,
            },
          ],
        }}
      />
      <Jumbotron
        title={data.title}
        sub={
          <div className='text-sm xl:text-base text-slate-400 font-light space-x-3'>
            <span>{data.author.name}</span>
            <span> - </span>
            <span>
              {new Date(data.created_at).toLocaleString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        }
      />

      <div className='mt-5 xl:mt-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-12 xl:col-span-8 bg-white border border-slate-100'>
              <img
                src={data.cover}
                alt={data.title}
                className='w-full object-cover'
              />
              <article
                className={`
                  w-full px-5 py-3
                  text-sm lg:text-base
                  prose max-w-none prose-green text-black 
                  leading-normal`}
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <div className="sharethis-inline-share-button"></div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

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

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
