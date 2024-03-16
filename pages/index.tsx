import type { GetStaticProps, NextPage } from "next";
import KompetensiKeahlian from "../components/KompetensiKeahlian";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import PublikasiSection from "../components/sections/PublikasiSection";
import { getNews, getPublikasi, Publikasi } from "../lib/fetch";
import type { News } from "../lib/fetch";
import SambutanKepsek from "../components/SambutanKepsek";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getFullpath } from "../lib/getFullpath";
import InCollaborateWith from "../components/InCollaborateWith";
import SmedipKristalPage from "@/components/SmedipKristal";
import MarsSmedip from "@/components/sections/MarsSmedip";
import PPDBPage from "@/components/ppdb";

type Props = {
  news: News[];
  publikasi: Publikasi[];
};

const Home: NextPage<Props> = ({ news, publikasi }) => {
  const { route } = useRouter();

  return (
    <AppLayout bright>
      <NextSeo
        title="SMK Diponegoro Karanganyar Kab. Pekalongan | MAU Modern, Agamis, Unggul"
        description="Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan Kejuruan dengan Layanan Pendidikan yang Modern Sesuai Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern Agamis Unggul)"
        canonical={getFullpath()}
        openGraph={{
          title: "SMK Diponegoro Karanganyar",
          description:
            "Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan Kejuruan dengan Layanan Pendidikan yang Modern Sesuai Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern Agamis Unggul)",
          url: route,
          images: [
            {
              url: getFullpath("/logo.png"),
              width: 850,
              height: 650,
              alt: "Photo of text",
            },
          ],
        }}
      />
      <HeroSection />
      <SmedipKristalPage />
      {/* <SambutanKepsek /> */}
      <KompetensiKeahlian />
      <NewsSection news={news} />
      {/* <YoutubeActivities /> */}
      <PublikasiSection publikasi={publikasi} />
      <PPDBPage />
      <MarsSmedip />
      <InCollaborateWith />
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
