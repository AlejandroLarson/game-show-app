import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './MainMenu'
import IntroScreen from './IntroScreen'
import GameScreen from './GameScreen'
import scenes from './assets/scenes.js'
import TriviaScreen from './TriviaScreen.jsx'
import GameWinScreen from './GameWinScreen.jsx'
import GameLoseScreen from './GameLoseScreen.jsx'

function App() {
  // Our game states will be menu, intro, game, trivia, gamewin, gamelose
  const [gameState, setGameState] = useState('menu');
  const [lives, setLives] = useState(2);
  const [difficulty, setDifficulty] = useState('easy');
  const [userCategoryChoice, setUserCategoryChoice] = useState(null);

  // Have a list of scenes to follow, index 0-5 inclusive and stored in the scenes.js file
const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
const [currentScene, setCurrentScene] = useState(scenes[currentSceneIndex]);

  //this will run whenever the index changes which it will as we go through the scenes
  useEffect(() => {
    setCurrentScene(scenes[currentSceneIndex]);
  }, [currentSceneIndex]);

  return (
    <>
    {gameState=== "menu" && 
    (<MainMenu difficulty={difficulty} setDifficulty={setDifficulty} setGameState={setGameState} />)}

    {gameState === "intro" &&
    (<IntroScreen setGameState={setGameState}/>)}

    {gameState === "game" &&
    (<GameScreen currentScene = {currentScene} setCurrentSceneIndex={setCurrentSceneIndex}
     lives = {lives} setLives={setLives} userCategoryChoice={userCategoryChoice} 
     setUserCategoryChoice={setUserCategoryChoice} setGameState={setGameState}/>)}

     {gameState === "trivia" &&
     <TriviaScreen userCategoryChoice = {userCategoryChoice} difficulty={difficulty} setGameState={setGameState} 
     setLives = {setLives} lives = {lives} setCurrentSceneIndex={setCurrentSceneIndex} currentSceneIndex={currentSceneIndex}
     currentScene={currentScene}/> }

      {gameState === "gamewin" && 
      <GameWinScreen/>}

      {gameState === "gamelose" &&
      <GameLoseScreen setLives={setLives} setCurrentSceneIndex={setCurrentSceneIndex} setGameState={setGameState}/>}
    </>

);
}

export default App;
