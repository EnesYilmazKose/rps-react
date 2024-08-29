import React , { useState } from 'react';
import { Routes , Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import Model from './components/Model';
import Play from './components/Play';

function App() {

  const [playerMove, setMyPlayerMove ] = useState("");
  const [playerScore, setPlayerScore ] = useState(0);

  return (
    <div>
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
      <Footer />
    </div>
  )
}

export default App;