import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mx-4 mt-3 mb-5">
      <Slider {...settings}>
        <div className="py-5 px-3 text-light card-1 category--section ms-3">
          <img
            src="https://woodmart.b-cdn.net/wp-content/uploads/2018/11/retail-black-friday-small-banner-3-opt.jpg.webp"
            alt=""
            width={320}
            height={180}
          />
          <div className="category-section-text">
            <h4>Smart</h4>
            <h4>Weekend</h4>
            <Link className="link text-light" to="/products">
              View More
            </Link>
          </div>
        </div>
        <div className="py-5 px-3 text-light card-1 category--section  ms-3">
          <img
            src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg"
            alt=""
            width={320}
            height={180}
          />
          <div className="category-section-text">
            <h4>Smart</h4>
            <h4>Weekend</h4>
            <Link className="link text-light" to="/products">
              View More
            </Link>
          </div>
        </div>
        <div className="py-5 px-3 text-light card-1 category--section  ms-3">
          <img
            src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg"
            alt=""
            width={320}
            height={180}
          />
          <div className="category-section-text">
            <h4>Smart</h4>
            <h4>Weekend</h4>
            <Link className="link text-light" to="/products">
              View More
            </Link>
          </div>
        </div>
        <div className="py-5 px-3 text-light card-1 category--section  ms-3">
          <img
            src="https://w0.peakpx.com/wallpaper/81/744/HD-wallpaper-gadget-tablet.jpg"
            alt=""
            width={320}
            height={180}
          />
          <div className="category-section-text">
            <h4>Smart</h4>
            <h4>Weekend</h4>
            <Link className="link text-light" to="/products">
              View More
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
