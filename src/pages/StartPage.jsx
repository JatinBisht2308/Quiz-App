import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Instructions from "../components/Instructions";
import Quiz from "../components/Quiz";

const StartPage = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() =>{
       const navbarElement = document.querySelector('.navbar');
       if(navbarElement)
       {
        const height = navbarElement.offsetHeight;
        setNavbarHeight(height);
       }
  },[]);

  const handleStartQuiz = () => {
    setShowInstructions(false);
    setShowQuiz(true);
  };

  return (
    <div className="StartPage">
      <Navbar />
      <div className="row m-0 mainComp"
      style={{height:`calc(100vh - ${navbarHeight}px)`}}
      >
        <div className="col-md-4 bg-dark text-white"
        >
          {/* Answered and Unanswered question count */}
          Answered are 0.
          Unanswered are 15.
        </div>
        <div className="col-md-8 bg-light">
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
