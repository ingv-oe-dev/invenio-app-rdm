import React, { Component } from "react";
import { Container, List } from "semantic-ui-react";
import { LocationsMapPreview } from "../components/LocationsMapPreview";
import PropTypes from "prop-types";

export class LeafletLocations extends Component {
  constructor(props) {
    super(props);
  }

  extractLocations = (locations) => {
    const markers = [];
    const locs = [];
    locations.features.forEach((element) => {
      if (element.geometry) {
        switch (element.geometry.type) {
          case "Point":
            markers.push({
              latlng: element.geometry.coordinates,
              place: element.place ? element.place : "",
              description: element.description ? element.description : "",
            });
            break;
          default:
            locs.push({
              place: element.place ? element.place : "",
              description: element.description ? element.description : "",
            });
            break;
        }
      } else {
        locs.push({
          place: element.place ? element.place : "",
          description: element.description ? element.description : "",
        });
      }
    });
    return [markers, locs];
  };

  render() {
    const { locations } = this.props;
    const [markers, locs] = this.extractLocations(locations);
    console.log(markers, locs);

    return (
      <Container>
        <List>
          {locs.map((el) => (
            <List.Item key={el.place.toString}>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header>{el.place}</List.Header>
                <List.Description> {el.description}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
        {markers.length > 0 ? <LocationsMapPreview markers={markers} /> : ""}
      </Container>
    );
  }
}

LeafletLocations.propTypes = {
  locations: PropTypes.object.isRequired,
};
