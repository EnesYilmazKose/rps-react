import React , { useState , useEffect } from 'react';
import { Link

 } from 'react-router-dom';
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

  const Result = () => {
    if(playerMove === "rock" && challenger === "scissors") {
      setGameResult("win");
      setPlayerScore(playerScore + 1);
    } else if(playerMove === "rock" && challenger === "paper") {
      setGameResult("lose");
      setPlayerScore(playerScore - 1);
    } else if(playerMove === "paper" && challenger === "rock") {
      setGameResult("win");
      setPlayerScore(playerScore + 1);
    } else if(playerMove === "paper" && challenger === "scissors") {
      setGameResult("lose");
      setPlayerScore(playerScore - 1);
    } else if(playerMove === "scissors" && challenger === "rock") {
      setGameResult("win");
      setPlayerScore(playerScore + 1);
    } else if(playerMove === "scissors" && challenger === "paper") {
      setGameResult("lose");
      setPlayerScore(playerScore - 1);
    } else {
      setGameResult("draw");
    }
  };

  useEffect(() => {
    Result();
  } , [challenger]
  );

  return (
    <div className='game'>
      Player: {playerMove} <br />
      Computer: {challenger} <br />
      Result: 
      {gameResult === "win" && <h3>You Won!</h3>}
      {gameResult === "lose" && <h3>You Lost!</h3>}
      {gameResult === "draw" && <h3>It's a Tie!</h3>}
      <Link to="/" onClick={() => setChallenger()}>
        <button className='btn btn-warning'>Play Again</button>
      </Link>
    </div>
  )
}

export default Game;