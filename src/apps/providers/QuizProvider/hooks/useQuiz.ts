import { useContext } from "react";
import { QuizContext } from "../index";

const useQuiz = () => useContext(QuizContext);

export default useQuiz;
