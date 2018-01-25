import React from "react";
import "./Places.css";
import {DivPlaces} from "../../components/Grid";
import {isLoggedIn } from '../../utils/authService';


const Places = ({ name, rating, _id, review, website,url, handleClick, buttonText, date, saved, type, city }) => (
   (isLoggedIn()) ? ( 
  <DivPlaces>
      <div className="col-lg-3 col-sm-4 portfolio-item  " >
       <div className="card-body ">
        <img className="img" src={url} alt='icon' /> 
              <h4 className="card-title">
                <div className="name" >{name}</div>
              </h4>
       <div className="rating">{rating}</div>
       <p className="review">{review}</p>
         
       <div >
        <a className="btn btn-primary text-center" href={website} rel="noopener noreferrer" target="_blank">
          Vist Their Website
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {buttonText}
        </button>
       </div>
      </div>
      </div>
  </DivPlaces>
   ) : (<div></div>)
);

export default Places;
