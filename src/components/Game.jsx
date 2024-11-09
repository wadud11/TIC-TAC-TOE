import { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  // Initialize the board as an array of 9 nulls and set X as the starting player
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Calculate the winner based on board state
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    // If square already filled or there's a winner, ignore further clicks
    if (board[index] || winner) return;

    // Copy the board and set the clicked square to current player
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    // Toggle player for the next turn
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <div className="info">
        {winner ? (
          <p>Winner: {winner}</p>
        ) : board.every(Boolean) ? (
          <p>Its a Draw!</p>
        ) : (
          <p>Next Player: {isXNext ? "X" : "O"}</p>
        )}
        <button onClick={resetGame}>Restart Game</button>
        <div><b><i><u>DEVELOPER: ABDUL-WADUD</u></i></b></></div>
      </div>
    </div>
  );
};

export default TicTacToe;
