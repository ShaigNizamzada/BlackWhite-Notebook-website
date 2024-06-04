import React from "react";
import { Link } from "react-router-dom";
import ResponsiveSlider from "../components/ResponsiveSlider";
import Description from "../components/Description";
import Blog from "../components/Blog";
import Company from "../components/Company";
const Home = () => {
  return (
    <>
      <div className="hero-section w-100">
        <div className="text-section text-center">
          <div className="text-1">We Take The</div>
          <div className="col-lg-8 mx-auto">
            <div className="lead mb-4">
              <div className="text-2">LEADING POSITIONS</div>
              <div className="text-3">in technology sector</div>
            </div>
          </div>
        </div>
        <div className="container mt-5 home-bottom-section">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <div className="section-1 p-3 card">
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
              <div className="section-1 p-3 card">
                <span className="fs-5">We Are Techno Shop</span>
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
              <div className="section-1 p-3 card">
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
      <Company />
      <div className="container">
        <h3 className="text-center my-4">
          Online Store of Household Appliances and Electronics
        </h3>
        <p className="text-center">
          The online store of equipment and electronics is one of the leading
          online stores. The band was released in 25 volumes. During this time,
          our team sent 228 cypemapkets and managed to create a powerful,
          fast-working online store. The range of online supply points is huge
          and covers all company categories available for convenience stores. In
          2019, we presented a new border policy strategy that covers all
          aspects of the company’s activities – corporate style, delivery, and
          consultant work.
        </p>
      </div>
      <ResponsiveSlider />
      <Description />
      <Blog />
    </>
  );
};

export default Home;
