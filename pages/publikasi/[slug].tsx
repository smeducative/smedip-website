import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";
import Jumbotron from "../../components/sections/Jumbotron";

type Props = {
  slug: string;
  title: string;
  body: HTMLElement;
};

export default function ReadPublication({ slug, title, body }: Props) {
  return (
    <AppLayout>
      <Head>
        <title>{title}</title>
      </Head>

      <Jumbotron title={title} />

      <div className='pt-32'>
        <div className='mx-auto max-w-6xl'>
          <h1>Read Publications</h1>
          <div dangerouslySetInnerHTML={body}></div>
        </div>
      </div>
    </AppLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "first-post" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);

  const slug = context.params.slug;
  const title =
    "contoh judul publikasi dengan judul yang agak sedikit panjang dan yang panjang banget";

  return {
    props: {
      slug,
      title,
    },
  };
};
