import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { CustomMarker } from "./CustomMarker";
import PropTypes from "prop-types";

export const LocationsMapPreview = ({ markers }) => {
  const center = markers[0].latlng;
  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom markers={markers}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((position) => (
        <CustomMarker key={position.latlng.toString()} position={position} />
      ))}
    </MapContainer>
  );
};

LocationsMapPreview.propTypes = {
  markers: PropTypes.array.isRequired,
};
