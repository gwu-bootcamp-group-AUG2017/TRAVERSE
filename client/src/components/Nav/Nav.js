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
        <ul className="nav navbar-nav">

          <li >
               {(isLoggedIn()) ? ( <a className="lix" href='#logout' onClick={() => logout()}>Log out </a> ) : ( <a className="lix" href='#login' onClick={() => login()}>Log In</a> ) }
          
              {(isLoggedIn()) ? (<Link to="/" className="lix">Search Places </Link> ) : ( "" ) }
              {(isLoggedIn()) ? (<Link to="/saved" className="lix"> Saved Places   </Link> ) : ( "" ) }
              {(isLoggedIn()) ? ( <a href="https://www.southwest.com/">
                                   <img className="airline" src="../assets/img/sw4.png" alt="Smiley face" ></img></a> ) : ( "" ) }
              {(isLoggedIn()) ? ( <a href="https://www.aa.com/">
                                   <img className="airline" src="../assets/img/american.jpeg" alt="Smiley face" ></img></a> ) : ( "" ) }
               {(isLoggedIn()) ? ( <a href="https://www.united.com/">
                                   <img className="airline" src="../assets/img/united.jpeg" alt="Smiley face" ></img></a> ) : ( "" ) }
                {(isLoggedIn()) ? ( <a href="https://www.hertz.com/">
                                   <img className="airline" src="../assets/img/hertz.jpeg" alt="Smiley face" ></img></a> ) : ( "" ) }                   
      
          </li>

       
          
          
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;

