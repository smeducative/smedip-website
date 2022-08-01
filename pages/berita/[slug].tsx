import { GetStaticPaths, GetStaticProps } from "next";
import AppLayout from "../../components/layouts/AppLayout";

export default function ReadNews() {
  return (
    <AppLayout>
      <div className='pt-32'>
        <h1>Read News</h1>
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

  return {
    props: {},
  };
};
