import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './MainMenu'

function App() {
  // Our game states will be menu, game, trivia, feedback, gamewin, gamelose
  const [gameState, setGameState] = useState('menu');
  const [lives, setLives] = useState(3);
  const [difficulty, setDifficulty] = useState('easy');
  const [userCategoryChoice, setUserCategoryChoice] = useState(null);
  
  const [data, setData] = useState([]);

  
  const startGame = (category) => {
    console.log("Starting game with category:", category);
    // Transition to your trivia screen here
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")


  };

  return (
    <>
    {gameState==="menu" && 
    (<MainMenu difficulty={difficulty} setDifficulty={setDifficulty} gameState = {gameState} setGameState={setGameState} />)}

    </>

);
}

export default App;
