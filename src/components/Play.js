import React from 'react';
import { Link } from 'react-router-dom';
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import rock from "../assets/rock.png";


const Play = ({setMyPlayerMove}) => {

  const setPlayerMove = (e) => {
    setMyPlayerMove(e.target.dataset.id);
  };

  return (
    <div className='play'>
      <Link to="/game">
        <button className="btn btn-warning" data-id='paper' onClick={setPlayerMove}>
          <img src={paper} alt='paper' data-id='paper'></img>
        </button>
      </Link>
      <Link to="/game">
        <button className="btn btn-warning" data-id='scissors' onClick={setPlayerMove}>
         <img src={scissors} alt='scissors' data-id='scissors'></img>
        </button>
      </Link>
      <Link to="/game">
        <button className="btn btn-warning" data-id='rock' onClick={setPlayerMove}>
          <img src={rock}alt='rock' data-id='rock'></img>
        </button>
      </Link>
    </div>
  )
}

export default Play;