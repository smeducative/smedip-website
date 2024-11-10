import { Answer } from "@/components/tracer-study/survey-from";
import { api } from "./api";

export const fetchQuestions = async () => {
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

export const storeAnswers = async (answers: Answer[], identity: string) => {
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
