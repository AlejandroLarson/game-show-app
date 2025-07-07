import { Button } from '@mui/material';
import React from 'react';

export default function IntroScreen({gameState, setGameState}) {
    return(
        <div className="intro-screen">
            <h2>Case: Statue of Bastet Stolen!</h2>
            <p>You are Detective Mittens, a world renown cat detective assigned to the most difficult cases. Last night, the priceless statue of Bastet was stolen from the Natural History Museum in London. Bastet, the Egyptian goddess of cats, is sacred to their society. The artifact was on loan and was supposed to be returned tomorrow. Find the statue before this erupts into a diplomatic nightmare.
            </p>
            <p> You will encounter obstacles and must overcome them by demonstrating mastery over a topic by answering a randomly selected trivia question. Answer correctly and move to the next step. Answer incorrectly and you lose a life. Reaching zero lives means the case goes cold and the game is over. Good luck!
            </p>
            <Button 
            variant = "contained"
            onClick={()=> setGameState('game')}
            >Continue</Button>
        </div>
    );
}