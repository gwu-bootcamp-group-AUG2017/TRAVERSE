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





On the backend, the app uses `express` to serve routes react to  and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `handlebars` for templating each article and `materialize` as a styling framework. The app also uses `jQuery` and `AJAX` to help with making post requests.

And for webscraping, the app uses the `request` and `cheerio` node packages. All webscrapping code can be found in the `controllers.js` file.

## Screenshots
#### The `/articles` route renders all the news articles
![All Articles](/screenshots/content.png)

#### Click on the globe icon to view the content.
![Article Content](/screenshots/article.png)

#### Click the Chat Bubble icon to add a comment via the `/add/comment/:id` post route
![Add Comment](/screenshots/add-comment.png)

#### Click the Thumbs up/down icon to view comments
![View Comment](/screenshots/view-comment.png)

#### Click the Delete button to remove rude comments via the `remove/comment/:id` route
![Delete Comment](/screenshots/delete-comment.png)

#### Note that the web scraping occurs on the `/scrape` route.
#### On visiting the index route, `/`, express redirects to `/scrape` and then `/articles` routes
