import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { showQuiz } from "../features/quiz/quizSlice";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Quiz = () => {
  const quizDetails = useSelector((state) => state.showQuiz.quizData);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ques, setQues] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (quizDetails.length > 0) {
      // Check if there are quizDetails available
      setQues(quizDetails[questionIndex].question);
      settingOptionsRandomly();
      setSelectedOption(null);
    }
  }, [questionIndex, quizDetails]); // Trigger when 'questionIndex' or 'quizDetails' change

  const settingOptionsRandomly = () => {
    if (quizDetails.length > 0) {
      const optionsArray = quizDetails[questionIndex].incorrect_answers.slice();
      optionsArray.push(quizDetails[questionIndex].correct_answer);
      for (let i = optionsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
      }
      setOptions(optionsArray);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleNext = () => {
    if (questionIndex < quizDetails.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const formattedQuestion = ques
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"');

  return (
    <div className="container mt-5 p-3 d-flex justify-content-center  align-center flex-column">
      <hr />
      <h5 className="mb-3">{formattedQuestion}</h5>
      <Form>
        {options.map((item, index) => (
          <Form.Check
            key={index}
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
        <button type="button" className="quiz-btn" onClick={handleBack}>
          <AiOutlineArrowLeft />
          &nbsp;Back
        </button>
        <button type="button" className="quiz-btn" onClick={handleNext}>
          Next&nbsp;
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
