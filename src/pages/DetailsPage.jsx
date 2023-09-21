// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from '../components/Navbar';

// const DetailsPage = () => {
//   // function starts here
//   const [name, setName] = useState("");
//   const [mail, setMail] = useState("");
//   const navigate = useNavigate();

//   const handleOnChangeName = (e) => {
//     const newName = e.target.value;
//     setName(newName);
//   };
//   const handleOnChangeMail = (e) => {
//     const newMail = e.target.value;
//     setMail(newMail);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     try {
//       console.log(name);
//       console.log(mail);
//       navigate("/startquiz");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // jsx starts from here
//   return (
//     <div className="DetailsPage">
//       <Navbar />
//       <form onSubmit={handleSubmit}>
//         <div className="name">
//           <label htmlFor="name">Full Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleOnChangeName}
//           />
//         </div>
//         <div className="mail">
//           <label htmlFor="mail">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={mail}
//             onChange={handleOnChangeMail}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DetailsPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const DetailsPage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
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
    e.preventDefault();

    try {
      console.log(name);
      console.log(mail);
      navigate("/startquiz");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="DetailsPage ">
      <Navbar />
      <div className="row justify-content-center ">
        <div className="col-md-4 p-4">
          <form
            onSubmit={handleSubmit}
            className="p-4"
            style={{ backgroundColor: "#e5e1ff" }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={handleOnChangeName}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={mail}
                onChange={handleOnChangeMail}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
