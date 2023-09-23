import React from "react";
import Button from "react-bootstrap/Button";


const Quiz = ({ques,wrongAnswer,rightAnswer}) => {
  return (
    <div className="container mt-5 p-3 d-flex justify-content-center  align-center flex-column"
    style={{backgroundColor:'#e5e1ff'}}
    >
     <h3>{ques}</h3>
     <p>{rightAnswer}</p>
     <ul>
     {wrongAnswer.map((item) =>(
      <li>{item}</li>
     ))}
     </ul>
    </div>
  );
};

export default Quiz;
