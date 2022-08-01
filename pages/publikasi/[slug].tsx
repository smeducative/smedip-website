import { GetStaticPaths, GetStaticProps } from "next";
import AppLayout from "../../components/layouts/AppLayout";

export default function ReadPublication({ slug }: { slug: string }) {
  return (
    <AppLayout>
      <div className='pt-32'>
        <h1>Read Publications</h1>

        <div>{slug}</div>
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

  const slug = context.params.slug as string;

  return {
    props: {
      slug,
    },
  };
};
