import React from "react";


const Description = () => {

  return (
    <div className="description-section bg-dark">
      <div className="container-fluid">
        <div className="row text-white">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="desc-1 p-3 text-center">
              <i class="fa-solid fa-truck fs-3 mb-4"></i>
              <h6>Free Shipping</h6>
              <p>Carrier information.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            {" "}
            <div className="desc-2 p-3 text-center">
              {" "}
              <i class="fa-regular fa-credit-card fs-3 mb-4"></i>
              <h6 className="fw-bold">ONLINE PAYMENT</h6>
              <p>Payment methods.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            {" "}
            <div className="desc-3 p-3 text-center">
              {" "}
              <i class="fa-solid fa-phone fs-3 mb-4"></i>
              <h6 className="fw-bold">24/7 SUPPORT</h6>
              <p>Unlimited help desk.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            {" "}
            <div className="desc-4 p-3 text-center">
              {" "}
              <i class="fa-solid fa-shield fs-3 mb-4"></i>
              <h6 className="fw-bold">100% SAFE</h6>
              <p>View our benefits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
