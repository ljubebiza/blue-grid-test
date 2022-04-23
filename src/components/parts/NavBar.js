import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-holder">
      <nav>
        <NavLink to="/contact" className="item">
          Contact
        </NavLink>
        <NavLink to="/about-us" className="item">
          About us
        </NavLink>
        <NavLink to="/" className="item">
          Home
        </NavLink>
      </nav>
    </div>
  );
}
