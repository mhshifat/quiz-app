import React from "react";
import { QuestionState } from "../../../../providers/QuizProvider";
import { AnswerObj } from "../../index";
import { QuestionCardStyled, QuestionOptionsWrapper } from "./styled";

interface Props {
  questionNum: number;
  totalQuestion: number;
  question: string;
  answers: QuestionState["answers"];
  userAnswered: AnswerObj[];
  checkAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<Props> = ({
  questionNum,
  totalQuestion,
  answers,
  question,
  checkAnswer,
  userAnswered,
}) => {
  return (
    <QuestionCardStyled>
      <p>
        Question: {questionNum + 1} / {totalQuestion}
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: question,
        }}
      />
      <div>
        {answers.map((answer) => (
          <QuestionOptionsWrapper
            correct={userAnswered[questionNum]?.correctAnswer === answer}
            userClicked={userAnswered[questionNum]?.answer === answer}
            key={answer}
          >
            <button
              disabled={!!userAnswered[questionNum]}
              onClick={() => checkAnswer(answer)}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </QuestionOptionsWrapper>
        ))}
      </div>
    </QuestionCardStyled>
  );
};

export default QuestionCard;
