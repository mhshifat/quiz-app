import React, { createContext, useState } from "react";

interface Props {
  api: string;
}

interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] };

interface QuizContextProps {
  questions: QuestionState[];
  loading: boolean;
  setLoading: (value: boolean) => void;
  fetchQuestions: () => void;
}

export const QuizContext = createContext<QuizContextProps>({
  questions: [],
  loading: false,
  setLoading: (value) => value,
  fetchQuestions: () => null,
});

const QuizProvider: React.FC<Props> = ({ children, api }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);

  const fetchQuestions = () => {
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setQuestions(
          res.results.map((item: Question) => ({
            ...item,
            answers: [...item.incorrect_answers, item.correct_answer].sort(
              () => Math.random() - 0.5
            ),
          }))
        );
      })
      .catch((err) => console.log(err));
  };

  const contextValue: QuizContextProps = {
    questions,
    loading,
    setLoading,
    fetchQuestions,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

export default QuizProvider;
