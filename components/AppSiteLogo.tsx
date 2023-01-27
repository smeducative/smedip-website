import Image from "next/image";
import Link from "next/link";

export default function AppSiteLogo() {
  return (
    <div className='flex items-center gap-6'>
      <Link legacyBehavior href='/'>
        <a>
          <Image
            src='/logo.png'
            alt='smedip logo'
            width={35}
            height={35}
            className='cursor-pointer'
          />
        </a>
      </Link>

      <Link legacyBehavior href={"/"}>
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
