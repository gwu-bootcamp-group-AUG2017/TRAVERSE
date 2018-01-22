import React, { Component } from "react";
import Form from "../../components/Form";
import Places from "../../components/Places";
import Weather from "../../components/Weather";
import API from "../../utils/API";
import { Col,Row, Container, DivPlaces, DivWeather } from "../../components/Grid";
import { isLoggedIn } from '../../utils/authService';

// declaare state variables
class Home extends Component {
  state = {
    hotels: [],
    restaurant: [],
    nightclubs: [],
    weather: [],
    q: "",
    type: "",
    header: "",
    header1: "",
    header2: "",
    header3: "",
    message: ""
  };

// get text from input form
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 // CALL api for hotels
  getHotels = () => {
    API.getPlaces({
      q: this.state.q,
      type: "lodging"
    })
      .then(res =>
        this.setState({
         hotels: res.data,
         header1: "Where to Dine",
         message: !res.data.length
            ? "No Food Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

  // CALL api for restaurants
   getRestaurants = () => {
    API.getPlaces({
      q: this.state.q,
      type: "restaurant"
    })
       .then(res =>
        this.setState({

         restaurant: res.data,
         header2: "Where to Stay",
         message: !res.data.length
            ? "No Hotels Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

// CALL api for night clubs
  getClubs = () => {
    API.getPlaces({
      q: this.state.q,
      type: "night_club"
    })
      .then(res =>
        this.setState({
         nightclubs: res.data,
         header3: "Where to Play",
         message: !res.data.length
            ? "No Clubs Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

// call api for weather data
  getWeather = () => {
    API.getWeather({
      q: this.state.q
    })
      .then(res =>
        this.setState({
         weather: res.data,
         header: this.state.q + " Forecast",
         message: !res.data.length
            ? "No Weather Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

// call APIS for each data set
  handleFormSubmit = event => {
    event.preventDefault();
    this.getWeather();
    this.getHotels();
    this.getRestaurants();
    this.getClubs();
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles2());
  
  };

  // map data form API calls to divs

  render() {
    return (

    <Container>
      <Row>
        <Col className="text-center" size="md-8">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
          />
         
        </Col>
      </Row>

      <Row>
        <Col size="md-12"> 
          {(isLoggedIn()) ? (  
              <h2 className="text-center h2 bg-dark">{this.state.header}</h2>
          ) : (<div></div>)}
            {this.state.weather.length ? (
              <DivWeather>
                {this.state.weather.map(weather => (
                  <Weather            
                    key={weather._id}
                   _id={weather._id}
                    day={weather.day}
                    max_temp={weather.max_temp}
                    min_temp={weather.min_temp}
                    main={weather.main}
                    desc={weather.desc}
                    icon={weather.icon}
                  />
                ))}
              </DivWeather>
                ) : (<h2 className="text-center">{this.state.message}</h2>
          )}


          {(isLoggedIn()) ? ( 
              <h2 className="text-center rest">{this.state.header1}</h2>
          ) : (<div></div>)}
            {this.state.restaurant.length ? (
              <DivPlaces>
                {this.state.restaurant.map(restaurant => (
                  <Places
                    key={restaurant._id}
                    _id={restaurant._id}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    website={restaurant.website}
                    url={restaurant.url}
                    review={restaurant.review}
                  />
                ))}
              </DivPlaces>
                ) : (<h2 className="text-center">{this.state.message}</h2>
          )}
      
          {(isLoggedIn()) ? ( 
              <h2 className="text-center club">{this.state.header2}</h2>
          ) : (<div></div>)}
            {this.state.hotels.length ? (
              <DivPlaces>
                {this.state.hotels.map(hotels => (
                  <Places
                    key={hotels._id}
                    _id={hotels._id}
                    name={hotels.name}
                    rating={hotels.rating}
                    website={hotels.website}
                    url={hotels.url}
                    review={hotels.review}
                  />
                ))}
              </DivPlaces>
                ) : (<h2 className="text-center">{this.state.message}</h2>
          )}

          {(isLoggedIn()) ? ( 
              <h2 className="text-center hotel">{this.state.header3}</h2>
          ) : (<div></div>)}
            {this.state.nightclubs.length ? (
              <DivPlaces>
                {this.state.nightclubs.map(nightclubs => (
                  <Places
                    key={nightclubs._id}
                    _id={nightclubs._id}
                    name={nightclubs.name}
                    rating={nightclubs.rating}
                    website={nightclubs.website}
                    url={nightclubs.url}
                    review={nightclubs.review}
                  />
                ))}
              </DivPlaces>
               ) : (<h2 className="text-center">{this.state.message}</h2>
          )}
    
        </Col>
      </Row>
    </Container>
    );
  }
}


export default Home;
