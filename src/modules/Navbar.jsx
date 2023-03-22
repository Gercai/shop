import React from "react";
import img from "../clothsLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="footer d-flex justify-content-center align-items-center">
      <Link to={`/`}>
        <img
          src={img}
          alt="image"
          style={{ width: "80px", height: "auto" }}
        ></img>
      </Link>
      <ul style={{ margin: "0" }}>
        <li>
          <Link to={`/products/`}>Bekleidung</Link>
        </li>
        <li>
          <a href="#"> Marken</a>
        </li>
        <li>
          <a href="#"> Premium</a>
        </li>
        <li>
          <a href="#"> Sale</a>
        </li>
        <li>
          <a href="#"> About us</a>
        </li>
      </ul>
    </nav>
  );
};
