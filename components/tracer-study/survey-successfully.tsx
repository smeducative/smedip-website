"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import confetti from "canvas-confetti";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function SurveySuccesfully() {
  useEffect(() => {
    // scroll to middle
    window.scrollTo(0, window.innerHeight / 2);

    setTimeout(() => {
      confetti({
        particleCount: 500,
        spread: 260,
        // origin: { y: 0.5 },
        gravity: 0.7,
        drift: 1.2,
      });
    }, 1300);
  }, []);

  return (
    <div className='flex justify-center items-center p-4'>
      <Card className='border-green-600 shadow-lg rounded-md w-full max-w-2xl text-center'>
        <CardHeader>
          <CardTitle className='font-bold text-3xl text-green-600'>
            <center>
              <LottiePlayer
                autoplay
                loop
                src='https://lottie.host/d16e7514-fc3a-4d98-8b94-9fc309ca278b/HI6crqbjde.json'
                style={{ height: "150px", width: "300px" }}></LottiePlayer>
            </center>
            Terima Kasih
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-green-400 text-md'>
            Anda telah menyelesaikan survei.
          </p>
          <p className='mb-2 text-gray-500'>
            Terima kasih atas partisipasi Anda dalam mengisi survei ini. Dengan
            survei ini, kami berharap dapat meningkatkan kualitas pendidikan dan
            meningkatkan kesempatan para alumni dalam memperoleh pekerjaan yang
            lebih baik. Kami sangat berharap Anda dapat membantu kami dengan
            memberikan saran dan kritik yang membangun. Sukses selalu untuk para
            Alumni SMK Diponegoro Karanganyar.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
