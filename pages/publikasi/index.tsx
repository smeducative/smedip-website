import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import AppLayout from "../../components/layouts/AppLayout";
import PublikasiList from "../../components/PublikasiList";
import Jumbotron from "../../components/sections/Jumbotron";
import { getPublikasi, Publikasi } from "../../lib/fetch";

const Publikasi = ({ publications }: { publications: Publikasi[] }) => {
  return (
    <AppLayout>
      <NextSeo title='Publikasi Guru dan Tenaga Kependidikan | SMK Diponegoro Karanganyar' />
      <Jumbotron title='Publikasi' />

      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 xl:col-span-8'>
            <PublikasiList list={publications} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Publikasi;

export const getStaticProps: GetStaticProps = async () => {
  const { data: publications } = await getPublikasi();

  return {
    props: {
      publications,
    },
    revalidate: 10,
  };
};
