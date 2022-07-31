export default function HeroSection() {
  return (
    <div
      className=' bg-white bg-cover'
      style={{
        backgroundImage: `url(/assets/images/bg-smedip.jpeg)`,
      }}>
      <div className='pt-16 mx-auto max-w-7xl'>
        <div className='py-48 xl:py-56 px-5 xl:px-0 flex items-center'>
          <div className='flex flex-col text-white leading-tight drop-shadow-lg shadow-yellow-500'>
            <span className='text-2xl'>Selamat datang di</span>
            <span className='text-5xl font-extrabold underline'>
              SMK Diponegoro Pekalongan
            </span>
            <span className='text-2xl'>Kabupaten Pekalongan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
