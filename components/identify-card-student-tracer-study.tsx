import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { DatePicker } from "./ui/custom-calendar";
import { Button } from "./ui/button";
import { SparklesIcon } from "lucide-react";

const getStudentIdentity = async ({
  fullname,
  dob,
}: {
  fullname: string;
  dob: Date;
}) => {
  //
};

export default function IdentifyCardStudentTracerStudy() {
  const [fullname, setFullname] = useState<string>("");

  const [birthDate, setBirthDate] = useState<Date | undefined>(
    new Date(new Date().getFullYear() - 13, 7, 17)
  );

  const handleDateChange = (date: Date) => {
    setBirthDate(date);
    console.log(date);
    // You can perform additional actions here, such as form validation or API calls
  };
  return (
    <Card
      className='border-green-400 shadow mx-auto rounded-none md:rounded-md w-full max-w-4xl'
      suppressHydrationWarning>
      <CardHeader>
        <CardTitle>Identifikasi Alumni</CardTitle>
        <CardDescription>
          Sebelum melanjutkan, identify diri kamu dulu yuk 🎊
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='gap-3 grid grid-cols-1 md:grid-cols-2'>
          {/* fullname */}
          <div className='items-center gap-1.5 grid w-full max-w-sm'>
            <Label htmlFor='fullname'>Nama Lengkap</Label>
            <Input
              type='text'
              id='fullname'
              placeholder='Masukkan nama lengkap'
            />
            <span className='text-gray-400 text-xs'>
              Masukkan nama lengkap sesuai Ijazah
            </span>
          </div>

          {/* date of birth */}
          <div className='flex items-center'>
            <DatePicker
              label='Tanggal Lahir'
              initialDate={birthDate}
              onDateChange={(date: Date | null) =>
                handleDateChange(date as Date)
              }
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-fit'>
          <SparklesIcon className='mr-2 w-4 h-4' />
          Identify
        </Button>
      </CardFooter>
    </Card>
  );
}
