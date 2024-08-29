import React from 'react';
import { Link } from 'react-router-dom';

const Play = ({setMyPlayerMove}) => {

  const setPlayerMove = (e) => {
    setMyPlayerMove(e.target.dataset.id);
  };

  return (
    <div className='play'>
      <Link to="/game">
        <button data-id='paper' onClick={setPlayerMove}>
          Paper
        </button>
      </Link>
      <Link to="/game">
        <button data-id='scissors' onClick={setPlayerMove}>
          Scissors
        </button>
      </Link>
      <Link to="/game">
        <button data-id='rock' onClick={setPlayerMove}>
          Rock
        </button>
      </Link>
    </div>
  )
}

export default Play;