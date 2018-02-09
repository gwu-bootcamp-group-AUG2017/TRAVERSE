# TRAVERSE

A one stop travel portal to display info for a given location by price range using Google Places API data

A 'React.js Node.js Mongodb  webapp that displays Travel data for a city for Resturants, Hotels and Night Clubs

#### Where Do You Want to Go ?

Please check out the deployed version in Heroku [here](https://traverse2.herokuapp.com/)!

## Functionality
Uses MVC directory structure

Login using Auth0 npm package- login id is stored in local storage and is used when saving place data to the database

Display places visted by userid using MongoDB and mongoose model for database schema for a user

Display Resturants Hotels and Night Clubs for a location and price range - all data can be saved to Mongodb 

App uses OpenWeatherMap API to display 6 day weather forecast for a location

Uses Google GeoCoder API to translate city/state into long/lat coordinates for OpenWeatherMap API call

Uses Google Places API textseach to get place ids for criteria and then loop through results 
and use Google Places details to get detail data for each place which is then returned to the
client in an object for mapping in the React component

axios package to do API and database calls

express to serve routes

axios to do API and database calls

Google Places API to retrieve loaction data for Resturants Hotels and Night Clubs within a price range

OpenWeatherMap API to retrieve 6 day weather forecast for a location

Bootstrap for css styling

## Screenshots
[Login](https://user-images.githubusercontent.com/26799439/35976200-5e5d4aec-0cad-11e8-9f53-45634eb289e1.png)

[Login](https://user-images.githubusercontent.com/26799439/35976214-69012f40-0cad-11e8-9f94-534da34da391.png)

[Search](https://user-images.githubusercontent.com/26799439/35977605-8efb0afa-0cb1-11e8-8f9d-d6f7a1cc49d1.png)

[Weather](https://user-images.githubusercontent.com/26799439/35977634-a1726d22-0cb1-11e8-9c1a-01e285cb13f4.png)

[Restaurants](https://user-images.githubusercontent.com/26799439/35977656-b0fa9e36-0cb1-11e8-8a0d-e8165e0ca1b9.png)

[Hotels](https://user-images.githubusercontent.com/26799439/35977671-bfa0d7e8-0cb1-11e8-853e-2eb54c9212c8.png)

[Night Clubs](https://user-images.githubusercontent.com/26799439/35977687-c9192ca8-0cb1-11e8-92e8-ab847a0280c5.png)

[Save Place](https://user-images.githubusercontent.com/26799439/35977743-eeae3a08-0cb1-11e8-8484-cdb73b560a2f.png)

[View Saved Places](https://user-images.githubusercontent.com/26799439/35977743-eeae3a08-0cb1-11e8-8484-cdb73b560a2f.png)

[Delete Place from mongodb ](https://user-images.githubusercontent.com/26799439/35977779-fc171372-0cb1-11e8-856e-91ac791549fd.png)

[Logout](https://user-images.githubusercontent.com/26799439/35977803-099f98f2-0cb2-11e8-8614-94204718afa7.png)






