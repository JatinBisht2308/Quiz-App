import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showQuiz } from "../features/quiz/quizSlice";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import Navbar from "../components/Navbar";
import Instructions from "../components/Instructions";
import Quiz from "../components/Quiz";
import QuestionCounter from "../components/QuestionCounter";

const StartPage = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showQuizz, setShowQuizz] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const navbarElement = document.querySelector(".navbar");
    if (navbarElement) {
      const height = navbarElement.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);

  useEffect(() => {
    // Load quiz data when the component mounts
    if (showQuizz && quizData.length === 0) {
      axios
        .get("https://opentdb.com/api.php?amount=15")
        .then((response) => {
          // Check if the request was successful
          console.log(response.status);
          if (response.status === 200) {
            dispatch(showQuiz(response.data.results));
            setQuizData(response.data.results);
            setIsLoading(false);
          } else {
            console.error("Failed to fetch data from the API");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [showQuizz, quizData]);

  const handleStartQuiz = () => {
    setShowInstructions(false);
    setShowQuizz(true);
  };

  return (
    <div className="StartPage">
      <Navbar />
      <div
        className="row m-0 mainComp"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div
          className="col-md-3 left-section"
          style={{ backgroundColor: "#31393C" }}
        >
          <QuestionCounter
            totalQuestions={15}
            answeredQuestions={answeredQuestions}
          />
        </div>
        <div className="col-md-9 bg-light right-section">
          {/* Instructions Modal */}
          {showInstructions && (
            <Instructions
              show={showInstructions}
              handleClose={null} // Prevent modal from being closed
              onStartQuiz={handleStartQuiz}
            />
          )}
          <div className="container question-navigation">
            {/* here will be the question navigation comes......... */}
          </div>

          {isLoading && showQuizz ? (
            // Loader will be shown
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#5794ef"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            !isLoading && showQuizz && <Quiz />
          )}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
