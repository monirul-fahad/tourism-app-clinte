import React from "react";
import "./NotFound.css";
const NotFond = () => {
  return (
    <div className="error">
      <div className="container text-center mt-5 pt-5 text-danger">
        <h1 className="h1">404</h1>
        <p className="p">Not Found</p>
        <p className="p2">
          <small>
            The resource requested could not be found on this server.
          </small>
        </p>
      </div>
    </div>
  );
};

export default NotFond;
