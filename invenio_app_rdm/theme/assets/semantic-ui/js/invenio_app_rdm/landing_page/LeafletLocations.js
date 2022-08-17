import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "./LeafletIcons"

export class LeafletLocations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { locations } = this.props;
    const markers = [];
    locations.features.forEach(element => {
      markers.push({
        "latlng": element.geometry.coordinates,
        "place": element.place
      });
    });
    const position = locations.features[0].geometry.coordinates;
    console.log(markers);
    
    return (
      <MapContainer center={position} zoom={10} scrollWheelZoom={true} markers={markers}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        {markers.map((position, idx) =>
          <Marker key={`marker-${idx}`} position={position.latlng} icon={icon} >
            <Popup>
              <span>{position.place}</span>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    );
  }
};