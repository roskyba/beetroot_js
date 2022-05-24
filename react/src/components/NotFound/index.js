import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="not_found_page">
    <h2>Page not found, please go back to one of available pages</h2>
    <Link to="/">Create Burgee</Link>
    <Link to="/orders">Go and check orders</Link>
    <Link to="/faq">Our FAQ</Link>
  </div>
);

export default NotFound;

// export default MyFooter;
