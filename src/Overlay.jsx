import React from "react";
import PropTypes from "prop-types";

const Overlay = ({ image }) => (
  <div className="overlay">
    <div className="photo-container">
      <img className="zoom" src={`./images/${image}`} />
    </div>
  </div>
);

export default Overlay;

Overlay.propTypes = {
  image: PropTypes.string,
};
