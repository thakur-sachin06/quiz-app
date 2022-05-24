import React from "react";
import "../styles/answerSection.css";

const AnswerSection = ({ selectedAnswers }) => {
  return (
    <div className="answer-section">
      <h4>Review Answers Here</h4>
      <div style={{ marginTop: "120px" }}>
        {!!selectedAnswers.length &&
          selectedAnswers.map((answer, index) => {
            if (answer) {
              return (
                <div key={index} className="answers">{`#${
                  index + 1
                }: ${answer}`}</div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default AnswerSection;
