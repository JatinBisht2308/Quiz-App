import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light mb-3"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <a
          className="navbar-brand font-weight-bold h1 mb-0"
          style={{ fontSize: "24px" }}
          href="/"
        >
          Quizeria
        </a>
        <span className="navbar-text">Welcome to Quizeria</span>
      </div>
    </nav>
  );
};

export default Navbar;
