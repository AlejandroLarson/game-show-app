import React from 'react';
import {categoryMap, getCategoryNameById} from './Helpers.js';

export default function GameScreen({currentScene, setCurrentSceneIndex, lives, 
    setLives, userCategoryChoice, setUserCategoryChoice, setGameState}){

    if(!currentScene) return <div>Loading...</div>

    return(
        <div className = "game-screen">
            <div className = "game-header">
                <h2>Detective Mittens</h2>
                <div className="lives-counter">Lives: {lives}</div>
            </div>
            
            <div className = "scene-info">
                <h3>{currentScene.title}</h3>
                <p>{currentScene.description}</p>
            </div>

            <div className = "category-choices">
                <p>Choose a trivia topic to proceed:</p>
                {currentScene.categories.map((id) => (
                    <button key = {id}
                    onClick = {()=> {
                        setUserCategoryChoice(id);
                        setGameState("trivia");
                        }}>
                        {getCategoryNameById(id)}
                    </button>
                ))}
            </div>

        </div>
    );
}