import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="text-section text-center">
        <div className="text-1">We Take The</div>
        <div className="col-lg-8 mx-auto">
          <div className="lead mb-4">
            <div className="text-2">LEADING POSITIONS</div>
            <div className="text-3">in agency sector</div>
          </div>
        </div>
      </div>
      <div className="container mt-5 home-bottom-section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="section-1 p-3">
              <span className="fs-5 mb-2">What We Do</span>
              <h4 className="mt-2 fw-bold">Our Services</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                animi molestias eum ratione et ut molestiae dolorem hic
                laboriosam quaerat!
                <Link className="readmore" to="/services">
                  &nbsp;Read More &rarr;
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="section-1 p-3">
              <span className="fs-5">We Are Agency</span>
              <h4 className="mt-2 fw-bold">About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                animi molestias eum ratione et ut molestiae dolorem hic
                laboriosam quaerat!
                <Link className="readmore" to="/aboutus">
                  &nbsp;Read More &rarr;
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="section-1 p-3">
              <span className="fs-5">What Clients</span>
              <h4 className="mt-2 fw-bold">Say About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                animi molestias eum ratione et ut molestiae dolorem hic
                laboriosam quaerat!
                <Link className="readmore" to="/aboutus">
                  &nbsp;Read More &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
