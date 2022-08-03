import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AppFooter from "../components/AppFooter";
import KompetensiKeahlian from "../components/KompetensiKeahlian";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import PublikasiSection from "../components/sections/PublikasiSection";
import { getNews } from "../lib/fetch";
import type { News } from "../lib/fetch";

type Props = {
  news: News[];
};

const Home: NextPage<Props> = ({ news }) => {
  return (
    <AppLayout>
      <Head>
        <title>SMK Diponegoro Karanganyar Kab. Pekalongan</title>
      </Head>
      <HeroSection />
      <KompetensiKeahlian />
      <NewsSection news={news} />
      <PublikasiSection />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: news } = await getNews();

  return {
    props: {
      news,
    },
  };
};

export default Home;
