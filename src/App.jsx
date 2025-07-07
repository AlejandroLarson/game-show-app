import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './MainMenu'
import IntroScreen from './IntroScreen'
import GameScreen from './GameScreen'
import scenes from './assets/scenes.js'

function App() {
  // Our game states will be menu, intro, game, trivia, feedback, gamewin, gamelose
  const [gameState, setGameState] = useState('menu');
  const [lives, setLives] = useState(2);
  const [difficulty, setDifficulty] = useState('easy');
  const [userCategoryChoice, setUserCategoryChoice] = useState(null);

  // Have a list of scenes to follow, index 0-5 inclusive and stored in the scenes.js file
const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
const [currentScene, setCurrentScene] = useState(scenes[currentSceneIndex]);

  
  // Data is a question we fetch from trivia API
  const [data, setData] = useState([]);

  return (
    <>
    {gameState=== "menu" && 
    (<MainMenu difficulty={difficulty} setDifficulty={setDifficulty} setGameState={setGameState} />)}

    {gameState === "intro" &&
    (<IntroScreen setGameState={setGameState}/>)}

    {gameState === "game" &&
    (<GameScreen currentScene = {currentScene} setCurrentSceneIndex={setCurrentSceneIndex}
     lives = {lives} setLives={setLives} userCategoryChoice={userCategoryChoice} setUserCategoryChoice={setUserCategoryChoice} />)}


    </>

);
}

export default App;
