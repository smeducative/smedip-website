"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { LoaderCircle, SendHorizonal } from "lucide-react";
import { api } from "@/lib/api";
import TextQuestion from "./text-question";
import RadioQuestion from "./radio-question";
import CheckboxQuestion from "./checkbox-question";

export type QuestionOption = {
  id: number;
  question_id: number;
  name: string;
  user_input: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type QuestionType = {
  id: number;
  key: string;
  question: string;
  type: "text" | "radio" | "checkbox";
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  options: QuestionOption[];
};

export type Answer = {
  question_id: number;
  value: string | null;
  options: { option_id: number }[];
};

const categoryDescriptions: Record<string, string> = {
  bekerja:
    "Anda saat ini bekerja secara penuh waktu atau paruh waktu dalam suatu perusahaan atau organisasi.",
  "melanjutkan pendidikan":
    "Anda sedang melanjutkan studi ke jenjang yang lebih tinggi atau mengikuti program pendidikan formal.",
  wirausaha:
    "Anda memiliki usaha sendiri atau sedang dalam proses memulai usaha.",
  "belum bekerja":
    "Anda saat ini sedang mencari pekerjaan atau belum memiliki pekerjaan tetap.",
};

const fetchQuestions = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/tracer-study/questions",
    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  return response.json();
};

const storeAnswers = async (answers: Answer[], identity: string) => {
  const response = await api.post(
    "/tracer-study/store",
    {
      student_id: identity,
      answers,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export default function SurveyForm({
  identity,
  onStep,
}: {
  identity: string;
  onStep: (step: number) => void;
}) {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>("bekerja");
  const [errors, setErrors] = useState<Record<number, string>>({});
  const [generalError, setGeneralError] = useState<string>("");

  useEffect(() => {
    setAnswers([]);
    setSelectedSection("bekerja");
    setErrors({});
    setGeneralError("");
  }, []);

  useEffect(() => {
    setAnswers([]);
    setErrors({});
    setGeneralError("");
  }, [selectedSection]);

  const {
    data: questionsData,
    error,
    isLoading,
  } = useQuery<QuestionType[], Error>({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["store-answers"],
    mutationFn: () => storeAnswers(answers, identity),
    onSuccess: (data) => {
      onStep(3);
    },
  });

  const handleInputChange = useCallback(
    ({
      question_id,
      value,
      options,
    }: {
      question_id: number;
      value?: string;
      options?: Array<{ option_id: number; value?: string }>;
    }) => {
      setAnswers((prevAnswers) => {
        const updatedAnswers = prevAnswers.map((answer) =>
          answer.question_id === question_id
            ? { ...answer, value: value || null, options: options || [] }
            : answer
        );

        if (
          !updatedAnswers.some((answer) => answer.question_id === question_id)
        ) {
          updatedAnswers.push({
            question_id,
            value: value || null,
            options: options || [],
          });
        }

        return updatedAnswers.filter(
          (answer) => answer.value !== null || answer.options.length > 0
        );
      });

      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[question_id];
        return newErrors;
      });
    },
    []
  );

  const validateAnswers = useCallback(() => {
    const newErrors: Record<number, string> = {};
    let hasErrors = false;

    questionsData?.forEach((question) => {
      if (question.key === selectedSection) {
        const answer = answers.find((a) => a.question_id === question.id);
        if (!answer || (answer.value === null && answer.options.length === 0)) {
          newErrors[question.id] = "Pertanyaan ini harus dijawab";
          hasErrors = true;
        }
      }
    });

    setErrors(newErrors);
    setGeneralError(
      hasErrors ? "Semua pertanyaan harus dijawab sebelum mengirim survei." : ""
    );
    return !hasErrors;
  }, [answers, questionsData, selectedSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if validatted and has no error
    if (validateAnswers()) {
      mutate();
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card className='border-green-400 shadow mx-auto rounded-none md:rounded-md w-full max-w-4xl'>
      <CardHeader>
        <CardTitle>Formulir Survei</CardTitle>
        <CardDescription>
          Pilih kategori dan isi formulir berikut dengan sejujur-jujurnya.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mb-6'>
          <Label className='block mb-2 font-medium text-base'>
            Tap kategori yang sesuai
          </Label>
          <RadioGroup
            value={selectedSection}
            onValueChange={setSelectedSection}
            className='gap-4 grid grid-cols-1 md:grid-cols-2'>
            {[
              "bekerja",
              "melanjutkan pendidikan",
              "wirausaha",
              "belum bekerja",
            ].map((section) => (
              <div
                key={section}
                className={cn(
                  "flex items-center space-x-2 border-2 p-3 rounded-md cursor-pointer",
                  selectedSection === section
                    ? "border-green-500 text-green-500"
                    : ""
                )}>
                <RadioGroupItem
                  className={cn(
                    selectedSection === section
                      ? "border-2 border-green-500 text-green-500"
                      : ""
                  )}
                  value={section}
                  id={section}
                />
                <Label htmlFor={section} className='cursor-pointer'>
                  <span className='font-bold'>{section.toUpperCase()}</span>
                  <p className='text-sm'>
                    {categoryDescriptions[section] || "Tidak ada deskripsi"}
                  </p>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        {selectedSection && questionsData && (
          <form onSubmit={handleSubmit}>
            {questionsData
              .filter((question) => question.key === selectedSection)
              .map((question, index) => {
                const questionId = `${selectedSection}-${index}`;
                const errorMessage = errors[question.id];
                return (
                  <div key={questionId} className='mb-4'>
                    {question.type === "text" && (
                      <TextQuestion
                        question={question}
                        onChange={handleInputChange}
                        error={errorMessage}
                      />
                    )}
                    {question.type === "radio" && (
                      <RadioQuestion
                        question={question}
                        onChange={handleInputChange}
                        value={
                          answers
                            .find(
                              (answer) => answer.question_id === question.id
                            )
                            ?.options[0]?.option_id.toString() || ""
                        }
                        error={errorMessage}
                      />
                    )}
                    {question.type === "checkbox" && (
                      <CheckboxQuestion
                        question={question}
                        onChange={handleInputChange}
                        checkedOptions={
                          answers.find(
                            (answer) => answer.question_id === question.id
                          )?.options || []
                        }
                        error={errorMessage}
                      />
                    )}
                    {errorMessage && (
                      <p className='mt-1 text-red-500 text-sm'>
                        {errorMessage}
                      </p>
                    )}
                  </div>
                );
              })}
          </form>
        )}
      </CardContent>
      <CardFooter className='flex flex-col'>
        <p className='text-gray-400 small'>
          * Pastikan data yang dimasukkan sudah benar
        </p>
        <Button onClick={handleSubmit} disabled={!selectedSection || isPending}>
          {isPending ? (
            <>
              <LoaderCircle className='mr-2 w-4 h-4 animate-spin' />
              Mengirim Survei
            </>
          ) : (
            <>
              Kirim Survei
              <SendHorizonal className='ml-2 w-4 h-4' />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
