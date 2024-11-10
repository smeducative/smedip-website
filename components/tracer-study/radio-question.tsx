import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuestionType } from "./survey-from";

type RadioQuestionProps = {
  question: QuestionType;
  onChange: (data: {
    question_id: number;
    options: Array<{ option_id: number }>;
  }) => void;
  value: string;
  error?: string;
};

const RadioQuestion = React.memo(
  ({ question, onChange, value, error }: RadioQuestionProps) => {
    return (
      <div className='border-green-100 mb-4 border-t-2'>
        <Label
          htmlFor={`question-${question.id}`}
          className='font-semibold text-sm'>
          {question.question}
        </Label>
        <RadioGroup
          onValueChange={(value) =>
            onChange({
              question_id: question.id,
              options: [{ option_id: parseInt(value) }],
            })
          }
          value={value}
          className={`mt-2 ${
            error ? "border-red-500 border rounded-md p-2" : ""
          }`}>
          {question.options.map((option, optionIndex) => (
            <div
              key={`${question.id}-${optionIndex}`}
              className='flex items-center space-x-2'>
              <RadioGroupItem
                value={option.id.toString()}
                id={`${question.id}-${optionIndex}`}
              />
              <Label htmlFor={`${question.id}-${optionIndex}`}>
                {option.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    );
  }
);

RadioQuestion.displayName = "RadioQuestion";

export default RadioQuestion;
