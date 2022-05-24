import React, { useState } from "react";
import AnswerSection from "./answerSection";
import QuizSection from "./quizSection";
import "../styles/index.css";
import Result from "./result";

const Home = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [isTimerOver, setIsTimerOver] = useState(false);

  const restartQuiz = () => {
    setSelectedAnswers([]);
    setIsTimerOver(false);
    setIsTestSubmitted(false);
  };

  return (
    <>
      {!isTestSubmitted && !isTimerOver && (
        <div className="home">
          <AnswerSection selectedAnswers={selectedAnswers} />
          <QuizSection
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
            setIsTestSubmitted={setIsTestSubmitted}
            isTestSubmitted={isTestSubmitted}
            setIsTimerOver={setIsTimerOver}
          />
        </div>
      )}

      {(isTestSubmitted || isTimerOver) && (
        <Result
          selectedAnswers={selectedAnswers}
          isTimerOver={isTimerOver}
          restartQuiz={restartQuiz}
        />
      )}
    </>
  );
};

export default Home;
