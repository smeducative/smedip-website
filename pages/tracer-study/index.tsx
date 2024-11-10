import type { NextPage } from "next";
import AppLayout from "@/components/layouts/AppLayout";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getFullpath } from "@/lib/getFullpath";
import {
  AboutTracerStudy,
  HeroSectionTracerStudy,
} from "@/components/tracer-study/about-tracer-study";
import SmedipKristalPage from "@/components/SmedipKristal";

const Home: NextPage = () => {
  const { route } = useRouter();

  return (
    <AppLayout bright>
      <NextSeo
        title='Tracer Study SMK Diponegoro Karanganyar Kab. Pekalongan | MAU Modern, Agamis, Unggul'
        description='Platform pelacakan dan analisis data alumni untuk pengembangan mutu pendidikan sekolah menengah kejuruan SMK Diponegoro Karanganyar Kabupaten Pekalongan'
        canonical={getFullpath()}
        openGraph={{
          title: "Tracer Study SMK Diponegoro Karanganyar",
          description:
            "Platform pelacakan dan analisis data alumni untuk pengembangan mutu pendidikan sekolah menengah kejuruan SMK Diponegoro Karanganyar Kabupaten Pekalongan",
          url: route,
          images: [
            {
              url: getFullpath("/logo.png"),
              width: 850,
              height: 650,
              alt: "Tracer Study SMK Diponegoro Karanganyar",
            },
          ],
        }}
      />
      <HeroSectionTracerStudy />
      <AboutTracerStudy />

      <SmedipKristalPage />
    </AppLayout>
  );
};

export default Home;
