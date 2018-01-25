import React, { Component } from "react";

import Panel from "../../components/Panel";
import Article from "../../components/Article";

import API from "../../utils/API";
import { Col, Row, Container} from "../../components/Grid";


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
    API.deletePlace(id).then(res => this.getSavedPlaces());
  };

  render() {
    return (
      <Container>
       
        <Row>
          <Col size="md-12">
            <Panel title="Saved Places" icon="download">
              {this.state.articles.length ? (
                <Row>
                  {this.state.articles.map(article => (
                    <Article
                      key={article._id}
                      _id={article._id}
                      name={article.name}
                      rating={article.rating}
                      review={article.review}
                      city={article.city}
                      type={article.type}
                      url={article.url}
                      website={article.website}
                      date={article.date}
                      handleClick={this.handleArticleDelete}
                      buttonText="Delete Place"
                      saved
                    />
                  ))}
                </Row>
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
