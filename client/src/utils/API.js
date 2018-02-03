import axios from "axios";
import filterParams from "./filterParams";

export default {

// get places data for location
  getPlaces: function(params) {
      
        return axios.get("/api/places", { params: filterParams(params) });
  },

//gets 6 day weather forecast for place
  getWeather: function(params) {
        return axios.get("/api/weather", { params: filterParams(params) });
  },
  
// Gets all saved places by user id
  getSavedPlaces: function(params) {
      return axios.get("/api/savedplaces", { params: filterParams(params) });
 
  },
 
// Deletes the saved place with the given id
  deletePlace: function(id) {
      return axios.delete("/api/savedplaces/" + id);
  },

// Saves an place to the database
  savePlaces: function(placeData,params) {
      return axios.post("/api/savedplaces", placeData);
  }
};
