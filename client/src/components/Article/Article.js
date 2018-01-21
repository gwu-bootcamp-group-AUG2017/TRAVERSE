import React from "react";
import "./Article.css";
import { Div2} from "../../components/Grid";

const Article = ({ name, rating, _id, review, website,url }) => (
  
  <Div2 >
 
  
     


      <div className="col-lg-3 col-sm-4 portfolio-item  " >
      

       <div className="card-body ">
        <img className="img" src={url} alt='icon' /> 
              <h4 className="card-title">
                <div className="name" >{name}</div>
                
              </h4>
       <div className="rating">{rating}</div>
       <p className="review">{review}</p>
    
       <div >
        <a className="btn btn-primary btn-link text-center" href={website} rel="noopener noreferrer" target="_blank">
          Vist Their Website
        </a>
       </div>
      </div>
      </div>
 
   
  </Div2>
);

export default Article;
