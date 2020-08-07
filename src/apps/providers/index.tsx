import React from "react";
import QuizProvider from "./QuizProvider";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

const Providers: React.FC = ({ children }) => {
  return <QuizProvider api={API_URL}>{children}</QuizProvider>;
};

export default Providers;
