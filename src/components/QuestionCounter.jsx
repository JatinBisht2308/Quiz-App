import React from "react";
import {useSelector,useDispatch} from 'react-redux';
const QustionCounter = ({
  totalQuestions,
  answeredQuestions,
}) => {
  const userDetails = useSelector((state) => state.login.userData);
  const dispatch = useDispatch();
  return (
    <div className="question-counter row p-2">
      <h1 style={{ color: "#fff" }}>{userDetails.name}</h1>
      <div className="container mt-3 d-flex justify-content-between">
        <div
          className="card p-0"
          style={{ width: "45%", backgroundColor: "#e3f2fd" }}
        >
          <div className="card-body">
            <h1>{answeredQuestions}</h1>
            <p className="fw-semibold fs-6">Answered</p>
          </div>
        </div>
        <div
          className="card p-0"
          style={{ width: "45%", backgroundColor: "#e3f2fd" }}
        >
          <div className="card-body">
            <h1>{totalQuestions - answeredQuestions}</h1>
            <p className="fw-semibold fs-6">Not Answered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QustionCounter;
