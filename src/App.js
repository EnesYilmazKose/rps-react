import React , { useState } from 'react';
import { Routes , Route } from "react-router-dom";

import Header from './components/Header';
import Game from './components/Game';
import Play from './components/Play';

function App() {

  const [playerMove, setMyPlayerMove ] = useState("");
  const [playerScore, setPlayerScore ] = useState(0);

  return (
    <>
      <div className='container'>
        <Header score={playerScore}/>
        <Routes>
          <Route path="/" element={
            <Play setMyPlayerMove={setMyPlayerMove}/>
            }/>
          <Route path="/game" element={
            <Game playerMove={playerMove} playerScore={playerScore} setPlayerScore={setPlayerScore}/>
            }/>          
        </Routes>
      </div>
    </>
  )
}

export default App;