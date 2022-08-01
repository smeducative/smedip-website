import type { NextPage } from "next";
import Head from "next/head";
import AppFooter from "../components/AppFooter";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import PublikasiSection from "../components/sections/PublikasiSection";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        {/* favicon */}
        <link rel='shortcut icon' href='/logo.png' />
        <title>SMK Diponegoro Karanganyar Kab. Pekalongan</title>
      </Head>
      <HeroSection />
      <NewsSection />
      <PublikasiSection />
    </AppLayout>
  );
};

export default Home;
