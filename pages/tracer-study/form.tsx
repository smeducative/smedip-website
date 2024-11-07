import type { NextPage } from "next";
import AppLayout from "@/components/layouts/AppLayout";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getFullpath } from "@/lib/getFullpath";
import SmedipKristalPage from "@/components/SmedipKristal";
import FormTracerStudy from "@/components/form-tracer-study";

const Home: NextPage = () => {
  const { route } = useRouter();

  return (
    <AppLayout bright>
      <NextSeo
        title='Form Tracer Study SMK Diponegoro Karanganyar Kab. Pekalongan | MAU Modern, Agamis, Unggul'
        description='Platform pelacakan dan analisis data alumni untuk pengembangan mutu pendidikan sekolah menengah kejuruan SMK Diponegoro Karanganyar Kabupaten Pekalongan'
        canonical={getFullpath()}
        openGraph={{
          title: "Form Tracer Study SMK Diponegoro Karanganyar",
          description:
            "Platform pelacakan dan analisis data alumni untuk pengembangan mutu pendidikan sekolah menengah kejuruan SMK Diponegoro Karanganyar Kabupaten Pekalongan",
          url: route,
          images: [
            {
              url: getFullpath("/logo.png"),
              width: 850,
              height: 650,
              alt: "Form Tracer Study SMK Diponegoro Karanganyar",
            },
          ],
        }}
      />
      <FormTracerStudy />
      <SmedipKristalPage />
    </AppLayout>
  );
};

export default Home;
