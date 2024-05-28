import React from "react";
import { Link } from "react-router-dom";
import banner01 from "../assets/photo/banner01.jpg";
import banner02 from "../assets/photo/banner02.jpg";
import banner03 from "../assets/photo/banner03.jpg";
const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container text-center mb-5 mt-2">
          <span className="header-text-1">What We Do</span>
          <h5 className="header-text-2">Our Services</h5>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card mb-5">
                <img src={banner01} className="card-img-top" alt="banner" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Integer Sit Rhoncus</h5>
                  <p>Nulla laoreet vestibiulunm deryosh lorem</p>
                  <hr />
                  <p className="card-text">
                    Vestibulum at sem semper, varius lectus pellentque, blandit
                    justo. Ut vel elit ullamcorper, sollicitudin consectetur
                    ipsum.
                    <Link className="readmore" to="/">
                      Read More &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card mb-5">
                <img src={banner02} className="card-img-top" alt="banner" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Mauris With Quam</h5>
                  <p>Nulla laoreet vestibiulunm deryosh lorem</p>
                  <hr />
                  <p className="card-text">
                    Vestibulum at sem semper, varius lectus pellentque, blandit
                    justo. Ut vel elit ullamcorper, sollicitudin consectetur
                    ipsum.
                    <Link className="readmore" to="/">
                      Read More &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card mb-5">
                <img src={banner03} className="card-img-top" alt="banner" />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">Quam Pellentesque Sit</h5>
                  <p>Nulla laoreet vestibiulunm deryosh lorem</p>
                  <hr />
                  <p className="card-text">
                    Vestibulum at sem semper, varius lectus pellentque, blandit
                    justo. Ut vel elit ullamcorper, sollicitudin consectetur
                    ipsum.
                    <Link className="readmore" to="/">
                      Read More &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="services-section-2">
            <div className="text-section-services text-center mt-5">
              <span>We Are</span>
              <h1>BLACK WHITE</h1>
              <p>we are working for your brand shine</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
