import React from "react";
import PropTypes from "prop-types";
import Pet from "./Pet";

const BracketGame = ({
  pet1,
  pet2,
  game,
  top,
  setOverlayImage,
  setShowOverlay,
}) => {
  const name = game?.name || "";
  const color = (petSeed) => {
    const petId = parseInt(petSeed).toString();
    return game?.winner && game.winner === petId ? "green" : "grey";
  };

  const style = top ? { top } : {};

  return (
    <div className="game-container">
      <div className="bracket-group" style={style}>
        <div className="pets">
          <Pet
            pet={pet1}
            color={color(pet1.seed)}
            setOverlayImage={setOverlayImage}
            setShowOverlay={setShowOverlay}
          />
          <Pet
            pet={pet2}
            color={color(pet2.seed)}
            setOverlayImage={setOverlayImage}
            setShowOverlay={setShowOverlay}
          />
        </div>
        <div className="bracket-lines">
          <div className="top"></div>
          <div className="middle">
            <span>{name}</span>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="bracket-lines">
          <div className="upper"></div>
          <div className="lower"></div>
        </div>
      </div>
    </div>
  );
};

export default BracketGame;

BracketGame.propTypes = {
  pet1: PropTypes.object,
  pet2: PropTypes.object,
  game: PropTypes.object,
  top: PropTypes.number,
  setOverlayImage: PropTypes.func,
  setShowOverlay: PropTypes.func,
};
