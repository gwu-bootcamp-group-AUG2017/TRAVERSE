import React from "react";
import "./Article.css";
import { DivPlaces} from "../../components/Grid";

const Article = ({ name, rating, _id, review, website,url }) => (
  
  <DivPlaces >
 
  
     


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
       </div>
      </div>
      </div>
 
   
  </DivPlaces>
);

export default Article;
