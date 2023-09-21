import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailsPage = () => {
  // function starts here
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("Hello from My Website");
  const [body, setBody] = useState("This is a test email sent from my website");
  const navigate = useNavigate();

  const handleOnChangeName = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const handleOnChangeMail = (e) => {
    const newMail = e.target.value;
    setMail(newMail);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      console.log(name);
      console.log(mail);
      navigate("/startquiz");
    } catch (err) {
      alert(err.message);
    }
  };

  // jsx starts from here
  return (
    <div>
      <div className="navbar">Welcome to the Quizeria App.</div>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleOnChangeName}
          />
        </div>
        <div className="mail">
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="email"
            value={mail}
            onChange={handleOnChangeMail}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DetailsPage;
