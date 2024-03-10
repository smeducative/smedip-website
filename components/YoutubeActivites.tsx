import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Activities } from "../type/youtube";

const YoutubeActivities = () => {
  const [items, setItems] = useState<Activities[] | null>([]);

  useEffect(() => {
    const getActivities = async (): Promise<Activities[]> => {
      const response = await fetch("/api/youtube-activities");

      console.log(response);

      const data = await response.json();

      setItems(data);

      return data;
    };

    getActivities();
  }, []);

  return (
    <div className="border-green-800 border-y-2 bg-gradient-to-tl from-green-500 to-yellow-400 mt-8 xl:mt-20 py-5">
      <div className="mx-auto max-w-6xl">
        <div className="px-5 xl:px-0 py-3">
          <h2 className="font-bold font-roboto text-2xl">Keseruan Smedip</h2>
        </div>
        <div className="flex items-center gap-3 px-5 xl:px-0 overflow-x-auto">
          {items &&
            items.map((item) => (
              <Link
                legacyBehavior
                key={item.id}
                href={`https://youtu.be/${item.contentDetails.upload.videoId}`}
                className="cursor-pointer"
              >
                <iframe
                  width="570"
                  height="215"
                  src={`https://www.youtube.com/embed/${item.contentDetails.upload.videoId}`}
                  title={item.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeActivities;
