 const axios = require("axios");
 const key = require("./config.js");

// findPlaces searches Google places API and returns results for city

module.exports = {
  findPlaces: function(req, res) {
// get parameters and create query string for API calls    
    var city = req.query.q;
    var type = "&type=" + req.query.type;
    var type2 = req.query.type2;
    var price = "&maxprice=" + req.query.price;
    var session = req.query.session;

// api key from config file 
    var APIkey = "&key=" + key.PLACES_KEY;

// query string for first API call
    var query =  "query=" + city +  type + "&limit=4" + APIkey;

// call textsearch API using query string 
    axios
      .get("https://maps.googleapis.com/maps/api/place/textsearch/json?"+query)
      .then(response => {
          var resultLen = 4;
          if (response.data.results.length < 4) {
            resultLen = response.data.results.length;
          }
 
        // obj to return results  
        var somedata = {
          places: []
        };
        // dummy id field
        var id = 0;

// loop thru results and use placeid from above to get details for each place       
        var id = 0;
        for (var i = 0; i < resultLen; i++) {
          var place_id = response.data.results[i].place_id;
          axios
          .get("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id + APIkey )
         .then(response => {
            id ++;
            if (response.data.result.photos == undefined){
      //         console.log("crap");
     //          console.log(response.data.results[i]);
    //            photo = response.data.results[i].photos[0].photo_reference;
            } else {  
      //                  console.log("lot of crap");
      //                  console.log(response.data.results[i]);
      //                   photo = response.data.result.photos[0].photo_reference;
           };
           
            var photo = response.data.result.photos[0].photo_reference;
            var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=254&maxheight=200&photoreference=" + photo + APIkey
         
         somedata.places.push({  _id : id,
                  "uid" :     session,
                  "type" :    type2,
                  "city" :    city,
                  "name" :    response.data.result.name,
                  "url" :     url,
                  "rating" :  response.data.result.rating,
                  "website" : response.data.result.website,
                  "review" :  response.data.result.reviews[0].text});

       if (id == 3){
           axios
          .get("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id +APIkey )
          .then(result =>res.json(somedata.places))
          .catch(err => res.status(422).json(err));
        }
         });

        }

      });
  }
};