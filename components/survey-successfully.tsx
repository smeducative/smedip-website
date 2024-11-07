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

export default function SurveySuccesfully() {
  useEffect(() => {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
      });
    }, 1000);
  }, []);

  return (
    <div className='flex justify-center items-center p-4'>
      <Card className='border-green-600 shadow-lg rounded-md w-full max-w-2xl text-center'>
        <CardHeader>
          <CardTitle className='font-bold text-3xl text-green-600'>
            Terima Kasih 🎊🎊
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-green-400 text-xl'>
            Anda telah menyelesaikan survei.
          </p>
          <p className='mb-2 text-gray-400'>
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
