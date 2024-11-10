import * as React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export type Slide = {
  image_url: string;
  link?: string;
  caption?: string;
  sort?: number;
};

const AUTOPLAY_INTERVAL = 8000;

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export function JumbotronCarouselComponent({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const totalSlides = slides.length;

  const scrollTo = React.useCallback(
    (index: number) => {
      const newIndex = (index + totalSlides) % totalSlides;
      setCurrentSlide(newIndex);
      setProgress(0);
    },
    [totalSlides]
  );

  const intervalCallback = React.useCallback(() => {
    if (isHovered) return;
    setProgress((prevProgress) => {
      if (prevProgress >= 100) {
        scrollTo(currentSlide + 1);
        return 0;
      }
      return prevProgress + 100 / (AUTOPLAY_INTERVAL / 100);
    });
  }, [isHovered, currentSlide, scrollTo]);

  useInterval(intervalCallback, isHovered ? null : 100);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (slides.length === 0) return null;

  return (
    <div
      className='relative mx-auto my-0 md:my-8 w-full max-w-5xl h-[30vh] sm:h-[50vh] md:h-[75vh]'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='shadow-md h-full overflow-hidden'>
        <div
          className='flex h-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <Link
              href={slide.link || "#"}
              key={index}
              className='flex-[0_0_100%] min-w-0 h-full'>
              <div className='relative w-full h-full'>
                <Image
                  src={slide.image_url}
                  alt={slide.caption || "slide"}
                  fill
                  className='w-full h-full aspect-[16/9] object-cover'
                />
                <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent line-clamp-2 p-6 text-center text-white'>
                  <p className='text-lg break-words'>{slide.caption}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollTo(currentSlide - 1)}
        className='top-1/2 left-3 absolute hover:bg-white/50 p-2 rounded-full text-white transition-colors -translate-y-1/2'
        aria-label='Previous slide'>
        <ChevronLeft className='w-6 h-6' />
      </button>
      <button
        onClick={() => scrollTo(currentSlide + 1)}
        className='top-1/2 right-3 absolute hover:bg-white/50 p-2 rounded-full text-white transition-colors -translate-y-1/2'
        aria-label='Next slide'>
        <ChevronRight className='w-6 h-6' />
      </button>
      <div className='right-0 bottom-0 left-0 absolute opacity-50 mb-5 px-10'>
        <Progress value={progress} className='bg-white/30 w-full h-1' />
      </div>
    </div>
  );
}
