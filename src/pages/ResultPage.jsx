import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getUserResponse } from "../features/quiz/quizSlice";

const ResultPage = () => {
  const userResponse = useSelector(
    (state) => state.getUserResponse.userResponse
  );
  
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    console.log(userResponse);
    // Calculate the score by iterating through userResponse
    userResponse.forEach((response) => {
      console.log("hi ji");
        if (response.isAnswerCorrect) {
          console.log("Hello");
          setScore((prevScore) => prevScore + 1);
        }
      }
    );
  }, [userResponse]);

  return (
    <div className="ResultsPage">
      <Navbar />
      <h1>This page is under development.</h1>
    </div>
  );
};

export default ResultPage;
