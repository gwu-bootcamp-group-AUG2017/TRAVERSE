 import React, { Component } from "react";
 
import Header from "../../components/Header";
import Article from "../../components/Article";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Form from "../../components/Form";

import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col,Row, Container, Div, Div2 } from "../../components/Grid";
import { List, ListItem  } from "../../components/List";

class Home extends Component {
  state = {
    articles: [],
    restaurant: [],
    nightclubs: [],
    q: "",
    start_year: "",
    end_year: "",
    message: "Search For Articles To Begin!"
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
         message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
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
         message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
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
         message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
           : ""
        })
      )
      .catch(err => console.log(err));
  };


  handleFormSubmit = event => {
    event.preventDefault();
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
          <Panel title="Where to eat?">
          
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
                <h2 className="text-center"> x</h2>
              )}
            </Panel>
             <Panel title="Where to stay?">
          
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
                <h2 className="text-center"> x</h2>
              )}
            </Panel>


             <Panel title="Where to play?">
          
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
                <h2 className="text-center"> x</h2>
              )}
            </Panel>
          </Col>
        </Row>
    
          <Footer />
      </Container>
   
    );
  }
}

export default Home;
