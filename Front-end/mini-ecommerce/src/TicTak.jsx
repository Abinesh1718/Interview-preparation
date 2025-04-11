import React, { useState } from 'react';
import './App.css';

const initialBoard = Array(9).fill(null);

const TicTak = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {   
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const renderCell = (index) => (
    <div className="cell" onClick={() => handleClick(index)}>
      {board[index]}
    </div>
  );

  return (
    <div className="container">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((_, idx) => renderCell(idx))}
      </div>
      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Next Turn: ${isXNext ? 'X' : 'O'}`}
      </h2>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default TicTak;