import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../images/notFound.jpg"

const NotFound = () => {
  return (
    <div className="mx-auto d-flex">
      <h2 className="text-primary text-center">Page not Found</h2>
      <img className="w-50 " src={notFound} alt="" />

       <Link className="text-info " to="/">Go to Home Page</Link>

    </div>
  );
};

export default NotFound;
