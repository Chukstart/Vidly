import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="#" className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="s"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/movies" className="nav-item nav-link">
            Movies
          </NavLink>

          <NavLink to="/customers" className="nav-item nav-link">
            Customers
          </NavLink>
          <NavLink to="rentals" className="nav-item nav-link">
            Rentals
          </NavLink>
          <NavLink to="login" className="nav-item nav-link">
            Login
          </NavLink>
          <NavLink to="register" className="nav-item nav-link">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
