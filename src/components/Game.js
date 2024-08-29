import React , { useState , useEffect} from 'react';

const Game = ({playerScore , playerMove , setPlayerScore}) => {

  const [challenger, setChallenger] = useState("");
  const [gameResult, setGameResult] = useState("");

  const newChallengerMove = () => {
    const moves = ["rock" , "paper" , "scissors"];
    setChallenger(moves[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newChallengerMove();
  } , []
  );


  return (
    <div className='game'>
      Player Move: {playerMove} <br />
      CPU Move: {challenger}
    </div>
  )
}

export default Game;