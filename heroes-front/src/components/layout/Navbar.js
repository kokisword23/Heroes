import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isLogged }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
      <div className="container">
        {isLogged && (
          <Link className="navbar-brand js-scroll-trigger" to="/home">
            Heroes
          </Link>
        )}
         {!isLogged && (
          <Link className="navbar-brand js-scroll-trigger" to="/">
            Heroes
          </Link>
        )}
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            {isLogged && (
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/logout">
                  Logout
                </Link>
              </li>
            )}
            <li className="nav-item">
              {!isLogged && (
                <Link className="nav-link js-scroll-trigger" to="/users/login">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!isLogged && (
                <Link className="nav-link js-scroll-trigger" to="/">
                  Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
