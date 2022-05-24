import React from "react";
import quizData from "../../../data/questions.json";
import "../../styles/modal.css";

const AnswersModal = ({ selectedAnswers, setShowReportModal }) => {
  return (
    <div className="report-section">
      {!!quizData.length &&
        quizData.map((data, index) => {
          return (
            <div style={{ marginBottom: "30px" }}>
              <p className="question">{`Question# ${index + 1} ${
                data.question
              }`}</p>
              <p className="answers">Correct Answer: {data.correctAnswer} </p>
              <p className="answers user-answers">
                Your Answer:
                {selectedAnswers[index]
                  ? selectedAnswers[index]
                  : " Not Attempted"}
              </p>
            </div>
          );
        })}
      <button
        onClick={() => setShowReportModal(false)}
        className="btn quiz-btn"
      >
        Close Report
      </button>
    </div>
  );
};

export default AnswersModal;
