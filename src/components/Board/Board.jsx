import React from "react";
import Square from "./../Square/Square";
import styles from "./../Board/Board.module.css";

const Board = ({ squares, isXNext, handleClick, winnerLines }) => {
  return (
    <div className={styles.board}>
      {
        squares.map((square, i) => (
          <Square
            value={square}
            key={i}
            onClick={() => handleClick(i)}
            isXNext={isXNext}
            isWon={winnerLines && winnerLines.indexOf(i) !== -1}
          />
        ))
      }
    </div>
  );
};

export default Board;
