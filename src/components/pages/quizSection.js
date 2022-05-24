import React, { useState } from "react";
import quizData from "../../data/questions.json";
import "../styles/index.css";
import Timer from "./timer";

const QuizSection = ({
  selectedAnswers,
  setSelectedAnswers,
  setIsTestSubmitted,
  isTestSubmitted,
  setIsTimerOver,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionChange = (selectedOption) => {
    const arr = [...selectedAnswers];
    arr[currentQuestion] = selectedOption;
    setSelectedAnswers(arr);
  };

  const handleNextQuestionChange = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevQuestionChange2 = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const isDisable = () => {
    if (quizData.length === selectedAnswers.length) {
      return false;
    } else return true;
  };

  return (
    <div className="quiz-section">
      <Timer
        isTestSubmitted={isTestSubmitted}
        setIsTimerOver={setIsTimerOver}
      />
      <div className="quiz-section__header">
        <button
          disabled={currentQuestion == 0}
          className={`btn quiz-btn ${
            currentQuestion == 0 ? "disabled-btn" : ""
          }  `}
          onClick={handlePrevQuestionChange2}
        >
          Prev
        </button>
        <p>Attempt Question Here</p>
        <button
          disabled={currentQuestion == quizData.length - 1}
          className={`btn quiz-btn ${
            currentQuestion == quizData.length - 1 ? "disabled-btn" : ""
          }  `}
          onClick={handleNextQuestionChange}
        >
          Next
        </button>
      </div>
      <div className="quiz-section__questions">
        <div>
          <div className="quiz-options">
            {!!quizData.length &&
              quizData.map((question) => {
                return (
                  <div
                    className={`${
                      currentQuestion + 1 == question.id
                        ? "active-question"
                        : "unactive-question"
                    }`}
                    key={question.id}
                  >
                    <p className="question-text">{`Question# ${
                      currentQuestion + 1
                    } ${quizData[currentQuestion].question}`}</p>
                    {question.options.map((option, index) => {
                      return (
                        <label className="radio-group" key={index}>
                          <input
                            id={`${question.id}-${option}`}
                            value={option}
                            name={question.id}
                            type="radio"
                            onChange={(e) => handleOptionChange(e.target.value)}
                          />
                          <div className="options">{option}</div>
                        </label>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setIsTestSubmitted(true);
        }}
        disabled={isDisable()}
        className={`btn ${isDisable() ? "disabled-btn" : ""} `}
      >
        Submit
      </button>
    </div>
  );
};

export default QuizSection;
