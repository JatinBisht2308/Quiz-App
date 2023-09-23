import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="col-md-3"
        style={{backgroundColor: '#31393C'}}
        >
          <QuestionCounter
            totalQuestions={15}
            answeredQuestions={0}
            userName={name}
            userMail={mail}
          />
        </div>
        <div className="col-md-9 bg-light">
          {/* Instructions Modal */}
          {showInstructions && (
            <Instructions
              show={showInstructions}
              handleClose={null} // Prevent modal from being closed
              onStartQuiz={handleStartQuiz}
            />
          )}
          {showQuiz && <Quiz />}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
