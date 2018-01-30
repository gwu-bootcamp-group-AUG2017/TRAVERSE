import React from "react";
import {isLoggedIn } from '../../utils/authService';


const Form = props => (

    (isLoggedIn()) ? (
  <form>
 
   <div className="form-group pull-right border-class">
  
      <h4 className="text-center h4">
        <strong>Where do you Want to Go?</strong>
      </h4>
      <p className="input-text">Enter City and State/Country</p>
      <input
        className="form-control text-center pull-right input-field"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />
        <p className="input-text">Choose Price level</p>
     <select type="select" className="form-control text-center pull-right input-field" 

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
        className="btn btn-md btn_submit btn-danger"
      >
        Submit
      </button>
    
    </div>

    </div>
     
  </form>
   ) : (<div></div>)
);

export default Form;

