import React, { useState } from "react";
import History from "../History/History";
import Board from "./../Board/Board";
import styles from "./Game.module.css";
import { determineWinner } from "./helpers/determineWinner";

const Game = () => {
  const initialValues = Array(9).fill(null);
  const [history, setHistory] = useState([{ squares: initialValues }]);
  const [isXNext, setIsXNext] = useState(true);
  const [squareNumbers, setSquareNumbers] = useState([]);

  const handleClick = (squareNumber) => {
    const current = history[history.length - 1].squares;
    if (current[squareNumber]) return;
    else if (determineWinner(current)) return;

    const currentPlayer = isXNext ? "X" : "O";
    const updatedSquares = [...current];
    updatedSquares[squareNumber] = currentPlayer;
    
    setHistory([...history, { squares: updatedSquares }]);
    setIsXNext(!isXNext);
    setSquareNumbers([...squareNumbers, [currentPlayer, squareNumber]]);
  };

  const currentState = history[history.length - 1].squares;
  const winner = determineWinner(currentState);
  const winnerLines = winner[1] || null;
  const color = isXNext ? "text-grafit" : "text-pink";
  const coloredName = <span className={color}>{isXNext ? " X" : " O"}</span>;
  const isDraw = currentState.every((square) => square !== null);
  const info = winner ? (
    <h2 className={styles.info}>Player {winner[0]} won!</h2>
  ) : isDraw ? (
    <h2 className={styles.info}>Draw!</h2>
  ) : (
    <h2 className={styles.info}>Player {coloredName} is next!</h2>
  );

  return (
    <div className={styles.game}>
      <div className={styles.gameboard}>
        {info}
        <Board
          squares={currentState}
          handleClick={handleClick}
          isXNext={isXNext}
          winnerLines={winnerLines}
        />
      </div>

      <History squareNumbers={squareNumbers} />
    </div>
  );
};

export default Game;
