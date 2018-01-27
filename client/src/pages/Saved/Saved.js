import React, { Component } from "react";
import Panel from "../../components/Panel";
import SavedPlaces from "../../components/SavedPlaces";
import API from "../../utils/API";
import { Col, Row, Container} from "../../components/Grid";


class Saved extends Component {
  state = {
    places: []
  };

  componentDidMount() {
    this.getSavedPlaces();
  }

  getSavedPlaces = () => {
    API.getSavedPlaces()
      .then(res =>
        this.setState({
          places: res.data
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
            <Panel title="My Saved Places" >
              {this.state.places.length ? (
                <Row>
                  {this.state.places.map(place => (
                    <SavedPlaces
                      key={place._id}
                      _id={place._id}
                      name={place.name}
                      rating={place.rating}
                      review={place.review}
                      city={place.city}
                      type={place.type}
                      url={place.url}
                      website={place.website}
                      date={place.date}
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
