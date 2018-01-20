 import React, { Component } from "react";
 
import Header from "../../components/Header";
import Article from "../../components/Article";
import Weather from "../../components/Weather";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";

import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col,Row, Container, Div, Div2, Div3 } from "../../components/Grid";
import { List, ListItem  } from "../../components/List";

class Home extends Component {
  state = {
    articles: [],
    restaurant: [],
    nightclubs: [],
    weather: [],
    q: "",
    start_year: "",
    end_year: "", 
    header: "",
    header1: "",
    header2: "",
    header3: "",
    message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
 

      .then(res =>
        this.setState({

         articles: res.data,
         header1: "Dine",
         message: !res.data.length
            ? "No Food Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

   getArticles2 = () => {
    API.getArticles2({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
 

      .then(res =>
        this.setState({

         restaurant: res.data,
         header2: "Stay",
         message: !res.data.length
            ? "No Hotels Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

  getArticles3 = () => {
    API.getArticles3({
      q: this.state.q
    })
 

      .then(res =>
        this.setState({

         nightclubs: res.data,
         header3: "Play",
         message: !res.data.length
            ? "No Clubs Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };

  getWeather = () => {
    API.getWeather({
      q: this.state.q
    })
 

      .then(res =>
        this.setState({

         weather: res.data,
         header: "Weather for " + this.state.q,
         message: !res.data.length
            ? "No Weather Found for this City"
           : ""
        })
      )
      .catch(err => console.log(err));
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.getWeather();
    this.getArticles();
    this.getArticles2();
    this.getArticles3();
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles2());
  
  };

  render() {
    return (
      
     
      <Container>
        <Header></Header>
 
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
          
             
             <h2 className="text-center">{this.state.header}</h2>
              {this.state.weather.length ? (
                <Div3>
                  
                  {this.state.weather.map(weather => (
                    <Weather            
                     key={weather._id}
                     day={weather.day}
                     max_temp={weather.max_temp}
                     min_temp={weather.min_temp}
                     main={weather.main}
                     desc={weather.desc}
                     icon={weather.icon}
                    />
                  ))}
               </Div3>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
           
          
         
          
            
          <h2 className="text-center">{this.state.header1}</h2>
          
              {this.state.restaurant.length ? (
             
                 <Div2>
                  {this.state.restaurant.map(restaurant => (
                    <Article
             
                      key={restaurant._id}
                      name={restaurant.name}
                      rating={restaurant.rating}
                      website={restaurant.website}
                     url={restaurant.url}
                       review={restaurant.review}
                                       />
                  ))}
                </Div2>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            
             <h2 className="text-center">{this.state.header2}</h2>
           
          
              {this.state.articles.length ? (
             
                 <Div2>
                  {this.state.articles.map(article => (
                    <Article
             
                      key={article._id}
                      name={article.name}
                      rating={article.rating}
                      website={article.website}
                     url={article.url}
                       review={article.review}
                                       />
                  ))}
                </Div2>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
           


            <h2 className="text-center">{this.state.header3}</h2>
          
              {this.state.nightclubs.length ? (
             
                 <Div2>
                  {this.state.nightclubs.map(nightclubs => (
                    <Article
             
                      key={nightclubs._id}
                      name={nightclubs.name}
                      rating={nightclubs.rating}
                      website={nightclubs.website}
                     url={nightclubs.url}
                       review={nightclubs.review}
                                       />
                  ))}
                </Div2>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
    
          </Col>
        </Row>
    
      <Footer />
      </Container>
   
    );
  }
}

export default Home;
