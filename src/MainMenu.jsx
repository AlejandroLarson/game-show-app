import React, { useState } from 'react';
import { Box, Container, Typography, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';

export default function MainMenu({difficulty, setDifficulty, gameState, setGameState }) {

  return (
    <>
    <Container>
      <Typography variant='h1'>Detective Mittens</Typography>
      <Typography variant = 'h3'>The Case of the Vanishing Statue</Typography>
      <Typography variant = 'p'>A Trivia Adventure Game</Typography>
    </Container>
    <Box>
      <Typography variant='h5'>Select Difficulty</Typography>
      <Select
      id = "difficultySelect"
      value = {difficulty}
      onChange = {(e) => setDifficulty(e.target.value)}
      >
      <MenuItem value={'easy'}>Easy</MenuItem>
      <MenuItem value={'medium'}>Medium</MenuItem>
      <MenuItem value={'hard'}>Hard</MenuItem>
      </Select>
   </Box>
         <Button variant = "contained"
         onClick={() => {
          setGameState('game');

         }}>
        Start Game
      </Button>
    </>
  );
}