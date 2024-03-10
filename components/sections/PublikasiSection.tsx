/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Publikasi } from "../../lib/fetch";
import PublikasiList from "../PublikasiList";

export default function PublikasiSection({
  publikasi,
}: {
  publikasi: Publikasi[];
}) {
  return (
    <div className="mt-8 xl:mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="gap-3 grid grid-cols-12">
          <div className="col-span-12">
            <div className="px-3 xl:px-0">
              <div className="border-yellow-600 border-b-2">
                <h1 className="font-bold text-gray-800 text-xl xl:text-2xl">
                  Publikasi
                </h1>
              </div>
            </div>
            {/*  */}
            <PublikasiList list={publikasi} />
          </div>
        </div>
      </div>
    </div>
  );
}
