import React from 'react';
import PropTypes from 'prop-types';
import BracketGame from './BracketGame';
import { petData, unknownPet } from './helpers';

const Round = ({ data, games }) => {
  const pet = (id) => petData(data, id);
  const winnerFromGame = (gameId) => {
    const winningId = games[gameId].winner;
    if (winningId === '') {
      return unknownPet(games[gameId]);
    }
    return pet(winningId);
  };

  return data.length ? (
    <div className="round">
      <h3>Round 1</h3>
      <BracketGame pet1={winnerFromGame(1)} pet2={winnerFromGame(2)} game={games[2]} />
      {/* <BracketGame pet1={pet(28)} pet2={pet(35)} game={games[3]} />
      <BracketGame pet1={pet(27)} pet2={pet(36)} game={games[4]} />
      <BracketGame pet1={pet(30)} pet2={pet(33)} game={games[5]} />
      <BracketGame pet1={pet(22)} pet2={pet(38)} game={games[6]} />
      <BracketGame pet1={pet(29)} pet2={pet(34)} game={games[7]} />
      <BracketGame pet1={pet(26)} pet2={pet(37)} game={games[8]} /> */}
    </div>
  ) : <div></div>;
};

export default Round;

Round.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  games: PropTypes.arrayOf(PropTypes.object),
};
