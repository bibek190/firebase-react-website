import React from "react";
import Error404 from "../Error404";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Error() {
  return (
    <div>
      <Navbar />
      <Error404 />
      <Footer />
    </div>
  );
}

export default Error;
