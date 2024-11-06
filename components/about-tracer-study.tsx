import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Award,
  Users,
  Building2,
  CheckCheckIcon,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function AboutTracerStudy() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto px-4 max-w-6xl container'>
        <div
          className='mb-12 py-12'
          style={{
            backgroundColor: `#ffffff`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23a5f3fc' fill-opacity='0.54' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E")`,
          }}>
          <h2 className='font-bold text-3xl text-center underline decoration-[#FFA500]'>
            Tentang Tracer Study
          </h2>
          <p className='mx-auto mt-3 mb-12 max-w-3xl text-center text-gray-600'>
            Tracer Study SMK Diponegoro Karanganyar adalah sistem pelacakan
            alumni yang bertujuan untuk mengevaluasi output pendidikan sekolah
            kejuruan terhadap kebutuhan dunia kerja dan pendidikan. Data yang
            terkumpul akan menjadi dasar pengembangan program studi, peningkatan
            kualitas lulusan dan sebagai sumber evaluasi BKK.
          </p>
        </div>

        <h3 className='mb-6 font-semibold text-2xl'>Output dan Laporan</h3>
        <p className='mb-8 text-gray-600'>
          Hasil pengolahan data tracer study akan menghasilkan laporan-laporan
          berikut
        </p>

        <div className='gap-8 grid md:grid-cols-2'>
          <ReportCard
            icon={Users}
            title='Profil Lulusan'
            items={[
              "Sebaran geografis alumni",
              "Status pekerjaan/studi lanjut",
              "Bidang pekerjaan",
              "Tingkat pendapatan",
              "Waktu tunggu mendapat kerja",
            ]}
          />
          <ReportCard
            icon={Building2}
            title='Kerjasama Industri'
            items={[
              "Daftar perusahaan partner",
              "Kebutuhan tenaga kerja",
              "Feedback dari industri",
              "Potensi kerjasama baru",
              "Program magang",
            ]}
          />
          <ReportCard
            icon={BarChart}
            title='Pengembangan BKK'
            items={[
              "Database lowongan kerja",
              "Statistik penempatan kerja",
              "Evaluasi rekrutmen",
              "Kegiatan career day",
              "Bimbingan karir",
            ]}
          />
          <ReportCard
            icon={Award}
            title='Akreditasi & Mutu'
            items={[
              "Data dukung akreditasi",
              "Capaian mutu lulusan",
              "Prestasi alumni",
              "Benchmark dengan sekolah lain",
              "Rekomendasi perbaikan",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export const HeroSectionTracerStudy = () => {
  return (
    <section className='bg-gradient-to-r from-[#3e7a81] to-[#38a460]'>
      <div className='mx-auto max-w-7xl'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 px-4 pt-48 pb-16 md:pb-24'>
          <div className='flex flex-col justify-center'>
            <span className='font-semibold text-2xl text-white'>
              Tracer Study
            </span>
            <h1 className='mb-4 font-bold text-4xl text-primary md:text-5xl leading-tight'>
              SMK Diponegoro Karanganyar
            </h1>
            <p className='mb-8 text-xl'>
              Platform pelacakan dan analisis data alumni untuk meningkatkan
              mutu pendidikan dan relevansi lulusan dengan dunia kerja.
            </p>
            <Link href='/tracer-study/form'>
              <Button
                size='lg'
                className='bg-primary hover:scale-105 w-fit transition duration-500'>
                Isi Data Alumni
                <ArrowRight className='ml-2' />
              </Button>
            </Link>

            <div className='flex flex-wrap gap-8 mt-8'>
              {/* <Stat value='1500+' label='Alumni Terlacak' /> */}
              {/* <Sta value='85%' label='Tingkat Keterserapan' /> */}
              {/* <Stat value='4.8' label='Rating Kepuasan' /> */}
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img
              src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Dashboard Tracer Study'
              className='shadow-lg rounded-lg max-w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function ReportCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  // genereate random gradient color
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Card className='hover:shadow-lg duration-500'>
      <CardHeader>
        <Icon className='mb-4 w-12 h-12 text-[#cfd72a]' />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='space-y-2 text-gray-600'>
          {items.map((item, index) => (
            <li key={index} className='flex items-start'>
              <CheckCheckIcon className='mr-2 w-6 h-6 text-green-600' />
              <span className='pl-2'>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
