import type { NextPage } from "next";
import Head from "next/head";
import AppFooter from "../components/AppFooter";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>SMK Diponegoro Karanganyar Kab. Pekalongan</title>
      </Head>
      <HeroSection />
      <NewsSection />
      <AppFooter />
    </AppLayout>
  );
};

export default Home;
