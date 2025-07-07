import { Button } from '@mui/material';
import React from 'react';

export default function IntroScreen({setGameState}) {
    return(
        <div className="intro-screen">
            <h2>Case: Statue of Bastet Stolen!</h2>
            <p>You are Detective Mittens, a world renown cat detective assigned to the most difficult cases. Last night, the priceless statue of Bastet, the Egyptian goddess of cats, was stolen from the Natural History Museum in London. The statue is considered a sacred artifact. It was on loan and was supposed to be returned to its home country tomorrow. Find the statue before this erupts into a diplomatic nightmare.
            </p>
            <p> You will encounter obstacles in your investigation. Overcome them by demonstrating mastery of a topic and answering a trivia question. Answer correctly and move to the next step. Answer incorrectly and you lose a life. Reaching zero lives means the case goes cold and the game is over. Good luck!
            </p>
            <button
            onClick={()=> setGameState('game')}
            >Continue</button>
        </div>
    );
}