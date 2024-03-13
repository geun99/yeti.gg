import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <Link to="/" className="nav-main">
          YETI.GG
        </Link>
        <Link to="/monster">Monster</Link>
        <Link to="/item">Item</Link>
      </div>
    </nav>
  );
};

export default Navbar;
