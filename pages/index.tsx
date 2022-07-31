import type { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>SMK Diponegoro Karanganyar Kab. Pekalongan</title>
      </Head>
      <HeroSection />
    </AppLayout>
  );
};

export default Home;
