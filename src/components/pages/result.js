import React from "react";
import quizData from "../../data/questions.json";
import "../styles/result.css";

const Result = ({ selectedAnswers, isTimerOver }) => {
  let numOfCorrectAns = 0;
  const checkNumOfCorrectAnswers = () => {
    const answers = quizData.map((elt) => elt.correctAnswer);
    answers.forEach((ans, index) => {
      if (
        ans.trim().toLocaleLowerCase() ==
        selectedAnswers[index].trim().toLocaleLowerCase()
      ) {
        numOfCorrectAns++;
      }
    });
    return numOfCorrectAns;
  };

  return (
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
        <span>- Your Score: </span>
        {(numOfCorrectAns * 100) / quizData.length}
      </p>
      <button>Show Report</button>
    </div>
  );
};

export default Result;
