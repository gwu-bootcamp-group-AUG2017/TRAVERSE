 const axios = require("axios");
 const key = require("./config.js");

// findPlaces searches Google places API and returns results for city

module.exports = {
  findPlaces: function(req, res) {
// get parameters and create query string for API calls    
    var city = req.query.q;
    var type = "&type=" + req.query.type;
    var type2 = req.query.type2;
    var pricex = req.query.price -1;
    var price = "&minprice=" + pricex + "&maxprice=" + req.query.price;
    var session = req.query.session;

// api key from config file 
    var APIkey = "&key=" + key.PLACES_KEY;
    var Geokey = key.GEO_KEY;

// query string for first API call
    var query =  "query=" + city +  type +  price + "&limit=8&rankby=prominence" + APIkey;
    if(req.query.type == 'lodging') {
        query =  "query=" + city +  type  + "&limit=8&rankby=prominence" + APIkey;
    }
    var geoQuery = "address=" + req.query.q + "&key=" + Geokey;
 
    // use geocode to get lat and long coordiantes for weather API 
        axios
            .get("https://maps.googleapis.com/maps/api/geocode/json?"+geoQuery)
            .then(response => {

 // build query string for weather API CALL
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var location = lat + ","  + lng;
//            var query =  "query=" + city+ type + "&location=" + location + "&radius=10000" + "&limit=4" + APIkey;
//            console.log(query);
// call textsearch API using query string 
  axios
    .get("https://maps.googleapis.com/maps/api/place/textsearch/json?"+query)
    .then(response => {
        var resultLen = 8;
        if (response.data.results.length < 8) {
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
        
            // maybe we need this for later ??
            var photo = "";
            var url = "";
            var review = "";
     
//            if (response.data.result.photos == undefined) { continue; }
                 
//                url = "https://emojipedia.org/smiling-face-with-smiling-eyes/";
//            } else {  
 
      

            if (response.data.result.reviews == undefined || response.data.result.photos == undefined) {
   
            } else {  
                review = response.data.result.reviews[0].text;
                  photo = response.data.result.photos[0].photo_reference;
                url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=254&maxheight=200&photoreference=" + photo + APIkey
                id ++;
 
          
 //              id ++;
            // format photo icon           
//           var photo = response.data.result.photos[0].photo_reference;
//           var url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=254&maxheight=200&photoreference=" + photo + APIkey
// load each place into object  
          if (id <= 4){        
            somedata.places.push({  _id : id,
                "uid" :     session,
                "type" :    type2,
                "city" :    city,
                "name" :    response.data.result.name,
                "url" :     url,
                "rating" :  response.data.result.rating,
                "website" : response.data.result.website,
                "review" :  review.substring(0,255)});
             };
           }
// complete return data with fake call 
              if (id == 3){
                axios
                  .get("https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id +APIkey )
                  .then(result =>res.json(somedata.places))
                  .catch(err => res.status(422).json(err));

              }
            });
        }

      })
    });
  }
};