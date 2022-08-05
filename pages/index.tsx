import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AppFooter from "../components/AppFooter";
import KompetensiKeahlian from "../components/KompetensiKeahlian";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import PublikasiSection from "../components/sections/PublikasiSection";
import { getNews, getPublikasi, Publikasi } from "../lib/fetch";
import type { News } from "../lib/fetch";

type Props = {
  news: News[];
  publikasi: Publikasi[];
};

const Home: NextPage<Props> = ({ news, publikasi }) => {
  return (
    <AppLayout>
      <Head>
        <title>SMK Diponegoro Karanganyar Kab. Pekalongan</title>
      </Head>
      <HeroSection />
      <KompetensiKeahlian />
      <NewsSection news={news} />
      <PublikasiSection publikasi={publikasi} />
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: news } = await getNews();
  const { data: publikasi } = await getPublikasi();

  return {
    props: {
      news,
      publikasi,
    },
    revalidate: 1,
  };
};

export default Home;
