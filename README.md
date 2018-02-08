# TRAVERSE

A one stop travel portal to display info for a given location by price range

Node.js Mongodb 
A `Node.js` &amp; `MongoDB` webapp that web-scrapes news data from [The Onion](http://www.theonion.com/) and allows users to comment about what they have read. Users can also delete unwanted comments.

A Node.js & MongoDB webapp that web-scrapes news data from The Onion and allows users to comment about what they have read. Users can also delete unwanted comments.

Use mongoDB to store place data for logged in user - login id is stored in db so 

Use Auth0 and jwt-decode npm package for authentication and jw

Use Axios npm package for API and database calls

Uses mongooose model for database schema

Please check out the deployed version in Heroku [here](https://traverse2.herokuapp.com/)!

## Functionality
Uses MVC directory structure

Login using Auth0 - login id is stored in local storage and is used to 

Display places visted by userid using MongoDB and mongoose

Display Resturants Hotels and Night Clubs for a location and price range - all data can be saved to Mongodb 

App uses OpenWeatherMap API to display 6 day weather forecast for a location
Uses Google GeoCoder API to translate city/state into long/lat coordinates for OpenWeatherMap API call

Uses Google Places API textseach to get place ids for criteria and then loop through results 
and use Google Places details to get detail data for each place (name, rating, url, photo, review) whihc is then returned to the

Backend:

express to serve routes

axios to do API and database calls

Google Places API to retrieve loaction data for Resturants Hotels and Night Clubs within a price range

Google Geocoder API to translate city/state to long/lat coordinates 

OpenWeatherMap API to retrieve 6 day weather forecast for a location

Frontend:

React-js to 




On the backend, the app uses `express` to serve routes react to  and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `handlebars` for templating each article and `materialize` as a styling framework. The app also uses `jQuery` and `AJAX` to help with making post requests.

And for webscraping, the app uses the `request` and `cheerio` node packages. All webscrapping code can be found in the `controllers.js` file.

## Screenshots
#### The `/articles` route renders all the news articles
![image](https://user-images.githubusercontent.com/26799439/35976200-5e5d4aec-0cad-11e8-9f53-45634eb289e1.png)
![image](https://user-images.githubusercontent.com/26799439/35976214-69012f40-0cad-11e8-9f94-534da34da391.png)


#### Click on the globe icon to view the content.
![Article Content](/screenshots/article.png)

#### Click the Chat Bubble icon to add a comment via the `/add/comment/:id` post route
![Add Comment](/screenshots/add-comment.png)

#### Click the Thumbs up/down icon to view comments
![View Comment](/screenshots/view-comment.png)

#### Delete Place from mongodb 
![image](https://user-images.githubusercontent.com/26799439/35977803-099f98f2-0cb2-11e8-8614-94204718afa7.png)


#### Logout
![image](https://user-images.githubusercontent.com/26799439/35977803-099f98f2-0cb2-11e8-8614-94204718afa7.png)

Please check out the deployed version in Heroku [here](https://user-images.githubusercontent.com/26799439/35977803-099f98f2-0cb2-11e8-8614-94204718afa7.png)!
#### Click the Delete button to remove rude comments via the `remove/comment/:id` route
![Delete Comment](https://user-images.githubusercontent.com/26799439/35977803-099f98f2-0cb2-11e8-8614-94204718afa7.png)

#### Note that the web scraping occurs on the `/scrape` route.
#### On visiting the index route, `/`, express redirects to `/scrape` and then `/articles` routes


![image](https://user-images.githubusercontent.com/26799439/35977605-8efb0afa-0cb1-11e8-8f9d-d6f7a1cc49d1.png)
![image](https://user-images.githubusercontent.com/26799439/35977634-a1726d22-0cb1-11e8-9c1a-01e285cb13f4.png)
![image](https://user-images.githubusercontent.com/26799439/35977656-b0fa9e36-0cb1-11e8-8a0d-e8165e0ca1b9.png)
![image](https://user-images.githubusercontent.com/26799439/35977671-bfa0d7e8-0cb1-11e8-853e-2eb54c9212c8.png)
![image](https://user-images.githubusercontent.com/26799439/35977687-c9192ca8-0cb1-11e8-92e8-ab847a0280c5.png)
![image](https://user-images.githubusercontent.com/26799439/35977702-d6b3d26e-0cb1-11e8-8e26-13f84d58ed50.png)
![image](https://user-images.githubusercontent.com/26799439/35977743-eeae3a08-0cb1-11e8-8484-cdb73b560a2f.png)
![image](https://user-images.githubusercontent.com/26799439/35977779-fc171372-0cb1-11e8-856e-91ac791549fd.png)
![image](https://user-images.githubusercontent.com/26799439/35977803-099f98f2-0cb2-11e8-8614-94204718afa7.png)

