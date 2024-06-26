import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [fullname, setFullname] = useState(localStorage.getItem("fullname"));
  const [tel, setTel] = useState(localStorage.getItem("tel"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const AccountSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !tel || !email) {
      alert("Please fill input");
    } else {
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("tel", tel);
      window.location.reload();
    }
  };
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="my-4">My Account</h1>

      <div className="col-5" onSubmit={AccountSubmit}>
        <form className="mt-4">
          <div className="mb-4">
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="form-control p-2"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              className="form-control p-2"
              placeholder="Tel. Number"
              required
            />
          </div>
          <div className="mb-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control p-2"
              placeholder="Email Adress"
              required
            />
          </div>
          <div className="login-button-section">
            <button
              type="submit"
              className="btn btn-dark login-button px-4 mt-3"
            >
              Change
            </button>
          </div>
          <div className="login-button-section">
            <Link
              to="/changepassword"
              type="submit"
              className="btn btn-outline-dark login-button px-4 mt-3"
            >
              Change Password
            </Link>
          </div>
        </form>
        <div className="logout-section d-flex justify-content-center align-items-center mt-3">
          <button
            className="btn btn-outline-danger my-4 px-5"
            onClick={() => {
              localStorage.removeItem("login");
              window.location.assign("/login");
            }}
          >
            Logout
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Account;
