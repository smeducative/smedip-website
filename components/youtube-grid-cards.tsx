import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type YTSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
    standard: {
      url: string;
      width: number;
      height: number;
    };
    maxres: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
  type: "upload" | "playlistItem";
};

export type YTContentDetails = {
  upload: {
    videoId: string;
  };
  playlistItem: {
    resourceId: {
      kind: string;
      videoId: string;
    };
    playlistId: string;
  };
};

export type YTVideo = {
  kind: string;
  etag: string;
  id: string;
  snippet: YTSnippet;
  contentDetails: YTContentDetails;
};

export default function YoutubeGridCards() {
  const [videos, setVideos] = useState<YTVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const smedipYT = await fetch(
        "/api/youtube-activities?channelId=UCtbl00zVFRkH2cALJgSN3Uw"
      );

      const bdpTV = await fetch(
        "/api/youtube-activities?channelId=UCZ5gDURHX02514KEbzt6sVQ"
      );

      const data = await smedipYT.json();

      const data2 = await bdpTV.json();

      const videos = [...data, ...data2];

      // then sort by snippet.publishedAt
      const sorted = videos.sort(
        (a, b) =>
          Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
      );

      setVideos(sorted);
    };

    fetchVideos();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='mx-auto my-12 p-4 max-w-7xl'>
      <h1 className='mb-12 font-bold text-2xl text-center'>
        Terbaru dari channel SMK Diponegoro Karanganyar dan BDP TV
      </h1>
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className='gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.2 }}>
            <Card className='rounded-md overflow-hidden'>
              <Link
                // will tsrget="_blank" to open in new tab
                href={`https://www.youtube.com/watch?v=${video.contentDetails.upload.videoId}`}
                target='_blank'>
                <div className='relative cursor-pointer aspect-video'>
                  <img
                    alt={video.snippet.title}
                    className='w-full h-full object-cover'
                    height='180'
                    src={video.snippet.thumbnails.high.url}
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                    width='320'
                  />
                  <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50'>
                    <Play className='opacity-80 w-12 h-12 text-white' />
                  </div>
                </div>
              </Link>
              <CardContent className='p-4'>
                <h2 className='line-clamp-2 font-semibold text-sm'>
                  {video.snippet.title}
                </h2>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
