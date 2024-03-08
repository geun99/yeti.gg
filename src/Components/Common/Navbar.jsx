import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <a href="/" className="nav-main">
        YETI.GG
      </a>
      <Link to="/monster">Monster</Link>
      <Link to="/item">Item</Link>
    </nav>
  );
};

export default Navbar;
