 import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Location from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Saved extends Component {
  state = {
   locations: []
  };

  componentDidMount() {
    this.getSavedArticles();
    console.log("I AM HERE");
  }

  getSavedArticles = () => {
    API.getLocations()
      .then(res =>
        this.setState({
          locations: res.data
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
            <Jumbotron>
              <h1 className="text-center">
                <strong>(ReactJS) New York Times Article Scrubber</strong>
              </h1>
              <h2 className="text-center">
                Search for and save articles of interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Panel title="Saved Articles" icon="download">
              {this.state.locations.length ? (
                <List>
                  {this.state.locations.map(locations => (
                    <Location
                      location={locations.location}
                 
                      date={locations.date}
                      handleClick={this.handleArticleDelete}
                      buttonText="Delete Article"
                      saved
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Articles</h2>
              )}
            </Panel>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;