import React from "react";
import "./Places.css";
import {DivPlaces} from "../../components/Grid";
import {isLoggedIn } from '../../utils/authService';



const Places = ({ uid,name, rating, _id, review, website,url, handleClick, buttonText, date, saved, type, city }) => (
     (isLoggedIn()) ? (
  <DivPlaces>
      <div className="col-lg-3 col-sm-4 portfolio-item" >
       <div className="card-body">
   
        <img className="img" src={url} alt='icon' /> 
        <div className="name" >{name}</div>
        <div className="rating">Rating: {rating}</div>
        <div className="review">{review}</div>
         <span className="btn-group">
        <a className="btn btn-sm" href={website} rel="noopener noreferrer" target="_blank">
          Vist Website
        </a>
        <button onClick={() => handleClick(_id)} className="btn btnplace btn-sm">
          {buttonText}
        </button>
       </span>
      </div>
      
        
      </div>
  </DivPlaces>
  ) : (<div></div>)
);

export default Places;