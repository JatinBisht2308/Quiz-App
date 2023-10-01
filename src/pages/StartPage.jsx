import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showQuiz} from '../features/quiz/quizSlice';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.login.userData);

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
      axios.get("https://opentdb.com/api.php?amount=15").then((response) => {
        // Check if the request was successful
        console.log(response.status);
        if (response.status === 200) {
          // Set the fetched data to the quizData state
          setQuizData(response.data.results);
          dispatch(showQuiz(response.data.results));
          setIsLoading(false);
        } else {
          console.error("Failed to fetch data from the API");
        }
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
            userName={userDetails.name}
            userMail={userDetails.mail}
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
            !isLoading &&
            showQuizz && (
              <Quiz
                ques={quizData[currentQuestionIndex].question}
                wrongAnswer={quizData[currentQuestionIndex].incorrect_answers}
                rightAnswer={quizData[currentQuestionIndex].correct_answer}
                handleNextQuestion={async () => {
                  let index = currentQuestionIndex;
                  if (index >= quizData.length - 1) {
                    setCurrentQuestionIndex(0);
                  } else {
                    setCurrentQuestionIndex(++index);
                  }
                }}
                handlePreviousQuestion={async () => {
                  let index = currentQuestionIndex;
                  if (index <= 0) {
                    setCurrentQuestionIndex(0);
                  } else {
                    setCurrentQuestionIndex(--index);
                  }
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
