import React, { useState } from "react";
import Square from "./../Square/Square";
import styles from "./../Board/Board.module.css";

const Board = () => {
  const initialValues = Array(9).fill(null);
  const [squares, setSquares] = useState(initialValues);

  return (
    <div className={styles.board}>
      {
        squares.map((square, i) => (
          <Square value={square} key={i} />
        ))
      }
    </div>
  );
};

export default Board;
