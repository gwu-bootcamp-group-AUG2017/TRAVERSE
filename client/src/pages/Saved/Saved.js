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
    API.getSavedPlaces({uid: localStorage.getItem('uid'),})
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
             <h2 className="text-center h2 hplaces">My Saved Places</h2>
              {this.state.places.length ? (
                <Row>
                  {this.state.places.map(place => (
                    <SavedPlaces
                      key={place._id}
                      _id={place._id}
                      uid={place.uid}
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
                <h2 className="text-center">No Saved Places</h2>
              )}
          
          </Col>
        </Row>
    
      </Container>
    );
  }
}

export default Saved;
