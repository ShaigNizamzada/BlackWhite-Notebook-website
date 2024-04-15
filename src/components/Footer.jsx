import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <i className="fa fa-adjust" />
            <span className="ms-2 fw-bold fs-5">BlackWhite</span>
          </li>
        </ul>
        <p className="text-center text-body-secondary">CopyRight © 2019</p>
      </footer>
    </div>
  );
};

export default Footer;
