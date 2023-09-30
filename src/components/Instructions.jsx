import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Instructions = ({ show, onStartQuiz }) => {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleStartQuiz = () => {
    if (agreed) {
      onStartQuiz();
    }
  };

  return (
    <Modal show={show} onHide={null} centered>
      <Modal.Header>
        <Modal.Title>Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          <li>
            Quizzes may cover a variety of topics, including general knowledge,
            sports, science, and more.
          </li>
          <li>You can attempt each quiz only once.</li>
          <li>
            Questions are timed, so answer quickly and accurately to earn the
            highest score.
          </li>
          <li>
            You can view your quiz results and compare them with other users'
            scores.
          </li>
          <li>
            Please do not refresh the browser after the timer starts.
          </li>
        </ol>
        <p>Read and agree to the terms and conditions:</p>
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={handleCheckboxChange}
          />{" "}
          I agree to all the terms and conditions
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleStartQuiz} disabled={!agreed}>
          Start Quiz
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Instructions;
