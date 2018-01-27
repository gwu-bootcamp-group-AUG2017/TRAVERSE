import React from "react";
import "./SavedPlaces.css";
import {Div} from "../../components/Grid";
import formatDate from "../../utils/formatDate";

const SavedPlaces = ({ name, rating, _id, review, website,url,handleClick, buttonText, date, saved, type, city }) => (
 
 <Div className="div"> 
        
    <div className="div"></div>

    <div><img className="img2" src={url} alt='icon' /></div>   
    <div className="place" >{name}</div>
    <div className="type" >{type} in {city}</div>
    <div className="prating">Rating: {rating}</div>
    <div className="date">Date {saved ? "Saved" : "Published"}: {formatDate(date)}</div>
    <div className="div2">{review}</div>

    <span className="btn-group pull-right">
         <a className="btn btnplace  text-center" href={website} rel="noopener noreferrer" 
            target="_blank">Vist Their Website</a>
         <button onClick={() => handleClick(_id)} className=" btn btnclass ">
         {buttonText}</button>
    </span>
    
  </Div>

);

export default SavedPlaces;
