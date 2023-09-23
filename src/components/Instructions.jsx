import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';

const Instructions = ({ show, handleClose, onStartQuiz }) => {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleStartQuiz = () => {
    if (agreed) {
      onStartQuiz();
      // handleClose();
    }
  };

  return (
    <Modal show={show} onHide={null} centered>
      <Modal.Header>
        <Modal.Title>Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        <Button
          variant="primary"
          onClick={handleStartQuiz}
          disabled={!agreed}
        >
          Start Quiz
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Instructions;