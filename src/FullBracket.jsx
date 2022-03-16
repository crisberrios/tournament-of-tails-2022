import React from 'react';
import PropTypes from 'prop-types';
import { petData, unknownPet } from './helpers';
import BracketGame from './BracketGame';

const FullBracket = ({ data, games }) => {
  const pet = (id) => petData(data, id - 1);
  const winnerFromGame = (gameId) => {
    const winningId = games[gameId - 1].winner;
    if (winningId === '') {
      return unknownPet(games[gameId - 1]);
    }
    return pet(winningId);
  };

  const game = (id) => games[id - 1];

  /* pet1 & pet2 are the two pets competing in that game. pet(id) - ID should match the firebase ID.
     game(id]) - ID should match the firebase ID
     top - (optional) for vertical alignment of the brackets. Top pixel measurement; will need to be adjusted
     based on the photo heights. Leave off on the round that has the most games. */
  return data.length && games.length ? (
    <div className="round">
      <h3>Tournament of Tails 2022</h3>
      <div className="full-bracket-container">
        <div className="play-in left">
          <BracketGame pet1={pet(16)} pet2={pet(17)} game={game(1)} top={120} />
          <BracketGame pet1={pet(13)} pet2={pet(20)} game={game(2)} top={540} />
          <BracketGame pet1={pet(15)} pet2={pet(18)} game={game(3)} top={964} />
          <BracketGame pet1={pet(14)} pet2={pet(19)} game={game(4)} top={1386} />
        </div>
        <div className="sweet-16">
          <BracketGame pet1={pet(1)} pet2={winnerFromGame(1)} game={game(9)} />
          <BracketGame pet1={pet(8)} pet2={pet(9)} game={game(5)} />
          <BracketGame pet1={pet(4)} pet2={winnerFromGame(2)} game={game(10)} />
          <BracketGame pet1={pet(5)} pet2={pet(12)} game={game(6)} />
          <BracketGame pet1={pet(2)} pet2={winnerFromGame(3)} game={game(11)} />
          <BracketGame pet1={pet(7)} pet2={pet(10)} game={game(7)} />
          <BracketGame pet1={pet(3)} pet2={winnerFromGame(4)} game={game(12)} />
          <BracketGame pet1={pet(6)} pet2={pet(11)} game={game(8)} />
        </div>
        <div className="elite-8">
          <BracketGame pet1={winnerFromGame(9)} pet2={winnerFromGame(5)} game={game(13)} top={120} />
          <BracketGame pet1={winnerFromGame(10)} pet2={winnerFromGame(6)} game={game(14)} top={340} />
          <BracketGame pet1={winnerFromGame(11)} pet2={winnerFromGame(7)} game={game(15)} top={576} />
          <BracketGame pet1={winnerFromGame(12)} pet2={winnerFromGame(8)} game={game(16)} top={805} />
        </div>
        <div className="final-4">
          <BracketGame pet1={winnerFromGame(13)} pet2={winnerFromGame(14)} game={game(17)} top={320} />
          <BracketGame pet1={winnerFromGame(15)} pet2={winnerFromGame(16)} game={game(18)} top={980} />
        </div>
        <div className="championship">
          <BracketGame pet1={winnerFromGame(17)} pet2={winnerFromGame(18)} game={game(19)} top={740} />
        </div>
      </div>
    </div>
  ) : <div></div>;
};

export default FullBracket;

FullBracket.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  games: PropTypes.arrayOf(PropTypes.object),
};
