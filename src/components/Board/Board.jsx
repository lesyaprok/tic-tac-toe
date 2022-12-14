import React, { useState } from "react";
import Square from "./../Square/Square";
import styles from "./../Board/Board.module.css";

const Board = () => {
  const initialValues = Array(9).fill(null);
  const [squares, setSquares] = useState(initialValues);
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (squareNumber) => {
    if (squares[squareNumber]) return;

    const updatedSquares = [...squares];
    updatedSquares[squareNumber] = isXNext ? "X" : "O";
    setSquares(updatedSquares);
    setIsXNext(!isXNext);
  };

  return (
    <div className={styles.board}>
      {
        squares.map((square, i) => (
          <Square
            value={square}
            key={i}
            onClick={() => handleClick(i)}
            isXNext={isXNext}
          />
        ))
      }
    </div>
  );
};

export default Board;
