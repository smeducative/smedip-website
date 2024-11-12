import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, Loader2, SparklesIcon } from "lucide-react";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { DatePicker } from "@/components/ui/custom-calendar";
import { Alert, AlertTitle } from "../ui/alert";
import { AxiosError } from "axios";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(50, "Nama maksimal 50 karakter"),
  dob: z.date(),
});

type Props = {
  onIdentified: (student_id: string) => void;
  onContact: ({ email, phone }: { email: string; phone: string }) => void;
  onStep: (step: number) => void;
};

const getStudentIdentity = async ({
  fullname,
  dob,
}: {
  fullname: string;
  dob: Date;
}) => {
  const dateWIB = new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(dob));
  const [year, month, day] = dateWIB.split("/");
  const dateWIBYMD = `${year}-${month}-${day}`;

  const response = await api.get("/tracer-study/student-id", {
    params: {
      name: fullname,
      date_of_birth: dateWIBYMD,
    },
  });

  return response.data;
};

export default function IdentifyCardStudentTracerStudy({
  onIdentified,
  onContact,
  onStep,
}: Props) {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dob: new Date(new Date().getFullYear() - 13, 7, 17),
    },
  });

  const { data, refetch, isSuccess, isError, error } = useQuery({
    queryKey: ["student-identity"],
    queryFn: async () => {
      try {
        return await getStudentIdentity({
          fullname: form.getValues("name"),
          dob: form.getValues("dob"),
        });
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
          throw new Error(
            "Data alumni tidak ditemukan, periksa kembali Nama Lengkap dan Tanggal Lahir"
          );
        }
        throw error;
      }
    },
    enabled: false,
    retry: 2,
  });

  useEffect(() => {
    if (isSuccess) {
      onIdentified(data?.student_id);
      setEmail(data?.user.email);
      setPhone(data?.no_hp);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    onContact({ email, phone });
  }, [email, phone]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    await refetch();
  };

  return (
    <Card className='border-green-400 shadow mx-auto rounded-none md:rounded-md w-full max-w-4xl'>
      <CardHeader>
        <CardTitle>Identifikasi Alumni</CardTitle>
        <CardDescription>
          Sebelum melanjutkan, identify diri kamu dulu yuk 🎊
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isError && (
          <Alert variant='destructive' className='mb-3'>
            <AlertCircle className='w-4 h-4' />
            <span>{error.message}</span>
          </Alert>
        )}
        {isSuccess && data && (
          <Alert variant='success-full' className='mb-3'>
            <AlertCircle className='w-4 h-4' />
            <span>Data alumni ditemukan</span>
          </Alert>
        )}
        <Form {...form}>
          <form className='gap-3 grid grid-cols-1 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input
                      className='w-full max-w-sm'
                      placeholder='Masukkan nama lengkap'
                      disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Nama lengkap kamu sesuai Ijazah
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='dob'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Lahir</FormLabel>
                  <FormControl>
                    <DatePicker
                      initialDate={field.value}
                      onDateChange={(date) => field.onChange(date)}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {data && isSuccess && (
              <>
                <FormField
                  name='birth_place'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tempat Lahir</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={data.tempat_lahir}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='gender'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Kelamin</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={
                            data.jenis_kelamin == "p"
                              ? "Perempuan"
                              : "Laki-laki"
                          }
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='nipd'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NIS (Nomor Induk Siswa)</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={data.nipd}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='nisn'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NISN (Nomor Induk Siswa Nasional)</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={data.nisn}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='last_class'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kelas Terakhir</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={data.rombongan_belajar[0].nama}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='graduated_year'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tahun Kelulusan</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={data.rombongan_belajar[0].tahun_ajaran?.nama}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={email || ""}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder='Masukkan email kamu'
                        />
                      </FormControl>
                      <FormDescription>
                        Tulis atau ubah email kamu jika belum sesuai
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. Whatsapp</FormLabel>
                      <FormControl>
                        <Input
                          className='w-full max-w-sm'
                          value={phone || ""}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder='Masukkan no. whatsapp kamu'
                        />
                      </FormControl>
                      <FormDescription>
                        Tulis atau ubah no. whatsapp kamu jika belum sesuai
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        {!data ? (
          <Button
            type='submit'
            className='w-fit'
            onClick={form.handleSubmit(handleSubmit)}
            disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <div className='flex items-center gap-2'>
                <Loader2 className='w-4 h-4 animate-spin' />
                <span>Loading...</span>
              </div>
            ) : (
              <>
                <SparklesIcon className='mr-2 w-4 h-4' />
                Identifikasi
              </>
            )}
          </Button>
        ) : (
          <Button className='w-fit' onClick={() => onStep(2)}>
            Selanjutnya
            <ArrowRight className='ml-2 w-4 h-4' />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
