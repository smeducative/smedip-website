import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";

type Props = {
  title: string;
  body: string;
  author: string;
  date: string;
};

export default function ReadPublication({ title, body, author, date }: Props) {
  return (
    <AppLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <Jumbotron
        title={title}
        sub={
          <div className='text-sm xl:text-base text-slate-400 font-light space-x-3'>
            <span>{author}</span>
            <span>-</span>
            <span>{date}</span>
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
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "first-post" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);

  const title =
    "Contoh judul publikasi yang akan sangat sedikit panjang dan lebar di kali tinggi dan lebih dari tinggi sekali";
  const body =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <a href='/'>inilah link</a> fugiat <b>nulla pariatur</b>. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const author = "Rio Aprianto";
  const date = "22-08-1999 12:22";

  return {
    props: {
      title,
      body,
      author,
      date,
    },
  };
};
