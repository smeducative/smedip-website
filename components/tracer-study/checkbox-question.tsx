import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { QuestionType } from "./survey-from";

type CheckboxQuestionProps = {
  question: QuestionType;
  onChange: (data: {
    question_id: number;
    options: Array<{ option_id: number }>;
  }) => void;
  checkedOptions: Array<{ option_id: number }>;
  error?: string;
};

const CheckboxQuestion = React.memo(
  ({ question, onChange, checkedOptions, error }: CheckboxQuestionProps) => {
    return (
      <div className='border-green-100 mb-4 border-t-2'>
        <Label
          htmlFor={`question-${question.id}`}
          className='font-semibold text-sm'>
          {question.question}
        </Label>
        <div
          className={`gap-3 grid mt-2 ${
            error ? "border-red-500 border rounded-md p-2" : ""
          }`}>
          {question.options.map((option, optionIndex) => (
            <div
              key={`${question.id}-${optionIndex}`}
              className='flex items-center space-x-2'>
              <Checkbox
                id={`${question.id}-${optionIndex}`}
                checked={checkedOptions.some(
                  (answer) => answer.option_id === option.id
                )}
                onCheckedChange={(checked) =>
                  onChange({
                    question_id: question.id,
                    options: checked
                      ? [
                          ...checkedOptions.filter(
                            (answer) => answer.option_id !== option.id
                          ),
                          { option_id: option.id },
                        ]
                      : checkedOptions.filter(
                          (answer) => answer.option_id !== option.id
                        ),
                  })
                }
                className='rounded w-4 h-4'
              />
              <Label htmlFor={`${question.id}-${optionIndex}`}>
                {option.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CheckboxQuestion.displayName = "CheckboxQuestion";

export default CheckboxQuestion;
