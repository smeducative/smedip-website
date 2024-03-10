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
      {items?.map((item) => (
        <div
          key={item.code}
          className="col-span-6 lg:col-span-3 bg-[#4FBEBC] hover:bg-[#DB7710]/40 duration-300 cursor-pointer flex flex-col items-center justify-center text-white text-center"
        >
          <div className="p-5 flex flex-col items-center justify-center gap-2">
            <div>{item.svg}</div>
            <div className="text-lg font-bold">{item.code}</div>
            <div className="text-sm xl:text-base">{item.name}</div>
          </div>
        </div>
      ))}
    </>
  );
}
