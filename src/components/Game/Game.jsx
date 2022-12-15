import React, { useState } from "react";
import Board from "./../Board/Board";
import styles from "./Game.module.css";
import { determineWinner } from "./helpers/determineWinner";

const Game = () => {
  const initialValues = Array(9).fill(null);
  const [squares, setSquares] = useState(initialValues);
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (squareNumber) => {
    if (squares[squareNumber]) return;
    else if (determineWinner(squares)) return;

    const updatedSquares = [...squares];
    updatedSquares[squareNumber] = isXNext ? "X" : "O";
    setSquares(updatedSquares);
    setIsXNext(!isXNext);
  };

  const winner = determineWinner(squares);
  const winnerLines = winner[1] || null;
  const color = isXNext ? "text-grafit" : "text-pink";
  const coloredName = <span className={color}>{isXNext ? " X" : " O"}</span>;
  const isDraw = squares.every(square => square !== null);

  return (
    <div className={styles.game}>
      {winner ? (
        <h2 className={styles.info}>Player {winner[0]} won!</h2>
      ) : isDraw ? (
        <h2 className={styles.info}>Draw!</h2>
      ) : (
        <h2 className={styles.info}>Player {coloredName} is next!</h2>
      )}
      <Board
        squares={squares}
        handleClick={handleClick}
        isXNext={isXNext}
        winnerLines={winnerLines}
      />
    </div>
  );
};

export default Game;
