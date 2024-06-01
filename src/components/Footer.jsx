import React from "react";

const Footer = () => {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top py-5 mt-5">
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <a href="/">
          <h3 className="ms-3 mt-2 text-black fw-bold">BlackWhite</h3>
        </a>
        <p className="mt-5 col-lg-11 fs-6 ms-3">
          The online store of equipment and electronics is one of the leading
          online stores. The band was released in 25 volumes.
        </p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <h4 className="mt-2 ps-3 "> Useful Links</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span> About Us</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <span> Contact Us</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Sale
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <h4 className="mt-2 ps-3">Categories</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/products">
              PC
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Laptop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Tablet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              SmartPhones
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12">
        <h4 className="mt-2 ps-3">Social Links</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.instagram.com/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://twitter.com/home"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.youtube.com/"
              target="_blank"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
