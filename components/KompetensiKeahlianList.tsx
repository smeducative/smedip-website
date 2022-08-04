import { ReactNode } from "react";

type KompetensiKeahlian = {
  svg: ReactNode;
  code: string;
  name: string;
};

export default function KompetensiKeahlianList({
  items,
}: {
  items: KompetensiKeahlian[];
}) {
  return (
    <>
      {items &&
        items.map((item) => (
          <div
            key={item.code}
            className='col-span-6 lg:col-span-3 bg-green-100 hover:bg-green-300 rounded'>
            <div className='p-5'>
              <div>{item.svg}</div>
              <div className='text-lg font-bold'>{item.code}</div>
              <div>{item.name}</div>
            </div>
          </div>
        ))}
    </>
  );
}
