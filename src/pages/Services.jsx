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
                <img
                  src="https://sifugeek.uk/wp-content/uploads/best-time-hardware-repairs-1024x682.jpg"
                  className="card-img-top"
                  alt="banner"
                  width={50}
                  height={210}
                />
                <div className="card-body card">
                  <h5 className="card-title fw-bold">
                    Notebook Repair & Upgradess
                  </h5>
                  <p>Hardware Repair & Replacement</p>
                  <hr />
                  <p className="card-text">
                    Keep your notebooks running smoothly with our expert repair
                    and upgrade services. Whether it’s a software issue, our technicians ensure your device
                    performs at its best. Enhance your productivity with memory
                    upgrades, and performance optimization. <br />
                    <Link className="readmore" to="/">
                      Read More &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card mb-5">
                <img
                  src="https://previews.123rf.com/images/nddcenter/nddcenter1607/nddcenter160700095/61712489-showing-process-of-mobile-phone-repair-change-iphone-5-screen.jpg"
                  className="card-img-top"
                  alt="banner"
                  width={50}
                  height={210}
                />
                <div className="card-body card">
                  <h5 className="card-title fw-bold">
                    Cellphone Repair & Customization
                  </h5>
                  <p>Screen Repair & Replacement</p>
                  <hr />
                  <p className="card-text">
                    Stay connected with our reliable cellphone repair services.
                    From screen replacements to battery issues, we handle all
                    types of cellphone problems. Personalize your device with
                    custom skins and accessories to reflect your unique style.
                    <Link className="readmore" to="/"> <br />
                      Read More &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card mb-5">
                <img
                  src="https://images.ctfassets.net/16nm6vz43ids/6fXVLoGo5UYz2yD4FHzxGD/6915ebbc4b172f6755b0afdb8100217a/Repair_or_replace_tablet.jpg"
                  className="card-img-top"
                  alt="banner"
                  width={50}
                  height={210}
                />
                <div className="card-body card">
                  <h5 className="card-title fw-bold">
                    Tablet Repair & Enhancements
                  </h5>
                  <p>Performance Enhancements</p>
                  <hr />
                  <p className="card-text">
                    Maximize the utility of your tablets with our comprehensive
                    repair and enhancement services. Whether you use it for
                    work, study, or play, we ensure tablet operates
                    seamlessly. Get assistance with cracked screens,performance boosts. <br />
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
