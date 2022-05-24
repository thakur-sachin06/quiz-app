import React, { useEffect, useState } from "react";
import "../styles/index.css";

const Timer = ({ isTestSubmitted, setIsTimerOver }) => {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (isTestSubmitted) {
        clearInterval(myInterval);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setIsTimerOver(true);
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="timer">
      <span> {`0${minutes}:`} </span>
      <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
    </div>
  );
};

export default Timer;
