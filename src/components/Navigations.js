import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Navigations() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tools">Tools</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/follow">Follow</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contactus">Contact Us</Link>
      </li>
    </ul>
  );
}

export default Navigations;
