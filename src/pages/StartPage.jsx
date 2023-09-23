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

  const handleStartQuiz = () => {
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
          {!isLoading && showQuiz && (
            <Quiz
              ques={quizData[0].question}
              rightAnswer={quizData[0].correct_answer}
              wrongAnswer={quizData[0].incorrect_answers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
