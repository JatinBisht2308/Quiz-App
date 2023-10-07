import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import {
  showQuiz,
  getUserResponse,
  updateUserResponse,
} from "../features/quiz/quizSlice";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Quiz = () => {
  const quizDetails = useSelector((state) => state.showQuiz.quizData);
  const userResponse = useSelector((state) => state.showQuiz.userResponse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [ques, setQues] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  useEffect(() => {
    console.log("Use effect called");
    if (quizDetails.length > 0) {
      // Check if there are quizDetails available
      setQues(quizDetails[questionIndex].question);
      const userResponseForQuestion = userResponse.find(
        (response) => response.questionIndex === questionIndex.toString()
      );

      if (userResponseForQuestion) {
        setSelectedOption(userResponseForQuestion.selectedOption);
      } else {
        setSelectedOption(null);
      }
      settingOptionsRandomly();
    }
  }, [questionIndex, quizDetails, userResponse]); // Trigger when 'questionIndex' or 'quizDetails' change

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
    if (option === quizDetails[questionIndex].correct_answer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
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
  const handleSubmitQuestion = () => {
    const checkAnswered = userResponse.find(
      (obj) => obj.questionIndex == questionIndex
    );
    console.log("userr response aara ha", userResponse);
    console.log("check horiya ya nahi", checkAnswered);
    if (selectedOption != null && !checkAnswered) {
      dispatch(
        getUserResponse({
          questionIndex: `${questionIndex}`,
          selectedOption: `${selectedOption}`,
          isAnswerCorrect: `${isAnswerCorrect}`,
        })
      );
      handleNext();
    } else if (selectedOption != null && checkAnswered) {
      dispatch(
        updateUserResponse({
          questionIndex: `${questionIndex}`,
          selectedOption: `${selectedOption}`,
          isAnswerCorrect: `${isAnswerCorrect}`,
        })
      );
      console.log("updated the user response selected option");
      handleNext();
    } else {
      alert("Please choose an option before submitting");
    }
  };
  const handleSubmitQuiz = () => {
    navigate("/results");
  };
  const formattedQuestion = ques
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"');

  return (
    <div className="container mt-5 p-3 d-flex justify-content-center  align-center flex-column">
      <hr />
      <h5 className="mb-3">{formattedQuestion}</h5>
      <h1>{selectedOption}</h1>
      <Form>
        {options.map((item, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={`${item}`}
            checked={selectedOption === item}
            defaultChecked={selectedOption}
            onChange={() => handleOptionChange(item)}
          />
        ))}
      </Form>
      <hr />
      <div className="d-flex justify-content-between mt-1">
        <div className="d-flex justify-content-start">
          <button type="button" className="quiz-btn mx-2" onClick={handleBack}>
            <AiOutlineArrowLeft />
            &nbsp;Back
          </button>
          <button type="button" className="quiz-btn" onClick={handleNext}>
            Next&nbsp;
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="quiz-btn mx-2"
            onClick={handleSubmitQuestion}
          >
            Submit Question
          </button>
          <button type="button" className="quiz-btn" onClick={handleSubmitQuiz}>
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
