import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container, DivPlaces } from "../../components/Grid";
import { List } from "../../components/List";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getSavedPlaces();
  }

  getSavedPlaces = () => {
    API.getSavedPlaces()
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleArticleDelete = id => {
    API.deleteArticle(id).then(res => this.getSavedArticles());
  };

  render() {
    return (
      <Container>
       
        <Row>
          <Col size="md-12">
            <Panel title="Saved Places" icon="download">
              {this.state.articles.length ? (
                <DivPlaces>
                  {this.state.articles.map(article => (
                    <Article
                      key={article._id}
                      _id={article._id}
                      name={article.name}
                      rating={article.rating}
                      url={article.url}
                      website={article.website}
                      date={article.date}
                      handleClick={this.handleArticleDelete}
                      buttonText="Delete Article"
                      saved
                    />
                  ))}
                </DivPlaces>
              ) : (
                <h2 className="text-center">No Saved Articles</h2>
              )}
            </Panel>
          </Col>
        </Row>
    
      </Container>
    );
  }
}

export default Saved;
