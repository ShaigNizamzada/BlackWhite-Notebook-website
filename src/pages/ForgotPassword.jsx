import React from "react";

const ForgotPassword = () => {
  return (
    <div className="d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="my-4">Forgot Password?</h1>

      <div className="col-5">
        <form className="mt-4">
          <div className="mb-4">
            <input
              type="email"
              className="form-control p-2"
              placeholder="Email Adress"
            />
          </div>
          <div className="login-button-section">
            <button
              type="submit"
              className="btn btn-dark login-button px-4 mt-3"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
