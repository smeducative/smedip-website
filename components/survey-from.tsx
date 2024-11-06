"use client";

import { useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import { SendHorizonal } from "lucide-react";

type QuestionOption = {
  id: number;
  question_id: number;
  name: string;
  user_input: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

type QuestionType = {
  id: number;
  key: string;
  question: string;
  type: "text" | "radio" | "checkbox";
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  options: QuestionOption[];
};

type Answer = {
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

export default function SurveyForm() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>("bekerja");

  // when selected section changes, reset answers
  useEffect(() => {
    setAnswers([]);
  }, [selectedSection]);

  const {
    data: questionsData,
    error,
    isLoading,
  } = useQuery<QuestionType[], Error>({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (questionsData) {
    console.log(questionsData);
  }

  const handleInputChange = ({
    question_id,
    value,
    options,
  }: {
    question_id: number;
    value?: string;
    options?: Array<{
      option_id: number;
      value?: string;
    }>;
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

      // where value and options are not empty
      return updatedAnswers.filter(
        (answer) => answer.value !== null || answer.options.length > 0
      );
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", answers);
    // Here you would typically send the data to your backend
  };

  const renderQuestion = (question: QuestionType, index: number) => {
    const questionId = `${selectedSection}-${index}`; // Fix incorrect usage of template literal

    return (
      <div key={questionId} className='mb-4 border-t-2 border-green-100'>
        <Label htmlFor={questionId} className='font-semibold text-sm'>
          {question.question}
        </Label>
        {question.type === "text" ? (
          <Input
            id={questionId}
            onInput={(e) =>
              handleInputChange({
                question_id: question.id,
                value: (e.target as HTMLInputElement).value,
              })
            }
            placeholder='Tulis jawabanmu disini'
            className='mt-1'
          />
        ) : question.type === "radio" ? (
          <RadioGroup
            onValueChange={(value) =>
              handleInputChange({
                question_id: question.id,
                options: [{ option_id: parseInt(value) }],
              })
            }
            value={
              answers
                .find((answer) => answer.question_id === question.id)
                ?.options[0]?.option_id.toString() || ""
            }
            className='mt-2'>
            {question.options.map((option, optionIndex) => (
              <div
                key={`${questionId}-${optionIndex}`}
                className='flex items-center space-x-2'>
                <RadioGroupItem
                  value={option.id.toString()}
                  id={`${questionId}-${optionIndex}`}
                />
                <Label htmlFor={`${questionId}-${optionIndex}`}>
                  {option.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : question.type === "checkbox" ? (
          <div className='gap-3 grid mt-2'>
            {question.options.map((option, optionIndex) => (
              <div
                key={`${questionId}-${optionIndex}`}
                className='flex items-center space-x-2'>
                <Checkbox
                  id={`${questionId}-${optionIndex}`}
                  checked={answers
                    .find((answer) => answer.question_id === question.id)
                    ?.options.some((answer) => answer.option_id === option.id)}
                  onCheckedChange={(checked) =>
                    handleInputChange({
                      question_id: question.id,
                      options: checked
                        ? [
                            ...(answers
                              .find(
                                (answer) => answer.question_id === question.id
                              )
                              ?.options.filter(
                                (answer) => answer.option_id !== option.id
                              ) || []),
                            {
                              option_id: option.id,
                            },
                          ]
                        : answers
                            .find(
                              (answer) => answer.question_id === question.id
                            )
                            ?.options.filter(
                              (answer) => answer.option_id !== option.id
                            ) || [],
                    })
                  }
                  className='rounded w-4 h-4'
                />
                <Label htmlFor={`${questionId}-${optionIndex}`}>
                  {option.name}
                </Label>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

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
            onValueChange={setSelectedSection}
            className='gap-4 grid grid-cols-1 md:grid-cols-2'>
            {[
              "bekerja",
              "melanjutkan pendidikan",
              "wirausaha",
              "belum bekerja",
            ].map((section) => (
              <div
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
              .map((question, index) => renderQuestion(question, index))}
          </form>
        )}
      </CardContent>
      <CardFooter className='flex flex-col'>
        <p className='small text-gray-400'>
          * Pastikan data yang dimasukkan sudah benar
        </p>
        <Button
          type='button'
          onClick={handleSubmit}
          disabled={!selectedSection}
          className=''>
          Kirim Survei
          <SendHorizonal className='ml-2 w-4 h-4' />
        </Button>
      </CardFooter>
    </Card>
  );
}
