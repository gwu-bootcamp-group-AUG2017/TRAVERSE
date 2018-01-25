import React from "react";
import "./Article.css";
import {Div} from "../../components/Grid";

import formatDate from "../../utils/formatDate";

const Article = ({ name, rating, _id, review, website,url,handleClick, buttonText, date, saved, type, city }) => (
 
 <Div className="div" >
              <div className="div"></div>
         
               <img className="img" src={url} alt='icon' /> 
               <div className="place" >{name}</div>
              <div className="type" >Type: {type} in {city}</div>
             
              
              <div className="prating">Rating: {rating}</div>
               <div className="date">Date {saved ? "Saved" : "Published"}: {formatDate(date)}</div>
                

          <div className="div">{review}</div>
         

         <span className="btn-group pull-right">
        <a className="btn btnplace  text-center" href={website} rel="noopener noreferrer" target="_blank">
          Vist Their Website
        </a>
        <button onClick={() => handleClick(_id)} className=" btn btnplace ">
          {buttonText}</button>
       </span>
    
    
   
 
   
  </Div>

);

export default Article;