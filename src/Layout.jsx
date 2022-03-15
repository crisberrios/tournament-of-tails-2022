/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FullBracket from './FullBracket';
import Round0 from './Round0';
import Round1 from './Round1';

const Layout = ({ data, games, currentRound, setCurrentRound }) => {
  const [x, setX] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const [swipeDiff, setSwipeDiff] = useState(0);
  const [zooming] = useState(false);
  const minDistance = 50;
  const round0 = <Round0 data={data} games={games} />;
  const round1 = <Round1 data={data} games={games} />;
  // const round2 = <Round2 data={data} games={games} />;
  // const round3 = <Round3 data={data} games={games} />;
  // const round4 = <Round4 data={data} games={games} />;
  // const round5 = <Round5 data={data} games={games} />;
  let selectedRound = round0;

  switch (currentRound) {
    case '1': selectedRound = round1; break;
    // case "2": selectedRound = round2; break;
    // case "3": selectedRound = round3; break;
    // case "4": selectedRound = round4; break;
    // case "5": selectedRound = round5; break;
  }

  const round = parseInt(currentRound);
  const prevRound = round > 0 ? (round - 1).toString() : '0';
  const nextRound = round < 4 ? (round + 1).toString() : '4';
  const previousHidden = currentRound === '0' ? 'hidden' : '';
  const nextHidden = currentRound === '4' ? 'hidden' : '';

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setX(touch.clientX);
  };
  const handleTouchMove = (e) => {
    if (e.changedTouches && e.changedTouches.length) {
      const touch = e.changedTouches[0];
      setSwiping(true);
      setSwipeDiff(touch.clientX - x);
    }
  };
  const handleTouchEnd = () => {
    const absX = Math.abs(swipeDiff);
    if (swiping && !zooming && absX > minDistance) {
      if (swipeDiff > 0) {
        setCurrentRound(prevRound);
      } else {
        setCurrentRound(nextRound);
      }
      setSwiping(false);
      setSwipeDiff(0);
    }
  };


  const mobileView = (
    <div className="layout">
      <div
        className="swipe-container"
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
      >
        {selectedRound}
      </div>
      <div className="nav">
        <div className={`placeholder ${previousHidden}`}></div>
        <div className={`previous round-text ${previousHidden}`} onClick={() => { setCurrentRound(prevRound); }}>
          <img src="../assets/images/next.png" />
          <h3>Previous Round</h3>
        </div>
        <div className={`next round-text ${nextHidden}`} onClick={() => { setCurrentRound(nextRound); }}>
          <h3>Next Round</h3>
          <img src="../assets/images/next.png" />
        </div >
      </div >
    </div >
  );

  const desktopView = (
    <FullBracket data={data} games={games} />
  );

  const displayView = window.innerWidth > 400 ? desktopView : mobileView;

  return (
    <div>
      {displayView}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  games: PropTypes.arrayOf(PropTypes.object),
  currentRound: PropTypes.string,
  setCurrentRound: PropTypes.func
};
