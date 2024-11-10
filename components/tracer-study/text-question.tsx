import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QuestionType } from "./survey-from";

type TextQuestionProps = {
  question: QuestionType;
  onChange: (data: { question_id: number; value: string }) => void;
  error?: string;
};

const TextQuestion = React.memo(
  ({ question, onChange, error }: TextQuestionProps) => {
    return (
      <div className='border-green-100 mb-4 border-t-2'>
        <Label
          htmlFor={`question-${question.id}`}
          className='font-semibold text-sm'>
          {question.question}
        </Label>
        <Input
          id={`question-${question.id}`}
          onInput={(e) =>
            onChange({
              question_id: question.id,
              value: (e.target as HTMLInputElement).value,
            })
          }
          placeholder='Tulis jawabanmu disini'
          className={`mt-1 ${error ? "border-red-500" : ""}`}
        />
      </div>
    );
  }
);

TextQuestion.displayName = "TextQuestion";

export default TextQuestion;
