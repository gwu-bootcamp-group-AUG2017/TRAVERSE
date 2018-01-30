import React, { Component } from "react";
import Form from "../../components/Form";
import Places from "../../components/Places";
import Weather from "../../components/Weather";
import API from "../../utils/API";
import { Col,Row, Container, DivPlaces, DivWeather } from "../../components/Grid";
//import { isLoggedIn } from '../../utils/authService';

// declaare state variables
class Home extends Component {
  state = {
    hotels: [],
    restaurant: [],
    nightclubs: [],
    weather: [],
    q: "",
    type: "",
    price: "",
    header: "",
    header1: "",
    header2: "",
    header3: "",
    message: "",
  
  };

// get text from input form
  handleInputChange = event => {
    const { name, value} = event.target;
    const { price, value2} = event.target;

    this.setState({
      [name]: value,
      [price]: value2
    });
  };

  // CALL api for hotels
  getHotels = () => {

    API.getPlaces({
      q: this.state.q,
      type: "lodging",
      type2: "Hotel",
      price: this.state.price,
      session: localStorage.getItem('uid'),
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
      type: "restaurant",
      type2: "Restaurant",
      price: this.state.price,
      session: localStorage.getItem('uid'),
    })
       .then(res =>
        this.setState({
         session: localStorage.getItem('uid'),
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
      type: "night_club",
      type2: "Night Club",
      price: this.state.price,
      session: localStorage.getItem('uid'),
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
    this.getHotels();
    this.getRestaurants();
    this.getWeather();
    this.getClubs();
  };


// save restaurant on submit
  handleRestSave = id => {
    const restaurant = this.state.restaurant.find(restaurant => restaurant._id === id);
    API.savePlaces(restaurant).then(res => this.getRestaurants());
  };


// save hotel on submit
  handleHotelSave = id => {
    const hotels = this.state.hotels.find(hotels => hotels._id === id);
    API.savePlaces(hotels).then(res => this.getHotels());
  
  };


// save nightclub on submit
   handleClubSave = id => {
    const nightclubs = this.state.nightclubs.find(nightclubs => nightclubs._id === id);
    API.savePlaces(nightclubs).then(res => this.getClubs());
  
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
            price={this.state.price}
          
            />
         
        </Col>
      </Row>

      <Row>
        <Col size="md-12"> 
      
              <h2 className="text-center h2 weather">{this.state.header}</h2>
          
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


    
              <h2 className="text-center rest">{this.state.header1}</h2>
        
            {this.state.restaurant.length ? (
              <DivPlaces>
                {this.state.restaurant.map(restaurant => (
                  <Places
                    uid={restaurant.uid}
                    key={restaurant._id}
                    _id={restaurant._id}
                    type="Restaurant"
                    city={this.state.q}
                    name={restaurant.name}
                    rating={restaurant.rating}
                    website={restaurant.website}
                    url={restaurant.url}
                    review={restaurant.review}
                    handleClick={this.handleRestSave}
                    buttonText="Save Restaurant"
                  />
                ))}
              </DivPlaces>
                ) : (<h2 className="text-center">{this.state.message}</h2>
          )}
      
         
              <h2 className="text-center hotel">{this.state.header2}</h2>
         
            {this.state.hotels.length ? (
              <DivPlaces>
                {this.state.hotels.map(hotels => (
                  <Places
                    uid={hotels.uid}
                    key={hotels.id}
                    _id={hotels.id}
                    type="Hotel"
                    city={this.state.q}
                    name={hotels.name}
                    rating={hotels.rating}
                    website={hotels.website}
                    url={hotels.url}
                    review={hotels.review}
                    handleClick={this.handleHotelSave}
                    buttonText="Save Hotel"
                  />
                ))}
              </DivPlaces>
                ) : (<h2 className="text-center">{this.state.message}</h2>
          )}

        
              <h2 className="text-center club">{this.state.header3}</h2>
         
            {this.state.nightclubs.length ? (
              <DivPlaces>
                {this.state.nightclubs.map(nightclubs => (
                  <Places
                    uid={nightclubs.uid}
                    key={nightclubs._id}
                    _id={nightclubs._id}
                    type="Night Club"
                    city={this.state.q}
                    name={nightclubs.name}
                    rating={nightclubs.rating}
                    website={nightclubs.website}
                    url={nightclubs.url}
                    review={nightclubs.review}
                    handleClick={this.handleClubSave}
                    buttonText="Save Night Club"
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
