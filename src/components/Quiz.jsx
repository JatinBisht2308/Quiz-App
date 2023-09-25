import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Quiz = ({
  ques,
  wrongAnswer,
  rightAnswer,
  handleNextQuestion,
  handlePreviousQuestion,
}) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    settingOptionsRandomly();
    setSelectedOption(null);
  }, [ques]); // Trigger when 'ques' prop changes

  const settingOptionsRandomly = () => {
    const optionsArray = wrongAnswer.slice();
    optionsArray.push(rightAnswer);

    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }

    setOptions(optionsArray);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const formattedQuestion = ques
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"');
  return (
    <div className="container mt-5 p-3 d-flex justify-content-center  align-center flex-column">
      <hr />
      <h5 className="mb-3">{formattedQuestion}</h5>
      <Form>
        {options.map((item) => (
          <Form.Check
            type="radio"
            label={`${item}`}
            checked={selectedOption === item}
            onChange={() => handleOptionChange(item)}
          />
        ))}
      </Form>
      <hr />
      <div
        className="d-flex justify-content-between mt-1"
        style={{ width: "13.8%" }}
      >
        <button
          type="button"
          className="quiz-btn"
          onClick={handlePreviousQuestion}
        >
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
