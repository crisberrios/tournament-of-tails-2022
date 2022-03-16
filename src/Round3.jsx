import React from 'react';
import PropTypes from 'prop-types';
import BracketGame from './BracketGame';
import { petData, unknownPet } from './helpers';

const Round = ({ data, games, setOverlayImage, setShowOverlay }) => {
  const pet = (id) => petData(data, id - 1);
  const game = (id) => games[id - 1];
  const winnerFromGame = (gameId) => {
    const winningId = games[gameId - 1].winner;
    if (winningId === '') {
      return unknownPet(games[gameId - 1]);
    }
    return pet(winningId);
  };

  return data.length ? (
    <div className="round">
      <h3>Final Four</h3>
      <BracketGame pet1={winnerFromGame(13)} pet2={winnerFromGame(14)} game={game(17)} setOverlayImage={setOverlayImage} setShowOverlay={setShowOverlay} />
      <BracketGame pet1={winnerFromGame(15)} pet2={winnerFromGame(16)} game={game(18)} setOverlayImage={setOverlayImage} setShowOverlay={setShowOverlay} />
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
