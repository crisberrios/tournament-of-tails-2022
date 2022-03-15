import React from 'react';
import PropTypes from 'prop-types';
import BracketGame from './BracketGame';
import { petData, unknownPet } from './helpers';

const Round = ({ data, games }) => {
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
      <h3>Elite 8</h3>
      <BracketGame pet1={winnerFromGame(9)} pet2={winnerFromGame(5)} game={game(13)} />
      <BracketGame pet1={winnerFromGame(10)} pet2={winnerFromGame(6)} game={game(14)} />
      <BracketGame pet1={winnerFromGame(11)} pet2={winnerFromGame(7)} game={game(15)} />
      <BracketGame pet1={winnerFromGame(12)} pet2={winnerFromGame(8)} game={game(16)} />
    </div>
  ) : <div></div>;
};

export default Round;

Round.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  games: PropTypes.arrayOf(PropTypes.object),
};
