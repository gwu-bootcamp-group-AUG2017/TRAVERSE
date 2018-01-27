import axios from "axios";
import filterParams from "./filterParams";

export default {
 
   getPlaces: function(params) {
     return axios.get("/api/places", { params: filterParams(params) });
  },
   getWeather: function(params) {
    return axios.get("/api/weather", { params: filterParams(params) });
  },
  
  // Gets all saved articles
  getSavedPlaces: function() {
    return axios.get("/api/savedplaces");
  },
 
  // Deletes the saved article with the given id
  deletePlace: function(id) {
    return axios.delete("/api/savedplaces/" + id);
  },
  // Saves an article to the database
  savePlaces: function(articleData,params) {
 
    return axios.post("/api/savedplaces", articleData);
  }
};
