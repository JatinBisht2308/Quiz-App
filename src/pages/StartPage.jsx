import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Instructions from "../components/Instructions";
import Quiz from "../components/Quiz";
import QuestionCounter from "../components/QuestionCounter";

const StartPage = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const mail = localStorage.getItem("mail");
    setMail(mail);
    setName(name);
    const navbarElement = document.querySelector(".navbar");
    if (navbarElement) {
      const height = navbarElement.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);

  useEffect(() => {
    // Load quiz data when the component mounts
    if (showQuiz && quizData.length === 0) {
      axios.get("https://opentdb.com/api.php?amount=15").then((response) => {
        // Check if the request was successful
        console.log(response.status);
        if (response.status === 200) {
          // Set the fetched data to the quizData state
          setQuizData(response.data.results);
          console.log(response.data.results);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch data from the API");
        }
      });
    }
  }, [showQuiz, quizData]);

  const handleStartQuiz = () => {
    setShowInstructions(false);
    setShowQuiz(true);
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
            userName={name}
            userMail={mail}
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
          {!isLoading && showQuiz && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
