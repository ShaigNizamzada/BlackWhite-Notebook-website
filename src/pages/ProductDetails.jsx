import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import slug from "react-slugify";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
  const [product] = useContext(ProductContext);
  const { addItem } = useCart();
  const { url } = useParams();
  const navigate = useNavigate();
  const detailProduct = product.filter(
    (item) => slug(item.title.toString()) === url
  );
  console.log(detailProduct[0]);
  return (
    <>
      {product.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-5 text-center ">
                {detailProduct[0].title}
              </h1>
              <div className="cargo d-flex justify-content-between align-items-center fw-bold">
                <p>Faizsiz kredit təklifi</p>
                <p>
                  <i className="fa-solid fa-truck-fast text-seconday"></i>{" "}
                  Çatdırılma pulsuzdur
                </p>
              </div>
              <p>
                <span className="fw-bold">Ram : </span> {detailProduct[0].ram}
              </p>
              <p>
                <span className="fw-bold">CPU : </span> {detailProduct[0].cpu}
              </p>
              <p>
                <span className="fw-bold">GPU : </span>
                {detailProduct[0].gpu}
              </p>
              <p>
                <span className="fw-bold">Display : </span>{" "}
                {detailProduct[0].display}
              </p>
              <p>
                <span className="fw-bold">Price : </span>{" "}
                {detailProduct[0].price} manat
              </p>
              <p>{detailProduct[0].description}</p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  to="/products"
                  type="button"
                  className="btn btn-outline-dark btn-lg px-4 me-md-2 mt-5"
                >
                  Go Back
                </Link>
                <button
                  className="btn btn-dark btn-lg px-4 me-md-2 mt-5"
                  onClick={() => {
                    localStorage.getItem("login") === "true"
                      ? addItem(detailProduct[0])
                      : navigate("/login");
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {detailProduct[0].images.map((item, c) => (
                    <div className={`carousel-item ${c === 0 ? "active" : ""}`}>
                      <img
                        src={item}
                        style={{ objectFit: "contain", height: "300px" }}
                        className="d-block w-100"
                        alt="product"
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
