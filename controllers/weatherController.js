 const axios = require("axios");
 const key = require("./config.js");
 
// getWeather calls openweathermap API to get 6 day forecast 
module.exports = {
 

  getWeather: function(req, res) {
// GET API keys from config file and build query string  
     var APIkey = "&APPID=" + key.WEATHER_KEY;
     var Geokey = key.GEO_KEY;
     var geoQuery = "address=" + req.query.q + "&key=" + Geokey;
      
// use geocode to get lat and long coordiantes for weather API 
        axios
            .get("https://maps.googleapis.com/maps/api/geocode/json?"+geoQuery)
            .then(response => {
// build query string for weather API CALL
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var  query = "lat=" + lat + "&lon=" + lng + '&units=imperial&cnt=6' + APIkey; 
// call weather API
        axios
            .get("http://api.openweathermap.org/data/2.5/forecast/daily?"+query)
            .then(response => { 
// obj to return results            
             var somedata = {
                  weather: []
              };
// dummy id field
              var id = 0;
// loop thru results and push data for each day to return obj    
              for (var i = 0; i < response.data.list.length; i++) {
                  id ++;
                  // format date 
                  var myDate = new Date(response.data.list[i].dt * 1000);
                  var x = myDate.toDateString();
                  var y = x.length-4;
// format icon max temp min temp
                  var iconCode = response.data.list[i].weather[0].icon;
                  var icon = "http://openweathermap.org/img/w/" + iconCode + ".png";
                  var maxtemp = Math.round(response.data.list[i].temp.max);
                  var mintemp = Math.round(response.data.list[i].temp.min);
// push data to object for each day
                  somedata.weather.push({  _id : id,
                      "day" :         x.substring(0, y),
                      "max_temp" :    maxtemp,
                      "min_temp" :    mintemp,
                      "main" :        response.data.list[i].weather[0].main,
                      "desc" :        response.data.list[i].weather[0].description,
                      "icon" :        icon });
// complete return data with fake call 
                  if (id == 5){
                    axios
                      .get("http://api.openweathermap.org/data/2.5/forecast/daily?"+query)
                      .then(result =>res.json(somedata.weather))
                      .catch(err => res.status(422).json(err));
                  } 
              }
        })
      });
  }
}