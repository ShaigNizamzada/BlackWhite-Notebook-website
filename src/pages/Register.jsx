import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const registerSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !tel || !email || !password || !againPassword) {
      alert("Please fill input");
    } else {
      if (password === againPassword) {
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("email", email);
        localStorage.setItem("tel", tel);
        localStorage.setItem("password", password);
        window.location.assign("/login");
      } else {
        alert("Passwords are different");
      }
    }
  };
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="my-4">Sign up</h1>

      <div className="col-md-5 col-9" onSubmit={registerSubmit}>
        <form className="mt-4">
          <div className="mb-4">
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="form-control p-2"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              className="form-control p-2"
              placeholder="Tel. Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control p-2"
              placeholder="Email Adress"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control p-2"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setAgainPassword(e.target.value)}
              type="password"
              className="form-control p-2"
              placeholder="Again Password"
              required
            />
          </div>
          <div className="pt-2 pb-3">
            <Link to="/login" className="have-account">
              <h6>Already have an account?</h6>
            </Link>
          </div>
          <div className="login-button-section">
            <button
              type="submit"
              className="btn btn-dark login-button px-4 mt-3"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
