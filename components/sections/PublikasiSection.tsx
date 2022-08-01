/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PublikasiList from "../PublikasiList";

export default function PublikasiSection() {
  return (
    <div className='mt-8 xl:mt-20'>
      <div className='mx-auto max-w-6xl'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-12 xl:col-span-8'>
            <div className='px-3 xl:px-0'>
              <div className='border-b-2 border-yellow-600'>
                <h1 className='text-xl xl:text-2xl font-bold text-gray-800'>
                  Publikasi
                </h1>
              </div>
            </div>
            {/*  */}
            <PublikasiList />
          </div>
        </div>
      </div>
    </div>
  );
}
