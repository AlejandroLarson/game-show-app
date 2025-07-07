import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './MainMenu'
import IntroScreen from './IntroScreen'

function App() {
  // Our game states will be menu, intro, game, trivia, feedback, gamewin, gamelose
  const [gameState, setGameState] = useState('menu');
  const [lives, setLives] = useState(3);
  const [difficulty, setDifficulty] = useState('easy');
  const [userCategoryChoice, setUserCategoryChoice] = useState(null);
  
  // Data is a question we fetch from trivia API
  const [data, setData] = useState([]);

  return (
    <>
    {gameState==="menu" && 
    (<MainMenu difficulty={difficulty} setDifficulty={setDifficulty} gameState = {gameState} setGameState={setGameState} />)}

    {gameState === "intro" &&
    (<IntroScreen gameState={gameState} setGameState={setGameState}/>)}
    </>

);
}

export default App;
