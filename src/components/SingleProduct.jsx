import React from "react";
import { Link, useNavigate } from "react-router-dom";
import slug from "react-slugify";
import { useCart } from "react-use-cart";
const SingleProduct = ({ title, image, ram, cpu, gpu, id, desc, alldata }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-md-4 col-md-6 col-12">
      <div className="card">
        <img
          src={image[0]}
          height={200}
          style={{ objectFit: "contain" }}
          className="card-img-top p-1 mt-2"
          alt="tech"
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 40)}</h5>
          <p className="card-text">
            <p>
              <strong>Ram</strong> : {ram}
            </p>
            <p>
              <strong>CPU</strong> : {cpu.slice(0, 13)}...
            </p>
            <p>
              <strong>GPU</strong> : {gpu.slice(0, 10)}...
            </p>
            <p>
              <strong>About</strong> : {desc.slice(0, 20)}...
            </p>
          </p>
          <Link
            to={`/products/${slug(title)}`}
            className="btn btn-outline-dark mt-3"
          >
            View More
          </Link>
          <button
            onClick={() => {
              localStorage.getItem("login") === "true"
                ? addItem(alldata)
                : navigate("/login");
            }}
            className="btn btn-dark mt-3 mx-3"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
