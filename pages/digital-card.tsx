import { useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import Head from "next/head";
import Jumbotron from "../components/sections/Jumbotron";

export default function DigitalCard() {
  const [nis, setNis] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNis(value);
  };

  const handleImageDownload = () => {
    const link = document.createElement("a");
    link.href = `//smeduverse.smkdiponegoropekalongan.sch.id/api/identity/qrcode?nis=${nis}`;
    link.download = `digital-card-${nis}.png`;
    link.click();
  };

  return (
    <AppLayout>
      <Head>
        <title>Digital Card</title>
      </Head>
      <Jumbotron title="Digital Card" center />

      <div className="mt-8 max-w-6xl mx-auto grid grid-cols-2 gap-3">
        <div className="col-span-2 lg:col-span-1">
          <div className="mx-auto max-w-6xl flex items-center justify-center">
            <div className="mt-8 w-full px-5 xl:p-0">
              <p className="mb-2 text-gray-700">
                Masukkan NIS Anda untuk mendapatkan kartu digital.
              </p>
              <input
                type="text"
                value={nis}
                onChange={handleInputChange}
                placeholder="Masukkan NIS"
                className="bg-gray-200 text-black border border-green-500 rounded w-full py-2 px-4"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          {nis.length === 6 ? (
            <div className="mx-auto max-w-6xl flex flex-col items-center justify-left">
              <img
                src={`//smeduverse.smkdiponegoropekalongan.sch.id/api/identity/qrcode?nis=${nis}`}
                alt="digital card"
                className="max-h-96 max-w-full"
                onLoad={() => console.log("Gambar telah dimuat")}
                onError={() => alert("NIS tidak ditemukan")}
                onClick={handleImageDownload}
              />
              <button
                onClick={handleImageDownload}
                className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Unduh Gambar
              </button>
            </div>
          ) : (
            <div className="h-96 bg-white flex items-center justify-center">
              <p className="text-center text-gray-700">
                Kartu Digital akan tampil disini jika NIS ditemukan
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
