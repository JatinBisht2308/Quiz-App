import React from "react";
import ".././styles/questionCounter.css";
const QustionCounter = ({
  totalQuestions,
  answeredQuestions,
  userName,
  userMail,
}) => {
  return (
    <div className="question-counter row p-2">
      <h1 style={{color:'#fff'}}>{userName}</h1>
      <div className="container mt-3 d-flex justify-content-between">
      <div className="card p-0" style={{width:'45%',backgroundColor: "#e3f2fd"  }}>
        <div className="card-body">
          <h1>{answeredQuestions}</h1>
          <p className="fw-semibold fs-6">Answered</p>
        </div>
      </div>
      <div className="card p-0" style={{width:'45%',backgroundColor: "#e3f2fd" }}>
        <div className="card-body">
          <h1>{totalQuestions - answeredQuestions}</h1>
          <p className="fw-semibold fs-6">Unanswered</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QustionCounter;
