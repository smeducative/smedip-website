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
import YoutubeActivities from "../components/YoutubeActivites";
import SambutanKepsek from "../components/SambutanKepsek";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type Props = {
  news: News[];
  publikasi: Publikasi[];
};

const Home: NextPage<Props> = ({ news, publikasi }) => {
  const router = useRouter();

  return (
    <AppLayout bright>
      <NextSeo
        title='SMK Diponegoro Karanganyar Kab. Pekalongan'
        description='Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan Kejuruan dengan Layanan Pendidikan yang Modern Sesuai Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern Agamis Unggul)'
        canonical={router.pathname}
      />
      <HeroSection />
      <SambutanKepsek />
      <KompetensiKeahlian />
      <NewsSection news={news} />
      <YoutubeActivities />
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
    revalidate: 10,
  };
};

export default Home;
