import React from "react";
import styles from "./Square.module.css";

const Square = ({ value, onClick }) => {
  const color = value === "X" ? "text-grafit" : "text-pink";

  return (
    <div
      className={`${styles.square} ${color}`}
      onClick={() => onClick()}>
      {value}
    </div>
  );
};

export default Square;
