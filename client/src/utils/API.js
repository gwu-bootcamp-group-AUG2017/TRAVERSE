import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
   getArticles2: function(params) {
    return axios.get("/api/restaurant", { params: filterParams(params) });
  },
   getArticles3: function(params) {
    return axios.get("/api/nightclubs", { params: filterParams(params) });
  },
   getWeather: function(params) {
    return axios.get("/api/weather", { params: filterParams(params) });
  },
  
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets all saved articles
  getLocations: function() {
    return axios.get("/api/articles");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
