import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useCart } from "react-use-cart";
import { TbUser } from "react-icons/tb";

const Header = () => {
  const { totalItems } = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid p-2">
        <NavLink className="navbar-brand ms-5" to="/">
          <i class="fa fa-adjust" />
          <span className="fw-bold fs-5">BlackWhite</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/aboutus">
                About Us
              </NavLink>
            </li>
          </ul>
          <Link
            to={localStorage.getItem("login") === "true" ? "/cart" : "/login"}
            type="button"
            className="btn btn-dark position-relative me-3 shopping-cart"
          >
            <LuShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
              {localStorage.getItem("login") === "true" ? totalItems : 0}
            </span>
          </Link>

          {localStorage.getItem("login") === "true" ? (
            <div className=" mt-2">
              <Link to="/account" className="my-profile">
                <TbUser />
                {localStorage.getItem("fullname")}
              </Link>
            </div>
          ) : (
            <div>
              <Link className="login" to="/login">
                <button type="button" className="btn btn-dark me-3">
                  Sign in
                </button>
              </Link>
              <Link className="register" to="/register">
                <button type="button" className="btn btn-dark me-5">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
