import React, { useState } from "react";
import useQuiz from "../../providers/QuizProvider/hooks/useQuiz";
import QuestionCard from "./comps/QuestionCard";
import { HomeWrapperStyled } from "./styled";

export interface AnswerObj {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const Home = () => {
  const { loading, setLoading, fetchQuestions, questions } = useQuiz();
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
  const [questionNum, setQuestionNum] = useState<number>(0);

  const startTheQuiz = () => {
    setGameOver(false);
    setLoading(true);
    fetchQuestions();
    setScore(0);
    setUserAnswers([]);
    setQuestionNum(0);
  };

  const checkAnswer = (answer: string) => {
    if (!gameOver) {
      const isCorrectAnswer = questions[questionNum].correct_answer === answer;
      isCorrectAnswer && setScore((prev) => prev + 1);
      setUserAnswers((prev) => [
        ...prev,
        {
          answer,
          correct: isCorrectAnswer,
          question: questions[questionNum].question,
          correctAnswer: questions[questionNum].correct_answer,
        },
      ]);
    }
  };

  const nextQuestion = () => {
    const nextQuestionNum = questionNum + 1;
    if (nextQuestionNum >= 10) setGameOver(true);
    else setQuestionNum((prev) => prev + 1);
  };

  return (
    <HomeWrapperStyled>
      <h1 className="title">React Quiz</h1>
      {(gameOver || userAnswers.length - 1 === 10) && (
        <button onClick={startTheQuiz} className="btn start">
          Start
        </button>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <p className="loading">Loading Questions...</p>}
      {!loading && !gameOver && !!questions.length && (
        <QuestionCard
          questionNum={questionNum}
          totalQuestion={questions.length}
          question={questions[questionNum].question}
          answers={questions[questionNum].answers}
          userAnswered={userAnswers}
          checkAnswer={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === questionNum + 1 &&
        questionNum < 10 && (
          <button onClick={nextQuestion} className="btn next">
            Next Question
          </button>
        )}
    </HomeWrapperStyled>
  );
};

export default Home;
