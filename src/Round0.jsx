import React from 'react';
import PropTypes from 'prop-types';
import BracketGame from './BracketGame';
import { petData } from './helpers';

const Round = ({ data, games }) => {

  const pet = (id) => petData(data, id);

  return data.length ? (
    <div className="round">
      <h3>Play-In Round</h3>
      <BracketGame pet1={pet(0)} pet2={pet(1)} game={games[0]} />
      <BracketGame pet1={pet(2)} pet2={pet(3)} game={games[1]} />
      {/* <BracketGame pet1={pet(24)} pet2={pet(39)} game={games[2]} /> */}
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
