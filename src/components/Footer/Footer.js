import React from "react";
import "./styles.css";
import { Facebook, Twitter, Linkedin, Instagram } from "react-feather";

export default function Footer() {
  return (
    <footer>
      <div className="coll-1">
        <h4>Find us</h4>
        <Facebook />
        <Twitter />
        <Linkedin />
        <Instagram />
      </div>
      <div className="coll-2">
        <h4>Lorem ipsum</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      </div>
      <div className="coll-3">
        <h4>Ipsum lorem</h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="company-tag">Powered by BlueGrid</div>
    </footer>
  );
}
