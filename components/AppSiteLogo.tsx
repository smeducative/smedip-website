import Image from "next/image";
import Link from "next/link";

export default function AppSiteLogo() {
  return (
    <div className='flex items-center gap-6'>
      <Image
        src='/logo.png'
        alt='smedip logo'
        width={50}
        height={50}
        className='h-8 w-8'
      />

      <Link href={"/"} className=''>
        <a className='hidden md:flex flex-col'>
          <span className='font-bold text-xl border-b border-gray-600'>
            SMK Diponegoro Karanganyar
          </span>
          <span>Kab. Pekalongan</span>
        </a>
      </Link>
    </div>
  );
}