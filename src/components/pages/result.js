import React, { useState } from "react";
import quizData from "../../data/questions.json";
import "../styles/index.css";
import "../styles/result.css";
import AnswersModal from "./modal/answersModal";

const Result = ({ selectedAnswers, isTimerOver, restartQuiz }) => {
  const [showReportModal, setShowReportModal] = useState(false);
  let numOfCorrectAns = 0;
  let numOfUnattempted = 0;
  const checkNumOfCorrectAnswers = () => {
    const answers = quizData.map((elt) => elt.correctAnswer);
    answers.forEach((ans, index) => {
      if (
        selectedAnswers[index] &&
        ans.trim().toLocaleLowerCase() ==
          selectedAnswers[index].trim().toLocaleLowerCase()
      ) {
        numOfCorrectAns++;
      } else if (!selectedAnswers[index]) {
        numOfUnattempted++;
      }
    });
    return numOfCorrectAns;
  };

  return (
    <>
      <div className="result-section">
        <p className="success-text">
          {isTimerOver
            ? "Time over!"
            : "You have successfully submitted the assessment"}
        </p>
        <p>
          <span>- Questions Asked: </span> {quizData.length}
        </p>
        <p>
          <span>- Questions Correct: </span>{" "}
          {selectedAnswers.length ? checkNumOfCorrectAnswers() : 0}
        </p>
        <p>
          <span>- Unattempted Questions: </span>{" "}
          {selectedAnswers.length ? numOfUnattempted : quizData.length}
        </p>
        <p>
          <span>- Your Score: </span>
          {(numOfCorrectAns * 100) / quizData.length}
        </p>
        <button
          onClick={() => setShowReportModal(true)}
          className="btn show-report"
        >
          Show Report
        </button>
        <button onClick={restartQuiz} className="btn">
          Restart Quiz
        </button>
      </div>
      {showReportModal && (
        <AnswersModal
          selectedAnswers={selectedAnswers}
          setShowReportModal={setShowReportModal}
        />
      )}
    </>
  );
};

export default Result;
