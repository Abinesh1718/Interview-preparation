import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const choices = ['rock', 'paper', 'scissors'];

function App() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const play = async (choice) => {
    setPlayerChoice(choice);
    try {
      const res = await axios.post('http://localhost:5000/play', { playerChoice: choice });
      setComputerChoice(res.data.computerChoice);
      setResult(res.data.result);
    } catch (error) {
      console.error('Error playing game:', error);
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      {result && (
        <div className="result">
          <p><strong>You chose:</strong> {playerChoice}</p>
          <p><strong>Computer chose:</strong> {computerChoice}</p>
          <h2>You {result}!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
