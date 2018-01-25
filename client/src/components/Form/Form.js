import React from "react";
import {isLoggedIn } from '../../utils/authService';

 

const Form = props => (

   (isLoggedIn()) ? (
  <form>
 
   <div className="form-group pull-right">
  
      <h4 className="text-center">
        <strong>Where do you Want to Go?</strong>
      </h4>
      
      <input
        className="form-control text-center pull-right"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />
 
     <select type="select" className="form-control text-center pull-right" 
         value={props.price}
         name="price" 
         required
         onChange={props.handleInputChange} >
        <option defaultValue value="1">Cheap</option>
        <option value="2">Moderate</option>
        <option value="3">Expensive</option>
        <option value="4">I got a Raise</option>
   

     </select>
      



  
    <div className="text-center md-8">
 
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-md btn-danger"
      >
        Submit
      </button>
    
    </div>

    </div>
     
  </form>
   ) : (<div></div>)
);

export default Form;

