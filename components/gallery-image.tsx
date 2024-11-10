import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function GalleryImage() {
  const images = [
    "https://is3.cloudhost.id/object-smeducative/gallery/IMG-20240822-WA0021.jpg",
    "https://is3.cloudhost.id/object-smeducative/gallery/IMG-20241015-WA0035.jpg",
    "https://is3.cloudhost.id/object-smeducative/gallery/SMK dipo (36) (1).jpg",
    "https://is3.cloudhost.id/object-smeducative/gallery/Screenshot 2024-10-15 224322.png",
    "https://is3.cloudhost.id/object-smeducative/gallery/Screenshot 2024-10-15 225326.png",
    "https://is3.cloudhost.id/object-smeducative/gallery/WhatsApp Image 2024-10-11 at 12.28.12_a2bac899.jpg",
  ];

  // Duplicate the images array 100 times to ensure seamless looping
  const duplicatedImages = Array(100).fill(images).flat();

  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const element = carouselRef.current as HTMLDivElement | null;
    if (element) {
      setWidth(element.scrollWidth / 2);
    }
  }, []);

  return (
    <div className='my-12 overflow-hidden' suppressHydrationWarning>
      <motion.div
        ref={carouselRef}
        className='flex p-12'
        animate={{ x: [0, -width] }}
        style={{
          width: "fit-content",
        }}
        transition={{
          repeat: Infinity,
          duration: 20 * 100,
          ease: "linear",
          repeatType: "loop",
        }}>
        {duplicatedImages.map((image, idx) => (
          <motion.div
            key={`image-${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.3,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.3,
              rotate: 0,
              zIndex: 100,
            }}
            className='flex-shrink-0 border rounded-xl overflow-hidden'>
            <Image
              src={image}
              alt='gallery images'
              width='500'
              height='500'
              className='w-56 h-56 object-cover'
              placeholder='blur'
              blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
