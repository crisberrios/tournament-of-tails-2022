import React from 'react';
import PropTypes from 'prop-types';

const Pet = ({ pet, color, setOverlayImage, setShowOverlay }) => {
  const petImage = pet.image ? <img src={`./images/${pet.image}`} /> : null;

  const handleClick = () => {
    if (pet.image) {
      setOverlayImage(pet.image);
      setShowOverlay(true);
    }
  };

  const pointer = pet.image ? 'pointer' : '';

  return (
    <div className={`pet ${color} ${pointer}`} onClick={handleClick}>
      <div className="photo">{petImage}</div>
      <div className="text">
        <span className="seed">{pet.seed}</span>
        <span className="pet-name">{pet.name}</span>
      </div>
    </div>
  );
};

export default Pet;

Pet.propTypes = {
  pet: PropTypes.object,
  color: PropTypes.string,
  setOverlayImage: PropTypes.func,
  setShowOverlay: PropTypes.func
};
