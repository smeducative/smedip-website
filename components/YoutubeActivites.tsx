import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Activities } from "../type/youtube";

const YoutubeActivities = () => {
  const [items, setItems] = useState<Activities[] | null>(null);
  useEffect(() => {
    const getActivities = async (): Promise<Activities[]> => {
      const data = await fetch("/api/youtube-activities").then((res) =>
        res.json()
      );

      setItems(data);

      return data;
    };

    getActivities();
  }, []);

  return (
    <div className='mt-8 xl:mt-20 bg-gradient-to-tl from-green-500 to-yellow-400 py-5 border-y-2 border-green-800'>
      <div className='mx-auto max-w-6xl'>
        <div className='py-3 px-5 xl:px-0'>
          <h2 className='font-bold text-2xl font-roboto'>Keseruan Smedip</h2>
        </div>
        <div className='px-5 xl:px-0 flex items-center overflow-hidden hover:overflow-x-auto gap-3'>
          {items &&
            items.map((item) => (
              <Link
                key={item.id}
                href={`https://youtu.be/${item.contentDetails.upload.videoId}`}
                className='cursor-pointer'>
                <iframe
                  width='570'
                  height='215'
                  src={`https://www.youtube.com/embed/${item.contentDetails.upload.videoId}`}
                  title={item.snippet.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeActivities;
