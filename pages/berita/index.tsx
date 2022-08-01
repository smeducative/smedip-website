import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import NewsList from "../../components/NewsList";
import Jumbotron from "../../components/sections/Jumbotron";

export default function Berita() {
  return (
    <AppLayout>
      <Head>
        <title>Informasi terbaru</title>
      </Head>

      <Jumbotron title='Informasi Terbaru' />

      <div className='mx-auto max-w-6xl'>
        <NewsList />
      </div>
    </AppLayout>
  );
}
