 const axios = require("axios");


// Defining methods for the nytController

// findAll searches the NYT API and returns only the entries we haven't already saved
 module.exports = {
  findAll: function(req, res) {
    var city = JSON.stringify(req.query.q);
    var type = JSON.stringify(req.query.type);
    city = city.replace(",", "+");
    city = city.replace("\"", " ");
    city = city.replace("\"", " ");
    city = city.trim().replace(" ", "+");
    type = type.replace("\"", " ");
    type = type.replace("\"", " ");
    var query = "query=" + city + "&type=" + type.trim() + '&rankby=prominence&key=AIzaSyBGxXK3pm9NbMHCeqa6TcdWJxzGfI2TwG4';
 
  
    axios
      .get("https://maps.googleapis.com/maps/api/place/textsearch/json?"+query)
     .then(response => {
       var resultLen = 4;
       if (response.data.results.length < 4) {
            resultLen = response.data.results.length;
        }
      
        var somedata = {
          hotels: []
        };
        var id = 0;
        for (var i = 0; i < resultLen; i++) {
          var place_id = response.data.results[i].place_id;
          axios
          .get("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id + "&key=AIzaSyBGxXK3pm9NbMHCeqa6TcdWJxzGfI2TwG4" )
         .then(response => {
            id ++;
            var photo = response.data.result.photos[0].photo_reference;
            var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=254&maxheight=200&photoreference=" + photo + "&key=AIzaSyBGxXK3pm9NbMHCeqa6TcdWJxzGfI2TwG4"
 
         somedata.hotels.push({  id : id,
                  "name" : response.data.result.name,
                  "url" : url,
                  "rating" :  response.data.result.rating,
                  "website" : response.data.result.website,
                  "review" : response.data.result.reviews[0].text });

       if (id == 3){
          axios
          .get("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id + "&key=AIzaSyBGxXK3pm9NbMHCeqa6TcdWJxzGfI2TwG4" )
         .then(result =>res.json(somedata.hotels))
          .catch(err => res.status(422).json(err));
        }
         });

        }
 

      });
 
  }
 };