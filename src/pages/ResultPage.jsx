import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getUserResponse } from "../features/quiz/quizSlice";

const ResultPage = () => {
  const userResponse = useSelector(
    (state) => state.getUserResponse.userResponse
  );
  let initialScore = 0;
  const [score, setScore] = useState(initialScore);

  useEffect(() => {
    console.log("user response ha ye:", userResponse);
    // Calculate the score by iterating through userResponse
    userResponse.forEach((response) => {
      if (response.isAnswerCorrect) {
        initialScore++;
      }
    });
    setScore(initialScore);
  }, []);

  return (
    <div className="ResultsPage">
      <Navbar />
      <h1>
        Your score is: <span>{score}</span>
      </h1>
    </div>
  );
};

export default ResultPage;
