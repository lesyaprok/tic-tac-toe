import React from "react";
import styles from "./History.module.css";

const History = ({ squareNumbers }) => {
  const row = (num) => Math.floor(num / 3) + 1;
  const col = (num) => (num % 3) + 1;

  return (
    <ul className={styles.list}>
      {squareNumbers.length
        ? squareNumbers.map((number, index) => (
            <li key={index} className={styles.item}>
              Player {number[0]}: row: {row(number[1])}, col: {col(number[1])}
            </li>
          ))
        : null}
    </ul>
  );
};

export default History;
