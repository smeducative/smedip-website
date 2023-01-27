export default function HeroSection() {
  return (
    <div
      className=' bg-white bg-cover bg-center'
      style={{
        backgroundImage: `url(/assets/images/bg-smedip.jpeg)`,
      }}>
      <div className='bg-primary-0 bg-opacity-60' id='particles-js'>
        <div className='pt-16 mx-auto max-w-7xl'>
          <div className='py-32 xl:py-56 px-5 2xl:px-0 flex items-center'>
            <div className='flex flex-col text-white leading-tight drop-shadow-lg shadow-yellow-500'>
              <span className='text-lg lg:text-2xl'>Selamat datang di</span>
              <span className='text-2xl lg:text-5xl font-extrabold underline'>
                SMK Diponegoro Karanganyar
              </span>
              <span className='text-lg lg:text-2xl'>Kabupaten Pekalongan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
