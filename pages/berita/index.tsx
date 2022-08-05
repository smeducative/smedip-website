import { GetStaticProps } from "next";
import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import NewsList from "../../components/NewsList";
import Jumbotron from "../../components/sections/Jumbotron";
import { getNews, News } from "../../lib/fetch";

export default function Berita({ news }: { news: News[] }) {
  return (
    <AppLayout>
      <Head>
        <title>Informasi terbaru</title>
      </Head>

      <Jumbotron title='Informasi Terbaru' />

      <div className='mx-auto max-w-6xl'>
        <NewsList list={news} />
      </div>
    </AppLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: news } = await getNews();

  return {
    props: {
      news,
    },
  };
};
