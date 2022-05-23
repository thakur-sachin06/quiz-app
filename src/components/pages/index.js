import React, { useState } from "react";
import AnswerSection from "./answerSection";
import QuizSection from "./quizSection";
import "../styles/index.css";
import Result from "./result";

const Home = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  return (
    <>
      {!isTestSubmitted && (
        <div className="home">
          <AnswerSection selectedAnswers={selectedAnswers} />
          <QuizSection
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
            setIsTestSubmitted={setIsTestSubmitted}
          />
        </div>
      )}

      {isTestSubmitted && <Result selectedAnswers={selectedAnswers} />}
    </>
  );
};

export default Home;
