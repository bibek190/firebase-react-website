import React from "react";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2> We are sorry, page not found!!</h2>
          <p>Unable to show the page as it does't exist!!</p>
          <NavLink to="/">Back to home</NavLink>
        </div>
      </div>
    </>
  );
}

export default Error404;
