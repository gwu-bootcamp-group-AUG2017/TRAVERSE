 const axios = require("axios");
 const key = require("./config.js");

// Defining methods for the nytController

// findAll searches the NYT API and returns only the entries we haven't already saved
 module.exports = {
  findAll: function(req, res) {
     var query = req.query.q;
     console.log(query);
     var APIkey = "&APPID=" + key.WEATHER_KEY;
 //    console.log(APIkey);
//    query = query.replace(",","+");
//    query = query.substring(5);
//    var quer= query.replace(",", "+");
//    quer = quer.replace("\"", " ");
//    quer= quer.replace("}", "");
    
//    db.Article
    query = 'q=' + query.trim() + '&units=imperial&cnt=6' + APIkey;
  

    axios
        .get("http://api.openweathermap.org/data/2.5/forecast/daily?"+query)
        .then(response => { 
             var somedata = {
                  weather: []
              };
              var id = 0;
    
              for (var i = 0; i < response.data.list.length; i++) {
                  id ++;
                  var myDate = new Date(response.data.list[i].dt * 1000);
                  var x = myDate.toDateString();
                  var y = x.length-4;
                  var iconCode =response.data.list[i].weather[0].icon;
                  var url = "http://openweathermap.org/img/w/" + iconCode + ".png";
                  somedata.weather.push({  id : id,
                      "day" :  x.substring(0, y),
                      "max_temp" : Math.round(response.data.list[i].temp.max),
                      "min_temp" : Math.round(response.data.list[i].temp.min),
                      "main" : response.data.list[i].weather[0].main,
                      "desc" : response.data.list[i].weather[0].description,
                      "icon" : url });
                 if (id == 5){
                    axios
                        .get("http://api.openweathermap.org/data/2.5/forecast/daily?"+query)
                       .then(result =>res.json(somedata.weather))
                       .catch(err => res.status(422).json(err));
                 } 
  
              }
         })
  }
}