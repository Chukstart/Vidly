import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Route>
          <NavLink className="nav-item nav-link" to="/movies">
            Movie
          </NavLink>
          <NavLink className="nav-item nav-link" to="/movies">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/movies">
            Rentals
          </NavLink>
        </Route>
      </div>
    </div>
  );
};

export default NavBar;
