export default function HeroSection() {
  return (
    <div
      className=' bg-white bg-cover bg-center'
      style={{
        backgroundImage: `url(/assets/images/bg-smedip.jpeg)`,
      }}>
      <div className='bg-primary-0 bg-opacity-60' id='particles-js'>
        <div className='pt-16 mx-auto max-w-7xl'>
          <div className='py-20 xl:py-48 px-5 2xl:px-0 flex flex-col md:flex-row items-center'>
            <div className='flex flex-col text-white leading-tight drop-shadow-lg shadow-yellow-500 w-full md:w-1/2'>
              <span className='text-lg lg:text-2xl'>Selamat datang di</span>
              <span className='text-2xl lg:text-4xl font-extrabold underline'>
                SMK Diponegoro Karanganyar
              </span>
              <span className='text-lg lg:text-2xl'>Kabupaten Pekalongan</span>
            </div>
            <div className='mt-12 md:mt-0 w-full md:w-1/2'>
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/WmW3HOSmNC4" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
