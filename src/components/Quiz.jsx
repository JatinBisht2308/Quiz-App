import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Quiz = ({
  ques,
  wrongAnswer,
  rightAnswer,
  handleNextQuestion,
  handlePreviousQuestion,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    settingOptionsRandomly();
  }, [ques]); // Trigger when 'ques' prop changes

  const settingOptionsRandomly = () => {
    const optionsArray = wrongAnswer.slice();
    optionsArray.push(rightAnswer);

    // Fisher-Yates Shuffle Algorithm
    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }

    setOptions(optionsArray);
  };
  const formattedQuestion = ques
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"');
  return (
    <div
      className="container mt-5 p-3 d-flex justify-content-center  align-center flex-column"
      style={{ backgroundColor: "#e5e1ff" }}
    >
      <h3 className="mb-3">{formattedQuestion}</h3>
      <ul>
        {options.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div
        className="d-flex justify-content-between mt-2"
        style={{ width: "13.8%" }}
      >
        <button type="button" className="quiz-btn" onClick={handlePreviousQuestion}>
          <AiOutlineArrowLeft />
          &nbsp;Back
        </button>
        <button type="button" className="quiz-btn" onClick={handleNextQuestion}>
          Next&nbsp;
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
