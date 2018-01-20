import React from "react";
import "./Weather.css";
import { Div3} from "../../components/Grid";


const Weather = ({ day, max_temp, min_temp, _id, main, desc, icon }) => (
  
  <Div3 >
 
  
    


      <div className="col-lg-3 col-sm-2 " >
      

    
        
        <img className="wimg" src={icon}  />     
       <p className="wname">{day}</p>
       <p className="wreview">High:{max_temp} Low:{min_temp}</p>
       <p className="wreview">{main}</p>
  
       
      </div>
 
 
   
  </Div3>
);

export default Weather;
