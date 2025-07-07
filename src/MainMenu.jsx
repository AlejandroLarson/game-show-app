import React from 'react';
import { Box, Container, Typography, Select, MenuItem, Button} from '@mui/material';

export default function MainMenu({difficulty, setDifficulty, setGameState }) {

  return (
    <>
      <div>
        <h1 style={{marginBottom: '10px' }}>Detective Mittens</h1>
        <h2 style={{marginBottom: '20px' }}>The Case of the Vanishing Statue</h2>
      </div>
      
      <div style={{margin: '30px 0' }}>
        <h5 style={{ marginBottom: '10px'}}>Select Difficulty:</h5>
        <select
          id="difficultySelect"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={{ 
            padding: '8px 12px', 
            borderRadius: '5px', 
            border: '1px solid #bdc3c7',
            fontSize: '16px'
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            setGameState('intro');
          }}
          style={{
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Start Game
        </button>
      </div>
    </>
  );
}