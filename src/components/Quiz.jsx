import React from "react";
import Button from "react-bootstrap/Button";

const Quiz = ({
  ques,
  wrongAnswer,
  rightAnswer,
  handleNextQuestion,
  handlePreviousQuestion,
}) => {
  return (
    <div
      className="container mt-5 p-3 d-flex justify-content-center  align-center flex-column"
      style={{ backgroundColor: "#e5e1ff" }}
    >
      <h3>{ques}</h3>
      <p>{rightAnswer}</p>
      <ul>
        {wrongAnswer.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div
        className="d-flex justify-content-between"
        style={{ width: "13.8%" }}
      >
        <button
          type="button"
          className="btn btn-outline-secondary mr-5"
          onClick={handlePreviousQuestion}
        >
          previous
        </button>
        <button
          type="button"
          className="btn btn-outline-primary ml-3"
          onClick={handleNextQuestion}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
