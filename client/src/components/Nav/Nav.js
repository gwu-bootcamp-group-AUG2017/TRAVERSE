import React from "react";
import { Link } from "react-router-dom";
import { login, logout, isLoggedIn } from '../../utils/authService';
import "./Nav.css";

const Nav = () => (
   <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand " to="/">
          TRAVERSE - Eat Sleep Play
        </Link>

      </div>
      <div className="collapse navbar-collapse ">
        <ul className="nav navbar-nav mr-auto">
          <li >
            <Link to="/places">Search Places</Link>
          </li>
           <li>
            <Link to="/">Add New Place</Link>
          </li>
          <li>
            <Link to="/saved">Saved Travelers</Link>
          </li>
           <li>
            <a href="https://www.southwest.com/">Get There</a>
          </li>
          <li>
           {
             (isLoggedIn()) ? ( <a href='#' onClick={() => logout()}>Log out </a> ) : ( <a href='#' onClick={() => login()}>Log In</a> )
           }
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;

