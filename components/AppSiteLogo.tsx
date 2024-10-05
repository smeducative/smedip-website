import Image from "next/image";
import Link from "next/link";

export default function AppSiteLogo() {
  return (
    <div className='flex items-center gap-3'>
      <Link legacyBehavior href='/'>
        <a>
          <Image
            src='/logo.png'
            alt='smedip logo'
            width={45}
            height={45}
            className='cursor-pointer'
            quality={100}
            priority
          />
        </a>
      </Link>

      <Link legacyBehavior href={"/"}>
        <a className='flex flex-col text-sm md:text-xl'>
          <span className='border-gray-600 border-b font-bold'>
            SMK Diponegoro Karanganyar
          </span>
          <span>Kab. Pekalongan</span>
        </a>
      </Link>
    </div>
  );
}
