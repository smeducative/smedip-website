/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PublikasiList from "../PublikasiList";

export default function PublikasiSection() {
  return (
    <div className='mt-8 xl:mt-20'>
      <div className='mx-auto max-w-6xl'>
        <div className='text-center'>
          <h1 className='text-xl xl:text-3xl font-bold'>Publikasi </h1>
        </div>

        {/*  */}
        <PublikasiList />
      </div>
    </div>
  );
}
