import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-section mt-5">
      <div className="blog-container">
        <div className="container">
          <div className="blog-title">
            <h3 className="fw-bold mb-3">Our Articles</h3>
          </div>
          <div className="row g-3">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card">
                <img
                  src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/best-gaming-laptop-model-entry-header.jpg"
                  className="card-img-top"
                  height={310}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold"> Best Gaming Laptops</h4>
                  <p className="card-text">
                    Best gaming laptop models combine powerful performance with
                    sleek designs. Top picks include ASUS ROG Zephyrus, Razer
                    Blade, and Alienware m15, featuring high-end GPUs, fast
                    processors, and superior cooling systems.
                  </p>
                  <Link to="/products" className="btn btn-dark">
                    Buy now!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card">
                <img
                  src="https://www.soliton.az/images/articles/2023/09/14/20230914030417805_c1_1.jpg"
                  className="card-img-top"
                  height={310}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">iPhone 15 Pro</h4>
                  <p className="card-text">
                    Apple's latest flagship, the iPhone 15 Pro, offers
                    cutting-edge technology with its A17 Bionic chip, stunning
                    OLED display, and advanced camera system. Perfect for those
                    who want the best of the best.
                  </p>
                  <Link to="/products" className="btn btn-dark">
                    Buy now!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card">
                <img
                  src="https://images.samsung.com/tr/galaxy-tab-s9/feature/galaxy-tab-s9-kv-pc.jpg"
                  className="card-img-top"
                  style={{ objectFit: "cover" }}
                  height={310}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">Samsung Galaxy Tab S9</h4>
                  <p className="card-text">
                    With its Super AMOLED display and powerful Exynos processor,
                    the Galaxy Tab S9 is ideal for media consumption and
                    productivity. It also supports the S Pen for enhanced
                    creativity and superior cooling systems.
                  </p>
                  <Link to="/products" className="btn btn-dark">
                    Buy now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
