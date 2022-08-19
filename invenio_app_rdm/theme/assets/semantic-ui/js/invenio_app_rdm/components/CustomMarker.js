import React from "react";
import { Marker, Popup } from "react-leaflet";
import { icon } from "../landing_page/LeafletIcons";
import PropTypes from "prop-types";

export const CustomMarker = ({ position }) => {
  return (
    <Marker position={position.latlng} icon={icon}>
      <Popup>
        <span>{position.place}</span>
      </Popup>
    </Marker>
  );
};

CustomMarker.propTypes = {
  position: PropTypes.object.isRequired,
};
