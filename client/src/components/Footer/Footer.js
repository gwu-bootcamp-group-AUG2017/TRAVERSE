import React from "react";
import "./Footer.css";
import {isLoggedIn } from '../../utils/authService';
const Footer = () => (

	 (isLoggedIn()) ? (
  <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center  footerp">TRAVERSE - Copyright &copy; Dream Team LLC 2018</p>
      </div>
 
  </footer>   
   
  	 ) : (<div></div>)
);

export default Footer;
