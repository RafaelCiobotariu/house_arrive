import React from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <section className="navbar-header">
          <Link to="/" className="navbar-link">
            <h1 className="navbar-title">HouseArrive</h1>
          </Link>
          <p className="navbar-under-title">
            Welcome to HouseArrive, <span>find your dream home</span>
          </p>
        </section>
        <section className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/map" className="navbar-link">
            Map
          </Link>
          <Link to="/login" className="navbar-link">
            Login/Logout
          </Link>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
          <Link to="/location/add" className="navbar-link">
            Add location
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
