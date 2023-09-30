import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import "../styles/detailPage.css";
import rightImage from "../assets/detailImage.png";
import Linkedin from "../assets/Linkedin.png";
import Instagram from "../assets/Instagram.png";
import Github from "../assets/GitHub.png";
import Medium from "../assets/Medium.png";
import Gmail from "../assets/Gmail.png";

const DetailsPage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChangeName = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleOnChangeMail = (e) => {
    const newMail = e.target.value;
    setMail(newMail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Store name and mail in redux store using authReducer
    dispatch(login({name: `${name}`, mail: `${mail}`}));
    try {
      console.log(name);
      console.log(mail);
      navigate("/startquiz");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="DetailsPage">
      <div className="left-cont">
        <div className="left-sub-cont">
          <h3>Welcome back</h3>
          <p>Welcome back please enter your details</p>
          <form onSubmit={handleSubmit} className="details-form">
            <div className="sub-input">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                className="detail-input"
                id="name"
                value={name}
                onChange={handleOnChangeName}
                placeholder="enter your name"
                required
              />
            </div>
            <div className="sub-input">
              <label htmlFor="email" className="">
                Email:
              </label>
              <input
                type="email"
                className="detail-input"
                id="email"
                value={mail}
                onChange={handleOnChangeMail}
                placeholder="enter your mail"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="socials">
            <a href="mailto:jatinbisht2308@gmail.com">
              <img src={Gmail} alt="" />
            </a>
            <a href="https://github.com/JatinBisht2308">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/jatin-bisht-ba62111bb/">
              <img src={Linkedin} alt="" />
            </a>
            <a href="https://www.instagram.com/the_soloshifter390/">
              <img src={Instagram} alt="" />
            </a>
            <a href="https://medium.com/@jatinbisht2308">
              <img src={Medium} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="col right-cont">
        <img src={rightImage} alt="" />
      </div>
    </div>
  );
};

export default DetailsPage;
