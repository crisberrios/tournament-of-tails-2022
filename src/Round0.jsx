import React from 'react';
import PropTypes from 'prop-types';
import BracketGame from './BracketGame';
import { petData } from './helpers';

const Round = ({ data, games, setOverlayImage, setShowOverlay }) => {
  const pet = (id) => petData(data, id - 1);
  const game = (id) => games[id - 1];

  return data.length ? (
    <div className="round">
      <h3>Play-In Round</h3>
      <BracketGame pet1={pet(16)} pet2={pet(17)} game={game(1)} setOverlayImage={setOverlayImage} setShowOverlay={setShowOverlay} />
      <BracketGame pet1={pet(13)} pet2={pet(20)} game={game(2)} setOverlayImage={setOverlayImage} setShowOverlay={setShowOverlay} />
      <BracketGame pet1={pet(15)} pet2={pet(18)} game={game(3)} setOverlayImage={setOverlayImage} setShowOverlay={setShowOverlay} />
      <BracketGame pet1={pet(14)} pet2={pet(19)} game={game(4)} setOverlayImage={setOverlayImage} setShowOverlay={setShowOverlay} />
    </div>
  ) : <div></div>;
};

export default Round;

Round.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  games: PropTypes.arrayOf(PropTypes.object),
  setOverlayImage: PropTypes.func,
  setShowOverlay: PropTypes.func
};
