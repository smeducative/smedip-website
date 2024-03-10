export default function HeroSection() {
  return (
    <div
      className="min-h-screen bg-white bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/images/CBMM4413.JPG)`,
      }}
    >
      <div className="min-h-screen bg-primary/50">
        <div className="relative min-h-screen pt-16 mx-auto max-w-7xl">
          <div className="absolute bottom-1 w-full py-20 xl:py-48 px-5 2xl:px-0 flex flex-col md:flex-row items-end justify-end">
            <div className="flex flex-col text-center text-white leading-tight drop-shadow-lg shadow-yellow-500 w-full ">
              <span className="text-lg lg:text-3xl">
                Selamat datang di Official Website
              </span>
              <span className="text-2xl lg:text-5xl font-extrabold underline">
                SMK Diponegoro Karanganyar
              </span>
              <span className="text-lg lg:text-3xl">Kabupaten Pekalongan</span>
            </div>
            {/* <div className="mt-12 md:mt-0 w-full md:w-1/2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/WmW3HOSmNC4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
