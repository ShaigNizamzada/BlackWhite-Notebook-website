import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please, fill the input");
    } else {
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        localStorage.setItem("login", "true");
        navigate("/products");
        window.location.assign("/products");
      } else {
        alert("email or password is wrong");
      }
    }
  };
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="my-4">Sign in</h1>

      <div className="col-5">
        <form className="mt-4" onSubmit={loginSubmit}>
          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control p-2"
              placeholder="Email Adress"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control p-2"
              placeholder="Password"
            />
          </div>
          <div className="pt-2 pb-3">
            <Link to="/register" className="have-account">
              <h6>Don't have an account? Register Now!</h6>
            </Link>
          </div>
          <div className="pt-2 pb-3">
            <Link to="/forgotpassword" className="have-account forgot-password">
              <h6>Forgot Password?</h6>
            </Link>
          </div>
          <div className="login-button-section">
            <button
              type="submit"
              className="btn btn-dark login-button px-4 mt-3"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
