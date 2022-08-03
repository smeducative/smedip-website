import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";
import {
  getPublikasi,
  Publikasi,
  showNews,
  showPublikasi,
} from "../../lib/fetch";

export default function ReadPublication({ data }: { data: Publikasi }) {
  return (
    <AppLayout>
      <Head>
        <title>{data.title}</title>
      </Head>
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
              <article
                className={`
                  w-full px-5 py-3
                  text-sm lg:text-base
                  prose max-w-none prose-green text-black 
                  leading-normal`}
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
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
        slug: `/publikasi/${pub.slug}`,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { slug } = params;
  const { data } = await showPublikasi(slug);

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
