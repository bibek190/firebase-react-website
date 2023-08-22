import React, { useState } from "react";
import howToUseApp from "./API/howToUse";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            {/* side */}
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/image-3.png" alt="image3" />
            </div>
            {/* otherside */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @ GOOGLE AND IOS APP STORE
              </h3>
              <h1 className="main-heading">How to use this app?</h1>
              {aboutData.map((information) => {
                const { title, id, info } = information;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
