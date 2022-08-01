import AppLayout from "../../components/layouts/AppLayout";
import PublikasiList from "../../components/PublikasiList";
import Jumbotron from "../../components/sections/Jumbotron";

const Publikasi = () => {
  return (
    <AppLayout>
      <Jumbotron title='Publikasi' />

      <div className='mx-auto max-w-6xl'>
        <PublikasiList />
      </div>
    </AppLayout>
  );
};

export default Publikasi;
