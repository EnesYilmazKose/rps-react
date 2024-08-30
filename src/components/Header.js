import React from 'react';

const Header = ({score}) => {
  return (
    <div className='header'>
      <h1>ROCK, PAPER, SCISSORS</h1>
      <h1>Score: {score}</h1>
    </div>
  )
}

export default Header;