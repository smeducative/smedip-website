"use client";

import { useState } from "react";
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

type QuestionsData = Record<string, QuestionType[]>;

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
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedSection, setSelectedSection] = useState<string>("bekerja");

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

  const handleInputChange = (question: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", answers);
    // Here you would typically send the data to your backend
  };

  const renderQuestion = (question: QuestionType, index: number) => {
    const questionId = `${selectedSection}-${index}`; // Fix incorrect usage of template literal

    return (
      <div key={questionId} className='mb-4'>
        <Label htmlFor={questionId} className='font-medium text-base'>
          {question.question}
        </Label>
        {question.type === "text" ? (
          <Input
            id={questionId}
            value={answers[question.question] || ""}
            onChange={(e) =>
              handleInputChange(question.question, e.target.value)
            }
            className='mt-1'
          />
        ) : (
          <RadioGroup
            onValueChange={(value) =>
              handleInputChange(question.question, value)
            }
            value={answers[question.question]}
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
        )}
      </div>
    );
  };

  return (
    <Card className='mx-auto w-full max-w-4xl'>
      <CardHeader>
        <CardTitle>Formulir Survei</CardTitle>
        <CardDescription>
          Pilih kategori dan isi formulir berikut dengan sejujur-jujurnya.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mb-6'>
          {/* <Label className='block mb-2 font-medium text-base'>
            Pilih Kategori
          </Label> */}
          <RadioGroup
            onValueChange={setSelectedSection}
            className='gap-4 grid grid-cols-2'>
            {[
              "bekerja",
              "melanjutkan pendidikan",
              "wirausaha",
              "belum bekerja",
            ].map((section) => (
              <Label
                key={section}
                htmlFor={section}
                className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 hover:bg-blue-100 cursor-pointer ${section} ${
                  selectedSection === section
                    ? "ring-2 ring-offset-2 ring-blue-400 bg-blue-100 text-blue-700"
                    : ""
                }`}>
                <RadioGroupItem
                  value={section}
                  id={section}
                  className='sr-only'
                />
                <span className='font-semibold text-lg'>
                  {section.toUpperCase()}
                </span>
                <p className='mt-2 text-center text-xs'>
                  {categoryDescriptions[section]}
                </p>
              </Label>
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
      <CardFooter>
        <Button
          type='button'
          onClick={handleSubmit}
          disabled={!selectedSection}
          className='w-full'>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
