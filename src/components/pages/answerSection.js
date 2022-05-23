import React from "react";
import "../styles/index.css";

const AnswerSection = ({ selectedAnswers }) => {
  return (
    <div className="answer-section">
      <h5>Review Answers Here</h5>
      {!!selectedAnswers.length &&
        selectedAnswers.map((answer, index) => {
          if (answer) {
            return <div> {`#${index + 1}: ${answer}`} </div>;
          }
        })}
    </div>
  );
};

export default AnswerSection;
