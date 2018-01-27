import React from "react";
import "./Weather.css";
import { DivWeather} from "../../components/Grid";
//import { isLoggedIn } from '../../utils/authService';



const Weather = ({ day, max_temp, min_temp, _id, main, desc, icon }) => (
 
  <DivWeather >
       <div className="col-lg-3 col-sm-2" >
	       <img className="wimg" src={icon} alt='Icon' />     
	       <p className="wname">{day}</p>
	       <p className="wreview">High: {max_temp} Low: {min_temp}</p>
	       <p className="wname">{main}</p>
	     
       </div>
 
 
   
  </DivWeather>
 
);

export default Weather;
