import React from "react";

function Header() {
  return (
    <>
      <header>
        <section className="container main-hero-container p-5 d-flex justify-content-center">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
                Online Payment Made <br /> Easy for You
              </h1>
              <p className="main-hero-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo vitae earum, veniam quod dolore magnam deleniti amet
                repellendus excepturi nam.
              </p>
              <h3>Get Early access to you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"
                />
                <div className="input-group-button ">Get it Now</div>
              </div>
            </div>
            {/* main header rigth side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/image-1.png"
                alt="heroimg"
                className="img-fluid "
              />
              <img
                src="./images/image-2.png"
                alt="heroimg"
                className="img-fluid main-hero-img2 "
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
