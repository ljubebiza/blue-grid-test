import React from "react";
import logo from "../../images/logo.png";
import NavBar from "../parts/NavBar";
import "./styles.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-holder">
          <img alt="Logo" src={logo} />
          <div className="logoText">Logo</div>
        </div>
        <NavBar />
      </div>
    </>
  );
}
