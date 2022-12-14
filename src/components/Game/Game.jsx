import React from "react";
import Board from "./../Board/Board";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <div className={styles.game}>
      <h2 className={styles.info}>Player X is next! </h2>
      <Board />
    </div>
  );
};

export default Game;
