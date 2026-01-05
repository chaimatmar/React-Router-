import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {players.map((el, index) => (
        <Player key={index} {...el} />
      ))}
    </div>
  );
};

export default PlayersList;