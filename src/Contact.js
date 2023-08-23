import React, { useState } from "react";
import Data from "./data";
function Contact() {
  const [userdata, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userdata, [name]: value });
    // setUserData((prevData) => [...prevData, newData]);
    // console.log(userdata);
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userdata;
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(Data, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
          message,
        }),
      });
      if (res) {
        {
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
        }
        alert("Data Stored");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contactus-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect with our <br /> Sales Team
                  </h1>
                  <p className="main-hero-para">
                    dfsdgds dsf sfdsf sdf sdf sdf sf sfdsfsdfdsf dsf sdf dsf
                  </p>
                  <figure>
                    <img
                      src="./images/image-5.png"
                      alt="contactus"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* right side */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userdata.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userdata.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="number"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone No."
                          value={userdata.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email Address"
                          value={userdata.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control contact-input-field"
                          placeholder="Add address"
                          value={userdata.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control contact-input-field"
                          placeholder="Enter your message"
                          value={userdata.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    {/* checkbox */}
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input contact-input-field"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label main-hero-para">
                        I have read and agree all terms and condition
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
