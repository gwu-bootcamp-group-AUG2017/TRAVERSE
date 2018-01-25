import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
//  getArticles: function(params) {
//    return axios.get("/api/restaurant", { params: filterParams(params) });
//  },
//   getArticles2: function(params) {
//    return axios.get("/api/hotel", { params: filterParams(params) });
 // },
   getPlaces: function(params) {
     return axios.get("/api/places", { params: filterParams(params) });
  },
   getWeather: function(params) {
    return axios.get("/api/weather", { params: filterParams(params) });
  },
  
  // Gets all saved articles
  getSavedPlaces: function() {
    return axios.get("/api/articles");
  },
 
  // Deletes the saved article with the given id
  deletePlace: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  savePlaces: function(articleData,params) {
    return axios.post("/api/articles", articleData);
  }
};
